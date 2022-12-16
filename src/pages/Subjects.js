// import "./styles.css";
import "@sl-codeblaster/react-3d-animated-card";
// import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";
import Python from "../public/images/python.jpg";
import Java from "../public/images/Java.jpg";
import CPP from "../public/images/cpp.jpg";

const Subjects = () => {
  const SubjectDetails = [
    {
      id: 1,
      name: "Python",
      image: Python,
    },
    {
      id: 2,
      name: "Java",
      image: Java,
    },
    {
      id: 3,
      name: "C++",
      image: CPP,
    },
  ];

  return (
    <>
      <div className="flex mt-20 left-10">
        {SubjectDetails?.map((subject) => (
          <div className="mr-4">
            <Card
              style={{
                // backgroundColor: "#202037",
                width: "300px",
                height: "250px",
                cursor: "pointer",
                outline: "cover",
              }}
            >
              <img
                src={subject.image}
                alt={subject.image}
                style={{
                  width: "300px",
                  height: "250px",
                }}
              />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Subjects;
