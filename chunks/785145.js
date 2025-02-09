n.d(t, { Z: () => u }), n(47120);
var i = n(192379),
    s = n(399606),
    l = n(230711),
    r = n(663389),
    a = n(981631),
    o = n(526761);
let c = new Set(Object.values(o.NB)),
    d = (e) => null != e && c.has(e),
    u = () => {
        let e = (0, s.e7)([r.Z], () => {
                let e = r.Z.getSubsection();
                return d(e) ? e : o.NB.USER_PROFILE;
            }),
            t = i.useCallback(
                (t) => {
                    e !== t && l.Z.setSection(a.oAB.PROFILE_CUSTOMIZATION, t);
                },
                [e]
            );
        return {
            subsection: e,
            setSubsection: t
        };
    };
