import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  
  /** @type {import('./Models/Todo').Todo[]} */
  todos = []
  
  /** @type {import('./Models/Quote').Quote|null} */
  quote = null
  
  
  /** @type {object} */
  image = null
  
  /** @type {number} */
  temp = 0
  
  /** @type {number} */
  celsius = 0
  
  /** @type {number} */
  fahrenheit = 0
  
  /** @type {string} */
  type = 'celsius'
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
