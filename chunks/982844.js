n.d(t, { A: () => o });
var i = n(956518),
    r = n(744230),
    a = n(645131),
    s = n(296872),
    l = n(97157);
async function o(e) {
    if (!(0, s.ac)("loadEmbeddedAppCSPForLaunch")) return;
    let t = (0, i.Ay)(e),
        n = null != t ? (0, i.S)(t) : null;
    if (null != n && (await l.P.fetchMany([n]), null == a.A.getPolicy(n))) throw new r.A(r.A.Reasons.CSP_UNAVAILABLE);
}
