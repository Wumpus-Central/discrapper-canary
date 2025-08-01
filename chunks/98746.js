(n.d(e, { default: () => y }), n(388685), n(781311));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    u = n(749210),
    c = n(910693),
    d = n(501517),
    p = n(592125),
    m = n(70956),
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
            value: +m.Z.Seconds.HOUR,
            label: g.intl.string(g.t.RKpitb)
        },
        {
            value: 6 * m.Z.Seconds.HOUR,
            label: g.intl.string(g.t['8WfJZ2'])
        },
        {
            value: 12 * m.Z.Seconds.HOUR,
            label: g.intl.string(g.t.p1up7u)
        },
        {
            value: +m.Z.Seconds.DAY,
            label: g.intl.string(g.t.XuVkkJ)
        },
        {
            value: 3 * m.Z.Seconds.DAY,
            label: g.intl.string(g.t.gMcDS0)
        },
        {
            value: 7 * m.Z.Seconds.DAY,
            label: g.intl.string(g.t.FA7IUl)
        }
    ];
}
let f = j()[1].value,
    O = j()[0].value;
function y(t) {
    let { guildId: e, user: n, location: i, userIds: m, onBanMultiple: y, transitionState: C, onClose: _, canBulkBan: S = !1, modReportId: k } = t,
        [P, T] = l.useState(null != k ? O : f),
        [R, E] = l.useState(''),
        [N, Z] = l.useState(null),
        { isModReportClosed: w, isModReport: M } = (0, o.cj)([p.Z], () => {
            let t = p.Z.getChannel(k);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel()
            };
        }),
        [I, D] = l.useState(!1),
        [K, A] = l.useState(!1),
        X = (0, c.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: m
        }),
        Y = l.useCallback(() => {
            let t = null != N ? N : R;
            if (null != y) {
                if (!(null != m && (null == m ? void 0 : m.size) > 0 && S) || I) return;
                if ('' === R.trim() && !I) return void D(!0);
                y(e, [...m], P, t);
            } else {
                if (null == n) return;
                u.Z.banUser(e, null == n ? void 0 : n.id, P, t, k).then(() => {
                    K && null != k && d.Z.resolveFlag(k);
                });
            }
            (X(c.jQ.BAN), _());
        }, [N, R, y, X, _, m, S, I, e, P, n, k, K]),
        F = l.useCallback((t) => {
            T(t);
        }, []),
        U = l.useCallback((t) => {
            let { value: e } = t;
            (E(e), D(!1), Z(null));
        }, []),
        z = l.useCallback(
            (t) => {
                (Z(t), I && D(!1));
            },
            [I]
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
        J = (() => {
            if (null != y && null != m) return g.intl.formatToPlainString(g.t.HVJexc, { count: null == m ? void 0 : m.size });
            if (null == n) return '';
            let t = x.ZP.getName(e, null, n);
            return g.intl.formatToPlainString(null != k ? g.t.WDR8XV : g.t.jeKpoq, { username: '@'.concat(t) });
        })(),
        W = null == k ? null : g.intl.string(g.t.pQjhIC);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: C,
        parentComponent: 'BanConfirm',
        children: [
            (0, r.jsx)(s.xBx, {
                separator: !1,
                children: (0, r.jsx)(s.olH, {
                    className: v.closeIcon,
                    onClick: _
                })
            }),
            (0, r.jsx)(s.hzk, {
                className: v.modalContent,
                children: (0, r.jsxs)(s.Kqy, {
                    direction: 'vertical',
                    gap: 24,
                    children: [
                        (0, r.jsxs)(s.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-lg/semibold',
                                    color: 'text-primary',
                                    children: J
                                }),
                                null != W &&
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-secondary',
                                        children: W
                                    })
                            ]
                        }),
                        (0, r.jsxs)(s.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, r.jsxs)(s.xJW, {
                                    titleClassName: v.title,
                                    title: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-primary',
                                        children: g.intl.string(null != k ? g.t['+KCLVl'] : g.t.w4Ivys)
                                    }),
                                    children: [
                                        I &&
                                            (0, r.jsx)(s.kzN, {
                                                className: v.error,
                                                children: g.intl.string(g.t.IrYX19)
                                            }),
                                        (0, r.jsx)(s.FXm, {
                                            className: v.radioGroup,
                                            value: R,
                                            options: B.map((t) => {
                                                var e, n;
                                                return (
                                                    (e = (function (t) {
                                                        for (var e = 1; e < arguments.length; e++) {
                                                            var n = null != arguments[e] ? arguments[e] : {},
                                                                r = Object.keys(n);
                                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                                    })
                                                                )),
                                                                r.forEach(function (e) {
                                                                    var r;
                                                                    ((r = n[e]),
                                                                        e in t
                                                                            ? Object.defineProperty(t, e, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (t[e] = r));
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
                                                                  var r = Object.getOwnPropertySymbols(t);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(n)).forEach(function (t) {
                                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                          }),
                                                    e
                                                );
                                            }),
                                            onChange: U,
                                            withTransparentBackground: !0
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: a()(v.reasonFreeText, { [v.hidden]: 'other' !== R }),
                                    children: (0, r.jsx)(s.Kx8, {
                                        maxLength: b.GNZ,
                                        onChange: z,
                                        value: null != N ? N : '',
                                        rows: 5,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(s.xJW, {
                            titleClassName: v.title,
                            title: (0, r.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-primary',
                                children: g.intl.string(null != k ? g.t.ERSM8P : g.t['8l3W09'])
                            }),
                            children: (0, r.jsx)(s.q4e, {
                                options: j(),
                                value: P,
                                onChange: F
                            })
                        })
                    ]
                })
            }),
            (() => {
                let t = M && !w && null != k;
                return (0, r.jsxs)(s.mzw, {
                    className: v.footer,
                    children: [
                        t &&
                            (0, r.jsx)(s.XZJ, {
                                value: K,
                                onChange: (t, e) => A(e),
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-default',
                                    children: g.intl.string(h.default['8yIKen'])
                                })
                            }),
                        !M &&
                            (0, r.jsx)(s.zxk, {
                                variant: 'secondary',
                                text: g.intl.string(g.t['ETE/oK']),
                                type: 'button',
                                onClick: _
                            }),
                        (0, r.jsx)(s.zxk, {
                            variant: 'critical-primary',
                            text: g.intl.string(g.t['5MBJ5O']),
                            type: 'submit',
                            onClick: Y
                        })
                    ]
                });
            })()
        ]
    });
}
