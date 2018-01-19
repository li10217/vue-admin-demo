import {routers} from '@/router'
import util from '@/lib/utils.js';
const app = {
    state: {
        items: [],
        name: '',
        currentPath:[],
        routers:routers,
        openPageTagList:[]
    },
    mutations: {
        ADD_ITEM(state,item){
            state.items.push(item);
        },
        DELETE_ITEM(state){
            state.items.pop();
        },
        setCurrentPath (state, pathArr) {
            state.currentPath = pathArr;
        },
        addopenPageTagList (state, tag) {
            let index_tag=-1;
            state.openPageTagList.map((item,index)=>{
                if(tag.name===item.name&&tag.title===item.title&&tag.path===item.path){
                    index_tag++;
                }   
            });
            if(index_tag<0){
                state.openPageTagList.push(tag);
            }
        },
        delopenPageTagList (state, tag) {
            state.openPageTagList.splice(state.openPageTagList.indexOf(tag),1);
        },
        changeopenPageTagList (state, tag){
            state.openPageTagList.map((item,index)=>{
                if(util.checkObjAlike(tag,item)){
                    state.openPageTagList[index].type='';
                }else{
                    state.openPageTagList[index].type='info';
                }
            });
        }
    }
}

export default app