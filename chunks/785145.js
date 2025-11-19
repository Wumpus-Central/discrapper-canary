n.d(t, { Z: () => f }), n(388685);
var r = n(473749),
    i = n(399606),
    a = n(313789),
    o = n(518596),
    s = n(663389),
    l = n(981631),
    c = n(526761);
let u = new Set(Object.values(c.NB)),
    d = (e) => null != e && u.has(e),
    f = () => {
        let e = (0, i.e7)([s.Z], () => {
                let e = s.Z.getSubsection();
                return d(e) ? e : c.NB.USER_PROFILE;
            }),
            t = r.useCallback(
                (t) => {
                    e !== t &&
                        (0, o.openUserSettings)(a.n.PROFILE_PANEL, {
                            section: l.oAB.PROFILE_CUSTOMIZATION,
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
