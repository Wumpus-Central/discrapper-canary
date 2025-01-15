n(47120);
var i = n(192379),
    r = n(399606),
    s = n(230711),
    a = n(663389),
    l = n(981631),
    o = n(526761);
let c = new Set(Object.values(o.NB)),
    d = (e) => null != e && c.has(e);
t.Z = () => {
    let e = (0, r.e7)([a.Z], () => {
            let e = a.Z.getSubsection();
            return d(e) ? e : o.NB.USER_PROFILE;
        }),
        t = i.useCallback(
            (t) => {
                if (e !== t) s.Z.setSection(l.oAB.PROFILE_CUSTOMIZATION, t);
            },
            [e]
        );
    return {
        subsection: e,
        setSubsection: t
    };
};
