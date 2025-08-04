(n.d(e, { default: () => C }), n(388685), n(781311), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(82659),
    u = n(481060),
    c = n(749210),
    d = n(910693),
    p = n(501517),
    g = n(592125),
    v = n(70956),
    b = n(5192),
    h = n(981631),
    m = n(388032),
    j = n(130883),
    x = n(221166);
function O() {
    return [
        {
            value: 0,
            label: m.intl.string(m.t['4obaMT'])
        },
        {
            value: +v.Z.Seconds.HOUR,
            label: m.intl.string(m.t.RKpitb)
        },
        {
            value: 6 * v.Z.Seconds.HOUR,
            label: m.intl.string(m.t['8WfJZ2'])
        },
        {
            value: 12 * v.Z.Seconds.HOUR,
            label: m.intl.string(m.t.p1up7u)
        },
        {
            value: +v.Z.Seconds.DAY,
            label: m.intl.string(m.t.XuVkkJ)
        },
        {
            value: 3 * v.Z.Seconds.DAY,
            label: m.intl.string(m.t.gMcDS0)
        },
        {
            value: 7 * v.Z.Seconds.DAY,
            label: m.intl.string(m.t.FA7IUl)
        }
    ];
}
let f = O()[1].value,
    y = O()[0].value;
function C(t) {
    let { guildId: e, user: n, location: i, userIds: v, onBanMultiple: C, transitionState: S, onClose: _, canBulkBan: P = !1, modReportId: R } = t,
        [T, k] = l.useState(null != R ? y : f),
        [E, Z] = l.useState(''),
        [M, w] = l.useState(null),
        { isModReportClosed: N, isModReport: D } = (0, o.cj)([g.Z], () => {
            let t = g.Z.getChannel(R);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel()
            };
        }),
        [I, A] = l.useState(!1),
        [K, F] = l.useState(!1),
        U = (0, d.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: v
        }),
        Y = l.useCallback(() => {
            let t = null != M ? M : E;
            if (null != C) {
                if (!(null != v && (null == v ? void 0 : v.size) > 0 && P) || I) return;
                if ('' === E.trim() && !I) return void A(!0);
                C(e, [...v], T, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, T, t, R).then(() => {
                    K && null != R && p.Z.resolveFlag(R);
                });
            }
            (U(d.jQ.BAN), _());
        }, [M, E, C, U, _, v, P, I, e, T, n, R, K]),
        J = l.useCallback((t) => {
            k(t);
        }, []),
        W = l.useCallback((t) => {
            let { value: e } = t;
            (Z(e), A(!1), w(null));
        }, []),
        X = l.useCallback(
            (t) => {
                (w(t), I && A(!1));
            },
            [I]
        ),
        B = D && !N && null != R,
        L = [
            {
                name: m.intl.string(m.t.tamLhY),
                value: m.intl.string(m.t.tamLhY)
            },
            {
                name: m.intl.string(m.t.UmxjMj),
                value: m.intl.string(m.t.UmxjMj)
            },
            {
                name: m.intl.string(m.t.EXY1d3),
                value: m.intl.string(m.t.EXY1d3)
            },
            {
                name: m.intl.string(m.t.BcZTKi),
                value: 'other'
            }
        ],
        q = (() => {
            if (null != C && null != v) return m.intl.formatToPlainString(m.t.HVJexc, { count: null == v ? void 0 : v.size });
            if (null == n) return '';
            let t = b.ZP.getName(e, null, n);
            return m.intl.formatToPlainString(null != R ? m.t.WDR8XV : m.t.jeKpoq, { username: '@'.concat(t) });
        })(),
        G = null == R ? null : m.intl.string(m.t.pQjhIC);
    return (0, r.jsx)(s.Modal, {
        onClose: _,
        transitionState: S,
        title: q,
        subtitle: null != G ? G : void 0,
        actions: (() => {
            let t = [];
            return (
                D ||
                    t.push({
                        variant: 'secondary',
                        text: m.intl.string(m.t['ETE/oK']),
                        onClick: _
                    }),
                t.push({
                    variant: 'critical-primary',
                    text: m.intl.string(m.t['5MBJ5O']),
                    onClick: Y
                }),
                t
            );
        })(),
        actionBarInput: B
            ? (0, r.jsx)(u.XZJ, {
                  value: K,
                  onChange: (t, e) => F(e),
                  children: (0, r.jsx)(u.Text, {
                      variant: 'text-md/normal',
                      color: 'text-default',
                      children: m.intl.string(j.default['8yIKen'])
                  })
              })
            : void 0,
        children: (0, r.jsxs)(u.Kqy, {
            direction: 'vertical',
            gap: 24,
            children: [
                (0, r.jsxs)(u.Kqy, {
                    direction: 'vertical',
                    gap: 8,
                    children: [
                        (0, r.jsxs)(u.xJW, {
                            titleClassName: x.title,
                            title: (0, r.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'text-primary',
                                children: m.intl.string(null != R ? m.t['+KCLVl'] : m.t.w4Ivys)
                            }),
                            children: [
                                I &&
                                    (0, r.jsx)(u.kzN, {
                                        className: x.error,
                                        children: m.intl.string(m.t.IrYX19)
                                    }),
                                (0, r.jsx)(u.FXm, {
                                    className: x.radioGroup,
                                    value: E,
                                    options: L.map((t) => {
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
                                            (n = n = { radioBarClassName: x.radioItem }),
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
                                    onChange: W,
                                    withTransparentBackground: !0
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: a()(x.reasonFreeText, { [x.hidden]: 'other' !== E }),
                            children: (0, r.jsx)(u.Kx8, {
                                maxLength: h.GNZ,
                                onChange: X,
                                value: null != M ? M : '',
                                rows: 5,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, r.jsx)(u.xJW, {
                    titleClassName: x.title,
                    title: (0, r.jsx)(u.Text, {
                        variant: 'text-md/medium',
                        color: 'text-primary',
                        children: m.intl.string(null != R ? m.t.ERSM8P : m.t['8l3W09'])
                    }),
                    children: (0, r.jsx)(u.q4e, {
                        options: O(),
                        value: T,
                        onChange: J
                    })
                })
            ]
        })
    });
}
