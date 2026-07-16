n.d(t, { A: () => ex });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(580929),
    o = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    f = n(834730),
    h = n(939249),
    m = n(140735),
    A = n(717421),
    x = n(187322),
    S = n(775602),
    T = n(51183),
    g = n(793574),
    E = n(688810),
    p = n(915089),
    v = n(410540),
    y = n(7584),
    R = n(208971),
    j = n(280450),
    C = n(183555),
    N = n(679492),
    P = n(922016),
    L = n(403777),
    b = n(462887),
    _ = n(334295),
    I = n(363195),
    M = n(403362),
    w = n(427262),
    U = n(448613),
    $ = n(8925),
    O = n(939496),
    V = n(518477),
    k = n(307731),
    F = n(818348),
    D = n(650583),
    G = n(375708),
    H = n(435693);
function Y(e) {
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
        { resetInteraction: f, setInteractionToast: h } = (0, N.Pq)(),
        { theme: m } = (0, O.E)(),
        A = (0, o.bG)([I.A], () => I.A.theme),
        x = (0, b.M)(A) ? !(0, b.M)(m) : (0, b.M)(m),
        S = r.useRef(null);
    async function T(e) {
        if (null == e) return;
        a === V.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : a === V.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: l, sourceDetails: r } = e,
                i = `:${t.name}:`;
            switch (l) {
                case V.dS.ACTIVITY:
                    let a = G.intl.formatToPlainString(G.t.EUFEJt, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${$.c5}${a}*${s}
${i}`
                        : `${$.c5}${a}*
${i}`;
                case V.dS.AVATAR:
                    let o = G.intl.formatToPlainString(G.t.E6H15q, { username: n });
                    return `${$.c5}${o}*
${i}`;
                case V.dS.STATUS:
                    let u = G.intl.formatToPlainString(G.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${$.c5}${u}*${c}
${i}`
                        : `${$.c5}${u}*
${i}`;
                default:
                    (0, M.xb)(l);
            }
        })({ emoji: e, username: w.Ay.getName(t), sourceType: a, sourceDetails: s });
        h(null);
        try {
            await (0, U.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: i,
            });
        } catch (e) {}
        h(V.AQ.REACT);
    }
    return (
        r.useEffect(() => {
            u?.(S?.current);
        }, [S, u]),
        r.useEffect(() => {
            function e(e) {
                e.key === D.dh.ESCAPE && (e.stopPropagation(), f());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, f]),
        (0, l.jsx)(_.A, {
            headerClassName: x ? H.X : void 0,
            guildId: n ?? void 0,
            closePopout: F.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: n } = e;
                await T(t), n && (f(), d?.());
            },
            pickerIntention: k.EmojiIntention.PROFILE,
        })
    );
}
var B = n(478437),
    Q = n(305866),
    z = n(355622),
    q = n(408018),
    K = n(138617),
    W = n(95701),
    X = n(562153),
    J = n(450262);
let Z = (0, W.createChannelRecord)({ id: "1", type: B.r.DM });
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
        { resetInteraction: m, setInteractionToast: A } = (0, N.Pq)(),
        { primaryColor: x } = (0, O.E)(),
        [S, T] = r.useState(""),
        [g, E] = r.useState((0, q.x7)(S)),
        p = r.useRef(!1),
        v = r.useRef(null),
        y = r.useCallback(
            (e) => {
                e.key === D.dh.ESCAPE && (e.stopPropagation(), m());
            },
            [m],
        );
    async function R(e) {
        if (null == e) return;
        s === V.dS.AVATAR
            ? d({ action: "SEND_REPLY_AVATAR" })
            : s === V.dS.STATUS
              ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
              : d({ action: "SEND_REPLY_ACTIVITY" });
        let n = (function (e) {
            let { input: t, username: n, sourceType: l, sourceDetails: r } = e;
            switch (l) {
                case V.dS.ACTIVITY:
                    let i = G.intl.formatToPlainString(G.t.WmvMCo, { username: n }),
                        a = `
> ${r}`;
                    return null != r
                        ? `${$.c5}${i}*${a}
${t}`
                        : `${$.c5}${i}*
${t}`;
                case V.dS.AVATAR:
                    let s = G.intl.formatToPlainString(G.t.lpaBsB, { username: n });
                    return `${$.c5}${s}*
${t}`;
                case V.dS.STATUS:
                    let o = G.intl.formatToPlainString(G.t.lFXgFV, { username: n }),
                        u = `
> ${r}`;
                    return null != r
                        ? `${$.c5}${o}*${u}
${t}`
                        : `${$.c5}${o}*
${t}`;
                default:
                    (0, M.xb)(l);
            }
        })({ input: e, username: w.Ay.getName(t), sourceType: s, sourceDetails: o });
        A(null);
        try {
            await (0, U.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReplyPopout",
                openChannel: !1,
                whenReady: !1,
                entry: h,
            });
        } catch (e) {}
        A(V.AQ.REPLY);
    }
    r.useEffect(() => {
        u?.(v?.current);
    }, [v, u]);
    let j = { [J.h5]: s === V.dS.STATUS, [J.my]: s === V.dS.AVATAR, [J.Eb]: s === V.dS.ACTIVITY };
    return (0, l.jsx)(Q.l, {
        ref: v,
        onKeyDown: y,
        children: (0, l.jsx)("div", {
            className: a()(J.kL, j, { [J.GE]: null != x }),
            children: (0, l.jsx)(K.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: J.hF,
                innerClassName: J.rn,
                editorClassName: J.EN,
                type: z.oU.USER_PROFILE_REPLY,
                placeholder: G.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case V.dS.ACTIVITY:
                                return G.t.Qn081O;
                            case V.dS.AVATAR:
                                return G.t.xGNPFK;
                            case V.dS.STATUS:
                                return G.t.g9BTCM;
                            default:
                                (0, M.xb)(e);
                        }
                    })(s),
                    { username: X.Ay.getName(n, i, t) },
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
    let { user: t, guildId: n, channelId: r, themeType: i, onClose: a, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: h,
        } = (0, N.Pq)(),
        m = [et.d.MODAL, et.d.MODAL_V2].includes(i) ? (0, L.n)(t.id, n) : void 0,
        A = c === o.sourceType && u === V.AQ.REACT,
        x = c === o.sourceType && u === V.AQ.REPLY,
        S = (A || x) && f === o.sourceId;
    return (0, l.jsx)(P.Y, {
        targetElementRef: h ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: s } = e;
            return (0, l.jsx)(A ? Y : ee, {
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
            return t === V.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : l === et.d.MODAL || l === et.d.MODAL_V2 || n === V.dS.ACTIVITY
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
    eo = n(242744);
function eu(e) {
    let { isVisible: t, isExpandable: i, onCloseProfile: s } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, C.NJ)(),
        f = r.useRef(null),
        h = r.useRef(null),
        [m, A] = (0, o.yK)([S.Ay], () => [S.Ay.useReducedMotion, S.Ay.keyboardModeEnabled]),
        x = !i || m || A ? 0 : 300,
        { themeType: T } = (0, O.E)();
    return (0, l.jsxs)(ea.Ay, {
        className: a()(eo.oO, { [eo.RK]: t, [eo.lu]: i }),
        children: [
            (0, l.jsx)(el.m, {
                asContainer: !0,
                targetElementRef: f,
                text: G.intl.string(G.t.bt75uw),
                delay: x,
                ariaHidden: !0,
                children: (0, l.jsx)(ea.$n, {
                    ref: f,
                    className: a()(eo.x6, eo.kb),
                    "aria-label": G.intl.string(G.t.QdHxos),
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
                                        return (n) => (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                    },
                                    null != r ? { stackingBehavior: r } : void 0,
                                );
                            })({ analyticsLocations: u, stackingBehavior: T === et.d.MODAL_V2 ? "stack" : void 0 }),
                            s?.();
                    },
                    children: (0, l.jsx)(er.R, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
            (0, l.jsx)(el.m, {
                asContainer: !0,
                text: G.intl.string(G.t.VkKicb),
                delay: x,
                ariaHidden: !0,
                children: (0, l.jsx)(ea.$n, {
                    ref: h,
                    className: a()(eo.x6, eo.pG),
                    "aria-label": G.intl.string(G.t.wfYTHe),
                    onClick: function () {
                        d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), es.G2.updateSetting(void 0);
                    },
                    children: (0, l.jsx)(ei.u, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
        ],
    });
}
var ec = n(713305);
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
        let { onCloseProfile: r, prompt: i } = e,
            s = (0, p.GV)(),
            { analyticsLocations: o } = (0, E.Ay)(),
            { trackUserProfileAction: u } = (0, C.NJ)(),
            { themeType: A } = (0, O.E)(),
            x = null != i ? i.label() : G.intl.string(G.t.evw0oz),
            S = (0, l.jsxs)("div", {
                className: ec.Qs,
                children: [
                    (0, l.jsx)(d.U, { size: "xs", className: ec.Tw, colorClass: ec.qv }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        className: a()(ec.ch, null != i && ec.R9),
                        children: x,
                    }),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ed, { children: S }),
                (0, l.jsx)("div", {
                    className: a()(ec.kL, ec.LL),
                    ref: t,
                    children: (0, l.jsx)(h.D, {
                        className: ec.A7,
                        "aria-label": G.intl.string(G.t["zrpF/b"]),
                        "aria-describedby": s,
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
                                        return (t) => (0, l.jsx)(e, { ...t, sourceAnalyticsLocations: o, prompt: i });
                                    },
                                    A === et.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: ec.hN },
                        children: (0, l.jsxs)("span", {
                            className: a()(ec.vW, ec.vk),
                            children: [
                                (0, l.jsx)(d.U, { size: "xs", className: ec.Tw, colorClass: ec.qv }),
                                (0, l.jsxs)(m.A, { id: s, children: [G.intl.string(G.t.EVV6uZ), ": ", x] }),
                                (0, l.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    className: a()(ec.ch, null != i && ec.R9),
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
                text: i,
                animate: c,
                className: d,
                renderToolbar: h,
                onShowToolbar: m,
                placeholderText: g,
                hasEntered: E = !0,
            } = e,
            p = (0, N.NR)(),
            { trackUserProfileAction: v } = (0, C.NJ)(),
            y = 1.25 * (null != n),
            R = 36 + y,
            j = 144 + y,
            P = r.useRef(null),
            L = r.useRef(null),
            b = r.useRef(null),
            _ = r.useRef(R),
            I = r.useRef(j),
            M = null != n && null == i,
            [w, U] = r.useState(!1),
            [$, O] = r.useState(!0),
            [k, F] = r.useState(!M && E),
            D = E && w,
            H = (0, o.bG)([S.Ay], () => S.Ay.useReducedMotion),
            [Y] = r.useState(() => new u.Ep());
        r.useEffect(() => () => Y.stop(), [Y]),
            r.useEffect(() => {
                p?.onInteractionPopoutTargetRefChange(P);
            }, [p]);
        let [B, Q] = (0, A.z)(() => ({ maxHeight: `${_.current}px`, config: { clamp: !0, duration: 150 } }));
        function z(e) {
            k &&
                (e
                    ? Q({
                          maxHeight: `${Math.min(I.current, j)}px`,
                          delay: 300 * !H,
                          config: { clamp: !0, duration: 150 * !H },
                      })
                    : Q({ maxHeight: `${Math.min(_.current, R)}px`, delay: 0 }),
                H ? O(!e) : Y.start(e ? 300 : 150, () => O(!e)));
        }
        r.useLayoutEffect(() => {
            if ((U(!0), null == L.current || null == b.current || !D)) return;
            let e = L.current.getBoundingClientRect().height,
                t = b.current.getBoundingClientRect().height;
            F(t > e),
                (_.current = e),
                (I.current = t),
                Q({ maxHeight: `${Math.min($ ? _.current : I.current, $ ? R : j)}px` });
        }, [D, i, n, Q, $, R, j]);
        let q =
                null != n
                    ? (0, l.jsx)(T.A, { emoji: n, animate: c, hideTooltip: !1, tooltipDelay: V.In, className: ec.H0 })
                    : null,
            K = null != i ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: ec.qS, children: i }) : null,
            W =
                void 0 !== g && null == n
                    ? (0, l.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${G.intl.string(G.t.EVV6uZ)}: ${g}`,
                          className: a()(ec.qS, ec.R9),
                          children: g ?? "",
                      })
                    : null,
            X = null == K || "" === i ? W : K,
            J = (0, l.jsxs)("div", { ref: L, className: ec.Qs, children: [q, X] }),
            Z = (0, l.jsxs)("div", { ref: b, className: a()(ec.Qs, ec.m2), children: [q, X] }),
            ee = (0, l.jsx)("div", {
                ref: t,
                className: ec.A7,
                children: (0, l.jsx)("span", {
                    className: ec.vW,
                    children: (0, l.jsxs)(s.animated.div, {
                        style: B,
                        className: a()(ec.Qs, { [ec.m2]: !$ }),
                        children: [q, X],
                    }),
                }),
            }),
            et = (0, l.jsxs)(ed, { children: [J, Z] });
        return null == m
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      et,
                      (0, l.jsxs)("div", {
                          ref: P,
                          className: a()(ec.kL, d),
                          onMouseEnter: () => {
                              v({ action: "HOVER_CUSTOM_STATUS" }), z(!0);
                          },
                          onMouseLeave: () => {
                              z(!1);
                          },
                          onFocus: () => z(!0),
                          onBlur: () => z(!1),
                          children: [
                              (0, l.jsx)(x.vN, {
                                  children: (0, l.jsx)("div", {
                                      className: ec.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": G.intl.formatToPlainString(G.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: i,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              h?.(k),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      et,
                      (0, l.jsxs)("div", {
                          ref: P,
                          className: a()(ec.kL, d),
                          onFocus: () => {
                              m(!0), z(!0);
                          },
                          onBlur: (e) => {
                              P.current?.contains(e.relatedTarget) || (m(!1), z(!1));
                          },
                          onMouseEnter: () => {
                              v({ action: "HOVER_CUSTOM_STATUS" }), m(!0), z(!0);
                          },
                          onMouseLeave: () => {
                              m(!1), z(!1);
                          },
                          children: [
                              (0, l.jsx)(x.vN, {
                                  children: (0, l.jsx)("div", {
                                      className: ec.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": G.intl.formatToPlainString(G.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: i,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              h?.(k),
                          ],
                      }),
                  ],
              });
    }),
    em = r.forwardRef(function (e, t) {
        let { emoji: n, text: i, onCloseProfile: a, ...s } = e,
            [o, u] = r.useState(!1);
        return (0, l.jsx)(eh, {
            ...s,
            ref: t,
            emoji: n,
            text: i,
            className: ec.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, l.jsx)(eu, { isVisible: o, isExpandable: e, onCloseProfile: a }),
        });
    });
function eA(e) {
    let t,
        { emoji: n, text: i, user: a, guildId: s, channelId: o, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, C.NJ)(),
        { interactionType: f, interactionSource: h, resetInteraction: m } = (0, N.Pq)(),
        A = h === V.dS.STATUS && f === V.AQ.REACT,
        x = h === V.dS.STATUS && f === V.AQ.REPLY,
        S = A || x,
        T = r.useRef(null),
        g = r.useRef(n),
        E = r.useRef(i);
    r.useEffect(() => {
        h === V.dS.STATUS && ((g.current !== n || E.current !== i) && m(), (g.current = n), (E.current = i));
    }, [h, m, n, i]);
    let [p, v] = r.useState(!1),
        R = r.useCallback(
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
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : y.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == i ? t : null == t ? i : `${t} ${i}`),
        sourceType: V.dS.STATUS,
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
                onShowToolbar: R,
                renderToolbar: (e) =>
                    (0, l.jsx)($.Ay, {
                        targetRef: T,
                        user: a,
                        sourceType: V.dS.STATUS,
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
            onCloseProfile: r,
            previewText: i,
            previewEmoji: a,
            placeholderText: s,
            prompt: u,
            disableToolbar: c = !1,
            ...d
        } = e,
        f = (0, v.A)(n.id),
        { analyticsLocations: h } = (0, E.Ay)(g.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        m = null != i || null != a,
        A = (0, R.G)(m ? i : f?.state),
        x = (0, o.bG)([j.default], () => j.default.getId() === n.id),
        S = x && !c,
        T = !x && !n.bot && !c;
    if (m) {
        let e = null != A && "" !== A ? A : null;
        return (0, l.jsx)(E.f5, {
            value: h,
            children: (0, l.jsx)(eh, { emoji: a ?? null, text: e, placeholderText: s, ref: t, ...d }),
        });
    }
    let p = f?.emoji ?? null,
        y = null != A && "" !== A ? A : null;
    return null != p || null != y || S
        ? null == p && null == y
            ? (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(ef, { onCloseProfile: r, prompt: u, ref: t, ...d }) })
            : T
              ? (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(eA, { user: n, emoji: p, text: y, ...d }) })
              : S
                ? (0, l.jsx)(E.f5, {
                      value: h,
                      children: (0, l.jsx)(em, { emoji: p, text: y, onCloseProfile: r, ref: t, ...d }),
                  })
                : (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(eh, { emoji: p, text: y, ref: t, ...d }) })
        : null;
});
