


// func to find month diff btwn 2 dates
const monthDiff = (dateOne: Date , dateTwo: Date) : number => {
  let months;
  months = (dateTwo.getFullYear() - dateOne.getFullYear()) * 12;
  months -= dateOne.getMonth();
  months += dateTwo.getMonth();
  return months <= 0 ? 0 : months;
}

/**
 * Get start date and end date of current period relative to given contract bill start date and period
 *
 * @function
 * @param {Date} start_date - Start date 
 * @param {String} period - billing period for eg: annual,monthly etc
 * @return {undefined} undefined
 */

 export const DateRageInPeriod = (start_date: Date, period: string) => {

  const period_map = {
    'monthly': 1,
    'quarterly': 3,
    'half-yearly': 6,
    'annual': 12
  };

  // get current date
  const current_date = new Date();
  const diff_value = monthDiff(start_date, current_date);
  const factor = (diff_value % (period_map as any)[period]);

  let from_date;
  let to_date;

  switch (period) {
    case 'monthly':
      from_date = new Date(current_date.getFullYear(), current_date.getMonth(), 1);
      to_date = new Date(current_date.getFullYear(), current_date.getMonth() + 1, 0);
      break;
    case 'quarterly':
    case 'half-yearly':
    case 'annual':
      // factor  
      // 0 - month 1 ,
      // 1 - month 2 ,
      // 2 - month 3 ,

      from_date = new Date(current_date.getFullYear(), current_date.getMonth() - factor, 1);
      to_date = new Date(current_date.getFullYear(), current_date.getMonth() + period_map[period] - factor, 0);
      break;
  };

  return { start: from_date, end: to_date, month_order: factor + 1, month_count: diff_value };

};
