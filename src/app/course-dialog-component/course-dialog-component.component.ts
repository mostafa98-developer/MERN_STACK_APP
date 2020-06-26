import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.css']
})
export class CourseDialogComponentComponent implements OnInit {

  form: FormGroup;
  description: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []],

    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
