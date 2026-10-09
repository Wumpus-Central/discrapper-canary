i.d(t, { A: () => p });
var e = i(477900);
i(582128);
var n = i(17928),
    l = i(189213),
    a = i(939249),
    c = i(834730),
    r = i(866665),
    o = i(885574),
    d = i(364522),
    m = i(498642),
    u = i(548118),
    x = i(660183),
    h = i(599127);
function j(s) {
    let { guild: t, onClick: i } = s,
        l = (0, n.bG)([m.A], () => m.A.getMemberCount(t.id));
    return (0, e.jsxs)(a.D, {
        className: h._S,
        onClick: i,
        children: [
            (0, e.jsx)(u.Ay, { className: h.$f, guild: t, size: u.Ay.Sizes.MEDIUM, active: !0 }),
            (0, e.jsxs)("div", {
                className: h.OA,
                children: [
                    (0, e.jsx)(c.E, {
                        className: h.J5,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: t.name,
                    }),
                    null != l &&
                        (0, e.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: x.intl.formatToPlainString(x.t.zRl6XR, { count: l }),
                        }),
                ],
            }),
        ],
    });
}
function p(s) {
    let {
        title: t,
        subtitle: i,
        listLabel: n,
        listLabelTooltip: a,
        guilds: m,
        onSelectGuild: u,
        onClose: x,
        transitionState: p,
    } = s;
    async function b() {
        await x();
    }
    return (0, e.jsxs)(l.a, {
        transitionState: p,
        onClose: b,
        title: t,
        subtitle: i,
        actions: [],
        children: [
            null != n &&
                (0, e.jsxs)("div", {
                    className: h.RO,
                    children: [
                        (0, e.jsx)(c.E, { variant: "text-sm/semibold", children: n }),
                        null != a &&
                            (0, e.jsx)(r.m, {
                                position: "top",
                                text: a,
                                children: (0, e.jsx)(o.CircleInformationIcon, { size: "xs", className: h.G }),
                            }),
                    ],
                }),
            (0, e.jsx)(d.Ip, {
                className: h.OW,
                children: m.map((s) => (0, e.jsx)(j, { guild: s, onClick: () => u(s) }, s.id)),
            }),
        ],
    });
}
