import { h, render, Component } from 'preact';
import { Router } from 'preact-router';

import AdminMenu from './views/admin-menu';
import PostsManager from './views/posts-manager';
import ImagesManager from './views/images-manager';
import TagsManager from './views/tags-manager';

import { LINKS } from './urls';

import store from './store';

class AdminApp extends Component {
    constructor() {
        super();
        Object.assign(this.state, store.state);
        this._setState = this.setState.bind(this);
    }

    componentDidMount() {
        store.addChangeListener(this._setState);
    }

    componentWillUnmount() {
        store.removeChangeListener(this._setState);
    }

    render(props, state) {
        return (
            <Router>
                <PostsManager path={ LINKS.PostsManager } />
                <ImagesManager path={ LINKS.ImagesManager } />
                <TagsManager path={ LINKS.TagsManager } />
                {/*<PostForm path={ LINKS.EditPost } />
                <PostForm path={ `${LINKS.EditPost}/:id` } />*/}
            </Router>
        );
    }
}


function startAdminApp() {
    if ('/admin' !== location.pathname) {
        return;
    }

    const menuDiv = document.querySelector('header > nav');
    const appDiv = document.querySelector('.admin-app');
    render(<AdminMenu />, menuDiv);
    render(<AdminApp />, appDiv);

    // prepare state
    // getPosts();
    // getImages();
    // getTags();
}


if (typeof window === 'object' && window.App) {
    Object.assign(window.App, { startAdminApp }); // extend
}

export { AdminApp };
