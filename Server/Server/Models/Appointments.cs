using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Appointments
    {
        [Key]

        public int Id { get; set; }

        public DateTime Data { get; set; }

        [ForeignKey("ApplicationUser")]
        public string UserId { get; set; }

        public string Message { get; set; } 

        public string Time { get; set; }

        public ApplicationUser ApplicationUser { get; set; }

    }
}
