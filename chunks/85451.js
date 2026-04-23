"use strict";
n.d(t, { A: () => g, z: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(834730),
    d = n(140735),
    _ = n(773669),
    u = n(352139),
    c = n(583846);
let E = (0, n(945810).mj)({
    kind: "user",
    name: "2025-12-active-timestamp-styling",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var h = n(809854),
    m = n(322836);
let f = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: s,
                textTabularNumbers: o = !0,
                textFontCode: _ = !0,
                hovered: u = !1,
                bold: f = !1,
                scaleFontToUserSetting: g = !1,
            } = e,
            { now: p } = (0, h.e)(u),
            { enabled: A } = E.useConfig({ location: "active_timestamp" }),
            { timestamp: I, a11yTimeStamp: T } = r.useMemo(
                () => ({ timestamp: (0, c.W6)(t, p), a11yTimeStamp: (0, c.U3)(t, p) }),
                [t, p],
            );
        return (0, i.jsxs)(l.E, {
            className: a()({ [m.$N]: !!A || _, [m.Cr]: !A && f, [m.E1]: n }),
            variant: A ? "text-xs/normal" : "text-xs/medium",
            tabularNumbers: o,
            color: s,
            scaleFontToUserSetting: g,
            children: [
                (0, i.jsx)(d.A, { tag: "span", role: "timer", children: T }),
                (0, i.jsx)("span", { "aria-hidden": "true", children: I }),
            ],
        });
    },
    g = (e) => {
        let { entry: t, textColor: n, hovered: r = !1, bold: s = !1, scaleFontToUserSetting: a = !1 } = e,
            d = (0, c.Hd)(t),
            E = (0, o.bG)([_.default], () => _.default.locale),
            h = (0, o.bG)([u.A], () => u.A.getMatchingActivity(t)),
            m = h?.timestamps?.start ?? h?.created_at;
        return null != m
            ? (0, i.jsx)(f, { entry: { start: m }, textColor: n, hovered: r, bold: s, scaleFontToUserSetting: a })
            : d
              ? (0, i.jsx)(f, { entry: t, textColor: n, hovered: r, bold: s, scaleFontToUserSetting: a })
              : (0, i.jsx)(l.E, {
                    variant: "text-xs/normal",
                    color: n,
                    lineClamp: 1,
                    scaleFontToUserSetting: a,
                    children: (0, c.aJ)(t, E),
                });
    };
