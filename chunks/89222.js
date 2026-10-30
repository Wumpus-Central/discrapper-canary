s.d(t, { A: () => f });
var n = s(435558),
    l = s.n(n),
    a = s(17928),
    r = s(506774),
    i = s(73153);
let o = "ConjureComposerDrafts";
function c() {
    return r.w.get(o) ?? {};
}
let u = new Map(),
    d = l().throttle(() => {
        if (0 === u.size) return;
        let e = c();
        for (let [t, s] of u) "" === s ? delete e[t] : (e[t] = s);
        (u.clear(), r.w.set(o, e));
    }, 1e3);
class m extends a.Ay.Store {
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
        let { projectId: t, draft: s } = e;
        return (u.set(t, s), d(), "" === s && d.flush(), !1);
    },
});
