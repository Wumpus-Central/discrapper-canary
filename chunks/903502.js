n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    l = n(481060),
    o = n(570140),
    s = n(178635),
    c = n(115470),
    d = n(511010),
    u = n(246992),
    h = n(94645);
let m = [
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
function x() {
    let [e, t] = a.useState(null),
        [n, x] = a.useState(0),
        [p, f] = a.useState(1000),
        [b, _] = a.useState(0),
        g = (0, i.e7)([c.Z], () => {
            var t;
            return null === e ? null : null !== (t = c.Z.getFeedbackConfig(e)) && void 0 !== t ? t : s.R[e];
        }),
        v = Object.keys(s.R).map((e) => ({
            label: e,
            value: e
        })),
        j = a.useMemo(() => null != e && b >= 0 && b <= 100 && n >= 0, [e, b, n]);
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)(l.hjN, {
                title: 'Feedback Survey',
                className: h.formElement,
                tag: l.RB0.H3,
                children: (0, r.jsx)(l.q4e, {
                    options: v,
                    value: e,
                    onChange: (e) => {
                        t(e);
                    },
                    popoutLayerContext: u.O$,
                    placeholder: 'Select Feedback Survey'
                })
            }),
            (0, r.jsxs)(l.hjN, {
                title: 'Override Survey Cooldown',
                className: h.formElement,
                tag: l.RB0.H3,
                children: [
                    null != g &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: h.formDividerTitle,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current cooldown'
                                    })
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 1000, ' second(s) or')
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 60000, ' minute(s) or')
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 3600000, ' hour(s) or')
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(g.cooldown / 86400000, ' day(s)')
                                })
                            ]
                        }),
                    (0, r.jsx)(d.Z, {
                        className: h.formDividerTitle,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override cooldown'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: h.formRow,
                        children: [
                            (0, r.jsx)(l.oil, {
                                min: 0,
                                value: n.toString(),
                                type: 'number',
                                placeholder: 'Duration length',
                                onChange: (e) => x(parseFloat(e))
                            }),
                            (0, r.jsx)(l.q4e, {
                                options: m,
                                value: p,
                                onChange: (e) => {
                                    f(e);
                                },
                                popoutLayerContext: u.O$
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(l.hjN, {
                title: 'Override Survey Chance',
                className: h.formElement,
                tag: l.RB0.H3,
                children: [
                    null != g &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: h.formDividerTitle,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current chance'
                                    })
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(100 * g.chance, '%')
                                })
                            ]
                        }),
                    (0, r.jsx)(d.Z, {
                        className: h.formDividerTitle,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override chance'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: h.formRow,
                        children: [
                            (0, r.jsx)(l.oil, {
                                min: 0,
                                max: 100,
                                value: b.toString(),
                                type: 'number',
                                onChange: (e) => _(parseFloat(e))
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: '%'
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: h.formRow,
                children: [
                    (0, r.jsx)(l.zxk, {
                        onClick: () =>
                            void o.Z.dispatch({
                                type: 'FEEDBACK_OVERRIDE_SET',
                                feedbackType: e,
                                cooldown: n * p,
                                chance: b / 100
                            }),
                        disabled: !j,
                        children: 'Update'
                    }),
                    (0, r.jsx)(l.zxk, {
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
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: need to select a survey'
                }),
            !(n >= 0) &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: cooldown needs to be a number greater than 0'
                }),
            !(b >= 0 && b <= 100) &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: chance needs to be a number between 0 and 100'
                }),
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/normal',
                children: 'Clear override resets a feedback survey to its default values'
            })
        ]
    });
}
