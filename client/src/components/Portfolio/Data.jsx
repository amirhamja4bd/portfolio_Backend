import portfolio from "../../assets/portfolio/Portfolio.png";
import portfolio1 from "../../assets/portfolio/Portfolio-details.png";
import Ostad from "../../assets/portfolio/OstadLms.png";
import Ostad2 from "../../assets/portfolio/OstadLms-coursePage.png";
import Ostad3 from "../../assets/portfolio/OstadLms-studentDashboard.png";
import Ostad4 from "../../assets/portfolio/OstadLms-adminDashboard.png";
import Lead from "../../assets/portfolio/LeadEdocare.png";
import Zayan from "../../assets/portfolio/Zayan-Shop.png";
import Zayan2 from "../../assets/portfolio/Zayan-Shop-shopping.png";
import Zayan3 from "../../assets/portfolio/Zayan-Shop-cart.png";
import Zayan4 from "../../assets/portfolio/Zayan-Shop-dashboard.png";

export const PValue = [
    {
        _id: 1,
        thumbnail: portfolio,
        images: [portfolio, portfolio1],
        title:  "Portfolio Website",
        description:  "Building engaging user interfaces with React, Next.js, and JavaScript. Developing server-side applications with Node.js, Express.js, and MongoDB. Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js) Developing server-side applications with Node.js, Express.js, and MongoDB..",
        technology: 'React, Next, MongoDb, Express Nodejs',
        tags: [ 'Reactjs', 'Ant Design' , ' Bootstrap',] ,
        type: "personal",
        liveLink: 'https://amirhamza.vercel.app/',
        social:
            { 
                facebook: 'https://www.facebook.com/amirhamja360', 
                Linkedin: 'https://www.linkedin.com/in/amirhamja656/' , 
                githubClient: 'https://github.com/amirhamja4bd/portfolio-frontend' ,
                githubServer: 'https://github.com/amirhamja4bd/' ,
            }
    },
    {
        _id: 2,
        thumbnail: Ostad,
        images: [Ostad, Ostad2 , Ostad3 , Ostad4 ,],
        title:  "Online Learning Management System",
        description: "Building engaging user interfaces with React, Next.js, and JavaScript. Developing server-side applications with Node.js, Express.js, and MongoDB. Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js) Developing server-side applications with Node.js, Express.js, and MongoDB.",
        technology: 'React, Next, MongoDb, Express Nodejs',
        tags: [ 'Reactjs' , 'Nextjs' , 'MongoDB' , 'Mongoose' , 'Express' , 'Tailwind css' , 'Ant Design' ,] ,
        type: "team",
        liveLink: 'https://ostad-lms-frontend.vercel.app/',
        social: 
            { 
                facebook: 'https://www.facebook.com/amirhamja360', 
                Linkedin: 'https://www.linkedin.com/in/amirhamja656/' , 
                githubClient: 'https://github.com/amirhamja4bd/' ,
                githubServer: 'https://github.com/amirhamja4bd/' ,
            }
    },
    {
        _id: 3,
        thumbnail: Lead,
        images: [Lead , Ostad2 , Ostad3 , Ostad4 ],
        title:  "LMS for Children",
        description:  "Building engaging user interfaces with React, Next.js, and JavaScript. Developing server-side applications with Node.js, Express.js, and MongoDB. Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js) Developing server-side applications with Node.js, Express.js, and MongoDB.",
        technology: 'React, Next, MongoDb, Express Nodejs',
        tags: [ 'Reactjs' , 'Nextjs' , 'MongoDB' , 'Mongoose' , 'Express' , 'Tailwind css' , 'Ant Design' ,] ,
        type: "team",
        liveLink: 'https://edulms-frontend.vercel.app/',
        social:
            { 
                facebook: 'https://www.facebook.com/amirhamja360', 
                Linkedin: 'https://www.linkedin.com/in/amirhamja656/' , 
                githubClient: 'https://github.com/amirhamja4bd/' ,
                githubServer: 'https://github.com/amirhamja4bd/' ,
            }
    },
    {
        _id: 4,
        thumbnail: Zayan,
        images: [Zayan, Zayan2 , Zayan3 , Zayan4],
        title:  "Ecommerce Website",
        description: "Building engaging user interfaces with React, Next.js, and JavaScript. Developing server-side applications with Node.js, Express.js, and MongoDB. Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js) Developing server-side applications with Node.js, Express.js, and MongoDB.",
        technology: 'React, Next, MongoDb, Express Nodejs',
        tags: [ 'Reactjs' , 'MongoDB' , 'Mongoose' , 'Express' , ' Bootstrap' , 'Ant Design' ,] ,
        type: "personal",
        liveLink: 'https://zayanshop.vercel.app/',
        social:
            { 
                facebook: 'https://www.facebook.com/amirhamja360', 
                Linkedin: 'https://www.linkedin.com/in/amirhamja656/' , 
                githubClient: 'https://github.com/amirhamja4bd/' ,
                githubServer: 'https://github.com/amirhamja4bd/' ,
            }
    },
]