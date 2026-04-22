l.d(t, { A: () => j });
var i = l(627968),
    s = l(64700),
    a = l(20742),
    n = l(430993),
    r = l(696208),
    c = l(573613),
    d = l(834730),
    o = l(123292),
    u = l(878314),
    m = l(816127),
    x = l(946116),
    C = l(985018),
    g = l(67853);
function h(e) {
    let { guildTemplate: t, onClick: l, autoFocus: a } = e,
        n = s.useCallback(() => {
            l(t);
        }, [t, l]);
    return (0, i.jsx)(u.A, { icon: m.s[t.id], message: t.label, onClick: n, autoFocus: a });
}
function j(e) {
    let { onBack: t, onChooseTemplate: l, directoryGuildName: s } = e,
        u = (0, x.ul)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.rQ, {
                title: C.intl.formatToPlainString(C.t.T7aLYT, { guildName: s }),
                subtitle: C.intl.string(C.t["RA+St6"]),
            }),
            (0, i.jsx)(n.c, {
                children: (0, i.jsx)(c.Ar, {
                    className: g.XG,
                    children: (0, i.jsxs)("div", {
                        className: g.KA,
                        children: [
                            (0, i.jsx)(h, {
                                guildTemplate: { ...u[x.Y1.CREATE], label: C.intl.string(C.t.WqJbLi) },
                                onClick: l,
                            }),
                            (0, i.jsx)(d.E, {
                                className: g.l8,
                                color: "text-default",
                                variant: "text-xs/bold",
                                children: C.intl.string(C.t.JGDkfg),
                            }),
                            (0, i.jsx)(h, { guildTemplate: u[x.Y1.HUB_STUDY], onClick: l }),
                            (0, i.jsx)(h, { guildTemplate: u[x.Y1.HUB_SCHOOL_CLUB], onClick: l }),
                            (0, i.jsx)(h, { guildTemplate: u[x.Y1.HUB_CLASS], onClick: l }),
                            (0, i.jsx)(h, { guildTemplate: u[x.Y1.HUB_SOCIAL], onClick: l }),
                            (0, i.jsx)(h, { guildTemplate: u[x.Y1.HUB_MAJOR], onClick: l }),
                            (0, i.jsx)(h, { guildTemplate: u[x.Y1.HUB_DORM], onClick: l }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(r.H, {
                leading: (0, i.jsx)(o.Q, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: C.intl.string(C.t["13/7kX"]),
                    onClick: t,
                }),
            }),
        ],
    });
}
