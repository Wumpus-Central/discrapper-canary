n.d(t, { A: () => o });
var i = n(96858),
    r = n(956518),
    a = n(744230),
    s = n(645131),
    l = n(97157);
async function o(e) {
    if (2 !== (0, i.hn)("loadEmbeddedAppCSPForLaunch")) return;
    let t = (0, r.Ay)(e),
        n = null != t ? (0, r.S)(t) : null;
    if (null != n && (await l.P.fetchMany([n]), null == s.A.getPolicy(n))) throw new a.A(a.A.Reasons.CSP_UNAVAILABLE);
}
