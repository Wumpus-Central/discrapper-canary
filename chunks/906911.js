n.d(t, { Z: () => p }), n(997841), n(388685), n(539854);
var r = n(243814),
    i = n(149765),
    l = n(45792),
    a = n(699516),
    o = n(594174),
    s = n(996106),
    c = n(914946),
    u = n(186901),
    d = n(981631);
let p = {
    [d.Etm.GET_RELATIONSHIPS]: (0, l.S)(d.Etm.GET_RELATIONSHIPS, {
        scope: { [u.Gp.ANY]: [r.x.RELATIONSHIPS_READ] },
        handler(e) {
            var t;
            if (i.e$(i.vB(null != (t = e.socket.application.flags) ? t : 0), i.vB(d.udG.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new s.Z({ errorCode: d.lTL.INVALID_PERMISSIONS }, "Missing Permissions");
            let n = [];
            for (let [t, r] of a.Z.getMutableRelationships().entries()) {
                if (r === d.OGo.NONE) continue;
                let i = o.default.getUser(t);
                if (null == i) continue;
                let l = (0, c._J)(r, i);
                n.push((0, c.kb)(l, e.socket.application.id));
            }
            return { relationships: n };
        },
    }),
};
