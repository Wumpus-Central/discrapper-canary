n.d(t, { default: () => j }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(658722),
    o = n.n(a),
    s = n(399606),
    i = n(481060),
    u = n(313201),
    c = n(734893),
    d = n(271383),
    m = n(430824),
    g = n(594174),
    p = n(903518),
    h = n(580357),
    x = n(388032),
    f = n(70164);
function b(e) {
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
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    var t, n, a;
    let { transitionState: j, onClose: k, guildId: I, welcomeMessage: _, onSave: y } = e,
        O = (0, u.Dt)(),
        [P, C] = l.useState(b({}, _)),
        w = (0, s.e7)([m.Z], () => m.Z.getGuild(I)),
        z = l.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    d.ZP.getMembers(I)
                        .filter((n) => {
                            var r;
                            let l = g.default.getUser(n.userId);
                            if ((null != l && (t[n.userId] = l), null == w || null == l || !(0, p.Y)(w, l))) return !1;
                            let a = ''.concat(null != (r = n.nick) ? r : '', ' ').concat(null == l ? void 0 : l.username);
                            return o()(e.toLowerCase(), a.toLowerCase());
                        })
                        .map((e) => {
                            var n, r, l;
                            return {
                                value: e.userId,
                                label: null != (l = null != (r = e.nick) ? r : null == (n = t[e.userId]) ? void 0 : n.username) ? l : ''
                            };
                        })
                );
            },
            [I, w]
        ),
        L = l.useCallback(
            (e) => {
                if (null == I || null == e) return null;
                let t = d.ZP.getMember(I, e.value);
                if (null == t) return null;
                let n = g.default.getUser(t.userId);
                if (null == n) return null;
                let l = n.getAvatarURL(I, 20);
                return (0, r.jsx)(i.Xo$, {
                    size: i.EFr.SIZE_20,
                    src: l,
                    'aria-hidden': !0
                });
            },
            [I]
        ),
        N = l.useCallback(
            (e) => {
                let { value: t } = e;
                C((e) => v(b({}, e), { authorIds: null != t ? [t] : [] }));
            },
            [C]
        ),
        S = l.useCallback(
            (e) => {
                C((t) => v(b({}, t), { message: null != e ? e : '' }));
            },
            [C]
        ),
        B = l.useCallback(() => {
            y(null), k();
        }, [y, k]),
        Z = null != (t = P.authorIds[0]) ? t : '',
        M = (0, s.e7)([d.ZP], () => (null != I ? d.ZP.getMember(I, Z) : null)),
        T = (0, s.e7)([g.default], () => (null != M ? g.default.getUser(M.userId) : null)),
        R = null != (a = null != (n = null == M ? void 0 : M.nick) ? n : null == T ? void 0 : T.username) ? a : '',
        E = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < c.ZR) return x.intl.formatToPlainString(x.t.Lj831N, { minLength: c.ZR });
                else return x.intl.string(x.t['4m7gtr']);
            return e.message.length < c.ZR ? x.intl.formatToPlainString(x.t.TJGHXl, { minLength: c.ZR }) : null;
        })(P);
    return (0, r.jsxs)(i.Y0X, {
        transitionState: j,
        'aria-labelledby': O,
        children: [
            (0, r.jsxs)('div', {
                className: f.container,
                children: [
                    (0, r.jsx)(i.olH, {
                        className: f.closeButton,
                        onClick: k
                    }),
                    (0, r.jsxs)('div', {
                        className: f.formGroup,
                        children: [
                            (0, r.jsxs)(i.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [x.intl.string(x.t.zNQfQ0), (0, r.jsx)(h.Z, {})]
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: x.intl.string(x.t.mQHK2d)
                            }),
                            (0, r.jsx)(i.VcW, {
                                value: {
                                    value: Z,
                                    label: R
                                },
                                renderOptionPrefix: L,
                                options: z,
                                onChange: N,
                                filter: !1
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: f.separator }),
                    (0, r.jsxs)('div', {
                        className: f.formGroup,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: x.intl.string(x.t.SHQcv7)
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: x.intl.format(x.t['6biC4e'], {})
                            }),
                            (0, r.jsx)(i.Kx8, {
                                className: f.welcomeMessageTextInput,
                                placeholder: x.intl.string(x.t['kX/Sb2']),
                                value: P.message,
                                onChange: S,
                                maxLength: c.W4
                            }),
                            null != E
                                ? (0, r.jsx)(i.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-danger',
                                      children: E
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsxs)('div', {
                    className: f.footerButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: f.__invalid_leftButtons,
                            children: (0, r.jsx)(i.zxk, {
                                size: i.zxk.Sizes.SMALL,
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.RED,
                                onClick: B,
                                children: x.intl.string(x.t.N86XcH)
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: f.rightButtons,
                            children: [
                                (0, r.jsx)(i.zxk, {
                                    onClick: k,
                                    size: i.zxk.Sizes.SMALL,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    children: x.intl.string(x.t['ETE/oK'])
                                }),
                                (0, r.jsx)(i.zxk, {
                                    disabled: 0 === P.message.length || null != E,
                                    onClick: () => {
                                        y(P), k();
                                    },
                                    children: x.intl.string(x.t.R3BPHx)
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
