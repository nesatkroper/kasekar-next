"use client";

import {
  DataTable,
  createSelectColumn,
  createTextColumn,
  createCurrencyColumn,
  createActionsColumn,
  createBadgeColumn,
} from "@/components/base/data-table";
import type { Payment } from "./type";
import { data } from "./data";

export default function PaymentTable() {
  const columns = [
    createSelectColumn<Payment>(),
    createBadgeColumn<Payment>("status", "Status"),
    createTextColumn<Payment>("email", "Email", true),
    createCurrencyColumn<Payment>("amount", "Amount"),
    createActionsColumn<Payment>([
      {
        label: "Copy payment ID",
        action: (payment) => navigator.clipboard.writeText(payment.id),
      },
      {
        label: "View customer",
        action: (payment) => console.log("View customer", payment),
      },
      {
        label: "View payment details",
        action: (payment) => console.log("View payment details", payment),
      },
    ]),
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      filterColumn='email'
      filterPlaceholder='Filter emails...'
    />
  );
}
