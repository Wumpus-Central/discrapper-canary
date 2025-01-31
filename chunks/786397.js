n.d(t, {
    B: () => u,
    w: () => c
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    a = n(846519),
    s = n(594174),
    o = n(431),
    l = n(74538);
function u(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function c(e) {
    let t = (0, r.e7)([o.Z], () => o.Z.getUserTrialOffer(e)),
        [n, c] = i.useState(u(t)),
        d = (0, r.e7)([s.default], () => (0, l.I5)(s.default.getCurrentUser()));
    return (
        i.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new a.V7(),
                    i = () => {
                        let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        null == e ||
                            e.start(r, () => {
                                !n && u(t) ? c(!0) : i();
                            });
                    };
                return i(), () => e.stop();
            }
        }, [n, t]),
        n || d ? null : t
    );
}
