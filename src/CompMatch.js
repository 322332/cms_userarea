import { useSelector } from "react-redux";
import Components from "./component_creator";

export default function CompMatch(props) {
  const state = useSelector((state) => state.componentsInfo);

  return state.map((item) => (item.id === props.item ? Components(item) : ""));
}
