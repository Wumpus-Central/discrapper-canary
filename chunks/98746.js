n.d(t, { default: () => g }), n(47120), n(566702);
var s = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(749210),
    o = n(70097),
    i = n(931142),
    c = n(910693),
    u = n(70956),
    d = n(5192),
    x = n(981631),
    m = n(388032),
    b = n(221166);
function h() {
    return [
        {
            value: 0,
            label: m.NW.string(m.t['4obaMT'])
        },
        {
            value: +u.Z.Seconds.HOUR,
            label: m.NW.string(m.t.RKpitb)
        },
        {
            value: 6 * u.Z.Seconds.HOUR,
            label: m.NW.string(m.t['8WfJZ2'])
        },
        {
            value: 12 * u.Z.Seconds.HOUR,
            label: m.NW.string(m.t.p1up7u)
        },
        {
            value: +u.Z.Seconds.DAY,
            label: m.NW.string(m.t.XuVkkJ)
        },
        {
            value: 3 * u.Z.Seconds.DAY,
            label: m.NW.string(m.t.gMcDS0)
        },
        {
            value: 7 * u.Z.Seconds.DAY,
            label: m.NW.string(m.t.FA7IUl)
        }
    ];
}
let k = h()[1].value;
function g(e) {
    let { guildId: t, user: u, location: g, userIds: p, onBanMultiple: N, transitionState: f, onClose: j, canBulkBan: C = !1 } = e,
        [v, W] = l.useState(k),
        [S, z] = l.useState(''),
        [_, I] = l.useState(0),
        [R, L] = l.useState(!1),
        Z = (0, c.sE)(t, {
            location: g,
            targetUserId: null == u ? void 0 : u.id,
            targets: p
        }),
        w = i.I.useExperiment({ location: 'ban_confirm' }).enabled,
        M = l.useCallback(() => {
            if (null != N) {
                if (!(null != p && (null == p ? void 0 : p.size) > 0 && C) || R) return;
                if ('' === S.trim() && !R) return void L(!0);
                N(t, [...p], v, S);
            } else {
                if (null == u) return;
                r.Z.banUser(t, null == u ? void 0 : u.id, v, S);
            }
            Z(c.jQ.BAN), j();
        }, [N, Z, j, p, C, R, S, t, v, u]),
        y = l.useCallback((e) => {
            W(e);
        }, []),
        Y = l.useCallback((e) => {
            let { value: t } = e;
            z(t), L(!1);
        }, []),
        A = l.useCallback(
            (e) => {
                z(e), R && L(!1);
            },
            [R]
        ),
        E = l.useCallback(() => {
            z(''), I(1);
        }, []),
        P = l.useCallback(() => {
            I(0);
        }, []),
        T = [
            {
                name: m.NW.string(m.t.tamLhY),
                value: m.NW.string(m.t.tamLhY)
            },
            {
                name: m.NW.string(m.t.UmxjMj),
                value: m.NW.string(m.t.UmxjMj)
            },
            {
                name: m.NW.string(m.t.EXY1d3),
                value: m.NW.string(m.t.EXY1d3)
            }
        ],
        B = (() => {
            if (null != N && null != p) return w ? m.NW.formatToPlainString(m.t.HVJexc, { count: null == p ? void 0 : p.size }) : m.NW.formatToPlainString(m.t.Ka68TE, { count: null == p ? void 0 : p.size });
            if (null == u) return '';
            let e = d.ZP.getName(t, null, u);
            return w ? m.NW.formatToPlainString(m.t.jeKpoq, { username: '@'.concat(e) }) : m.NW.formatToPlainString(m.t.Qd6w7e, { username: '@'.concat(e) });
        })();
    return (0, s.jsxs)(a.Y0X, {
        transitionState: f,
        children: [
            (0, s.jsx)(a.xBx, {
                separator: !1,
                children: w
                    ? (0, s.jsx)(a.X6q, {
                          variant: 'heading-xl/semibold',
                          children: B
                      })
                    : (0, s.jsx)(a.X6q, {
                          variant: 'heading-md/semibold',
                          children: B
                      })
            }),
            (0, s.jsxs)(a.hzk, {
                className: b.modalContent,
                children: [
                    (0, s.jsxs)(o.Z, {
                        autoPlay: !0,
                        loop: !0,
                        width: 400,
                        children: [
                            (0, s.jsx)('source', {
                                src: n(942314),
                                type: 'video/webm'
                            }),
                            (0, s.jsx)('source', {
                                src: n(888322),
                                type: 'video/mp4'
                            }),
                            (0, s.jsx)('img', {
                                alt: '',
                                src: n(860724)
                            })
                        ]
                    }),
                    (0, s.jsxs)(a.xJW, {
                        title: m.NW.string(m.t.w4Ivys),
                        children: [
                            R &&
                                (0, s.jsx)(a.kzN, {
                                    className: b.error,
                                    children: m.NW.string(m.t.IrYX19)
                                }),
                            (0, s.jsx)(a.qBt, {
                                steps: [0, 1],
                                step: _,
                                children: ((e) => {
                                    switch (_) {
                                        case 0:
                                            return (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)(a.FXm, {
                                                        value: S,
                                                        options: e,
                                                        onChange: Y,
                                                        radioItemClassName: b.radioItemStyles
                                                    }),
                                                    (0, s.jsxs)(a.P3F, {
                                                        onClick: E,
                                                        className: b.banReasonOtherClickable,
                                                        children: [
                                                            (0, s.jsx)(a.Text, {
                                                                variant: 'text-md/medium',
                                                                color: 'none',
                                                                children: m.NW.string(m.t.BcZTKi)
                                                            }),
                                                            (0, s.jsx)(a.Fbu, {
                                                                color: 'currentColor',
                                                                size: 'xs'
                                                            })
                                                        ]
                                                    })
                                                ]
                                            });
                                        case 1:
                                            return (0, s.jsx)(a.Kx8, {
                                                maxLength: x.GNZ,
                                                onChange: A,
                                                value: S,
                                                rows: 5,
                                                autoFocus: !0
                                            });
                                    }
                                })(T)
                            })
                        ]
                    }),
                    (0, s.jsx)(a.xJW, {
                        title: m.NW.string(m.t['8l3W09']),
                        children: (0, s.jsx)(a.q4e, {
                            options: h(),
                            value: v,
                            onChange: y
                        })
                    })
                ]
            }),
            (() => {
                switch (_) {
                    case 0:
                        return (0, s.jsxs)(a.mzw, {
                            className: b.footer,
                            children: [
                                (0, s.jsx)(a.zxk, {
                                    type: 'button',
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.PRIMARY,
                                    onClick: j,
                                    children: m.NW.string(m.t['ETE/oK'])
                                }),
                                (0, s.jsx)(a.zxk, {
                                    type: 'submit',
                                    color: a.zxk.Colors.RED,
                                    size: a.zxk.Sizes.SMALL,
                                    onClick: M,
                                    children: m.NW.string(m.t['5MBJ5O'])
                                })
                            ]
                        });
                    case 1:
                        return (0, s.jsxs)(a.mzw, {
                            className: b.footerStepped,
                            children: [
                                (0, s.jsx)(a.zxk, {
                                    className: b.cancel,
                                    innerClassName: b.cancel,
                                    type: 'button',
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.PRIMARY,
                                    size: a.zxk.Sizes.SMALL,
                                    onClick: P,
                                    children: m.NW.string(m.t['13/7kZ'])
                                }),
                                (0, s.jsx)(a.zxk, {
                                    type: 'submit',
                                    color: a.zxk.Colors.RED,
                                    size: a.zxk.Sizes.SMALL,
                                    onClick: M,
                                    children: m.NW.string(m.t['5MBJ5O'])
                                })
                            ]
                        });
                }
            })()
        ]
    });
}
