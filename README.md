# date-range-in-period ( DRIP )

A JavaScript library for finding start date, end date, month order and month count of current period relative to given start date and period

## Given period in months

* monthly
* quarterly
* half-yearly
* annual

# Getting Started

Installation

```
npm install --save date-range-in-period
```



## Usage

You need to import skeleton and theme styles first.


### `DRIP library`
```javascript
import { DateRageInPeriod } from 'date-range-in-period';


const bill_start_date = new Date('03-24-2021');

console.log(DateRageInPeriod(bill_start_date, 'annual'));

/* 
   OUTPUT
{
  start : "Tue Mar 01 2022 00:00:00 GMT+0530 (India Standard Time)",
  end : "Tue Feb 28 2023 00:00:00 GMT+0530 (India Standard Time)",
  month_order : "7", 
  month_count : "18"
   
} 

*/

```

## Input

* start_date - For example Billing Start date 
* period - Given period in months eg: annual


## Output

* start - Start date of current period/term 
* end - End date of current period/term 
* month_order - Order of month in current period/term
* month_count - No of months past with respect to current date relative to given start date
