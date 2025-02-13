n.d(t, {
    CK: () => u,
    SJ: () => l
});
var i = n(200651);
n(192379);
var r = n(704215),
    a = n(481060),
    s = n(645041),
    o = n(693546);
function l(e) {
    (0, a.ZDy)(async () => {
        let { default: t } = await n.e('95883').then(n.bind(n, 83521));
        return (n) => {
            let a = (t) => {
                (0, s.Qd)(r.C.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, t), n.onClose();
            };
            return (0, i.jsx)(t, {
                ...n,
                onClose: a,
                guildId: e
            });
        };
    });
}
function u(e, t) {
    (0, a.ZDy)(async () => {
        let { default: r } = await Promise.all([n.e('82158'), n.e('49387')]).then(n.bind(n, 717057));
        return (n) => {
            let a = () => {
                null != t && o.Z.ackUserGuildJoinRequest(e, t), n.onClose();
            };
            return (0, i.jsx)(r, {
                ...n,
                onAccept: a,
                guildId: e
            });
        };
    });
}
n(970606);
