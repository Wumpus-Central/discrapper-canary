n.d(i, {
    default: () => h,
});
var l = n(627968);
n(64700);
var e = n(311907),
    r = n(314116),
    a = n(397927),
    s = n(442433),
    o = n(50268),
    d = n(624458),
    p = n(513461),
    u = n(212455),
    c = n(976860),
    g = n(967198),
    A = n(652215),
    E = n(985018);

function h(t) {
    let { guild: i, onSelect: n } = t,
        h = i.id,
        C = (0, o.A)({
            id: i.id,
            label: E.intl.string(E.t["94lLD7"]),
        }),
        b = (0, e.bG)([u.A], () => u.A.getRequest(h)),
        m = () => {
            d.A.removeGuildJoinRequest(h), g.A.getGuildId() === h && (0, c.pX)(A.BVt.ME);
        };
    return (0, l.jsxs)(a.W1t, {
        navId: "join-request-guild-context",
        onClose: s.Z_,
        "aria-label": E.intl.string(E.t.HpQykc),
        onSelect: n,
        children: [
            (null == b ? void 0 : b.applicationStatus) === p.B5.REJECTED &&
                (0, l.jsx)(a.Drp, {
                    id: "reapply",
                    label: E.intl.string(E.t.rpFCLs),
                    action: () => {
                        d.A.resetGuildJoinRequest(h).then(() => {
                            (0, c.pX)(A.BVt.GUILD_MEMBER_VERIFICATION(h));
                        });
                    },
                    color: "default",
                }),
            (0, l.jsx)(a.Drp, {
                id: "withdraw",
                label:
                    (null == b ? void 0 : b.applicationStatus) === p.B5.STARTED
                        ? E.intl.string(E.t.OQFlFD)
                        : E.intl.string(E.t.mqtdmQ),
                action: () => {
                    (0, r.A)({
                        title: E.intl.string(E.t.y0CVes),
                        subtitle:
                            (null == b ? void 0 : b.applicationStatus) === p.B5.STARTED
                                ? E.intl.string(E.t.fJwWVt)
                                : E.intl.format(E.t["9ZezpN"], {
                                      name: i.name,
                                  }),
                        confirmText: E.intl.string(E.t.p89ACt),
                        cancelText: E.intl.string(E.t.oEAioF),
                        onConfirm: m,
                    });
                },
                color: "danger",
            }),
            (0, l.jsx)(a.rXV, {
                children: C,
            }),
        ],
    });
}
