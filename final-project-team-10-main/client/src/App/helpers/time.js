import moment from "moment";

//Convert the time to required format
const time = (date) => {
  let newDate = moment(date).format("DD MMM YYYY hh:mm a");
  return moment(newDate).fromNow();
};

export default time;
