n.d(t, { Z: () => d }), n(388685);
var r = n(647438),
    i = n(399606),
    a = n(230711),
    o = n(663389),
    s = n(981631),
    l = n(526761);
let c = new Set(Object.values(l.NB)),
    u = (e) => null != e && c.has(e),
    d = () => {
        let e = (0, i.e7)([o.Z], () => {
                let e = o.Z.getSubsection();
                return u(e) ? e : l.NB.USER_PROFILE;
            }),
            t = r.useCallback(
                (t) => {
                    e !== t && a.Z.setSection(s.oAB.PROFILE_CUSTOMIZATION, t);
                },
                [e],
            );
        return {
            subsection: e,
            setSubsection: t,
        };
    };
