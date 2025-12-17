n.d(t, { ForwardModal: () => M }), n(388685);
var l = n(54381),
    a = n(473749),
    r = n(392711),
    i = n(793030),
    s = n(442837),
    o = n(481060),
    u = n(430742),
    c = n(752305),
    d = n(348245),
    h = n(849522),
    m = n(359110),
    g = n(987509),
    f = n(72214),
    p = n(592125),
    v = n(703558),
    x = n(375954),
    b = n(823379),
    w = n(859155),
    j = n(784384),
    C = n(822869),
    y = n(895442),
    P = n(388275),
    O = n(912332),
    S = n(646746),
    T = n(217031),
    k = n(819727),
    Z = n(388032),
    D = n(614934);
function R(e) {
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
function E(e, t) {
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
function _() {
    return (0, l.jsx)("div", {
        className: D.noResults,
        children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: Z.intl.string(Z.t.V6nAfF),
        }),
    });
}
function M(e) {
    var {
            message: t,
            initialSelectedDestinations: M = [],
            forwardOptions: N,
            onClose: I,
            onRequestSent: F,
            customTitle: A,
            customSubtitle: V,
            customPreview: L,
            customSendHandler: U,
            customValidateDestination: G,
            additionalActions: B,
            source: W,
        } = e,
        H = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        a = {},
                        r = Object.keys(e);
                    for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, [
            "message",
            "initialSelectedDestinations",
            "forwardOptions",
            "onClose",
            "onRequestSent",
            "customTitle",
            "customSubtitle",
            "customPreview",
            "customSendHandler",
            "customValidateDestination",
            "additionalActions",
            "source",
        ]);
    let K = null == t ? void 0 : t.channel_id,
        Q = null == t ? void 0 : t.id,
        X = a.useMemo(() => (null != K ? (0, g.dL)(K) : void 0), [K]),
        [Y, q] = a.useState(!1),
        z = (0, s.e7)([x.Z], () => {
            var e;
            return "checkpoint" === W
                ? t
                : null != t
                  ? null != (e = x.Z.getMessage(t.channel_id, t.id))
                      ? e
                      : t
                  : void 0;
        }, [t, W]),
        J = (0, s.e7)([p.Z], () => (null != K ? p.Z.getChannel(K) : void 0), [K]),
        $ = (0, C.ZF)(),
        ee = (0, C.mh)(),
        et = a.useRef(0),
        en = a.useRef(0),
        [el, ea] = a.useState(M),
        er = el.length,
        ei = er >= k.G,
        es = (0, j.nm)(el),
        eo = (0, s.e7)([v.Z], () => (null != z ? v.Z.getDraft(z.channel_id, v.d.ForwardContextMessage) : "")),
        [eu, ec] = a.useState(() => (0, c.eK)(eo)),
        ed = (0, j.y)(el),
        eh = (0, h.Z)(),
        [em, eg] = a.useState(""),
        { results: ef, updateSearchText: ep } = (0, f.s)({
            selectedDestinations: el,
            originDestination: X,
            includeMissingDMs: !0,
        }),
        ev = a.useCallback(
            (e) => {
                eg(e), ep(e);
            },
            [ep],
        ),
        ex = a.useCallback(
            (e) => {
                ev(e), (en.current += 1), "" !== e && null != K && null != Q && ee(K, Q);
            },
            [K, Q, ee, ev],
        ),
        eb = a.useCallback(() => {
            ev("");
        }, [ev]),
        ew = a.useCallback(async () => {
            null != K &&
                null != Q &&
                (0, C.sF)({
                    channelId: K,
                    messageId: Q,
                    numDestinationChanges: et.current,
                    numQueryChanges: en.current,
                }),
                await I();
        }, [K, Q, I]),
        ej = a.useRef(null);
    a.useEffect(() => {
        if ("" === em) {
            var e;
            null == (e = ej.current) || e.focus();
        }
    }, [em]);
    let eC = a.useMemo(
            () =>
                (0, r.throttle)(
                    () => {
                        (0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.kwmYkt), o.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1,
                    },
                ),
            [],
        ),
        ey = a.useCallback(
            (e) => {
                null != K && null != Q && $(K, Q, "" !== em),
                    ea((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return ei ? t : (ev(""), (et.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (et.current += 1), l;
                    });
            },
            [K, ei, Q, em, ev, $],
        ),
        eP = a.useCallback(
            async function (e) {
                var a;
                let {
                    withMessage: r,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != U)
                    return void (await U(
                        e,
                        {
                            withMessage: r,
                            transitionToDestination: i,
                            closeAfterSend: s,
                        },
                        q,
                    ));
                if (null == K || null == Q)
                    return void (0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.R0RpRX), o.ToastType.FAILURE));
                let u = null != (a = x.Z.getMessage(K, Q)) ? a : t;
                if (null == u)
                    return void (0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.R0RpRX), o.ToastType.FAILURE));
                q(!0);
                let c = (await Promise.all(e.map(g.qx))).filter(b.lm);
                if (
                    (0, y.Z)(u, c) &&
                    !(await new Promise((e) => {
                        (0, o.ZDy)(async () => {
                            let { default: t } = await n.e("88643").then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    E(R({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1),
                                    }),
                                );
                        });
                    }))
                )
                    return void q(!1);
                s && (0, O.mc)(),
                    null == F || F(),
                    i &&
                        (await d.Z.fetchMessages({ channelId: c[0] }),
                        (0, m.Kh)(c[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let h = await w.Z.sendForwards(u, c, E(R({}, N), { withMessage: r })),
                    f = c.some((e) => {
                        let t = p.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    h.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, C.gP)({
                        channelId: K,
                        messageId: Q,
                        hasError: !1,
                        hasContextMessage: null != r && "" !== r,
                        numDestinations: c.length,
                        numDestinationChanges: et.current,
                        numQueryChanges: en.current,
                        anyDestinationHasSlowmode: f,
                    }),
                        eC();
                    return;
                }
                (0, C.gP)({
                    channelId: K,
                    messageId: Q,
                    hasError: !0,
                    hasContextMessage: null != r && "" !== r,
                    numDestinations: c.length,
                    numDestinationChanges: et.current,
                    numQueryChanges: en.current,
                    anyDestinationHasSlowmode: f,
                });
                let v = e.filter((e, t) => "rejected" === h[t].status);
                (0, O.Np)({
                    message: u,
                    failedDestinations: v,
                    forwardOptions: N,
                });
            },
            [K, N, Q, t, F, eC, U],
        ),
        eO = a.useCallback(
            (e) => {
                eP(el, {
                    withMessage: e,
                    transitionToDestination: 1 === el.length,
                    closeAfterSend: !0,
                });
            },
            [eP, el],
        ),
        eS = a.useCallback(() => {
            null != z && u.Z.clearDraft(z.channel_id, v.d.ForwardContextMessage), eO(eu.textValue);
        }, [z, eu.textValue, eO]),
        eT = (0, T.Y)({
            rowData: ef,
            message: z,
            originChannel: J,
            selectedDestinations: el,
            handleToggleDestination: ey,
            disableSelection: ei,
            validateDestination: G,
        }),
        ek = a.useMemo(
            () =>
                ef.length > 0
                    ? eT
                    : {
                          sections: [1],
                          sectionHeight: 0,
                          renderRow: () => (0, l.jsx)(_, {}),
                          rowHeight: 72,
                      },
            [ef, eT],
        ),
        eZ = er <= 1 ? Z.intl.string(Z.t.TXNS7S) : Z.intl.formatToPlainString(Z.t.jWtYUm, { count: er });
    return (0, l.jsx)(
        i.Modal,
        E(R({}, H), {
            onClose: ew,
            title: null != A ? A : Z.intl.string(Z.t["+SkRRj"]),
            subtitle:
                null != V
                    ? V
                    : ei
                      ? Z.intl.formatToPlainString(Z.t["3Fbkir"], { count: k.G })
                      : Z.intl.string(Z.t["VA+btJ"]),
            input: (0, l.jsx)(o.E1j, {
                ref: ej,
                query: em,
                onChange: ex,
                onClear: eb,
                placeholder: Z.intl.string(Z.t["5h0QOP"]),
                "aria-label": Z.intl.string(Z.t["5h0QOP"]),
                autoFocus: !0,
            }),
            preview:
                null != L
                    ? L
                    : null != z &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(S.O, {
                                  message: z,
                                  forwardOptions: N,
                                  channel: es,
                              }),
                              ed.length > 0 &&
                                  eu.textValue.length > 0 &&
                                  (0, l.jsx)(o.Text, {
                                      className: D.slowmodeWarning,
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: Z.intl.format(Z.t.xJFpij, {
                                          count: ed.length,
                                          channelNames: ed.join(", "),
                                      }),
                                  }),
                          ],
                      }),
            actionBarInput: (0, l.jsx)(P._, {
                message: z,
                canSend: er > 0,
                selectedDestinations: el,
                isSending: Y,
                onSend: eO,
                inputValue: eu,
                setInputValue: ec,
            }),
            actions: [
                ...(null != B ? B : []),
                {
                    variant: "primary",
                    text: eZ,
                    onClick: eS,
                    disabled: er <= 0 || eu.textValue.length > eh,
                    loading: Y,
                    icon: o.Uuj,
                    iconPosition: "end",
                },
            ],
            actionBarInputLayout: "chat-input",
            listProps: ek,
        }),
    );
}
