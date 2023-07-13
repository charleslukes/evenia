const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


export const monthAndDay = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth();
    const day = date.getDate()

    return `${monthList[month]} ${day}`
}


export const dateRange = (dateString: string) => {
    if(dateString) {
        const str = new Date(dateString).toString();
        const regex = /^.{4}(.{20})/;
        const res = regex.exec(str)![1];
        return res;
    }   
  };