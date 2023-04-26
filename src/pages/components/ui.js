function Container({ className, children }) {
  return <div className={`container ${className || ''}`}>{children}</div>;
}

function Space({ size }) {
  return <div style={{ height: size }} />;
}

function Flex({ variant, children }) {
  const justifyContent =
    variant === 'spaceBetween' ? 'space-between' : 'center';
  return <div style={{ display: 'flex', justifyContent }}>{children}</div>;
}

function FlexList({ gap, responsive, variant, children }) {
  const flexDirection = responsive ? 'column' : 'row';
  const alignItems = variant === 'stretch' ? 'stretch' : 'center';
  const listStyleType = 'none';
  const liStyle = { marginBottom: gap, marginRight: gap };
  return (
    <ul
      style={{
        listStyleType,
        display: 'flex',
        flexDirection,
        alignItems,
      }}
    >
      {React.Children.map(children, (child, index) => (
        <li key={index} style={liStyle}>
          {child}
        </li>
      ))}
    </ul>
  );
}

function NavLink({ to, children, ...props }) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

function Button({ to, children, ...props }) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

function InteractiveIcon({ title, onClick, children, ...props }) {
  return (
    <button type='button' title={title} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

function Nudge({ right, children }) {
  return <div style={{ marginRight: right }}>{children}</div>;
}

function VisuallyHidden({ children }) {
  return (
    <span style={{ position: 'absolute', clip: 'rect(0 0 0 0)' }}>
      {children}
    </span>
  );
}

function Div({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Link({ to, children }) {
  return <a href={to}>{children}</a>;
}
