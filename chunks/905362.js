r.d(n, {
    CK: function () {
        return f;
    },
    SJ: function () {
        return c;
    },
    qF: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(704215),
    o = r(481060),
    s = r(645041),
    l = r(693546),
    u = r(970606);
function c(e) {
    (0, o.openModalLazy)(async () => {
        let { default: n } = await r.e('95883').then(r.bind(r, 83521));
        return (r) => {
            let o = (n) => {
                (0, s.Qd)(a.C.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, n), r.onClose();
            };
            return (0, i.jsx)(n, {
                ...r,
                onClose: o,
                guildId: e
            });
        };
    });
}
function d(e, n, a, s, l) {
    (0, u.Vr)({
        guildId: e,
        ...a
    }),
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([r.e('53967'), r.e('99916'), r.e('80026'), r.e('44126')]).then(r.bind(r, 723795));
            return (r) =>
                (0, i.jsx)(e, {
                    ...r,
                    clan: n,
                    prioritizedGameIds: s,
                    position: l
                });
        });
}
function f(e, n) {
    (0, o.openModalLazy)(async () => {
        let { default: a } = await Promise.all([r.e('82158'), r.e('54907')]).then(r.bind(r, 717057));
        return (r) => {
            let o = () => {
                null != n && l.Z.ackUserGuildJoinRequest(e, n), r.onClose();
            };
            return (0, i.jsx)(a, {
                ...r,
                onAccept: o,
                guildId: e
            });
        };
    });
}
