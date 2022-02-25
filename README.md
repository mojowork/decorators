# decorators
基于 vue-class-component 的自定义装饰器

#### throttle和debounce
* click事件我们最常见的就是异步请求一个后台接口，通常我们都只需要执行一次，频繁的执行，响应都是相同的数据没有意义，同时也增加了服务器的压力。这种情况最适合的就是debounce函数;
* scroll事件如果是触发UI的变化呢，我建议使用throttle。如果是，通过scroll事件加载数据呢则可以使用debounce函数。总之按需取用。
* resize事件就推荐debounce了，一般情况下只需要在resize结束的时候执行一次回调函数就满足需求了，但是也不是绝对的情况。如果要保持UI的连续性也可以使用throttle函数。
* mousemove事件一般都是配合UI的改变，因此推荐使用throttle。
现在看一下细分的情况；
* 滚动加载我们也是在滚动到底部的时候才去加载一次数据，多余的加载都是没有意义的，而且有可能出错，因此使用debounce。
* 搜索框那就推荐使用throttle了，在合适的间隔去请求搜索结果，既提高了用户体验，又减少了服务器的压力