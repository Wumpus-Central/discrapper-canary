s.d(t, { A: () => f });
var n = s(435558),
    a = s.n(n),
    l = s(17928),
    r = s(506774),
    i = s(73153);
let c = "ConjureComposerDrafts";
function o() {
    return r.w.get(c) ?? {};
}
let u = new Map(),
    d = a().throttle(() => {
        if (0 === u.size) return;
        let e = o();
        for (let [t, s] of u) "" === s ? delete e[t] : (e[t] = s);
        (u.clear(), r.w.set(c, e));
    }, 1e3);
class m extends l.Ay.Store {
    getDraft(e) {
        let t = u.get(e);
        return null != t ? t : (o()[e] ?? "");
    }
}
let f = new m(i.h, {
    LOGOUT: function () {
        return (u.clear(), d.cancel(), r.w.remove(c), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: s } = e;
        return (u.set(t, s), d(), "" === s && d.flush(), !1);
    },
});
