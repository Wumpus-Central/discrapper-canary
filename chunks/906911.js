n.d(t, { Z: () => m });
var i = n(392711),
    l = n.n(i),
    r = n(243814),
    a = n(45792),
    s = n(699516),
    o = n(594174),
    c = n(823379),
    d = n(914946),
    u = n(186901),
    h = n(981631);
let m = {
    [h.Etm.GET_RELATIONSHIPS]: (0, a.S)(h.Etm.GET_RELATIONSHIPS, {
        scope: { [u.Gp.ANY]: [r.x.RELATIONSHIPS_READ] },
        handler(e) {
            let t = l().pickBy({ ...s.Z.getRelationships() }, (e) => e !== h.OGo.NONE);
            return {
                relationships: l()
                    .map(t, (t, n) => {
                        let i = o.default.getUser(n);
                        if (null == i) return null;
                        let l = (0, d._J)(t, i);
                        return (0, d.kb)(l, e.socket.application.id);
                    })
                    .filter(c.lm)
            };
        }
    })
};
