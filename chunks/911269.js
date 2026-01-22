n.d(t, {
    ForwardModal: () => M,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(735438),
    i = n(158954),
    s = n(311907),
    o = n(397927),
    u = n(465532),
    c = n(408018),
    d = n(547),
    h = n(135621),
    m = n(378570),
    f = n(223863),
    g = n(151054),
    p = n(734057),
    b = n(31717),
    x = n(320501),
    y = n(403362),
    v = n(885918),
    C = n(513480),
    j = n(530912),
    w = n(938557),
    O = n(190338),
    A = n(294454),
    S = n(980490),
    T = n(61916);
n(577616);
var P = n(985018),
    k = n(967789);

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

function D(e, t) {
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

function E() {
    return (0, l.jsx)("div", {
        className: k.wV,
        children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: P.intl.string(P.t.V6nAfF),
        }),
    });
}

function M(e) {
    let {
            message: t,
            initialSelectedDestinations: M = [],
            forwardOptions: N,
            onClose: I,
            onRequestSent: _,
            customTitle: F,
            customSubtitle: V,
            customPreview: L,
            customSendHandler: U,
            customValidateDestination: G,
            additionalActions: B,
            source: H,
        } = e,
        W = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        a = Object.getOwnPropertyNames(e);
                    for (l = 0; l < a.length; l++)
                        (n = a[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
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
        ]),
        q = null == t ? void 0 : t.channel_id,
        K = null == t ? void 0 : t.id,
        Q = r.useMemo(() => (null != q ? (0, f._5)(q) : void 0), [q]),
        [X, Y] = r.useState(!1),
        J = (0, s.bG)([x.A], () => {
            var e;
            return "checkpoint" === H
                ? t
                : null != t
                  ? null != (e = x.A.getMessage(t.channel_id, t.id))
                      ? e
                      : t
                  : void 0;
        }, [t, H]),
        Z = (0, s.bG)([p.A], () => (null != q ? p.A.getChannel(q) : void 0), [q]),
        z = (0, j.Jf)(),
        $ = (0, j.nL)(),
        ee = r.useRef(0),
        et = r.useRef(0),
        [en, el] = r.useState(M),
        er = en.length,
        ea = er >= 5,
        ei = (0, C.QK)(en),
        es = (0, s.bG)([b.A], () => (null != J ? b.A.getDraft(J.channel_id, b.C.ForwardContextMessage) : "")),
        [eo, eu] = r.useState(() => (0, c.ur)(es)),
        ec = (0, C.M6)(en),
        ed = (0, h.A)(),
        [eh, em] = r.useState(""),
        { results: ef, updateSearchText: eg } = (0, g.R)({
            selectedDestinations: en,
            originDestination: Q,
            includeMissingDMs: !0,
        }),
        ep = r.useCallback(
            (e) => {
                em(e), eg(e);
            },
            [eg],
        ),
        eb = r.useCallback(
            (e) => {
                ep(e), (et.current += 1), "" !== e && null != q && null != K && $(q, K);
            },
            [q, K, $, ep],
        ),
        ex = r.useCallback(() => {
            ep("");
        }, [ep]),
        ey = r.useCallback(async () => {
            null != q &&
                null != K &&
                (0, j.hH)({
                    channelId: q,
                    messageId: K,
                    numDestinationChanges: ee.current,
                    numQueryChanges: et.current,
                }),
                await I();
        }, [q, K, I]),
        ev = r.useRef(null);
    r.useEffect(() => {
        if ("" === eh) {
            var e;
            null == (e = ev.current) || e.focus();
        }
    }, [eh]);
    let eC = r.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, o.showToast)((0, o.createToast)(P.intl.string(P.t.kwmYkt), o.ToastType.FORWARD));
                    },
                    3e3,
                    {
                        leading: !0,
                        trailing: !1,
                    },
                ),
            [],
        ),
        ej = r.useCallback(
            (e) => {
                null != q && null != K && z(q, K, "" !== eh),
                    el((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return ea ? t : (ep(""), (ee.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (ee.current += 1), l;
                    });
            },
            [q, ea, K, eh, ep, z],
        ),
        ew = r.useCallback(
            async function (e) {
                var r;
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != U)
                    return void (await U(
                        e,
                        {
                            withMessage: a,
                            transitionToDestination: i,
                            closeAfterSend: s,
                        },
                        Y,
                    ));
                if (null == q || null == K)
                    return void (0, o.showToast)((0, o.createToast)(P.intl.string(P.t.R0RpRX), o.ToastType.FAILURE));
                let u = null != (r = x.A.getMessage(q, K)) ? r : t;
                if (null == u)
                    return void (0, o.showToast)((0, o.createToast)(P.intl.string(P.t.R0RpRX), o.ToastType.FAILURE));
                Y(!0);
                let c = (await Promise.all(e.map(f.pk))).filter(y.Vq);
                if (
                    (0, w.A)(u, c) &&
                    !(await new Promise((e) => {
                        (0, o.mMO)(async () => {
                            let { default: t } = await n.e("51954").then(n.bind(n, 156073));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    D(R({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1),
                                    }),
                                );
                        });
                    }))
                )
                    return void Y(!1);
                s && (0, A.Be)(),
                    null == _ || _(),
                    i &&
                        (await d.A.fetchMessages({
                            channelId: c[0],
                        }),
                        (0, m.iN)(c[0], {
                            openTextInVoiceIfVoiceChannel: !0,
                        }));
                let h = await v.A.sendForwards(
                        u,
                        c,
                        D(R({}, N), {
                            withMessage: a,
                        }),
                    ),
                    g = c.some((e) => {
                        let t = p.A.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    h.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, j.TA)({
                        channelId: q,
                        messageId: K,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: c.length,
                        numDestinationChanges: ee.current,
                        numQueryChanges: et.current,
                        anyDestinationHasSlowmode: g,
                    }),
                        eC();
                    return;
                }
                (0, j.TA)({
                    channelId: q,
                    messageId: K,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: c.length,
                    numDestinationChanges: ee.current,
                    numQueryChanges: et.current,
                    anyDestinationHasSlowmode: g,
                });
                let b = e.filter((e, t) => "rejected" === h[t].status);
                (0, A.vK)({
                    message: u,
                    failedDestinations: b,
                    forwardOptions: N,
                });
            },
            [q, N, K, t, _, eC, U],
        ),
        eO = r.useCallback(
            (e) => {
                ew(en, {
                    withMessage: e,
                    transitionToDestination: 1 === en.length,
                    closeAfterSend: !0,
                });
            },
            [ew, en],
        ),
        eA = r.useCallback(() => {
            null != J && u.A.clearDraft(J.channel_id, b.C.ForwardContextMessage), eO(eo.textValue);
        }, [J, eo.textValue, eO]),
        eS = (0, T.s)({
            rowData: ef,
            message: J,
            originChannel: Z,
            selectedDestinations: en,
            handleToggleDestination: ej,
            disableSelection: ea,
            validateDestination: G,
        }),
        eT = r.useMemo(
            () =>
                ef.length > 0
                    ? eS
                    : {
                          sections: [1],
                          sectionHeight: 0,
                          renderRow: () => (0, l.jsx)(E, {}),
                          rowHeight: 72,
                      },
            [ef, eS],
        ),
        eP =
            er <= 1
                ? P.intl.string(P.t.TXNS7S)
                : P.intl.formatToPlainString(P.t.jWtYUm, {
                      count: er,
                  });
    return (0, l.jsx)(
        i.Modal,
        D(R({}, W), {
            onClose: ey,
            title: null != F ? F : P.intl.string(P.t["+SkRRj"]),
            subtitle:
                null != V
                    ? V
                    : ea
                      ? P.intl.formatToPlainString(P.t["3Fbkir"], {
                            count: 5,
                        })
                      : P.intl.string(P.t["VA+btJ"]),
            input: (0, l.jsx)(o.IWV, {
                ref: ev,
                query: eh,
                onChange: eb,
                onClear: ex,
                placeholder: P.intl.string(P.t["5h0QOP"]),
                "aria-label": P.intl.string(P.t["5h0QOP"]),
                autoFocus: !0,
            }),
            preview:
                null != L
                    ? L
                    : null != J &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(S.q, {
                                  message: J,
                                  forwardOptions: N,
                                  channel: ei,
                              }),
                              ec.length > 0 &&
                                  eo.textValue.length > 0 &&
                                  (0, l.jsx)(o.Text, {
                                      className: k.Lt,
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: P.intl.format(P.t.xJFpij, {
                                          count: ec.length,
                                          channelNames: ec.join(", "),
                                      }),
                                  }),
                          ],
                      }),
            actionBarInput: (0, l.jsx)(O.m, {
                message: J,
                canSend: er > 0,
                selectedDestinations: en,
                isSending: X,
                onSend: eO,
                inputValue: eo,
                setInputValue: eu,
            }),
            actions: [
                ...(null != B ? B : []),
                {
                    variant: "primary",
                    text: eP,
                    onClick: eA,
                    disabled: er <= 0 || eo.textValue.length > ed,
                    loading: X,
                    icon: o.lX7,
                    iconPosition: "end",
                },
            ],
            actionBarInputLayout: "chat-input",
            listProps: eT,
        }),
    );
}
