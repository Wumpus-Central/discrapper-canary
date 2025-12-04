n.d(t, { ForwardModal: () => A }), n(388685);
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
    w = n(375954),
    b = n(823379),
    x = n(859155),
    C = n(784384),
    y = n(822869),
    O = n(895442),
    j = n(388275),
    T = n(912332),
    _ = n(646746),
    E = n(217031),
    P = n(819727),
    S = n(388032),
    D = n(773921);
function M(e) {
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
function I(e, t) {
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
function R() {
    return (0, l.jsx)("div", {
        className: D.noResults,
        children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: S.intl.string(S.t.V6nAfF),
        }),
    });
}
function A(e) {
    var {
            message: t,
            initialSelectedDestinations: A = [],
            forwardOptions: N,
            onClose: Z,
            onRequestSent: k,
            customTitle: F,
            customSubtitle: U,
            customPreview: L,
            customSendHandler: G,
            customValidateDestination: V,
            source: K,
        } = e,
        B = (function (e, t) {
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
            "source",
        ]);
    let W = null == t ? void 0 : t.channel_id,
        Y = null == t ? void 0 : t.id,
        H = a.useMemo(() => (null != W ? (0, g.dL)(W) : void 0), [W]),
        [Q, X] = a.useState(!1),
        z = (0, s.e7)([w.Z], () => {
            var e;
            return "checkpoint" === K
                ? t
                : null != t
                  ? null != (e = w.Z.getMessage(t.channel_id, t.id))
                      ? e
                      : t
                  : void 0;
        }, [t, K]),
        q = (0, s.e7)([p.Z], () => (null != W ? p.Z.getChannel(W) : void 0), [W]),
        J = (0, y.ZF)(),
        $ = (0, y.mh)(),
        ee = a.useRef(0),
        et = a.useRef(0),
        [en, el] = a.useState(A),
        ea = en.length,
        er = ea >= P.G,
        ei = (0, C.nm)(en),
        es = (0, s.e7)([v.Z], () => (null != z ? v.Z.getDraft(z.channel_id, v.d.ForwardContextMessage) : "")),
        [eo, eu] = a.useState(() => (0, c.eK)(es)),
        ec = (0, C.y)(en),
        ed = (0, h.Z)(),
        [eh, em] = a.useState(""),
        { results: eg, updateSearchText: ef } = (0, f.s)({
            selectedDestinations: en,
            originDestination: H,
            includeMissingDMs: !0,
        }),
        ep = a.useCallback(
            (e) => {
                em(e), ef(e);
            },
            [ef],
        ),
        ev = a.useCallback(
            (e) => {
                ep(e), (et.current += 1), "" !== e && null != W && null != Y && $(W, Y);
            },
            [W, Y, $, ep],
        ),
        ew = a.useCallback(() => {
            ep("");
        }, [ep]),
        eb = a.useCallback(async () => {
            null != W &&
                null != Y &&
                (0, y.sF)({
                    channelId: W,
                    messageId: Y,
                    numDestinationChanges: ee.current,
                    numQueryChanges: et.current,
                }),
                await Z();
        }, [W, Y, Z]),
        ex = a.useRef(null);
    a.useEffect(() => {
        if ("" === eh) {
            var e;
            null == (e = ex.current) || e.focus();
        }
    }, [eh]);
    let eC = a.useMemo(
            () =>
                (0, r.throttle)(
                    () => {
                        (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.kwmYkt), o.ToastType.FORWARD));
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
                null != W && null != Y && J(W, Y, "" !== eh),
                    el((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return er ? t : (ep(""), (ee.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (ee.current += 1), l;
                    });
            },
            [W, er, Y, eh, ep, J],
        ),
        eO = a.useCallback(
            async function (e) {
                var a;
                let {
                    withMessage: r,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != G)
                    return void (await G(
                        e,
                        {
                            withMessage: r,
                            transitionToDestination: i,
                            closeAfterSend: s,
                        },
                        X,
                    ));
                if (null == W || null == Y)
                    return void (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.R0RpRX), o.ToastType.FAILURE));
                let u = null != (a = w.Z.getMessage(W, Y)) ? a : t;
                if (null == u)
                    return void (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.R0RpRX), o.ToastType.FAILURE));
                X(!0);
                let c = (await Promise.all(e.map(g.qx))).filter(b.lm);
                if (
                    (0, O.Z)(u, c) &&
                    !(await new Promise((e) => {
                        (0, o.ZDy)(async () => {
                            let { default: t } = await n.e("24874").then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    I(M({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1),
                                    }),
                                );
                        });
                    }))
                )
                    return void X(!1);
                s && (0, T.mc)(),
                    null == k || k(),
                    i &&
                        (await d.Z.fetchMessages({ channelId: c[0] }),
                        (0, m.Kh)(c[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let h = await x.Z.sendForwards(u, c, I(M({}, N), { withMessage: r })),
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
                    (0, y.gP)({
                        channelId: W,
                        messageId: Y,
                        hasError: !1,
                        hasContextMessage: null != r && "" !== r,
                        numDestinations: c.length,
                        numDestinationChanges: ee.current,
                        numQueryChanges: et.current,
                        anyDestinationHasSlowmode: f,
                    }),
                        eC();
                    return;
                }
                (0, y.gP)({
                    channelId: W,
                    messageId: Y,
                    hasError: !0,
                    hasContextMessage: null != r && "" !== r,
                    numDestinations: c.length,
                    numDestinationChanges: ee.current,
                    numQueryChanges: et.current,
                    anyDestinationHasSlowmode: f,
                });
                let v = e.filter((e, t) => "rejected" === h[t].status);
                (0, T.Np)({
                    message: u,
                    failedDestinations: v,
                    forwardOptions: N,
                });
            },
            [W, N, Y, t, k, eC, G],
        ),
        ej = a.useCallback(
            (e) => {
                eO(en, {
                    withMessage: e,
                    transitionToDestination: 1 === en.length,
                    closeAfterSend: !0,
                });
            },
            [eO, en],
        ),
        eT = a.useCallback(() => {
            null != z && u.Z.clearDraft(z.channel_id, v.d.ForwardContextMessage), ej(eo.textValue);
        }, [z, eo.textValue, ej]),
        e_ = (0, E.Y)({
            rowData: eg,
            message: z,
            originChannel: q,
            selectedDestinations: en,
            handleToggleDestination: ey,
            disableSelection: er,
            validateDestination: V,
        }),
        eE = a.useMemo(
            () =>
                eg.length > 0
                    ? e_
                    : {
                          sections: [1],
                          sectionHeight: 0,
                          renderRow: () => (0, l.jsx)(R, {}),
                          rowHeight: 72,
                      },
            [eg, e_],
        ),
        eP = ea <= 1 ? S.intl.string(S.t.TXNS7S) : S.intl.formatToPlainString(S.t.jWtYUm, { count: ea });
    return (0, l.jsx)(
        i.Modal,
        I(M({}, B), {
            onClose: eb,
            title: null != F ? F : S.intl.string(S.t["+SkRRj"]),
            subtitle:
                null != U
                    ? U
                    : er
                      ? S.intl.formatToPlainString(S.t["3Fbkir"], { count: P.G })
                      : S.intl.string(S.t["VA+btJ"]),
            input: (0, l.jsx)(o.E1j, {
                ref: ex,
                query: eh,
                onChange: ev,
                onClear: ew,
                placeholder: S.intl.string(S.t["5h0QOP"]),
                "aria-label": S.intl.string(S.t["5h0QOP"]),
                autoFocus: !0,
            }),
            preview:
                null != L
                    ? L
                    : null != z &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(_.O, {
                                  message: z,
                                  forwardOptions: N,
                                  channel: ei,
                              }),
                              ec.length > 0 &&
                                  eo.textValue.length > 0 &&
                                  (0, l.jsx)(o.Text, {
                                      className: D.slowmodeWarning,
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: S.intl.format(S.t.xJFpij, {
                                          count: ec.length,
                                          channelNames: ec.join(", "),
                                      }),
                                  }),
                          ],
                      }),
            actionBarInput: (0, l.jsx)(j._, {
                message: z,
                canSend: ea > 0,
                selectedDestinations: en,
                isSending: Q,
                onSend: ej,
                inputValue: eo,
                setInputValue: eu,
            }),
            actions: [
                {
                    variant: "primary",
                    text: eP,
                    onClick: eT,
                    disabled: ea <= 0 || eo.textValue.length > ed,
                    loading: Q,
                    icon: o.Uuj,
                    iconPosition: "end",
                },
            ],
            actionBarInputLayout: "chat-input",
            listProps: eE,
        }),
    );
}
