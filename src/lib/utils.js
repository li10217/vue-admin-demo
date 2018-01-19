let util={

}
util.title = function (title) {
    title = title || 'vue admin demo';
    window.document.title = title;
};
util.handleTitle = function (vm, item) {
    if (typeof item.title === 'object') {
        return vm.$t(item.title.i18n);
    } else {
        return item.title;
    }
};

util.resultArr = [];

util.eachRouter = function (objArr, path) {
    objArr.forEach(item=>{
        if(path.indexOf(item.path)>-1&&item.path!='/'){
            util.resultArr.push(
                {
                    title:item.title,
                    path:item.path,
                    name:item.name
                }
            );
            if(item.children.length>0){
                util.eachRouter(item.children ,path);
            }
        }
    })
}

util.setCurrentPath = function (vm, to) {
    let currentPathArr = [];
    if(to.path==='/'){
        currentPathArr = [
            {
                title: '首页',
                path: '/',
                name: 'home'
            }
        ];
    }else{
        util.resultArr = [];
        util.eachRouter(vm.$store.state.app.routers, to.path)
        currentPathArr = util.resultArr;
    }
    vm.$store.commit('setCurrentPath', currentPathArr);
    return currentPathArr;
};
util.addPageTagList = function (vm, tag) {
    vm.$store.commit('addopenPageTagList', tag);
    vm.$store.commit('changeopenPageTagList', tag);
};
util.delPageTagList = function (vm, tag) {
    vm.$store.commit('delopenPageTagList', tag);
};
util.changePageTagList = function (vm, tag) {
    vm.$store.commit('changeopenPageTagList', tag);
};
util.checkObjAlike = function (tag, item) {
    if(tag.name===item.name&&tag.title===item.title&&tag.path===item.path){
        return true;
    }   
    return false;
};

export default util;