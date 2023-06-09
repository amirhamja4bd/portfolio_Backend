import React from 'react';
import "./Skills.css"
import { Circle , Line} from 'rc-progress';

const Skills = () => {
    const TValue = [
        {
            title: "Javascript ",
            percent: 85
        },
        {
            title: "ES6 ",
            percent: 80
        },
        {
            title: " React",
            percent: 75
        },
        {
            title: "Express ",
            percent:  75
        },
        {
            title: "MongoDB ",
            percent: 70
        },
        {
            title: " Git & Github",
            percent: 55
        },
    ]
    const PValue = [
        {
            title: "Communication",
            percent: 85
        },
        {
            title: "Team Work",
            percent: 90
        },
        {
            title: " Project Management",
            percent: 75
        },
        {
            title: "Creativity ",
            percent:  80
        },
        {
            title: "Adaptability ",
            percent: 80
        },
        {
            title: " Attention to Detail",
            percent: 95
        },
    ]
    
    return (
        <div id='skills' className=' container'>
            <div className="text-center pb-5">
                {/* <span className="subtitle">My Skills</span> */}
                <h2>Skills</h2>
            </div>
            <div className="row">
                <div className="col-md-6 text-start pe-5">
                <div className=" text-center pb-4">
                    <h3>Technical Skills</h3>
                </div>
                {TValue?.map((t, i)=> (
                <div key={i}>
                    <div className=" d-flex justify-content-between mt-2">
                        <p className='p-0 m-0'>{t?.title}</p>
                        <p className="p-0 m-0">{t?.percent}</p>
                    </div>
                    <Line
                        style={{ width: '100%', height: 5 }}
                        className=''
                        percent={t?.percent}
                        strokeWidth={4}
                        strokeColor="var(--primary-color)"
                        trailColor="var(--secondery-color)"
                        trailWidth={4}
                        strokeLinecap="square"
                    />
                </div>
                ))}
                </div>

                <div className="col-md-6 text-center ps-md-5">
                    <div className=" text-center pb-4">
                        <h3>Professional Skills</h3>
                    </div>
                    <div className="text-center">
                    <div className="d-flex flex-wrap justify-content-center">
                    {PValue?.map((p, i)=>(
                        <div key={i} className="position-relative col-6 col-md-4  mb-5">
                            <Circle
                            style={{ width: 110, height: 110 }}
                            className=''
                            percent={p?.percent}
                            strokeWidth={4}
                            strokeColor="var(--primary-color)"
                            trailColor="var(--secondery-color)"
                            trailWidth={4}
                            strokeLinecap="square"
                            />
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <h4 className="m-0 mb-5">{p?.percent}%</h4>
                            </div>
                            <p className='p-0 m-0 mt-3'>{p?.title}</p>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;