n.d(t, { ForwardModal: () => E }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(392711),
    s = n(442837),
    i = n(481060),
    o = n(348245),
    u = n(359110),
    c = n(987509),
    d = n(72214),
    h = n(592125),
    f = n(375954),
    m = n(823379),
    g = n(859155),
    p = n(822869),
    b = n(895442),
    _ = n(757853),
    v = n(388275),
    x = n(912332),
    y = n(819727),
    w = n(388032),
    j = n(773921),
    O = n(621054);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    var { message: t, initialSelectedDestinations: E, forwardOptions: C, onClose: Z, onRequestSent: N } = e,
        L = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        a = Object.keys(e);
                    for (l = 0; l < a.length; l++) (n = a[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (l = 0; l < a.length; l++)
                    (n = a[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent"]);
    let { channel_id: M, id: T } = t,
        R = r.useMemo(() => (0, c.dL)(M), [M]),
        [D, I] = r.useState(!1),
        A = (0, s.e7)([f.Z], () => {
            var e;
            return null != (e = f.Z.getMessage(t.channel_id, t.id)) ? e : t;
        }, [t]),
        k = (0, s.e7)([h.Z], () => h.Z.getChannel(M), [M]),
        F = (0, p.ZF)(),
        W = (0, p.mh)(),
        G = r.useRef(0),
        U = r.useRef(0),
        [z, H] = r.useState(E),
        B = z.length,
        V = B >= y.G,
        [q, X] = r.useState(""),
        { results: Y, updateSearchText: K } = (0, d.s)({
            selectedDestinations: z,
            originDestination: R,
            includeMissingDMs: !0,
        }),
        J = r.useCallback(
            (e) => {
                X(e), K(e);
            },
            [K],
        ),
        Q = r.useCallback(
            (e) => {
                J(e), (U.current += 1), "" !== e && W(M, T);
            },
            [M, T, W, J],
        ),
        $ = r.useCallback(() => {
            J("");
        }, [J]),
        ee = r.useCallback(() => {
            (0, p.sF)({
                channelId: M,
                messageId: T,
                numDestinationChanges: G.current,
                numQueryChanges: U.current,
            }),
                Z();
        }, [M, T, Z]),
        et = r.useRef(null);
    r.useEffect(() => {
        if ("" === q) {
            var e;
            null == (e = et.current) || e.focus();
        }
    }, [q]);
    let en = r.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, i.showToast)((0, i.createToast)(w.intl.string(w.t.kwmYkp), i.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1,
                    },
                ),
            [],
        ),
        el = r.useCallback(
            (e) => {
                F(M, T, "" !== q),
                    H((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return V ? t : (J(""), (G.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (G.current += 1), l;
                    });
            },
            [M, V, T, q, J, F],
        ),
        er = r.useCallback(
            async function (e) {
                var r;
                let {
                        withMessage: a,
                        transitionToDestination: s,
                        closeAfterSend: d,
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    _ = null != (r = f.Z.getMessage(M, T)) ? r : t;
                if (null == _)
                    return void (0, i.showToast)((0, i.createToast)(w.intl.string(w.t.R0RpRU), i.ToastType.FAILURE));
                I(!0);
                let v = (await Promise.all(e.map(c.qx))).filter(m.lm);
                if (
                    (0, b.Z)(_, v) &&
                    !(await new Promise((e) => {
                        (0, i.ZDy)(async () => {
                            let { default: t } = await n.e("88643").then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    S(P({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1),
                                    }),
                                );
                        });
                    }))
                )
                    return void I(!1);
                d && (0, x.mc)(),
                    null == N || N(),
                    s &&
                        (await o.Z.fetchMessages({ channelId: v[0] }),
                        (0, u.Kh)(v[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let y = await g.Z.sendForwards(_, v, S(P({}, C), { withMessage: a })),
                    j = v.some((e) => {
                        let t = h.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    y.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, p.gP)({
                        channelId: M,
                        messageId: T,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: v.length,
                        numDestinationChanges: G.current,
                        numQueryChanges: U.current,
                        anyDestinationHasSlowmode: j,
                    }),
                        en();
                    return;
                }
                (0, p.gP)({
                    channelId: M,
                    messageId: T,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: v.length,
                    numDestinationChanges: G.current,
                    numQueryChanges: U.current,
                    anyDestinationHasSlowmode: j,
                });
                let O = e.filter((e, t) => "rejected" === y[t].status);
                (0, x.Np)({
                    message: _,
                    failedDestinations: O,
                    forwardOptions: C,
                });
            },
            [M, C, T, t, N, en],
        ),
        ea = r.useCallback(
            (e) => {
                er(z, {
                    withMessage: e,
                    transitionToDestination: 1 === z.length,
                    closeAfterSend: !0,
                });
            },
            [er, z],
        );
    if (null == A || null == k) return null;
    let es =
            Y.length > 0
                ? (0, l.jsx)(_.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: Y,
                      rowMode: _.G.TOGGLE,
                      message: A,
                      originChannel: k,
                      handleToggleDestination: el,
                      selectedDestinations: z,
                      disableSelection: V,
                  })
                : (0, l.jsxs)(i.hzk, {
                      className: j.noResults,
                      children: [
                          (0, l.jsx)("img", {
                              className: j.noResultsImg,
                              src: O,
                              alt: "",
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: w.intl.string(w.t.V6nAfH),
                          }),
                      ],
                  }),
        ei = B <= 1 ? w.intl.string(w.t.TXNS7e) : w.intl.formatToPlainString(w.t.jWtYUl, { count: B });
    return (0, l.jsxs)(
        i.Y0X,
        S(
            P(
                {
                    className: j.modal,
                    "aria-label": w.intl.string(w.t["+SkRRk"]),
                },
                L,
            ),
            {
                parentComponent: "ForwardModal",
                children: [
                    (0, l.jsxs)(i.xBx, {
                        className: j.header,
                        children: [
                            (0, l.jsxs)("div", {
                                className: j.titleLine,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: j.title,
                                        children: (0, l.jsx)(i.y5t, {
                                            component: (0, l.jsx)(i.X6q, {
                                                variant: "heading-lg/semibold",
                                                children: w.intl.string(w.t["+SkRRk"]),
                                            }),
                                            children: V
                                                ? (0, l.jsx)(i.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-feedback-warning",
                                                      children: w.intl.format(w.t["3Fbkio"], { count: y.G }),
                                                  })
                                                : (0, l.jsx)(i.X6q, {
                                                      variant: "heading-sm/normal",
                                                      color: "header-muted",
                                                      children: w.intl.string(w.t["VA+btL"]),
                                                  }),
                                        }),
                                    }),
                                    (0, l.jsx)(i.olH, {
                                        className: j.closeButton,
                                        onClick: ee,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(i.E1j, {
                                ref: et,
                                query: q,
                                onChange: Q,
                                onClear: $,
                                placeholder: w.intl.string(w.t["5h0QOD"]),
                                "aria-label": w.intl.string(w.t["5h0QOD"]),
                                autoFocus: !0,
                            }),
                        ],
                    }),
                    es,
                    (0, l.jsx)(v.n, {
                        message: A,
                        forwardOptions: C,
                        sendLabel: ei,
                        canSend: B > 0,
                        selectedDestinations: z,
                        isSending: D,
                        onSend: ea,
                    }),
                ],
            },
        ),
    );
}
