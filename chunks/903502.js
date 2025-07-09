(a.d(t, { Z: () => h }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(442837),
    i = a(481060),
    s = a(570140),
    o = a(178635),
    c = a(115470),
    d = a(511010),
    u = a(246992),
    m = a(531578),
    x = a(521981);
let p = [
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
function h() {
    let [e, t] = r.useState(null),
        [a, h] = r.useState(0),
        [b, f] = r.useState(1000),
        [v, j] = r.useState(0),
        g = (0, l.e7)([c.Z], () => {
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
        C = r.useMemo(() => null != e && v >= 0 && v <= 100 && a >= 0, [e, v, a]);
    return (0, n.jsxs)('div', {
        className: x.container,
        children: [
            (0, n.jsx)(i.hjN, {
                title: 'Feedback Survey',
                className: x.formElement,
                tag: i.RB0.H3,
                children: (0, n.jsx)(i.q4e, {
                    options: y,
                    value: e,
                    onChange: (e) => {
                        t(e);
                    },
                    popoutLayerContext: u.O$,
                    placeholder: 'Select Feedback Survey'
                })
            }),
            (0, n.jsxs)(i.hjN, {
                title: 'Override Survey Cooldown',
                className: x.formElement,
                tag: i.RB0.H3,
                children: [
                    null != g &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(d.Z, {
                                    className: x.formDividerTitle,
                                    children: (0, n.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current cooldown'
                                    })
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 1000, ' second(s) or')
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 60000, ' minute(s) or')
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 3600000, ' hour(s) or')
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 86400000, ' day(s)')
                                })
                            ]
                        }),
                    (0, n.jsx)(d.Z, {
                        className: x.formDividerTitle,
                        children: (0, n.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override cooldown'
                        })
                    }),
                    (0, n.jsxs)('div', {
                        className: x.formRow,
                        children: [
                            (0, n.jsx)(i.oil, {
                                min: 0,
                                value: a.toString(),
                                type: 'number',
                                placeholder: 'Duration length',
                                onChange: (e) => h(parseFloat(e))
                            }),
                            (0, n.jsx)(i.q4e, {
                                options: p,
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
            (0, n.jsxs)(i.hjN, {
                title: 'Override Survey Chance',
                className: x.formElement,
                tag: i.RB0.H3,
                children: [
                    null != g &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(d.Z, {
                                    className: x.formDividerTitle,
                                    children: (0, n.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current chance'
                                    })
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(100 * g.chance, '%')
                                })
                            ]
                        }),
                    (0, n.jsx)(d.Z, {
                        className: x.formDividerTitle,
                        children: (0, n.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override chance'
                        })
                    }),
                    (0, n.jsxs)('div', {
                        className: x.formRow,
                        children: [
                            (0, n.jsx)(i.oil, {
                                min: 0,
                                max: 100,
                                value: v.toString(),
                                type: 'number',
                                onChange: (e) => j(parseFloat(e))
                            }),
                            (0, n.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: '%'
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: x.formRow,
                children: [
                    (0, n.jsx)(i.zxk, {
                        variant: 'primary',
                        text: 'Update',
                        onClick: () =>
                            void (
                                null != g &&
                                s.Z.dispatch({
                                    type: 'FEEDBACK_OVERRIDE_SET',
                                    feedbackType: g.feedbackType,
                                    cooldown: a * b,
                                    chance: v / 100
                                })
                            ),
                        disabled: !C
                    }),
                    (0, n.jsx)(i.zxk, {
                        variant: 'primary',
                        text: 'Clear Override',
                        onClick: () =>
                            void (
                                null != g &&
                                s.Z.dispatch({
                                    type: 'FEEDBACK_OVERRIDE_CLEAR',
                                    feedbackType: g.feedbackType
                                })
                            ),
                        disabled: !C
                    })
                ]
            }),
            null == e &&
                (0, n.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: need to select a survey'
                }),
            !(a >= 0) &&
                (0, n.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: cooldown needs to be a number greater than 0'
                }),
            !(v >= 0 && v <= 100) &&
                (0, n.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: chance needs to be a number between 0 and 100'
                }),
            (0, n.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: 'Clear override resets a feedback survey to its default values'
            })
        ]
    });
}
