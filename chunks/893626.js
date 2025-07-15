(t.d(n, { default: () => k }), t(388685));
var r = t(255367),
    l = t(73800),
    a = t(658722),
    o = t.n(a),
    s = t(399606),
    i = t(146187),
    u = t(257465),
    c = t(369585),
    d = t(481060),
    m = t(734893),
    g = t(271383),
    p = t(430824),
    h = t(594174),
    f = t(903518),
    x = t(580357),
    b = t(388032),
    v = t(70164);
function j(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                ((r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r));
            }));
    }
    return e;
}
function y(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function k(e) {
    var n, t, a;
    let { transitionState: k, onClose: I, guildId: O, welcomeMessage: P, onSave: _ } = e,
        [C, w] = l.useState(j({}, P)),
        Z = (0, s.e7)([p.Z], () => p.Z.getGuild(O)),
        S = l.useCallback(
            (e) => {
                let n = {};
                return Promise.resolve(
                    g.ZP.getMembers(O)
                        .filter((t) => {
                            var r;
                            let l = h.default.getUser(t.userId);
                            if ((null != l && (n[t.userId] = l), null == Z || null == l || !(0, f.Y)(Z, l))) return !1;
                            let a = ''.concat(null != (r = t.nick) ? r : '', ' ').concat(null == l ? void 0 : l.username);
                            return o()(e.toLowerCase(), a.toLowerCase());
                        })
                        .map((e) => {
                            var t, r, l;
                            return {
                                value: e.userId,
                                label: null != (l = null != (r = e.nick) ? r : null == (t = n[e.userId]) ? void 0 : t.username) ? l : ''
                            };
                        })
                );
            },
            [O, Z]
        ),
        T = l.useCallback(
            (e) => {
                if (null == O || null == e) return null;
                let n = g.ZP.getMember(O, e.value);
                if (null == n) return null;
                let t = h.default.getUser(n.userId);
                if (null == t) return null;
                let l = t.getAvatarURL(O, 20);
                return (0, r.jsx)(d.Xo$, {
                    size: d.EFr.SIZE_20,
                    src: l,
                    'aria-hidden': !0
                });
            },
            [O]
        ),
        M = l.useCallback(
            (e) => {
                let { value: n } = e;
                w((e) => y(j({}, e), { authorIds: null != n ? [n] : [] }));
            },
            [w]
        ),
        N = l.useCallback(
            (e) => {
                w((n) => y(j({}, n), { message: null != e ? e : '' }));
            },
            [w]
        ),
        G = l.useCallback(() => {
            (_(C), I());
        }, [I, _, C]),
        L = l.useCallback(() => {
            (_(null), I());
        }, [_, I]),
        U = null != (n = C.authorIds[0]) ? n : '',
        E = (0, s.e7)([g.ZP], () => (null != O ? g.ZP.getMember(O, U) : null)),
        H = (0, s.e7)([h.default], () => (null != E ? h.default.getUser(E.userId) : null)),
        X = null != (a = null != (t = null == E ? void 0 : E.nick) ? t : null == H ? void 0 : H.username) ? a : '',
        R = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < m.ZR) return b.intl.formatToPlainString(b.t.Lj831N, { minLength: m.ZR });
                else return b.intl.string(b.t['4m7gtr']);
            return e.message.length < m.ZR ? b.intl.formatToPlainString(b.t.TJGHXl, { minLength: m.ZR }) : null;
        })(C),
        B = l.useMemo(
            () => [
                {
                    text: b.intl.string(b.t['ETE/oK']),
                    onClick: I,
                    variant: 'secondary'
                },
                {
                    text: b.intl.string(b.t.R3BPHx),
                    onClick: G,
                    variant: 'primary',
                    disabled: 0 === C.message.length || null != R
                }
            ],
            [R, G, I, C.message.length]
        );
    return (0, r.jsxs)(u.IX, {
        transitionState: k,
        onClose: I,
        children: [
            (0, r.jsx)('div', {
                className: v.closeButton,
                children: (0, r.jsx)(i.P, { onClick: I })
            }),
            (0, r.jsxs)('div', {
                className: v.container,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.formGroup,
                        children: [
                            (0, r.jsxs)(d.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [b.intl.string(b.t.zNQfQ0), (0, r.jsx)(x.Z, {})]
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: b.intl.string(b.t.mQHK2d)
                            }),
                            (0, r.jsx)(d.VcW, {
                                value: {
                                    value: U,
                                    label: X
                                },
                                renderOptionPrefix: T,
                                options: S,
                                onChange: M,
                                filter: !1
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: v.separator }),
                    (0, r.jsxs)('div', {
                        className: v.formGroup,
                        children: [
                            (0, r.jsx)(d.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: b.intl.string(b.t.SHQcv7)
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: b.intl.format(b.t['6biC4e'], {})
                            }),
                            (0, r.jsx)(d.Kx8, {
                                className: v.welcomeMessageTextInput,
                                placeholder: b.intl.string(b.t['kX/Sb2']),
                                value: C.message,
                                onChange: N,
                                maxLength: m.W4
                            }),
                            null != R
                                ? (0, r.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-danger',
                                      children: R
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.G, {
                actions: B,
                leading: (0, r.jsx)(d.Avr, {
                    text: b.intl.string(b.t.N86XcH),
                    onClick: L,
                    variant: 'critical'
                })
            })
        ]
    });
}
