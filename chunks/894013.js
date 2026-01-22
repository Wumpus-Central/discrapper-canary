n.d(t, { A: () => f }), n(896048);
var r = n(64700),
    i = n(417597),
    a = n(780964),
    s = n(840065),
    o = n(628965),
    l = n(652215),
    c = n(355097);
let u = new Set(Object.values(c.Eq)),
    d = (e) => null != e && u.has(e),
    f = () => {
        let e = (0, i.bG)([o.A], () => {
                let e = o.A.getSubsection();
                return d(e) ? e : c.Eq.USER_PROFILE;
            }),
            t = r.useCallback(
                (t) => {
                    e !== t &&
                        (0, s.openUserSettings)(a.X.PROFILE_PANEL, {
                            section: l.nc_.PROFILE_CUSTOMIZATION,
                            subsection: t,
                        });
                },
                [e],
            );
        return {
            subsection: e,
            setSubsection: t,
        };
    };
