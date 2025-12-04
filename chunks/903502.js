n.d(t, { Z: () => x }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(442837),
    i = n(199849),
    s = n(481060),
    o = n(570140),
    c = n(178635),
    d = n(115470),
    u = n(246992),
    m = n(531578),
    p = n(584314);
let h = [
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
function x() {
    let [e, t] = l.useState(null),
        [n, x] = l.useState(0),
        [f, g] = l.useState(1000),
        [b, v] = l.useState(0),
        j = (0, r.e7)([d.Z], () => {
            var t;
            return null === e ? null : null != (t = d.Z.getFeedbackConfig(m.nw[e])) ? t : c.R[m.nw[e]];
        }),
        _ = Object.entries(m.nw),
        y = _.slice(_.length / 2).map((e) => {
            let [t] = e;
            return {
                label: t,
                value: t,
            };
        }),
        C = l.useMemo(() => null != e && b >= 0 && b <= 100 && n >= 0, [e, b, n]);
    return (0, a.jsx)("div", {
        className: p.container,
        children: (0, a.jsxs)(s.Kqy, {
            gap: 32,
            children: [
                (0, a.jsx)(i.y6, {
                    label: "Feedback Survey",
                    options: y,
                    value: e,
                    onChange: (e) => {
                        t(e);
                    },
                    popoutLayerContext: u.O$,
                    placeholder: "Select Feedback Survey",
                }),
                (0, a.jsxs)(s.C3N, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-sm/semibold",
                                        children: "Current cooldown",
                                    }),
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(j.cooldown / 1000, " second(s) or"),
                                    }),
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(j.cooldown / 60000, " minute(s) or"),
                                    }),
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(j.cooldown / 3600000, " hour(s) or"),
                                    }),
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(j.cooldown / 86400000, " day(s)"),
                                    }),
                                ],
                            }),
                        (0, a.jsxs)(s.Kqy, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, a.jsx)(s.oil, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: n.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => x(parseFloat(e)),
                                }),
                                (0, a.jsx)(i.y6, {
                                    options: h,
                                    value: f,
                                    onChange: (e) => {
                                        g(e);
                                    },
                                    popoutLayerContext: u.O$,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(s.izJ, {}),
                (0, a.jsx)(s.C3N, {
                    label: "Override Survey Chance",
                    children: (0, a.jsx)(s.oil, {
                        label: "Override chance",
                        description: null != j ? "Current chance: ".concat(100 * j.chance, "%") : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: b.toString(),
                        type: "number",
                        onChange: (e) => v(parseFloat(e)),
                    }),
                }),
                (0, a.jsxs)(s.ButtonGroup, {
                    children: [
                        (0, a.jsx)(s.Button, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != j &&
                                    o.Z.dispatch({
                                        type: "FEEDBACK_OVERRIDE_CLEAR",
                                        feedbackType: j.feedbackType,
                                    })
                                ),
                            disabled: !C,
                        }),
                        (0, a.jsx)(s.Button, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != j &&
                                    o.Z.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: j.feedbackType,
                                        cooldown: n * f,
                                        chance: b / 100,
                                    })
                                ),
                            disabled: !C,
                        }),
                    ],
                }),
                null == e &&
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(n >= 0) &&
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(b >= 0 && b <= 100) &&
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
