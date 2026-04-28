let r;
E.d(t, { J: () => _, n: () => T });
let S = "__d6gp33cibjs";
try {
    (r = window.localStorage), null == r && ((r = window[S]), delete window[S]);
} catch (e) {}
try {
    null != window.localStorage && (window[S] = window.localStorage), delete window.localStorage;
} catch (e) {}
class _ {
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
let T = !(function () {
    let e = "test";
    try {
        return r.setItem(e, e), r.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
})()
    ? new _()
    : new (class {
          get(e, t) {
              let E = r.getItem(e);
              if (null != E)
                  try {
                      E = JSON.parse(E);
                  } catch (e) {
                      E = t;
                  }
              else E = t;
              return E;
          }
          set(e, t) {
              r.setItem(e, JSON.stringify(t));
          }
          remove(e) {
              r.removeItem(e);
          }
          clear() {
              r.clear();
          }
          stringify() {
              return JSON.stringify(r || {});
          }
          asyncGetRaw(e, t) {
              return Promise.resolve(r.getItem(e));
          }
          getRaw(e) {
              return r.getItem(e);
          }
          setRaw(e, t) {
              r.setItem(e, t);
          }
          getAfterRefresh(e) {
              return Promise.resolve(this.get(e));
          }
      })();
