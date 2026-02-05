n.d(t, { A: () => u });
var i = n(64700),
    s = n(417597),
    r = n(780964),
    a = n(840065),
    l = n(628965),
    o = n(652215),
    c = n(355097);
let d = new Set(Object.values(c.Eq)),
    u = () => {
        let e = (0, s.bG)([l.A], () => {
                let e = l.A.getSubsection();
                return null != e && d.has(e) ? e : c.Eq.USER_PROFILE;
            }),
            t = i.useCallback(
                (t) => {
                    e !== t &&
                        (0, a.openUserSettings)(r.X.PROFILE_PANEL, {
                            section: o.nc_.PROFILE_CUSTOMIZATION,
                            subsection: t,
                        });
                },
                [e],
            );
        return { subsection: e, setSubsection: t };
    };
