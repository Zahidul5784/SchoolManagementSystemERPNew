import { OtherPaymentDetail } from "./OtherPaymentDetail";
import { Student } from "./student";

export class OthersPayment {
  othersPaymentId!: number;
  studentId!: number;
  totalAmount!: number;
  amountPaid!: number;
  amountRemaining!: number;
  paymentDate!: Date;
  student!: Student; 
  fees: { feeId: number }[] = [];
  otherPaymentDetails: OtherPaymentDetail[]=[];
}
