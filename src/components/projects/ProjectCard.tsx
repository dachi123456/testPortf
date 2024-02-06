import MyButton from "../button/MyButton"

const ProjectCard = ({img,name,shortDescr}) => {
  return (
    <div className="row p-4 row-div">
        <div className="col-12 col-md-6">
            <img src={img} alt="" className="w-100"/>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <h5 className="mt-4">{name}</h5>
            <p className="text-center">
                {shortDescr}
            </p>
            <MyButton text={'see more'} width={'7rem'} padding="0.7rem"/>
        </div>
    </div>
  )
}

export default ProjectCard