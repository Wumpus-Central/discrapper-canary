n.d(i, { default: () => h });
var e = n(627968);
n(64700);
var l = n(17928),
    a = n(314116),
    r = n(550079),
    s = n(477782),
    o = n(442433),
    d = n(50268),
    u = n(624458),
    c = n(513461),
    p = n(212455),
    g = n(976860),
    A = n(967198),
    m = n(652215),
    E = n(985018);
function h(t) {
    let { guild: i, onSelect: n } = t,
        h = i.id,
        C = (0, d.A)({ id: i.id, label: E.intl.string(E.t["94lLD7"]) }),
        b = (0, l.bG)([p.A], () => p.A.getRequest(h)),
        D = () => {
            u.A.removeGuildJoinRequest(h), A.A.getGuildId() === h && (0, g.pX)(m.BVt.ME);
        };
    return (0, e.jsxs)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "join-request-guild-context",
        onClose: o.Z_,
        "aria-label": E.intl.string(E.t.HpQykc),
        onSelect: n,
        children: [
            b?.applicationStatus === c.B5.REJECTED &&
                (0, e.jsx)(s.Dr, {
                    id: "reapply",
                    label: E.intl.string(E.t.rpFCLs),
                    action: () => {
                        u.A.resetGuildJoinRequest(h).then(() => {
                            (0, g.pX)(m.BVt.GUILD_MEMBER_VERIFICATION(h));
                        });
                    },
                    color: "default",
                }),
            (0, e.jsx)(s.Dr, {
                id: "withdraw",
                label: b?.applicationStatus === c.B5.STARTED ? E.intl.string(E.t.OQFlFD) : E.intl.string(E.t.mqtdmQ),
                action: () => {
                    (0, a.A)({
                        title: E.intl.string(E.t.y0CVes),
                        subtitle:
                            b?.applicationStatus === c.B5.STARTED
                                ? E.intl.string(E.t.fJwWVt)
                                : E.intl.format(E.t["9ZezpN"], { name: i.name }),
                        confirmText: E.intl.string(E.t.p89ACt),
                        cancelText: E.intl.string(E.t.oEAioF),
                        onConfirm: D,
                    });
                },
                color: "danger",
            }),
            (0, e.jsx)(s.rX, { children: C }),
        ],
    });
}
