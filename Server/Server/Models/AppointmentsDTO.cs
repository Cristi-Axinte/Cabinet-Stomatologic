using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class AppointmentsDTO
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string AppointmentDate { get; set; }

        public string Time { get; set; }

        public string Message { get; set; }
    }
}
