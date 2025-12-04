n.d(t, { default: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(658722),
    i = n.n(a),
    o = n(793030),
    s = n(399606),
    u = n(668339),
    c = n(159691),
    d = n(481060),
    m = n(734893),
    g = n(271383),
    p = n(430824),
    f = n(594174),
    h = n(903518),
    b = n(580357),
    x = n(388032),
    v = n(353441);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
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
function y(e) {
    var t, n, a;
    let { transitionState: y, onClose: O, guildId: I, welcomeMessage: P, onSave: C } = e,
        [_, w] = l.useState(j({}, P)),
        Z = (0, s.e7)([p.Z], () => p.Z.getGuild(I)),
        S = l.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    g.ZP.getMembers(I)
                        .filter((n) => {
                            var r;
                            let l = f.default.getUser(n.userId);
                            if ((null != l && (t[n.userId] = l), null == Z || null == l || !(0, h.Y)(Z, l))) return !1;
                            let a = ""
                                .concat(null != (r = n.nick) ? r : "", " ")
                                .concat(null == l ? void 0 : l.username);
                            return i()(e.toLowerCase(), a.toLowerCase());
                        })
                        .map((e) => {
                            var n, r, l;
                            return {
                                value: e.userId,
                                label:
                                    null !=
                                    (l = null != (r = e.nick) ? r : null == (n = t[e.userId]) ? void 0 : n.username)
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
                let t = g.ZP.getMember(I, e.value);
                if (null == t) return null;
                let n = f.default.getUser(t.userId);
                if (null == n) return null;
                let l = n.getAvatarURL(I, 20);
                return (0, r.jsx)(d.Xo$, {
                    size: d.EFr.SIZE_20,
                    src: l,
                    "aria-hidden": !0,
                });
            },
            [I],
        ),
        L = l.useCallback(
            (e) => {
                let { value: t } = e;
                w((e) => k(j({}, e), { authorIds: null != t ? [t] : [] }));
            },
            [w],
        ),
        H = l.useCallback(
            (e) => {
                w((t) => k(j({}, t), { message: null != e ? e : "" }));
            },
            [w],
        ),
        N = l.useCallback(() => {
            C(_), O();
        }, [O, C, _]),
        T = l.useCallback(() => {
            C(null), O();
        }, [C, O]),
        U = null != (t = _.authorIds[0]) ? t : "",
        E = (0, s.e7)([g.ZP], () => (null != I ? g.ZP.getMember(I, U) : null)),
        M = (0, s.e7)([f.default], () => (null != E ? f.default.getUser(E.userId) : null)),
        R = null != (a = null != (n = null == E ? void 0 : E.nick) ? n : null == M ? void 0 : M.username) ? a : "",
        X = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < m.ZR) return x.intl.formatToPlainString(x.t.Lj831L, { minLength: m.ZR });
                else return x.intl.string(x.t["4m7gtn"]);
            return e.message.length < m.ZR ? x.intl.formatToPlainString(x.t.TJGHXt, { minLength: m.ZR }) : null;
        })(_),
        B = l.useMemo(
            () => [
                {
                    text: x.intl.string(x.t["ETE/oC"]),
                    onClick: O,
                    variant: "secondary",
                },
                {
                    text: x.intl.string(x.t["R3BPH+"]),
                    onClick: N,
                    variant: "primary",
                    disabled: 0 === _.message.length || null != X,
                },
            ],
            [X, N, O, _.message.length],
        );
    return (0, r.jsxs)(o.IX, {
        transitionState: y,
        onClose: O,
        children: [
            (0, r.jsx)("div", {
                className: v.closeButton,
                children: (0, r.jsx)(c.PZ7, { onClick: O }),
            }),
            (0, r.jsxs)("div", {
                className: v.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: v.formGroup,
                        children: [
                            (0, r.jsxs)(d.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [x.intl.string(x.t.zNQfQy), (0, r.jsx)(b.Z, {})],
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: x.intl.string(x.t.mQHK2S),
                            }),
                            (0, r.jsx)(u.d, {
                                value: {
                                    value: U,
                                    label: R,
                                },
                                renderOptionPrefix: G,
                                options: S,
                                onChange: L,
                                filter: !1,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: v.separator }),
                    (0, r.jsxs)("div", {
                        className: v.formGroup,
                        children: [
                            (0, r.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: x.intl.string(x.t.SHQcv7),
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: x.intl.format(x.t["6biC4R"], {}),
                            }),
                            (0, r.jsx)(d.Kx8, {
                                placeholder: x.intl.string(x.t["kX/Sbx"]),
                                value: _.message,
                                onChange: H,
                                maxLength: m.W4,
                            }),
                            null != X
                                ? (0, r.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      children: X,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(o.Go$, {
                actions: B,
                leading: (0, r.jsx)(d.Avr, {
                    text: x.intl.string(x.t.N86XcP),
                    onClick: T,
                    variant: "critical",
                }),
            }),
        ],
    });
}
