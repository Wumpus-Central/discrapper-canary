n.d(t, { ForwardModal: () => M }), n(388685);
var a = n(951288),
    l = n(647438),
    r = n(392711),
    i = n(793030),
    s = n(442837),
    o = n(481060),
    c = n(430742),
    u = n(752305),
    d = n(348245),
    h = n(849522),
    m = n(359110),
    g = n(987509),
    f = n(72214),
    p = n(592125),
    b = n(703558),
    _ = n(375954),
    w = n(823379),
    v = n(859155),
    x = n(784384),
    y = n(822869),
    P = n(895442),
    C = n(757853),
    j = n(388275),
    O = n(912332),
    I = n(646746),
    S = n(819727),
    Z = n(388032),
    R = n(132358),
    k = n(621054);
function T(e) {
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
function D(e, t) {
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
function M(e) {
    var { message: t, initialSelectedDestinations: M, forwardOptions: F, onClose: E, onRequestSent: N } = e,
        A = (function (e, t) {
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
    let { channel_id: L, id: V } = t,
        W = l.useMemo(() => (0, g.dL)(L), [L]),
        [U, G] = l.useState(!1),
        B = (0, s.e7)([_.Z], () => {
            var e;
            return null != (e = _.Z.getMessage(t.channel_id, t.id)) ? e : t;
        }, [t]),
        K = (0, s.e7)([p.Z], () => p.Z.getChannel(L), [L]),
        H = (0, y.ZF)(),
        Q = (0, y.mh)(),
        Y = l.useRef(0),
        q = l.useRef(0),
        [X, z] = l.useState(M),
        J = X.length,
        $ = J >= S.G,
        ee = (0, x.nm)(X),
        et = (0, s.e7)([b.Z], () => b.Z.getDraft(B.channel_id, b.d.ForwardContextMessage)),
        [en, ea] = l.useState(() => (0, u.eK)(et)),
        el = (0, x.y)(X),
        er = (0, h.Z)(),
        [ei, es] = l.useState(""),
        { results: eo, updateSearchText: ec } = (0, f.s)({
            selectedDestinations: X,
            originDestination: W,
            includeMissingDMs: !0,
        }),
        eu = l.useCallback(
            (e) => {
                es(e), ec(e);
            },
            [ec],
        ),
        ed = l.useCallback(
            (e) => {
                eu(e), (q.current += 1), "" !== e && Q(L, V);
            },
            [L, V, Q, eu],
        ),
        eh = l.useCallback(() => {
            eu("");
        }, [eu]),
        em = l.useCallback(async () => {
            (0, y.sF)({
                channelId: L,
                messageId: V,
                numDestinationChanges: Y.current,
                numQueryChanges: q.current,
            }),
                await E();
        }, [L, V, E]),
        eg = l.useRef(null);
    l.useEffect(() => {
        if ("" === ei) {
            var e;
            null == (e = eg.current) || e.focus();
        }
    }, [ei]);
    let ef = l.useMemo(
            () =>
                (0, r.throttle)(
                    () => {
                        (0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.kwmYkp), o.ToastType.FORWARD));
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
                H(L, V, "" !== ei),
                    z((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: a } = t;
                            return n === e.type && a === e.id;
                        });
                        if (-1 === n) return $ ? t : (eu(""), (Y.current += 1), [e, ...t]);
                        let a = [...t];
                        return a.splice(n, 1), (Y.current += 1), a;
                    });
            },
            [L, $, V, ei, eu, H],
        ),
        eb = l.useCallback(
            async function (e) {
                var l;
                let {
                        withMessage: r,
                        transitionToDestination: i,
                        closeAfterSend: s,
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    c = null != (l = _.Z.getMessage(L, V)) ? l : t;
                if (null == c)
                    return void (0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.R0RpRU), o.ToastType.FAILURE));
                G(!0);
                let u = (await Promise.all(e.map(g.qx))).filter(w.lm);
                if (
                    (0, P.Z)(c, u) &&
                    !(await new Promise((e) => {
                        (0, o.ZDy)(async () => {
                            let { default: t } = await n.e("88643").then(n.bind(n, 466080));
                            return (n) =>
                                (0, a.jsx)(
                                    t,
                                    D(T({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1),
                                    }),
                                );
                        });
                    }))
                )
                    return void G(!1);
                s && (0, O.mc)(),
                    null == N || N(),
                    i &&
                        (await d.Z.fetchMessages({ channelId: u[0] }),
                        (0, m.Kh)(u[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let h = await v.Z.sendForwards(c, u, D(T({}, F), { withMessage: r })),
                    f = u.some((e) => {
                        let t = p.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    h.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, y.gP)({
                        channelId: L,
                        messageId: V,
                        hasError: !1,
                        hasContextMessage: null != r && "" !== r,
                        numDestinations: u.length,
                        numDestinationChanges: Y.current,
                        numQueryChanges: q.current,
                        anyDestinationHasSlowmode: f,
                    }),
                        ef();
                    return;
                }
                (0, y.gP)({
                    channelId: L,
                    messageId: V,
                    hasError: !0,
                    hasContextMessage: null != r && "" !== r,
                    numDestinations: u.length,
                    numDestinationChanges: Y.current,
                    numQueryChanges: q.current,
                    anyDestinationHasSlowmode: f,
                });
                let b = e.filter((e, t) => "rejected" === h[t].status);
                (0, O.Np)({
                    message: c,
                    failedDestinations: b,
                    forwardOptions: F,
                });
            },
            [L, F, V, t, N, ef],
        ),
        e_ = l.useCallback(
            (e) => {
                eb(X, {
                    withMessage: e,
                    transitionToDestination: 1 === X.length,
                    closeAfterSend: !0,
                });
            },
            [eb, X],
        ),
        ew = l.useCallback(() => {
            c.Z.clearDraft(B.channel_id, b.d.ForwardContextMessage), e_(en.textValue);
        }, [B.channel_id, en.textValue, e_]);
    if (null == B || null == K) return null;
    let ev =
            eo.length > 0
                ? (0, a.jsx)(C.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: eo,
                      message: B,
                      originChannel: K,
                      handleToggleDestination: ep,
                      selectedDestinations: X,
                      disableSelection: $,
                  })
                : (0, a.jsx)(i.fef, {
                      children: (0, a.jsxs)("div", {
                          className: R.noResults,
                          children: [
                              (0, a.jsx)("img", {
                                  className: R.noResultsImg,
                                  src: k,
                                  alt: "",
                              }),
                              (0, a.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: Z.intl.string(Z.t.V6nAfH),
                              }),
                          ],
                      }),
                  }),
        ex = J <= 1 ? Z.intl.string(Z.t.TXNS7e) : Z.intl.formatToPlainString(Z.t.jWtYUl, { count: J });
    return (0, a.jsx)(
        i.Modal,
        D(T({}, A), {
            onClose: em,
            title: Z.intl.string(Z.t["+SkRRk"]),
            subtitle: $ ? Z.intl.formatToPlainString(Z.t["3Fbkio"], { count: S.G }) : Z.intl.string(Z.t["VA+btL"]),
            input: (0, a.jsx)(o.E1j, {
                ref: eg,
                query: ei,
                onChange: ed,
                onClear: eh,
                placeholder: Z.intl.string(Z.t["5h0QOD"]),
                "aria-label": Z.intl.string(Z.t["5h0QOD"]),
                autoFocus: !0,
            }),
            preview: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(I.O, {
                        message: B,
                        forwardOptions: F,
                        channel: ee,
                    }),
                    el.length > 0 &&
                        en.textValue.length > 0 &&
                        (0, a.jsx)(o.Text, {
                            className: R.slowmodeWarning,
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: Z.intl.format(Z.t.xJFpio, {
                                count: el.length,
                                channelNames: el.join(", "),
                            }),
                        }),
                ],
            }),
            actionBarInput: (0, a.jsx)(j._, {
                message: B,
                canSend: J > 0,
                selectedDestinations: X,
                isSending: U,
                onSend: e_,
                inputValue: en,
                setInputValue: ea,
            }),
            actions: [
                {
                    variant: "primary",
                    text: ex,
                    onClick: ew,
                    disabled: J <= 0 || en.textValue.length > er,
                    loading: U,
                    icon: o.Uuj,
                    iconPosition: "end",
                },
            ],
            children: ev,
        }),
    );
}
