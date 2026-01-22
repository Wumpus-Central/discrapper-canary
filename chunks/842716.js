n.d(t, { A: () => b }), n(733351), n(667532);
var r,
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(768570);
function l(e, t, n) {
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
let c = o.nC,
    u = "tokenized",
    d = !1,
    f = {};
function p(e) {
    var t;
    let { id: n, query: r } = e;
    if ("string" != typeof r || "" === (r = r.trim())) return;
    let i = (f[n] = null != (t = f[n]) ? t : []),
        s = i.indexOf(r);
    -1 !== s
        ? (i.splice(s, 1), i.unshift(r))
        : null != i[0] && "" !== i[0] && r.startsWith(i[0])
          ? (i[0] = r)
          : s < 0 && i.unshift(r),
        i.length > 5 && i.splice(5, i.length),
        a.w.set(o.nC, { history: f });
}
function _(e) {
    let { id: t } = e;
    delete f[t], a.w.set(o.nC, { history: f });
}
function h(e) {
    let { id: t, query: n } = e;
    null != f[t] && ((f[t] = f[t].filter((e) => e !== n)), a.w.set(o.nC, { history: f }));
}
function m(e) {
    return (
        Object.keys(e).forEach((t) => {
            Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && e.trim())),
                (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t];
        }),
        e
    );
}
function g() {
    a.w.remove(o.nC), (f = {});
}
class E extends (r = i.Ay.Store) {
    initialize() {
        let e = a.w.get(c);
        (null == e ? void 0 : e.history) != null && (f = m(e.history)), (d = !!a.w.get(u));
    }
    isTokenized() {
        return d;
    }
    getHistory(e) {
        return f[e];
    }
}
l(E, "displayName", o.yQ);
let b = new E(s.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: _,
    SEARCH_HISTORY_WEB_REMOVE_ITEM: h,
    SEARCH_HISTORY_WEB_ADD_ITEM: p,
    LOGOUT: g,
});
