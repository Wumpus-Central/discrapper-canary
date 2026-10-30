n.d(t, { A: () => o });
var i = n(956518),
    r = n(744230),
    a = n(559447),
    s = n(645131),
    l = n(296872);
async function o(e) {
    if (!(0, l.ac)("loadEmbeddedAppCSPForLaunch")) return;
    let t = (0, i.Ay)(e),
        n = null != t ? (0, i.S)(t) : null;
    if (null != n && null == s.A.getPolicy(n))
        try {
            await (0, a.y)(n);
        } catch {
            throw new r.A(r.A.Reasons.CSP_UNAVAILABLE);
        }
}
