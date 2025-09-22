r.d(n, { default: () => k }), r(388685);
var t = r(951288),
    l = r(647438),
    a = r(658722),
    o = r.n(a),
    i = r(399606),
    s = r(257465),
    u = r(369585),
    c = r(159691),
    d = r(481060),
    m = r(734893),
    g = r(271383),
    p = r(430824),
    h = r(594174),
    f = r(903518),
    b = r(580357),
    v = r(388032),
    x = r(353441);
function j(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            t.forEach(function (n) {
                var t;
                (t = r[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = t);
            });
    }
    return e;
}
function y(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, t);
                  }
                  return r;
              })(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              }),
        e
    );
}
function k(e) {
    var n, r, a;
    let { transitionState: k, onClose: O, guildId: I, welcomeMessage: P, onSave: C } = e,
        [_, w] = l.useState(j({}, P)),
        Z = (0, i.e7)([p.Z], () => p.Z.getGuild(I)),
        S = l.useCallback(
            (e) => {
                let n = {};
                return Promise.resolve(
                    g.ZP.getMembers(I)
                        .filter((r) => {
                            var t;
                            let l = h.default.getUser(r.userId);
                            if ((null != l && (n[r.userId] = l), null == Z || null == l || !(0, f.Y)(Z, l))) return !1;
                            let a = ""
                                .concat(null != (t = r.nick) ? t : "", " ")
                                .concat(null == l ? void 0 : l.username);
                            return o()(e.toLowerCase(), a.toLowerCase());
                        })
                        .map((e) => {
                            var r, t, l;
                            return {
                                value: e.userId,
                                label:
                                    null !=
                                    (l = null != (t = e.nick) ? t : null == (r = n[e.userId]) ? void 0 : r.username)
                                        ? l
                                        : "",
                            };
                        }),
                );
            },
            [I, Z],
        ),
        G = l.useCallback(
            (e) => {
                if (null == I || null == e) return null;
                let n = g.ZP.getMember(I, e.value);
                if (null == n) return null;
                let r = h.default.getUser(n.userId);
                if (null == r) return null;
                let l = r.getAvatarURL(I, 20);
                return (0, t.jsx)(d.Xo$, {
                    size: d.EFr.SIZE_20,
                    src: l,
                    "aria-hidden": !0,
                });
            },
            [I],
        ),
        N = l.useCallback(
            (e) => {
                let { value: n } = e;
                w((e) => y(j({}, e), { authorIds: null != n ? [n] : [] }));
            },
            [w],
        ),
        L = l.useCallback(
            (e) => {
                w((n) => y(j({}, n), { message: null != e ? e : "" }));
            },
            [w],
        ),
        T = l.useCallback(() => {
            C(_), O();
        }, [O, C, _]),
        U = l.useCallback(() => {
            C(null), O();
        }, [C, O]),
        E = null != (n = _.authorIds[0]) ? n : "",
        H = (0, i.e7)([g.ZP], () => (null != I ? g.ZP.getMember(I, E) : null)),
        M = (0, i.e7)([h.default], () => (null != H ? h.default.getUser(H.userId) : null)),
        X = null != (a = null != (r = null == H ? void 0 : H.nick) ? r : null == M ? void 0 : M.username) ? a : "",
        R = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < m.ZR) return v.intl.formatToPlainString(v.t.Lj831N, { minLength: m.ZR });
                else return v.intl.string(v.t["4m7gtr"]);
            return e.message.length < m.ZR ? v.intl.formatToPlainString(v.t.TJGHXl, { minLength: m.ZR }) : null;
        })(_),
        B = l.useMemo(
            () => [
                {
                    text: v.intl.string(v.t["ETE/oK"]),
                    onClick: O,
                    variant: "secondary",
                },
                {
                    text: v.intl.string(v.t.R3BPHx),
                    onClick: T,
                    variant: "primary",
                    disabled: 0 === _.message.length || null != R,
                },
            ],
            [R, T, O, _.message.length],
        );
    return (0, t.jsxs)(s.IX, {
        transitionState: k,
        onClose: O,
        children: [
            (0, t.jsx)("div", {
                className: x.closeButton,
                children: (0, t.jsx)(c.PZ7, { onClick: O }),
            }),
            (0, t.jsxs)("div", {
                className: x.container,
                children: [
                    (0, t.jsxs)("div", {
                        className: x.formGroup,
                        children: [
                            (0, t.jsxs)(d.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [v.intl.string(v.t.zNQfQ0), (0, t.jsx)(b.Z, {})],
                            }),
                            (0, t.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: v.intl.string(v.t.mQHK2d),
                            }),
                            (0, t.jsx)(d.VcW, {
                                value: {
                                    value: E,
                                    label: X,
                                },
                                renderOptionPrefix: G,
                                options: S,
                                onChange: N,
                                filter: !1,
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: x.separator }),
                    (0, t.jsxs)("div", {
                        className: x.formGroup,
                        children: [
                            (0, t.jsx)(d.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: v.intl.string(v.t.SHQcv7),
                            }),
                            (0, t.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: v.intl.format(v.t["6biC4e"], {}),
                            }),
                            (0, t.jsx)(d.Kx8, {
                                placeholder: v.intl.string(v.t["kX/Sb2"]),
                                value: _.message,
                                onChange: L,
                                maxLength: m.W4,
                            }),
                            null != R
                                ? (0, t.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-danger",
                                      children: R,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, t.jsx)(u.G, {
                actions: B,
                leading: (0, t.jsx)(d.Avr, {
                    text: v.intl.string(v.t.N86XcH),
                    onClick: U,
                    variant: "critical",
                }),
            }),
        ],
    });
}
