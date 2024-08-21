function List({ children, style, className, ...props }) {
  return (
    <div className={className} style={{padding:'0.7rem',display:'grid',gridTemplateColumns:'10% 80% 10%',border:'1px solid black',borderRadius:'10px'}} {...props}>
      {children}
    </div>
  );
}

export default List;
