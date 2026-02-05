"use strict";
n.d(t, { A: () => g }), n(667532);
var r = n(311907),
    i = n(506774),
    a = n(73153),
    s = n(768570);
let o = s.nC,
    l = "tokenized",
    u = !1,
    c = {};
function d(e) {
    let { id: t, query: n } = e;
    if ("string" != typeof n || "" === (n = n.trim())) return;
    let r = (c[t] = c[t] ?? []),
        a = r.indexOf(n);
    -1 !== a
        ? (r.splice(a, 1), r.unshift(n))
        : null != r[0] && "" !== r[0] && n.startsWith(r[0])
          ? (r[0] = n)
          : a < 0 && r.unshift(n),
        r.length > 5 && r.splice(5, r.length),
        i.w.set(s.nC, { history: c });
}
function _(e) {
    let { id: t } = e;
    delete c[t], i.w.set(s.nC, { history: c });
}
function f(e) {
    let { id: t, query: n } = e;
    null != c[t] && ((c[t] = c[t].filter((e) => e !== n)), i.w.set(s.nC, { history: c }));
}
function p(e) {
    return (
        Object.keys(e).forEach((t) => {
            Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && e.trim())),
                (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t];
        }),
        e
    );
}
function h() {
    i.w.remove(s.nC), (c = {});
}
class m extends r.Ay.Store {
    static displayName = s.yQ;
    initialize() {
        let e = i.w.get(o);
        e?.history != null && (c = p(e.history)), (u = !!i.w.get(l));
    }
    isTokenized() {
        return u;
    }
    getHistory(e) {
        return c[e];
    }
}
let g = new m(a.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: _,
    SEARCH_HISTORY_WEB_REMOVE_ITEM: f,
    SEARCH_HISTORY_WEB_ADD_ITEM: d,
    LOGOUT: h,
});
