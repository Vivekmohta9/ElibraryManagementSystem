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
    public class Document_DetailsController : ApiController
    {
        private ELibraryMgmtSystemEntities db = new ELibraryMgmtSystemEntities();

        public Document_DetailsController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }

        // GET: api/Document_Details
        public IQueryable<Document_Details> GetDocument_Details()
        {
            return db.Document_Details;
        }

        // GET: api/Document_Details/5
        [ResponseType(typeof(Document_Details))]
        public IHttpActionResult GetDocument_Details(int id)
        {
            Document_Details document_Details = db.Document_Details.Find(id);
            if (document_Details == null)
            {
                return NotFound();
            }

            return Ok(document_Details);
        }

        // PUT: api/Document_Details/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDocument_Details(int id, Document_Details document_Details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != document_Details.DocId)
            {
                return BadRequest();
            }

            db.Entry(document_Details).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Document_DetailsExists(id))
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

        // POST: api/Document_Details
        [ResponseType(typeof(Document_Details))]
        public IHttpActionResult PostDocument_Details(Document_Details document_Details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Document_Details.Add(document_Details);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = document_Details.DocId }, document_Details);
        }

        // DELETE: api/Document_Details/5
        [ResponseType(typeof(Document_Details))]
        public IHttpActionResult DeleteDocument_Details(int id)
        {
            Document_Details document_Details = db.Document_Details.Find(id);
            if (document_Details == null)
            {
                return NotFound();
            }

            db.Document_Details.Remove(document_Details);
            db.SaveChanges();

            return Ok(document_Details);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Document_DetailsExists(int id)
        {
            return db.Document_Details.Count(e => e.DocId == id) > 0;
        }

        // GET: api/Document_Details/5
        //[HttpGet]
        [ResponseType(typeof(IQueryable<Document_Details>))]
        [Route("api/Document_DetailsByDiscId/{discId}")]
        public IHttpActionResult GetDocument_DetailsByDiscId(int discId)
        {
            var filterDocDetails = from dd in db.Document_Details
                                   where dd.DiscId == discId
                                   select dd;
            if (filterDocDetails == null)
            {
                return NotFound();
            }

            return Ok(filterDocDetails);
        }

        [HttpGet]
        [Route("api/AllDisciplines")]
        public IQueryable<Discipline> GetDisciplines()
        {
            return db.Disciplines;
        }

        [HttpGet]
        [Route("api/AllDocument_Types")]
        public IQueryable<Document_Types> GetDocument_Types()
        {
            return db.Document_Types;
        }
    }
}