// import "./styles.css";
import "@sl-codeblaster/react-3d-animated-card";
// import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
// import Card from "react-animated-3d-card";
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
      <div className="flex mt-20 left-10 ml-6">
        {SubjectDetails?.map((subject) => (
            <div className="flex flex-wrap text-center mr-4">
              <div class="">
                <div className="border rounded-lg transform transition duration-500 hover:scale-110">
                  <img src={subject.image} alt={subject.name} className="h-40 w-64 rounded-xl"/>
                </div>
              </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default Subjects;
