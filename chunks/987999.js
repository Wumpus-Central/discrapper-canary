n.d(i, { default: () => E });
var l = n(54381);
n(473749);
var e = n(442837),
    s = n(248514),
    a = n(481060),
    r = n(239091),
    o = n(299206),
    d = n(693546),
    u = n(246364),
    c = n(937111),
    p = n(703656),
    g = n(914010),
    h = n(981631),
    Z = n(388032);
function E(t) {
    let { guild: i, onSelect: n } = t,
        E = i.id,
        C = (0, o.Z)({
            id: i.id,
            label: Z.intl.string(Z.t["94lLD7"]),
        }),
        f = (0, e.e7)([c.Z], () => c.Z.getRequest(E)),
        m = () => {
            d.Z.removeGuildJoinRequest(E), g.Z.getGuildId() === E && (0, p.uL)(h.Z5c.ME);
        };
    return (0, l.jsxs)(a.v2r, {
        navId: "join-request-guild-context",
        onClose: r.Zy,
        "aria-label": Z.intl.string(Z.t.HpQykc),
        onSelect: n,
        children: [
            (null == f ? void 0 : f.applicationStatus) === u.wB.REJECTED &&
                (0, l.jsx)(a.sNh, {
                    id: "reapply",
                    label: Z.intl.string(Z.t.rpFCLs),
                    action: () => {
                        d.Z.resetGuildJoinRequest(E).then(() => {
                            (0, p.uL)(h.Z5c.GUILD_MEMBER_VERIFICATION(E));
                        });
                    },
                    color: "default",
                }),
            (0, l.jsx)(a.sNh, {
                id: "withdraw",
                label:
                    (null == f ? void 0 : f.applicationStatus) === u.wB.STARTED
                        ? Z.intl.string(Z.t.OQFlFD)
                        : Z.intl.string(Z.t.mqtdmQ),
                action: () => {
                    (0, s.Z)({
                        title: Z.intl.string(Z.t.y0CVes),
                        subtitle:
                            (null == f ? void 0 : f.applicationStatus) === u.wB.STARTED
                                ? Z.intl.string(Z.t.fJwWVt)
                                : Z.intl.format(Z.t["9ZezpN"], { name: i.name }),
                        confirmText: Z.intl.string(Z.t.p89ACt),
                        cancelText: Z.intl.string(Z.t.oEAioF),
                        onConfirm: m,
                    });
                },
                color: "danger",
            }),
            (0, l.jsx)(a.kSQ, { children: C }),
        ],
    });
}
