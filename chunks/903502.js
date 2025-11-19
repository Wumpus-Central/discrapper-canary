n.d(t, { Z: () => h }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(442837),
    r = n(481060),
    s = n(570140),
    o = n(178635),
    c = n(115470),
    d = n(246992),
    u = n(531578),
    m = n(584314);
let p = [
    {
        label: "second(s)",
        value: 1000,
    },
    {
        label: "minute(s)",
        value: 60000,
    },
    {
        label: "hour(s)",
        value: 3600000,
    },
    {
        label: "day(s)",
        value: 86400000,
    },
];
function h() {
    let [e, t] = l.useState(null),
        [n, h] = l.useState(0),
        [x, g] = l.useState(1000),
        [f, b] = l.useState(0),
        v = (0, i.e7)([c.Z], () => {
            var t;
            return null === e ? null : null != (t = c.Z.getFeedbackConfig(u.nw[e])) ? t : o.R[u.nw[e]];
        }),
        j = Object.entries(u.nw),
        _ = j.slice(j.length / 2).map((e) => {
            let [t] = e;
            return {
                label: t,
                value: t,
            };
        }),
        y = l.useMemo(() => null != e && f >= 0 && f <= 100 && n >= 0, [e, f, n]);
    return (0, a.jsx)("div", {
        className: m.container,
        children: (0, a.jsxs)(r.Kqy, {
            gap: 32,
            children: [
                (0, a.jsx)(r.q4e, {
                    label: "Feedback Survey",
                    options: _,
                    value: e,
                    onChange: (e) => {
                        t(e);
                    },
                    popoutLayerContext: d.O$,
                    placeholder: "Select Feedback Survey",
                }),
                (0, a.jsxs)(r.C3N, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != v &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/semibold",
                                        children: "Current cooldown",
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(v.cooldown / 1000, " second(s) or"),
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(v.cooldown / 60000, " minute(s) or"),
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(v.cooldown / 3600000, " hour(s) or"),
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(v.cooldown / 86400000, " day(s)"),
                                    }),
                                ],
                            }),
                        (0, a.jsxs)(r.Kqy, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, a.jsx)(r.oil, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: n.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => h(parseFloat(e)),
                                }),
                                (0, a.jsx)(r.q4e, {
                                    options: p,
                                    value: x,
                                    onChange: (e) => {
                                        g(e);
                                    },
                                    popoutLayerContext: d.O$,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(r.izJ, {}),
                (0, a.jsx)(r.C3N, {
                    label: "Override Survey Chance",
                    children: (0, a.jsx)(r.oil, {
                        label: "Override chance",
                        description: null != v ? "Current chance: ".concat(100 * v.chance, "%") : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: f.toString(),
                        type: "number",
                        onChange: (e) => b(parseFloat(e)),
                    }),
                }),
                (0, a.jsxs)(r.ButtonGroup, {
                    children: [
                        (0, a.jsx)(r.Button, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != v &&
                                    s.Z.dispatch({
                                        type: "FEEDBACK_OVERRIDE_CLEAR",
                                        feedbackType: v.feedbackType,
                                    })
                                ),
                            disabled: !y,
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != v &&
                                    s.Z.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: v.feedbackType,
                                        cooldown: n * x,
                                        chance: f / 100,
                                    })
                                ),
                            disabled: !y,
                        }),
                    ],
                }),
                null == e &&
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: "Error: need to select a survey",
                    }),
                !(n >= 0) &&
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(f >= 0 && f <= 100) &&
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
