n.d(t, { Z: () => u }), n(388685);
var i = n(192379),
    r = n(399606),
    s = n(230711),
    l = n(663389),
    a = n(981631),
    o = n(526761);
let c = new Set(Object.values(o.NB)),
    d = (e) => null != e && c.has(e),
    u = () => {
        let e = (0, r.e7)([l.Z], () => {
                let e = l.Z.getSubsection();
                return d(e) ? e : o.NB.USER_PROFILE;
            }),
            t = i.useCallback(
                (t) => {
                    e !== t && s.Z.setSection(a.oAB.PROFILE_CUSTOMIZATION, t);
                },
                [e]
            );
        return {
            subsection: e,
            setSubsection: t
        };
    };
