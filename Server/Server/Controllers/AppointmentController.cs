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
            DateTime date = newAppointment.Data;
            DateTime dateForTime = DateTime.Now;
            TimeSpan ts = new TimeSpan(dateForTime.Hour, dateForTime.Minute, dateForTime.Second);

            newAppointment.Data = date.Date + ts;
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
                    Id = ap.Id,
                    FirstName = ap.ApplicationUser.FirstName,
                    LastName = ap.ApplicationUser.LastName,
                    AppointmentDate = ap.Data.ToShortDateString(),
                    Message = ap.Message,
                    Time = ap.Time,
                }).ToListAsync();

            return appointment;
        }

        [HttpGet("{appointmentId}")]
        public async Task<AppointmentsDTO> GetConsultation([FromRoute] int appointmentId)
        {
            var appointment = _dbContext.Appointments.Where(u => u.Id == appointmentId)
                .Select(x => new AppointmentsDTO
                {
                    Id = x.Id,
                    FirstName = x.ApplicationUser.FirstName,
                    LastName = x.ApplicationUser.LastName,
                    AppointmentDate = x.Data.ToShortDateString(),
                    Message = x.Message,
                    Time = x.Time,
                }).SingleOrDefaultAsync();

            return await appointment;
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
        [Route("UpdateAppointment")]
        public void UpdateConsultation(Appointments appointmentSent)
        
        {
            DateTime date = appointmentSent.Data;
            DateTime dateForTime = DateTime.Now;
            TimeSpan ts = new TimeSpan(dateForTime.Hour, dateForTime.Minute, dateForTime.Second);
            appointmentSent.Data = date.Date + ts;

            var appointmentToUpdate = _dbContext.Appointments.Find(appointmentSent.Id);
            appointmentSent.UserId = appointmentToUpdate.UserId;
            _dbContext.Entry(appointmentToUpdate).CurrentValues.SetValues(appointmentSent);
            _dbContext.SaveChanges();
        }
    }
}
