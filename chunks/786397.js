n.d(t, {
    B: () => c,
    w: () => u
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(846519),
    a = n(594174),
    s = n(431),
    l = n(74538);
function c(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function u(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getUserTrialOffer(e)),
        [n, u] = r.useState(c(t)),
        d = (0, i.e7)([a.default], () => (0, l.I5)(a.default.getCurrentUser()));
    return (
        r.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new o.V7(),
                    r = () => {
                        let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        null == e ||
                            e.start(i, () => {
                                !n && c(t) ? u(!0) : r();
                            });
                    };
                return r(), () => e.stop();
            }
        }, [n, t]),
        n || d ? null : t
    );
}
