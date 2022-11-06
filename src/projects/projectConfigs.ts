import { ProjectScreen } from "../interfaces/Project";
import { ProjectText } from "../utils/text";


export const projectConfigs: ProjectScreen[] = [
    {
        title: ProjectText[0].title,
        description: ProjectText[0].description,
        images: ['https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Fgifteslo.gif?alt=media&token=f376a887-b0b6-452a-b73d-05595c425416', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Fcart.png?alt=media&token=ee5be9a9-653f-4985-b58e-dcbb319b1dba', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Fdashboard.png?alt=media&token=2c227c7b-3e6e-4f9b-8242-f58ff05a2aa5', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Fhome.png?alt=media&token=281d4abb-c0a7-41da-be09-1cfa640f7b04', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Flogin.png?alt=media&token=52411705-d228-47f0-beb4-fe12bb6ec3be', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Forders.png?alt=media&token=70d5e76d-e97f-4e37-b38f-c6ab856078d6', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Fproduct.png?alt=media&token=7df2c7db-b8d8-4dd6-b6ae-ba48e9c1419b', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Fquery.png?alt=media&token=ee398d7e-e379-4bfb-ad4c-687b02cafd1d', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Ftesloshop%2Fusers.png?alt=media&token=d0f9011b-2ba1-4c04-90ea-98844c71793c'],
        iconClassNames: ['html5', 'node-js', 'js', 'next-dot-js', 'typescript', 'react', 'mongodb'],
        url: ProjectText[0].url,
        Icon: ProjectText[0].Icon,
        repoUrl: 'https://github.com/EduardoDevOlmedo/TESLOSHOP',
    },
    {
        title: ProjectText[1].title,
        description: ProjectText[1].description,
        images: ['https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fskeletons%2Fedit.png?alt=media&token=dbc6d970-f1e6-4fbc-9824-f4e00c4d4721', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fskeletons%2Fezgif.com-gif-maker.gif?alt=media&token=265fcad8-7668-452f-a223-cae60816b9aa', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fskeletons%2Fhome.png?alt=media&token=8246f3c2-9a6c-43f6-a279-7b9302c12e9d', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fskeletons%2Flogin.png?alt=media&token=c7fba791-a80d-4b87-a380-f14c0af29526', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fskeletons%2Fnew.png?alt=media&token=d7553b95-9773-49aa-9a88-ef25736a9c16', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fskeletons%2Fproduct.png?alt=media&token=a979d3d5-a6d1-4363-8b97-469ef95da5c7', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fskeletons%2Fsearch.png?alt=media&token=1fcad21f-aed1-4d60-a6af-cbb074184cec'],
        iconClassNames: ['html5', 'node-js', 'js', 'next-dot-js', 'typescript', 'react', 'firebase', 'express', 'mongodb', 'sass'],
        url: ProjectText[1].url,
        Icon: ProjectText[1].Icon,
        repoUrl: 'https://github.com/EduardoDevOlmedo/SOCKS_APP'

    },
    {
        title: ProjectText[2].title,
        description: ProjectText[2].description,
        images: ['https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fwebhelp%2Fhome.png?alt=media&token=28dd18a3-9486-472c-8bdc-5af4a1faec06', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fwebhelp%2Fmeaning.png?alt=media&token=ae70585f-d59f-44c2-92f6-1fd0056fe2fe', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fwebhelp%2Fquery.png?alt=media&token=1d6c6820-91e8-473f-87cc-f9b908faa27c'],
        iconClassNames: ['html5', 'js', 'next-dot-js', 'typescript', 'react', 'mongodb', 'sass'],
        url: ProjectText[2].url,
        Icon: ProjectText[2].Icon,
        repoUrl: 'https://github.com/EduardoDevOlmedo/webhelp',
        shouldContain: true

    },
    {
        title: ProjectText[3].title,
        description: ProjectText[3].description,
        images: ['https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fopenjira%2Fezgif.com-gif-maker.gif?alt=media&token=46e3d463-6261-4f64-82de-2fb4f2d9999f','https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fopenjira%2Fedit.png?alt=media&token=dbfef946-7b80-48d8-877c-bc25e2e6a47c', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fopenjira%2Fhome.png?alt=media&token=60bcfd76-ad63-4ab9-b300-afcdb7343aa1', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fopenjira%2Fmoving.png?alt=media&token=388534b6-dce1-46c4-98e5-a2c1694f2541'],
        iconClassNames: ['html5', 'node-js', 'js', 'next-dot-js', 'typescript', 'react', 'mongodb', 'sass'],
        url: ProjectText[3].url,
        Icon: ProjectText[3].Icon,
        repoUrl: 'https://github.com/EduardoDevOlmedo/OpenJira'
    },
    {
        title: ProjectText[4].title,
        description: ProjectText[4].description,
        images: ['https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fweather%2Fhome.png?alt=media&token=739084b8-a7b7-47da-8289-492b76fc828b', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fweather%2Fquery.png?alt=media&token=2e0239a1-83e2-4bbe-80d7-8d10da4617b1', 'https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/portfolio-images%2Fweather%2Fquery2.png?alt=media&token=94ffb07e-79c4-49f7-805a-287b6f83b11a'],
        iconClassNames: ['html5', 'node-js', 'js', 'react', 'sass'],
        url: ProjectText[4].url,
        Icon: ProjectText[4].Icon,
        repoUrl: 'https://github.com/EduardoDevOlmedo/Weather-React-App',
        shouldContain: true
    },
]