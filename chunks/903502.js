n.d(t, { Z: () => p }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(481060),
    s = n(570140),
    o = n(178635),
    c = n(115470),
    d = n(531578),
    u = n(746234);
let m = [
    {
        id: "seconds",
        label: "second(s)",
        value: 1000,
    },
    {
        id: "minutes",
        label: "minute(s)",
        value: 60000,
    },
    {
        id: "hours",
        label: "hour(s)",
        value: 3600000,
    },
    {
        id: "days",
        label: "day(s)",
        value: 86400000,
    },
];
function p() {
    let [e, t] = r.useState(null),
        [n, p] = r.useState(0),
        [h, f] = r.useState(1000),
        [b, x] = r.useState(0),
        g = (0, i.e7)([c.Z], () => {
            var t;
            return null === e ? null : null != (t = c.Z.getFeedbackConfig(d.nw[e])) ? t : o.R[d.nw[e]];
        }),
        v = Object.entries(d.nw),
        j = v.slice(v.length / 2).map((e) => {
            let [t] = e;
            return {
                id: t,
                label: t,
                value: t,
            };
        }),
        y = r.useMemo(() => null != e && b >= 0 && b <= 100 && n >= 0, [e, b, n]);
    return (0, a.jsx)("div", {
        className: u.container,
        children: (0, a.jsxs)(l.Kqy, {
            gap: 32,
            children: [
                (0, a.jsx)(l.PhF, {
                    label: "Feedback Survey",
                    options: j,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, a.jsxs)(l.C3N, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != g &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/semibold",
                                        children: "Current cooldown",
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(g.cooldown / 1000, " second(s) or"),
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(g.cooldown / 60000, " minute(s) or"),
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(g.cooldown / 3600000, " hour(s) or"),
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: "".concat(g.cooldown / 86400000, " day(s)"),
                                    }),
                                ],
                            }),
                        (0, a.jsxs)(l.Kqy, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, a.jsx)(l.oil, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: n.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => p(parseFloat(e)),
                                }),
                                (0, a.jsx)(l.PhF, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: m,
                                    value: h,
                                    onSelectionChange: f,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(l.izJ, {}),
                (0, a.jsx)(l.C3N, {
                    label: "Override Survey Chance",
                    children: (0, a.jsx)(l.oil, {
                        label: "Override chance",
                        description: null != g ? "Current chance: ".concat(100 * g.chance, "%") : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: b.toString(),
                        type: "number",
                        onChange: (e) => x(parseFloat(e)),
                    }),
                }),
                (0, a.jsxs)(l.ButtonGroup, {
                    children: [
                        (0, a.jsx)(l.Button, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != g &&
                                    s.Z.dispatch({
                                        type: "FEEDBACK_OVERRIDE_CLEAR",
                                        feedbackType: g.feedbackType,
                                    })
                                ),
                            disabled: !y,
                        }),
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != g &&
                                    s.Z.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: g.feedbackType,
                                        cooldown: n * h,
                                        chance: b / 100,
                                    })
                                ),
                            disabled: !y,
                        }),
                    ],
                }),
                null == e &&
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(n >= 0) &&
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(b >= 0 && b <= 100) &&
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
