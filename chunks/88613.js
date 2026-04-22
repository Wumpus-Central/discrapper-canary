n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(97808),
    r = n(778712),
    a = n(534514),
    o = n(834730),
    d = n(821609),
    c = n(928348),
    u = n(53594),
    m = n(979816),
    g = n(403362),
    h = n(203498),
    x = n(660496),
    _ = n(512122),
    p = n(939662),
    A = n(5558),
    E = n(985018),
    f = n(644780);
function j(e) {
    let { title: t, subtitle: n, icon: l, page: c } = e;
    return (0, i.jsxs)("div", {
        className: f.Pu,
        children: [
            (0, i.jsxs)("div", {
                className: f.mh,
                children: [
                    (0, i.jsx)(s.eu, { src: l, size: r._3.SIZE_40, "aria-label": t }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(a.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, i.jsx)(o.E, { variant: "text-xs/medium", color: "text-default", children: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(d.$, {
                size: "sm",
                variant: "secondary",
                onClick: () => (0, h.K)(c),
                text: E.intl.string(E.t.bt75uw),
            }),
        ],
    });
}
function N(e) {
    let { guild: t } = e;
    (0, c.qv)(t.id);
    let s = (0, u.ws)(t.id),
        { rulesByTriggerType: r } = (0, c.wP)(t.id),
        { numEnabledRules: o, numRules: d } = l.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == r ||
                    Object.values(s)
                        .flat()
                        .forEach((n) => {
                            let i = r[n]?.filter(g.Vq);
                            null == i || 0 === i.length
                                ? t++
                                : i.forEach((n) => {
                                      n.enabled && e++, t++;
                                  });
                        }),
                { numEnabledRules: e, numRules: t }
            );
        }, [s, r]),
        h = (0, A.N)(t),
        N = h[x.C.CAPTCHA_AND_RAID_PROTECTION],
        I = h[x.C.DM_AND_SPAM_PROTECTION],
        C = h[x.C.PERMISSIONS],
        b = (0, m.iI)(t.id);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: f.wx,
                children: E.intl.string(E.t["0A+VSA"]),
            }),
            (0, i.jsx)(_.p, { guild: t }),
            (0, i.jsxs)("div", {
                className: f.Xf,
                children: [
                    (0, i.jsx)(j, {
                        icon: n(818774),
                        title: E.intl.string(E.t["53eF5o"]),
                        subtitle: E.intl.formatToPlainString(E.t.TG7NYK, {
                            enabled: N.filter((e) => e.enabled).length,
                            total: N.length,
                        }),
                        page: x.C.CAPTCHA_AND_RAID_PROTECTION,
                    }),
                    (0, i.jsx)("div", { className: f.yF }),
                    (0, i.jsx)(j, {
                        icon: n(134635),
                        title: E.intl.string(E.t.O0SfFy),
                        subtitle: E.intl.formatToPlainString(E.t.TG7NYK, {
                            enabled: I.filter((e) => e.enabled).length,
                            total: I.length,
                        }),
                        page: x.C.DM_AND_SPAM_PROTECTION,
                    }),
                    (0, i.jsx)("div", { className: f.yF }),
                    b &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(j, {
                                    icon: n(34853),
                                    title: E.intl.string(E.t.uRelgx),
                                    subtitle: E.intl.formatToPlainString(E.t.TG7NYK, { enabled: o, total: d }),
                                    page: x.C.AUTOMOD,
                                }),
                                (0, i.jsx)("div", { className: f.yF }),
                            ],
                        }),
                    (0, i.jsx)(j, {
                        icon: n(638154),
                        title: E.intl.string(E.t.xrmhRX),
                        subtitle: E.intl.formatToPlainString(E.t.TG7NYK, {
                            enabled: C.filter((e) => e.enabled).length,
                            total: C.length,
                        }),
                        page: x.C.PERMISSIONS,
                    }),
                ],
            }),
            (0, i.jsx)(p.A, { guild: t, location: "guild_settings_safety_overview" }),
        ],
    });
}
