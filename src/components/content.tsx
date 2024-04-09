function Content(props: { title: string }) {
  return (
    <div className="content">
      <h3>{props.title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}

export default Content;
