import { Icons } from '@/app/types/index';
import ShoppingCartIcon from '@/components/atoms/icons/shopping-cart';

// You could use this component to get custom SVGs as well as importing the names for icons from a icon library
type IconComponentProps = {
  type: Icons;
  state?: string;
};
// I think this component is getting a little complex with the whole state idea, although it's cool to use an svg like this to dynamically change it it's also fairly easy to just swap an svg over or use some css to add a dot or something to the icon

const IconComponent = ({ type, state }: IconComponentProps) => {
  switch (type) {
    case 'shopping-bag':
      return <ShoppingCartIcon active={!!state} />;
    case 'arrow':
      return <div>Arrow</div>;
    default:
      return null; // Or render a fallback icon for unknown types
  }
  // I would normally have one search that just fills in the name of the icon from a icon library or where the icons are hosted, we don't have that in this test, so I am using the two icons we have as an example but it's a bit overcooked
};

export default IconComponent;
