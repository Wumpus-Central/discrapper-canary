l.d(t, { default: () => g }), l(47120);
var n = l(200651),
    s = l(192379),
    i = l(481060),
    a = l(749210),
    r = l(70097),
    o = l(910693),
    c = l(70956),
    u = l(5192),
    d = l(981631),
    x = l(388032),
    m = l(287930);
function p() {
    return [
        {
            value: 0,
            label: x.intl.string(x.t['4obaMT'])
        },
        {
            value: 1 * c.Z.Seconds.HOUR,
            label: x.intl.string(x.t.RKpitb)
        },
        {
            value: 6 * c.Z.Seconds.HOUR,
            label: x.intl.string(x.t['8WfJZ2'])
        },
        {
            value: 12 * c.Z.Seconds.HOUR,
            label: x.intl.string(x.t.p1up7u)
        },
        {
            value: 1 * c.Z.Seconds.DAY,
            label: x.intl.string(x.t.XuVkkJ)
        },
        {
            value: 3 * c.Z.Seconds.DAY,
            label: x.intl.string(x.t.gMcDS0)
        },
        {
            value: 7 * c.Z.Seconds.DAY,
            label: x.intl.string(x.t.FA7IUl)
        }
    ];
}
let b = p()[1].value;
function g(e) {
    let { guildId: t, user: c, location: g, userIds: k, onBanMultiple: h, transitionState: j, onClose: C, canBulkBan: f = !1 } = e,
        [z, S] = s.useState(b),
        [v, _] = s.useState(''),
        [N, L] = s.useState(0),
        [R, Z] = s.useState(!1),
        w = (0, o.sE)(t, {
            location: g,
            targetUserId: null == c ? void 0 : c.id,
            targets: k
        }),
        I = s.useCallback(() => {
            if (null != h) {
                if (!(null != k && (null == k ? void 0 : k.size) > 0 && f) || R) return;
                if ('' === v.trim() && !R) {
                    Z(!0);
                    return;
                }
                h(t, [...k], z, v);
            } else {
                if (null == c) return;
                a.Z.banUser(t, null == c ? void 0 : c.id, z, v);
            }
            w(o.jQ.BAN), C();
        }, [h, w, C, k, f, R, v, t, z, c]),
        y = s.useCallback((e) => {
            S(e);
        }, []),
        M = s.useCallback((e) => {
            let { value: t } = e;
            _(t), Z(!1);
        }, []),
        Y = s.useCallback(
            (e) => {
                _(e), R && Z(!1);
            },
            [R]
        ),
        A = s.useCallback(() => {
            _(''), L(1);
        }, []),
        E = s.useCallback(() => {
            L(0);
        }, []),
        O = [
            {
                name: x.intl.string(x.t.tamLhY),
                value: x.intl.string(x.t.tamLhY)
            },
            {
                name: x.intl.string(x.t.UmxjMj),
                value: x.intl.string(x.t.UmxjMj)
            },
            {
                name: x.intl.string(x.t.EXY1d3),
                value: x.intl.string(x.t.EXY1d3)
            }
        ],
        U = null != h && null != k ? x.intl.formatToPlainString(x.t.Ka68TE, { count: null == k ? void 0 : k.size }) : null == c ? '' : x.intl.formatToPlainString(x.t.Qd6w7e, { username: '@'.concat(u.ZP.getName(t, null, c)) });
    return (0, n.jsxs)(i.Y0X, {
        transitionState: j,
        children: [
            (0, n.jsx)(i.xBx, {
                separator: !1,
                children: (0, n.jsx)(i.X6q, {
                    variant: 'heading-md/semibold',
                    children: U
                })
            }),
            (0, n.jsxs)(i.hzk, {
                className: m.modalContent,
                children: [
                    (0, n.jsxs)(r.Z, {
                        autoPlay: !0,
                        loop: !0,
                        className: m.spacing,
                        width: 400,
                        children: [
                            (0, n.jsx)('source', {
                                src: l(942314),
                                type: 'video/webm'
                            }),
                            (0, n.jsx)('source', {
                                src: l(888322),
                                type: 'video/mp4'
                            }),
                            (0, n.jsx)('img', {
                                alt: '',
                                src: l(860724)
                            })
                        ]
                    }),
                    (0, n.jsxs)(i.xJW, {
                        title: x.intl.string(x.t.w4Ivys),
                        className: m.spacing,
                        children: [
                            R &&
                                (0, n.jsx)(i.kzN, {
                                    className: m.error,
                                    children: x.intl.string(x.t.IrYX19)
                                }),
                            (0, n.jsx)(i.qBt, {
                                steps: [0, 1],
                                step: N,
                                children: ((e) => {
                                    switch (N) {
                                        case 0:
                                            return (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(i.FXm, {
                                                        value: v,
                                                        options: e,
                                                        onChange: M,
                                                        radioItemClassName: m.radioItemStyles
                                                    }),
                                                    (0, n.jsxs)(i.P3F, {
                                                        onClick: A,
                                                        className: m.banReasonOtherClickable,
                                                        children: [
                                                            (0, n.jsx)(i.Text, {
                                                                variant: 'text-md/medium',
                                                                color: 'none',
                                                                children: x.intl.string(x.t.BcZTKi)
                                                            }),
                                                            (0, n.jsx)(i.Fbu, {
                                                                color: 'currentColor',
                                                                size: 'xs'
                                                            })
                                                        ]
                                                    })
                                                ]
                                            });
                                        case 1:
                                            return (0, n.jsx)(i.Kx8, {
                                                maxLength: d.GNZ,
                                                onChange: Y,
                                                value: v,
                                                rows: 5,
                                                autoFocus: !0
                                            });
                                    }
                                })(O)
                            })
                        ]
                    }),
                    (0, n.jsx)(i.xJW, {
                        title: x.intl.string(x.t['8l3W09']),
                        className: m.spacing,
                        children: (0, n.jsx)(i.q4e, {
                            options: p(),
                            value: z,
                            onChange: y
                        })
                    })
                ]
            }),
            (() => {
                switch (N) {
                    case 0:
                        return (0, n.jsxs)(i.mzw, {
                            className: m.footer,
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'button',
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: C,
                                    children: x.intl.string(x.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: I,
                                    children: x.intl.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                    case 1:
                        return (0, n.jsxs)(i.mzw, {
                            className: m.footerStepped,
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    className: m.cancel,
                                    innerClassName: m.cancel,
                                    type: 'button',
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: E,
                                    children: x.intl.string(x.t['13/7kZ'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: I,
                                    children: x.intl.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                }
            })()
        ]
    });
}
