(n.d(e, { default: () => C }), n(388685), n(781311));
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    u = n(749210),
    c = n(910693),
    d = n(501517),
    m = n(592125),
    p = n(70956),
    x = n(5192),
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
            value: +p.Z.Seconds.HOUR,
            label: g.intl.string(g.t.RKpitb)
        },
        {
            value: 6 * p.Z.Seconds.HOUR,
            label: g.intl.string(g.t['8WfJZ2'])
        },
        {
            value: 12 * p.Z.Seconds.HOUR,
            label: g.intl.string(g.t.p1up7u)
        },
        {
            value: +p.Z.Seconds.DAY,
            label: g.intl.string(g.t.XuVkkJ)
        },
        {
            value: 3 * p.Z.Seconds.DAY,
            label: g.intl.string(g.t.gMcDS0)
        },
        {
            value: 7 * p.Z.Seconds.DAY,
            label: g.intl.string(g.t.FA7IUl)
        }
    ];
}
let f = j()[1].value,
    y = j()[0].value;
function C(t) {
    let { guildId: e, user: n, location: i, userIds: p, onBanMultiple: C, transitionState: O, onClose: k, canBulkBan: S = !1, modReportId: _ } = t,
        [w, P] = r.useState(null != _ ? y : f),
        [Z, T] = r.useState(''),
        [N, I] = r.useState(null),
        { isModReportClosed: K, isModReport: D } = (0, o.cj)([m.Z], () => {
            let t = m.Z.getChannel(_);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel()
            };
        }),
        [M, R] = r.useState(!1),
        [X, Y] = r.useState(!1),
        E = (0, c.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: p
        }),
        U = r.useCallback(() => {
            let t = null != N ? N : Z;
            if (null != C) {
                if (!(null != p && (null == p ? void 0 : p.size) > 0 && S) || M) return;
                if ('' === Z.trim() && !M) return void R(!0);
                C(e, [...p], w, t);
            } else {
                if (null == n) return;
                u.Z.banUser(e, null == n ? void 0 : n.id, w, t, _).then(() => {
                    X && null != _ && d.Z.resolveFlag(_);
                });
            }
            (E(c.jQ.BAN), k());
        }, [N, Z, C, E, k, p, S, M, e, w, n, _, X]),
        z = r.useCallback((t) => {
            P(t);
        }, []),
        B = r.useCallback((t) => {
            let { value: e } = t;
            (T(e), R(!1), I(null));
        }, []),
        F = r.useCallback(
            (t) => {
                (I(t), M && R(!1));
            },
            [M]
        ),
        J = [
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
        q = (() => {
            if (null != C && null != p) return g.intl.formatToPlainString(g.t.HVJexc, { count: null == p ? void 0 : p.size });
            if (null == n) return '';
            let t = x.ZP.getName(e, null, n);
            return g.intl.formatToPlainString(null != _ ? g.t.WDR8XV : g.t.jeKpoq, { username: '@'.concat(t) });
        })(),
        A = null == _ ? null : g.intl.string(g.t.pQjhIC);
    return (0, l.jsxs)(s.Y0X, {
        transitionState: O,
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
                                    children: q
                                }),
                                null != A &&
                                    (0, l.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-secondary',
                                        children: A
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
                                        children: g.intl.string(null != _ ? g.t['+KCLVl'] : g.t.w4Ivys)
                                    }),
                                    children: [
                                        M &&
                                            (0, l.jsx)(s.kzN, {
                                                className: v.error,
                                                children: g.intl.string(g.t.IrYX19)
                                            }),
                                        (0, l.jsx)(s.FXm, {
                                            className: v.radioGroup,
                                            value: Z,
                                            options: J.map((t) => {
                                                var e, n;
                                                return (
                                                    (e = (function (t) {
                                                        for (var e = 1; e < arguments.length; e++) {
                                                            var n = null != arguments[e] ? arguments[e] : {},
                                                                l = Object.keys(n);
                                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                                    })
                                                                )),
                                                                l.forEach(function (e) {
                                                                    var l;
                                                                    ((l = n[e]),
                                                                        e in t
                                                                            ? Object.defineProperty(t, e, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (t[e] = l));
                                                                }));
                                                        }
                                                        return t;
                                                    })({}, t)),
                                                    (n = n = { radioBarClassName: v.radioItem }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                        : (function (t, e) {
                                                              var n = Object.keys(t);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var l = Object.getOwnPropertySymbols(t);
                                                                  n.push.apply(n, l);
                                                              }
                                                              return n;
                                                          })(Object(n)).forEach(function (t) {
                                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                          }),
                                                    e
                                                );
                                            }),
                                            onChange: B,
                                            withTransparentBackground: !0
                                        })
                                    ]
                                }),
                                (0, l.jsx)('div', {
                                    className: a()(v.reasonFreeText, { [v.hidden]: 'other' !== Z }),
                                    children: (0, l.jsx)(s.Kx8, {
                                        maxLength: b.GNZ,
                                        onChange: F,
                                        value: null != N ? N : '',
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
                                children: g.intl.string(null != _ ? g.t.ERSM8P : g.t['8l3W09'])
                            }),
                            children: (0, l.jsx)(s.q4e, {
                                options: j(),
                                value: w,
                                onChange: z
                            })
                        })
                    ]
                })
            }),
            (() => {
                let t = D && !K && null != _;
                return (0, l.jsxs)(s.mzw, {
                    className: v.footer,
                    children: [
                        t &&
                            (0, l.jsx)(s.XZJ, {
                                value: X,
                                onChange: (t, e) => Y(e),
                                children: (0, l.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-default',
                                    children: g.intl.string(h.default['8yIKen'])
                                })
                            }),
                        !D &&
                            (0, l.jsx)(s.zxk, {
                                variant: 'secondary',
                                text: g.intl.string(g.t['ETE/oK']),
                                type: 'button',
                                onClick: k
                            }),
                        (0, l.jsx)(s.zxk, {
                            variant: 'critical-primary',
                            text: g.intl.string(g.t['5MBJ5O']),
                            type: 'submit',
                            onClick: U
                        })
                    ]
                });
            })()
        ]
    });
}
