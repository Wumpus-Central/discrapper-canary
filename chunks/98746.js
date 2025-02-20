t.d(s, { default: () => g }), t(47120), t(566702);
var l = t(200651),
    n = t(192379),
    a = t(481060),
    r = t(749210),
    o = t(70097),
    i = t(910693),
    c = t(70956),
    u = t(5192),
    d = t(981631),
    x = t(388032),
    m = t(495566);
function p() {
    return [
        {
            value: 0,
            label: x.NW.string(x.t['4obaMT'])
        },
        {
            value: +c.Z.Seconds.HOUR,
            label: x.NW.string(x.t.RKpitb)
        },
        {
            value: 6 * c.Z.Seconds.HOUR,
            label: x.NW.string(x.t['8WfJZ2'])
        },
        {
            value: 12 * c.Z.Seconds.HOUR,
            label: x.NW.string(x.t.p1up7u)
        },
        {
            value: +c.Z.Seconds.DAY,
            label: x.NW.string(x.t.XuVkkJ)
        },
        {
            value: 3 * c.Z.Seconds.DAY,
            label: x.NW.string(x.t.gMcDS0)
        },
        {
            value: 7 * c.Z.Seconds.DAY,
            label: x.NW.string(x.t.FA7IUl)
        }
    ];
}
let b = p()[1].value;
function g(e) {
    let { guildId: s, user: c, location: g, userIds: k, onBanMultiple: N, transitionState: h, onClose: j, canBulkBan: C = !1 } = e,
        [W, f] = n.useState(b),
        [z, S] = n.useState(''),
        [v, _] = n.useState(0),
        [L, R] = n.useState(!1),
        Z = (0, i.sE)(s, {
            location: g,
            targetUserId: null == c ? void 0 : c.id,
            targets: k
        }),
        w = n.useCallback(() => {
            if (null != N) {
                if (!(null != k && (null == k ? void 0 : k.size) > 0 && C) || L) return;
                if ('' === z.trim() && !L) {
                    R(!0);
                    return;
                }
                N(s, [...k], W, z);
            } else {
                if (null == c) return;
                r.Z.banUser(s, null == c ? void 0 : c.id, W, z);
            }
            Z(i.jQ.BAN), j();
        }, [N, Z, j, k, C, L, z, s, W, c]),
        I = n.useCallback((e) => {
            f(e);
        }, []),
        y = n.useCallback((e) => {
            let { value: s } = e;
            S(s), R(!1);
        }, []),
        M = n.useCallback(
            (e) => {
                S(e), L && R(!1);
            },
            [L]
        ),
        Y = n.useCallback(() => {
            S(''), _(1);
        }, []),
        A = n.useCallback(() => {
            _(0);
        }, []),
        E = [
            {
                name: x.NW.string(x.t.tamLhY),
                value: x.NW.string(x.t.tamLhY)
            },
            {
                name: x.NW.string(x.t.UmxjMj),
                value: x.NW.string(x.t.UmxjMj)
            },
            {
                name: x.NW.string(x.t.EXY1d3),
                value: x.NW.string(x.t.EXY1d3)
            }
        ],
        O = null != N && null != k ? x.NW.formatToPlainString(x.t.Ka68TE, { count: null == k ? void 0 : k.size }) : null == c ? '' : x.NW.formatToPlainString(x.t.Qd6w7e, { username: '@'.concat(u.ZP.getName(s, null, c)) });
    return (0, l.jsxs)(a.Y0X, {
        transitionState: h,
        children: [
            (0, l.jsx)(a.xBx, {
                separator: !1,
                children: (0, l.jsx)(a.X6q, {
                    variant: 'heading-md/semibold',
                    children: O
                })
            }),
            (0, l.jsxs)(a.hzk, {
                className: m.modalContent,
                children: [
                    (0, l.jsxs)(o.Z, {
                        autoPlay: !0,
                        loop: !0,
                        className: m.spacing,
                        width: 400,
                        children: [
                            (0, l.jsx)('source', {
                                src: t(942314),
                                type: 'video/webm'
                            }),
                            (0, l.jsx)('source', {
                                src: t(888322),
                                type: 'video/mp4'
                            }),
                            (0, l.jsx)('img', {
                                alt: '',
                                src: t(860724)
                            })
                        ]
                    }),
                    (0, l.jsxs)(a.xJW, {
                        title: x.NW.string(x.t.w4Ivys),
                        className: m.spacing,
                        children: [
                            L &&
                                (0, l.jsx)(a.kzN, {
                                    className: m.error,
                                    children: x.NW.string(x.t.IrYX19)
                                }),
                            (0, l.jsx)(a.qBt, {
                                steps: [0, 1],
                                step: v,
                                children: ((e) => {
                                    switch (v) {
                                        case 0:
                                            return (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(a.FXm, {
                                                        value: z,
                                                        options: e,
                                                        onChange: y,
                                                        radioItemClassName: m.radioItemStyles
                                                    }),
                                                    (0, l.jsxs)(a.P3F, {
                                                        onClick: Y,
                                                        className: m.banReasonOtherClickable,
                                                        children: [
                                                            (0, l.jsx)(a.Text, {
                                                                variant: 'text-md/medium',
                                                                color: 'none',
                                                                children: x.NW.string(x.t.BcZTKi)
                                                            }),
                                                            (0, l.jsx)(a.Fbu, {
                                                                color: 'currentColor',
                                                                size: 'xs'
                                                            })
                                                        ]
                                                    })
                                                ]
                                            });
                                        case 1:
                                            return (0, l.jsx)(a.Kx8, {
                                                maxLength: d.GNZ,
                                                onChange: M,
                                                value: z,
                                                rows: 5,
                                                autoFocus: !0
                                            });
                                    }
                                })(E)
                            })
                        ]
                    }),
                    (0, l.jsx)(a.xJW, {
                        title: x.NW.string(x.t['8l3W09']),
                        className: m.spacing,
                        children: (0, l.jsx)(a.q4e, {
                            options: p(),
                            value: W,
                            onChange: I
                        })
                    })
                ]
            }),
            (() => {
                switch (v) {
                    case 0:
                        return (0, l.jsxs)(a.mzw, {
                            className: m.footer,
                            children: [
                                (0, l.jsx)(a.zxk, {
                                    type: 'button',
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.PRIMARY,
                                    onClick: j,
                                    children: x.NW.string(x.t['ETE/oK'])
                                }),
                                (0, l.jsx)(a.zxk, {
                                    type: 'submit',
                                    color: a.zxk.Colors.RED,
                                    size: a.zxk.Sizes.SMALL,
                                    onClick: w,
                                    children: x.NW.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                    case 1:
                        return (0, l.jsxs)(a.mzw, {
                            className: m.footerStepped,
                            children: [
                                (0, l.jsx)(a.zxk, {
                                    className: m.cancel,
                                    innerClassName: m.cancel,
                                    type: 'button',
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.PRIMARY,
                                    size: a.zxk.Sizes.SMALL,
                                    onClick: A,
                                    children: x.NW.string(x.t['13/7kZ'])
                                }),
                                (0, l.jsx)(a.zxk, {
                                    type: 'submit',
                                    color: a.zxk.Colors.RED,
                                    size: a.zxk.Sizes.SMALL,
                                    onClick: w,
                                    children: x.NW.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                }
            })()
        ]
    });
}
