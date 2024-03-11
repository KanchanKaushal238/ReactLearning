// export default function TabButton({label})
//  export default function TabButton({children, onSelect, isSelected})
export default function TabButton({children, isSelected, ...props})
{
    return (
      <li>
        <button className={ isSelected ? 'active' : ''} {...props}>{children}</button>
      </li>
    );
}