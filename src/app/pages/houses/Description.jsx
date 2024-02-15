const Desc = ({title , text}) => {
    return ( 
        <div className="p-4 bg-[#FFF]  space-y-4">
            <h1 className="text-xl font-extrabold">{title}</h1>
            <p className="text-body-200 truncate">{text}</p>
        </div>
     );
}
 
export default Desc;