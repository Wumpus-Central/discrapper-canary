r.d(t, { A: () => h }), r(667532);
var n = r(311907),
    s = r(506774),
    l = r(73153),
    a = r(768570);
let i = a.nC,
    o = !1,
    u = {};
class c extends n.Ay.Store {
    static displayName = a.yQ;
    initialize() {
        var e;
        let t = s.w.get(i);
        t?.history != null &&
            (Object.keys((e = t.history)).forEach((t) => {
                Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && e.trim())),
                    (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t];
            }),
            (u = e)),
            (o = !!s.w.get("tokenized"));
    }
    isTokenized() {
        return o;
    }
    getHistory(e) {
        return u[e];
    }
}
let h = new c(l.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
        let { id: t } = e;
        delete u[t], s.w.set(a.nC, { history: u });
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function (e) {
        let { id: t, query: r } = e;
        null != u[t] && ((u[t] = u[t].filter((e) => e !== r)), s.w.set(a.nC, { history: u }));
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function (e) {
        let { id: t, query: r } = e;
        if ("string" != typeof r || "" === (r = r.trim())) return;
        let n = (u[t] = u[t] ?? []),
            l = n.indexOf(r);
        -1 !== l
            ? (n.splice(l, 1), n.unshift(r))
            : null != n[0] && "" !== n[0] && r.startsWith(n[0])
              ? (n[0] = r)
              : l < 0 && n.unshift(r),
            n.length > 5 && n.splice(5, n.length),
            s.w.set(a.nC, { history: u });
    },
    LOGOUT: function () {
        s.w.remove(a.nC), (u = {});
    },
});
