import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Account } from '../../model/Account';

@Component({
  selector: 'app-check-account-dialog',
  templateUrl: './check-account.dialog.html'
})
export class CheckAccountDialogComponent  {

  firmaAdi: FormControl;
  firmaTipi: FormControl;
  kimlikNo: FormControl;
  dyeri: FormControl;
  vdepartmani: FormControl;
  firmaddr: FormControl;
  firmcontact: FormControl;
  sektor: FormControl;
  sehir: FormControl;
  ilce: FormControl;
  telno: FormControl;
  fax: FormControl;
  email_addr: FormControl;

  AccountDialogType = AccountDialogType;

  constructor(
    public dialogRef: MatDialogRef<CheckAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AccountDialogObject) {
        if (data.type == AccountDialogType.Delete)
            data.text = "Hesap kaydı silinecektir. Devam etmek istiyor musunuz?";
        else {
            this.firmaAdi = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.firmaAdi , [Validators.required]);
            this.firmaTipi = new FormControl(data.type == AccountDialogType.Create ? 'Tüzel' : data.account.firmaTipi , [Validators.required]);
            this.kimlikNo = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.kimlikNo , [Validators.required]);
            this.dyeri = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.dyeri);
            this.vdepartmani = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.vdepartmani , [Validators.required]);
            this.firmaddr = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.firmaddr);
            this.firmcontact = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.firmcontact);
            this.sektor = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.sektor);
            this.sehir = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.sehir , [Validators.required]);
            this.ilce = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.ilce , [Validators.required]);
            this.telno = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.telno , [Validators.required]);
            this.fax = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.fax);
            this.email_addr = new FormControl(data.type == AccountDialogType.Create ? '' : data.account.email_addr , [Validators.required]);
        }
    }
}

export interface AccountDialogObject {
    account: Account;
    text: string;
    type: AccountDialogType;
}

export enum AccountDialogType {
    Create,
    Edit,
    Delete
}
