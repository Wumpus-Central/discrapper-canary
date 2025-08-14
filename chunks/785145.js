n.d(t, { Z: () => d }), n(388685);
var i = n(73800),
    r = n(399606),
    s = n(230711),
    a = n(663389),
    l = n(981631),
    o = n(526761);
let c = new Set(Object.values(o.NB)),
    d = () => {
        let e = (0, r.e7)([a.Z], () => {
                let e = a.Z.getSubsection();
                return null != e && c.has(e) ? e : o.NB.USER_PROFILE;
            }),
            t = i.useCallback(
                (t) => {
                    e !== t && s.Z.setSection(l.oAB.PROFILE_CUSTOMIZATION, t);
                },
                [e],
            );
        return {
            subsection: e,
            setSubsection: t,
        };
    };
