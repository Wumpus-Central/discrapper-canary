"use strict";
let r;
n.d(t, { J: () => o, n: () => l });
let i = "__d6gp33cibjs";
try {
    (r = window.localStorage), null == r && null != i && ((r = window[i]), delete window[i]);
} catch (e) {}
try {
    null != window.localStorage && null != i && (window[i] = window.localStorage), delete window.localStorage;
} catch (e) {}
function a() {
    let e = "test";
    try {
        return r.setItem(e, e), r.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
}
class s {
    get(e, t) {
        let n = r.getItem(e);
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
}
class o {
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
let l = a() ? new s() : new o();
