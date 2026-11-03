n.d(t, { A: () => m });
var r = n(435558),
    l = n.n(r),
    a = n(17928),
    i = n(506774),
    s = n(73153);
let o = "ConjureComposerDrafts";
function c() {
    return i.w.get(o) ?? {};
}
let u = new Map(),
    d = l().throttle(() => {
        if (0 === u.size) return;
        let e = c();
        for (let [t, n] of u) "" === n ? delete e[t] : (e[t] = n);
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
        let { projectId: t, draft: n } = e;
        return (u.set(t, n), d(), "" === n && d.flush(), !0);
    },
});
