n.d(t, { A: () => f });
var s = n(435558),
    l = n.n(s),
    r = n(17928),
    a = n(506774),
    i = n(73153);
let c = "ConjureComposerDrafts";
function o() {
    return a.w.get(c) ?? {};
}
let u = new Map(),
    d = l().throttle(() => {
        if (0 === u.size) return;
        let e = o();
        for (let [t, n] of u) "" === n ? delete e[t] : (e[t] = n);
        (u.clear(), a.w.set(c, e));
    }, 1e3);
class m extends r.Ay.Store {
    getDraft(e) {
        let t = u.get(e);
        return null != t ? t : (o()[e] ?? "");
    }
}
let f = new m(i.h, {
    LOGOUT: function () {
        return (u.clear(), d.cancel(), a.w.remove(c), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (u.set(t, n), d(), "" === n && d.flush(), !1);
    },
});
