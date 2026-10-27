a.d(t, { A: () => f });
var s = a(435558),
    n = a.n(s),
    l = a(17928),
    r = a(506774),
    i = a(73153);
let o = "ConjureComposerDrafts";
function c() {
    return r.w.get(o) ?? {};
}
let u = new Map(),
    d = n().throttle(() => {
        if (0 === u.size) return;
        let e = c();
        for (let [t, a] of u) "" === a ? delete e[t] : (e[t] = a);
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
        let { projectId: t, draft: a } = e;
        return (u.set(t, a), d(), "" === a && d.flush(), !1);
    },
});
