"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(928348),
    a = n(53594),
    o = n(979816),
    d = n(403362),
    c = n(203498),
    u = n(660496),
    m = n(512122),
    g = n(939662),
    x = n(5558),
    h = n(985018),
    _ = n(696284);
function A(e) {
    let { title: t, subtitle: n, icon: s, page: r } = e;
    return (0, i.jsxs)("div", {
        className: _.Pu,
        children: [
            (0, i.jsxs)("div", {
                className: _.mh,
                children: [
                    (0, i.jsx)(l.euF, { src: s, size: l._3J.SIZE_40, "aria-label": t }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: t,
                            }),
                            (0, i.jsx)(l.Text, { variant: "text-xs/medium", color: "text-default", children: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(l.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => (0, c.K)(r),
                text: h.intl.string(h.t.bt75uw),
            }),
        ],
    });
}
function p(e) {
    let { guild: t } = e;
    (0, r.qv)(t.id);
    let c = (0, a.ws)(t.id),
        { rulesByTriggerType: p } = (0, r.wP)(t.id),
        { numEnabledRules: f, numRules: j } = s.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == p ||
                    Object.values(c)
                        .flat()
                        .forEach((n) => {
                            let i = p[n]?.filter(d.Vq);
                            null == i || 0 === i.length
                                ? t++
                                : i.forEach((n) => {
                                      n.enabled && e++, t++;
                                  });
                        }),
                { numEnabledRules: e, numRules: t }
            );
        }, [c, p]),
        N = (0, x.N)(t),
        E = N[u.C.CAPTCHA_AND_RAID_PROTECTION],
        C = N[u.C.DM_AND_SPAM_PROTECTION],
        T = N[u.C.PERMISSIONS],
        I = (0, o.iI)(t.id);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: _.wx,
                children: h.intl.string(h.t["0A+VSA"]),
            }),
            (0, i.jsx)(m.p, { guild: t }),
            (0, i.jsxs)("div", {
                className: _.Xf,
                children: [
                    (0, i.jsx)(A, {
                        icon: n(818774),
                        title: h.intl.string(h.t["53eF5o"]),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYK, {
                            enabled: E.filter((e) => e.enabled).length,
                            total: E.length,
                        }),
                        page: u.C.CAPTCHA_AND_RAID_PROTECTION,
                    }),
                    (0, i.jsx)("div", { className: _.yF }),
                    (0, i.jsx)(A, {
                        icon: n(134635),
                        title: h.intl.string(h.t.O0SfFy),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYK, {
                            enabled: C.filter((e) => e.enabled).length,
                            total: C.length,
                        }),
                        page: u.C.DM_AND_SPAM_PROTECTION,
                    }),
                    (0, i.jsx)("div", { className: _.yF }),
                    I &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(A, {
                                    icon: n(34853),
                                    title: h.intl.string(h.t.uRelgx),
                                    subtitle: h.intl.formatToPlainString(h.t.TG7NYK, { enabled: f, total: j }),
                                    page: u.C.AUTOMOD,
                                }),
                                (0, i.jsx)("div", { className: _.yF }),
                            ],
                        }),
                    (0, i.jsx)(A, {
                        icon: n(638154),
                        title: h.intl.string(h.t.xrmhRX),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYK, {
                            enabled: T.filter((e) => e.enabled).length,
                            total: T.length,
                        }),
                        page: u.C.PERMISSIONS,
                    }),
                ],
            }),
            (0, i.jsx)(g.A, { guild: t, location: "guild_settings_safety_overview" }),
        ],
    });
}
