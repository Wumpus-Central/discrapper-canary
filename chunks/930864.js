n.d(t, { ForwardModal: () => E }), n(388685);
var a = n(951288),
    l = n(647438),
    r = n(392711),
    i = n(442837),
    s = n(82659),
    o = n(103866),
    c = n(481060),
    u = n(430742),
    d = n(752305),
    h = n(348245),
    m = n(849522),
    g = n(359110),
    f = n(987509),
    _ = n(72214),
    p = n(592125),
    b = n(703558),
    w = n(375954),
    v = n(823379),
    x = n(859155),
    y = n(784384),
    P = n(822869),
    C = n(895442),
    j = n(757853),
    O = n(388275),
    I = n(912332),
    S = n(646746),
    Z = n(819727),
    R = n(388032),
    T = n(132358),
    k = n(621054);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    var { message: t, initialSelectedDestinations: E, forwardOptions: F, onClose: N, onRequestSent: A } = e,
        L = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        l = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent"]);
    let { channel_id: V, id: W } = t,
        G = l.useMemo(() => (0, f.dL)(V), [V]),
        [U, B] = l.useState(!1),
        K = (0, i.e7)([w.Z], () => {
            var e;
            return null != (e = w.Z.getMessage(t.channel_id, t.id)) ? e : t;
        }, [t]),
        H = (0, i.e7)([p.Z], () => p.Z.getChannel(V), [V]),
        Q = (0, P.ZF)(),
        Y = (0, P.mh)(),
        q = l.useRef(0),
        X = l.useRef(0),
        [z, J] = l.useState(E),
        $ = z.length,
        ee = $ >= Z.G,
        et = (0, y.nm)(z),
        en = (0, i.e7)([b.Z], () => b.Z.getDraft(K.channel_id, b.d.ForwardContextMessage)),
        [ea, el] = l.useState(() => (0, d.eK)(en)),
        er = (0, y.y)(z),
        ei = (0, m.Z)(),
        [es, eo] = l.useState(""),
        { results: ec, updateSearchText: eu } = (0, _.s)({
            selectedDestinations: z,
            originDestination: G,
            includeMissingDMs: !0,
        }),
        ed = l.useCallback(
            (e) => {
                eo(e), eu(e);
            },
            [eu],
        ),
        eh = l.useCallback(
            (e) => {
                ed(e), (X.current += 1), "" !== e && Y(V, W);
            },
            [V, W, Y, ed],
        ),
        em = l.useCallback(() => {
            ed("");
        }, [ed]),
        eg = l.useCallback(async () => {
            (0, P.sF)({
                channelId: V,
                messageId: W,
                numDestinationChanges: q.current,
                numQueryChanges: X.current,
            }),
                await N();
        }, [V, W, N]),
        ef = l.useRef(null);
    l.useEffect(() => {
        if ("" === es) {
            var e;
            null == (e = ef.current) || e.focus();
        }
    }, [es]);
    let e_ = l.useMemo(
            () =>
                (0, r.throttle)(
                    () => {
                        (0, c.showToast)((0, c.createToast)(R.intl.string(R.t.kwmYkp), c.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1,
                    },
                ),
            [],
        ),
        ep = l.useCallback(
            (e) => {
                Q(V, W, "" !== es),
                    J((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: a } = t;
                            return n === e.type && a === e.id;
                        });
                        if (-1 === n) return ee ? t : (ed(""), (q.current += 1), [e, ...t]);
                        let a = [...t];
                        return a.splice(n, 1), (q.current += 1), a;
                    });
            },
            [V, ee, W, es, ed, Q],
        ),
        eb = l.useCallback(
            async function (e) {
                var l;
                let {
                        withMessage: r,
                        transitionToDestination: i,
                        closeAfterSend: s,
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = null != (l = w.Z.getMessage(V, W)) ? l : t;
                if (null == o)
                    return void (0, c.showToast)((0, c.createToast)(R.intl.string(R.t.R0RpRU), c.ToastType.FAILURE));
                B(!0);
                let u = (await Promise.all(e.map(f.qx))).filter(v.lm);
                if (
                    (0, C.Z)(o, u) &&
                    !(await new Promise((e) => {
                        (0, c.ZDy)(async () => {
                            let { default: t } = await n.e("88643").then(n.bind(n, 466080));
                            return (n) =>
                                (0, a.jsx)(
                                    t,
                                    M(D({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1),
                                    }),
                                );
                        });
                    }))
                )
                    return void B(!1);
                s && (0, I.mc)(),
                    null == A || A(),
                    i &&
                        (await h.Z.fetchMessages({ channelId: u[0] }),
                        (0, g.Kh)(u[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let d = await x.Z.sendForwards(o, u, M(D({}, F), { withMessage: r })),
                    m = u.some((e) => {
                        let t = p.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    d.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, P.gP)({
                        channelId: V,
                        messageId: W,
                        hasError: !1,
                        hasContextMessage: null != r && "" !== r,
                        numDestinations: u.length,
                        numDestinationChanges: q.current,
                        numQueryChanges: X.current,
                        anyDestinationHasSlowmode: m,
                    }),
                        e_();
                    return;
                }
                (0, P.gP)({
                    channelId: V,
                    messageId: W,
                    hasError: !0,
                    hasContextMessage: null != r && "" !== r,
                    numDestinations: u.length,
                    numDestinationChanges: q.current,
                    numQueryChanges: X.current,
                    anyDestinationHasSlowmode: m,
                });
                let _ = e.filter((e, t) => "rejected" === d[t].status);
                (0, I.Np)({
                    message: o,
                    failedDestinations: _,
                    forwardOptions: F,
                });
            },
            [V, F, W, t, A, e_],
        ),
        ew = l.useCallback(
            (e) => {
                eb(z, {
                    withMessage: e,
                    transitionToDestination: 1 === z.length,
                    closeAfterSend: !0,
                });
            },
            [eb, z],
        ),
        ev = l.useCallback(() => {
            u.Z.clearDraft(K.channel_id, b.d.ForwardContextMessage), ew(ea.textValue);
        }, [K.channel_id, ea.textValue, ew]);
    if (null == K || null == H) return null;
    let ex =
            ec.length > 0
                ? (0, a.jsx)(j.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: ec,
                      rowMode: j.G.TOGGLE,
                      message: K,
                      originChannel: H,
                      handleToggleDestination: ep,
                      selectedDestinations: z,
                      disableSelection: ee,
                  })
                : (0, a.jsx)(o.f, {
                      children: (0, a.jsxs)("div", {
                          className: T.noResults,
                          children: [
                              (0, a.jsx)("img", {
                                  className: T.noResultsImg,
                                  src: k,
                                  alt: "",
                              }),
                              (0, a.jsx)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.V6nAfH),
                              }),
                          ],
                      }),
                  }),
        ey = $ <= 1 ? R.intl.string(R.t.TXNS7e) : R.intl.formatToPlainString(R.t.jWtYUl, { count: $ });
    return (0, a.jsx)(
        s.Modal,
        M(D({}, L), {
            onClose: eg,
            title: R.intl.string(R.t["+SkRRk"]),
            subtitle: ee ? R.intl.formatToPlainString(R.t["3Fbkio"], { count: Z.G }) : R.intl.string(R.t["VA+btL"]),
            input: (0, a.jsx)(c.E1j, {
                ref: ef,
                query: es,
                onChange: eh,
                onClear: em,
                placeholder: R.intl.string(R.t["5h0QOD"]),
                "aria-label": R.intl.string(R.t["5h0QOD"]),
                autoFocus: !0,
            }),
            preview: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(S.O, {
                        message: K,
                        forwardOptions: F,
                        channel: et,
                    }),
                    er.length > 0 &&
                        ea.textValue.length > 0 &&
                        (0, a.jsx)(c.Text, {
                            className: T.slowmodeWarning,
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: R.intl.format(R.t.xJFpio, {
                                count: er.length,
                                channelNames: er.join(", "),
                            }),
                        }),
                ],
            }),
            actionBarInput: (0, a.jsx)(O._, {
                message: K,
                canSend: $ > 0,
                selectedDestinations: z,
                isSending: U,
                onSend: ew,
                inputValue: ea,
                setInputValue: el,
            }),
            actions: [
                {
                    variant: "primary",
                    text: ey,
                    onClick: ev,
                    disabled: $ <= 0 || ea.textValue.length > ei,
                    loading: U,
                    icon: c.Uuj,
                    iconPosition: "end",
                },
            ],
            children: ex,
        }),
    );
}
