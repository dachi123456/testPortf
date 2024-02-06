import SkillCard from "./SkillCard"

const SkillCardList = () => {
  return (
    <div className="d-flex flex-wrap gap-1 mt-4">
        <SkillCard skill={'HTML'}/>
        <SkillCard skill={'CSS'}/>
        <SkillCard skill={'BootStrap'}/>
        <SkillCard skill={'JavaScript'}/>
        <SkillCard skill={'TypeScript'}/>
        <SkillCard skill={'REACT'}/>
        <SkillCard skill={'GITHUB'}/>
        <SkillCard skill={'C++ (basics)'}/>
    </div>
  )
}

export default SkillCardList