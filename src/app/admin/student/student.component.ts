import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  title:any;
  student:any={};
  userData:any = {};
  constructor(
    public dialog:MatDialog,
    public auth:AngularFireAuth,
    public db :AngularFirestore
  ) {

   }

  ngOnInit(): void {
    this.title='Student';
    this.auth.user.subscribe(user=>{
      this.userData = user;
      this.getstudent();
    })
  }

  loading:boolean | undefined;
  getstudent()
  {
    this.loading=true;
    this.db.collection('student',ref=>{
      return ref.where('uid','==',this.userData.uid);
    }).valueChanges({idField : 'id'}).subscribe(result=>{
      console.log(result);
      this.student=result;
      this.loading=false;
    },error=>{
      this.loading=false;
    });
  }


    StudentDetail(data: any,idx: number)
    {
      let dialog= this.dialog.open(StudentDetailComponent, {
          width: '400px',
          data: data,
      });
        dialog.afterClosed().subscribe(result=> {
        return;
        });
      }


      loadingDelete:any={};
      DeleteStudent(id: any,idx: any)
      {
        var conf=confirm('Delete item?');
        if(conf)
        {
          this.db.collection('student').doc(id).delete().then(result=>{
            this.student.splice(idx,1);
            this.loadingDelete[idx]=false;
          }).catch(error=>{
            this.loadingDelete[idx]=false;
            alert('Tidak dapat menghapus data');
          });
        }
      }
      
    }
