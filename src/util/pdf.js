export function htmlFile(pumpStatus) {
    return `
    <html>
<style>
TD {}

TD.TederType {
width: 30;
padding-bottom: 3px;
}

TD.TederTypeAmount {
padding-bottom: 3px;
}

TD.TederTypeAvgTicket {
padding-bottom: 3px;
}

TD.TederTypePer {

overflow: hidden;
padding-bottom: 3px;
}

TD.TederTypeCount {

padding-bottom: 3px;
}

TD.CardType {

padding-bottom: 3px;
}

TD.CardTypeAmount {

padding-bottom: 3px;
}

TD.CardTypeAvgTicket {
overflow: hidden;

text-indent: -9999;
padding-bottom: 3px;
}

TD.CardTypeTypePer {
overflow: hidden;

text-indent: -9999;
padding-bottom: 3px;
}

TD.CardTypeCount {
width: 30;
padding-bottom: 3px;
}

TD.CurrencyConversionFirstColumn {
width: 40%;
padding-bottom: 3px;
}

TD.CurrencyConversionSecondColumn {
width: 20%;
padding-bottom: 3px;
}

TD.CurrencyConversionThirdColumn {
width: 20%;
padding-bottom: 3px;
}

TD.CurrencyConversionFourColumn {
width: 20%;
padding-bottom: 3px;
}
</style>

<body>
<div style="width: 300px; font-family:Helvetica Neue; margin:auto; font-size:14px;">
<table style="width: 100%;">
    <tr>
        <td>
            <table
                style="font-family:Helvetica Neue; width:300px; font-size:14px; background-color:#FFFFFF;   ">
                <tr>
                    <td align="center" style="padding-top:10px;">Siya Petrol Pump</td>
                </tr>
                <tr>
                    <td align="center">L 104, Parishkar 2, Nr. Shahid Circle, KhoKhara</td>
                </tr>
                <tr>
                    <td align="center" style="padding-bottom:5px;">
                       deep@siyainfo.com - 9099822814</td>
                </tr>
                <tr>
                    <td align="center"
                        style="font-family:Helvetica Neue;background-color:#000000; font-size:14px;color:#FFFFFF; padding-top:2px;padding-bottom:2px;">
                        <strong>Shift Report</strong>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <tr>
        <td>
            <table style=" width:100%; font-size: 13px;">
                <tr>
                    <td><strong>Current Day</strong></td>
                    <td><strong>
                            <div align="right">Thursday </div>
                        </strong></td>
                </tr>
                <tr>
                    <td style="padding-bottom:10px;">
                        <div align="right"></div>
                    </td>
                </tr>
                <tr>
                    <td>Open by:</td>
                    <td>
                        <div align="right">siya </div>
                    </td>
                </tr>

                <tr>
                    <td class="TederType"><strong>
                            <FONT SIZE=2>Total</FONT>
                        </strong></td>
                    <td class="TederTypeAmount" align="right"><strong>
                            <FONT SIZE=2>₹769.00</FONT>
                        </strong></td>


                </tr>

            </table>
        </td>
    </tr>
    <tr>
        <td colspan="2">&nbsp;</td>

    </tr>
    <tr>
        <td>
            <table style="width:100%; margin:Auto" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td class="TederType"><strong>
                            <FONT SIZE=2>Tender Type</FONT>
                        </strong></td>
                    <td class="TederTypeAmount" align="right"><strong>
                            <FONT SIZE=2>Amount</FONT>
                        </strong></td>
                    <td class="TederTypeAvgTicket" align="right"><strong>
                            <FONT SIZE=2>Avg Ticket</FONT>
                        </strong></td>


                </tr>
                <tr>
                    <td class="TederType">
                        <FONT SIZE=2>Cash</FONT>
                    </td>
                    <td class="TederTypeAmount" align="right">
                        <FONT SIZE=2>₹0.00</FONT>
                    </td>
                    <td class="TederTypeAvgTicket" align="right">
                        <FONT SIZE=2>₹0.00</FONT>
                    </td>

                </tr>
                <tr>
                    <td class="TederType">
                        <FONT SIZE=2>Credit</FONT>
                    </td>
                    <td class="TederTypeAmount" align="right">
                        <FONT SIZE=2>₹0.00</FONT>
                    </td>
                    <td class="TederTypeAvgTicket" align="right">
                        <FONT SIZE=2>₹0.00</FONT>
                    </td>

                </tr>

            </table>
        </td>
    </tr>
    <tr>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>
            <table style="width:100%; margin:Auto" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td class="CurrencyConversionFirstColumn"><strong>
                            <FONT SIZE=2>Currency Rate</FONT>
                        </strong></td>
                    <td class="CurrencyConversionSecondColumn" align="middle"><strong>
                            <FONT SIZE=2>From Currency</FONT>
                        </strong></td>
                    <td class="CurrencyConversionThirdColumn" align="middle"><strong>
                            <FONT SIZE=2>To Currency</FONT>
                        </strong></td>
                    <td class="CurrencyConversionFourColumn" align="right">
                        <p><strong>
                                <FONT SIZE=2>Count</FONT>
                            </strong></p>
                    </td>
                </tr>
                <tr>
                    <td class="CardType"><strong>
                            <FONT SIZE=2>Total</FONT>
                        </strong></td>
                    <td class="CardTypeAmount" align="right"><strong>
                            <FONT SIZE=2>₹0.00</FONT>
                        </strong></td>
                    <td class="CardTypeAvgTicket" align="right"><strong>
                            <FONT SIZE=2>₹0.00</FONT>
                        </strong></td>
                    <td class="CardTypeTypePer" align="right">
                        <p><strong>
                                <FONT SIZE=2>0.00</FONT>
                            </strong></p>
                    </td>
                </tr>
                <tr>
                    <td style="padding-bottom:10px;" colspan="4">
                        <div align="right"></div>
                    </td>
                </tr>
            </table>
            </font>
        </td>
    </tr>

</table>
</td>
</tr>
    <tr>
        <td>&nbsp;</td>
    </tr>
<tr>
    <td>
        <table cellpadding="0" cellspacing="0" style=" width:100%; font-size: 13px;" border="0" width=100%>
            <tr>
                <td style="padding-bottom:1px;"><strong>Deposit</strong></style>
                </td>
                <td style="padding-bottom:5px;">
                    <div align="right"> </div>
                    </style>
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td>
        <table style="width:100%; margin:Auto" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td class="TaxType"><strong>
                        <FONT SIZE=2>Discount Type</FONT>
                    </strong></td>
                <td class="TaxSales" align="right"><strong>
                        <FONT SIZE=2>Sales</FONT>
                    </strong></td>
                <td class="TaxTax" align="right"><strong>
                        <FONT SIZE=2>Discount</FONT>
                    </strong></td>
                <td class="TaxCustCount" align="right">
                    <p><strong>
                            <FONT SIZE=2>Count</FONT>
                        </strong></p>
                </td>
                <td class="TaxCustCount" align="right">
                    <p><strong>
                            <FONT SIZE=2>Count</FONT>
                        </strong></p>
                </td>
            </tr>
            <tr>
                <td class="TaxType">
                    <FONT SIZE=2>Customized</FONT>
                </td>
                <td class="TaxSales" align="right">
                    <FONT SIZE=2>₹0.00</FONT>
                </td>
                <td class="TaxTax" align="right">
                    <FONT SIZE=2>₹0.00</FONT>
                </td>
                <td class="TaxCustCount" align="right">
                    <FONT SIZE=2>0</FONT>
                </td>
                <td class="TaxCustCount" align="right">
                    <FONT SIZE=2>0</FONT>
                </td>
            </tr>
        </table>

    </td>
</tr>

<tr>
    <td colspan="4">Deposit Collected:</td>
    <td>
        <div align="right">₹0.00 </div>
    </td>
</tr>
<tr>
    <td colspan="4">Deposit Returned:</td>
    <td>
        <div align="right">₹0.00 </div>
    </td>
</tr>
<tr>
    <td colspan="4" style="padding-bottom:10px;">Deposit Liability:</style>
    </td>
    <td style="padding-bottom:5px;">
        <div align="right">₹0.00 </div>
        </style>
    </td>
</tr>
<tr>
    <td colspan="5" style="padding-bottom:1px;">
        <div align="right"></div>
    </td>
</tr>
</table>
</font>
</td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td style="padding-bottom:10px;">
        <div align="right"></div>
    </td>
</tr>
</td>
<tr>
    <td>
        <table style="width:286px; margin:Auto" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td class="Group20FuelType"><strong>
                        <FONT SIZE=2>Fuel Type</FONT>
                    </strong></td>
                <td class="Group20Amount" align="right"><strong>
                        <FONT SIZE=2>Amount</FONT>
                    </strong></td>
                <td class="Group20Gallons" align="right"><strong>
                        <FONT SIZE=2>Liters</FONT>
                    </strong></td>
                <td class="Group20Count" align="right">
                    <p><strong>
                            <FONT SIZE=2>Cust. Count</FONT>
                        </strong></p>
                </td>
            </tr>
            <tr>
                <td class="Group20FuelType">
                    <FONT SIZE=2>Diesel</FONT>
                </td>
                <td class="Group20Amount" align="right">
                    <FONT SIZE=2>₹0.00</FONT>
                </td>
                <td class="Group20Gallons" align="right">
                    <FONT SIZE=2>0</FONT>
                </td>
                <td class="Group20Count" align="right">
                    <FONT SIZE=2>0</FONT>
                </td>
            </tr>
            <tr>
                <td class="Group20FuelType">
                    <FONT SIZE=2>Petrol</FONT>
                </td>
                <td class="Group20Amount" align="right">
                    <FONT SIZE=2>₹0.00</FONT>
                </td>
                <td class="Group20Gallons" align="right">
                    <FONT SIZE=2>0</FONT>
                </td>
                <td class="Group20Count" align="right">
                    <FONT SIZE=2>0</FONT>
                </td>
            </tr>
            <tr>
                <td class="Group20FuelType">
                    <FONT SIZE=2>LPG</FONT>
                </td>
                <td class="Group20Amount" align="right">
                    <FONT SIZE=2>₹0.00</FONT>
                </td>
                <td class="Group20Gallons" align="right">
                    <FONT SIZE=2>0</FONT>
                </td>
                <td class="Group20Count" align="right">
                    <FONT SIZE=2>0</FONT>
                </td>
            </tr>
            
            <tr>
                <td class="Group20FuelType">
                    <FONT SIZE=2><strong>Total</FONT></strong>
                </td>
                <td class="Group20Amount" align="right"><strong>
                        <FONT SIZE=2>₹${pumpStatus?.Total}</FONT>
                    </strong></td>
                <td class="Group20Gallons" align="right"><strong>
                        <FONT SIZE=2>0</FONT>
                    </strong></td>
                <td class="Group20Count" align="right"><strong>
                        <FONT SIZE=2>0</FONT>
                    </strong></td>
            </tr>
            <tr>
                <td style="padding-bottom:10px;">
                    <div align="right"></div>
                </td>
            </tr>
            <tr>
                <td style="padding-bottom:1px;">
                    <div align="right"></div>
                </td>
            </tr>
        </table>
        </font>
    </td>
</tr>
</table>
    `
}