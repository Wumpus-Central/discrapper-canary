n.d(t, { j: () => g }), n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(576470),
    s = n(989985),
    o = n(961350),
    c = n(696451),
    u = n(723508),
    d = n(264388),
    f = n(914662),
    p = n(200700),
    h = n(985018),
    b = n(719931);
function g(e) {
    let { guild: t, disabledUntil: n } = e,
        [g, m] = (0, d.n)(t.id),
        A = (0, l.bG)([c.Ay, o.default], () => c.Ay.getMember(t.id, o.default.getId()), [t.id]);
    return (
        (0, u.X)(A),
        (0, r.jsxs)("div", {
            children: [
                g
                    ? (0, r.jsx)(f.A, {
                          onClose: () => m(t.id),
                          guildName: t.name,
                      })
                    : null,
                (0, r.jsx)(s._, {
                    bannerIcon: (0, r.jsx)(i.gQi, {
                        size: "md",
                        color: "currentColor",
                        className: b.q3,
                    }),
                    bannerHeader: h.intl.string(h.t["9UoK6Y"]),
                    bannerSubtext: h.intl.format(h.t["4ZwD5G"], { link: p.MO }),
                    textStyles: b.cI,
                    headerStyles: b.U_,
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        children: (0, r.jsx)(a.A, {
                            deadline: new Date(n),
                            showUnits: !0,
                            stopAtOneSec: !0,
                        }),
                    }),
                }),
            ],
        })
    );
}
