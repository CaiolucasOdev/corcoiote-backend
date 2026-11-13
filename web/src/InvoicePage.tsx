import InvoiceTable from "./InvoiceTable.tsx";
import type { Invoice } from './invoiceType.ts';

interface invoicePageProps {
  datas: Invoice[];
}


export default function InvoicePage(props: invoicePageProps) {
    return <>
    <h1>Faturas</h1>
   
    <div className="panel">
     <InvoiceTable datas={props.datas} />
    </div>
     </>

}