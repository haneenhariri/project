const Project = ({img}) => {
  return (
    <div className='px-3 project flex items-center justify-center'>
        <img className=' rounded-lg' src={img} alt="this is image" />
    </div>
  )
}
export default Project