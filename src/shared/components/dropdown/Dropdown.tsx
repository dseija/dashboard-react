import { getRandomKey } from '../../utils/generalHelper';
import { IDropdownItem } from './dropdownModel';

interface IDropdownProps {
  id: string;
  key?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  items: IDropdownItem[];
  selectedItem?: number | string;
}

function Dropdown(props: IDropdownProps) {
  const componentKey = getRandomKey('Dropdown');

  return (
    <select
      key={props.key || componentKey}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.selectedItem}
    >
      {!props.items.length && <option>No Data</option>}
      {props.items.map((item: IDropdownItem) => (
        <option key={`${componentKey}_${item.value}`} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
