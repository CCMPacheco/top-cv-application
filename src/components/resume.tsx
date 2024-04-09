import Title from './title';
import Content from './content';

function Resume() {
  return (
    <main>
      <Title />
      <Content title="Experience" />
      <Content title="Education" />
    </main>
  );
}

export default Resume;
