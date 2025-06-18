n.d(t, { default: () => y }), n(388685), n(781311);
var l = n(255367),
    r = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(910693),
    d = n(501517),
    m = n(592125),
    x = n(70956),
    p = n(5192),
    b = n(981631),
    g = n(388032),
    h = n(130883),
    v = n(221166);
function j() {
    return [
        {
            value: 0,
            label: g.intl.string(g.t['4obaMT'])
        },
        {
            value: +x.Z.Seconds.HOUR,
            label: g.intl.string(g.t.RKpitb)
        },
        {
            value: 6 * x.Z.Seconds.HOUR,
            label: g.intl.string(g.t['8WfJZ2'])
        },
        {
            value: 12 * x.Z.Seconds.HOUR,
            label: g.intl.string(g.t.p1up7u)
        },
        {
            value: +x.Z.Seconds.DAY,
            label: g.intl.string(g.t.XuVkkJ)
        },
        {
            value: 3 * x.Z.Seconds.DAY,
            label: g.intl.string(g.t.gMcDS0)
        },
        {
            value: 7 * x.Z.Seconds.DAY,
            label: g.intl.string(g.t.FA7IUl)
        }
    ];
}
let f = j()[1].value,
    O = j()[0].value;
function y(e) {
    let { guildId: t, user: n, location: i, userIds: x, onBanMultiple: y, transitionState: C, onClose: k, canBulkBan: _ = !1, modReportId: S } = e,
        [P, T] = r.useState(null != S ? O : f),
        [E, N] = r.useState(''),
        [R, Z] = r.useState(null),
        w = (0, a.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getChannel(S)) ? void 0 : e.isArchivedThread();
        }),
        [I, z] = r.useState(!1),
        [M, D] = r.useState(!1),
        A = (0, u.sE)(t, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: x
        }),
        K = r.useCallback(() => {
            let e = null != R ? R : E;
            if (null != y) {
                if (!(null != x && (null == x ? void 0 : x.size) > 0 && _) || I) return;
                if ('' === E.trim() && !I) return void z(!0);
                y(t, [...x], P, e);
            } else {
                if (null == n) return;
                c.Z.banUser(t, null == n ? void 0 : n.id, P, e, S).then(() => {
                    M && null != S && d.Z.resolveFlag(S);
                });
            }
            A(u.jQ.BAN), k();
        }, [R, E, y, A, k, x, _, I, t, P, n, S, M]),
        Y = r.useCallback((e) => {
            T(e);
        }, []),
        L = r.useCallback((e) => {
            let { value: t } = e;
            N(t), z(!1), Z(null);
        }, []),
        X = r.useCallback(
            (e) => {
                Z(e), I && z(!1);
            },
            [I]
        ),
        F = [
            {
                name: g.intl.string(g.t.tamLhY),
                value: g.intl.string(g.t.tamLhY)
            },
            {
                name: g.intl.string(g.t.UmxjMj),
                value: g.intl.string(g.t.UmxjMj)
            },
            {
                name: g.intl.string(g.t.EXY1d3),
                value: g.intl.string(g.t.EXY1d3)
            },
            {
                name: g.intl.string(g.t.BcZTKi),
                value: 'other'
            }
        ],
        U = (() => {
            if (null != y && null != x) return g.intl.formatToPlainString(g.t.HVJexc, { count: null == x ? void 0 : x.size });
            if (null == n) return '';
            let e = p.ZP.getName(t, null, n);
            return g.intl.formatToPlainString(null != S ? g.t.WDR8XV : g.t.jeKpoq, { username: '@'.concat(e) });
        })(),
        B = null == S ? null : g.intl.string(g.t.pQjhIC);
    return (0, l.jsxs)(s.Y0X, {
        transitionState: C,
        parentComponent: 'BanConfirm',
        children: [
            (0, l.jsx)(s.xBx, {
                separator: !1,
                children: (0, l.jsx)(s.olH, {
                    className: v.closeIcon,
                    onClick: k
                })
            }),
            (0, l.jsx)(s.hzk, {
                className: v.modalContent,
                children: (0, l.jsxs)(s.Kqy, {
                    direction: 'vertical',
                    gap: 24,
                    children: [
                        (0, l.jsxs)(s.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, l.jsx)(s.X6q, {
                                    variant: 'heading-lg/semibold',
                                    color: 'text-primary',
                                    children: U
                                }),
                                null != B &&
                                    (0, l.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-secondary',
                                        children: B
                                    })
                            ]
                        }),
                        (0, l.jsxs)(s.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, l.jsxs)(s.xJW, {
                                    titleClassName: v.title,
                                    title: (0, l.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-primary',
                                        children: g.intl.string(null != S ? g.t['+KCLVl'] : g.t.w4Ivys)
                                    }),
                                    children: [
                                        I &&
                                            (0, l.jsx)(s.kzN, {
                                                className: v.error,
                                                children: g.intl.string(g.t.IrYX19)
                                            }),
                                        (0, l.jsx)(s.FXm, {
                                            className: v.radioGroup,
                                            value: E,
                                            options: F.map((e) => {
                                                var t, n;
                                                return (
                                                    (t = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                l = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                l.forEach(function (t) {
                                                                    var l;
                                                                    (l = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = l);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, e)),
                                                    (n = n = { radioBarClassName: v.radioItem }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var l = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, l);
                                                              }
                                                              return n;
                                                          })(Object(n)).forEach(function (e) {
                                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                          }),
                                                    t
                                                );
                                            }),
                                            onChange: L,
                                            withTransparentBackground: !0
                                        })
                                    ]
                                }),
                                (0, l.jsx)('div', {
                                    className: o()(v.reasonFreeText, { [v.hidden]: 'other' !== E }),
                                    children: (0, l.jsx)(s.Kx8, {
                                        maxLength: b.GNZ,
                                        onChange: X,
                                        value: null != R ? R : '',
                                        rows: 5,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, l.jsx)(s.xJW, {
                            titleClassName: v.title,
                            title: (0, l.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-primary',
                                children: g.intl.string(null != S ? g.t.ERSM8P : g.t['8l3W09'])
                            }),
                            children: (0, l.jsx)(s.q4e, {
                                options: j(),
                                value: P,
                                onChange: Y
                            })
                        })
                    ]
                })
            }),
            (0, l.jsxs)(s.mzw, {
                className: v.footer,
                children: [
                    null != S &&
                        !w &&
                        (0, l.jsx)(s.XZJ, {
                            value: M,
                            onChange: (e, t) => D(t),
                            children: (0, l.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'text-normal',
                                children: g.intl.string(h.default['8yIKen'])
                            })
                        }),
                    null == S &&
                        (0, l.jsx)(s.zxk, {
                            type: 'button',
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: k,
                            children: g.intl.string(g.t['ETE/oK'])
                        }),
                    (0, l.jsx)(s.zxk, {
                        type: 'submit',
                        color: s.zxk.Colors.RED,
                        size: s.zxk.Sizes.SMALL,
                        onClick: K,
                        children: g.intl.string(g.t['5MBJ5O'])
                    })
                ]
            })
        ]
    });
}
