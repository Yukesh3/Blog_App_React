import {Link, NavLink} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import {BlogContent} from '../Data/Data'
import TopPost from './TopPost'

const Home=(props)=>{
    const [GoTop, setGoTop] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    },[GoTop]);

    const { value1, value2, value3, value4, value5 } = useContext(BlogContent)
    const [kollywood] = value1;
    const [hollywood] = value2;
    const [technology] = value3;
    const [food] = value4;
    const [fitness] = value5;

return(<>

{/* -------------------------------------------------------------- Home Top -------------------------------------------------------------- */}

    <div className='HomeTop'>

        {kollywood.map((item,index)=> index ===0 && (
         <div className='HomeTopImg One'  style={{ backgroundImage: `url(${item.ImageAsset}) `}}>
             <div className='HomeTopText' >{item.CategoryName} / {item.PublishedDate}</div>
         </div>
        ))}
 
        {hollywood.map((item,index)=> index ===0 && (
         <div className='HomeTopImg Two'  style={{ backgroundImage: `url(${item.ImageAsset}) `}}>
             <div className='HomeTopText' >{item.CategoryName} / {item.PublishedDate}</div>
         </div>
        ))}

        {technology.map((item,index)=> index ===0 && (
         <div className='HomeTopImg Three'  style={{ backgroundImage: `url(${item.ImageAsset}) `}}>
             <div className='HomeTopText' >{item.CategoryName} / {item.PublishedDate}</div>
         </div>
        ))}

    </div>


{/* ----------------------------------------------------------- Home Latest ----------------------------------------------------------- */}

     <div className='HomeLatest'>

      <div className='TheLatest'>THE LATEST</div>
      <hr className='HomeHr'/>

      <div className='TheLatestBoxes'>

            {food.map((item,index)=> index === 0 && (
                <div className='TheLatestContentBox'>
                    <div><img src={item.ImageAsset} alt='img'/></div>
                    <div className='LatestText'>
                        <NavLink className="LatestTitle" to={`/article/${item.id}/${item.CategoryName}`}>{item.Title} :</NavLink>
                    </div>
                    <div className='LatestText LatestContent'>{item.BlogContent}</div>
                    <div className='LatestText LatestDate'>{item.CategoryName} / {item.PublishedDate}</div>
                </div>
            ))}


            {fitness.map((item,index)=> index === 3 && (
                <div className='TheLatestContentBox'>
                    <div><img src={item.ImageAsset} alt='img'/></div>
                    <div className='LatestText' style={{backgroundColor:'#0e0b35e3'}}>
                        <NavLink className="LatestTitle" to={`/article/${item.id}/${item.CategoryName}`}>{item.Title} :</NavLink>
                    </div>
                    <div className='LatestText LatestContent' style={{backgroundColor:'#0e0b35e3'}}>{item.BlogContent}</div>
                    <div className='LatestText LatestDate' style={{backgroundColor:'#0e0b35e3'}}>{item.CategoryName} / {item.PublishedDate}</div>
                </div>
            ))}


            {technology.map((item,index)=> index === 1 && (
                <div className='TheLatestContentBox'>
                    <div><img src={item.ImageAsset} alt='img'/></div>
                    <div className='LatestText'>
                        <NavLink className="LatestTitle" to={`/article/${item.id}/${item.CategoryName}`}>{item.Title} :</NavLink>
                    </div>
                    <div className='LatestText LatestContent'>{item.BlogContent}</div>
                    <div className='LatestText LatestDate'>{item.CategoryName} / {item.PublishedDate}</div>
                </div>
            ))}

      </div>

    </div>


{/* ----------------------------------------------------------- Home Latest Articles ----------------------------------------------------------- */}

<div className='LatestArticles'>

    <div className='TheLatest'>LATEST ARTICLES</div>
    <hr className='HomeHr'/>

    <div className='HomeMainBox'>

    {
        food.map((item,index)=> index ===1 && (
            <div className='News' key={index}>
                <div className='imgBox'><img src={item.ImageAsset} alt='BlogImg' /></div> 
                <div className='TitleBox'>
                    <Link to={`/article/${item.id}/${item.CategoryName}`}  className='h4'><h4>{item.Title}</h4> </Link  >
                </div>  
                <div className='ContentBox'>{item.BlogContent}</div>
                <div className='DateBox'>{item.CategoryName} / {item.PublishedDate}</div>

            </div>
        )) 
    }
    
    {
        fitness.map((item,index)=>index===4 && (
            <div className='News' key={index}>
                <div className='imgBox'><img src={item.ImageAsset} alt='BlogImg' /></div> 
                <div className='TitleBox'>
                    <Link to={`/article/${item.id}/${item.CategoryName}`}  className='h4'><h4>{item.Title}</h4> </Link  >
                </div>  
                <div className='ContentBox'>{item.BlogContent}</div>
                <div className='DateBox'>{item.CategoryName} / {item.PublishedDate}</div>

            </div>
        )) 
    }
    
    {
        hollywood.map((item,index)=> index===1 &&(
            <div className='News' key={index}>
                <div className='imgBox'><img src={item.ImageAsset} alt='BlogImg' /></div> 
                <div className='TitleBox'>
                    <Link to={`/article/${item.id}/${item.CategoryName}`}  className='h4'><h4>{item.Title}</h4> </Link  >
                </div>  
                <div className='ContentBox'>{item.BlogContent}</div>
                <div className='DateBox'>{item.CategoryName} / {item.PublishedDate}</div>

            </div>
        )) 
    }

    {
        technology.map((item,index)=>index===3 &&(
            <div className='News' key={index}>
                <div className='imgBox'><img src={item.ImageAsset} alt='BlogImg' /></div> 
                <div className='TitleBox'>
                    <Link to={`/article/${item.id}/${item.CategoryName}`}  className='h4'><h4>{item.Title}</h4> </Link  >
                </div>  
                <div className='ContentBox'>{item.BlogContent}</div>
                <div className='DateBox'>{item.CategoryName} / {item.PublishedDate}</div>

            </div>
        )) 
    }

    {
        kollywood.map((item,index)=>index===3 &&(
            <div className='News' key={index}>
                <div className='imgBox'><img src={item.ImageAsset} alt='BlogImg' /></div> 
                <div className='TitleBox'>
                    <Link to={`/article/${item.id}/${item.CategoryName}`}  className='h4'><h4>{item.Title}</h4> </Link  >
                </div>  
                <div className='ContentBox'>{item.BlogContent}</div>
                <div className='DateBox'>{item.CategoryName} / {item.PublishedDate}</div>

            </div>
        )) 
    }

    </div>

    <TopPost TopPost={props.style}/>

</div>

{/* ----------------------------------------------------------- Home Latest Stories ----------------------------------------------------------- */}

<div className='HomeLatest'>

      <div className='TheLatest'>LATEST STORIES</div>
      <hr className='HomeHr'/>

      <div className='TheLatestBoxes'>

            {technology.map((item,index)=> index === 0 && (
                <div className='TheLatestContentBox'>
                    <div><img src={item.ImageAsset} alt='img'/></div>
                    <div className='LatestText' style={{backgroundColor:'#0e0b35e3'}}>
                        <NavLink className="LatestTitle" to={`/article/${item.id}/${item.CategoryName}`}>{item.Title} :</NavLink>
                    </div>
                    <div className='LatestText LatestContent' style={{backgroundColor:'#0e0b35e3'}}>{item.BlogContent}</div>
                    <div className='LatestText LatestDate' style={{backgroundColor:'#0e0b35e3'}}>{item.CategoryName} / {item.PublishedDate}</div>
                </div>
            ))}

            {hollywood.map((item,index)=> index === 0 && (
                <div className='TheLatestContentBox'>
                    <div><img src={item.ImageAsset} alt='img'/></div>
                    <div className='LatestText'>
                        <NavLink className="LatestTitle" to={`/article/${item.id}/${item.CategoryName}`}>{item.Title} :</NavLink>
                    </div>
                    <div className='LatestText LatestContent'>{item.BlogContent}</div>
                    <div className='LatestText LatestDate'>{item.CategoryName} / {item.PublishedDate}</div>
                </div>
            ))}

            {kollywood.map((item,index)=> index === 1 && (
                <div className='TheLatestContentBox'>
                    <div><img src={item.ImageAsset} alt='img'/></div>
                    <div className='LatestText' style={{backgroundColor:'#0e0b35e3'}}>
                        <NavLink className="LatestTitle" to={`/article/${item.id}/${item.CategoryName}`}>{item.Title} :</NavLink>
                    </div>
                    <div className='LatestText LatestContent' style={{backgroundColor:'#0e0b35e3'}}>{item.BlogContent}</div>
                    <div className='LatestText LatestDate' style={{backgroundColor:'#0e0b35e3'}}>{item.CategoryName} / {item.PublishedDate}</div>
                </div>
            ))}

        </div>

</div>

     <div className='GoTop' onClick={e=> setGoTop(e=>!e)} style={{marginTop:'-5.8%'}}>⬆️ Top</div>

</>)
}
export default Home