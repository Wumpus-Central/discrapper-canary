n.d(t, { default: () => k }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(658722),
    i = n.n(a),
    o = n(793030),
    s = n(399606),
    u = n(668339),
    c = n(481060),
    d = n(734893),
    g = n(271383),
    m = n(430824),
    p = n(594174),
    f = n(903518),
    b = n(580357),
    h = n(388032),
    x = n(609442);
function v(e) {
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
function j(e, t) {
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
function k(e) {
    var t, n, a;
    let { transitionState: k, onClose: O, guildId: y, welcomeMessage: I, onSave: P } = e,
        [C, w] = l.useState(v({}, I)),
        Z = (0, s.e7)([m.Z], () => m.Z.getGuild(y)),
        S = l.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    g.ZP.getMembers(y)
                        .filter((n) => {
                            var r;
                            let l = p.default.getUser(n.userId);
                            if ((null != l && (t[n.userId] = l), null == Z || null == l || !(0, f.Y)(Z, l))) return !1;
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
            [y, Z],
        ),
        L = l.useCallback(
            (e) => {
                if (null == y || null == e) return null;
                let t = g.ZP.getMember(y, e.value);
                if (null == t) return null;
                let n = p.default.getUser(t.userId);
                if (null == n) return null;
                let l = n.getAvatarURL(y, 20);
                return (0, r.jsx)(c.Xo$, {
                    size: c.EFr.SIZE_20,
                    src: l,
                    "aria-hidden": !0,
                });
            },
            [y],
        ),
        U = l.useCallback(
            (e) => {
                let { value: t } = e;
                w((e) => j(v({}, e), { authorIds: null != t ? [t] : [] }));
            },
            [w],
        ),
        G = l.useCallback(
            (e) => {
                w((t) => j(v({}, t), { message: null != e ? e : "" }));
            },
            [w],
        ),
        M = l.useCallback(() => {
            P(C), O();
        }, [O, P, C]),
        T = l.useCallback(() => {
            P(null), O();
        }, [P, O]),
        E = null != (t = C.authorIds[0]) ? t : "",
        R = (0, s.e7)([g.ZP], () => (null != y ? g.ZP.getMember(y, E) : null)),
        H = (0, s.e7)([p.default], () => (null != R ? p.default.getUser(R.userId) : null)),
        N = null != (a = null != (n = null == R ? void 0 : R.nick) ? n : null == H ? void 0 : H.username) ? a : "",
        D = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < d.ZR) return h.intl.formatToPlainString(h.t.Lj831L, { minLength: d.ZR });
                else return h.intl.string(h.t["4m7gtn"]);
            return e.message.length < d.ZR ? h.intl.formatToPlainString(h.t.TJGHXt, { minLength: d.ZR }) : null;
        })(C),
        Q = l.useMemo(
            () => [
                {
                    text: h.intl.string(h.t["ETE/oC"]),
                    onClick: O,
                    variant: "secondary",
                },
                {
                    text: h.intl.string(h.t["R3BPH+"]),
                    onClick: M,
                    variant: "primary",
                    disabled: 0 === C.message.length || null != D,
                },
            ],
            [D, M, O, C.message.length],
        );
    return (0, r.jsxs)(o.Modal, {
        title: h.intl.string(h.t.UnLrit),
        transitionState: k,
        onClose: O,
        actions: Q,
        actionBarInput: (0, r.jsx)(c.Avr, {
            text: h.intl.string(h.t.N86XcP),
            onClick: T,
            variant: "critical",
        }),
        children: [
            (0, r.jsxs)("div", {
                className: x.formGroup,
                children: [
                    (0, r.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [h.intl.string(h.t.zNQfQy), (0, r.jsx)(b.Z, {})],
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: h.intl.string(h.t.mQHK2S),
                    }),
                    (0, r.jsx)(u.d, {
                        value: {
                            value: E,
                            label: N,
                        },
                        renderOptionPrefix: L,
                        options: S,
                        onChange: U,
                        filter: !1,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: x.separator }),
            (0, r.jsxs)("div", {
                className: x.formGroup,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: h.intl.string(h.t.SHQcv7),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: h.intl.format(h.t["6biC4R"], {}),
                    }),
                    (0, r.jsx)(c.Kx8, {
                        placeholder: h.intl.string(h.t["kX/Sbx"]),
                        value: C.message,
                        onChange: G,
                        maxLength: d.W4,
                    }),
                    null != D
                        ? (0, r.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: D,
                          })
                        : null,
                ],
            }),
        ],
    });
}
