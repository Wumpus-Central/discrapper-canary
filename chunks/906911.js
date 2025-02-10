n.d(t, { Z: () => u });
var i = n(392711),
    l = n.n(i),
    r = n(243814),
    a = n(45792),
    s = n(699516),
    o = n(914946),
    c = n(186901),
    d = n(981631);
let u = {
    [d.Etm.GET_RELATIONSHIPS]: (0, a.S)(d.Etm.GET_RELATIONSHIPS, {
        scope: { [c.Gp.ANY]: [r.x.RELATIONSHIPS_READ] },
        handler() {
            let e = l().pickBy({ ...s.Z.getRelationships() }, (e) => e !== d.OGo.NONE);
            return { relationships: l().map(e, (e, t) => (0, o.cD)(e, t)) };
        }
    })
};
