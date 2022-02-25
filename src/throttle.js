import {
  createDecorator
} from 'vue-class-component';
import {
  noop,
  throttle
} from 'lodash-es';
/**
 * [wait=200] (number): 需要节流的毫秒。
 * [leading=true] (boolean): 指定调用在节流开始前。
 * [trailing=true] (boolean): 指定调用在节流结束后。
 */
export const Throttle = (wait = 200, settings = {
  leading: true,
  trailing: true
}) => {
  return createDecorator((options, key) => {
    if (options.methods) {
      // Keep the original method for later.
      const originalMethod = options.methods[key] || noop;
      options.methods[key] = throttle(
        function wrapperMethod(...args) {
          // Invoke the original method.
          originalMethod.apply(this, args)
        },
        wait,
        settings
      )
    }
  })
};