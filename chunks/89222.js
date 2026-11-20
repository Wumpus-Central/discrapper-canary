var n = r(435558),
    l = r.n(n),
    a = r(855986),
    i = r(506774),
    s = r(73153);
let o = "ConjureComposerDrafts";
function c() {
    return i.w.get(o) ?? {};
}
let u = new Map(),
    d = l().throttle(() => {
        if (0 === u.size) return;
        let e = c();
        for (let [t, r] of u) "" === r ? delete e[t] : (e[t] = r);
        (u.clear(), i.w.set(o, e));
    }, 1e3);
class f extends a.Ay.Store {
    getDraft(e) {
        let t = u.get(e);
        return null != t ? t : (c()[e] ?? "");
    }
}
let m = new f(s.h, {
    LOGOUT: function () {
        return (u.clear(), d.cancel(), i.w.remove(o), !0);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: r } = e;
        return (u.set(t, r), d(), "" === r && d.flush(), !0);
    },
});
r.d(t, {}, { A: m });
