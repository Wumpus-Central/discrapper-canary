(n.d(e, { default: () => C }), n(388685), n(781311), n(539854));
var l = n(255367),
    r = n(73800),
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
    m = n(981631),
    h = n(388032),
    j = n(130883),
    x = n(221166);
function f() {
    return [
        {
            value: 0,
            label: h.intl.string(h.t['4obaMT'])
        },
        {
            value: +v.Z.Seconds.HOUR,
            label: h.intl.string(h.t.RKpitb)
        },
        {
            value: 6 * v.Z.Seconds.HOUR,
            label: h.intl.string(h.t['8WfJZ2'])
        },
        {
            value: 12 * v.Z.Seconds.HOUR,
            label: h.intl.string(h.t.p1up7u)
        },
        {
            value: +v.Z.Seconds.DAY,
            label: h.intl.string(h.t.XuVkkJ)
        },
        {
            value: 3 * v.Z.Seconds.DAY,
            label: h.intl.string(h.t.gMcDS0)
        },
        {
            value: 7 * v.Z.Seconds.DAY,
            label: h.intl.string(h.t.FA7IUl)
        }
    ];
}
let y = f()[1].value,
    O = f()[0].value;
function C(t) {
    let { guildId: e, user: n, location: i, userIds: v, onBanMultiple: C, transitionState: S, onClose: k, canBulkBan: P = !1, modReportId: Z } = t,
        [w, _] = r.useState(null != Z ? O : y),
        [T, I] = r.useState(''),
        [M, N] = r.useState(null),
        { isModReportClosed: D, isModReport: K } = (0, o.cj)([g.Z], () => {
            let t = g.Z.getChannel(Z);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel()
            };
        }),
        [R, E] = r.useState(!1),
        [U, Y] = r.useState(!1),
        F = (0, d.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: v
        }),
        J = r.useCallback(() => {
            let t = null != M ? M : T;
            if (null != C) {
                if (!(null != v && (null == v ? void 0 : v.size) > 0 && P) || R) return;
                if ('' === T.trim() && !R) return void E(!0);
                C(e, [...v], w, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, w, t, Z).then(() => {
                    U && null != Z && p.Z.resolveFlag(Z);
                });
            }
            (F(d.jQ.BAN), k());
        }, [M, T, C, F, k, v, P, R, e, w, n, Z, U]),
        X = r.useCallback((t) => {
            _(t);
        }, []),
        A = r.useCallback((t) => {
            let { value: e } = t;
            (I(e), E(!1), N(null));
        }, []),
        B = r.useCallback(
            (t) => {
                (N(t), R && E(!1));
            },
            [R]
        ),
        W = K && !D && null != Z,
        q = [
            {
                name: h.intl.string(h.t.tamLhY),
                value: h.intl.string(h.t.tamLhY)
            },
            {
                name: h.intl.string(h.t.UmxjMj),
                value: h.intl.string(h.t.UmxjMj)
            },
            {
                name: h.intl.string(h.t.EXY1d3),
                value: h.intl.string(h.t.EXY1d3)
            },
            {
                name: h.intl.string(h.t.BcZTKi),
                value: 'other'
            }
        ],
        G = (() => {
            if (null != C && null != v) return h.intl.formatToPlainString(h.t.HVJexc, { count: null == v ? void 0 : v.size });
            if (null == n) return '';
            let t = b.ZP.getName(e, null, n);
            return h.intl.formatToPlainString(null != Z ? h.t.WDR8XV : h.t.jeKpoq, { username: '@'.concat(t) });
        })(),
        H = null == Z ? null : h.intl.string(h.t.pQjhIC);
    return (0, l.jsx)(s.Modal, {
        onClose: k,
        transitionState: S,
        title: G,
        subtitle: null != H ? H : void 0,
        actions: (() => {
            let t = [];
            return (
                K ||
                    t.push({
                        variant: 'secondary',
                        text: h.intl.string(h.t['ETE/oK']),
                        onClick: k
                    }),
                t.push({
                    variant: 'critical-primary',
                    text: h.intl.string(h.t['5MBJ5O']),
                    onClick: J
                }),
                t
            );
        })(),
        actionBarInput: W
            ? (0, l.jsx)(u.XZJ, {
                  value: U,
                  onChange: (t, e) => Y(e),
                  children: (0, l.jsx)(u.Text, {
                      variant: 'text-md/normal',
                      color: 'text-default',
                      children: h.intl.string(j.default['8yIKen'])
                  })
              })
            : void 0,
        children: (0, l.jsxs)(u.Kqy, {
            direction: 'vertical',
            gap: 24,
            children: [
                (0, l.jsxs)(u.Kqy, {
                    direction: 'vertical',
                    gap: 8,
                    children: [
                        (0, l.jsxs)(u.xJW, {
                            titleClassName: x.title,
                            title: (0, l.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'text-primary',
                                children: h.intl.string(null != Z ? h.t['+KCLVl'] : h.t.w4Ivys)
                            }),
                            children: [
                                R &&
                                    (0, l.jsx)(u.kzN, {
                                        className: x.error,
                                        children: h.intl.string(h.t.IrYX19)
                                    }),
                                (0, l.jsx)(u.FXm, {
                                    className: x.radioGroup,
                                    value: T,
                                    options: q.map((t) => {
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
                                            (n = n = { radioBarClassName: x.radioItem }),
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
                                    onChange: A,
                                    withTransparentBackground: !0
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: a()(x.reasonFreeText, { [x.hidden]: 'other' !== T }),
                            children: (0, l.jsx)(u.Kx8, {
                                maxLength: m.GNZ,
                                onChange: B,
                                value: null != M ? M : '',
                                rows: 5,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, l.jsx)(u.xJW, {
                    titleClassName: x.title,
                    title: (0, l.jsx)(u.Text, {
                        variant: 'text-md/medium',
                        color: 'text-primary',
                        children: h.intl.string(null != Z ? h.t.ERSM8P : h.t['8l3W09'])
                    }),
                    children: (0, l.jsx)(u.q4e, {
                        options: f(),
                        value: w,
                        onChange: X
                    })
                })
            ]
        })
    });
}
