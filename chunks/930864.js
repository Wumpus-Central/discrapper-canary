n.d(t, { ForwardModal: () => D }), n(388685);
var l = n(951288),
    a = n(647438),
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
    w = n(592125),
    p = n(703558),
    b = n(375954),
    _ = n(823379),
    v = n(859155),
    x = n(784384),
    y = n(822869),
    P = n(895442),
    C = n(388275),
    O = n(912332),
    j = n(646746),
    S = n(217031),
    Z = n(819727),
    I = n(388032),
    R = n(773921);
function k(e) {
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
function T(e, t) {
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
function M() {
    return (0, l.jsx)("div", {
        className: R.noResults,
        children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: I.intl.string(I.t.V6nAfH),
        }),
    });
}
function D(e) {
    var { message: t, initialSelectedDestinations: D, forwardOptions: E, onClose: F, onRequestSent: N } = e,
        A = (function (e, t) {
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
        })(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent"]);
    let { channel_id: L, id: V } = t,
        W = a.useMemo(() => (0, g.dL)(L), [L]),
        [U, G] = a.useState(!1),
        B = (0, s.e7)([b.Z], () => {
            var e;
            return null != (e = b.Z.getMessage(t.channel_id, t.id)) ? e : t;
        }, [t]),
        H = (0, s.e7)([w.Z], () => w.Z.getChannel(L), [L]),
        K = (0, y.ZF)(),
        Y = (0, y.mh)(),
        Q = a.useRef(0),
        q = a.useRef(0),
        [X, z] = a.useState(D),
        J = X.length,
        $ = J >= Z.G,
        ee = (0, x.nm)(X),
        et = (0, s.e7)([p.Z], () => p.Z.getDraft(B.channel_id, p.d.ForwardContextMessage)),
        [en, el] = a.useState(() => (0, u.eK)(et)),
        ea = (0, x.y)(X),
        er = (0, h.Z)(),
        [ei, es] = a.useState(""),
        { results: eo, updateSearchText: ec } = (0, f.s)({
            selectedDestinations: X,
            originDestination: W,
            includeMissingDMs: !0,
        }),
        eu = a.useCallback(
            (e) => {
                es(e), ec(e);
            },
            [ec],
        ),
        ed = a.useCallback(
            (e) => {
                eu(e), (q.current += 1), "" !== e && Y(L, V);
            },
            [L, V, Y, eu],
        ),
        eh = a.useCallback(() => {
            eu("");
        }, [eu]),
        em = a.useCallback(async () => {
            (0, y.sF)({
                channelId: L,
                messageId: V,
                numDestinationChanges: Q.current,
                numQueryChanges: q.current,
            }),
                await F();
        }, [L, V, F]),
        eg = a.useRef(null);
    a.useEffect(() => {
        if ("" === ei) {
            var e;
            null == (e = eg.current) || e.focus();
        }
    }, [ei]);
    let ef = a.useMemo(
            () =>
                (0, r.throttle)(
                    () => {
                        (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.kwmYkp), o.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1,
                    },
                ),
            [],
        ),
        ew = a.useCallback(
            (e) => {
                K(L, V, "" !== ei),
                    z((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return $ ? t : (eu(""), (Q.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (Q.current += 1), l;
                    });
            },
            [L, $, V, ei, eu, K],
        ),
        ep = a.useCallback(
            async function (e) {
                var a;
                let {
                        withMessage: r,
                        transitionToDestination: i,
                        closeAfterSend: s,
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    c = null != (a = b.Z.getMessage(L, V)) ? a : t;
                if (null == c)
                    return void (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.R0RpRU), o.ToastType.FAILURE));
                G(!0);
                let u = (await Promise.all(e.map(g.qx))).filter(_.lm);
                if (
                    (0, P.Z)(c, u) &&
                    !(await new Promise((e) => {
                        (0, o.ZDy)(async () => {
                            let { default: t } = await n.e("88643").then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    T(k({}, n), {
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
                let h = await v.Z.sendForwards(c, u, T(k({}, E), { withMessage: r })),
                    f = u.some((e) => {
                        let t = w.Z.getChannel(e);
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
                        numDestinationChanges: Q.current,
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
                    numDestinationChanges: Q.current,
                    numQueryChanges: q.current,
                    anyDestinationHasSlowmode: f,
                });
                let p = e.filter((e, t) => "rejected" === h[t].status);
                (0, O.Np)({
                    message: c,
                    failedDestinations: p,
                    forwardOptions: E,
                });
            },
            [L, E, V, t, N, ef],
        ),
        eb = a.useCallback(
            (e) => {
                ep(X, {
                    withMessage: e,
                    transitionToDestination: 1 === X.length,
                    closeAfterSend: !0,
                });
            },
            [ep, X],
        ),
        e_ = a.useCallback(() => {
            c.Z.clearDraft(B.channel_id, p.d.ForwardContextMessage), eb(en.textValue);
        }, [B.channel_id, en.textValue, eb]),
        ev = (0, S.Y)({
            rowData: eo,
            message: B,
            originChannel: H,
            selectedDestinations: X,
            handleToggleDestination: ew,
            disableSelection: $,
        }),
        ex = a.useMemo(
            () =>
                eo.length > 0
                    ? ev
                    : {
                          sections: [1],
                          sectionHeight: 0,
                          renderRow: () => (0, l.jsx)(M, {}),
                          rowHeight: 72,
                      },
            [eo, ev],
        );
    if (null == B || null == H) return null;
    let ey = J <= 1 ? I.intl.string(I.t.TXNS7e) : I.intl.formatToPlainString(I.t.jWtYUl, { count: J });
    return (0, l.jsx)(
        i.Modal,
        T(k({}, A), {
            onClose: em,
            title: I.intl.string(I.t["+SkRRk"]),
            subtitle: $ ? I.intl.formatToPlainString(I.t["3Fbkio"], { count: Z.G }) : I.intl.string(I.t["VA+btL"]),
            input: (0, l.jsx)(o.E1j, {
                ref: eg,
                query: ei,
                onChange: ed,
                onClear: eh,
                placeholder: I.intl.string(I.t["5h0QOD"]),
                "aria-label": I.intl.string(I.t["5h0QOD"]),
                autoFocus: !0,
            }),
            preview: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(j.O, {
                        message: B,
                        forwardOptions: E,
                        channel: ee,
                    }),
                    ea.length > 0 &&
                        en.textValue.length > 0 &&
                        (0, l.jsx)(o.Text, {
                            className: R.slowmodeWarning,
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: I.intl.format(I.t.xJFpio, {
                                count: ea.length,
                                channelNames: ea.join(", "),
                            }),
                        }),
                ],
            }),
            actionBarInput: (0, l.jsx)(C._, {
                message: B,
                canSend: J > 0,
                selectedDestinations: X,
                isSending: U,
                onSend: eb,
                inputValue: en,
                setInputValue: el,
            }),
            actions: [
                {
                    variant: "primary",
                    text: ey,
                    onClick: e_,
                    disabled: J <= 0 || en.textValue.length > er,
                    loading: U,
                    icon: o.Uuj,
                    iconPosition: "end",
                },
            ],
            listProps: ex,
        }),
    );
}
