n.d(t, { default: () => j }), n(388685);
var r = n(54381),
    a = n(473749),
    l = n(658722),
    o = n.n(l),
    i = n(793030),
    s = n(399606),
    c = n(481060),
    u = n(734893),
    d = n(271383),
    g = n(430824),
    m = n(594174),
    p = n(903518),
    f = n(580357),
    h = n(388032),
    x = n(609442);
function b(e) {
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
    var t;
    let { transitionState: n, onClose: l, guildId: j, welcomeMessage: k, onSave: y } = e,
        [O, I] = a.useState(b({}, k)),
        C = (0, s.e7)([g.Z], () => g.Z.getGuild(j)),
        P = a.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    d.ZP.getMembers(j)
                        .filter((n) => {
                            var r;
                            let a = m.default.getUser(n.userId);
                            if ((null != a && (t[n.userId] = a), null == C || null == a || !(0, p.Y)(C, a))) return !1;
                            let l = ""
                                .concat(null != (r = n.nick) ? r : "", " ")
                                .concat(null == a ? void 0 : a.username);
                            return o()(e.toLowerCase(), l.toLowerCase());
                        })
                        .map((e) => {
                            var n, a, l;
                            return {
                                id: e.userId,
                                value: e.userId,
                                label:
                                    null !=
                                    (l = null != (a = e.nick) ? a : null == (n = t[e.userId]) ? void 0 : n.username)
                                        ? l
                                        : "",
                                leading:
                                    null != t[e.userId]
                                        ? (0, r.jsx)(c.Xo$, {
                                              size: c.EFr.SIZE_20,
                                              src: t[e.userId].getAvatarURL(j, 20),
                                              "aria-hidden": !0,
                                          })
                                        : void 0,
                            };
                        }),
                );
            },
            [j, C],
        ),
        w = a.useCallback(
            (e) => {
                I((t) => v(b({}, t), { authorIds: null != e ? [e] : [] }));
            },
            [I],
        ),
        S = a.useCallback(
            (e) => {
                I((t) => v(b({}, t), { message: null != e ? e : "" }));
            },
            [I],
        ),
        L = a.useCallback(() => {
            y(O), l();
        }, [l, y, O]),
        Z = a.useCallback(() => {
            y(null), l();
        }, [y, l]),
        G = null != (t = O.authorIds[0]) ? t : "",
        T = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < u.ZR) return h.intl.formatToPlainString(h.t.Lj831L, { minLength: u.ZR });
                else return h.intl.string(h.t["4m7gtn"]);
            return e.message.length < u.ZR ? h.intl.formatToPlainString(h.t.TJGHXt, { minLength: u.ZR }) : null;
        })(O),
        E = a.useMemo(
            () => [
                {
                    text: h.intl.string(h.t["ETE/oC"]),
                    onClick: l,
                    variant: "secondary",
                },
                {
                    text: h.intl.string(h.t["R3BPH+"]),
                    onClick: L,
                    variant: "primary",
                    disabled: 0 === O.message.length || null != T,
                },
            ],
            [T, L, l, O.message.length],
        );
    return (0, r.jsxs)(i.Modal, {
        title: h.intl.string(h.t.UnLrit),
        transitionState: n,
        onClose: l,
        actions: E,
        actionBarInput: (0, r.jsx)(c.Avr, {
            text: h.intl.string(h.t.N86XcP),
            onClick: Z,
            variant: "critical",
        }),
        children: [
            (0, r.jsxs)("div", {
                className: x.formGroup,
                children: [
                    (0, r.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [h.intl.string(h.t.zNQfQy), (0, r.jsx)(f.Z, {})],
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: h.intl.string(h.t.mQHK2S),
                    }),
                    (0, r.jsx)(c.VcW, {
                        selectionMode: "single",
                        value: null != G ? G : void 0,
                        options: P,
                        onSelectionChange: w,
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
                        value: O.message,
                        onChange: S,
                        maxLength: u.W4,
                    }),
                    null != T
                        ? (0, r.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: T,
                          })
                        : null,
                ],
            }),
        ],
    });
}
