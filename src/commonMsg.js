const commonMsg={
	data:{}, // 存储数据   logistic 模块 name age 等每个字段
	registerEvents:(modulName,propetyName,cb)=>{  // 注册监听事件  modulName :模块名字  propeyName：模块中的属性名字 cb：回调事件
		//1.将 modulName propetyName ,cb 都存起来
		if(!commonMsg.data[modulName]){
			commonMsg.data[modulName] = {};
		}
		if(!commonMsg.data[modulName][propetyName]){
			commonMsg.data[modulName][propetyName] = []; //里面全部是 callBack
		}
		commonMsg.data[modulName][propetyName].push(cb);
	},
	// 发送事件的方法 ,发送消息的名字，modelData ,消息体
	sendEvents:(modulName,modelData)=>{
		if(commonMsg.data[modulName]){ //如果事件存在，发送消息
		 let keys = Object.keys(commonMsg.data[modulName]);
		 keys.forEach(key=>{
		 	let listCbs = commonMsg.data[modulName][key];
		 	listCbs.forEach(cb=>{
		 		cb(modelData)
		 	})
		 })
		}
	}
}
export {commonMsg};

// 1.注册 监听事件： 注册事件的方法
// 2.发送 事件    ； 