n.d(t, { default: () => k }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(658722),
    i = n.n(a),
    o = n(793030),
    s = n(399606),
    u = n(159691),
    c = n(481060),
    d = n(734893),
    m = n(271383),
    g = n(430824),
    p = n(594174),
    f = n(903518),
    h = n(580357),
    b = n(388032),
    x = n(353441);
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
    let { transitionState: k, onClose: y, guildId: O, welcomeMessage: I, onSave: P } = e,
        [C, _] = l.useState(v({}, I)),
        w = (0, s.e7)([g.Z], () => g.Z.getGuild(O)),
        Z = l.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    m.ZP.getMembers(O)
                        .filter((n) => {
                            var r;
                            let l = p.default.getUser(n.userId);
                            if ((null != l && (t[n.userId] = l), null == w || null == l || !(0, f.Y)(w, l))) return !1;
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
            [O, w],
        ),
        S = l.useCallback(
            (e) => {
                if (null == O || null == e) return null;
                let t = m.ZP.getMember(O, e.value);
                if (null == t) return null;
                let n = p.default.getUser(t.userId);
                if (null == n) return null;
                let l = n.getAvatarURL(O, 20);
                return (0, r.jsx)(c.Xo$, {
                    size: c.EFr.SIZE_20,
                    src: l,
                    "aria-hidden": !0,
                });
            },
            [O],
        ),
        G = l.useCallback(
            (e) => {
                let { value: t } = e;
                _((e) => j(v({}, e), { authorIds: null != t ? [t] : [] }));
            },
            [_],
        ),
        L = l.useCallback(
            (e) => {
                _((t) => j(v({}, t), { message: null != e ? e : "" }));
            },
            [_],
        ),
        H = l.useCallback(() => {
            P(C), y();
        }, [y, P, C]),
        N = l.useCallback(() => {
            P(null), y();
        }, [P, y]),
        T = null != (t = C.authorIds[0]) ? t : "",
        U = (0, s.e7)([m.ZP], () => (null != O ? m.ZP.getMember(O, T) : null)),
        E = (0, s.e7)([p.default], () => (null != U ? p.default.getUser(U.userId) : null)),
        M = null != (a = null != (n = null == U ? void 0 : U.nick) ? n : null == E ? void 0 : E.username) ? a : "",
        R = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < d.ZR) return b.intl.formatToPlainString(b.t.Lj831L, { minLength: d.ZR });
                else return b.intl.string(b.t["4m7gtn"]);
            return e.message.length < d.ZR ? b.intl.formatToPlainString(b.t.TJGHXt, { minLength: d.ZR }) : null;
        })(C),
        X = l.useMemo(
            () => [
                {
                    text: b.intl.string(b.t["ETE/oC"]),
                    onClick: y,
                    variant: "secondary",
                },
                {
                    text: b.intl.string(b.t["R3BPH+"]),
                    onClick: H,
                    variant: "primary",
                    disabled: 0 === C.message.length || null != R,
                },
            ],
            [R, H, y, C.message.length],
        );
    return (0, r.jsxs)(o.IX, {
        transitionState: k,
        onClose: y,
        children: [
            (0, r.jsx)("div", {
                className: x.closeButton,
                children: (0, r.jsx)(u.PZ7, { onClick: y }),
            }),
            (0, r.jsxs)("div", {
                className: x.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.formGroup,
                        children: [
                            (0, r.jsxs)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [b.intl.string(b.t.zNQfQy), (0, r.jsx)(h.Z, {})],
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: b.intl.string(b.t.mQHK2S),
                            }),
                            (0, r.jsx)(c.VcW, {
                                value: {
                                    value: T,
                                    label: M,
                                },
                                renderOptionPrefix: S,
                                options: Z,
                                onChange: G,
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
                                color: "header-primary",
                                children: b.intl.string(b.t.SHQcv7),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: b.intl.format(b.t["6biC4R"], {}),
                            }),
                            (0, r.jsx)(c.Kx8, {
                                placeholder: b.intl.string(b.t["kX/Sbx"]),
                                value: C.message,
                                onChange: L,
                                maxLength: d.W4,
                            }),
                            null != R
                                ? (0, r.jsx)(c.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      children: R,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(o.Go$, {
                actions: X,
                leading: (0, r.jsx)(c.Avr, {
                    text: b.intl.string(b.t.N86XcP),
                    onClick: N,
                    variant: "critical",
                }),
            }),
        ],
    });
}
