(e.d(n, { default: () => u }), e(388685), e(457542), e(953529));
var s = e(255367),
    i = e(73800),
    a = e(544891),
    l = e(481060),
    r = e(600164),
    o = e(572004),
    c = e(472305),
    d = e(981631),
    x = e(388032),
    h = e(149388);
function m(t) {
    let { name: n, value: e } = t,
        [a, r] = i.useState(l.uA3.DEFAULT);
    return (0, s.jsxs)('div', {
        className: h.infoRow,
        children: [
            (0, s.jsx)(l.vwX, { children: n }),
            (0, s.jsx)(l.kO8, {
                value: e,
                mode: a,
                supportsCopy: o.wS,
                onCopy: () => {
                    (0, o.JG)(
                        e,
                        () => r(l.uA3.SUCCESS),
                        () => r(l.uA3.ERROR)
                    );
                }
            })
        ]
    });
}
function u(t) {
    let { onClose: n, transitionState: e } = t,
        [o, u] = i.useState(''),
        [j, p] = i.useState(''),
        [v, _] = i.useState(null),
        [N, g] = i.useState(!1),
        [C, f] = i.useState('DOMAIN'),
        k = () => {
            (g(!0),
                _(null),
                a.tn
                    .post({
                        url: d.ANM.CONNECTION(d.ABu.DOMAIN, o),
                        body: {},
                        rejectWithError: !1
                    })
                    .then(() => {
                        n();
                    })
                    .catch((t) => {
                        var n, e, s, i, a, l, r;
                        (null == (n = t.body) ? void 0 : n.proof) && 'DOMAIN' === C ? (p(t.body.proof), f('PROOF_DNS')) : _((null == (l = t.body) || null == (a = l.errors) || null == (i = a.domain) || null == (s = i._errors) || null == (e = s[0]) ? void 0 : e.message) || (null == (r = t.body) ? void 0 : r.message) || t.message);
                    })
                    .finally(() => {
                        g(!1);
                    }));
        };
    return (0, s.jsxs)(l.Y0X, {
        transitionState: e,
        className: h.__invalid_modal,
        parentComponent: 'DomainVerifyModal',
        children: [
            (0, s.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, s.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.intl.string(x.t['7lo8+f'])
                    }),
                    (0, s.jsx)(l.olH, {
                        className: h.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, s.jsxs)(l.MyZ, {
                activeSlide: C,
                width: 440,
                children: [
                    (0, s.jsx)(l.Mi4, {
                        id: 'DOMAIN',
                        children: (0, s.jsxs)('form', {
                            onSubmit: (t) => {
                                (t.preventDefault(), k());
                            },
                            children: [
                                (0, s.jsxs)(l.hzk, {
                                    className: h.content,
                                    children: [
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            className: h.description,
                                            children: x.intl.string(x.t.NxPUqa)
                                        }),
                                        (0, s.jsx)(l.xJW, {
                                            title: x.intl.string(x.t['4jIAa2']),
                                            error: v,
                                            children: (0, s.jsx)(l.oil, {
                                                onChange: u,
                                                placeholder: c.pL,
                                                maxLength: 253,
                                                value: o,
                                                disabled: N,
                                                autoFocus: !0
                                            })
                                        })
                                    ]
                                }),
                                (0, s.jsx)(l.mzw, {
                                    className: h.footer,
                                    children: (0, s.jsxs)(l.hE2, {
                                        direction: 'horizontal-reverse',
                                        children: [
                                            (0, s.jsx)(l.zxk, {
                                                variant: 'primary',
                                                text: x.intl.string(x.t.PDTjLC),
                                                type: 'submit',
                                                loading: N,
                                                disabled: '' === o
                                            }),
                                            (0, s.jsx)(l.zxk, {
                                                variant: 'secondary',
                                                text: x.intl.string(x.t['ETE/oK']),
                                                onClick: n
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    (0, s.jsxs)(l.Mi4, {
                        id: 'PROOF_DNS',
                        children: [
                            (0, s.jsxs)(l.hzk, {
                                className: h.content,
                                children: [
                                    (0, s.jsxs)('ol', {
                                        className: h.list,
                                        children: [
                                            (0, s.jsx)('li', {
                                                children: (0, s.jsx)(l.Text, {
                                                    tag: 'span',
                                                    variant: 'text-md/normal',
                                                    children: x.intl.string(x.t.yOxxAw)
                                                })
                                            }),
                                            (0, s.jsxs)('li', {
                                                children: [
                                                    (0, s.jsx)(l.Text, {
                                                        tag: 'span',
                                                        variant: 'text-md/normal',
                                                        children: x.intl.string(x.t.cSURbm)
                                                    }),
                                                    (0, s.jsxs)('div', {
                                                        className: h.dnsRecordContainer,
                                                        children: [
                                                            (0, s.jsx)(m, {
                                                                name: x.intl.string(x.t.GL3q7u),
                                                                value: (0, c.Qv)(o)
                                                            }),
                                                            (0, s.jsx)(m, {
                                                                name: x.intl.string(x.t.Ccmixs),
                                                                value: 'TXT'
                                                            }),
                                                            (0, s.jsx)(m, {
                                                                name: x.intl.string(x.t.PVLriY),
                                                                value: j
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, s.jsx)(l.Wn, {
                                        messageType: l.QYI.INFO,
                                        className: h.text,
                                        children: x.intl.string(x.t.CUBxDA)
                                    }),
                                    null != v &&
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            className: h.text,
                                            children: v
                                        })
                                ]
                            }),
                            (0, s.jsxs)(l.mzw, {
                                className: h.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, s.jsx)(l.zxk, {
                                        variant: 'secondary',
                                        text: x.intl.string(x.t['13/7kZ']),
                                        onClick: () => {
                                            (f('DOMAIN'), _(null));
                                        }
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: h.footerInner,
                                        children: [
                                            (0, s.jsx)('div', {
                                                'data-button-hoisted-classname-wrapper': !0,
                                                className: h.__invalid_switchButton,
                                                children: (0, s.jsx)(l.zxk, {
                                                    variant: 'secondary',
                                                    text: x.intl.string(x.t.CkfdNz),
                                                    onClick: () => {
                                                        (f('PROOF_HTTP'), _(null));
                                                    }
                                                })
                                            }),
                                            (0, s.jsx)(l.zxk, {
                                                variant: 'primary',
                                                text: x.intl.string(x.t['13ofGh']),
                                                loading: N,
                                                onClick: k
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)(l.Mi4, {
                        id: 'PROOF_HTTP',
                        children: [
                            (0, s.jsxs)(l.hzk, {
                                className: h.content,
                                children: [
                                    (0, s.jsx)(l.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        children: x.intl.string(x.t['p4ql7+'])
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: h.httpFileContainer,
                                        children: [
                                            (0, s.jsx)(m, {
                                                name: x.intl.string(x.t.GL3q7u),
                                                value: (0, c.F9)(o)
                                            }),
                                            (0, s.jsx)(m, {
                                                name: x.intl.string(x.t.PVLriY),
                                                value: j
                                            })
                                        ]
                                    }),
                                    null != v &&
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            className: h.text,
                                            children: v
                                        })
                                ]
                            }),
                            (0, s.jsxs)(l.mzw, {
                                className: h.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, s.jsx)(l.zxk, {
                                        variant: 'secondary',
                                        text: x.intl.string(x.t['13/7kZ']),
                                        onClick: () => {
                                            (f('DOMAIN'), _(null));
                                        }
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: h.footerInner,
                                        children: [
                                            (0, s.jsx)('div', {
                                                'data-button-hoisted-classname-wrapper': !0,
                                                className: h.__invalid_switchButton,
                                                children: (0, s.jsx)(l.zxk, {
                                                    variant: 'secondary',
                                                    text: x.intl.string(x.t.RhJMVV),
                                                    onClick: () => {
                                                        (f('PROOF_DNS'), _(null));
                                                    }
                                                })
                                            }),
                                            (0, s.jsx)(l.zxk, {
                                                variant: 'primary',
                                                text: x.intl.string(x.t['13ofGh']),
                                                loading: N,
                                                onClick: k
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
