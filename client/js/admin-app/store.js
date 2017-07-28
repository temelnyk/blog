import StoreCtor from '../store-ctor';

const store = new StoreCtor({
    posts: [],
    images: [],
    tags: [],
    // 'image-picker': null,
});
window.store = store; // TODO remove after debugging

export default store;
