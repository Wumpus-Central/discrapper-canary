t.d(r, { default: () => j }), t(47120);
var n = t(200651),
    l = t(192379),
    a = t(658722),
    o = t.n(a),
    s = t(399606),
    i = t(481060),
    u = t(313201),
    c = t(734893),
    d = t(271383),
    m = t(430824),
    g = t(594174),
    p = t(903518),
    h = t(580357),
    x = t(388032),
    f = t(70164);
function b(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[r] = n);
            });
    }
    return e;
}
function v(e, r) {
    return (
        (r = null != r ? r : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e
    );
}
function j(e) {
    var r, t, a;
    let { transitionState: j, onClose: k, guildId: I, welcomeMessage: N, onSave: _ } = e,
        y = (0, u.Dt)(),
        [O, P] = l.useState(b({}, N)),
        C = (0, s.e7)([m.Z], () => m.Z.getGuild(I)),
        w = l.useCallback(
            (e) => {
                let r = {};
                return Promise.resolve(
                    d.ZP.getMembers(I)
                        .filter((t) => {
                            var n;
                            let l = g.default.getUser(t.userId);
                            if ((null != l && (r[t.userId] = l), null == C || null == l || !(0, p.Y)(C, l))) return !1;
                            let a = ''.concat(null != (n = t.nick) ? n : '', ' ').concat(null == l ? void 0 : l.username);
                            return o()(e.toLowerCase(), a.toLowerCase());
                        })
                        .map((e) => {
                            var t, n, l;
                            return {
                                value: e.userId,
                                label: null != (l = null != (n = e.nick) ? n : null == (t = r[e.userId]) ? void 0 : t.username) ? l : ''
                            };
                        })
                );
            },
            [I, C]
        ),
        z = l.useCallback(
            (e) => {
                if (null == I || null == e) return null;
                let r = d.ZP.getMember(I, e.value);
                if (null == r) return null;
                let t = g.default.getUser(r.userId);
                if (null == t) return null;
                let l = t.getAvatarURL(I, 20);
                return (0, n.jsx)(i.Xo$, {
                    size: i.EFr.SIZE_20,
                    src: l,
                    'aria-hidden': !0
                });
            },
            [I]
        ),
        L = l.useCallback(
            (e) => {
                let { value: r } = e;
                P((e) => v(b({}, e), { authorIds: null != r ? [r] : [] }));
            },
            [P]
        ),
        W = l.useCallback(
            (e) => {
                P((r) => v(b({}, r), { message: null != e ? e : '' }));
            },
            [P]
        ),
        S = l.useCallback(() => {
            _(null), k();
        }, [_, k]),
        B = null != (r = O.authorIds[0]) ? r : '',
        Z = (0, s.e7)([d.ZP], () => (null != I ? d.ZP.getMember(I, B) : null)),
        M = (0, s.e7)([g.default], () => (null != Z ? g.default.getUser(Z.userId) : null)),
        T = null != (a = null != (t = null == Z ? void 0 : Z.nick) ? t : null == M ? void 0 : M.username) ? a : '',
        R = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < c.ZR) return x.NW.formatToPlainString(x.t.Lj831N, { minLength: c.ZR });
                else return x.NW.string(x.t['4m7gtr']);
            return e.message.length < c.ZR ? x.NW.formatToPlainString(x.t.TJGHXl, { minLength: c.ZR }) : null;
        })(O);
    return (0, n.jsxs)(i.Y0X, {
        transitionState: j,
        'aria-labelledby': y,
        children: [
            (0, n.jsxs)('div', {
                className: f.container,
                children: [
                    (0, n.jsx)(i.olH, {
                        className: f.closeButton,
                        onClick: k
                    }),
                    (0, n.jsxs)('div', {
                        className: f.formGroup,
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
                                    value: B,
                                    label: T
                                },
                                renderOptionPrefix: z,
                                options: w,
                                onChange: L,
                                filter: !1
                            })
                        ]
                    }),
                    (0, n.jsx)('div', { className: f.separator }),
                    (0, n.jsxs)('div', {
                        className: f.formGroup,
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
                                className: f.welcomeMessageTextInput,
                                placeholder: x.NW.string(x.t['kX/Sb2']),
                                value: O.message,
                                onChange: W,
                                maxLength: c.W4
                            }),
                            null != R
                                ? (0, n.jsx)(i.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-danger',
                                      children: R
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, n.jsx)(i.mzw, {
                children: (0, n.jsxs)('div', {
                    className: f.footerButtons,
                    children: [
                        (0, n.jsx)('div', {
                            className: f.__invalid_leftButtons,
                            children: (0, n.jsx)(i.zxk, {
                                size: i.zxk.Sizes.SMALL,
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.RED,
                                onClick: S,
                                children: x.NW.string(x.t.N86XcH)
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: f.rightButtons,
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    onClick: k,
                                    size: i.zxk.Sizes.SMALL,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    children: x.NW.string(x.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    disabled: 0 === O.message.length || null != R,
                                    onClick: () => {
                                        _(O), k();
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
