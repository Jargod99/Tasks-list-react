import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
const tasks = [
  { id: 1, content: "coś", done: false },
  { id: 2, content: "ktoś", done: true },
];
const hideTask = false;

function App() {
  return (
    <div >
      <Container>
        <Header
            title={"Lista zadaniowa"} />
        <Section
            title={"Dodaj nowe zadanie"}
            body={<Form />}
        />

        <Section
            title={"Lista zadań"}
            body={<Tasks tasks={tasks} hideTask={hideTask} />}
            extraHeaderComponent={<Buttons tasks={tasks} hideTask={hideTask} />} />
      </Container>
    </div>
  );
}

export default App;
