e.d(n, { default: () => u }), e(47120), e(773603);
var i = e(200651),
    s = e(192379),
    l = e(544891),
    o = e(481060),
    r = e(600164),
    a = e(572004),
    c = e(472305),
    d = e(981631),
    x = e(388032),
    h = e(910880);
function m(t) {
    let { name: n, value: e } = t,
        [l, r] = s.useState(o.uA3.DEFAULT);
    return (0, i.jsxs)('div', {
        className: h.infoRow,
        children: [
            (0, i.jsx)(o.vwX, { children: n }),
            (0, i.jsx)(o.kO8, {
                value: e,
                mode: l,
                supportsCopy: a.wS,
                onCopy: () => {
                    (0, a.JG)(e), r(o.uA3.SUCCESS);
                }
            })
        ]
    });
}
function u(t) {
    let { onClose: n, transitionState: e } = t,
        [a, u] = s.useState(''),
        [j, k] = s.useState(''),
        [N, v] = s.useState(null),
        [_, g] = s.useState(!1),
        [p, C] = s.useState('DOMAIN'),
        b = () => {
            g(!0),
                v(null),
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
                        var n, e, i, s, l, o, r;
                        (null === (n = t.body) || void 0 === n ? void 0 : n.proof) && 'DOMAIN' === p ? (k(t.body.proof), C('PROOF_DNS')) : v((null === (o = t.body) || void 0 === o ? void 0 : null === (l = o.errors) || void 0 === l ? void 0 : null === (s = l.domain) || void 0 === s ? void 0 : null === (i = s._errors) || void 0 === i ? void 0 : null === (e = i[0]) || void 0 === e ? void 0 : e.message) || (null === (r = t.body) || void 0 === r ? void 0 : r.message) || t.message);
                    })
                    .finally(() => {
                        g(!1);
                    });
        };
    return (0, i.jsxs)(o.Y0X, {
        transitionState: e,
        className: h.__invalid_modal,
        children: [
            (0, i.jsxs)(o.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, i.jsx)(o.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.intl.string(x.t['7lo8+f'])
                    }),
                    (0, i.jsx)(o.olH, {
                        className: h.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, i.jsxs)(o.MyZ, {
                activeSlide: p,
                width: 440,
                children: [
                    (0, i.jsx)(o.Mi4, {
                        id: 'DOMAIN',
                        children: (0, i.jsxs)('form', {
                            onSubmit: (t) => {
                                t.preventDefault(), b();
                            },
                            children: [
                                (0, i.jsxs)(o.hzk, {
                                    className: h.content,
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            className: h.description,
                                            children: x.intl.string(x.t.NxPUqa)
                                        }),
                                        (0, i.jsx)(o.xJW, {
                                            title: x.intl.string(x.t['4jIAa2']),
                                            error: N,
                                            children: (0, i.jsx)(o.oil, {
                                                onChange: u,
                                                placeholder: c.pL,
                                                maxLength: 253,
                                                value: a,
                                                disabled: _,
                                                autoFocus: !0
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(o.mzw, {
                                    className: h.footer,
                                    children: [
                                        (0, i.jsx)(o.zxk, {
                                            type: 'submit',
                                            submitting: _,
                                            disabled: '' === a,
                                            children: x.intl.string(x.t.PDTjLC)
                                        }),
                                        (0, i.jsx)(o.zxk, {
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
                    (0, i.jsxs)(o.Mi4, {
                        id: 'PROOF_DNS',
                        children: [
                            (0, i.jsxs)(o.hzk, {
                                className: h.content,
                                children: [
                                    (0, i.jsxs)('ol', {
                                        className: h.list,
                                        children: [
                                            (0, i.jsx)('li', {
                                                children: (0, i.jsx)(o.Text, {
                                                    tag: 'span',
                                                    variant: 'text-md/normal',
                                                    children: x.intl.string(x.t.yOxxAw)
                                                })
                                            }),
                                            (0, i.jsxs)('li', {
                                                children: [
                                                    (0, i.jsx)(o.Text, {
                                                        tag: 'span',
                                                        variant: 'text-md/normal',
                                                        children: x.intl.string(x.t.cSURbm)
                                                    }),
                                                    (0, i.jsxs)('div', {
                                                        className: h.dnsRecordContainer,
                                                        children: [
                                                            (0, i.jsx)(m, {
                                                                name: x.intl.string(x.t.GL3q7u),
                                                                value: (0, c.Qv)(a)
                                                            }),
                                                            (0, i.jsx)(m, {
                                                                name: x.intl.string(x.t.Ccmixs),
                                                                value: 'TXT'
                                                            }),
                                                            (0, i.jsx)(m, {
                                                                name: x.intl.string(x.t.PVLriY),
                                                                value: j
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(o.Wn, {
                                        messageType: o.QYI.INFO,
                                        className: h.text,
                                        children: x.intl.string(x.t.CUBxDA)
                                    }),
                                    null != N &&
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            className: h.text,
                                            children: N
                                        })
                                ]
                            }),
                            (0, i.jsxs)(o.mzw, {
                                className: h.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, i.jsx)(o.zxk, {
                                        look: o.zxk.Looks.LINK,
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: () => {
                                            C('DOMAIN'), v(null);
                                        },
                                        children: x.intl.string(x.t['13/7kZ'])
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: h.footerInner,
                                        children: [
                                            (0, i.jsx)(o.zxk, {
                                                look: o.zxk.Looks.LINK,
                                                color: o.zxk.Colors.PRIMARY,
                                                onClick: () => {
                                                    C('PROOF_HTTP'), v(null);
                                                },
                                                className: h.__invalid_switchButton,
                                                children: x.intl.string(x.t.CkfdNz)
                                            }),
                                            (0, i.jsx)(o.zxk, {
                                                submitting: _,
                                                onClick: b,
                                                children: x.intl.string(x.t['13ofGh'])
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(o.Mi4, {
                        id: 'PROOF_HTTP',
                        children: [
                            (0, i.jsxs)(o.hzk, {
                                className: h.content,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        children: x.intl.string(x.t['p4ql7+'])
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: h.httpFileContainer,
                                        children: [
                                            (0, i.jsx)(m, {
                                                name: x.intl.string(x.t.GL3q7u),
                                                value: (0, c.F9)(a)
                                            }),
                                            (0, i.jsx)(m, {
                                                name: x.intl.string(x.t.PVLriY),
                                                value: j
                                            })
                                        ]
                                    }),
                                    null != N &&
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            className: h.text,
                                            children: N
                                        })
                                ]
                            }),
                            (0, i.jsxs)(o.mzw, {
                                className: h.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, i.jsx)(o.zxk, {
                                        look: o.zxk.Looks.LINK,
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: () => {
                                            C('DOMAIN'), v(null);
                                        },
                                        children: x.intl.string(x.t['13/7kZ'])
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: h.footerInner,
                                        children: [
                                            (0, i.jsx)(o.zxk, {
                                                look: o.zxk.Looks.LINK,
                                                color: o.zxk.Colors.PRIMARY,
                                                onClick: () => {
                                                    C('PROOF_DNS'), v(null);
                                                },
                                                className: h.__invalid_switchButton,
                                                children: x.intl.string(x.t.RhJMVV)
                                            }),
                                            (0, i.jsx)(o.zxk, {
                                                submitting: _,
                                                onClick: b,
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
