import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString, formatString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, formatString)}</time>;
}
