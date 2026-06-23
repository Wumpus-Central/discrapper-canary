"use strict";
n.d(t, { A: () => m }), n(321073);
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(964355),
    o = n(955572),
    l = n(775602),
    u = n(406360),
    c = n(174459),
    d = n(742023),
    _ = n(873298),
    h = n(885386),
    f = n(375708),
    p = n(652215),
    E = n(864386);
function m() {
    let e,
        t,
        n =
            ((e = h.hH.useSetting()),
            (t = h.Xi.useSetting()),
            [
                (0, i.jsxs)(
                    s.rX,
                    {
                        label: f.intl.string(f.t["C/5V0A"]),
                        children: [
                            (0, i.jsx)(s.iD, {
                                id: "compact-ui",
                                group: "list-density",
                                label: f.intl.string(f.t["7iegX4"]),
                                checked: t === _.NS.COMPACT,
                                action: () => {
                                    h.Xi.updateSetting(_.NS.COMPACT);
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "default-ui",
                                group: "list-density",
                                label: f.intl.string(f.t.bBvAEH),
                                checked: t === _.NS.DEFAULT,
                                action: () => {
                                    h.Xi.updateSetting(_.NS.DEFAULT);
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "cozy-ui",
                                group: "list-density",
                                label: f.intl.string(f.t["4cuYHx"]),
                                checked: t === _.NS.COZY,
                                action: () => {
                                    h.Xi.updateSetting(_.NS.COZY);
                                },
                            }),
                        ],
                    },
                    "list-density",
                ),
                (0, i.jsxs)(
                    s.rX,
                    {
                        label: f.intl.string(f.t.nKRoPv),
                        children: [
                            (0, i.jsx)(s.iD, {
                                id: "cozy-chat",
                                group: "chat-density",
                                label: f.intl.string(f.t.Jqj4cZ),
                                checked: !e,
                                action: () => {
                                    h.hH.updateSetting(!1), (0, o.AC)();
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "compact-chat",
                                group: "chat-density",
                                label: f.intl.string(f.t["1JNcPS"]),
                                checked: e,
                                action: () => {
                                    h.hH.updateSetting(!0), (0, o.AC)();
                                },
                            }),
                        ],
                    },
                    "chat-density",
                ),
            ]),
        {
            saturation: m,
            useReducedMotion: g,
            roleStyle: A,
            highContrastMode: I,
            switchIconsEnabled: T,
        } = (0, r.cf)([l.Ay], () => ({
            saturation: l.Ay.saturation,
            useReducedMotion: l.Ay.useReducedMotion,
            roleStyle: l.Ay.roleStyle,
            highContrastMode: l.Ay.isHighContrastModeEnabled,
            switchIconsEnabled: l.Ay.isSwitchIconsEnabled,
        })),
        S = (0, r.bG)([l.Ay], () => l.Ay.displayNameStylesEnabled),
        y = (0, r.bG)([d.Ay], () => d.Ay.hdrDynamicRange),
        C = (0, u.i)("useAccessibilityItems"),
        N = [
            { name: f.intl.string(f.t.D5Fma9), value: "no-limit" },
            { name: f.intl.string(f.t.ldcGIH), value: "standard" },
        ],
        v = [
            { name: f.intl.string(f.t.YEOEi6), value: "username" },
            { name: f.intl.string(f.t.mQaro3), value: "dot" },
            { name: f.intl.string(f.t.Ji2EVJ), value: "hidden" },
        ],
        R = [
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "reduced-motion",
                        label: f.intl.string(f.t.b3XBzg),
                        checked: g,
                        action: () => (0, o.qz)(g ? "no-preference" : "reduce"),
                    }),
                },
                "reduced-motion",
            ),
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "high-contrast",
                        label: f.intl.string(f.t.aZlePv),
                        checked: I,
                        action: () => (0, o.uh)(I ? l._1.DEFAULT : l._1.HIGH),
                    }),
                },
                "high-contrast",
            ),
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.aK, {
                        id: "input",
                        label: f.intl.string(f.t["5PWWCY"]),
                        control: (e, t) =>
                            (0, i.jsx)(a.i, {
                                ...e,
                                ref: t,
                                value: 100 * m,
                                onChange: (e) => (0, o.HU)(e / 100),
                                "aria-label": f.intl.string(f.t["5PWWCY"]),
                            }),
                    }),
                },
                "input",
            ),
        ];
    return (
        R.push(...n),
        C &&
            R.push(
                (0, i.jsx)(
                    s.rX,
                    {
                        children: (0, i.jsx)(s.Dr, {
                            id: "hdr-dynamic-range",
                            label: f.intl.string(f.t.nemtgW),
                            children: N.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, i.jsx)(
                                    s.iD,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === y,
                                        label: t,
                                        action: () => (0, o.FU)(n),
                                    },
                                    n,
                                );
                            }),
                        }),
                    },
                    "hdr-dynamic-range",
                ),
            ),
        R.push(
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.Dr, {
                        id: "role-colors",
                        label: f.intl.string(f.t.uSOPWm),
                        children: v.map((e) => {
                            let { name: t, value: n } = e;
                            return (0, i.jsx)(
                                s.iD,
                                { id: n, group: "role-colors", checked: n === A, label: t, action: () => (0, o.IX)(n) },
                                n,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "display-name-styles",
                        label: f.intl.string(E.default["2gFUEw"]),
                        checked: S,
                        action: function () {
                            c.default.track(p.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !S }),
                                (0, o.Dm)(!S);
                        },
                    }),
                },
                "display-name-styles",
            ),
        ),
        R.push(
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "switch-icons",
                        label: f.intl.string(f.t["S3z+pV"]),
                        checked: T,
                        action: () => (0, o.Gm)(!T),
                    }),
                },
                "switch-icons",
            ),
        ),
        R
    );
}
