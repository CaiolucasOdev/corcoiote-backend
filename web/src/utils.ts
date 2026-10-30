export function formatCurrency (value: number): string {
   const formatter =  Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',

    })

    return formatter.format(value/100);
}