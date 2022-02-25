import {
    createDecorator
} from 'vue-class-component';
import {
    noop,
    debounce
} from 'lodash-es';
/**
 * [wait=200] (number): 需要延迟的毫秒数。
 * [leading=false] (boolean): 指定在延迟开始前调用。
 * [maxWait] (number): 设置 func 允许被延迟的最大值。
 * [trailing=true] (boolean): 指定在延迟结束后调用。
 */
export const Debounce = (wait = 200, settings = {
    leading: false,
    trailing: true
}) => {
    return createDecorator((options, key) => {
        if (options.methods) {
            // Keep the original method for later.
            const originalMethod = options.methods[key] || noop;
            options.methods[key] = debounce(
                function wrapperMethod(...args) {
                    // Invoke the original method.
                    originalMethod.apply(this, args)
                },
                wait,
                settings
            )
        }
    });
};