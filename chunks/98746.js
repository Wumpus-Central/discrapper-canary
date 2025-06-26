n.d(t, { default: () => C }), n(388685), n(781311);
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
    j = n(221166);
function v() {
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
let f = v()[1].value,
    y = v()[0].value;
function C(e) {
    let { guildId: t, user: n, location: i, userIds: x, onBanMultiple: C, transitionState: k, onClose: O, canBulkBan: S = !1, modReportId: _ } = e,
        [P, w] = r.useState(null != _ ? y : f),
        [Z, I] = r.useState(''),
        [N, T] = r.useState(null),
        { isModReportClosed: z, isModReport: R } = (0, a.cj)([m.Z], () => {
            let e = m.Z.getChannel(_);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel()
            };
        }),
        [K, M] = r.useState(!1),
        [D, Y] = r.useState(!1),
        E = (0, u.sE)(t, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: x
        }),
        X = r.useCallback(() => {
            let e = null != N ? N : Z;
            if (null != C) {
                if (!(null != x && (null == x ? void 0 : x.size) > 0 && S) || K) return;
                if ('' === Z.trim() && !K) return void M(!0);
                C(t, [...x], P, e);
            } else {
                if (null == n) return;
                c.Z.banUser(t, null == n ? void 0 : n.id, P, e, _).then(() => {
                    D && null != _ && d.Z.resolveFlag(_);
                });
            }
            E(u.jQ.BAN), O();
        }, [N, Z, C, E, O, x, S, K, t, P, n, _, D]),
        A = r.useCallback((e) => {
            w(e);
        }, []),
        L = r.useCallback((e) => {
            let { value: t } = e;
            I(t), M(!1), T(null);
        }, []),
        U = r.useCallback(
            (e) => {
                T(e), K && M(!1);
            },
            [K]
        ),
        B = [
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
        F = (() => {
            if (null != C && null != x) return g.intl.formatToPlainString(g.t.HVJexc, { count: null == x ? void 0 : x.size });
            if (null == n) return '';
            let e = p.ZP.getName(t, null, n);
            return g.intl.formatToPlainString(null != _ ? g.t.WDR8XV : g.t.jeKpoq, { username: '@'.concat(e) });
        })(),
        J = null == _ ? null : g.intl.string(g.t.pQjhIC);
    return (0, l.jsxs)(s.Y0X, {
        transitionState: k,
        parentComponent: 'BanConfirm',
        children: [
            (0, l.jsx)(s.xBx, {
                separator: !1,
                children: (0, l.jsx)(s.olH, {
                    className: j.closeIcon,
                    onClick: O
                })
            }),
            (0, l.jsx)(s.hzk, {
                className: j.modalContent,
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
                                    children: F
                                }),
                                null != J &&
                                    (0, l.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-secondary',
                                        children: J
                                    })
                            ]
                        }),
                        (0, l.jsxs)(s.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, l.jsxs)(s.xJW, {
                                    titleClassName: j.title,
                                    title: (0, l.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-primary',
                                        children: g.intl.string(null != _ ? g.t['+KCLVl'] : g.t.w4Ivys)
                                    }),
                                    children: [
                                        K &&
                                            (0, l.jsx)(s.kzN, {
                                                className: j.error,
                                                children: g.intl.string(g.t.IrYX19)
                                            }),
                                        (0, l.jsx)(s.FXm, {
                                            className: j.radioGroup,
                                            value: Z,
                                            options: B.map((e) => {
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
                                                    (n = n = { radioBarClassName: j.radioItem }),
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
                                    className: o()(j.reasonFreeText, { [j.hidden]: 'other' !== Z }),
                                    children: (0, l.jsx)(s.Kx8, {
                                        maxLength: b.GNZ,
                                        onChange: U,
                                        value: null != N ? N : '',
                                        rows: 5,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, l.jsx)(s.xJW, {
                            titleClassName: j.title,
                            title: (0, l.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-primary',
                                children: g.intl.string(null != _ ? g.t.ERSM8P : g.t['8l3W09'])
                            }),
                            children: (0, l.jsx)(s.q4e, {
                                options: v(),
                                value: P,
                                onChange: A
                            })
                        })
                    ]
                })
            }),
            (() => {
                let e = R && !z && null != _;
                return (0, l.jsxs)(s.mzw, {
                    className: j.footer,
                    children: [
                        e &&
                            (0, l.jsx)(s.XZJ, {
                                value: D,
                                onChange: (e, t) => Y(t),
                                children: (0, l.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-default',
                                    children: g.intl.string(h.default['8yIKen'])
                                })
                            }),
                        !R &&
                            (0, l.jsx)(s.zxk, {
                                type: 'button',
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                onClick: O,
                                children: g.intl.string(g.t['ETE/oK'])
                            }),
                        (0, l.jsx)(s.zxk, {
                            type: 'submit',
                            color: s.zxk.Colors.RED,
                            size: s.zxk.Sizes.SMALL,
                            onClick: X,
                            children: g.intl.string(g.t['5MBJ5O'])
                        })
                    ]
                });
            })()
        ]
    });
}
