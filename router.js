function route(handle,pathname,response,postData){
    console.log('router ', pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](response,postData);
    }else {
        return '404 Not found'
    }
}

exports.route = route;