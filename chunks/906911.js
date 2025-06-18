n.d(t, { Z: () => u }), n(388685), n(539854);
var r = n(243814),
    i = n(45792),
    l = n(699516),
    a = n(594174),
    o = n(914946),
    s = n(186901),
    c = n(981631);
let u = {
    [c.Etm.GET_RELATIONSHIPS]: (0, i.S)(c.Etm.GET_RELATIONSHIPS, {
        scope: { [s.Gp.ANY]: [r.x.RELATIONSHIPS_READ] },
        handler(e) {
            let t = [];
            for (let [n, r] of l.Z.getMutableRelationships().entries()) {
                if (r === c.OGo.NONE) continue;
                let i = a.default.getUser(n);
                if (null == i) continue;
                let l = (0, o._J)(r, i);
                t.push((0, o.kb)(l, e.socket.application.id));
            }
            return { relationships: t };
        }
    })
};
