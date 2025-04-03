n.d(t, { Z: () => o });
var r = n(45792),
    i = n(914946),
    l = n(238679),
    a = n(981631);
let o = {
    [a.Etm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, r.S)(a.Etm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
        scope: l.KW,
        handler(e) {
            let { socket: t } = e;
            return (0, i.bu)(t.transport), (0, l.dO)();
        }
    })
};
