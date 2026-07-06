"use strict";
n.d(t, { A: () => eE });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    _ = n(834730),
    h = n(939249),
    f = n(140735),
    E = n(717421),
    p = n(187322),
    m = n(775602),
    g = n(51183),
    A = n(793574),
    I = n(688810),
    T = n(915089),
    S = n(410540),
    N = n(7584),
    C = n(280450),
    y = n(183555),
    O = n(679492),
    R = n(922016),
    v = n(403777),
    b = n(462887),
    L = n(334295),
    D = n(363195),
    w = n(403362),
    P = n(427262),
    M = n(448613),
    x = n(8925),
    U = n(939496),
    k = n(518477),
    G = n(307731),
    V = n(818348),
    F = n(650583),
    B = n(375708),
    H = n(435693);
function j(e) {
    let {
            user: t,
            guildId: n,
            entry: s,
            sourceType: a,
            sourceDetails: o,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: _, setInteractionToast: h } = (0, O.Pq)(),
        { theme: f } = (0, U.E)(),
        E = (0, l.bG)([D.A], () => D.A.theme),
        p = (0, b.M)(E) ? !(0, b.M)(f) : (0, b.M)(f),
        m = r.useRef(null);
    r.useEffect(() => {
        u?.(m?.current);
    }, [m, u]),
        r.useEffect(() => {
            function e(e) {
                e.key === F.dh.ESCAPE && (e.stopPropagation(), _());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, _]);
    let g = async (e) => {
        if (null == e) return;
        a === k.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : a === k.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: i, sourceDetails: r } = e,
                s = `:${t.name}:`;
            switch (i) {
                case k.dS.ACTIVITY:
                    let a = B.intl.formatToPlainString(B.t.EUFEJt, { username: n }),
                        o = `
> ${r}`;
                    return null != r
                        ? `${x.c5}${a}*${o}
${s}`
                        : `${x.c5}${a}*
${s}`;
                case k.dS.AVATAR:
                    let l = B.intl.formatToPlainString(B.t.E6H15q, { username: n });
                    return `${x.c5}${l}*
${s}`;
                case k.dS.STATUS:
                    let u = B.intl.formatToPlainString(B.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${x.c5}${u}*${c}
${s}`
                        : `${x.c5}${u}*
${s}`;
                default:
                    (0, w.xb)(i);
            }
        })({ emoji: e, username: P.Ay.getName(t), sourceType: a, sourceDetails: o });
        h(null);
        try {
            await (0, M.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: s,
            });
        } catch (e) {}
        h(k.AQ.REACT);
    };
    return (0, i.jsx)(L.A, {
        headerClassName: p ? H.X : void 0,
        guildId: n ?? void 0,
        closePopout: V.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await g(t), n && (_(), d?.());
        },
        pickerIntention: G.EmojiIntention.PROFILE,
    });
}
var W = n(478437),
    Y = n(305866),
    K = n(355622),
    $ = n(408018),
    z = n(138617),
    q = n(95701),
    Z = n(562153),
    X = n(450262);
let Q = (0, q.createChannelRecord)({ id: "1", type: W.r.DM });
function J(e) {
    let {
            user: t,
            guildId: n,
            channelId: s,
            sourceType: o,
            sourceDetails: l,
            setPopoutRef: u,
            modalKey: c,
            onAction: d,
            onClose: _,
            entry: h,
        } = e,
        { resetInteraction: f, setInteractionToast: E } = (0, O.Pq)(),
        { primaryColor: p } = (0, U.E)(),
        [m, g] = r.useState(""),
        [A, I] = r.useState((0, $.x7)(m)),
        T = r.useRef(!1),
        S = r.useRef(null),
        N = r.useCallback(
            (e) => {
                e.key === F.dh.ESCAPE && (e.stopPropagation(), f());
            },
            [f],
        );
    r.useEffect(() => {
        u?.(S?.current);
    }, [S, u]);
    let C = async (e) => {
            if (null == e) return;
            o === k.dS.AVATAR
                ? d({ action: "SEND_REPLY_AVATAR" })
                : o === k.dS.STATUS
                  ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : d({ action: "SEND_REPLY_ACTIVITY" });
            let n = (function (e) {
                let { input: t, username: n, sourceType: i, sourceDetails: r } = e;
                switch (i) {
                    case k.dS.ACTIVITY:
                        let s = B.intl.formatToPlainString(B.t.WmvMCo, { username: n }),
                            a = `
> ${r}`;
                        return null != r
                            ? `${x.c5}${s}*${a}
${t}`
                            : `${x.c5}${s}*
${t}`;
                    case k.dS.AVATAR:
                        let o = B.intl.formatToPlainString(B.t.lpaBsB, { username: n });
                        return `${x.c5}${o}*
${t}`;
                    case k.dS.STATUS:
                        let l = B.intl.formatToPlainString(B.t.lFXgFV, { username: n }),
                            u = `
> ${r}`;
                        return null != r
                            ? `${x.c5}${l}*${u}
${t}`
                            : `${x.c5}${l}*
${t}`;
                    default:
                        (0, w.xb)(i);
                }
            })({ input: e, username: P.Ay.getName(t), sourceType: o, sourceDetails: l });
            E(null);
            try {
                await (0, M.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: h,
                });
            } catch (e) {}
            E(k.AQ.REPLY);
        },
        y = { [X.h5]: o === k.dS.STATUS, [X.my]: o === k.dS.AVATAR, [X.Eb]: o === k.dS.ACTIVITY };
    return (0, i.jsx)(Y.l, {
        ref: S,
        onKeyDown: N,
        children: (0, i.jsx)("div", {
            className: a()(X.kL, y, { [X.GE]: null != p }),
            children: (0, i.jsx)(z.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: X.hF,
                innerClassName: X.rn,
                editorClassName: X.EN,
                type: K.oU.USER_PROFILE_REPLY,
                placeholder: B.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case k.dS.ACTIVITY:
                                return B.t.Qn081O;
                            case k.dS.AVATAR:
                                return B.t.xGNPFK;
                            case k.dS.STATUS:
                                return B.t.g9BTCM;
                            default:
                                (0, w.xb)(e);
                        }
                    })(o),
                    { username: Z.Ay.getName(n, s, t) },
                ),
                channel: Q,
                textValue: m,
                richValue: A,
                onChange: (e, t, n) => {
                    t !== m && (g(t), I(n));
                },
                focused: T.current,
                onFocus: () => {
                    T.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return await C(n), f(), _?.(), { shouldClear: !0, shouldRefocus: !1 };
                    } catch {
                        return { shouldClear: !1, shouldRefocus: !1 };
                    }
                },
            }),
        }),
    });
}
var ee = n(996988);
function et(e) {
    let { user: t, guildId: n, channelId: r, themeType: s, onClose: a, children: o, ...l } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: _,
            interactionPopoutTargetRef: h,
        } = (0, O.Pq)(),
        f = [ee.d.MODAL, ee.d.MODAL_V2].includes(s) ? (0, v.n)(t.id, n) : void 0,
        E = c === l.sourceType && u === k.AQ.REACT,
        p = c === l.sourceType && u === k.AQ.REPLY,
        m = (E || p) && _ === l.sourceId;
    return (0, i.jsx)(R.Y, {
        targetElementRef: h ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: o } = e;
            return (0, i.jsx)(E ? j : J, {
                user: t,
                guildId: n,
                channelId: r,
                themeType: s,
                onClose: a,
                modalKey: f,
                setPopoutRef: o,
                ...l,
            });
        },
        onRequestClose: () => {
            d(), a?.();
        },
        shouldShow: m,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: i } = e;
            return t === k.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : i === ee.d.MODAL || i === ee.d.MODAL_V2 || n === k.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: u, interactionSource: c, themeType: s }),
        children: o,
    });
}
var en = n(990078),
    ei = n(22231),
    er = n(241326),
    es = n(101555),
    ea = n(885386),
    eo = n(242744);
function el(e) {
    let { isVisible: t, isExpandable: s, onCloseProfile: o } = e,
        { analyticsLocations: u } = (0, I.Ay)(),
        { trackUserProfileAction: d } = (0, y.NJ)(),
        _ = r.useRef(null),
        h = r.useRef(null),
        [f, E] = (0, l.yK)([m.Ay], () => [m.Ay.useReducedMotion, m.Ay.keyboardModeEnabled]),
        p = !s || f || E ? 0 : 300,
        { themeType: g } = (0, U.E)();
    return (0, i.jsxs)(es.Ay, {
        className: a()(eo.oO, { [eo.RK]: t, [eo.lu]: s }),
        children: [
            (0, i.jsx)(en.m, {
                asContainer: !0,
                targetElementRef: _,
                text: B.intl.string(B.t.bt75uw),
                delay: p,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: _,
                    className: a()(eo.x6, eo.kb),
                    "aria-label": B.intl.string(B.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: function () {
                        d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            (function (e) {
                                let { analyticsLocations: t, stackingBehavior: r } = e;
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("12410"),
                                            n.e("57328"),
                                            n.e("59252"),
                                            n.e("4803"),
                                            n.e("67251"),
                                            n.e("28367"),
                                            n.e("48900"),
                                            n.e("20287"),
                                            n.e("20491"),
                                            n.e("55552"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (n) => (0, i.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                    },
                                    null != r ? { stackingBehavior: r } : void 0,
                                );
                            })({ analyticsLocations: u, stackingBehavior: g === ee.d.MODAL_V2 ? "stack" : void 0 }),
                            o?.();
                    },
                    children: (0, i.jsx)(ei.R, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
            (0, i.jsx)(en.m, {
                asContainer: !0,
                text: B.intl.string(B.t.VkKicb),
                delay: p,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: h,
                    className: a()(eo.x6, eo.pG),
                    "aria-label": B.intl.string(B.t.wfYTHe),
                    onClick: function () {
                        d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), ea.G2.updateSetting(void 0);
                    },
                    children: (0, i.jsx)(er.u, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
        ],
    });
}
var eu = n(713305);
function ec(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: a()(eu.nL, n),
        children: (0, i.jsx)("div", {
            className: eu.A7,
            children: (0, i.jsx)("span", { className: eu.vW, children: t }),
        }),
    });
}
let ed = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: s } = e,
            o = (0, T.GV)(),
            { analyticsLocations: l } = (0, I.Ay)(),
            { trackUserProfileAction: u } = (0, y.NJ)(),
            { themeType: E } = (0, U.E)(),
            p = null != s ? s.label() : B.intl.string(B.t.evw0oz),
            m = (0, i.jsxs)("div", {
                className: eu.Qs,
                children: [
                    (0, i.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                    (0, i.jsx)(_.E, {
                        variant: "text-sm/normal",
                        className: a()(eu.ch, null != s && eu.R9),
                        children: p,
                    }),
                ],
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ec, { children: m }),
                (0, i.jsx)("div", {
                    className: a()(eu.kL, eu.LL),
                    ref: t,
                    children: (0, i.jsx)(h.D, {
                        className: eu.A7,
                        "aria-label": B.intl.string(B.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: function () {
                            u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("12410"),
                                            n.e("57328"),
                                            n.e("59252"),
                                            n.e("4803"),
                                            n.e("67251"),
                                            n.e("28367"),
                                            n.e("48900"),
                                            n.e("20287"),
                                            n.e("20491"),
                                            n.e("55552"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (t) => (0, i.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: s });
                                    },
                                    E === ee.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: eu.hN },
                        children: (0, i.jsxs)("span", {
                            className: a()(eu.vW, eu.vk),
                            children: [
                                (0, i.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                                (0, i.jsxs)(f.A, { id: o, children: [B.intl.string(B.t.EVV6uZ), ": ", p] }),
                                (0, i.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    className: a()(eu.ch, null != s && eu.R9),
                                    "aria-hidden": "true",
                                    children: p,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    e_ = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: s,
                animate: c,
                className: d,
                renderToolbar: h,
                onShowToolbar: f,
                placeholderText: A,
                hasEntered: I = !0,
            } = e,
            T = (0, O.NR)(),
            { trackUserProfileAction: S } = (0, y.NJ)(),
            N = 1.25 * (null != n),
            C = 36 + N,
            R = 144 + N,
            v = r.useRef(null),
            b = r.useRef(null),
            L = r.useRef(null),
            D = r.useRef(C),
            w = r.useRef(R),
            P = null != n && null == s,
            [M, x] = r.useState(!1),
            [U, G] = r.useState(!0),
            [V, F] = r.useState(!P && I),
            H = I && M,
            j = (0, l.bG)([m.Ay], () => m.Ay.useReducedMotion),
            [W] = r.useState(() => new u.Ep());
        r.useEffect(() => () => W.stop(), [W]),
            r.useEffect(() => {
                T?.onInteractionPopoutTargetRefChange(v);
            }, [T]);
        let [Y, K] = (0, E.z)(() => ({ maxHeight: `${D.current}px`, config: { clamp: !0, duration: 150 } }));
        function $(e) {
            V &&
                (e
                    ? K({
                          maxHeight: `${Math.min(w.current, R)}px`,
                          delay: 300 * !j,
                          config: { clamp: !0, duration: 150 * !j },
                      })
                    : K({ maxHeight: `${Math.min(D.current, C)}px`, delay: 0 }),
                j ? G(!e) : W.start(e ? 300 : 150, () => G(!e)));
        }
        r.useLayoutEffect(() => {
            if ((x(!0), null == b.current || null == L.current || !H)) return;
            let e = b.current.getBoundingClientRect().height,
                t = L.current.getBoundingClientRect().height;
            F(t > e),
                (D.current = e),
                (w.current = t),
                K({ maxHeight: `${Math.min(U ? D.current : w.current, U ? C : R)}px` });
        }, [H, s, n, K, U, C, R]);
        let z =
                null != n
                    ? (0, i.jsx)(g.A, { emoji: n, animate: c, hideTooltip: !1, tooltipDelay: k.In, className: eu.H0 })
                    : null,
            q = null != s ? (0, i.jsx)(_.E, { variant: "text-sm/normal", className: eu.qS, children: s }) : null,
            Z =
                void 0 !== A && null == n
                    ? (0, i.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${B.intl.string(B.t.EVV6uZ)}: ${A}`,
                          className: a()(eu.qS, eu.R9),
                          children: A ?? "",
                      })
                    : null,
            X = null == q || "" === s ? Z : q,
            Q = (0, i.jsxs)("div", { ref: b, className: eu.Qs, children: [z, X] }),
            J = (0, i.jsxs)("div", { ref: L, className: a()(eu.Qs, eu.m2), children: [z, X] }),
            ee = (0, i.jsx)("div", {
                ref: t,
                className: eu.A7,
                children: (0, i.jsx)("span", {
                    className: eu.vW,
                    children: (0, i.jsxs)(o.animated.div, {
                        style: Y,
                        className: a()(eu.Qs, { [eu.m2]: !U }),
                        children: [z, X],
                    }),
                }),
            }),
            et = (0, i.jsxs)(ec, { children: [Q, J] });
        return null == f
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: v,
                          className: a()(eu.kL, d),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), $(!0);
                          },
                          onMouseLeave: () => {
                              $(!1);
                          },
                          onFocus: () => $(!0),
                          onBlur: () => $(!1),
                          children: [
                              (0, i.jsx)(p.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: eu.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": B.intl.formatToPlainString(B.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              h?.(V),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: v,
                          className: a()(eu.kL, d),
                          onFocus: () => {
                              f(!0), $(!0);
                          },
                          onBlur: (e) => {
                              v.current?.contains(e.relatedTarget) || (f(!1), $(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), f(!0), $(!0);
                          },
                          onMouseLeave: () => {
                              f(!1), $(!1);
                          },
                          children: [
                              (0, i.jsx)(p.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: eu.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": B.intl.formatToPlainString(B.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              h?.(V),
                          ],
                      }),
                  ],
              });
    }),
    eh = r.forwardRef(function (e, t) {
        let { emoji: n, text: s, onCloseProfile: a, ...o } = e,
            [l, u] = r.useState(!1);
        return (0, i.jsx)(e_, {
            ...o,
            ref: t,
            emoji: n,
            text: s,
            className: eu.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, i.jsx)(el, { isVisible: l, isExpandable: e, onCloseProfile: a }),
        });
    });
function ef(e) {
    let t,
        { emoji: n, text: s, user: a, guildId: o, channelId: l, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, y.NJ)(),
        { interactionType: _, interactionSource: h, resetInteraction: f } = (0, O.Pq)(),
        E = h === k.dS.STATUS && _ === k.AQ.REACT,
        p = h === k.dS.STATUS && _ === k.AQ.REPLY,
        m = E || p,
        g = r.useRef(null),
        A = r.useRef(n),
        I = r.useRef(s);
    r.useEffect(() => {
        h === k.dS.STATUS && ((A.current !== n || I.current !== s) && f(), (A.current = n), (I.current = s));
    }, [h, f, n, s]);
    let [T, S] = r.useState(!1),
        C = r.useCallback(
            (e) => {
                (e || !m) && S(e);
            },
            [m],
        );
    return (0, i.jsx)(et, {
        user: a,
        guildId: o,
        channelId: l,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : N.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == s ? t : null == t ? s : `${t} ${s}`),
        sourceType: k.dS.STATUS,
        onAction: d,
        onClose: () => S(!1),
        children: () =>
            (0, i.jsx)(e_, {
                ...c,
                ref: g,
                emoji: n,
                text: s,
                themeType: u,
                className: m ? eu.zf : void 0,
                onShowToolbar: C,
                renderToolbar: (e) =>
                    (0, i.jsx)(x.Ay, {
                        targetRef: g,
                        user: a,
                        sourceType: k.dS.STATUS,
                        isVisible: T && !m,
                        isExpandable: e,
                        onAction: d,
                    }),
            }),
    });
}
let eE = r.forwardRef(function (e, t) {
    let {
            user: n,
            onCloseProfile: r,
            previewText: s,
            previewEmoji: a,
            placeholderText: o,
            prompt: u,
            disableToolbar: c = !1,
            ...d
        } = e,
        _ = (0, S.A)(n.id),
        { analyticsLocations: h } = (0, I.Ay)(A.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        f = (0, l.bG)([C.default], () => C.default.getId() === n.id),
        E = f && !c,
        p = !f && !n.bot && !c;
    if (null != s || null != a)
        return (0, i.jsx)(I.f5, {
            value: h,
            children: (0, i.jsx)(e_, {
                emoji: a ?? null,
                text: null != s && "" !== s ? s : null,
                placeholderText: o,
                ref: t,
                ...d,
            }),
        });
    let m = _?.emoji ?? null,
        g = _?.state ?? null,
        T = null != g && "" !== g ? g : null;
    return null != m || null != T || E
        ? null == m && null == T
            ? (0, i.jsx)(I.f5, { value: h, children: (0, i.jsx)(ed, { onCloseProfile: r, prompt: u, ref: t, ...d }) })
            : p
              ? (0, i.jsx)(I.f5, { value: h, children: (0, i.jsx)(ef, { user: n, emoji: m, text: T, ...d }) })
              : E
                ? (0, i.jsx)(I.f5, {
                      value: h,
                      children: (0, i.jsx)(eh, { emoji: m, text: T, onCloseProfile: r, ref: t, ...d }),
                  })
                : (0, i.jsx)(I.f5, { value: h, children: (0, i.jsx)(e_, { emoji: m, text: T, ref: t, ...d }) })
        : null;
});
