n.d(t, { ForwardModal: () => w }), n(388685);
var l = n(255367),
    r = n(73800),
    a = n(392711),
    i = n(442837),
    s = n(481060),
    o = n(348245),
    c = n(359110),
    u = n(987509),
    d = n(72214),
    h = n(592125),
    f = n(375954),
    m = n(823379),
    g = n(859155),
    _ = n(822869),
    p = n(895442),
    b = n(757853),
    y = n(388275),
    v = n(912332),
    x = n(819727),
    E = n(388032),
    C = n(790505),
    S = n(621054);
function O(e) {
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
function P(e, t) {
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
function w(e) {
    var { message: t, initialSelectedDestinations: w, forwardOptions: Z, onClose: N, onRequestSent: j } = e,
        I = (function (e, t) {
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
    let { channel_id: T, id: L } = t,
        R = r.useMemo(() => (0, u.dL)(T), [T]),
        [A, D] = r.useState(!1),
        M = (0, i.e7)([f.Z], () => {
            var e;
            return null != (e = f.Z.getMessage(t.channel_id, t.id)) ? e : t;
        }, [t]),
        k = (0, i.e7)([h.Z], () => h.Z.getChannel(T), [T]),
        U = (0, _.ZF)(),
        W = (0, _.mh)(),
        G = r.useRef(0),
        F = r.useRef(0),
        [H, V] = r.useState(w),
        z = H.length,
        K = z >= x.G,
        [Q, B] = r.useState(""),
        { results: q, updateSearchText: X } = (0, d.s)({
            selectedDestinations: H,
            originDestination: R,
            includeMissingDMs: !0,
        }),
        Y = r.useCallback(
            (e) => {
                B(e), X(e);
            },
            [X],
        ),
        J = r.useCallback(
            (e) => {
                Y(e), (F.current += 1), "" !== e && W(T, L);
            },
            [T, L, W, Y],
        ),
        $ = r.useCallback(() => {
            Y("");
        }, [Y]),
        ee = r.useCallback(() => {
            (0, _.sF)({
                channelId: T,
                messageId: L,
                numDestinationChanges: G.current,
                numQueryChanges: F.current,
            }),
                N();
        }, [T, L, N]),
        et = r.useRef(null);
    r.useEffect(() => {
        if ("" === Q) {
            var e;
            null == (e = et.current) || e.focus();
        }
    }, [Q]);
    let en = r.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, s.showToast)((0, s.createToast)(E.intl.string(E.t.kwmYkp), s.ToastType.FORWARD));
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
                U(T, L, "" !== Q),
                    V((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return K ? t : (Y(""), (G.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (G.current += 1), l;
                    });
            },
            [T, K, L, Q, Y, U],
        ),
        er = r.useCallback(
            async function (e) {
                var r;
                let {
                        withMessage: a,
                        transitionToDestination: i,
                        closeAfterSend: d,
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    b = null != (r = f.Z.getMessage(T, L)) ? r : t;
                if (null == b)
                    return void (0, s.showToast)((0, s.createToast)(E.intl.string(E.t.R0RpRU), s.ToastType.FAILURE));
                D(!0);
                let y = (await Promise.all(e.map(u.qx))).filter(m.lm);
                if (
                    (0, p.Z)(b, y) &&
                    !(await new Promise((e) => {
                        (0, s.ZDy)(async () => {
                            let { default: t } = await n.e("88643").then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    P(O({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1),
                                    }),
                                );
                        });
                    }))
                )
                    return void D(!1);
                d && (0, v.mc)(),
                    null == j || j(),
                    i &&
                        (await o.Z.fetchMessages({ channelId: y[0] }),
                        (0, c.Kh)(y[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let x = await g.Z.sendForwards(b, y, P(O({}, Z), { withMessage: a })),
                    C = y.some((e) => {
                        let t = h.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    x.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, _.gP)({
                        channelId: T,
                        messageId: L,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: y.length,
                        numDestinationChanges: G.current,
                        numQueryChanges: F.current,
                        anyDestinationHasSlowmode: C,
                    }),
                        en();
                    return;
                }
                (0, _.gP)({
                    channelId: T,
                    messageId: L,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: y.length,
                    numDestinationChanges: G.current,
                    numQueryChanges: F.current,
                    anyDestinationHasSlowmode: C,
                });
                let S = e.filter((e, t) => "rejected" === x[t].status);
                (0, v.Np)({
                    message: b,
                    failedDestinations: S,
                    forwardOptions: Z,
                });
            },
            [T, Z, L, t, j, en],
        ),
        ea = r.useCallback(
            (e) => {
                er(H, {
                    withMessage: e,
                    transitionToDestination: 1 === H.length,
                    closeAfterSend: !0,
                });
            },
            [er, H],
        );
    if (null == M || null == k) return null;
    let ei =
            q.length > 0
                ? (0, l.jsx)(b.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: q,
                      rowMode: b.G.TOGGLE,
                      message: M,
                      originChannel: k,
                      handleToggleDestination: el,
                      selectedDestinations: H,
                      disableSelection: K,
                  })
                : (0, l.jsxs)(s.hzk, {
                      className: C.noResults,
                      children: [
                          (0, l.jsx)("img", {
                              className: C.noResultsImg,
                              src: S,
                              alt: "",
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(E.t.V6nAfH),
                          }),
                      ],
                  }),
        es = z <= 1 ? E.intl.string(E.t.TXNS7e) : E.intl.formatToPlainString(E.t.jWtYUl, { count: z });
    return (0, l.jsxs)(
        s.Y0X,
        P(
            O(
                {
                    className: C.modal,
                    "aria-label": E.intl.string(E.t["+SkRRk"]),
                },
                I,
            ),
            {
                parentComponent: "ForwardModal",
                children: [
                    (0, l.jsxs)(s.xBx, {
                        className: C.header,
                        children: [
                            (0, l.jsxs)("div", {
                                className: C.titleLine,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: C.title,
                                        children: (0, l.jsx)(s.y5t, {
                                            component: (0, l.jsx)(s.X6q, {
                                                variant: "heading-lg/semibold",
                                                children: E.intl.string(E.t["+SkRRk"]),
                                            }),
                                            children: K
                                                ? (0, l.jsx)(s.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-feedback-warning",
                                                      children: E.intl.format(E.t["3Fbkio"], { count: x.G }),
                                                  })
                                                : (0, l.jsx)(s.X6q, {
                                                      variant: "heading-sm/normal",
                                                      color: "header-muted",
                                                      children: E.intl.string(E.t["VA+btL"]),
                                                  }),
                                        }),
                                    }),
                                    (0, l.jsx)(s.olH, {
                                        className: C.closeButton,
                                        onClick: ee,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(s.E1j, {
                                ref: et,
                                query: Q,
                                onChange: J,
                                onClear: $,
                                placeholder: E.intl.string(E.t["5h0QOD"]),
                                "aria-label": E.intl.string(E.t["5h0QOD"]),
                                autoFocus: !0,
                            }),
                        ],
                    }),
                    ei,
                    (0, l.jsx)(y.n, {
                        message: M,
                        forwardOptions: Z,
                        sendLabel: es,
                        canSend: z > 0,
                        selectedDestinations: H,
                        isSending: A,
                        onSend: ea,
                    }),
                ],
            },
        ),
    );
}
