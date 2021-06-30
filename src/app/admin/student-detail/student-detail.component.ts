import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  userData: any = {};
  constructor(
    public dialogRef: MatDialogRef<StudentDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public db: AngularFirestore,
    public auth:AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe(result=>{
      this.userData=result;
    });
  }

  loading:boolean | undefined
  saveData()
  {
    this.loading=true;
    if(this.data.id == undefined)
    {
      //simpan ke firebase
      let doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;
      this.db.collection('student').doc(doc).set(this.data).then(result=>{
        this.dialogRef.close(this.data);
        this.loading=false;
      }).catch(er=>{
        console.log(er);
        this.loading=false;
        alert('Tidak Dapat Menyimpan Data');
      })
    
    }else{
      this.db.collection('student/').doc(this.data.id).update(this.data).then(result=>{
        this.dialogRef.close(this.data);
        this.loading=false;
      }).catch(er=>{
        console.log(er);
        this.loading=false;
        alert('Tidak Dapat Mengupdate Data');
      })
    }
  }
}