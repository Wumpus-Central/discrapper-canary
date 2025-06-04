function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        r = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : '',
        i = null != e ? '?redirect_to='.concat(encodeURIComponent(e)) : '';
    return (
        0 !== n.length && (n = 0 === i.length ? '?'.concat(n) : '&'.concat(n)),
        ''
            .concat(t ? r : '', '/login')
            .concat(i)
            .concat(n)
    );
}
n.d(t, {
    Ft: () => s,
    Ui: () => i,
    Zn: () => a
}),
    n(35282),
    n(388685);
class a {
    toString() {
        return this.value;
    }
    constructor(e) {
        r(this, 'value', void 0), (this.value = e);
    }
}
function o(e, t) {
    return e.map((e) =>
        null == e
            ? e
            : e instanceof a
              ? e.toString()
              : null == t
                ? encodeURIComponent(e)
                : String(e)
                      .split('')
                      .map((e) => (null != t && t.includes(e) ? e : encodeURIComponent(e)))
                      .join('')
    );
}
function s(e, t) {
    let n = {};
    for (let r of Object.keys(e)) {
        let i = e[r];
        if ('function' != typeof i) {
            n[r] = i;
            continue;
        }
        n[r] = function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return i(...o(n, t));
        };
    }
    return n;
}
