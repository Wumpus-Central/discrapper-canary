n.d(i, {
    default: () => E,
});
var l = n(627968);
n(64700);
var e = n(311907),
    a = n(314116),
    r = n(397927),
    s = n(442433),
    o = n(50268),
    d = n(624458),
    u = n(513461),
    p = n(212455),
    c = n(976860),
    g = n(967198),
    A = n(652215),
    m = n(985018);

function E(t) {
    let { guild: i, onSelect: n } = t,
        E = i.id,
        h = (0, o.A)({
            id: i.id,
            label: m.intl.string(m.t["94lLD7"]),
        }),
        C = (0, e.bG)([p.A], () => p.A.getRequest(E)),
        b = () => {
            d.A.removeGuildJoinRequest(E), g.A.getGuildId() === E && (0, c.pX)(A.BVt.ME);
        };
    return (0, l.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "join-request-guild-context",
        onClose: s.Z_,
        "aria-label": m.intl.string(m.t.HpQykc),
        onSelect: n,
        children: [
            (null == C ? void 0 : C.applicationStatus) === u.B5.REJECTED &&
                (0, l.jsx)(r.Drp, {
                    id: "reapply",
                    label: m.intl.string(m.t.rpFCLs),
                    action: () => {
                        d.A.resetGuildJoinRequest(E).then(() => {
                            (0, c.pX)(A.BVt.GUILD_MEMBER_VERIFICATION(E));
                        });
                    },
                    color: "default",
                }),
            (0, l.jsx)(r.Drp, {
                id: "withdraw",
                label:
                    (null == C ? void 0 : C.applicationStatus) === u.B5.STARTED
                        ? m.intl.string(m.t.OQFlFD)
                        : m.intl.string(m.t.mqtdmQ),
                action: () => {
                    (0, a.A)({
                        title: m.intl.string(m.t.y0CVes),
                        subtitle:
                            (null == C ? void 0 : C.applicationStatus) === u.B5.STARTED
                                ? m.intl.string(m.t.fJwWVt)
                                : m.intl.format(m.t["9ZezpN"], {
                                      name: i.name,
                                  }),
                        confirmText: m.intl.string(m.t.p89ACt),
                        cancelText: m.intl.string(m.t.oEAioF),
                        onConfirm: b,
                    });
                },
                color: "danger",
            }),
            (0, l.jsx)(r.rXV, {
                children: h,
            }),
        ],
    });
}
