import { Invoice } from "./invoiceType.tsx"

import {formatCurrency} from "./utils.ts"

interface InvoiceRowProps {

    data: Invoice;
}

export default function InvoiceRow ({data}: InvoiceRowProps){

    const {customer, amount, issueDate, dueDate, status} = data; //forma desestruturada de data

    return <tr>
        <td>{customer.name}</td>
        <td>{formatCurrency(amount)}</td>
        <td>{issueDate}</td>
        <td>{dueDate}</td>
        <td>{status}</td>
    </tr>
}