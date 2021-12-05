using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Consultations
    {
        [Key]
        public int Id { get; set; }

        public string ConsultationType { get; set; }

        public int Price { get; set; }
    }
}
