import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from 'antd';
import { useState } from 'react';
import { FaArrowLeft, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PValue } from './Data';

const Details = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        navigate(-1);
      };

      const { id } = useParams();

      useEffect(() => {
      }, [id])

    const project = PValue.find((p) => p._id === parseInt(id));

    console.log("Project", project);
    
    return (
        <div className=''>
            {project && (
                <>
            <button autoFocus={true} className='secondary-button p-0 py-1 px-2 my-4' onClick={handleClick}> <FaArrowLeft/> Back</button>
            <div className="row mt-3">
                <div className="col-md-6">
                    <div className="">
                    <h4 className='pb-4'>{project.title}</h4>
                    <p>{project.description}</p>
                    {project?.tags?.map((tag, i)=> (
                        <a key={i} className='tag-btn my-2 mx-2'>{tag}</a>
                    ))}
                    </div>
                    <div className="">
                        <a target='_blank' href={project.liveLink} className='main-btn-fill ms-2 mt-4 '>Live Demo</a>
                        <a target='_blank' href={project.social.githubClient} className='main-btn ms-2 mt-4 '>Github Client</a>
                        <a target='_blank' href={project.social.githubServer} className='main-btn ms-2 mt-4 '>Github Server</a>
                    </div>
                    <div className="i-icons d-flex justify-content-md-start justify-content-center my-5">
                        <a href="https://github.com/amirhamja4bd" target="_blank">
                        <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/amirhamja656/" target="_blank">
                        <FaLinkedinIn />
                        </a>
                        <a href="https://www.facebook.com/amirhamja360" target="_blank">
                        <FaFacebookF />
                        </a>
                  </div>
                </div>
                <div className="col-md-6 relative" >
                    <Image
                        preview={{
                        visible: false,
                        }}
                        width={600}
                        height={500}
                        src={project.thumbnail}
                        onClick={() => setVisible(true)}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'top',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                          }}
                    />
                    <div
                        style={{
                        display: 'none',
                        }}
                    >
                        <Image.PreviewGroup
                        preview={{
                            visible,
                            onVisibleChange: (vis) => setVisible(vis),
                        }}
                        style={{ width: '1000px', height: '500px' }}
                        >
                        {project?.images?.map((img, i)=> (
                            <Image  key={i} src={img} />
                        ))}
                        </Image.PreviewGroup>
                    </div>
                </div>
            </div>
            </>
            )}
        </div>
    );
};

export default Details;