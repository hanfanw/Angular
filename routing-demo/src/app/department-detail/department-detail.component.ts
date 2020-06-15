import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ClassGetter} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You selected department with id = {{ departmentId }}
    </h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['departments', nextId]);
  }

  gotoDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId, test: 'testValue'}]);
    // Note:  {id: selectedId, test: 'testValue' }  is optional route parameters
  }

}
