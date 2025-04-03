t.d(s, { default: () => m }), t(47120), t(773603), t(266796);
var n = t(200651),
    o = t(192379),
    i = t(544891),
    l = t(481060),
    r = t(600164),
    a = t(572004),
    c = t(472305),
    d = t(981631),
    x = t(388032),
    h = t(149388);
function N(e) {
    let { name: s, value: t } = e,
        [i, r] = o.useState(l.uA3.DEFAULT);
    return (0, n.jsxs)('div', {
        className: h.infoRow,
        children: [
            (0, n.jsx)(l.vwX, { children: s }),
            (0, n.jsx)(l.kO8, {
                value: t,
                mode: i,
                supportsCopy: a.wS,
                onCopy: () => {
                    (0, a.JG)(t), r(l.uA3.SUCCESS);
                }
            })
        ]
    });
}
function m(e) {
    let { onClose: s, transitionState: t } = e,
        [a, m] = o.useState(''),
        [u, j] = o.useState(''),
        [k, _] = o.useState(null),
        [g, p] = o.useState(!1),
        [C, v] = o.useState('DOMAIN'),
        b = () => {
            p(!0),
                _(null),
                i.tn
                    .post({
                        url: d.ANM.CONNECTION(d.ABu.DOMAIN, a),
                        body: {},
                        rejectWithError: !1
                    })
                    .then(() => {
                        s();
                    })
                    .catch((e) => {
                        var s, t, n, o, i, l, r;
                        (null == (s = e.body) ? void 0 : s.proof) && 'DOMAIN' === C ? (j(e.body.proof), v('PROOF_DNS')) : _((null == (l = e.body) || null == (i = l.errors) || null == (o = i.domain) || null == (n = o._errors) || null == (t = n[0]) ? void 0 : t.message) || (null == (r = e.body) ? void 0 : r.message) || e.message);
                    })
                    .finally(() => {
                        p(!1);
                    });
        };
    return (0, n.jsxs)(l.Y0X, {
        transitionState: t,
        className: h.__invalid_modal,
        children: [
            (0, n.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.NW.string(x.t['7lo8+f'])
                    }),
                    (0, n.jsx)(l.olH, {
                        className: h.closeButton,
                        onClick: s
                    })
                ]
            }),
            (0, n.jsxs)(l.MyZ, {
                activeSlide: C,
                width: 440,
                children: [
                    (0, n.jsx)(l.Mi4, {
                        id: 'DOMAIN',
                        children: (0, n.jsxs)('form', {
                            onSubmit: (e) => {
                                e.preventDefault(), b();
                            },
                            children: [
                                (0, n.jsxs)(l.hzk, {
                                    className: h.content,
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            className: h.description,
                                            children: x.NW.string(x.t.NxPUqa)
                                        }),
                                        (0, n.jsx)(l.xJW, {
                                            title: x.NW.string(x.t['4jIAa2']),
                                            error: k,
                                            children: (0, n.jsx)(l.oil, {
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
                                (0, n.jsxs)(l.mzw, {
                                    className: h.footer,
                                    children: [
                                        (0, n.jsx)(l.zxk, {
                                            type: 'submit',
                                            submitting: g,
                                            disabled: '' === a,
                                            children: x.NW.string(x.t.PDTjLC)
                                        }),
                                        (0, n.jsx)(l.zxk, {
                                            look: l.zxk.Looks.LINK,
                                            color: l.zxk.Colors.PRIMARY,
                                            onClick: s,
                                            children: x.NW.string(x.t['ETE/oK'])
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, n.jsxs)(l.Mi4, {
                        id: 'PROOF_DNS',
                        children: [
                            (0, n.jsxs)(l.hzk, {
                                className: h.content,
                                children: [
                                    (0, n.jsxs)('ol', {
                                        className: h.list,
                                        children: [
                                            (0, n.jsx)('li', {
                                                children: (0, n.jsx)(l.Text, {
                                                    tag: 'span',
                                                    variant: 'text-md/normal',
                                                    children: x.NW.string(x.t.yOxxAw)
                                                })
                                            }),
                                            (0, n.jsxs)('li', {
                                                children: [
                                                    (0, n.jsx)(l.Text, {
                                                        tag: 'span',
                                                        variant: 'text-md/normal',
                                                        children: x.NW.string(x.t.cSURbm)
                                                    }),
                                                    (0, n.jsxs)('div', {
                                                        className: h.dnsRecordContainer,
                                                        children: [
                                                            (0, n.jsx)(N, {
                                                                name: x.NW.string(x.t.GL3q7u),
                                                                value: (0, c.Qv)(a)
                                                            }),
                                                            (0, n.jsx)(N, {
                                                                name: x.NW.string(x.t.Ccmixs),
                                                                value: 'TXT'
                                                            }),
                                                            (0, n.jsx)(N, {
                                                                name: x.NW.string(x.t.PVLriY),
                                                                value: u
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(l.Wn, {
                                        messageType: l.QYI.INFO,
                                        className: h.text,
                                        children: x.NW.string(x.t.CUBxDA)
                                    }),
                                    null != k &&
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            className: h.text,
                                            children: k
                                        })
                                ]
                            }),
                            (0, n.jsxs)(l.mzw, {
                                className: h.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, n.jsx)(l.zxk, {
                                        look: l.zxk.Looks.LINK,
                                        color: l.zxk.Colors.PRIMARY,
                                        onClick: () => {
                                            v('DOMAIN'), _(null);
                                        },
                                        children: x.NW.string(x.t['13/7kZ'])
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: h.footerInner,
                                        children: [
                                            (0, n.jsx)(l.zxk, {
                                                look: l.zxk.Looks.LINK,
                                                color: l.zxk.Colors.PRIMARY,
                                                onClick: () => {
                                                    v('PROOF_HTTP'), _(null);
                                                },
                                                className: h.__invalid_switchButton,
                                                children: x.NW.string(x.t.CkfdNz)
                                            }),
                                            (0, n.jsx)(l.zxk, {
                                                submitting: g,
                                                onClick: b,
                                                children: x.NW.string(x.t['13ofGh'])
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)(l.Mi4, {
                        id: 'PROOF_HTTP',
                        children: [
                            (0, n.jsxs)(l.hzk, {
                                className: h.content,
                                children: [
                                    (0, n.jsx)(l.Text, {
                                        tag: 'span',
                                        variant: 'text-md/normal',
                                        children: x.NW.string(x.t['p4ql7+'])
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: h.httpFileContainer,
                                        children: [
                                            (0, n.jsx)(N, {
                                                name: x.NW.string(x.t.GL3q7u),
                                                value: (0, c.F9)(a)
                                            }),
                                            (0, n.jsx)(N, {
                                                name: x.NW.string(x.t.PVLriY),
                                                value: u
                                            })
                                        ]
                                    }),
                                    null != k &&
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            className: h.text,
                                            children: k
                                        })
                                ]
                            }),
                            (0, n.jsxs)(l.mzw, {
                                className: h.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, n.jsx)(l.zxk, {
                                        look: l.zxk.Looks.LINK,
                                        color: l.zxk.Colors.PRIMARY,
                                        onClick: () => {
                                            v('DOMAIN'), _(null);
                                        },
                                        children: x.NW.string(x.t['13/7kZ'])
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: h.footerInner,
                                        children: [
                                            (0, n.jsx)(l.zxk, {
                                                look: l.zxk.Looks.LINK,
                                                color: l.zxk.Colors.PRIMARY,
                                                onClick: () => {
                                                    v('PROOF_DNS'), _(null);
                                                },
                                                className: h.__invalid_switchButton,
                                                children: x.NW.string(x.t.RhJMVV)
                                            }),
                                            (0, n.jsx)(l.zxk, {
                                                submitting: g,
                                                onClick: b,
                                                children: x.NW.string(x.t['13ofGh'])
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
