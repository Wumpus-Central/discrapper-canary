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
    s = r(481060),
    o = r(645041),
    l = r(693546),
    u = r(970606);
function c(e) {
    (0, s.openModalLazy)(async () => {
        let { default: n } = await r.e('95883').then(r.bind(r, 83521));
        return (r) => {
            let s = (n) => {
                (0, o.Qd)(a.C.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, n), r.onClose();
            };
            return (0, i.jsx)(n, {
                ...r,
                onClose: s,
                guildId: e
            });
        };
    });
}
function d(e, n, a, o, l) {
    (0, u.Vr)({
        guildId: e,
        ...a
    }),
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([r.e('53967'), r.e('80026'), r.e('4683')]).then(r.bind(r, 723795));
            return (r) =>
                (0, i.jsx)(e, {
                    ...r,
                    clan: n,
                    prioritizedGameIds: o,
                    position: l
                });
        });
}
function f(e, n) {
    (0, s.openModalLazy)(async () => {
        let { default: a } = await Promise.all([r.e('82158'), r.e('54907')]).then(r.bind(r, 717057));
        return (r) => {
            let s = () => {
                null != n && l.Z.ackUserGuildJoinRequest(e, n), r.onClose();
            };
            return (0, i.jsx)(a, {
                ...r,
                onAccept: s,
                guildId: e
            });
        };
    });
}
