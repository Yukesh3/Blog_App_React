import { useContext, useState } from "react"
import { BlogContent } from "../Data/Data"
import { NavLink, Link } from 'react-router-dom'
import TopPost from "../Main/TopPost"



const Kollywood = (props) => {
    const [showMore, setShowMore] = useState(true)
    const { value1 } = useContext(BlogContent)
    const [kollywood] = value1

    return (<>

        <div>

            <div className='MainBox'>

                {
                    showMore ?

                        kollywood.map((item, index) => (
                            <div className='News' key={index}>
                                <div className='imgBox'><img src={item.ImageAsset} alt='BlogImg' /></div>
                                <div className='TitleBox'>
                                    <Link to={`/article/${item.id}/${item.CategoryName}`} className='h4'><h4>{item.Title}</h4> </Link  >
                                </div>
                                <div className='ContentBox'>{item.BlogContent}</div>
                                <div className='DateBox'>{item.CategoryName} / {item.PublishedDate}</div>

                            </div>
                        )) :

                        kollywood.map((item, index) => index !== 3 && index !== 4 && (
                            <div className='News' key={index}>
                                <div className='imgBox'><img src={item.ImageAsset} alt='BlogImg' /></div>
                                <div className='TitleBox'>
                                    <NavLink to={`/article/${item.id}/${item.CategoryName}`} className='h4'><h4>{item.Title}</h4> </NavLink >
                                </div>
                                <div className='ContentBox'>{item.BlogContent}</div>
                                <div className='DateBox'>{item.CategoryName} / {item.PublishedDate}</div>
                            </div>
                        ))

                }

                <button onClick={(e) => setShowMore(e => !e)} className='showML'>{showMore ? '⬆️ Show Less' : '⬇️ Show More'}</button>
                <Link to='/' className='GoHome'>🏠 Home</Link>

            </div>

            <TopPost TopPost={props.style}/>

        </div>

    </>)
}

export default Kollywood

