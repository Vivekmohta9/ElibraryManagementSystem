import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HistoryService } from '../shared/history.service';
import { DocType, Discipline, Document} from '../shared/history.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor(private formbulider: FormBuilder, private documentService: HistoryService, private router:Router) { }

  dataSaved = false;
  documentForm: FormGroup;
  allDocuments: Observable<Document[]>;
  allDocTypes: Observable<DocType[]>;
  allDiscplines: Observable<Discipline[]>;
  documentIdUpdate = null;
  message = null;

  ngOnInit(): void {

    if(this.documentService.readSession.UserId==0)
    {
      alert("Kindly Login as admin first.");
      this.router.navigate(['/login']);
    }

    this.documentForm = this.formbulider.group({
      DocTitle:             ['', [Validators.required]],
      DocAuthors:           ['', [Validators.required]],
      DocDescription:       ['', [Validators.required, Validators.maxLength(200)]],
      DocPrice:             [null, [Validators.min(0)]],
      DocDateOfPublished :  [null, [Validators.required]],
      DocTypeId :           [null, [Validators.required]],
      DiscId :              [null, [Validators.required]]
    });
    this.loadallDocuments();
  }

  loadallDocuments() {
    this.allDocuments = this.documentService.getAllDocumnents();
    this.allDiscplines = this.documentService.getAllDisciplines();
    this.allDocTypes = this.documentService.getAllDoc_Types();
  }

  onFormSubmit()
  {
    this.dataSaved = false;
    const document = this.documentForm.value;
    this.CreateDocument(document);
    this.resetForm();
  }

  loadDocumentToEdit(id: number) {
    this.documentService.getDocumentById(id).subscribe(document => {
      this.message = null;
      this.dataSaved = false;
      this.documentIdUpdate = document.DocId;
      // tslint:disable-next-line: no-string-literal
      this.documentForm.controls['DocTitle'].setValue(document.DocTitle);
      // tslint:disable-next-line: no-string-literal
      this.documentForm.controls['DocAuthors'].setValue(document.DocAuthors);
      // tslint:disable-next-line: no-string-literal
      this.documentForm.controls['DocDescription'].setValue(document.DocDescription);
      // tslint:disable-next-line: no-string-literal
      this.documentForm.controls['DocPrice'].setValue(document.DocPrice);
      // tslint:disable-next-line: no-string-literal
      this.documentForm.controls['DocDateOfPublished'].setValue(document.DocDateOfPublished);
      // tslint:disable-next-line: no-string-literal
      this.documentForm.controls['DocTypeId'].setValue(document.DocTypeId);
      // tslint:disable-next-line: no-string-literal
      this.documentForm.controls['DiscId'].setValue(document.DiscId);
    });

  }
  CreateDocument(document: Document) {
    if (document.DocTypeId === 1)
    {
      document.DocPrice = 0;
    }
    if (this.documentIdUpdate == null) {
      this.documentService.postDocument(document).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Record Inserted Successfully';
          this.loadallDocuments();
          this.documentIdUpdate = null;
          this.documentForm.reset();
        }
      );
    } else {
      document.DocId = this.documentIdUpdate;
      this.documentService.putDocument(document).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Record Updated Successfully';
        this.loadallDocuments();
        this.documentIdUpdate = null;
        this.resetForm();
      });
    }
  }

  deleteDocument(id: number) {
    if (confirm('Are you sure you want to delete this ?')) {
    this.documentService.deleteDocumentById(id).subscribe(() => {
      this.dataSaved = true;
      this.message = 'Record Deleted Successfully';
      this.loadallDocuments();
      this.documentIdUpdate = null;
      this.resetForm();
    });
  }
}
  resetForm() {
    this.documentForm.reset();
    this.message = null;
    this.dataSaved = false;
  }
}
