r.d(t, { default: () => j }), r(47120);
var n = r(200651),
    l = r(192379),
    o = r(658722),
    a = r.n(o),
    s = r(399606),
    i = r(481060),
    u = r(313201),
    c = r(734893),
    d = r(271383),
    m = r(430824),
    g = r(594174),
    p = r(903518),
    h = r(580357),
    x = r(388032),
    v = r(361449);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function j(e) {
    var t, r, o, j;
    let { transitionState: k, onClose: I, guildId: N, welcomeMessage: _, onSave: y } = e;
    let O = (0, u.Dt)(),
        [P, C] = l.useState(f({}, _)),
        w = (0, s.e7)([m.Z], () => m.Z.getGuild(N)),
        z = l.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    d.ZP.getMembers(N)
                        .filter((r) => {
                            var n;
                            let l = g.default.getUser(r.userId);
                            if ((null != l && (t[r.userId] = l), null == w || null == l || !(0, p.Y)(w, l))) return !1;
                            let o = ''.concat(null !== (n = r.nick) && void 0 !== n ? n : '', ' ').concat(null == l ? void 0 : l.username);
                            return a()(e.toLowerCase(), o.toLowerCase());
                        })
                        .map((e) => {
                            var r, n, l;
                            return {
                                value: e.userId,
                                label: null !== (l = null !== (n = e.nick) && void 0 !== n ? n : null === (r = t[e.userId]) || void 0 === r ? void 0 : r.username) && void 0 !== l ? l : ''
                            };
                        })
                );
            },
            [N, w]
        ),
        L = l.useCallback(
            (e) => {
                if (null == N || null == e) return null;
                let t = d.ZP.getMember(N, e.value);
                if (null == t) return null;
                let r = g.default.getUser(t.userId);
                if (null == r) return null;
                let l = r.getAvatarURL(N, 20);
                return (0, n.jsx)(i.Xo$, {
                    size: i.EFr.SIZE_20,
                    src: l,
                    'aria-hidden': !0
                });
            },
            [N]
        ),
        W = l.useCallback(
            (e) => {
                let { value: t } = e;
                C((e) => b(f({}, e), { authorIds: null != t ? [t] : [] }));
            },
            [C]
        ),
        S = l.useCallback(
            (e) => {
                C((t) => b(f({}, t), { message: null != e ? e : '' }));
            },
            [C]
        ),
        B = l.useCallback(() => {
            y(null), I();
        }, [y, I]),
        Z = null !== (t = P.authorIds[0]) && void 0 !== t ? t : '',
        M = (0, s.e7)([d.ZP], () => (null != N ? d.ZP.getMember(N, Z) : null)),
        T = (0, s.e7)([g.default], () => (null != M ? g.default.getUser(M.userId) : null)),
        R = null !== (o = null !== (r = null == M ? void 0 : M.nick) && void 0 !== r ? r : null == T ? void 0 : T.username) && void 0 !== o ? o : '',
        E = null == (j = P).message || 0 === j.message.length ? null : null == j.authorIds || 0 === j.authorIds.length ? (j.message.length < c.ZR ? x.NW.formatToPlainString(x.t.Lj831N, { minLength: c.ZR }) : x.NW.string(x.t['4m7gtr'])) : j.message.length < c.ZR ? x.NW.formatToPlainString(x.t.TJGHXl, { minLength: c.ZR }) : null;
    return (0, n.jsxs)(i.Y0X, {
        transitionState: k,
        'aria-labelledby': O,
        children: [
            (0, n.jsxs)('div', {
                className: v.container,
                children: [
                    (0, n.jsx)(i.olH, {
                        className: v.closeButton,
                        onClick: I
                    }),
                    (0, n.jsxs)('div', {
                        className: v.formGroup,
                        children: [
                            (0, n.jsxs)(i.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [x.NW.string(x.t.zNQfQ0), (0, n.jsx)(h.Z, {})]
                            }),
                            (0, n.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: x.NW.string(x.t.mQHK2d)
                            }),
                            (0, n.jsx)(i.VcW, {
                                value: {
                                    value: Z,
                                    label: R
                                },
                                renderOptionPrefix: L,
                                options: z,
                                onChange: W,
                                filter: !1
                            })
                        ]
                    }),
                    (0, n.jsx)('div', { className: v.separator }),
                    (0, n.jsxs)('div', {
                        className: v.formGroup,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: x.NW.string(x.t.SHQcv7)
                            }),
                            (0, n.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: x.NW.format(x.t['6biC4e'], {})
                            }),
                            (0, n.jsx)(i.Kx8, {
                                className: v.welcomeMessageTextInput,
                                placeholder: x.NW.string(x.t['kX/Sb2']),
                                value: P.message,
                                onChange: S,
                                maxLength: c.W4
                            }),
                            null != E
                                ? (0, n.jsx)(i.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-danger',
                                      children: E
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, n.jsx)(i.mzw, {
                children: (0, n.jsxs)('div', {
                    className: v.footerButtons,
                    children: [
                        (0, n.jsx)('div', {
                            className: v.__invalid_leftButtons,
                            children: (0, n.jsx)(i.zxk, {
                                size: i.zxk.Sizes.SMALL,
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.RED,
                                onClick: B,
                                children: x.NW.string(x.t.N86XcH)
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: v.rightButtons,
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    onClick: I,
                                    size: i.zxk.Sizes.SMALL,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    children: x.NW.string(x.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    disabled: 0 === P.message.length || null != E,
                                    onClick: () => {
                                        y(P), I();
                                    },
                                    children: x.NW.string(x.t.R3BPHx)
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
