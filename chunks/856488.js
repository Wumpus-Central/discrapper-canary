n.d(t, { A: () => f }), n(321073);
var i = n(477900);
n(582128);
var r = n(17928),
    a = n(477782),
    s = n(964355),
    l = n(955572),
    o = n(775602),
    d = n(406360),
    c = n(174459),
    u = n(742023),
    _ = n(873298),
    E = n(885386),
    A = n(375708),
    h = n(652215),
    I = n(763052);
function f() {
    let e,
        t,
        n =
            ((e = E.hH.useSetting()),
            (t = E.Xi.useSetting()),
            [
                (0, i.jsxs)(
                    a.rX,
                    {
                        label: A.intl.string(A.t["C/5V0A"]),
                        children: [
                            (0, i.jsx)(a.iD, {
                                id: "compact-ui",
                                group: "list-density",
                                label: A.intl.string(A.t["7iegX4"]),
                                checked: t === _.NS.COMPACT,
                                action: () => {
                                    E.Xi.updateSetting(_.NS.COMPACT);
                                },
                            }),
                            (0, i.jsx)(a.iD, {
                                id: "default-ui",
                                group: "list-density",
                                label: A.intl.string(A.t.bBvAEH),
                                checked: t === _.NS.DEFAULT,
                                action: () => {
                                    E.Xi.updateSetting(_.NS.DEFAULT);
                                },
                            }),
                            (0, i.jsx)(a.iD, {
                                id: "cozy-ui",
                                group: "list-density",
                                label: A.intl.string(A.t["4cuYHx"]),
                                checked: t === _.NS.COZY,
                                action: () => {
                                    E.Xi.updateSetting(_.NS.COZY);
                                },
                            }),
                        ],
                    },
                    "list-density",
                ),
                (0, i.jsxs)(
                    a.rX,
                    {
                        label: A.intl.string(A.t.nKRoPv),
                        children: [
                            (0, i.jsx)(a.iD, {
                                id: "cozy-chat",
                                group: "chat-density",
                                label: A.intl.string(A.t.Jqj4cZ),
                                checked: !e,
                                action: () => {
                                    E.hH.updateSetting(!1), (0, l.AC)();
                                },
                            }),
                            (0, i.jsx)(a.iD, {
                                id: "compact-chat",
                                group: "chat-density",
                                label: A.intl.string(A.t["1JNcPS"]),
                                checked: e,
                                action: () => {
                                    E.hH.updateSetting(!0), (0, l.AC)();
                                },
                            }),
                        ],
                    },
                    "chat-density",
                ),
            ]),
        {
            saturation: f,
            useReducedMotion: p,
            roleStyle: T,
            highContrastMode: m,
            switchIconsEnabled: g,
        } = (0, r.cf)([o.Ay], () => ({
            saturation: o.Ay.saturation,
            useReducedMotion: o.Ay.useReducedMotion,
            roleStyle: o.Ay.roleStyle,
            highContrastMode: o.Ay.isHighContrastModeEnabled,
            switchIconsEnabled: o.Ay.isSwitchIconsEnabled,
        })),
        S = (0, r.bG)([o.Ay], () => o.Ay.displayNameStylesEnabled),
        N = (0, r.bG)([u.Ay], () => u.Ay.hdrDynamicRange),
        C = (0, d.i)("useAccessibilityItems"),
        O = [
            { name: A.intl.string(A.t.D5Fma9), value: "no-limit" },
            { name: A.intl.string(A.t.ldcGIH), value: "standard" },
        ],
        R = [
            { name: A.intl.string(A.t.YEOEi6), value: "username" },
            { name: A.intl.string(A.t.mQaro3), value: "dot" },
            { name: A.intl.string(A.t.Ji2EVJ), value: "hidden" },
        ],
        L = [
            (0, i.jsx)(
                a.rX,
                {
                    children: (0, i.jsx)(a.sL, {
                        id: "reduced-motion",
                        label: A.intl.string(A.t.b3XBzg),
                        checked: p,
                        action: () => (0, l.qz)(p ? "no-preference" : "reduce"),
                    }),
                },
                "reduced-motion",
            ),
            (0, i.jsx)(
                a.rX,
                {
                    children: (0, i.jsx)(a.sL, {
                        id: "high-contrast",
                        label: A.intl.string(A.t.aZlePv),
                        checked: m,
                        action: () => (0, l.uh)(m ? o._1.DEFAULT : o._1.HIGH),
                    }),
                },
                "high-contrast",
            ),
            (0, i.jsx)(
                a.rX,
                {
                    children: (0, i.jsx)(a.aK, {
                        id: "input",
                        label: A.intl.string(A.t["5PWWCY"]),
                        control: (e, t) =>
                            (0, i.jsx)(s.i, {
                                ...e,
                                ref: t,
                                value: 100 * f,
                                onChange: (e) => (0, l.HU)(e / 100),
                                "aria-label": A.intl.string(A.t["5PWWCY"]),
                            }),
                    }),
                },
                "input",
            ),
        ];
    return (
        L.push(...n),
        C &&
            L.push(
                (0, i.jsx)(
                    a.rX,
                    {
                        children: (0, i.jsx)(a.Dr, {
                            id: "hdr-dynamic-range",
                            label: A.intl.string(A.t.nemtgW),
                            children: O.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, i.jsx)(
                                    a.iD,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === N,
                                        label: t,
                                        action: () => (0, l.FU)(n),
                                    },
                                    n,
                                );
                            }),
                        }),
                    },
                    "hdr-dynamic-range",
                ),
            ),
        L.push(
            (0, i.jsx)(
                a.rX,
                {
                    children: (0, i.jsx)(a.Dr, {
                        id: "role-colors",
                        label: A.intl.string(A.t.uSOPWm),
                        children: R.map((e) => {
                            let { name: t, value: n } = e;
                            return (0, i.jsx)(
                                a.iD,
                                { id: n, group: "role-colors", checked: n === T, label: t, action: () => (0, l.IX)(n) },
                                n,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, i.jsx)(
                a.rX,
                {
                    children: (0, i.jsx)(a.sL, {
                        id: "display-name-styles",
                        label: A.intl.string(I.default["2gFUEw"]),
                        checked: S,
                        action: function () {
                            c.default.track(h.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !S }),
                                (0, l.Dm)(!S);
                        },
                    }),
                },
                "display-name-styles",
            ),
        ),
        L.push(
            (0, i.jsx)(
                a.rX,
                {
                    children: (0, i.jsx)(a.sL, {
                        id: "switch-icons",
                        label: A.intl.string(A.t["S3z+pV"]),
                        checked: g,
                        action: () => (0, l.Gm)(!g),
                    }),
                },
                "switch-icons",
            ),
        ),
        L
    );
}
