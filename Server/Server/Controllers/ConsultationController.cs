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
    public class ConsultationController : ControllerBase
    {
        private ApplicationDbContext _dbContext;

        public ConsultationController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("Post")]
        public void PostConsultation(Consultations newConsultation)
        {
            _dbContext.Consultations.Add(newConsultation);
            _dbContext.SaveChanges();
        }

        [HttpGet]
        [Route("Get")]
        public async Task<List<ConsultationDTO>> GetConsultations()
        {
            var consultations = _dbContext.Consultations.Select(c => new ConsultationDTO
            {
                Id = c.Id,
                ConsultationType = c.ConsultationType,
                Price = c.Price
            });

            return await consultations.ToListAsync();
        }

        [HttpDelete("{id:int}")]
        public void DeleteConsultation(int id)
        {
            var consultationToDelete = _dbContext.Consultations.Find(id);
            if(consultationToDelete != null)
            {
                _dbContext.Consultations.Remove(consultationToDelete);
                _dbContext.SaveChanges();
            }
        }
        
        [HttpPost]
        [Route("Update")]
        public void UpdateConsultation(ConsultationDTO consultationSent)
        {
            var consultation = _dbContext.Consultations.Find(consultationSent.Id);
            _dbContext.Entry(consultation).CurrentValues.SetValues(consultationSent);
            _dbContext.SaveChanges();
        }
    }
}
