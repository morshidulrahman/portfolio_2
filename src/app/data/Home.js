import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
export const HomeData = {
    name: "Morshidul Rahman",
    image: "/assets/rsz_3me.jpg",
    typeWriter: ["Fornt End Developer", "Web Developer", "React Developer", "React Native Developer"],
    socialIcons: [
        {
            icon: <BsInstagram />,
            link: 'https://www.instagram.com/morshidulbabu/'
        },
        {
            icon: <FaFacebook />,
            link: 'https://www.facebook.com/morshidul.rahman.3'
        },
        {
            icon: <AiOutlineTwitter />,
            link: 'https://twitter.com/babu58902005'
        },
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/morshidulrahman'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.instagram.com/morshidulbabu/'
        }
    ]
}