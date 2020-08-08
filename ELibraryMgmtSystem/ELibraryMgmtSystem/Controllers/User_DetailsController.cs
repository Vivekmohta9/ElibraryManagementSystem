using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ELibraryMgmtSystem.Models;

namespace ELibraryMgmtSystem.Controllers
{
    public class User_DetailsController : ApiController
    {
        private ELibraryMgmtSystemEntities db = new ELibraryMgmtSystemEntities();

        // GET: api/User_Details
        public IQueryable<User_Details> GetUser_Details()
        {
            return db.User_Details;
        }

        // GET: api/User_Details/5
        [ResponseType(typeof(User_Details))]
        public IHttpActionResult GetUser_Details(int id)
        {
            User_Details user_Details = db.User_Details.Find(id);
            if (user_Details == null)
            {
                return NotFound();
            }

            return Ok(user_Details);
        }

        // PUT: api/User_Details/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser_Details(int id, User_Details user_Details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user_Details.UserId)
            {
                return BadRequest();
            }

            db.Entry(user_Details).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!User_DetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/User_Details
        [ResponseType(typeof(User_Details))]
        public IHttpActionResult PostUser_Details(User_Details user_Details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.User_Details.Add(user_Details);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (User_DetailsExists(user_Details.UserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = user_Details.UserId }, user_Details);
        }

        // DELETE: api/User_Details/5
        [ResponseType(typeof(User_Details))]
        public IHttpActionResult DeleteUser_Details(string id)
        {
            User_Details user_Details = db.User_Details.Find(id);
            if (user_Details == null)
            {
                return NotFound();
            }

            db.User_Details.Remove(user_Details);
            db.SaveChanges();

            return Ok(user_Details);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool User_DetailsExists(int id)
        {
            return db.User_Details.Count(e => e.UserId == id) > 0;
        }


        // POST: api/Login
        [Route("api/Login")]
        [ResponseType(typeof(User_Details))]
        public IHttpActionResult PostLogin(Login objLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var query = from loginUser in db.User_Details
                        where objLogin.UserEmail == loginUser.UserEmail && objLogin.UserPassword == loginUser.UserPassword
                        select loginUser;
            Console.WriteLine(query);
            if (query == null)
            {
                return NotFound();
            }
            return Ok(query);
        }
    }
}