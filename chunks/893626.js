r.d(n, { default: () => y }), r(388685);
var t = r(951288),
    l = r(647438),
    a = r(658722),
    o = r.n(a),
    i = r(793030),
    s = r(399606),
    u = r(159691),
    c = r(481060),
    d = r(734893),
    m = r(271383),
    g = r(430824),
    p = r(594174),
    h = r(903518),
    f = r(580357),
    b = r(388032),
    v = r(353441);
function x(e) {
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
function j(e, n) {
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
function y(e) {
    var n, r, a;
    let { transitionState: y, onClose: k, guildId: O, welcomeMessage: I, onSave: P } = e,
        [C, _] = l.useState(x({}, I)),
        w = (0, s.e7)([g.Z], () => g.Z.getGuild(O)),
        Z = l.useCallback(
            (e) => {
                let n = {};
                return Promise.resolve(
                    m.ZP.getMembers(O)
                        .filter((r) => {
                            var t;
                            let l = p.default.getUser(r.userId);
                            if ((null != l && (n[r.userId] = l), null == w || null == l || !(0, h.Y)(w, l))) return !1;
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
            [O, w],
        ),
        S = l.useCallback(
            (e) => {
                if (null == O || null == e) return null;
                let n = m.ZP.getMember(O, e.value);
                if (null == n) return null;
                let r = p.default.getUser(n.userId);
                if (null == r) return null;
                let l = r.getAvatarURL(O, 20);
                return (0, t.jsx)(c.Xo$, {
                    size: c.EFr.SIZE_20,
                    src: l,
                    "aria-hidden": !0,
                });
            },
            [O],
        ),
        G = l.useCallback(
            (e) => {
                let { value: n } = e;
                _((e) => j(x({}, e), { authorIds: null != n ? [n] : [] }));
            },
            [_],
        ),
        N = l.useCallback(
            (e) => {
                _((n) => j(x({}, n), { message: null != e ? e : "" }));
            },
            [_],
        ),
        L = l.useCallback(() => {
            P(C), k();
        }, [k, P, C]),
        T = l.useCallback(() => {
            P(null), k();
        }, [P, k]),
        U = null != (n = C.authorIds[0]) ? n : "",
        E = (0, s.e7)([m.ZP], () => (null != O ? m.ZP.getMember(O, U) : null)),
        H = (0, s.e7)([p.default], () => (null != E ? p.default.getUser(E.userId) : null)),
        M = null != (a = null != (r = null == E ? void 0 : E.nick) ? r : null == H ? void 0 : H.username) ? a : "",
        X = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < d.ZR) return b.intl.formatToPlainString(b.t.Lj831N, { minLength: d.ZR });
                else return b.intl.string(b.t["4m7gtr"]);
            return e.message.length < d.ZR ? b.intl.formatToPlainString(b.t.TJGHXl, { minLength: d.ZR }) : null;
        })(C),
        R = l.useMemo(
            () => [
                {
                    text: b.intl.string(b.t["ETE/oK"]),
                    onClick: k,
                    variant: "secondary",
                },
                {
                    text: b.intl.string(b.t.R3BPHx),
                    onClick: L,
                    variant: "primary",
                    disabled: 0 === C.message.length || null != X,
                },
            ],
            [X, L, k, C.message.length],
        );
    return (0, t.jsxs)(i.IX, {
        transitionState: y,
        onClose: k,
        children: [
            (0, t.jsx)("div", {
                className: v.closeButton,
                children: (0, t.jsx)(u.PZ7, { onClick: k }),
            }),
            (0, t.jsxs)("div", {
                className: v.container,
                children: [
                    (0, t.jsxs)("div", {
                        className: v.formGroup,
                        children: [
                            (0, t.jsxs)(c.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [b.intl.string(b.t.zNQfQ0), (0, t.jsx)(f.Z, {})],
                            }),
                            (0, t.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: b.intl.string(b.t.mQHK2d),
                            }),
                            (0, t.jsx)(c.VcW, {
                                value: {
                                    value: U,
                                    label: M,
                                },
                                renderOptionPrefix: S,
                                options: Z,
                                onChange: G,
                                filter: !1,
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: v.separator }),
                    (0, t.jsxs)("div", {
                        className: v.formGroup,
                        children: [
                            (0, t.jsx)(c.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: b.intl.string(b.t.SHQcv7),
                            }),
                            (0, t.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: b.intl.format(b.t["6biC4e"], {}),
                            }),
                            (0, t.jsx)(c.Kx8, {
                                placeholder: b.intl.string(b.t["kX/Sb2"]),
                                value: C.message,
                                onChange: N,
                                maxLength: d.W4,
                            }),
                            null != X
                                ? (0, t.jsx)(c.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-danger",
                                      children: X,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, t.jsx)(i.Go$, {
                actions: R,
                leading: (0, t.jsx)(c.Avr, {
                    text: b.intl.string(b.t.N86XcH),
                    onClick: T,
                    variant: "critical",
                }),
            }),
        ],
    });
}
