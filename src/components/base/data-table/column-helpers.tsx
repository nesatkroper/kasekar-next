"use client";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Helper function to create a selection column
export function createSelectColumn<T>(): ColumnDef<T> {
  return {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  };
}

// Helper function to create a text column with optional sorting
export function createTextColumn<T>(
  accessorKey: keyof T,
  header: string,
  enableSorting = false
): ColumnDef<T> {
  return {
    accessorKey: accessorKey as string,
    header: ({ column }) => {
      if (enableSorting) {
        return (
          <Button
            variant='ghost'
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }>
            {header}
            <ArrowUpDown className='ml-2 h-4 w-4' />
          </Button>
        );
      }
      return header;
    },
    cell: ({ row }) => <div>{row.getValue(accessorKey as string)}</div>,
  };
}

// Helper function to create a currency column
export function createCurrencyColumn<T>(
  accessorKey: keyof T,
  header: string,
  currency = "USD"
): ColumnDef<T> {
  return {
    accessorKey: accessorKey as string,
    header: () => <div className='text-right'>{header}</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue(accessorKey as string));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
      }).format(amount);

      return <div className='text-right font-medium'>{formatted}</div>;
    },
  };
}

// Helper function to create an actions column
export interface ActionItem<T> {
  label: string;
  action: (row: T) => void;
}

export function createActionsColumn<T>(
  actions: ActionItem<T>[],
  menuLabel = "Actions"
): ColumnDef<T> {
  return {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const item = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {actions.map((actionItem, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => actionItem.action(item)}>
                {actionItem.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  };
}

// Helper function to create a badge/status column
export function createBadgeColumn<T>(
  accessorKey: keyof T,
  header: string
): ColumnDef<T> {
  return {
    accessorKey: accessorKey as string,
    header: header,
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue(accessorKey as string)}</div>
    ),
  };
}
