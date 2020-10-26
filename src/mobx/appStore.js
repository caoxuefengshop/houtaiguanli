import {observable} from "mobx"

const appStore  = observable({
	count:12,
	age:20
})

appStore.increment = function(inc){
	appStore.count+= inc;
	console.log(appStore.count);
}




export default appStore;
