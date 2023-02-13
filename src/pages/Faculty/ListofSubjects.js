import "@sl-codeblaster/react-3d-animated-card";
import Python from "../../assets/img/python.jpg";
import Java from "../../assets/img/Java.jpg";
import CPP from "../../assets/img/cpp.jpg";
import C from "../../assets/img/c.jpg"
import { NavLink, useLocation } from "react-router-dom";

const Subjects = () => {
  // const { type } = useParams();

  const location = useLocation();
  console.log("subjects", location);
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
    {
      id: 4,
      name: "C",
      image: C,
    }
  ];

  return (
    <>
      <div className="mt-8">
      <div className="flex items-center justify-center">
        {SubjectDetails?.map((subject) => (
          <div className="text-center mr-4">
            <div className="border rounded-lg transform transition duration-500 hover:scale-110">
              <NavLink
                to={`${subject.name.toLowerCase()}`}
                key={subject.name}
                state={
                  {
                    subjectName: subject.name,
                  }
                }
              >
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="h-40 w-64 rounded-xl"
                />
                <div className="text-center">
                  <h1 className="text-2xl font-bold">{subject.name}</h1>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Subjects;
