import './ProjectCards.css'
import Card from '../UI/Card/Card'

const projects = [
  {
    id: 1,
    title: "Movie App",
    description: "A beautiful MOVIE APP using React and CSS.",
    image: "/projects/movie.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://movieappea.netlify.app/",
    githubUrl: "https://github.com/balausa9/movei",
  },
  {
    id: 2,
    title: "Todo Manager App",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/todoApp.jpg",
    tags: ["React", "JavaScript", "Netlify"],
    demoUrl: "https://todossd.netlify.app/",
    githubUrl: "https://github.com/balausa9/todoApp" ,
  },
  {
    id: 3,
    title: "Tynda Music App",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/music.jpg",
    tags: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://balausa9.github.io/music/",
    githubUrl: "https://github.com/balausa9/music ",
  },
];

const ProjectCards = () => {
    return (
        <div className='project_cards'>
            {projects.map(el => (
                <Card project={el} />
            ))}
        </div>
    )
}

export default ProjectCards