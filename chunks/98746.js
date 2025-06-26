n.d(t, { default: () => y }), n(388685), n(781311);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
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
    j = n(221166);
function v() {
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
let f = v()[1].value,
    O = v()[0].value;
function y(e) {
    let { guildId: t, user: n, location: i, userIds: m, onBanMultiple: y, transitionState: C, onClose: k, canBulkBan: _ = !1, modReportId: S } = e,
        [R, P] = l.useState(null != S ? O : f),
        [T, E] = l.useState(''),
        [N, M] = l.useState(null),
        { isModReportClosed: Z, isModReport: w } = (0, a.cj)([p.Z], () => {
            let e = p.Z.getChannel(S);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel()
            };
        }),
        [I, z] = l.useState(!1),
        [D, A] = l.useState(!1),
        K = (0, c.sE)(t, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: m
        }),
        Y = l.useCallback(() => {
            let e = null != N ? N : T;
            if (null != y) {
                if (!(null != m && (null == m ? void 0 : m.size) > 0 && _) || I) return;
                if ('' === T.trim() && !I) return void z(!0);
                y(t, [...m], R, e);
            } else {
                if (null == n) return;
                u.Z.banUser(t, null == n ? void 0 : n.id, R, e, S).then(() => {
                    D && null != S && d.Z.resolveFlag(S);
                });
            }
            K(c.jQ.BAN), k();
        }, [N, T, y, K, k, m, _, I, t, R, n, S, D]),
        L = l.useCallback((e) => {
            P(e);
        }, []),
        X = l.useCallback((e) => {
            let { value: t } = e;
            E(t), z(!1), M(null);
        }, []),
        F = l.useCallback(
            (e) => {
                M(e), I && z(!1);
            },
            [I]
        ),
        U = [
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
        B = (() => {
            if (null != y && null != m) return g.intl.formatToPlainString(g.t.HVJexc, { count: null == m ? void 0 : m.size });
            if (null == n) return '';
            let e = x.ZP.getName(t, null, n);
            return g.intl.formatToPlainString(null != S ? g.t.WDR8XV : g.t.jeKpoq, { username: '@'.concat(e) });
        })(),
        J = null == S ? null : g.intl.string(g.t.pQjhIC);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: C,
        parentComponent: 'BanConfirm',
        children: [
            (0, r.jsx)(s.xBx, {
                separator: !1,
                children: (0, r.jsx)(s.olH, {
                    className: j.closeIcon,
                    onClick: k
                })
            }),
            (0, r.jsx)(s.hzk, {
                className: j.modalContent,
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
                                    children: B
                                }),
                                null != J &&
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-secondary',
                                        children: J
                                    })
                            ]
                        }),
                        (0, r.jsxs)(s.Kqy, {
                            direction: 'vertical',
                            gap: 8,
                            children: [
                                (0, r.jsxs)(s.xJW, {
                                    titleClassName: j.title,
                                    title: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-primary',
                                        children: g.intl.string(null != S ? g.t['+KCLVl'] : g.t.w4Ivys)
                                    }),
                                    children: [
                                        I &&
                                            (0, r.jsx)(s.kzN, {
                                                className: j.error,
                                                children: g.intl.string(g.t.IrYX19)
                                            }),
                                        (0, r.jsx)(s.FXm, {
                                            className: j.radioGroup,
                                            value: T,
                                            options: U.map((e) => {
                                                var t, n;
                                                return (
                                                    (t = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                r.forEach(function (t) {
                                                                    var r;
                                                                    (r = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = r);
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
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(n)).forEach(function (e) {
                                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                          }),
                                                    t
                                                );
                                            }),
                                            onChange: X,
                                            withTransparentBackground: !0
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: o()(j.reasonFreeText, { [j.hidden]: 'other' !== T }),
                                    children: (0, r.jsx)(s.Kx8, {
                                        maxLength: b.GNZ,
                                        onChange: F,
                                        value: null != N ? N : '',
                                        rows: 5,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(s.xJW, {
                            titleClassName: j.title,
                            title: (0, r.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-primary',
                                children: g.intl.string(null != S ? g.t.ERSM8P : g.t['8l3W09'])
                            }),
                            children: (0, r.jsx)(s.q4e, {
                                options: v(),
                                value: R,
                                onChange: L
                            })
                        })
                    ]
                })
            }),
            (() => {
                let e = w && !Z && null != S;
                return (0, r.jsxs)(s.mzw, {
                    className: j.footer,
                    children: [
                        e &&
                            (0, r.jsx)(s.XZJ, {
                                value: D,
                                onChange: (e, t) => A(t),
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-default',
                                    children: g.intl.string(h.default['8yIKen'])
                                })
                            }),
                        !w &&
                            (0, r.jsx)(s.zxk, {
                                type: 'button',
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                onClick: k,
                                children: g.intl.string(g.t['ETE/oK'])
                            }),
                        (0, r.jsx)(s.zxk, {
                            type: 'submit',
                            color: s.zxk.Colors.RED,
                            size: s.zxk.Sizes.SMALL,
                            onClick: Y,
                            children: g.intl.string(g.t['5MBJ5O'])
                        })
                    ]
                });
            })()
        ]
    });
}
