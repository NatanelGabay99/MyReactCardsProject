import ChildComponent from "./ChildComponent";

export default function FatherComponent() {
  return (
    <div>
      <ChildComponent data={"Natanel"}>Dabush</ChildComponent>
    </div>
  );
}