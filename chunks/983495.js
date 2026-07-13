n.d(t, { A: () => eA });
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
    R = n(280450),
    j = n(183555),
    C = n(679492),
    N = n(922016),
    P = n(403777),
    L = n(462887),
    b = n(334295),
    _ = n(363195),
    I = n(403362),
    M = n(427262),
    w = n(448613),
    U = n(8925),
    $ = n(939496),
    O = n(518477),
    V = n(307731),
    k = n(818348),
    F = n(650583),
    D = n(375708),
    G = n(435693);
function H(e) {
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
        { resetInteraction: f, setInteractionToast: h } = (0, C.Pq)(),
        { theme: m } = (0, $.E)(),
        A = (0, o.bG)([_.A], () => _.A.theme),
        x = (0, L.M)(A) ? !(0, L.M)(m) : (0, L.M)(m),
        S = r.useRef(null);
    r.useEffect(() => {
        u?.(S?.current);
    }, [S, u]),
        r.useEffect(() => {
            function e(e) {
                e.key === F.dh.ESCAPE && (e.stopPropagation(), f());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, f]);
    let T = async (e) => {
        if (null == e) return;
        a === O.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : a === O.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: l, sourceDetails: r } = e,
                i = `:${t.name}:`;
            switch (l) {
                case O.dS.ACTIVITY:
                    let a = D.intl.formatToPlainString(D.t.EUFEJt, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${a}*${s}
${i}`
                        : `${U.c5}${a}*
${i}`;
                case O.dS.AVATAR:
                    let o = D.intl.formatToPlainString(D.t.E6H15q, { username: n });
                    return `${U.c5}${o}*
${i}`;
                case O.dS.STATUS:
                    let u = D.intl.formatToPlainString(D.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${U.c5}${u}*${c}
${i}`
                        : `${U.c5}${u}*
${i}`;
                default:
                    (0, I.xb)(l);
            }
        })({ emoji: e, username: M.Ay.getName(t), sourceType: a, sourceDetails: s });
        h(null);
        try {
            await (0, w.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: i,
            });
        } catch (e) {}
        h(O.AQ.REACT);
    };
    return (0, l.jsx)(b.A, {
        headerClassName: x ? G.X : void 0,
        guildId: n ?? void 0,
        closePopout: k.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await T(t), n && (f(), d?.());
        },
        pickerIntention: V.EmojiIntention.PROFILE,
    });
}
var Y = n(478437),
    B = n(305866),
    Q = n(355622),
    z = n(408018),
    q = n(138617),
    K = n(95701),
    W = n(562153),
    X = n(450262);
let J = (0, K.createChannelRecord)({ id: "1", type: Y.r.DM });
function Z(e) {
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
        { resetInteraction: m, setInteractionToast: A } = (0, C.Pq)(),
        { primaryColor: x } = (0, $.E)(),
        [S, T] = r.useState(""),
        [g, E] = r.useState((0, z.x7)(S)),
        p = r.useRef(!1),
        v = r.useRef(null),
        y = r.useCallback(
            (e) => {
                e.key === F.dh.ESCAPE && (e.stopPropagation(), m());
            },
            [m],
        );
    r.useEffect(() => {
        u?.(v?.current);
    }, [v, u]);
    let R = async (e) => {
            if (null == e) return;
            s === O.dS.AVATAR
                ? d({ action: "SEND_REPLY_AVATAR" })
                : s === O.dS.STATUS
                  ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : d({ action: "SEND_REPLY_ACTIVITY" });
            let n = (function (e) {
                let { input: t, username: n, sourceType: l, sourceDetails: r } = e;
                switch (l) {
                    case O.dS.ACTIVITY:
                        let i = D.intl.formatToPlainString(D.t.WmvMCo, { username: n }),
                            a = `
> ${r}`;
                        return null != r
                            ? `${U.c5}${i}*${a}
${t}`
                            : `${U.c5}${i}*
${t}`;
                    case O.dS.AVATAR:
                        let s = D.intl.formatToPlainString(D.t.lpaBsB, { username: n });
                        return `${U.c5}${s}*
${t}`;
                    case O.dS.STATUS:
                        let o = D.intl.formatToPlainString(D.t.lFXgFV, { username: n }),
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
            })({ input: e, username: M.Ay.getName(t), sourceType: s, sourceDetails: o });
            A(null);
            try {
                await (0, w.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: h,
                });
            } catch (e) {}
            A(O.AQ.REPLY);
        },
        j = { [X.h5]: s === O.dS.STATUS, [X.my]: s === O.dS.AVATAR, [X.Eb]: s === O.dS.ACTIVITY };
    return (0, l.jsx)(B.l, {
        ref: v,
        onKeyDown: y,
        children: (0, l.jsx)("div", {
            className: a()(X.kL, j, { [X.GE]: null != x }),
            children: (0, l.jsx)(q.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: X.hF,
                innerClassName: X.rn,
                editorClassName: X.EN,
                type: Q.oU.USER_PROFILE_REPLY,
                placeholder: D.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case O.dS.ACTIVITY:
                                return D.t.Qn081O;
                            case O.dS.AVATAR:
                                return D.t.xGNPFK;
                            case O.dS.STATUS:
                                return D.t.g9BTCM;
                            default:
                                (0, I.xb)(e);
                        }
                    })(s),
                    { username: W.Ay.getName(n, i, t) },
                ),
                channel: J,
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
var ee = n(996988);
function et(e) {
    let { user: t, guildId: n, channelId: r, themeType: i, onClose: a, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: h,
        } = (0, C.Pq)(),
        m = [ee.d.MODAL, ee.d.MODAL_V2].includes(i) ? (0, P.n)(t.id, n) : void 0,
        A = c === o.sourceType && u === O.AQ.REACT,
        x = c === o.sourceType && u === O.AQ.REPLY,
        S = (A || x) && f === o.sourceId;
    return (0, l.jsx)(N.Y, {
        targetElementRef: h ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: s } = e;
            return (0, l.jsx)(A ? H : Z, {
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
            return t === O.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : l === ee.d.MODAL || l === ee.d.MODAL_V2 || n === O.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: u, interactionSource: c, themeType: i }),
        children: s,
    });
}
var en = n(990078),
    el = n(22231),
    er = n(241326),
    ei = n(101555),
    ea = n(885386),
    es = n(242744);
function eo(e) {
    let { isVisible: t, isExpandable: i, onCloseProfile: s } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, j.NJ)(),
        f = r.useRef(null),
        h = r.useRef(null),
        [m, A] = (0, o.yK)([S.Ay], () => [S.Ay.useReducedMotion, S.Ay.keyboardModeEnabled]),
        x = !i || m || A ? 0 : 300,
        { themeType: T } = (0, $.E)();
    return (0, l.jsxs)(ei.Ay, {
        className: a()(es.oO, { [es.RK]: t, [es.lu]: i }),
        children: [
            (0, l.jsx)(en.m, {
                asContainer: !0,
                targetElementRef: f,
                text: D.intl.string(D.t.bt75uw),
                delay: x,
                ariaHidden: !0,
                children: (0, l.jsx)(ei.$n, {
                    ref: f,
                    className: a()(es.x6, es.kb),
                    "aria-label": D.intl.string(D.t.QdHxos),
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
                            })({ analyticsLocations: u, stackingBehavior: T === ee.d.MODAL_V2 ? "stack" : void 0 }),
                            s?.();
                    },
                    children: (0, l.jsx)(el.R, { size: "xs", colorClass: es.Kk }),
                }),
            }),
            (0, l.jsx)(en.m, {
                asContainer: !0,
                text: D.intl.string(D.t.VkKicb),
                delay: x,
                ariaHidden: !0,
                children: (0, l.jsx)(ei.$n, {
                    ref: h,
                    className: a()(es.x6, es.pG),
                    "aria-label": D.intl.string(D.t.wfYTHe),
                    onClick: function () {
                        d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), ea.G2.updateSetting(void 0);
                    },
                    children: (0, l.jsx)(er.u, { size: "xs", colorClass: es.Kk }),
                }),
            }),
        ],
    });
}
var eu = n(713305);
function ec(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", {
        className: a()(eu.nL, n),
        children: (0, l.jsx)("div", {
            className: eu.A7,
            children: (0, l.jsx)("span", { className: eu.vW, children: t }),
        }),
    });
}
let ed = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: i } = e,
            s = (0, p.GV)(),
            { analyticsLocations: o } = (0, E.Ay)(),
            { trackUserProfileAction: u } = (0, j.NJ)(),
            { themeType: A } = (0, $.E)(),
            x = null != i ? i.label() : D.intl.string(D.t.evw0oz),
            S = (0, l.jsxs)("div", {
                className: eu.Qs,
                children: [
                    (0, l.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        className: a()(eu.ch, null != i && eu.R9),
                        children: x,
                    }),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ec, { children: S }),
                (0, l.jsx)("div", {
                    className: a()(eu.kL, eu.LL),
                    ref: t,
                    children: (0, l.jsx)(h.D, {
                        className: eu.A7,
                        "aria-label": D.intl.string(D.t["zrpF/b"]),
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
                                    A === ee.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: eu.hN },
                        children: (0, l.jsxs)("span", {
                            className: a()(eu.vW, eu.vk),
                            children: [
                                (0, l.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                                (0, l.jsxs)(m.A, { id: s, children: [D.intl.string(D.t.EVV6uZ), ": ", x] }),
                                (0, l.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    className: a()(eu.ch, null != i && eu.R9),
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
    ef = r.forwardRef(function (e, t) {
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
            p = (0, C.NR)(),
            { trackUserProfileAction: v } = (0, j.NJ)(),
            y = 1.25 * (null != n),
            R = 36 + y,
            N = 144 + y,
            P = r.useRef(null),
            L = r.useRef(null),
            b = r.useRef(null),
            _ = r.useRef(R),
            I = r.useRef(N),
            M = null != n && null == i,
            [w, U] = r.useState(!1),
            [$, V] = r.useState(!0),
            [k, F] = r.useState(!M && E),
            G = E && w,
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
                          maxHeight: `${Math.min(I.current, N)}px`,
                          delay: 300 * !H,
                          config: { clamp: !0, duration: 150 * !H },
                      })
                    : Q({ maxHeight: `${Math.min(_.current, R)}px`, delay: 0 }),
                H ? V(!e) : Y.start(e ? 300 : 150, () => V(!e)));
        }
        r.useLayoutEffect(() => {
            if ((U(!0), null == L.current || null == b.current || !G)) return;
            let e = L.current.getBoundingClientRect().height,
                t = b.current.getBoundingClientRect().height;
            F(t > e),
                (_.current = e),
                (I.current = t),
                Q({ maxHeight: `${Math.min($ ? _.current : I.current, $ ? R : N)}px` });
        }, [G, i, n, Q, $, R, N]);
        let q =
                null != n
                    ? (0, l.jsx)(T.A, { emoji: n, animate: c, hideTooltip: !1, tooltipDelay: O.In, className: eu.H0 })
                    : null,
            K = null != i ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: eu.qS, children: i }) : null,
            W =
                void 0 !== g && null == n
                    ? (0, l.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${D.intl.string(D.t.EVV6uZ)}: ${g}`,
                          className: a()(eu.qS, eu.R9),
                          children: g ?? "",
                      })
                    : null,
            X = null == K || "" === i ? W : K,
            J = (0, l.jsxs)("div", { ref: L, className: eu.Qs, children: [q, X] }),
            Z = (0, l.jsxs)("div", { ref: b, className: a()(eu.Qs, eu.m2), children: [q, X] }),
            ee = (0, l.jsx)("div", {
                ref: t,
                className: eu.A7,
                children: (0, l.jsx)("span", {
                    className: eu.vW,
                    children: (0, l.jsxs)(s.animated.div, {
                        style: B,
                        className: a()(eu.Qs, { [eu.m2]: !$ }),
                        children: [q, X],
                    }),
                }),
            }),
            et = (0, l.jsxs)(ec, { children: [J, Z] });
        return null == m
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      et,
                      (0, l.jsxs)("div", {
                          ref: P,
                          className: a()(eu.kL, d),
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
                                      className: eu.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": D.intl.formatToPlainString(D.t.UpF5Qa, {
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
                          className: a()(eu.kL, d),
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
                                      className: eu.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": D.intl.formatToPlainString(D.t.UpF5Qa, {
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
    eh = r.forwardRef(function (e, t) {
        let { emoji: n, text: i, onCloseProfile: a, ...s } = e,
            [o, u] = r.useState(!1);
        return (0, l.jsx)(ef, {
            ...s,
            ref: t,
            emoji: n,
            text: i,
            className: eu.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, l.jsx)(eo, { isVisible: o, isExpandable: e, onCloseProfile: a }),
        });
    });
function em(e) {
    let t,
        { emoji: n, text: i, user: a, guildId: s, channelId: o, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, j.NJ)(),
        { interactionType: f, interactionSource: h, resetInteraction: m } = (0, C.Pq)(),
        A = h === O.dS.STATUS && f === O.AQ.REACT,
        x = h === O.dS.STATUS && f === O.AQ.REPLY,
        S = A || x,
        T = r.useRef(null),
        g = r.useRef(n),
        E = r.useRef(i);
    r.useEffect(() => {
        h === O.dS.STATUS && ((g.current !== n || E.current !== i) && m(), (g.current = n), (E.current = i));
    }, [h, m, n, i]);
    let [p, v] = r.useState(!1),
        R = r.useCallback(
            (e) => {
                (e || !S) && v(e);
            },
            [S],
        );
    return (0, l.jsx)(et, {
        user: a,
        guildId: s,
        channelId: o,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : y.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == i ? t : null == t ? i : `${t} ${i}`),
        sourceType: O.dS.STATUS,
        onAction: d,
        onClose: () => v(!1),
        children: () =>
            (0, l.jsx)(ef, {
                ...c,
                ref: T,
                emoji: n,
                text: i,
                themeType: u,
                className: S ? eu.zf : void 0,
                onShowToolbar: R,
                renderToolbar: (e) =>
                    (0, l.jsx)(U.Ay, {
                        targetRef: T,
                        user: a,
                        sourceType: O.dS.STATUS,
                        isVisible: p && !S,
                        isExpandable: e,
                        onAction: d,
                    }),
            }),
    });
}
let eA = r.forwardRef(function (e, t) {
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
        m = (0, o.bG)([R.default], () => R.default.getId() === n.id),
        A = m && !c,
        x = !m && !n.bot && !c;
    if (null != i || null != a)
        return (0, l.jsx)(E.f5, {
            value: h,
            children: (0, l.jsx)(ef, {
                emoji: a ?? null,
                text: null != i && "" !== i ? i : null,
                placeholderText: s,
                ref: t,
                ...d,
            }),
        });
    let S = f?.emoji ?? null,
        T = f?.state ?? null,
        p = null != T && "" !== T ? T : null;
    return null != S || null != p || A
        ? null == S && null == p
            ? (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(ed, { onCloseProfile: r, prompt: u, ref: t, ...d }) })
            : x
              ? (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(em, { user: n, emoji: S, text: p, ...d }) })
              : A
                ? (0, l.jsx)(E.f5, {
                      value: h,
                      children: (0, l.jsx)(eh, { emoji: S, text: p, onCloseProfile: r, ref: t, ...d }),
                  })
                : (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(ef, { emoji: S, text: p, ref: t, ...d }) })
        : null;
});
