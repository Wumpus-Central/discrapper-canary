l.d(t, { A: () => m });
var i = l(627968),
    s = l(64700),
    a = l(158954),
    n = l(397927),
    r = l(878314),
    c = l(816127),
    d = l(946116),
    o = l(985018),
    u = l(938718);
function x(e) {
    let { guildTemplate: t, onClick: l, autoFocus: a } = e,
        n = s.useCallback(() => {
            l(t);
        }, [t, l]);
    return (0, i.jsx)(r.A, { icon: c.s[t.id], message: t.label, onClick: n, autoFocus: a });
}
function m(e) {
    let { onBack: t, onChooseTemplate: l, directoryGuildName: s } = e,
        r = (0, d.ul)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.rQ0, {
                title: o.intl.formatToPlainString(o.t.T7aLYT, { guildName: s }),
                subtitle: o.intl.string(o.t["RA+St6"]),
            }),
            (0, i.jsx)(a.cwr, {
                children: (0, i.jsx)(n.ArX, {
                    className: u.XG,
                    children: (0, i.jsxs)("div", {
                        className: u.KA,
                        children: [
                            (0, i.jsx)(x, {
                                guildTemplate: { ...r[d.Y1.CREATE], label: o.intl.string(o.t.WqJbLi) },
                                onClick: l,
                            }),
                            (0, i.jsx)(n.Text, {
                                className: u.l8,
                                color: "text-default",
                                variant: "text-xs/bold",
                                children: o.intl.string(o.t.JGDkfg),
                            }),
                            (0, i.jsx)(x, { guildTemplate: r[d.Y1.HUB_STUDY], onClick: l }),
                            (0, i.jsx)(x, { guildTemplate: r[d.Y1.HUB_SCHOOL_CLUB], onClick: l }),
                            (0, i.jsx)(x, { guildTemplate: r[d.Y1.HUB_CLASS], onClick: l }),
                            (0, i.jsx)(x, { guildTemplate: r[d.Y1.HUB_SOCIAL], onClick: l }),
                            (0, i.jsx)(x, { guildTemplate: r[d.Y1.HUB_MAJOR], onClick: l }),
                            (0, i.jsx)(x, { guildTemplate: r[d.Y1.HUB_DORM], onClick: l }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(a.H7u, {
                leading: (0, i.jsx)(n.QWc, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: o.intl.string(o.t["13/7kX"]),
                    onClick: t,
                }),
            }),
        ],
    });
}
