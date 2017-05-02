export default function makeChange({price, amountGiven}) {
  let denomination = {
    quartersAmt:25,
    dimesAmt:10,
    nickelsAmt:5,
    penniesAmt:1,
    initialChange:0,
    change:0
  }

  let changeGiven = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  {
    denomination.initialChange = denomination.change = amountGiven - price
    if( denomination.change % denomination.quartersAmt !== 0 ) {
      changeGiven.quarters = Math.floor(denomination.change/denomination.quartersAmt)
      denomination.change -= ( denomination.quartersAmt * changeGiven.quarters )
    } else if (denomination.change % denomination.quartersAmt === 0) {
      changeGiven.quarters = denomination.change/denomination.quartersAmt
      denomination.change -= ( denomination.quartersAmt * changeGiven.quarters )
      return changeGiven
    }

    if( denomination.change % denomination.dimesAmt !== 0 ) {
      changeGiven.dimes = Math.floor(denomination.change/denomination.dimesAmt)
      denomination.change -= ( denomination.dimesAmt * changeGiven.dimes )
    } else if (denomination.change % denomination.dimesAmt === 0) {
      changeGiven.dimes = Math.floor(denomination.change/denomination.dimesAmt)
      denomination.change -= ( denomination.dimesAmt * changeGiven.dimes )
      return changeGiven
    }

    if( denomination.change % denomination.nickelsAmt !== 0 ) {
      changeGiven.nickels = Math.floor(denomination.change/denomination.nickelsAmt)
      denomination.change -= ( denomination.nickelsAmt * changeGiven.nickels )
    } else if (denomination.change % denomination.nickelsAmt === 0) {
      changeGiven.nickels = Math.floor(denomination.change/denomination.nickelsAmt)
      denomination.change -= ( denomination.nickelsAmt * changeGiven.nickels )
      return changeGiven
    }


    if( denomination.change % denomination.penniesAmt !== 0 ) {
      changeGiven.pennies = Math.floor(denomination.change/denomination.penniesAmt)
      denomination.change -= ( denomination.penniesAmt * changeGiven.pennies )
    } else if (denomination.change % denomination.penniesAmt === 0) {
      changeGiven.pennies = Math.floor(denomination.change/denomination.penniesAmt)
      denomination.change -= ( denomination.penniesAmt * changeGiven.pennies )
      return changeGiven
    }
  }
}
