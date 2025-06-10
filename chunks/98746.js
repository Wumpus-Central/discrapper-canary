n.d(t, { default: () => k }), n(388685), n(781311);
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(910693),
    d = n(501517),
    m = n(592125),
    x = n(70956),
    b = n(5192),
    g = n(981631),
    p = n(388032),
    h = n(130883),
    v = n(221166);
function j() {
    return [
        {
            value: 0,
            label: p.intl.string(p.t['4obaMT'])
        },
        {
            value: +x.Z.Seconds.HOUR,
            label: p.intl.string(p.t.RKpitb)
        },
        {
            value: 6 * x.Z.Seconds.HOUR,
            label: p.intl.string(p.t['8WfJZ2'])
        },
        {
            value: 12 * x.Z.Seconds.HOUR,
            label: p.intl.string(p.t.p1up7u)
        },
        {
            value: +x.Z.Seconds.DAY,
            label: p.intl.string(p.t.XuVkkJ)
        },
        {
            value: 3 * x.Z.Seconds.DAY,
            label: p.intl.string(p.t.gMcDS0)
        },
        {
            value: 7 * x.Z.Seconds.DAY,
            label: p.intl.string(p.t.FA7IUl)
        }
    ];
}
let f = j()[1].value,
    y = j()[0].value;
function k(e) {
    let { guildId: t, user: n, location: i, userIds: x, onBanMultiple: k, transitionState: C, onClose: O, canBulkBan: S = !1, modReportId: _ } = e,
        [P, w] = r.useState(null != _ ? y : f),
        [Z, I] = r.useState(''),
        [N, T] = r.useState(null),
        z = (0, o.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getChannel(_)) ? void 0 : e.isArchivedThread();
        }),
        [K, D] = r.useState(!1),
        [Y, E] = r.useState(!1),
        R = (0, u.sE)(t, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: x
        }),
        X = r.useCallback(() => {
            let e = null != N ? N : Z;
            if (null != k) {
                if (!(null != x && (null == x ? void 0 : x.size) > 0 && S) || K) return;
                if ('' === Z.trim() && !K) return void D(!0);
                k(t, [...x], P, e);
            } else {
                if (null == n) return;
                c.Z.banUser(t, null == n ? void 0 : n.id, P, e, _).then(() => {
                    Y && null != _ && d.Z.resolveFlag(_);
                });
            }
            R(u.jQ.BAN), O();
        }, [N, Z, k, R, O, x, S, K, t, P, n, _, Y]),
        A = r.useCallback((e) => {
            w(e);
        }, []),
        L = r.useCallback((e) => {
            let { value: t } = e;
            I(t), D(!1), T(null);
        }, []),
        M = r.useCallback(
            (e) => {
                T(e), K && D(!1);
            },
            [K]
        ),
        U = [
            {
                name: p.intl.string(p.t.tamLhY),
                value: p.intl.string(p.t.tamLhY)
            },
            {
                name: p.intl.string(p.t.UmxjMj),
                value: p.intl.string(p.t.UmxjMj)
            },
            {
                name: p.intl.string(p.t.EXY1d3),
                value: p.intl.string(p.t.EXY1d3)
            },
            {
                name: p.intl.string(p.t.BcZTKi),
                value: 'other'
            }
        ],
        B = (() => {
            if (null != k && null != x) return p.intl.formatToPlainString(p.t.HVJexc, { count: null == x ? void 0 : x.size });
            if (null == n) return '';
            let e = b.ZP.getName(t, null, n);
            return p.intl.formatToPlainString(null != _ ? p.t.WDR8XV : p.t.jeKpoq, { username: '@'.concat(e) });
        })(),
        F = null == _ ? null : p.intl.string(p.t.pQjhIC);
    return (0, l.jsxs)(s.Y0X, {
        transitionState: C,
        parentComponent: 'BanConfirm',
        children: [
            (0, l.jsx)(s.xBx, {
                separator: !1,
                children: (0, l.jsx)(s.olH, {
                    className: v.closeIcon,
                    onClick: O
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
                                    children: B
                                }),
                                null != F &&
                                    (0, l.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'text-secondary',
                                        children: F
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
                                        children: p.intl.string(null != _ ? p.t['+KCLVl'] : p.t.w4Ivys)
                                    }),
                                    children: [
                                        K &&
                                            (0, l.jsx)(s.kzN, {
                                                className: v.error,
                                                children: p.intl.string(p.t.IrYX19)
                                            }),
                                        (0, l.jsx)(s.FXm, {
                                            className: v.radioGroup,
                                            value: Z,
                                            options: U.map((e) => {
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
                                    className: a()(v.reasonFreeText, { [v.hidden]: 'other' !== Z }),
                                    children: (0, l.jsx)(s.Kx8, {
                                        maxLength: g.GNZ,
                                        onChange: M,
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
                                children: p.intl.string(null != _ ? p.t.ERSM8P : p.t['8l3W09'])
                            }),
                            children: (0, l.jsx)(s.q4e, {
                                options: j(),
                                value: P,
                                onChange: A
                            })
                        })
                    ]
                })
            }),
            (0, l.jsxs)(s.mzw, {
                className: v.footer,
                children: [
                    null != _ &&
                        !z &&
                        (0, l.jsx)(s.XZJ, {
                            value: Y,
                            onChange: (e, t) => E(t),
                            children: (0, l.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'text-normal',
                                children: p.intl.string(h.default['8yIKen'])
                            })
                        }),
                    null == _ &&
                        (0, l.jsx)(s.zxk, {
                            type: 'button',
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: O,
                            children: p.intl.string(p.t['ETE/oK'])
                        }),
                    (0, l.jsx)(s.zxk, {
                        type: 'submit',
                        color: s.zxk.Colors.RED,
                        size: s.zxk.Sizes.SMALL,
                        onClick: X,
                        children: p.intl.string(p.t['5MBJ5O'])
                    })
                ]
            })
        ]
    });
}
