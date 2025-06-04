n.d(t, { Z: () => p }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(442837),
    i = n(481060),
    s = n(570140),
    o = n(178635),
    c = n(115470),
    d = n(511010),
    u = n(246992),
    m = n(531578),
    x = n(521981);
let h = [
    {
        label: 'second(s)',
        value: 1000
    },
    {
        label: 'minute(s)',
        value: 60000
    },
    {
        label: 'hour(s)',
        value: 3600000
    },
    {
        label: 'day(s)',
        value: 86400000
    }
];
function p() {
    let [e, t] = r.useState(null),
        [n, p] = r.useState(0),
        [b, f] = r.useState(1000),
        [v, g] = r.useState(0),
        j = (0, l.e7)([c.Z], () => {
            var t;
            return null === e ? null : null != (t = c.Z.getFeedbackConfig(m.nw[e])) ? t : o.R[m.nw[e]];
        }),
        _ = Object.entries(m.nw),
        y = _.slice(_.length / 2).map((e) => {
            let [t] = e;
            return {
                label: t,
                value: t
            };
        }),
        C = r.useMemo(() => null != e && v >= 0 && v <= 100 && n >= 0, [e, v, n]);
    return (0, a.jsxs)('div', {
        className: x.container,
        children: [
            (0, a.jsx)(i.hjN, {
                title: 'Feedback Survey',
                className: x.formElement,
                tag: i.RB0.H3,
                children: (0, a.jsx)(i.q4e, {
                    options: y,
                    value: e,
                    onChange: (e) => {
                        t(e);
                    },
                    popoutLayerContext: u.O$,
                    placeholder: 'Select Feedback Survey'
                })
            }),
            (0, a.jsxs)(i.hjN, {
                title: 'Override Survey Cooldown',
                className: x.formElement,
                tag: i.RB0.H3,
                children: [
                    null != j &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.Z, {
                                    className: x.formDividerTitle,
                                    children: (0, a.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current cooldown'
                                    })
                                }),
                                (0, a.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(j.cooldown / 1000, ' second(s) or')
                                }),
                                (0, a.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(j.cooldown / 60000, ' minute(s) or')
                                }),
                                (0, a.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(j.cooldown / 3600000, ' hour(s) or')
                                }),
                                (0, a.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(j.cooldown / 86400000, ' day(s)')
                                })
                            ]
                        }),
                    (0, a.jsx)(d.Z, {
                        className: x.formDividerTitle,
                        children: (0, a.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override cooldown'
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: x.formRow,
                        children: [
                            (0, a.jsx)(i.oil, {
                                min: 0,
                                value: n.toString(),
                                type: 'number',
                                placeholder: 'Duration length',
                                onChange: (e) => p(parseFloat(e))
                            }),
                            (0, a.jsx)(i.q4e, {
                                options: h,
                                value: b,
                                onChange: (e) => {
                                    f(e);
                                },
                                popoutLayerContext: u.O$
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsxs)(i.hjN, {
                title: 'Override Survey Chance',
                className: x.formElement,
                tag: i.RB0.H3,
                children: [
                    null != j &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.Z, {
                                    className: x.formDividerTitle,
                                    children: (0, a.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current chance'
                                    })
                                }),
                                (0, a.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(100 * j.chance, '%')
                                })
                            ]
                        }),
                    (0, a.jsx)(d.Z, {
                        className: x.formDividerTitle,
                        children: (0, a.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override chance'
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: x.formRow,
                        children: [
                            (0, a.jsx)(i.oil, {
                                min: 0,
                                max: 100,
                                value: v.toString(),
                                type: 'number',
                                onChange: (e) => g(parseFloat(e))
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: '%'
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: x.formRow,
                children: [
                    (0, a.jsx)(i.zxk, {
                        onClick: () =>
                            void (
                                null != j &&
                                s.Z.dispatch({
                                    type: 'FEEDBACK_OVERRIDE_SET',
                                    feedbackType: j.feedbackType,
                                    cooldown: n * b,
                                    chance: v / 100
                                })
                            ),
                        disabled: !C,
                        children: 'Update'
                    }),
                    (0, a.jsx)(i.zxk, {
                        onClick: () =>
                            void (
                                null != j &&
                                s.Z.dispatch({
                                    type: 'FEEDBACK_OVERRIDE_CLEAR',
                                    feedbackType: j.feedbackType
                                })
                            ),
                        disabled: !C,
                        children: 'Clear Override'
                    })
                ]
            }),
            null == e &&
                (0, a.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: need to select a survey'
                }),
            !(n >= 0) &&
                (0, a.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: cooldown needs to be a number greater than 0'
                }),
            !(v >= 0 && v <= 100) &&
                (0, a.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: chance needs to be a number between 0 and 100'
                }),
            (0, a.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: 'Clear override resets a feedback survey to its default values'
            })
        ]
    });
}
