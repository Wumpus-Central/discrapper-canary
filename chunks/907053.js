e.d(n, { default: () => m }), e(388685), e(457542), e(953529);
var s = e(255367),
    i = e(73800),
    l = e(544891),
    o = e(481060),
    r = e(600164),
    a = e(572004),
    c = e(472305),
    d = e(981631),
    x = e(388032),
    h = e(149388);
function u(t) {
    let { name: n, value: e } = t,
        [l, r] = i.useState(o.uA3.DEFAULT);
    return (0, s.jsxs)('div', {
        className: h.infoRow,
        children: [
            (0, s.jsx)(o.vwX, { children: n }),
            (0, s.jsx)(o.kO8, {
                value: e,
                mode: l,
                supportsCopy: a.wS,
                onCopy: () => {
                    (0, a.JG)(
                        e,
                        () => r(o.uA3.SUCCESS),
                        () => r(o.uA3.ERROR)
                    );
                }
            })
        ]
    });
}
function m(t) {
    let { onClose: n, transitionState: e } = t,
        [a, m] = i.useState(''),
        [j, k] = i.useState(''),
        [N, _] = i.useState(null),
        [g, p] = i.useState(!1),
        [C, v] = i.useState('DOMAIN'),
        R = () => {
            p(!0),
                _(null),
                l.tn
                    .post({
                        url: d.ANM.CONNECTION(d.ABu.DOMAIN, a),
                        body: {},
                        rejectWithError: !1
                    })
                    .then(() => {
                        n();
                    })
                    .catch((t) => {
                        var n, e, s, i, l, o, r;
                        (null == (n = t.body) ? void 0 : n.proof) && 'DOMAIN' === C ? (k(t.body.proof), v('PROOF_DNS')) : _((null == (o = t.body) || null == (l = o.errors) || null == (i = l.domain) || null == (s = i._errors) || null == (e = s[0]) ? void 0 : e.message) || (null == (r = t.body) ? void 0 : r.message) || t.message);
                    })
                    .finally(() => {
                        p(!1);
                    });
        };
    return (0, s.jsxs)(o.Y0X, {
        transitionState: e,
        className: h.__invalid_modal,
        children: [
            (0, s.jsxs)(o.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, s.jsx)(o.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.intl.string(x.t['7lo8+f'])
                    }),
                    (0, s.jsx)(o.olH, {
                        className: h.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, s.jsxs)(o.MyZ, {
                activeSlide: C,
                width: 440,
                children: [
                    (0, s.jsx)(o.Mi4, {
                        id: 'DOMAIN',
                        children: (0, s.jsxs)('form', {
                            onSubmit: (t) => {
                                t.preventDefault(), R();
                            },
                            children: [
                                (0, s.jsxs)(o.hzk, {
                                    className: h.content,
                                    children: [
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            className: h.description,
                                            children: x.intl.string(x.t.NxPUqa)
                                        }),
                                        (0, s.jsx)(o.xJW, {
                                            title: x.intl.string(x.t['4jIAa2']),
                                            error: N,
                                            children: (0, s.jsx)(o.oil, {
                                                onChange: m,
                                                placeholder: c.pL,
                                                maxLength: 253,
                                                value: a,
                                                disabled: g,
                                                autoFocus: !0
                                            })
                                        })
                                    ]
                                }),
                                (0, s.jsxs)(o.mzw, {
                                    className: h.footer,
                                    children: [
                                        (0, s.jsx)(o.zxk, {
                                            type: 'submit',
                                            submitting: g,
                                            disabled: '' === a,
                                            children: x.intl.string(x.t.PDTjLC)
                                        }),
                                        (0, s.jsx)(o.zxk, {
                                            look: o.zxk.Looks.LINK,
                                            color: o.zxk.Colors.PRIMARY,
                                            onClick: n,
                                            children: x.intl.string(x.t['ETE/oK'])
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, s.jsxs)(o.Mi4, {
                        id: 'PROOF_DNS',
                        children: [
                            (0, s.jsxs)(o.hzk, {
                                className: h.content,
                                children: [
                                    (0, s.jsxs)('ol', {
                                        className: h.list,
                                        children: [
                                            (0, s.jsx)('li', {
                                                children: (0, s.jsx)(o.Text, {
                                                    tag: 'span',
                                                    variant: 'text-md/normal',
                                                    children: x.intl.string(x.t.yOxxAw)
                                                })
                                            }),
                                            (0, s.jsxs)('li', {
                                                children: [
                                                    (0, s.jsx)(o.Text, {
                                                        tag: 'span',
                                                        variant: 'text-md/normal',
                                                        children: x.intl.string(x.t.cSURbm)
                                                    }),
                                                    (0, s.jsxs)('div', {
                                                        className: h.dnsRecordContainer,
                                                        children: [
                                                            (0, s.jsx)(u, {
                                                                name: x.intl.string(x.t.GL3q7u),
                                                                value: (0, c.Qv)(a)
                                                            }),
                                                            (0, s.jsx)(u, {
                                                                name: x.intl.string(x.t.Ccmixs),
                                                                value: 'TXT'
                                                            }),
                                                            (0, s.jsx)(u, {
                                                                name: x.intl.string(x.t.PVLriY),
                                                                value: j
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, s.jsx)(o.Wn, {
                                        messageType: o.QYI.INFO,
                                        className: h.text,
                                        children: x.intl.string(x.t.CUBxDA)
                                    }),
                                    null != N &&
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            className: h.text,
                                            children: N
                                        })
                                ]
                            }),
                            (0, s.jsxs)(o.mzw, {
                                className: h.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, s.jsx)(o.zxk, {
                                        look: o.zxk.Looks.LINK,
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: () => {
                                            v('DOMAIN'), _(null);
                                        },
                                        children: x.intl.string(x.t['13/7kZ'])
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: h.footerInner,
                                        children: [
                                            (0, s.jsx)(o.zxk, {
                                                look: o.zxk.Looks.LINK,
                                                color: o.zxk.Colors.PRIMARY,
                                                onClick: () => {
                                                    v('PROOF_HTTP'), _(null);
                                                },
                                                className: h.__invalid_switchButton,
                                                children: x.intl.string(x.t.CkfdNz)
                                            }),
                                            (0, s.jsx)(o.zxk, {
                                                submitting: g,
                                                onClick: R,
                                                children: x.intl.string(x.t['13ofGh'])
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)(o.Mi4, {
                        id: 'PROOF_HTTP',
                        children: [
                            (0, s.jsxs)(o.hzk, {
                                className: h.content,
                                children: [
                                    (0, s.jsx)(o.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        children: x.intl.string(x.t['p4ql7+'])
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: h.httpFileContainer,
                                        children: [
                                            (0, s.jsx)(u, {
                                                name: x.intl.string(x.t.GL3q7u),
                                                value: (0, c.F9)(a)
                                            }),
                                            (0, s.jsx)(u, {
                                                name: x.intl.string(x.t.PVLriY),
                                                value: j
                                            })
                                        ]
                                    }),
                                    null != N &&
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            className: h.text,
                                            children: N
                                        })
                                ]
                            }),
                            (0, s.jsxs)(o.mzw, {
                                className: h.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, s.jsx)(o.zxk, {
                                        look: o.zxk.Looks.LINK,
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: () => {
                                            v('DOMAIN'), _(null);
                                        },
                                        children: x.intl.string(x.t['13/7kZ'])
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: h.footerInner,
                                        children: [
                                            (0, s.jsx)(o.zxk, {
                                                look: o.zxk.Looks.LINK,
                                                color: o.zxk.Colors.PRIMARY,
                                                onClick: () => {
                                                    v('PROOF_DNS'), _(null);
                                                },
                                                className: h.__invalid_switchButton,
                                                children: x.intl.string(x.t.RhJMVV)
                                            }),
                                            (0, s.jsx)(o.zxk, {
                                                submitting: g,
                                                onClick: R,
                                                children: x.intl.string(x.t['13ofGh'])
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
