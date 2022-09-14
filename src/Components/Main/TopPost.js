import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { BlogContent } from "../Data/Data"

const TopPost = (props) => {
    const { value1, value2, value3, value4, value5 } = useContext(BlogContent);
    const [kollywood] = value1;
    const [hollywood] = value2;
    const [technology] = value3;
    const [food] = value4;
    const [fitness] = value5;

    return (<>
        <div className='TopPosts' style={props.TopPost}>
            

            <div className='TopPostsText'>TOP POSTS <hr /></div>

            <div className="TopPostsBoxes" style={props.TopPost}>


                {kollywood.map((item, index) => index === 1 && (
                    <div className="Box" style={props.TopPost}>
                        <div className="BoxImg"><img src={item.ImageAsset} alt='Img' /></div>
                        <div className="BoxTitle">
                            <NavLink className="TopPostTitle" to={`/article/${item.id}/${item.CategoryName}`}><h3>{item.Title}</h3> </NavLink>
                        </div>
                        <div className="BoxDate">{item.CategoryName} / {item.PublishedDate}</div>
                    </div>
                ))}

                {hollywood.map((item, index) => index === 2 && (
                    <div className="Box" style={props.TopPost}>
                        <div className="BoxImg"><img src={item.ImageAsset} alt='Img' /></div>
                        <div className="BoxTitle">
                            <NavLink className="TopPostTitle" to={`/article/${item.id}/${item.CategoryName}`}><h3>{item.Title}</h3> </NavLink>
                        </div>
                        <div className="BoxDate">{item.CategoryName} / {item.PublishedDate}</div>
                    </div>
                ))}

                {technology.map((item, index) => index === 0 && (
                    <div className="Box" style={props.TopPost}>
                        <div className="BoxImg"><img src={item.ImageAsset} alt='Img' /></div>
                        <div className="BoxTitle">
                            <NavLink className="TopPostTitle" to={`/article/${item.id}/${item.CategoryName}`}><h3>{item.Title}</h3> </NavLink>
                        </div>
                        <div className="BoxDate">{item.CategoryName} / {item.PublishedDate}</div>
                    </div>
                ))}

                {food.map((item, index) => index === 3 && (
                    <div className="Box" style={props.TopPost}>
                        <div className="BoxImg"><img src={item.ImageAsset} alt='Img' /></div>
                        <div className="BoxTitle">
                            <NavLink className="TopPostTitle" to={`/article/${item.id}/${item.CategoryName}`}><h3>{item.Title}</h3> </NavLink>
                        </div>
                        <div className="BoxDate">{item.CategoryName} / {item.PublishedDate}</div>
                    </div>
                ))}

                {fitness.map((item, index) => index === 2 && (
                    <div className="Box" style={props.TopPost}>
                        <div className="BoxImg"><img src={item.ImageAsset} alt='Img' /></div>
                        <div className="BoxTitle">
                            <NavLink className="TopPostTitle" to={`/article/${item.id}/${item.CategoryName}`}><h3>{item.Title}</h3> </NavLink>
                        </div>
                        <div className="BoxDate">{item.CategoryName} / {item.PublishedDate}</div>
                    </div>
                ))}



            </div>

            <div className='Add'>
                <img src='https://i.pinimg.com/originals/f7/13/e3/f713e3c3ee29a4bf5d708daef2c81881.png' alt='Add'/>
            </div>


        </div>

    </>)
}

export default TopPost