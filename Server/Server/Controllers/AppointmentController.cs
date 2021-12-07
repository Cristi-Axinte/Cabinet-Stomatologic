using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private ApplicationDbContext _dbContext;

        public AppointmentController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("Post")]
        public void PostConsultation(Appointments newAppointment)
        {
            _dbContext.Appointments.Add(newAppointment);
            _dbContext.SaveChanges();
        }

        [HttpGet]
        [Route("Get")]
        public async Task<List<AppointmentsDTO>> GetConsultations()
        {
            var appointment = await _dbContext.Appointments.Include(uc => uc.ApplicationUser)
                .Select(ap => new AppointmentsDTO
                {
                    Id = ap.ApplicationUser.Appointments.Id,
                    FirstName = ap.ApplicationUser.FirstName,
                    LastName = ap.ApplicationUser.LastName,
                    AppointmentDate = ap.ApplicationUser.Appointments.Data,
                    Message = ap.ApplicationUser.Appointments.Message,
                }).ToListAsync();

            return appointment;
        }

        [HttpDelete("{id:int}")]
        public void DeleteAppointment(int id)
        {
            var appointmentToDelete = _dbContext.Appointments.Find(id);
            if (appointmentToDelete != null)
            {
                _dbContext.Appointments.Remove(appointmentToDelete);
                _dbContext.SaveChanges();
            }
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateConsultation(Appointments appointmentSent)
        {
            var appointmentToUpdate = _dbContext.Appointments.Find(appointmentSent.Id);
            _dbContext.Entry(appointmentToUpdate).CurrentValues.SetValues(appointmentSent);
            _dbContext.SaveChanges();
        }
    }
}
