i.d(e, { default: () => x });
var n = i(200651);
i(192379);
var l = i(442837),
    r = i(481060),
    a = i(239091),
    s = i(100527),
    d = i(970606),
    o = i(299206),
    c = i(693546),
    u = i(246364),
    h = i(937111),
    p = i(703656),
    Z = i(914010),
    m = i(981631),
    g = i(388032);
function x(t) {
    let { guild: e, onSelect: i } = t,
        x = e.id,
        C = (0, o.Z)({
            id: e.id,
            label: g.intl.string(g.t['94lLDw'])
        }),
        E = (0, l.e7)([h.Z], () => h.Z.getRequest(x)),
        f = () => {
            c.Z.removeGuildJoinRequest(x), Z.Z.getGuildId() === x && (0, p.uL)(m.Z5c.ME);
        };
    return (0, n.jsxs)(r.v2r, {
        navId: 'join-request-guild-context',
        onClose: a.Zy,
        'aria-label': g.intl.string(g.t.HpQykZ),
        onSelect: i,
        children: [
            (null == E ? void 0 : E.applicationStatus) === u.wB.REJECTED &&
                (0, n.jsx)(r.sNh, {
                    id: 'reapply',
                    label: g.intl.string(g.t.rpFCLi),
                    action: () => {
                        e.hasFeature(m.oNc.CLAN) &&
                            (0, d.Vr)({
                                guildId: x,
                                source: s.Z.CLAN_REAPPLY
                            }),
                            c.Z.resetGuildJoinRequest(x).then(() => {
                                (0, p.uL)(m.Z5c.GUILD_MEMBER_VERIFICATION(x));
                            });
                    },
                    color: 'default'
                }),
            (0, n.jsx)(r.sNh, {
                id: 'withdraw',
                label: g.intl.string(g.t.mqtdmZ),
                action: () => {
                    (0, r.h7j)((t) =>
                        (0, n.jsx)(r.ConfirmModal, {
                            header: g.intl.string(g.t.y0CVen),
                            confirmText: g.intl.string(g.t.mqtdmZ),
                            cancelText: g.intl.string(g.t['ETE/oK']),
                            onConfirm: f,
                            ...t,
                            children: (0, n.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: g.intl.format(g.t['9ZezpK'], { name: e.name })
                            })
                        })
                    );
                },
                color: 'danger'
            }),
            (0, n.jsx)(r.kSQ, { children: C })
        ]
    });
}
