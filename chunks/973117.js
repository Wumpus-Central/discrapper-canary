let r;

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    J: () => l,
    n: () => c,
}),
    n(457529);
let a = "__d6gp33cibjs";
try {
    (r = window.localStorage), null == r && null != a && ((r = window[a]), delete window[a]);
} catch (e) {}
try {
    null != window.localStorage && null != a && (window[a] = window.localStorage), delete window.localStorage;
} catch (e) {}

function s() {
    let e = "test";
    try {
        return r.setItem(e, e), r.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
}
class o {
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
class l {
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
    constructor() {
        i(this, "storage", void 0), (this.storage = {});
    }
}
let c = s() ? new o() : new l();
