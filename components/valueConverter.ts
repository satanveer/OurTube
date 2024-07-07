export default function valueConverters(num:any) {

    if (Math.abs(num) >= 1.0e+9) {
      return Math.floor(num/1.0e+9) + "B";
    } else if (Math.abs(num) >= 1.0e+6) {
      return  Math.floor(num/1.0e+6) + "M";
    } else if (Math.abs(num) >= 1.0e+3) {
      return  Math.floor(num/1.0e+3) + "K";
    } else {
      return num;
    }
  };




