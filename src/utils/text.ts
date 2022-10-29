import { Project } from "../interfaces/Project"
import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export const Text = {
    skills: {
        bio: "I am frontend developer with experience building fullstack applications and websites using React, MongoDB and NextJS with the inclussion of amazing CSS.",
        backendSkills: 'I have a nice understandment of the backend part, I have done fullstack apps all by myself, using Next and MongoDB',
        helper: 'I love helping others without waiting anything in exchange. I love helping others!',
        fastLearner: 'I tend to learn things pretty easily, practicing until reaching a decent level, and then going to pro mode.',
        proactive: 'I am always active to do anything if it is needed, searching new ways to improve the code and studying.' 
    },
}

export const names = ['html5', 'js', 'node-js', 'sass', 'css3', 'firebase', 'flutter', 'mongodb', 'next-dot-js', 'postman', 'react', 'express' ,'typescript']


export const ProjectText: Project[] = [
        {
            icon: WbSunnyOutlinedIcon,
            title: 'Weather Project',
            description: 'A functional based component application. Pretty simple and demonstrating how the app works. This was a really nice project, using Weather API, POSTMAN, and some react hooks. I think the most difficult part of this one, was including a nice UX/UI experience, something than can be sometimes problematic.',
            url: 'weather'
        },
        {
            icon: HtmlOutlinedIcon,
            title: 'Skeleton Socks',
            description: 'A website developed for the business "skeleton socks" where I developed the full CRUD, using SWR and Next middlewares, mainly using Material UI as a CSS component library, mongoDB as the database and mongoose as the ORM for Node.js, I also included firebase so the client could upload the images of his products, each product was editable, deletable, updtable.',
            url: 'skeletons'
        },
        {
            icon: HtmlOutlinedIcon,
            title: 'Pizzita 2',
            description: 'A website developed for the business "skeleton socks" where I developed the full CRUD, using SWR and Next middlewares, mainly using Material UI as a CSS component library, mongoDB as the database and mongoose as the ORM for Node.js, I also included firebase so the client could upload the images of his products, each product was editable, deletable, updtable.',
            url: 'skeletons'
        },
        {
            icon: HtmlOutlinedIcon,
            title: 'Pizzita 3',
            description: 'A website developed for the business "skeleton socks" where I developed the full CRUD, using SWR and Next middlewares, mainly using Material UI as a CSS component library, mongoDB as the database and mongoose as the ORM for Node.js, I also included firebase so the client could upload the images of his products, each product was editable, deletable, updtable.',
            url: 'skeletons'
        },
        {
            icon: HtmlOutlinedIcon,
            title: 'Pizzita 4',
            description: 'A website developed for the business "skeleton socks" where I developed the full CRUD, using SWR and Next middlewares, mainly using Material UI as a CSS component library, mongoDB as the database and mongoose as the ORM for Node.js, I also included firebase so the client could upload the images of his products, each product was editable, deletable, updtable.',
            url: 'skeletons'
        },
        

        
]