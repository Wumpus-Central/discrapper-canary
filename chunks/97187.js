n.d(i, { default: () => E });
var e = n(627968);
n(64700);
var l = n(17928),
    a = n(314116),
    r = n(980707),
    s = n(477782),
    o = n(442433),
    d = n(50268),
    u = n(624458),
    c = n(513461),
    p = n(212455),
    g = n(976860),
    A = n(967198),
    f = n(652215),
    m = n(375708);
function E(t) {
    let { guild: i, onSelect: n } = t,
        E = i.id,
        h = (0, d.A)({ id: i.id, label: m.intl.string(m.t["94lLD7"]) }),
        C = (0, l.bG)([p.A], () => p.A.getRequest(E));
    function b() {
        u.A.removeGuildJoinRequest(E), A.A.getGuildId() === E && (0, g.pX)(f.BVt.ME);
    }
    return (0, e.jsxs)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "join-request-guild-context",
        onClose: o.Z_,
        "aria-label": m.intl.string(m.t.HpQykc),
        onSelect: n,
        children: [
            C?.applicationStatus === c.B5.REJECTED &&
                (0, e.jsx)(s.Dr, {
                    id: "reapply",
                    label: m.intl.string(m.t.rpFCLs),
                    action: function () {
                        u.A.resetGuildJoinRequest(E).then(() => {
                            (0, g.pX)(f.BVt.GUILD_MEMBER_VERIFICATION(E));
                        });
                    },
                    color: "default",
                }),
            (0, e.jsx)(s.Dr, {
                id: "withdraw",
                label: C?.applicationStatus === c.B5.STARTED ? m.intl.string(m.t.OQFlFD) : m.intl.string(m.t.mqtdmQ),
                action: function () {
                    (0, a.A)({
                        title: m.intl.string(m.t.y0CVes),
                        subtitle:
                            C?.applicationStatus === c.B5.STARTED
                                ? m.intl.string(m.t.fJwWVt)
                                : m.intl.format(m.t["9ZezpN"], { name: i.name }),
                        confirmText: m.intl.string(m.t.p89ACt),
                        cancelText: m.intl.string(m.t.oEAioF),
                        onConfirm: b,
                    });
                },
                color: "danger",
            }),
            (0, e.jsx)(s.rX, { children: h }),
        ],
    });
}
