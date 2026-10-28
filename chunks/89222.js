n.d(t, { A: () => f });
var s = n(435558),
    a = n.n(s),
    l = n(17928),
    r = n(506774),
    i = n(73153);
let o = "ConjureComposerDrafts";
function c() {
    return r.w.get(o) ?? {};
}
let u = new Map(),
    d = a().throttle(() => {
        if (0 === u.size) return;
        let e = c();
        for (let [t, n] of u) "" === n ? delete e[t] : (e[t] = n);
        (u.clear(), r.w.set(o, e));
    }, 1e3);
class m extends l.Ay.Store {
    getDraft(e) {
        let t = u.get(e);
        return null != t ? t : (c()[e] ?? "");
    }
}
let f = new m(i.h, {
    LOGOUT: function () {
        return (u.clear(), d.cancel(), r.w.remove(o), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (u.set(t, n), d(), "" === n && d.flush(), !1);
    },
});
