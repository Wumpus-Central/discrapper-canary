n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(64700),
    i = n(417597),
    l = n(780964),
    s = n(840065),
    a = n(628965),
    o = n(652215),
    c = n(355097);
let d = new Set(Object.values(c.Eq)),
    u = () => {
        let e = (0, i.bG)([a.A], () => {
                let e = a.A.getSubsection();
                return null != e && d.has(e) ? e : c.Eq.USER_PROFILE;
            }),
            t = r.useCallback(
                (t) => {
                    e !== t &&
                        (0, s.openUserSettings)(l.X.PROFILE_PANEL, {
                            section: o.nc_.PROFILE_CUSTOMIZATION,
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
