"use strict";
n.d(t, { A: () => _, z: () => g });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(834730),
    c = n(140735),
    u = n(773669),
    d = n(352139),
    h = n(583846);
let m = (0, n(945810).mj)({
    kind: "user",
    name: "2025-12-active-timestamp-styling",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var p = n(809854),
    f = n(322836);
let g = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: s,
                textTabularNumbers: r = !0,
                textFontCode: u = !0,
                hovered: d = !1,
                bold: g = !1,
                scaleFontToUserSetting: _ = !1,
            } = e,
            { now: x } = (0, p.e)(d),
            { enabled: C } = m.useConfig({ location: "active_timestamp" }),
            { timestamp: A, a11yTimeStamp: E } = i.useMemo(
                () => ({ timestamp: (0, h.W6)(t, x), a11yTimeStamp: (0, h.U3)(t, x) }),
                [t, x],
            );
        return (0, l.jsxs)(o.E, {
            className: a()({ [f.$N]: !!C || u, [f.Cr]: !C && g, [f.E1]: n }),
            variant: C ? "text-xs/normal" : "text-xs/medium",
            tabularNumbers: r,
            color: s,
            scaleFontToUserSetting: _,
            children: [
                (0, l.jsx)(c.A, { tag: "span", role: "timer", children: E }),
                (0, l.jsx)("span", { "aria-hidden": "true", children: A }),
            ],
        });
    },
    _ = (e) => {
        let { entry: t, textColor: n, hovered: i = !1, bold: s = !1, scaleFontToUserSetting: a = !1 } = e,
            c = (0, h.Hd)(t),
            m = (0, r.bG)([u.default], () => u.default.locale),
            p = (0, r.bG)([d.A], () => d.A.getMatchingActivity(t)),
            f = p?.timestamps?.start ?? p?.created_at;
        return null != f
            ? (0, l.jsx)(g, { entry: { start: f }, textColor: n, hovered: i, bold: s, scaleFontToUserSetting: a })
            : c
              ? (0, l.jsx)(g, { entry: t, textColor: n, hovered: i, bold: s, scaleFontToUserSetting: a })
              : (0, l.jsx)(o.E, {
                    variant: "text-xs/normal",
                    color: n,
                    lineClamp: 1,
                    scaleFontToUserSetting: a,
                    children: (0, h.aJ)(t, m),
                });
    };
