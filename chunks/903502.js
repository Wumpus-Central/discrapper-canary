n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(570140),
    s = n(178635),
    c = n(115470),
    d = n(511010),
    u = n(246992),
    m = n(521981);
let x = [
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
    let [e, t] = a.useState(null),
        [n, h] = a.useState(0),
        [p, b] = a.useState(1000),
        [f, _] = a.useState(0),
        g = (0, l.e7)([c.Z], () => {
            var t;
            return null === e ? null : null != (t = c.Z.getFeedbackConfig(e)) ? t : s.R[e];
        }),
        v = Object.keys(s.R).map((e) => ({
            label: e,
            value: e
        })),
        j = a.useMemo(() => null != e && f >= 0 && f <= 100 && n >= 0, [e, f, n]);
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)(i.hjN, {
                title: 'Feedback Survey',
                className: m.formElement,
                tag: i.RB0.H3,
                children: (0, r.jsx)(i.q4e, {
                    options: v,
                    value: e,
                    onChange: (e) => {
                        t(e);
                    },
                    popoutLayerContext: u.O$,
                    placeholder: 'Select Feedback Survey'
                })
            }),
            (0, r.jsxs)(i.hjN, {
                title: 'Override Survey Cooldown',
                className: m.formElement,
                tag: i.RB0.H3,
                children: [
                    null != g &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: m.formDividerTitle,
                                    children: (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current cooldown'
                                    })
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 1000, ' second(s) or')
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 60000, ' minute(s) or')
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 3600000, ' hour(s) or')
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 86400000, ' day(s)')
                                })
                            ]
                        }),
                    (0, r.jsx)(d.Z, {
                        className: m.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override cooldown'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: m.formRow,
                        children: [
                            (0, r.jsx)(i.oil, {
                                min: 0,
                                value: n.toString(),
                                type: 'number',
                                placeholder: 'Duration length',
                                onChange: (e) => h(parseFloat(e))
                            }),
                            (0, r.jsx)(i.q4e, {
                                options: x,
                                value: p,
                                onChange: (e) => {
                                    b(e);
                                },
                                popoutLayerContext: u.O$
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(i.hjN, {
                title: 'Override Survey Chance',
                className: m.formElement,
                tag: i.RB0.H3,
                children: [
                    null != g &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: m.formDividerTitle,
                                    children: (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current chance'
                                    })
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(100 * g.chance, '%')
                                })
                            ]
                        }),
                    (0, r.jsx)(d.Z, {
                        className: m.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override chance'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: m.formRow,
                        children: [
                            (0, r.jsx)(i.oil, {
                                min: 0,
                                max: 100,
                                value: f.toString(),
                                type: 'number',
                                onChange: (e) => _(parseFloat(e))
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: '%'
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: m.formRow,
                children: [
                    (0, r.jsx)(i.zxk, {
                        onClick: () =>
                            void o.Z.dispatch({
                                type: 'FEEDBACK_OVERRIDE_SET',
                                feedbackType: e,
                                cooldown: n * p,
                                chance: f / 100
                            }),
                        disabled: !j,
                        children: 'Update'
                    }),
                    (0, r.jsx)(i.zxk, {
                        onClick: () =>
                            void o.Z.dispatch({
                                type: 'FEEDBACK_OVERRIDE_CLEAR',
                                feedbackType: e
                            }),
                        disabled: !j,
                        children: 'Clear Override'
                    })
                ]
            }),
            null == e &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: need to select a survey'
                }),
            !(n >= 0) &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: cooldown needs to be a number greater than 0'
                }),
            !(f >= 0 && f <= 100) &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: chance needs to be a number between 0 and 100'
                }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: 'Clear override resets a feedback survey to its default values'
            })
        ]
    });
}
