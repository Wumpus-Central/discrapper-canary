n.d(t, { A: () => ex });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
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
    g = n(51183),
    T = n(793574),
    E = n(688810),
    p = n(915089),
    v = n(410540),
    y = n(7584),
    R = n(208971),
    j = n(280450),
    C = n(562153),
    N = n(183555),
    P = n(679492),
    L = n(922016),
    b = n(403777),
    M = n(462887),
    _ = n(267889),
    w = n(363195),
    I = n(403362),
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
            entry: a,
            sourceType: i,
            sourceDetails: s,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: f, setInteractionToast: h } = (0, P.Pq)(),
        { theme: m } = (0, V.E)(),
        A = (0, o.bG)([w.A], () => w.A.theme),
        x = (0, M.M)(A) ? !(0, M.M)(m) : (0, M.M)(m),
        S = r.useRef(null);
    async function g(e) {
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
                    let i = H.intl.formatToPlainString(H.t.EUFEJt, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${i}*${s}
${a}`
                        : `${U.c5}${i}*
${a}`;
                case k.dS.AVATAR:
                    let o = H.intl.formatToPlainString(H.t.E6H15q, { username: n });
                    return `${U.c5}${o}*
${a}`;
                case k.dS.STATUS:
                    let u = H.intl.formatToPlainString(H.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${u}*${c}
${a}`
                        : `${U.c5}${u}*
${a}`;
                default:
                    (0, I.xb)(l);
            }
        })({ emoji: e, username: $.Ay.getName(t), sourceType: i, sourceDetails: s });
        h(null);
        try {
            await (0, O.p)({
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
        (0, l.jsx)(_.A, {
            headerClassName: x ? Y.X : void 0,
            guildId: n ?? void 0,
            closePopout: F.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: n } = e;
                await g(t), n && (f(), d?.());
            },
            pickerIntention: D.EmojiIntention.PROFILE,
        })
    );
}
var Q = n(478437),
    z = n(305866),
    q = n(355622),
    K = n(408018),
    W = n(273754),
    X = n(95701),
    J = n(451438);
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
        [S, g] = r.useState(""),
        [T, E] = r.useState((0, K.x7)(S)),
        p = r.useRef(!1),
        v = r.useRef(null),
        y = r.useCallback(
            (e) => {
                e.key === G.dh.ESCAPE && (e.stopPropagation(), m());
            },
            [m],
        );
    async function R(e) {
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
                    let a = H.intl.formatToPlainString(H.t.WmvMCo, { username: n }),
                        i = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${a}*${i}
${t}`
                        : `${U.c5}${a}*
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
                    (0, I.xb)(l);
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
    return (0, l.jsx)(z.l, {
        ref: v,
        onKeyDown: y,
        children: (0, l.jsx)("div", {
            className: i()(J.kL, j, { [J.GE]: null != x }),
            children: (0, l.jsx)(W.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: J.hF,
                innerClassName: J.rn,
                editorClassName: J.EN,
                type: q.oU.USER_PROFILE_REPLY,
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
                                (0, I.xb)(e);
                        }
                    })(s),
                    { username: C.Ay.getName(n, a, t) },
                ),
                channel: Z,
                textValue: S,
                richValue: T,
                onChange: (e, t, n) => {
                    t !== S && (g(t), E(n));
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
                        return await R(n), m(), f?.(), { shouldClear: !0, shouldRefocus: !1 };
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
        S = (A || x) && f === o.sourceId;
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
        shouldShow: S,
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
var el = n(866665),
    er = n(22231),
    ea = n(241326),
    ei = n(101555),
    es = n(885386),
    eo = n(818832);
function eu(e) {
    let { isVisible: t, isExpandable: a, onCloseProfile: s } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, N.NJ)(),
        f = r.useRef(null),
        h = r.useRef(null),
        [m, A] = (0, o.yK)([S.Ay], () => [S.Ay.useReducedMotion, S.Ay.keyboardModeEnabled]),
        x = !a || m || A ? 0 : 300,
        { themeType: g } = (0, V.E)();
    return (0, l.jsxs)(ei.Ay, {
        className: i()(eo.oO, { [eo.RK]: t, [eo.lu]: a }),
        children: [
            (0, l.jsx)(el.m, {
                asContainer: !0,
                targetElementRef: f,
                text: H.intl.string(H.t.bt75uw),
                delay: x,
                ariaHidden: !0,
                children: (0, l.jsx)(ei.$n, {
                    ref: f,
                    className: i()(eo.x6, eo.kb),
                    "aria-label": H.intl.string(H.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: function () {
                        d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            (function (e) {
                                let { analyticsLocations: t, stackingBehavior: r } = e;
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("11895"),
                                            n.e("69960"),
                                            n.e("81301"),
                                            n.e("9140"),
                                            n.e("97779"),
                                            n.e("61091"),
                                            n.e("28367"),
                                            n.e("48900"),
                                            n.e("20287"),
                                            n.e("55552"),
                                            n.e("20491"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (n) => (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                    },
                                    null != r ? { stackingBehavior: r } : void 0,
                                );
                            })({ analyticsLocations: u, stackingBehavior: g === et.d.MODAL_V2 ? "stack" : void 0 }),
                            s?.();
                    },
                    children: (0, l.jsx)(er.R, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
            (0, l.jsx)(el.m, {
                asContainer: !0,
                text: H.intl.string(H.t.VkKicb),
                delay: x,
                ariaHidden: !0,
                children: (0, l.jsx)(ei.$n, {
                    ref: h,
                    className: i()(eo.x6, eo.pG),
                    "aria-label": H.intl.string(H.t.wfYTHe),
                    onClick: function () {
                        d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), es.G2.updateSetting(void 0);
                    },
                    children: (0, l.jsx)(ea.u, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
        ],
    });
}
var ec = n(258417);
function ed(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", {
        className: i()(ec.nL, n),
        children: (0, l.jsx)("div", {
            className: ec.A7,
            children: (0, l.jsx)("span", { className: ec.vW, children: t }),
        }),
    });
}
let ef = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: a } = e,
            s = (0, p.GV)(),
            { analyticsLocations: o } = (0, E.Ay)(),
            { trackUserProfileAction: u } = (0, N.NJ)(),
            { themeType: A } = (0, V.E)(),
            x = null != a ? a.label() : H.intl.string(H.t.evw0oz),
            S = (0, l.jsxs)("div", {
                className: ec.Qs,
                children: [
                    (0, l.jsx)(d.U, { size: "xs", className: ec.Tw, colorClass: ec.qv }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        className: i()(ec.ch, null != a && ec.R9),
                        children: x,
                    }),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ed, { children: S }),
                (0, l.jsx)("div", {
                    className: i()(ec.kL, ec.LL),
                    ref: t,
                    children: (0, l.jsx)(h.D, {
                        className: ec.A7,
                        "aria-label": H.intl.string(H.t["zrpF/b"]),
                        "aria-describedby": s,
                        onClick: function () {
                            u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("11895"),
                                            n.e("69960"),
                                            n.e("81301"),
                                            n.e("9140"),
                                            n.e("97779"),
                                            n.e("61091"),
                                            n.e("28367"),
                                            n.e("48900"),
                                            n.e("20287"),
                                            n.e("55552"),
                                            n.e("20491"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (t) => (0, l.jsx)(e, { ...t, sourceAnalyticsLocations: o, prompt: a });
                                    },
                                    A === et.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: ec.hN },
                        children: (0, l.jsxs)("span", {
                            className: i()(ec.vW, ec.vk),
                            children: [
                                (0, l.jsx)(d.U, { size: "xs", className: ec.Tw, colorClass: ec.qv }),
                                (0, l.jsxs)(m.A, { id: s, children: [H.intl.string(H.t.EVV6uZ), ": ", x] }),
                                (0, l.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    className: i()(ec.ch, null != a && ec.R9),
                                    "aria-hidden": "true",
                                    children: x,
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
                text: a,
                statusLabel: c,
                themeType: d,
                animate: T,
                className: E,
                renderToolbar: v,
                onShowToolbar: y,
                placeholderText: R,
                hasEntered: j = !0,
            } = e,
            C = (0, P.NR)(),
            { trackUserProfileAction: L } = (0, N.NJ)(),
            b = 1.25 * (null != n),
            M = 36 + b,
            _ = 144 + b,
            w = r.useRef(null),
            I = r.useRef(null),
            $ = r.useRef(null),
            O = (0, p.GV)(),
            U = r.useRef(M),
            V = r.useRef(M),
            D = null != n && null == a,
            [F, G] = r.useState(!1),
            [Y, B] = r.useState(!0),
            [Q, z] = r.useState(!D && j),
            [q, K] = r.useState(!1),
            W = j && F,
            X = d === et.d.MODAL || d === et.d.MODAL_V2,
            J = r.useCallback((e) => (X ? e : Math.min(e, _)), [_, X]),
            Z = (0, o.bG)([S.Ay], () => S.Ay.useReducedMotion),
            [ee] = r.useState(() => new u.Ep());
        r.useEffect(() => () => ee.stop(), [ee]),
            r.useEffect(() => {
                C?.onInteractionPopoutTargetRefChange(w);
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
            if ((G(!0), null == I.current || null == $.current || !W)) return;
            let e = I.current.getBoundingClientRect().height,
                t = $.current.getBoundingClientRect().height,
                n = J(t);
            z(n > e), (U.current = e), (V.current = t), el({ maxHeight: `${Y ? Math.min(U.current, M) : n}px` });
        }, [W, a, n, el, Y, M, J]);
        let ea =
                null != n
                    ? (0, l.jsx)(g.A, { emoji: n, animate: T, hideTooltip: !1, tooltipDelay: k.In, className: ec.H0 })
                    : null,
            ei = null != a ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: ec.qS, children: a }) : null,
            es =
                void 0 !== R && null == n
                    ? (0, l.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${H.intl.string(H.t.EVV6uZ)}: ${R}`,
                          className: i()(ec.qS, ec.R9),
                          children: R ?? "",
                      })
                    : null,
            eo = null == ei || "" === a ? es : ei,
            eu = (0, l.jsxs)("div", { className: ec.Qs, children: [ea, eo] }),
            ef = (0, l.jsxs)("div", { ref: I, className: i()(ec.Qs, ec.mj), children: [ea, eo] }),
            eh = (0, l.jsxs)("div", { ref: $, className: i()(ec.Qs, ec.m2, ec.mj), children: [ea, eo] }),
            em = H.intl.string(q ? H.t.fFaN1b : H.t.xPkLPy),
            eA = Q
                ? (0, l.jsx)(m.A, {
                      showOnFocus: !0,
                      children: (0, l.jsx)(h.D, {
                          className: ec.uJ,
                          "aria-label": em,
                          "aria-controls": O,
                          "aria-expanded": q,
                          onClick: () => er(!q),
                          focusProps: { ringClassName: ec.o5 },
                          children: (0, l.jsx)(x.a, {
                              size: "xs",
                              color: "currentColor",
                              className: q ? ec.DE : void 0,
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
                        className: i()(ec.Qs, { [ec.m2]: !Y && X, [ec.p$]: !Y && !X }),
                        children: [ea, eo],
                    }),
                }),
            }),
            eS = (0, l.jsxs)(ed, { children: [eu, ef, eh] });
        return null == y
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eS,
                      (0, l.jsxs)("div", {
                          ref: w,
                          className: i()(ec.kL, E),
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
                          ref: w,
                          className: i()(ec.kL, E),
                          onFocus: () => {
                              y(!0);
                          },
                          onBlur: (e) => {
                              w.current?.contains(e.relatedTarget) || y(!1);
                          },
                          onMouseEnter: () => {
                              L({ action: "HOVER_CUSTOM_STATUS" }), y(!0), er(!0);
                          },
                          onMouseLeave: () => {
                              y(!1), er(!1);
                          },
                          children: [ex, v?.(Q), eA],
                      }),
                  ],
              });
    }),
    em = r.forwardRef(function (e, t) {
        let { emoji: n, text: a, onCloseProfile: i, ...s } = e,
            [o, u] = r.useState(!1);
        return (0, l.jsx)(eh, {
            ...s,
            ref: t,
            emoji: n,
            text: a,
            className: ec.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, l.jsx)(eu, { isVisible: o, isExpandable: e, onCloseProfile: i }),
        });
    });
function eA(e) {
    let t,
        { emoji: n, text: a, user: i, guildId: s, channelId: o, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, N.NJ)(),
        { interactionType: f, interactionSource: h, resetInteraction: m } = (0, P.Pq)(),
        A = h === k.dS.STATUS && f === k.AQ.REACT,
        x = h === k.dS.STATUS && f === k.AQ.REPLY,
        S = A || x,
        g = r.useRef(null),
        T = r.useRef(n),
        E = r.useRef(a);
    r.useEffect(() => {
        h === k.dS.STATUS && ((T.current !== n || E.current !== a) && m(), (T.current = n), (E.current = a));
    }, [h, m, n, a]);
    let [p, v] = r.useState(!1),
        R = r.useCallback(
            (e) => {
                (e || !S) && v(e);
            },
            [S],
        );
    return (0, l.jsx)(en, {
        user: i,
        guildId: s,
        channelId: o,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : y.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == a ? t : null == t ? a : `${t} ${a}`),
        sourceType: k.dS.STATUS,
        onAction: d,
        onClose: () => v(!1),
        children: () =>
            (0, l.jsx)(eh, {
                ...c,
                ref: g,
                emoji: n,
                text: a,
                themeType: u,
                className: S ? ec.zf : void 0,
                onShowToolbar: R,
                renderToolbar: (e) =>
                    (0, l.jsx)(U.Ay, {
                        targetRef: g,
                        user: i,
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
            guildId: r,
            channelId: a,
            onCloseProfile: i,
            previewText: s,
            previewEmoji: u,
            placeholderText: c,
            prompt: d,
            disableToolbar: f = !1,
            ...h
        } = e,
        m = (0, v.A)(n.id),
        { analyticsLocations: A } = (0, E.Ay)(T.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        x = null != s || null != u,
        S = (0, R.G)(x ? s : m?.state),
        g = (0, o.bG)([j.default], () => j.default.getId() === n.id),
        p = g && !f,
        y = C.Ay.useName(r, a, n),
        N = g ? H.intl.string(H.t.SlKMnR) : H.intl.formatToPlainString(H.t["91lTRe"], { name: y }),
        P = !g && !n.bot && !f;
    if (x) {
        let e = null != S && "" !== S ? S : null;
        return (0, l.jsx)(E.f5, {
            value: A,
            children: (0, l.jsx)(eh, { emoji: u ?? null, text: e, statusLabel: N, placeholderText: c, ref: t, ...h }),
        });
    }
    let L = m?.emoji ?? null,
        b = null != S && "" !== S ? S : null;
    return null != L || null != b || p
        ? null == L && null == b
            ? (0, l.jsx)(E.f5, { value: A, children: (0, l.jsx)(ef, { onCloseProfile: i, prompt: d, ref: t }) })
            : P
              ? (0, l.jsx)(E.f5, {
                    value: A,
                    children: (0, l.jsx)(eA, {
                        user: n,
                        guildId: r,
                        channelId: a,
                        emoji: L,
                        text: b,
                        statusLabel: N,
                        ...h,
                    }),
                })
              : p
                ? (0, l.jsx)(E.f5, {
                      value: A,
                      children: (0, l.jsx)(em, { emoji: L, text: b, statusLabel: N, onCloseProfile: i, ref: t, ...h }),
                  })
                : (0, l.jsx)(E.f5, {
                      value: A,
                      children: (0, l.jsx)(eh, { emoji: L, text: b, statusLabel: N, ref: t, ...h }),
                  })
        : null;
});
