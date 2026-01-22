n.d(t, { A: () => x }), n(864466), n(443073);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(928348),
    a = n(53594),
    c = n(979816),
    o = n(403362),
    d = n(203498),
    u = n(660496),
    f = n(512122),
    g = n(5558),
    b = n(985018),
    m = n(840701);
function p(e) {
    let { title: t, subtitle: n, icon: i, page: s } = e;
    return (0, r.jsxs)("div", {
        className: m.Pu,
        children: [
            (0, r.jsxs)("div", {
                className: m.mh,
                children: [
                    (0, r.jsx)(l.euF, {
                        src: i,
                        size: l._3J.SIZE_40,
                        "aria-label": t,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: t,
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(l.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => (0, d.K)(s),
                text: b.intl.string(b.t.bt75uw),
            }),
        ],
    });
}
function x(e) {
    let { guild: t } = e;
    (0, s.qv)(t.id);
    let d = (0, a.ws)(t.id),
        { rulesByTriggerType: x } = (0, s.wP)(t.id),
        { numEnabledRules: h, numRules: j } = i.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == x ||
                    Object.values(d)
                        .flat()
                        .forEach((n) => {
                            var r;
                            let i = null == (r = x[n]) ? void 0 : r.filter(o.Vq);
                            null == i || 0 === i.length
                                ? t++
                                : i.forEach((n) => {
                                      n.enabled && e++, t++;
                                  });
                        }),
                {
                    numEnabledRules: e,
                    numRules: t,
                }
            );
        }, [d, x]),
        O = (0, g.N)(t),
        y = O[u.C.CAPTCHA_AND_RAID_PROTECTION],
        v = O[u.C.DM_AND_SPAM_PROTECTION],
        A = O[u.C.PERMISSIONS],
        E = (0, c.iI)(t.id);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: m.wx,
                children: b.intl.string(b.t["0A+VSA"]),
            }),
            (0, r.jsx)(f.p, { guild: t }),
            (0, r.jsxs)("div", {
                className: m.Xf,
                children: [
                    (0, r.jsx)(p, {
                        icon: n(818774),
                        title: b.intl.string(b.t["53eF5o"]),
                        subtitle: b.intl.formatToPlainString(b.t.TG7NYK, {
                            enabled: y.filter((e) => e.enabled).length,
                            total: y.length,
                        }),
                        page: u.C.CAPTCHA_AND_RAID_PROTECTION,
                    }),
                    (0, r.jsx)("div", { className: m.yF }),
                    (0, r.jsx)(p, {
                        icon: n(134635),
                        title: b.intl.string(b.t.O0SfFy),
                        subtitle: b.intl.formatToPlainString(b.t.TG7NYK, {
                            enabled: v.filter((e) => e.enabled).length,
                            total: v.length,
                        }),
                        page: u.C.DM_AND_SPAM_PROTECTION,
                    }),
                    (0, r.jsx)("div", { className: m.yF }),
                    E &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p, {
                                    icon: n(34853),
                                    title: b.intl.string(b.t.uRelgx),
                                    subtitle: b.intl.formatToPlainString(b.t.TG7NYK, {
                                        enabled: h,
                                        total: j,
                                    }),
                                    page: u.C.AUTOMOD,
                                }),
                                (0, r.jsx)("div", { className: m.yF }),
                            ],
                        }),
                    (0, r.jsx)(p, {
                        icon: n(638154),
                        title: b.intl.string(b.t.xrmhRX),
                        subtitle: b.intl.formatToPlainString(b.t.TG7NYK, {
                            enabled: A.filter((e) => e.enabled).length,
                            total: A.length,
                        }),
                        page: u.C.PERMISSIONS,
                    }),
                ],
            }),
        ],
    });
}
