var i = n(392711),
    r = n.n(i),
    l = n(243814),
    a = n(814443),
    s = n(699516),
    o = n(594174),
    c = n(914946),
    d = n(981631);
t.Z = {
    [d.Etm.GET_RELATIONSHIPS]: {
        scope: l.x.RELATIONSHIPS_READ,
        handler() {
            let e = { ...s.Z.getRelationships() };
            return (
                a.Z.getUserAffinitiesUserIds().forEach((t) => {
                    null == e[t] && null != o.default.getUser(t) && (e[t] = d.OGo.IMPLICIT);
                }),
                { relationships: r().map(e, (e, t) => (0, c.cD)(e, t)) }
            );
        }
    }
};
