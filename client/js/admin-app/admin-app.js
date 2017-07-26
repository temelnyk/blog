import { h, render, Component } from 'preact';
// import { Router } from 'preact-router';


class AdminApp extends Component {
    constructor() {
        super();
        Object.assign(this.state, {} /*store.state*/);
        this._setState = this.setState.bind(this);
    }

    componentDidMount() {
        // store.addChangeListener(this._setState);
    }

    componentWillUnmount() {
        // store.removeChangeListener(this._setState);
    }

    render(props, state) {
        return <div>React app works!</div>;
        // return (
        //     {/*<Router>*/}
        //         {/*<DishesManager path={ LINKS.DishesList } dishesStructure={ state['dishes-structure'] } />
        //         <DishForm path={ LINKS.EditDish } />
        //         <DishForm path={ `${LINKS.EditDish}/:id` } />
        //         <GroupForm path={ `${LINKS.EditGroup}` } />
        //         <GroupForm path={ `${LINKS.EditGroup}/:id` } />
        //
        //         <ImagesManager path={ LINKS.ImagePicker } images={ state.images } mode={ ImageManagerModes.Picker } />
        //         <ImagesManager path={ LINKS.ImagesManager } images={ state.images } mode={ ImageManagerModes.Manager } />*/}
        //     {/*</Router>*/}
        // );
    }
}


function startAdminApp() {
    if (!/^\/admin$/.test(location.pathname)) {
        return;
    }

    const menuDiv = document.querySelector('header > nav');
    const appDiv = document.querySelector('.admin-app');
    // render(<AdminMenu />, menuDiv);
    render(<AdminApp />, appDiv);

    // prepare state
    // getDishesStructure();
    // getImages();
}


if (typeof window === 'object' && window.App) {
    Object.assign(window.App, { startAdminApp }); // extend
}

export { AdminApp };
