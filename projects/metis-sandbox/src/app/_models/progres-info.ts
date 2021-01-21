/** Converted data **/
export interface PercentageClassInfo {
  pct: number;
  className: string;
}

/** Raw data **/

export interface ProgressByStep {
  //errors	[...]
  fail: number;
  //step:	Array<>
  success: number;
  total: number;
  warn: number;
}

export interface DatasetInfo {
  //portal-preview:	string,
  //portal-publish:	string,
  'processed-records': number;
  //progress-by-step	[ProgressByStep{

  'progress-by-step': Array<ProgressByStep>;

  //errors	[...]
  //fail	integer($int64)
  //step	stringEnum:
  //Array [ 10 ]
  //success	integer($int64)
  //total	integer($int64)
  //warn	integer($int64)
  //}]
  //status	stringEnum:
  //Array [ 2 ]
  'total-records': number;
}
