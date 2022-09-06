import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/Shared/intern.service';

import { NgForm } from '@angular/forms';
import { InternDetail } from 'src/app/models/intern-detail.model';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {

  constructor(public service:InternService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.internId == 0) {
      this.insertrecord(form);
    }
    else {
      this.updaterecord(form);
    }
  }

  insertrecord(form: NgForm) {
    this.service.postPaymetndetail().subscribe(
      res => {

        this.service.refreshlist();
        alert("Submitted Succesfully");
        //this.tostr.success('Submitted successfully', 'Department Detail register');
        this.resetform(form);

      },
      err => { console.log(err) }
    );
  }

  updaterecord(form: NgForm) {
    this.service.putPaymetndetail().subscribe(
      res => {

        this.service.refreshlist();
        alert("Updated Successfully");
        //this.tostr.info('Updated successfully', 'Department Detail Register');
        this.resetform(form);

      },
      err => { console.log(err) }
    );

  }

  resetform(form: NgForm) {
    form.form.reset();
    this.service.formData = new InternDetail();
  }

  populateform(pd: InternDetail) {
    this.service.formData = Object.assign({}, pd);

  }
  onDelete(id: number) {
    if (confirm("Are sure you want to delete this record ?"))
      this.service.deletePaymetndetail(id).subscribe(
        res => {
          this.service.refreshlist();

          //this.tostr.error("Deleted Succussfully", "Department Detail Register")
        },
        err => { console.log(err) }
      )
  }


}
