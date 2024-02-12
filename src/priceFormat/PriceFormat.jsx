

function PriceFormat({price}) {

   const CurrencyFormatter= new Intl.NumberFormat('en-IN',
   {style:'currency',
   currency:"INR",
   maximumFractionDigits:2}).format(price/100);
   
    return CurrencyFormatter;
    

}

export default PriceFormat
