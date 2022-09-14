import { useContext, useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { BlogContent } from "../Data/Data"


const Article = () => {
    const { articleTitle, articleCategory } = useParams();

    const [GoTop, setGoTop] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [GoTop]);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { value1, value2, value3, value4, value5 } = useContext(BlogContent)
    const [kollywood] = value1;
    const [hollywood] = value2;
    const [technology] = value3;
    const [food] = value4;
    const [fitness] = value5;


    return (<>

        <div className='Article'>

            {/*----------------- kollywood Main Article----------------- */}
            {
                kollywood.map((article, index) => Number(article.id) === Number(articleTitle) && article.CategoryName === articleCategory && (
                    <div key={index} className='ArticleNews'>
                        <div className='ArticleTitle'><NavLink className="h2" to={`/article/${article.id}/${article.CategoryName}`}><h3>{article.Title}</h3> </NavLink></div>
                        <div className='ArticleImg'> <img src={article.ImageAsset} alt='BlogImg' /> </div><hr />
                        <div className='ArticleContent'>{article.BlogContent}</div><hr />

                        <div className='ArticleLikes'>💝 {article.Likes} Likes</div>
                        <p className='ArticleAuthor'>Written By : Author -- /</p>
                        <p className='ArticleDate'>{article.PublishedDate}</p><hr />

                    </div>

                ))
            }

            {/*----------------- hollywood Main Article----------------- */}

            {
                hollywood.map((article, index) => Number(article.id) === Number(articleTitle) && article.CategoryName === articleCategory && (
                    <div key={index} className='ArticleNews'>

                        <div className='ArticleTitle'><NavLink className="h2" to={`/article/${article.id}/${article.CategoryName}`}><h3>{article.Title}</h3> </NavLink></div>
                        <div className='ArticleImg'> <img src={article.ImageAsset} alt='BlogImg' /> </div><hr />
                        <div className='ArticleContent'>{article.BlogContent}</div><hr />

                        <div className='ArticleLikes'>💝 {article.Likes} Likes</div>
                        <p className='ArticleAuthor'>Written By : Author -- /</p>
                        <p className='ArticleDate'>{article.PublishedDate}</p><hr />
                    </div>

                ))
            }

            {/*----------------- technology Main Article----------------- */}

            {
                technology.map((article, index) => Number(article.id) === Number(articleTitle) && article.CategoryName === articleCategory && (
                    <div key={index} className='ArticleNews'>

                        <div className='ArticleTitle'><NavLink className="h2" to={`/article/${article.id}/${article.CategoryName}`}><h3>{article.Title}</h3> </NavLink></div>
                        <div className='ArticleImg'> <img src={article.ImageAsset} alt='BlogImg' /> </div><hr />
                        <div className='ArticleContent'>{article.BlogContent}</div><hr />

                        <div className='ArticleLikes'>💝 {article.Likes} Likes</div>
                        <p className='ArticleAuthor'>Written By : Author -- /</p>
                        <p className='ArticleDate'>{article.PublishedDate}</p><hr />
                    </div>

                ))
            }

            {/*----------------- food Main Article----------------- */}

            {
                food.map((article, index) => Number(article.id) === Number(articleTitle) && article.CategoryName === articleCategory && (
                    <div key={index} className='ArticleNews'>

                        <div className='ArticleTitle'><NavLink className="h2" to={`/article/${article.id}/${article.CategoryName}`}><h3>{article.Title}</h3> </NavLink></div>
                        <div className='ArticleImg'> <img src={article.ImageAsset} alt='BlogImg' /> </div><hr />
                        <div className='ArticleContent'>{article.BlogContent}</div><hr />

                        <div className='ArticleLikes'>💝 {article.Likes} Likes</div>
                        <p className='ArticleAuthor'>Written By : Author -- /</p>
                        <p className='ArticleDate'>{article.PublishedDate}</p><hr />
                    </div>

                ))
            }

            {/*----------------- fitness Main Article----------------- */}

            {
                fitness.map((article, index) => Number(article.id) === Number(articleTitle) && article.CategoryName === articleCategory && (
                    <div key={index} className='ArticleNews'>

                        <div className='ArticleTitle'><NavLink className="h2" to={`/article/${article.id}/${article.CategoryName}`}><h3>{article.Title}</h3> </NavLink></div>
                        <div className='ArticleImg'> <img src={article.ImageAsset} alt='BlogImg' /> </div><hr />
                        <div className='ArticleContent'>{article.BlogContent}</div><hr />

                        <div className='ArticleLikes'>💝 {article.Likes} Likes</div>
                        <p className='ArticleAuthor'>Written By : Author -- /</p>
                        <p className='ArticleDate'>{article.PublishedDate}</p><hr />
                    </div>

                ))
            }


            {/* ------------------Category Box ------------------ */}

            <div className='MoreFromSiren'>More From The Siren</div>

            <div className='CategoryBox'>
                {
                    kollywood.map((article, index) => article.CategoryName === articleCategory && article.id !== Number(articleTitle) && (
                        <div key={index} className='Category'>
                            <div className="CategoryImg"><img src={article.ImageAsset} alt='BlogImg' /> </div>
                            <div className='CategoryTitle'><NavLink to={`/article/${article.id}/${article.CategoryName}`} className='h4'><h4>{article.Title}</h4> </NavLink >  </div>
                            <div className="CategoryDate">Author Name {article.PublishedDate}</div>
                        </div>

                    ))
                }


                {
                    hollywood.map((article, index) => article.CategoryName === articleCategory && article.id !== Number(articleTitle) && (
                        <div key={index} className='Category'>
                            <div className="CategoryImg"><img src={article.ImageAsset} alt='BlogImg' /> </div>
                            <div className='CategoryTitle'><NavLink to={`/article/${article.id}/${article.CategoryName}`} className='h4'><h4>{article.Title}</h4> </NavLink >  </div>
                            <div className="CategoryDate">Author Name {article.PublishedDate}</div>
                        </div>

                    ))
                }


                {
                    technology.map((article, index) => article.CategoryName === articleCategory && article.id !== Number(articleTitle) && (
                        <div key={index} className='Category'>
                            <div className="CategoryImg"><img src={article.ImageAsset} alt='BlogImg' /> </div>
                            <div className='CategoryTitle'><NavLink to={`/article/${article.id}/${article.CategoryName}`} className='h4'><h4>{article.Title}</h4> </NavLink >  </div>
                            <div className="CategoryDate">Author Name {article.PublishedDate}</div>
                        </div>

                    ))
                }


                {
                    food.map((article, index) => article.CategoryName === articleCategory && article.id !== Number(articleTitle) && (

                        <div key={index} className='Category'>
                            <div className="CategoryImg"><img src={article.ImageAsset} alt='BlogImg' /> </div>
                            <div className='CategoryTitle'><NavLink to={`/article/${article.id}/${article.CategoryName}`} className='h4'><h4>{article.Title}</h4> </NavLink >  </div>
                            <div className="CategoryDate">Author Name {article.PublishedDate}</div>
                        </div>

                    ))
                }

                {
                    fitness.map((article, index) => article.CategoryName === articleCategory && article.id !== Number(articleTitle) && (
                        <div key={index} className='Category'>
                            <div className="CategoryImg"><img src={article.ImageAsset} alt='BlogImg' /> </div>
                            <div className='CategoryTitle'><NavLink to={`/article/${article.id}/${article.CategoryName}`} className='h4'><h4>{article.Title}</h4> </NavLink >  </div>
                            <div className="CategoryDate">Author Name {article.PublishedDate}</div>
                        </div>

                    ))
                }


            </div>

            <div className='GoTop' onClick={e => setGoTop(e => !e)}>⬆️ Top</div>

        </div>


    </>)
}
export default Article