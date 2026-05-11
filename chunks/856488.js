"use strict";
n.d(t, { A: () => g }), n(321073);
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(964355),
    o = n(955572),
    l = n(775602),
    u = n(406360),
    c = n(614738),
    d = n(174459),
    _ = n(742023),
    f = n(873298),
    h = n(885386),
    p = n(375708),
    E = n(652215),
    m = n(864386);
function g() {
    let e,
        t,
        n =
            ((e = h.hH.useSetting()),
            (t = h.Xi.useSetting()),
            [
                (0, i.jsxs)(
                    s.rX,
                    {
                        label: p.intl.string(p.t["C/5V0A"]),
                        children: [
                            (0, i.jsx)(s.iD, {
                                id: "compact-ui",
                                group: "list-density",
                                label: p.intl.string(p.t["7iegX4"]),
                                checked: t === f.NS.COMPACT,
                                action: () => {
                                    h.Xi.updateSetting(f.NS.COMPACT);
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "default-ui",
                                group: "list-density",
                                label: p.intl.string(p.t.bBvAEH),
                                checked: t === f.NS.DEFAULT,
                                action: () => {
                                    h.Xi.updateSetting(f.NS.DEFAULT);
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "cozy-ui",
                                group: "list-density",
                                label: p.intl.string(p.t["4cuYHx"]),
                                checked: t === f.NS.COZY,
                                action: () => {
                                    h.Xi.updateSetting(f.NS.COZY);
                                },
                            }),
                        ],
                    },
                    "list-density",
                ),
                (0, i.jsxs)(
                    s.rX,
                    {
                        label: p.intl.string(p.t.nKRoPv),
                        children: [
                            (0, i.jsx)(s.iD, {
                                id: "cozy-chat",
                                group: "chat-density",
                                label: p.intl.string(p.t.Jqj4cZ),
                                checked: !e,
                                action: () => {
                                    h.hH.updateSetting(!1), (0, o.AC)();
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "compact-chat",
                                group: "chat-density",
                                label: p.intl.string(p.t["1JNcPS"]),
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
            saturation: g,
            useReducedMotion: A,
            roleStyle: I,
            highContrastMode: T,
            switchIconsEnabled: S,
        } = (0, r.cf)([l.A], () => ({
            saturation: l.A.saturation,
            useReducedMotion: l.A.useReducedMotion,
            roleStyle: l.A.roleStyle,
            highContrastMode: l.A.isHighContrastModeEnabled,
            switchIconsEnabled: l.A.isSwitchIconsEnabled,
        })),
        N = (0, r.bG)([l.A], () => l.A.displayNameStylesEnabled),
        y = (0, c.y)("useAccessibilityItems"),
        C = (0, r.bG)([_.Ay], () => _.Ay.hdrDynamicRange),
        v = (0, u.i)("useAccessibilityItems"),
        O = [
            { name: p.intl.string(p.t.D5Fma9), value: "no-limit" },
            { name: p.intl.string(p.t.ldcGIH), value: "standard" },
        ],
        R = [
            { name: p.intl.string(p.t.YEOEi6), value: "username" },
            { name: p.intl.string(p.t.mQaro3), value: "dot" },
            { name: p.intl.string(p.t.Ji2EVJ), value: "hidden" },
        ],
        b = [
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "reduced-motion",
                        label: p.intl.string(p.t.b3XBzg),
                        checked: A,
                        action: () => (0, o.qz)(A ? "no-preference" : "reduce"),
                    }),
                },
                "reduced-motion",
            ),
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "high-contrast",
                        label: p.intl.string(p.t.aZlePv),
                        checked: T,
                        action: () => (0, o.uh)(T ? l._.DEFAULT : l._.HIGH),
                    }),
                },
                "high-contrast",
            ),
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.aK, {
                        id: "input",
                        label: p.intl.string(p.t["5PWWCY"]),
                        control: (e, t) =>
                            (0, i.jsx)(a.i, {
                                ...e,
                                ref: t,
                                value: 100 * g,
                                onChange: (e) => (0, o.HU)(e / 100),
                                "aria-label": p.intl.string(p.t["5PWWCY"]),
                            }),
                    }),
                },
                "input",
            ),
        ];
    return (
        b.push(...n),
        v &&
            b.push(
                (0, i.jsx)(
                    s.rX,
                    {
                        children: (0, i.jsx)(s.Dr, {
                            id: "hdr-dynamic-range",
                            label: p.intl.string(p.t.nemtgW),
                            children: O.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, i.jsx)(
                                    s.iD,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === C,
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
        b.push(
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.Dr, {
                        id: "role-colors",
                        label: p.intl.string(p.t.uSOPWm),
                        children: R.map((e) => {
                            let { name: t, value: n } = e;
                            return (0, i.jsx)(
                                s.iD,
                                { id: n, group: "role-colors", checked: n === I, label: t, action: () => (0, o.IX)(n) },
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
                        label: p.intl.string(m.default["2gFUEw"]),
                        checked: N,
                        action: function () {
                            d.default.track(E.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !N }),
                                (0, o.Dm)(!N);
                        },
                    }),
                },
                "display-name-styles",
            ),
        ),
        y &&
            b.push(
                (0, i.jsx)(
                    s.rX,
                    {
                        children: (0, i.jsx)(s.sL, {
                            id: "switch-icons",
                            label: p.intl.string(p.t["S3z+pV"]),
                            checked: S,
                            action: () => (0, o.Gm)(!S),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        b
    );
}
