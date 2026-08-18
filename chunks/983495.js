n.d(t, { A: () => ex });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(53466),
    o = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    f = n(834730),
    h = n(939249),
    m = n(140735),
    A = n(717421),
    x = n(847374),
    S = n(775602),
    T = n(51183),
    g = n(793574),
    E = n(688810),
    p = n(915089),
    v = n(410540),
    R = n(7584),
    y = n(208971),
    j = n(280450),
    C = n(562153),
    N = n(183555),
    P = n(679492),
    L = n(922016),
    b = n(403777),
    M = n(462887),
    I = n(267889),
    _ = n(363195),
    w = n(403362),
    $ = n(427262),
    O = n(448613),
    U = n(8925),
    V = n(939496),
    k = n(518477),
    D = n(307731),
    F = n(818348),
    G = n(650583),
    H = n(375708),
    Y = n(852005);
function B(e) {
    let {
            user: t,
            guildId: n,
            entry: i,
            sourceType: a,
            sourceDetails: s,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: f, setInteractionToast: h } = (0, P.Pq)(),
        { theme: m } = (0, V.E)(),
        A = (0, o.bG)([_.A], () => _.A.theme),
        x = (0, M.M)(A) ? !(0, M.M)(m) : (0, M.M)(m),
        S = r.useRef(null);
    async function T(e) {
        if (null == e) return;
        a === k.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : a === k.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: l, sourceDetails: r } = e,
                i = `:${t.name}:`;
            switch (l) {
                case k.dS.ACTIVITY:
                    let a = H.intl.formatToPlainString(H.t.EUFEJt, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${a}*${s}
${i}`
                        : `${U.c5}${a}*
${i}`;
                case k.dS.AVATAR:
                    let o = H.intl.formatToPlainString(H.t.E6H15q, { username: n });
                    return `${U.c5}${o}*
${i}`;
                case k.dS.STATUS:
                    let u = H.intl.formatToPlainString(H.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${u}*${c}
${i}`
                        : `${U.c5}${u}*
${i}`;
                default:
                    (0, w.xb)(l);
            }
        })({ emoji: e, username: $.Ay.getName(t), sourceType: a, sourceDetails: s });
        h(null);
        try {
            await (0, O.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: i,
            });
        } catch (e) {}
        h(k.AQ.REACT);
    }
    return (
        r.useEffect(() => {
            u?.(S?.current);
        }, [S, u]),
        r.useEffect(() => {
            function e(e) {
                e.key === G.dh.ESCAPE && (e.stopPropagation(), f());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, f]),
        (0, l.jsx)(I.A, {
            headerClassName: x ? Y.X : void 0,
            guildId: n ?? void 0,
            closePopout: F.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: n } = e;
                await T(t), n && (f(), d?.());
            },
            pickerIntention: D.EmojiIntention.PROFILE,
        })
    );
}
var Q = n(478437),
    q = n(305866),
    z = n(355622),
    K = n(408018),
    W = n(273754),
    X = n(95701),
    J = n(451438);
let Z = (0, X.createChannelRecord)({ id: "1", type: Q.r.DM });
function ee(e) {
    let {
            user: t,
            guildId: n,
            channelId: i,
            sourceType: s,
            sourceDetails: o,
            setPopoutRef: u,
            modalKey: c,
            onAction: d,
            onClose: f,
            entry: h,
        } = e,
        { resetInteraction: m, setInteractionToast: A } = (0, P.Pq)(),
        { primaryColor: x } = (0, V.E)(),
        [S, T] = r.useState(""),
        [g, E] = r.useState((0, K.x7)(S)),
        p = r.useRef(!1),
        v = r.useRef(null),
        R = r.useCallback(
            (e) => {
                e.key === G.dh.ESCAPE && (e.stopPropagation(), m());
            },
            [m],
        );
    async function y(e) {
        if (null == e) return;
        s === k.dS.AVATAR
            ? d({ action: "SEND_REPLY_AVATAR" })
            : s === k.dS.STATUS
              ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
              : d({ action: "SEND_REPLY_ACTIVITY" });
        let n = (function (e) {
            let { input: t, username: n, sourceType: l, sourceDetails: r } = e;
            switch (l) {
                case k.dS.ACTIVITY:
                    let i = H.intl.formatToPlainString(H.t.WmvMCo, { username: n }),
                        a = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${i}*${a}
${t}`
                        : `${U.c5}${i}*
${t}`;
                case k.dS.AVATAR:
                    let s = H.intl.formatToPlainString(H.t.lpaBsB, { username: n });
                    return `${U.c5}${s}*
${t}`;
                case k.dS.STATUS:
                    let o = H.intl.formatToPlainString(H.t.lFXgFV, { username: n }),
                        u = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${o}*${u}
${t}`
                        : `${U.c5}${o}*
${t}`;
                default:
                    (0, w.xb)(l);
            }
        })({ input: e, username: $.Ay.getName(t), sourceType: s, sourceDetails: o });
        A(null);
        try {
            await (0, O.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReplyPopout",
                openChannel: !1,
                whenReady: !1,
                entry: h,
            });
        } catch (e) {}
        A(k.AQ.REPLY);
    }
    r.useEffect(() => {
        u?.(v?.current);
    }, [v, u]);
    let j = { [J.h5]: s === k.dS.STATUS, [J.my]: s === k.dS.AVATAR, [J.Eb]: s === k.dS.ACTIVITY };
    return (0, l.jsx)(q.l, {
        ref: v,
        onKeyDown: R,
        children: (0, l.jsx)("div", {
            className: a()(J.kL, j, { [J.GE]: null != x }),
            children: (0, l.jsx)(W.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: J.hF,
                innerClassName: J.rn,
                editorClassName: J.EN,
                type: z.oU.USER_PROFILE_REPLY,
                placeholder: H.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case k.dS.ACTIVITY:
                                return H.t.Qn081O;
                            case k.dS.AVATAR:
                                return H.t.xGNPFK;
                            case k.dS.STATUS:
                                return H.t.g9BTCM;
                            default:
                                (0, w.xb)(e);
                        }
                    })(s),
                    { username: C.Ay.getName(n, i, t) },
                ),
                channel: Z,
                textValue: S,
                richValue: g,
                onChange: (e, t, n) => {
                    t !== S && (T(t), E(n));
                },
                focused: p.current,
                onFocus: () => {
                    p.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return await y(n), m(), f?.(), { shouldClear: !0, shouldRefocus: !1 };
                    } catch {
                        return { shouldClear: !1, shouldRefocus: !1 };
                    }
                },
            }),
        }),
    });
}
var et = n(996988);
function en(e) {
    let { user: t, guildId: n, channelId: r, themeType: i, onClose: a, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: h,
        } = (0, P.Pq)(),
        m = [et.d.MODAL, et.d.MODAL_V2].includes(i) ? (0, b.n)(t.id, n) : void 0,
        A = c === o.sourceType && u === k.AQ.REACT,
        x = c === o.sourceType && u === k.AQ.REPLY,
        S = (A || x) && f === o.sourceId;
    return (0, l.jsx)(L.Y, {
        targetElementRef: h ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: s } = e;
            return (0, l.jsx)(A ? B : ee, {
                user: t,
                guildId: n,
                channelId: r,
                themeType: i,
                onClose: a,
                modalKey: m,
                setPopoutRef: s,
                ...o,
            });
        },
        onRequestClose: () => {
            d(), a?.();
        },
        shouldShow: S,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: l } = e;
            return t === k.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : l === et.d.MODAL || l === et.d.MODAL_V2 || n === k.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: u, interactionSource: c, themeType: i }),
        children: s,
    });
}
var el = n(866665),
    er = n(22231),
    ei = n(241326),
    ea = n(101555),
    es = n(885386),
    eo = n(818832);
function eu(e) {
    let { isVisible: t, isExpandable: i, onCloseProfile: s, editButtonRef: u } = e,
        { analyticsLocations: d } = (0, E.Ay)(),
        { trackUserProfileAction: f } = (0, N.NJ)(),
        h = r.useRef(null),
        [m, A] = (0, o.yK)([S.Ay], () => [S.Ay.useReducedMotion, S.Ay.keyboardModeEnabled]),
        x = !i || m || A ? 0 : 300,
        { themeType: T } = (0, V.E)();
    return (0, l.jsxs)(ea.Ay, {
        className: a()(eo.oO, { [eo.RK]: t, [eo.lu]: i }),
        children: [
            (0, l.jsx)(el.m, {
                asContainer: !0,
                text: H.intl.string(H.t.bt75uw),
                delay: x,
                ariaHidden: !0,
                children: (0, l.jsx)(ea.$n, {
                    ref: u,
                    className: a()(eo.x6, eo.kb),
                    "aria-label": H.intl.string(H.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: function () {
                        f({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            (function (e) {
                                let { analyticsLocations: t, stackingBehavior: r, returnRef: i } = e;
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("411895"),
                                            n.e("2060"),
                                            n.e("681301"),
                                            n.e("914752"),
                                            n.e("352735"),
                                            n.e("361091"),
                                            n.e("428367"),
                                            n.e("348900"),
                                            n.e("220287"),
                                            n.e("655552"),
                                            n.e("420491"),
                                            n.e("772163"),
                                            n.e("689122"),
                                        ]).then(n.bind(n, 657977));
                                        return (n) =>
                                            (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: t, returnRef: i });
                                    },
                                    null != r ? { stackingBehavior: r } : void 0,
                                );
                            })({
                                analyticsLocations: d,
                                stackingBehavior: T === et.d.MODAL_V2 ? "stack" : void 0,
                                returnRef: u,
                            }),
                            s?.();
                    },
                    children: (0, l.jsx)(er.PencilIcon, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
            (0, l.jsx)(el.m, {
                asContainer: !0,
                text: H.intl.string(H.t.VkKicb),
                delay: x,
                ariaHidden: !0,
                children: (0, l.jsx)(ea.$n, {
                    ref: h,
                    className: a()(eo.x6, eo.pG),
                    "aria-label": H.intl.string(H.t.wfYTHe),
                    onClick: function () {
                        f({ action: "PRESS_CLEAR_CUSTOM_STATUS" }),
                            es.G2.updateSetting(void 0),
                            requestAnimationFrame(() => u.current?.focus());
                    },
                    children: (0, l.jsx)(ei.TrashIcon, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
        ],
    });
}
var ec = n(258417);
function ed(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", {
        className: a()(ec.nL, n),
        children: (0, l.jsx)("div", {
            className: ec.A7,
            children: (0, l.jsx)("span", { className: ec.vW, children: t }),
        }),
    });
}
let ef = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: i, addButtonRef: s } = e,
            o = (0, p.GV)(),
            { analyticsLocations: u } = (0, E.Ay)(),
            { trackUserProfileAction: A } = (0, N.NJ)(),
            { themeType: x } = (0, V.E)(),
            S = null != i ? i.label() : H.intl.string(H.t.evw0oz),
            T = (0, l.jsxs)("div", {
                className: ec.Qs,
                children: [
                    (0, l.jsx)(d.U, { size: "xs", className: ec.Tw, colorClass: ec.qv }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        className: a()(ec.ch, null != i && ec.R9),
                        children: S,
                    }),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ed, { children: T }),
                (0, l.jsx)("div", {
                    className: a()(ec.kL, ec.LL),
                    ref: t,
                    children: (0, l.jsx)(h.D, {
                        innerRef: s,
                        className: ec.A7,
                        "aria-label": H.intl.string(H.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: function () {
                            A({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("411895"),
                                            n.e("2060"),
                                            n.e("681301"),
                                            n.e("914752"),
                                            n.e("352735"),
                                            n.e("361091"),
                                            n.e("428367"),
                                            n.e("348900"),
                                            n.e("220287"),
                                            n.e("655552"),
                                            n.e("420491"),
                                            n.e("772163"),
                                            n.e("689122"),
                                        ]).then(n.bind(n, 657977));
                                        return (t) =>
                                            (0, l.jsx)(e, {
                                                ...t,
                                                sourceAnalyticsLocations: u,
                                                prompt: i,
                                                returnRef: s,
                                            });
                                    },
                                    x === et.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: ec.hN },
                        children: (0, l.jsxs)("span", {
                            className: a()(ec.vW, ec.vk),
                            children: [
                                (0, l.jsx)(d.U, { size: "xs", className: ec.Tw, colorClass: ec.qv }),
                                (0, l.jsxs)(m.A, { id: o, children: [H.intl.string(H.t.EVV6uZ), ": ", S] }),
                                (0, l.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    className: a()(ec.ch, null != i && ec.R9),
                                    "aria-hidden": "true",
                                    children: S,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    eh = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: i,
                statusLabel: c,
                themeType: d,
                animate: g,
                className: E,
                renderToolbar: v,
                onShowToolbar: R,
                placeholderText: y,
                hasEntered: j = !0,
            } = e,
            C = (0, P.NR)(),
            { trackUserProfileAction: L } = (0, N.NJ)(),
            b = 1.25 * (null != n),
            M = 36 + b,
            I = 144 + b,
            _ = r.useRef(null),
            w = r.useRef(null),
            $ = r.useRef(null),
            O = (0, p.GV)(),
            U = r.useRef(M),
            V = r.useRef(M),
            D = null != n && null == i,
            [F, G] = r.useState(!1),
            [Y, B] = r.useState(!0),
            [Q, q] = r.useState(!D && j),
            [z, K] = r.useState(!1),
            W = j && F,
            X = d === et.d.MODAL || d === et.d.MODAL_V2,
            J = r.useCallback((e) => (X ? e : Math.min(e, I)), [I, X]),
            Z = (0, o.bG)([S.Ay], () => S.Ay.useReducedMotion),
            [ee] = r.useState(() => new u.Ep());
        r.useEffect(() => () => ee.stop(), [ee]),
            r.useEffect(() => {
                C?.onInteractionPopoutTargetRefChange(_);
            }, [C]);
        let [en, el] = (0, A.z)(() => ({ maxHeight: `${U.current}px`, config: { clamp: !0, duration: 150 } }));
        function er(e) {
            Q &&
                (K(e),
                e
                    ? el({ maxHeight: `${J(V.current)}px`, delay: 300 * !Z, config: { clamp: !0, duration: 150 * !Z } })
                    : el({ maxHeight: `${Math.min(U.current, M)}px`, delay: 0 }),
                Z ? B(!e) : ee.start(e ? 300 : 150, () => B(!e)));
        }
        r.useLayoutEffect(() => {
            if ((G(!0), null == w.current || null == $.current || !W)) return;
            let e = w.current.getBoundingClientRect().height,
                t = $.current.getBoundingClientRect().height,
                n = J(t);
            q(n > e), (U.current = e), (V.current = t), el({ maxHeight: `${Y ? Math.min(U.current, M) : n}px` });
        }, [W, i, n, el, Y, M, J]);
        let ei =
                null != n
                    ? (0, l.jsx)(T.A, { emoji: n, animate: g, hideTooltip: !1, tooltipDelay: k.In, className: ec.H0 })
                    : null,
            ea = null != i ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: ec.qS, children: i }) : null,
            es =
                void 0 !== y && null == n
                    ? (0, l.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${H.intl.string(H.t.EVV6uZ)}: ${y}`,
                          className: a()(ec.qS, ec.R9),
                          children: y ?? "",
                      })
                    : null,
            eo = null == ea || "" === i ? es : ea,
            eu = (0, l.jsxs)("div", { className: ec.Qs, children: [ei, eo] }),
            ef = (0, l.jsxs)("div", { ref: w, className: a()(ec.Qs, ec.mj), children: [ei, eo] }),
            eh = (0, l.jsxs)("div", { ref: $, className: a()(ec.Qs, ec.m2, ec.mj), children: [ei, eo] }),
            em = H.intl.string(z ? H.t.fFaN1b : H.t.xPkLPy),
            eA = Q
                ? (0, l.jsx)(m.A, {
                      showOnFocus: !0,
                      children: (0, l.jsx)(h.D, {
                          className: ec.uJ,
                          "aria-label": em,
                          "aria-controls": O,
                          "aria-expanded": z,
                          onClick: () => er(!z),
                          focusProps: { ringClassName: ec.o5 },
                          children: (0, l.jsx)(x.a, {
                              size: "xs",
                              color: "currentColor",
                              className: z ? ec.DE : void 0,
                          }),
                      }),
                  })
                : null,
            ex = (0, l.jsx)("div", {
                ref: t,
                className: ec.A7,
                role: "group",
                "aria-label": c,
                children: (0, l.jsx)("span", {
                    className: ec.vW,
                    children: (0, l.jsxs)(s.animated.div, {
                        id: O,
                        style: en,
                        className: a()(ec.Qs, { [ec.m2]: !Y && X, [ec.p$]: !Y && !X }),
                        children: [ei, eo],
                    }),
                }),
            }),
            eS = (0, l.jsxs)(ed, { children: [eu, ef, eh] });
        return null == R
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eS,
                      (0, l.jsxs)("div", {
                          ref: _,
                          className: a()(ec.kL, E),
                          onMouseEnter: () => {
                              L({ action: "HOVER_CUSTOM_STATUS" }), er(!0);
                          },
                          onMouseLeave: () => {
                              er(!1);
                          },
                          children: [ex, v?.(Q), eA],
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      eS,
                      (0, l.jsxs)("div", {
                          ref: _,
                          className: a()(ec.kL, E),
                          onFocus: () => {
                              R(!0);
                          },
                          onBlur: (e) => {
                              _.current?.contains(e.relatedTarget) || R(!1);
                          },
                          onMouseEnter: () => {
                              L({ action: "HOVER_CUSTOM_STATUS" }), R(!0), er(!0);
                          },
                          onMouseLeave: () => {
                              R(!1), er(!1);
                          },
                          children: [ex, v?.(Q), eA],
                      }),
                  ],
              });
    }),
    em = r.forwardRef(function (e, t) {
        let { emoji: n, text: i, onCloseProfile: a, editButtonRef: s, ...o } = e,
            [u, c] = r.useState(!1);
        return (0, l.jsx)(eh, {
            ...o,
            ref: t,
            emoji: n,
            text: i,
            className: ec.LL,
            onShowToolbar: c,
            renderToolbar: (e) =>
                (0, l.jsx)(eu, { isVisible: u, isExpandable: e, onCloseProfile: a, editButtonRef: s }),
        });
    });
function eA(e) {
    let t,
        { emoji: n, text: i, user: a, guildId: s, channelId: o, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, N.NJ)(),
        { interactionType: f, interactionSource: h, resetInteraction: m } = (0, P.Pq)(),
        A = h === k.dS.STATUS && f === k.AQ.REACT,
        x = h === k.dS.STATUS && f === k.AQ.REPLY,
        S = A || x,
        T = r.useRef(null),
        g = r.useRef(n),
        E = r.useRef(i);
    r.useEffect(() => {
        h === k.dS.STATUS && ((g.current !== n || E.current !== i) && m(), (g.current = n), (E.current = i));
    }, [h, m, n, i]);
    let [p, v] = r.useState(!1),
        y = r.useCallback(
            (e) => {
                (e || !S) && v(e);
            },
            [S],
        );
    return (0, l.jsx)(en, {
        user: a,
        guildId: s,
        channelId: o,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : R.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == i ? t : null == t ? i : `${t} ${i}`),
        sourceType: k.dS.STATUS,
        onAction: d,
        onClose: () => v(!1),
        children: () =>
            (0, l.jsx)(eh, {
                ...c,
                ref: T,
                emoji: n,
                text: i,
                themeType: u,
                className: S ? ec.zf : void 0,
                onShowToolbar: y,
                renderToolbar: (e) =>
                    (0, l.jsx)(U.Ay, {
                        targetRef: T,
                        user: a,
                        sourceType: k.dS.STATUS,
                        isVisible: p && !S,
                        isExpandable: e,
                        onAction: d,
                    }),
            }),
    });
}
let ex = r.forwardRef(function (e, t) {
    let {
            user: n,
            guildId: i,
            channelId: a,
            onCloseProfile: s,
            previewText: u,
            previewEmoji: c,
            placeholderText: d,
            prompt: f,
            disableToolbar: h = !1,
            ...m
        } = e,
        A = (0, v.A)(n.id),
        { analyticsLocations: x } = (0, E.Ay)(g.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        S = r.useRef(null),
        T = null != u || null != c,
        p = (0, y.G)(T ? u : A?.state),
        R = (0, o.bG)([j.default], () => j.default.getId() === n.id),
        N = R && !h,
        P = C.Ay.useName(i, a, n),
        L = R ? H.intl.string(H.t.SlKMnR) : H.intl.formatToPlainString(H.t["91lTRe"], { name: P }),
        b = !R && !n.bot && !h;
    if (T) {
        let e = null != p && "" !== p ? p : null;
        return (0, l.jsx)(E.f5, {
            value: x,
            children: (0, l.jsx)(eh, { emoji: c ?? null, text: e, statusLabel: L, placeholderText: d, ref: t, ...m }),
        });
    }
    let M = A?.emoji ?? null,
        I = null != p && "" !== p ? p : null;
    return null != M || null != I || N
        ? null == M && null == I
            ? (0, l.jsx)(E.f5, {
                  value: x,
                  children: (0, l.jsx)(ef, { onCloseProfile: s, prompt: f, ref: t, addButtonRef: S }),
              })
            : b
              ? (0, l.jsx)(E.f5, {
                    value: x,
                    children: (0, l.jsx)(eA, {
                        user: n,
                        guildId: i,
                        channelId: a,
                        emoji: M,
                        text: I,
                        statusLabel: L,
                        ...m,
                    }),
                })
              : N
                ? (0, l.jsx)(E.f5, {
                      value: x,
                      children: (0, l.jsx)(em, {
                          emoji: M,
                          text: I,
                          statusLabel: L,
                          onCloseProfile: s,
                          editButtonRef: S,
                          ref: t,
                          ...m,
                      }),
                  })
                : (0, l.jsx)(E.f5, {
                      value: x,
                      children: (0, l.jsx)(eh, { emoji: M, text: I, statusLabel: L, ref: t, ...m }),
                  })
        : null;
});
