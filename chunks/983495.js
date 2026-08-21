n.d(t, { A: () => eA });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(221877),
    o = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    f = n(834730),
    h = n(939249),
    m = n(140735),
    A = n(717421),
    x = n(847374),
    T = n(775602),
    S = n(51183),
    g = n(793574),
    p = n(688810),
    E = n(915089),
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
    O = n(427262),
    $ = n(448613),
    U = n(8925),
    V = n(939496),
    k = n(518477),
    D = n(307731),
    F = n(818348),
    G = n(650583),
    Y = n(375708),
    H = n(954024);
function B(e) {
    let {
            user: t,
            guildId: n,
            entry: a,
            sourceType: i,
            sourceDetails: s,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: f, setInteractionToast: h } = (0, P.Pq)(),
        { theme: m } = (0, V.E)(),
        A = (0, o.bG)([_.A], () => _.A.theme),
        x = (0, M.M)(A) ? !(0, M.M)(m) : (0, M.M)(m),
        T = r.useRef(null);
    async function S(e) {
        if (null == e) return;
        i === k.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : i === k.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: l, sourceDetails: r } = e,
                a = `:${t.name}:`;
            switch (l) {
                case k.dS.ACTIVITY:
                    let i = Y.intl.formatToPlainString(Y.t.EUFEJt, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${i}*${s}
${a}`
                        : `${U.c5}${i}*
${a}`;
                case k.dS.AVATAR:
                    let o = Y.intl.formatToPlainString(Y.t.E6H15q, { username: n });
                    return `${U.c5}${o}*
${a}`;
                case k.dS.STATUS:
                    let u = Y.intl.formatToPlainString(Y.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${u}*${c}
${a}`
                        : `${U.c5}${u}*
${a}`;
                default:
                    (0, w.xb)(l);
            }
        })({ emoji: e, username: O.Ay.getName(t), sourceType: i, sourceDetails: s });
        h(null);
        try {
            await (0, $.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: a,
            });
        } catch (e) {}
        h(k.AQ.REACT);
    }
    return (
        r.useEffect(() => {
            u?.(T?.current);
        }, [T, u]),
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
            headerClassName: x ? H.X : void 0,
            guildId: n ?? void 0,
            closePopout: F.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: n } = e;
                await S(t), n && (f(), d?.());
            },
            pickerIntention: D.EmojiIntention.PROFILE,
        })
    );
}
var Q = n(478437),
    q = n(305866),
    z = n(355622),
    W = n(408018),
    K = n(273754),
    X = n(95701),
    J = n(767523);
let Z = (0, X.createChannelRecord)({ id: "1", type: Q.r.DM });
function ee(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
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
        [T, S] = r.useState(""),
        [g, p] = r.useState((0, W.x7)(T)),
        E = r.useRef(!1),
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
                    let a = Y.intl.formatToPlainString(Y.t.WmvMCo, { username: n }),
                        i = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${a}*${i}
${t}`
                        : `${U.c5}${a}*
${t}`;
                case k.dS.AVATAR:
                    let s = Y.intl.formatToPlainString(Y.t.lpaBsB, { username: n });
                    return `${U.c5}${s}*
${t}`;
                case k.dS.STATUS:
                    let o = Y.intl.formatToPlainString(Y.t.lFXgFV, { username: n }),
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
        })({ input: e, username: O.Ay.getName(t), sourceType: s, sourceDetails: o });
        A(null);
        try {
            await (0, $.p)({
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
            className: i()(J.kL, j, { [J.GE]: null != x }),
            children: (0, l.jsx)(K.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: J.hF,
                innerClassName: J.rn,
                editorClassName: J.EN,
                type: z.oU.USER_PROFILE_REPLY,
                placeholder: Y.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case k.dS.ACTIVITY:
                                return Y.t.Qn081O;
                            case k.dS.AVATAR:
                                return Y.t.xGNPFK;
                            case k.dS.STATUS:
                                return Y.t.g9BTCM;
                            default:
                                (0, w.xb)(e);
                        }
                    })(s),
                    { username: C.Ay.getName(n, a, t) },
                ),
                channel: Z,
                textValue: T,
                richValue: g,
                onChange: (e, t, n) => {
                    t !== T && (S(t), p(n));
                },
                focused: E.current,
                onFocus: () => {
                    E.current = !0;
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
    let { user: t, guildId: n, channelId: r, themeType: a, onClose: i, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: h,
        } = (0, P.Pq)(),
        m = [et.d.MODAL, et.d.MODAL_V2].includes(a) ? (0, b.n)(t.id, n) : void 0,
        A = c === o.sourceType && u === k.AQ.REACT,
        x = c === o.sourceType && u === k.AQ.REPLY,
        T = (A || x) && f === o.sourceId;
    return (0, l.jsx)(L.Y, {
        targetElementRef: h ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: s } = e;
            return (0, l.jsx)(A ? B : ee, {
                user: t,
                guildId: n,
                channelId: r,
                themeType: a,
                onClose: i,
                modalKey: m,
                setPopoutRef: s,
                ...o,
            });
        },
        onRequestClose: () => {
            d(), i?.();
        },
        shouldShow: T,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: l } = e;
            return t === k.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : l === et.d.MODAL || l === et.d.MODAL_V2 || n === k.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: u, interactionSource: c, themeType: a }),
        children: s,
    });
}
var el = n(22231),
    er = n(241326),
    ea = n(885386),
    ei = n(33969),
    es = n(777357);
function eo(e) {
    let { isVisible: t, isExpandable: a, onCloseProfile: s, editButtonRef: o } = e,
        { analyticsLocations: u } = (0, p.Ay)(),
        { trackUserProfileAction: d } = (0, N.NJ)(),
        f = r.useRef(null),
        { themeType: h } = (0, V.E)();
    return (0, l.jsxs)(ei.A, {
        className: i()(es.oO, { [es.RK]: t, [es.lu]: a }),
        children: [
            (0, l.jsx)(ei.Y, {
                variant: "custom-status",
                ref: o,
                tooltipText: Y.intl.string(Y.t.bt75uw),
                shouldDelayTooltip: a,
                onClick: function () {
                    d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                        (function (e) {
                            let { analyticsLocations: t, stackingBehavior: r, returnRef: a } = e;
                            (0, c.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("376991"),
                                        n.e("653"),
                                        n.e("25300"),
                                        n.e("291103"),
                                        n.e("875762"),
                                        n.e("526807"),
                                        n.e("428367"),
                                        n.e("348900"),
                                        n.e("220287"),
                                        n.e("655552"),
                                        n.e("420491"),
                                        n.e("772163"),
                                        n.e("689122"),
                                    ]).then(n.bind(n, 657977));
                                    return (n) => (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: t, returnRef: a });
                                },
                                null != r ? { stackingBehavior: r } : void 0,
                            );
                        })({
                            analyticsLocations: u,
                            stackingBehavior: h === et.d.MODAL_V2 ? "stack" : void 0,
                            returnRef: o,
                        }),
                        s?.();
                },
                "aria-label": Y.intl.string(Y.t.QdHxos),
                "aria-haspopup": "dialog",
                icon: el.PencilIcon,
            }),
            (0, l.jsx)(ei.Y, {
                variant: "custom-status",
                ref: f,
                tooltipText: Y.intl.string(Y.t.VkKicb),
                shouldDelayTooltip: a,
                onClick: function () {
                    d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }),
                        ea.G2.updateSetting(void 0),
                        requestAnimationFrame(() => o.current?.focus());
                },
                "aria-label": Y.intl.string(Y.t.wfYTHe),
                icon: er.TrashIcon,
            }),
        ],
    });
}
var eu = n(502622);
function ec(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", {
        className: i()(eu.nL, n),
        children: (0, l.jsx)("div", {
            className: eu.A7,
            children: (0, l.jsx)("span", { className: eu.vW, children: t }),
        }),
    });
}
let ed = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: a, addButtonRef: s } = e,
            o = (0, E.GV)(),
            { analyticsLocations: u } = (0, p.Ay)(),
            { trackUserProfileAction: A } = (0, N.NJ)(),
            { themeType: x } = (0, V.E)(),
            T = null != a ? a.label() : Y.intl.string(Y.t.evw0oz),
            S = (0, l.jsxs)("div", {
                className: eu.Qs,
                children: [
                    (0, l.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        className: i()(eu.ch, null != a && eu.R9),
                        children: T,
                    }),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ec, { children: S }),
                (0, l.jsx)("div", {
                    className: i()(eu.kL, eu.LL),
                    ref: t,
                    children: (0, l.jsx)(h.D, {
                        innerRef: s,
                        className: eu.A7,
                        "aria-label": Y.intl.string(Y.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: function () {
                            A({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("376991"),
                                            n.e("653"),
                                            n.e("25300"),
                                            n.e("291103"),
                                            n.e("875762"),
                                            n.e("526807"),
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
                                                prompt: a,
                                                returnRef: s,
                                            });
                                    },
                                    x === et.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: eu.hN },
                        children: (0, l.jsxs)("span", {
                            className: i()(eu.vW, eu.vk),
                            children: [
                                (0, l.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                                (0, l.jsxs)(m.A, { id: o, children: [Y.intl.string(Y.t.EVV6uZ), ": ", T] }),
                                (0, l.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    className: i()(eu.ch, null != a && eu.R9),
                                    "aria-hidden": "true",
                                    children: T,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    ef = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: a,
                statusLabel: c,
                themeType: d,
                animate: g,
                className: p,
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
            O = r.useRef(null),
            $ = (0, E.GV)(),
            U = r.useRef(M),
            V = r.useRef(M),
            D = null != n && null == a,
            [F, G] = r.useState(!1),
            [H, B] = r.useState(!0),
            [Q, q] = r.useState(!D && j),
            [z, W] = r.useState(!1),
            K = j && F,
            X = d === et.d.MODAL || d === et.d.MODAL_V2,
            J = r.useCallback((e) => (X ? e : Math.min(e, I)), [I, X]),
            Z = (0, o.bG)([T.Ay], () => T.Ay.useReducedMotion),
            [ee] = r.useState(() => new u.Ep());
        r.useEffect(() => () => ee.stop(), [ee]),
            r.useEffect(() => {
                C?.onInteractionPopoutTargetRefChange(_);
            }, [C]);
        let [en, el] = (0, A.z)(() => ({ maxHeight: `${U.current}px`, config: { clamp: !0, duration: 150 } }));
        function er(e) {
            Q &&
                (W(e),
                e
                    ? el({ maxHeight: `${J(V.current)}px`, delay: 300 * !Z, config: { clamp: !0, duration: 150 * !Z } })
                    : el({ maxHeight: `${Math.min(U.current, M)}px`, delay: 0 }),
                Z ? B(!e) : ee.start(e ? 300 : 150, () => B(!e)));
        }
        r.useLayoutEffect(() => {
            if ((G(!0), null == w.current || null == O.current || !K)) return;
            let e = w.current.getBoundingClientRect().height,
                t = O.current.getBoundingClientRect().height,
                n = J(t);
            q(n > e), (U.current = e), (V.current = t), el({ maxHeight: `${H ? Math.min(U.current, M) : n}px` });
        }, [K, a, n, el, H, M, J]);
        let ea =
                null != n
                    ? (0, l.jsx)(S.A, { emoji: n, animate: g, hideTooltip: !1, tooltipDelay: k.In, className: eu.H0 })
                    : null,
            ei = null != a ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: eu.qS, children: a }) : null,
            es =
                void 0 !== y && null == n
                    ? (0, l.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${Y.intl.string(Y.t.EVV6uZ)}: ${y}`,
                          className: i()(eu.qS, eu.R9),
                          children: y ?? "",
                      })
                    : null,
            eo = null == ei || "" === a ? es : ei,
            ed = (0, l.jsxs)("div", { className: eu.Qs, children: [ea, eo] }),
            ef = (0, l.jsxs)("div", { ref: w, className: i()(eu.Qs, eu.mj), children: [ea, eo] }),
            eh = (0, l.jsxs)("div", { ref: O, className: i()(eu.Qs, eu.m2, eu.mj), children: [ea, eo] }),
            em = Y.intl.string(z ? Y.t.fFaN1b : Y.t.xPkLPy),
            eA = Q
                ? (0, l.jsx)(m.A, {
                      showOnFocus: !0,
                      children: (0, l.jsx)(h.D, {
                          className: eu.uJ,
                          "aria-label": em,
                          "aria-controls": $,
                          "aria-expanded": z,
                          onClick: () => er(!z),
                          focusProps: { ringClassName: eu.o5 },
                          children: (0, l.jsx)(x.a, {
                              size: "xs",
                              color: "currentColor",
                              className: z ? eu.DE : void 0,
                          }),
                      }),
                  })
                : null,
            ex = (0, l.jsx)("div", {
                ref: t,
                className: eu.A7,
                role: "group",
                "aria-label": c,
                children: (0, l.jsx)("span", {
                    className: eu.vW,
                    children: (0, l.jsxs)(s.animated.div, {
                        id: $,
                        style: en,
                        className: i()(eu.Qs, { [eu.m2]: !H && X, [eu.p$]: !H && !X }),
                        children: [ea, eo],
                    }),
                }),
            }),
            eT = (0, l.jsxs)(ec, { children: [ed, ef, eh] });
        return null == R
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eT,
                      (0, l.jsxs)("div", {
                          ref: _,
                          className: i()(eu.kL, p),
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
                      eT,
                      (0, l.jsxs)("div", {
                          ref: _,
                          className: i()(eu.kL, p),
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
    eh = r.forwardRef(function (e, t) {
        let { emoji: n, text: a, onCloseProfile: i, editButtonRef: s, ...o } = e,
            [u, c] = r.useState(!1);
        return (0, l.jsx)(ef, {
            ...o,
            ref: t,
            emoji: n,
            text: a,
            className: eu.LL,
            onShowToolbar: c,
            renderToolbar: (e) =>
                (0, l.jsx)(eo, { isVisible: u, isExpandable: e, onCloseProfile: i, editButtonRef: s }),
        });
    });
function em(e) {
    let t,
        { emoji: n, text: a, user: i, guildId: s, channelId: o, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, N.NJ)(),
        { interactionType: f, interactionSource: h, resetInteraction: m } = (0, P.Pq)(),
        A = h === k.dS.STATUS && f === k.AQ.REACT,
        x = h === k.dS.STATUS && f === k.AQ.REPLY,
        T = A || x,
        S = r.useRef(null),
        g = r.useRef(n),
        p = r.useRef(a);
    r.useEffect(() => {
        h === k.dS.STATUS && ((g.current !== n || p.current !== a) && m(), (g.current = n), (p.current = a));
    }, [h, m, n, a]);
    let [E, v] = r.useState(!1),
        y = r.useCallback(
            (e) => {
                (e || !T) && v(e);
            },
            [T],
        );
    return (0, l.jsx)(en, {
        user: i,
        guildId: s,
        channelId: o,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : R.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == a ? t : null == t ? a : `${t} ${a}`),
        sourceType: k.dS.STATUS,
        onAction: d,
        onClose: () => v(!1),
        children: () =>
            (0, l.jsx)(ef, {
                ...c,
                ref: S,
                emoji: n,
                text: a,
                themeType: u,
                className: T ? eu.zf : void 0,
                onShowToolbar: y,
                renderToolbar: (e) =>
                    (0, l.jsx)(U.Ay, {
                        targetRef: S,
                        user: i,
                        sourceType: k.dS.STATUS,
                        isVisible: E && !T,
                        isExpandable: e,
                        onAction: d,
                    }),
            }),
    });
}
let eA = r.forwardRef(function (e, t) {
    let {
            user: n,
            guildId: a,
            channelId: i,
            onCloseProfile: s,
            previewText: u,
            previewEmoji: c,
            placeholderText: d,
            prompt: f,
            disableToolbar: h = !1,
            ...m
        } = e,
        A = (0, v.A)(n.id),
        { analyticsLocations: x } = (0, p.Ay)(g.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        T = r.useRef(null),
        S = null != u || null != c,
        E = (0, y.G)(S ? u : A?.state),
        R = (0, o.bG)([j.default], () => j.default.getId() === n.id),
        N = R && !h,
        P = C.Ay.useName(a, i, n),
        L = R ? Y.intl.string(Y.t.SlKMnR) : Y.intl.formatToPlainString(Y.t["91lTRe"], { name: P }),
        b = !R && !n.bot && !h;
    if (S) {
        let e = null != E && "" !== E ? E : null;
        return (0, l.jsx)(p.f5, {
            value: x,
            children: (0, l.jsx)(ef, { emoji: c ?? null, text: e, statusLabel: L, placeholderText: d, ref: t, ...m }),
        });
    }
    let M = A?.emoji ?? null,
        I = null != E && "" !== E ? E : null;
    return null != M || null != I || N
        ? null == M && null == I
            ? (0, l.jsx)(p.f5, {
                  value: x,
                  children: (0, l.jsx)(ed, { onCloseProfile: s, prompt: f, ref: t, addButtonRef: T }),
              })
            : b
              ? (0, l.jsx)(p.f5, {
                    value: x,
                    children: (0, l.jsx)(em, {
                        user: n,
                        guildId: a,
                        channelId: i,
                        emoji: M,
                        text: I,
                        statusLabel: L,
                        ...m,
                    }),
                })
              : N
                ? (0, l.jsx)(p.f5, {
                      value: x,
                      children: (0, l.jsx)(eh, {
                          emoji: M,
                          text: I,
                          statusLabel: L,
                          onCloseProfile: s,
                          editButtonRef: T,
                          ref: t,
                          ...m,
                      }),
                  })
                : (0, l.jsx)(p.f5, {
                      value: x,
                      children: (0, l.jsx)(ef, { emoji: M, text: I, statusLabel: L, ref: t, ...m }),
                  })
        : null;
});
