n.d(t, { j: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(60270),
    s = n(834730),
    r = n(576470),
    o = n(989985),
    c = n(961350),
    d = n(696451),
    u = n(723508),
    h = n(264388),
    m = n(914662),
    A = n(200700),
    g = n(985018),
    p = n(989924);
function _(e) {
    let { guild: t, disabledUntil: n } = e,
        [_, f] = (0, h.n)(t.id),
        E = (0, l.bG)([d.Ay, c.default], () => d.Ay.getMember(t.id, c.default.getId()), [t.id]);
    return (
        (0, u.X)(E),
        (0, i.jsxs)("div", {
            children: [
                _ ? (0, i.jsx)(m.A, { onClose: () => f(t.id), guildName: t.name }) : null,
                (0, i.jsx)(o._, {
                    bannerIcon: (0, i.jsx)(a.g, { size: "md", color: "currentColor", className: p.q3 }),
                    bannerHeader: g.intl.string(g.t["9UoK6Y"]),
                    bannerSubtext: g.intl.format(g.t["4ZwD5G"], { link: A.MO }),
                    textStyles: p.cI,
                    headerStyles: p.U_,
                    children: (0, i.jsx)(s.E, {
                        variant: "text-sm/semibold",
                        children: (0, i.jsx)(r.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
