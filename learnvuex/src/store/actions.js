export default {
    // context:上下文
    aUpdateInfo(context, payLoad) {
        // console.log(payLoad)
        // setTimeout(()=>{
        //     context.commit("updateInfo")
        //     console.log(payLoad.message)
        //     payLoad.success()
        // },1000)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit("updateInfo")
                resolve("完成任务")
            }, 1000);
        })
    }
}