import { Project } from "../interfaces/Project"
import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';

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
        icon: AddShoppingCartOutlinedIcon,
            title: 'Teslo Shop',
            description: 'Personal project developed using high variety of frameworks and libraries, but mainly the use of Next.js framework, mongoDB, react-hook-form, useSWR, and the use of Material UI, theres a system to create your accounts, with differente providers using NextAuth, roles and a dashboard to track the products, including the full CRUD to add, edit, delete and update each product',
            url: 'teslo'
        },
        {
            icon: HtmlOutlinedIcon,
            title: 'Skeleton Socks',
            description: 'A website developed for the business "skeleton socks" where I developed the full CRUD, using SWR and Next middlewares, mainly using Material UI as a CSS component library, mongoDB as the database and mongoose as the ORM for Node.js, I also included firebase so the client could upload the images of his products, each product was editable, deletable, updtable.',
            url: 'skeletons'
        },
        {
            icon: HelpCenterOutlinedIcon,
            title: 'Webhelp Glossary App',
            description: 'A glossary developed for webhelp in which each user can add, update and delete words, adding up to 3 meanings to each word, also a search feature was added to the project.',
            url: 'webhelp'
        },
        {
            icon: OpenInFullOutlinedIcon,
            title: 'OpenJira',
            description: 'Basically a recreation of the Jiira App, using drag and drop and saving of the state, using the react store tools, like the context which for me, is better than using redux or any other global state manager',
            url: 'openjira'
        },
        {
            icon: WbSunnyOutlinedIcon,
            title: 'Weather Project',
            description: 'A functional based component application. Pretty simple and demonstrating how the app works. This was a really nice project, using Weather API, POSTMAN, and some react hooks. I think the most difficult part of this one, was including a nice UX/UI experience, something than can be sometimes problematic.',
            url: 'weather'
        },
]