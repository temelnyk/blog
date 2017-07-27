import { h, Component } from 'preact';
import { route } from 'preact-router';
import { LINKS } from '../urls';

const MENU = [
    {
        text: 'Posts',
        link: LINKS.PostsManager
    },
    {
        text: 'Images',
        link: LINKS.ImagesManager
    },
    {
        text: 'Tags',
        link: LINKS.TagsManager
    }
];


class AdminMenu extends Component {
    render(props, state) {
        const items = MENU.map(({ text, link }) => {
            const onClick = () => { route(link); };
            const className = 'button grey';
            return <span className={ className } onClick={ onClick }>{ text }</span>;
        });
        return <div className="admin-menu h-list">{ items }</div>;
    }
}


export default AdminMenu;
