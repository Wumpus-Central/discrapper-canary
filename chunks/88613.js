"use strict";
n.d(t, { A: () => A });
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
    g = n(5558),
    x = n(985018),
    h = n(840701);
function _(e) {
    let { title: t, subtitle: n, icon: s, page: r } = e;
    return (0, i.jsxs)("div", {
        className: h.Pu,
        children: [
            (0, i.jsxs)("div", {
                className: h.mh,
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
                text: x.intl.string(x.t.bt75uw),
            }),
        ],
    });
}
function A(e) {
    let { guild: t } = e;
    (0, r.qv)(t.id);
    let c = (0, a.ws)(t.id),
        { rulesByTriggerType: A } = (0, r.wP)(t.id),
        { numEnabledRules: p, numRules: f } = s.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == A ||
                    Object.values(c)
                        .flat()
                        .forEach((n) => {
                            let i = A[n]?.filter(d.Vq);
                            null == i || 0 === i.length
                                ? t++
                                : i.forEach((n) => {
                                      n.enabled && e++, t++;
                                  });
                        }),
                { numEnabledRules: e, numRules: t }
            );
        }, [c, A]),
        j = (0, g.N)(t),
        N = j[u.C.CAPTCHA_AND_RAID_PROTECTION],
        E = j[u.C.DM_AND_SPAM_PROTECTION],
        b = j[u.C.PERMISSIONS],
        T = (0, o.iI)(t.id);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: h.wx,
                children: x.intl.string(x.t["0A+VSA"]),
            }),
            (0, i.jsx)(m.p, { guild: t }),
            (0, i.jsxs)("div", {
                className: h.Xf,
                children: [
                    (0, i.jsx)(_, {
                        icon: n(818774),
                        title: x.intl.string(x.t["53eF5o"]),
                        subtitle: x.intl.formatToPlainString(x.t.TG7NYK, {
                            enabled: N.filter((e) => e.enabled).length,
                            total: N.length,
                        }),
                        page: u.C.CAPTCHA_AND_RAID_PROTECTION,
                    }),
                    (0, i.jsx)("div", { className: h.yF }),
                    (0, i.jsx)(_, {
                        icon: n(134635),
                        title: x.intl.string(x.t.O0SfFy),
                        subtitle: x.intl.formatToPlainString(x.t.TG7NYK, {
                            enabled: E.filter((e) => e.enabled).length,
                            total: E.length,
                        }),
                        page: u.C.DM_AND_SPAM_PROTECTION,
                    }),
                    (0, i.jsx)("div", { className: h.yF }),
                    T &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(_, {
                                    icon: n(34853),
                                    title: x.intl.string(x.t.uRelgx),
                                    subtitle: x.intl.formatToPlainString(x.t.TG7NYK, { enabled: p, total: f }),
                                    page: u.C.AUTOMOD,
                                }),
                                (0, i.jsx)("div", { className: h.yF }),
                            ],
                        }),
                    (0, i.jsx)(_, {
                        icon: n(638154),
                        title: x.intl.string(x.t.xrmhRX),
                        subtitle: x.intl.formatToPlainString(x.t.TG7NYK, {
                            enabled: b.filter((e) => e.enabled).length,
                            total: b.length,
                        }),
                        page: u.C.PERMISSIONS,
                    }),
                ],
            }),
        ],
    });
}
