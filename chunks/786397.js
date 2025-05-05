n.d(t, {
    B: () => c,
    w: () => u
}),
    n(388685);
var r = n(73800),
    i = n(442837),
    a = n(846519),
    o = n(594174),
    s = n(431),
    l = n(74538);
function c(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function u(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getUserTrialOffer(e)),
        [n, u] = r.useState(c(t)),
        d = !(0, i.e7)([o.default], () => (0, l.I5)(o.default.getCurrentUser())) || s.Z.canFractionalPremiumUserUseOffer();
    return (
        r.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new a.V7(),
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
        !n && d ? t : null
    );
}
