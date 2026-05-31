import Student from "./student";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d47a1",
          marginBottom: "30px",
        }}
      >
        🎓 Student Management System
      </h1>

      <Student
        name="Satyansh Srivastava"
        course="B.Tech CSE"
        marks={95}
      />

      <Student
        name="Rahul Sharma"
        course="BCA"
        marks={78}
      />

      <Student
        name="Priya Singh"
        course="B.Sc IT"
        marks={35}
      />
    </div>
  );
}

export default App;