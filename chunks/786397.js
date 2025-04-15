n.d(t, {
    B: () => d,
    w: () => f
}),
    n(388685);
var r = n(192379),
    i = n(442837),
    o = n(846519),
    a = n(594174),
    s = n(431),
    l = n(580130),
    c = n(74538),
    u = n(249689);
function d(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function f(e) {
    let t = a.default.getCurrentUser(),
        n = (0, i.e7)([s.Z], () => s.Z.getUserTrialOffer(e)),
        [f, _] = r.useState(d(n)),
        p = (0, i.e7)([a.default], () => (0, c.I5)(a.default.getCurrentUser())),
        h = (0, i.Wu)([l.Z], () => l.Z.getFractionalPremium(!1)).length > 0,
        m = !p || (h && (0, u.C)('use-trial-offer', t));
    return (
        r.useEffect(() => {
            if (null != n && null != n.expires_at) {
                let e = new o.V7(),
                    t = () => {
                        let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                        null == e ||
                            e.start(r, () => {
                                !f && d(n) ? _(!0) : t();
                            });
                    };
                return t(), () => e.stop();
            }
        }, [f, n]),
        !f && m ? n : null
    );
}
