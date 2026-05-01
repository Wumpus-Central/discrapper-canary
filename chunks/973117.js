"use strict";
let i;
n.d(t, { J: () => s, n: () => a });
let r = "__d6gp33cibjs";
try {
    (i = window.localStorage), null == i && ((i = window[r]), delete window[r]);
} catch (e) {}
try {
    null != window.localStorage && (window[r] = window.localStorage), delete window.localStorage;
} catch (e) {}
class s {
    storage;
    constructor() {
        this.storage = {};
    }
    get(e, t) {
        return this.storage.hasOwnProperty(e) ? this.storage[e] : t;
    }
    set(e, t) {
        this.storage[e] = t;
    }
    remove(e) {
        delete this.storage[e];
    }
    clear() {
        this.storage = {};
    }
    stringify() {
        return JSON.stringify(this.storage);
    }
    asyncGetRaw(e, t) {
        return Promise.resolve(this.getRaw(e));
    }
    getRaw(e) {
        return this.storage.hasOwnProperty(e) ? this.storage[e] : null;
    }
    setRaw(e, t) {
        this.storage[e] = t;
    }
    getAfterRefresh(e) {
        return Promise.resolve(this.get(e));
    }
}
let a = !(function () {
    let e = "test";
    try {
        return i.setItem(e, e), i.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
})()
    ? new s()
    : new (class {
          get(e, t) {
              let n = i.getItem(e);
              if (null != n)
                  try {
                      n = JSON.parse(n);
                  } catch (e) {
                      n = t;
                  }
              else n = t;
              return n;
          }
          set(e, t) {
              i.setItem(e, JSON.stringify(t));
          }
          remove(e) {
              i.removeItem(e);
          }
          clear() {
              i.clear();
          }
          stringify() {
              return JSON.stringify(i || {});
          }
          asyncGetRaw(e, t) {
              return Promise.resolve(i.getItem(e));
          }
          getRaw(e) {
              return i.getItem(e);
          }
          setRaw(e, t) {
              i.setItem(e, t);
          }
          getAfterRefresh(e) {
              return Promise.resolve(this.get(e));
          }
      })();
