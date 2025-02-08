n.d(i, { default: () => m });
var e = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(239091),
    s = n(100527),
    o = n(970606),
    d = n(299206),
    c = n(693546),
    u = n(246364),
    p = n(937111),
    h = n(703656),
    g = n(914010),
    Z = n(981631),
    C = n(388032);
function m(t) {
    let { guild: i, onSelect: n } = t,
        m = i.id,
        x = (0, d.Z)({
            id: i.id,
            label: C.intl.string(C.t['94lLDw'])
        }),
        E = (0, l.e7)([p.Z], () => p.Z.getRequest(m)),
        f = () => {
            c.Z.removeGuildJoinRequest(m), g.Z.getGuildId() === m && (0, h.uL)(Z.Z5c.ME);
        };
    return (0, e.jsxs)(r.v2r, {
        navId: 'join-request-guild-context',
        onClose: a.Zy,
        'aria-label': C.intl.string(C.t.HpQykZ),
        onSelect: n,
        children: [
            (null == E ? void 0 : E.applicationStatus) === u.wB.REJECTED &&
                (0, e.jsx)(r.sNh, {
                    id: 'reapply',
                    label: C.intl.string(C.t.rpFCLi),
                    action: () => {
                        i.hasFeature(Z.oNc.CLAN) &&
                            (0, o.Vr)({
                                guildId: m,
                                source: s.Z.CLAN_REAPPLY
                            }),
                            c.Z.resetGuildJoinRequest(m).then(() => {
                                (0, h.uL)(Z.Z5c.GUILD_MEMBER_VERIFICATION(m));
                            });
                    },
                    color: 'default'
                }),
            (0, e.jsx)(r.sNh, {
                id: 'withdraw',
                label: (null == E ? void 0 : E.applicationStatus) === u.wB.STARTED ? C.intl.string(C.t.OQFlFB) : C.intl.string(C.t.mqtdmZ),
                action: () => {
                    (0, r.h7j)((t) =>
                        (0, e.jsx)(r.ConfirmModal, {
                            header: C.intl.string(C.t.y0CVen),
                            confirmText: C.intl.string(C.t.p89ACg),
                            cancelText: C.intl.string(C.t.oEAioK),
                            onConfirm: f,
                            ...t,
                            children: (0, e.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: (null == E ? void 0 : E.applicationStatus) === u.wB.STARTED ? C.intl.string(C.t.fJwWVl) : C.intl.format(C.t['9ZezpK'], { name: i.name })
                            })
                        })
                    );
                },
                color: 'danger'
            }),
            (0, e.jsx)(r.kSQ, { children: x })
        ]
    });
}
