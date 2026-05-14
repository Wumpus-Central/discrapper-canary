"use strict";
n.d(t, { A: () => ep });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    _ = n(834730),
    f = n(939249),
    h = n(140735),
    p = n(717421),
    E = n(187322),
    m = n(775602),
    g = n(51183),
    A = n(793574),
    I = n(688810),
    T = n(915089),
    S = n(410540),
    N = n(7584),
    y = n(495544),
    C = n(183555),
    v = n(679492),
    O = n(922016),
    R = n(403777),
    b = n(462887),
    D = n(267889),
    L = n(363195),
    w = n(403362),
    M = n(427262),
    P = n(448613),
    x = n(8925),
    U = n(939496),
    k = n(518477),
    G = n(307731),
    F = n(818348),
    V = n(650583),
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
        { resetInteraction: _, setInteractionToast: f } = (0, v.Pq)(),
        { theme: h } = (0, U.E)(),
        p = (0, l.bG)([L.A], () => L.A.theme),
        E = (0, b.M)(p) ? !(0, b.M)(h) : (0, b.M)(h),
        m = r.useRef(null);
    r.useEffect(() => {
        u?.(m?.current);
    }, [m, u]),
        r.useEffect(() => {
            let e = (e) => {
                e.key === V.dh.ESCAPE && (e.stopPropagation(), _());
            };
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
        let n = ((e) => {
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
        })({ emoji: e, username: M.Ay.getName(t), sourceType: a, sourceDetails: o });
        f(null);
        try {
            await (0, P.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: s,
            });
        } catch (e) {}
        f(k.AQ.REACT);
    };
    return (0, i.jsx)(D.A, {
        headerClassName: E ? H.X : void 0,
        guildId: n ?? void 0,
        closePopout: F.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await g(t), n && (_(), d?.());
        },
        pickerIntention: G.EmojiIntention.PROFILE,
    });
}
var Y = n(478437),
    W = n(305866),
    K = n(355622),
    z = n(408018),
    $ = n(201349),
    q = n(95701),
    Z = n(562153),
    X = n(450262);
let Q = (0, q.createChannelRecord)({ id: "1", type: Y.r.DM });
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
            entry: f,
        } = e,
        { resetInteraction: h, setInteractionToast: p } = (0, v.Pq)(),
        { primaryColor: E } = (0, U.E)(),
        [m, g] = r.useState(""),
        [A, I] = r.useState((0, z.x7)(m)),
        T = r.useRef(!1),
        S = r.useRef(null),
        N = r.useCallback(
            (e) => {
                e.key === V.dh.ESCAPE && (e.stopPropagation(), h());
            },
            [h],
        );
    r.useEffect(() => {
        u?.(S?.current);
    }, [S, u]);
    let y = async (e) => {
            if (null == e) return;
            o === k.dS.AVATAR
                ? d({ action: "SEND_REPLY_AVATAR" })
                : o === k.dS.STATUS
                  ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : d({ action: "SEND_REPLY_ACTIVITY" });
            let n = ((e) => {
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
            })({ input: e, username: M.Ay.getName(t), sourceType: o, sourceDetails: l });
            p(null);
            try {
                await (0, P.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: f,
                });
            } catch (e) {}
            p(k.AQ.REPLY);
        },
        C = { [X.h5]: o === k.dS.STATUS, [X.my]: o === k.dS.AVATAR, [X.Eb]: o === k.dS.ACTIVITY };
    return (0, i.jsx)(W.l, {
        ref: S,
        onKeyDown: N,
        children: (0, i.jsx)("div", {
            className: a()(X.kL, C, { [X.GE]: null != E }),
            children: (0, i.jsx)($.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: X.hF,
                innerClassName: X.rn,
                editorClassName: X.EN,
                type: K.oU.USER_PROFILE_REPLY,
                placeholder: B.intl.formatToPlainString(
                    ((e) => {
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
                        return await y(n), h(), _?.(), { shouldClear: !0, shouldRefocus: !1 };
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
            interactionPopoutTargetRef: f,
        } = (0, v.Pq)(),
        h = [ee.d.MODAL, ee.d.MODAL_V2].includes(s) ? (0, R.n)(t.id, n) : void 0,
        p = c === l.sourceType && u === k.AQ.REACT,
        E = c === l.sourceType && u === k.AQ.REPLY,
        m = (p || E) && _ === l.sourceId;
    return (0, i.jsx)(O.Y, {
        targetElementRef: f ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: o } = e;
            return (0, i.jsx)(p ? j : J, {
                user: t,
                guildId: n,
                channelId: r,
                themeType: s,
                onClose: a,
                modalKey: h,
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
        { trackUserProfileAction: d } = (0, C.NJ)(),
        _ = r.useRef(null),
        f = r.useRef(null),
        [h, p] = (0, l.yK)([m.A], () => [m.A.useReducedMotion, m.A.keyboardModeEnabled]),
        E = !s || h || p ? 0 : 300,
        { themeType: g } = (0, U.E)();
    return (0, i.jsxs)(es.Ay, {
        className: a()(eo.oO, { [eo.RK]: t, [eo.lu]: s }),
        children: [
            (0, i.jsx)(en.m, {
                asContainer: !0,
                targetElementRef: _,
                text: B.intl.string(B.t.bt75uw),
                delay: E,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: _,
                    className: a()(eo.x6, eo.kb),
                    "aria-label": B.intl.string(B.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: () => {
                        d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            ((e) => {
                                let { analyticsLocations: t, stackingBehavior: r } = e;
                                return (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("96527"),
                                            n.e("52787"),
                                            n.e("54266"),
                                            n.e("4803"),
                                            n.e("67251"),
                                            n.e("28367"),
                                            n.e("20287"),
                                            n.e("80230"),
                                            n.e("48900"),
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
                delay: E,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: f,
                    className: a()(eo.x6, eo.pG),
                    "aria-label": B.intl.string(B.t.wfYTHe),
                    onClick: () => {
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
            { trackUserProfileAction: u } = (0, C.NJ)(),
            { themeType: p } = (0, U.E)(),
            E = null != s ? s.label() : B.intl.string(B.t.evw0oz),
            m = (0, i.jsxs)("div", {
                className: eu.Qs,
                children: [
                    (0, i.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                    (0, i.jsx)(_.E, {
                        variant: "text-sm/normal",
                        className: a()(eu.ch, null != s && eu.R9),
                        children: E,
                    }),
                ],
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ec, { children: m }),
                (0, i.jsx)("div", {
                    className: a()(eu.kL, eu.LL),
                    ref: t,
                    children: (0, i.jsx)(f.D, {
                        className: eu.A7,
                        "aria-label": B.intl.string(B.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: () => {
                            u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("96527"),
                                            n.e("52787"),
                                            n.e("54266"),
                                            n.e("4803"),
                                            n.e("67251"),
                                            n.e("28367"),
                                            n.e("20287"),
                                            n.e("80230"),
                                            n.e("48900"),
                                            n.e("20491"),
                                            n.e("55552"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (t) => (0, i.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: s });
                                    },
                                    p === ee.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: eu.hN },
                        children: (0, i.jsxs)("span", {
                            className: a()(eu.vW, eu.vk),
                            children: [
                                (0, i.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                                (0, i.jsxs)(h.A, { id: o, children: [B.intl.string(B.t.EVV6uZ), ": ", E] }),
                                (0, i.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    className: a()(eu.ch, null != s && eu.R9),
                                    "aria-hidden": "true",
                                    children: E,
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
                renderToolbar: f,
                onShowToolbar: h,
                placeholderText: A,
                hasEntered: I = !0,
            } = e,
            T = (0, v.NR)(),
            { trackUserProfileAction: S } = (0, C.NJ)(),
            N = 1.25 * (null != n),
            y = 36 + N,
            O = 144 + N,
            R = r.useRef(null),
            b = r.useRef(null),
            D = r.useRef(null),
            L = r.useRef(y),
            w = r.useRef(O),
            M = null != n && null == s,
            [P, x] = r.useState(!1),
            [U, G] = r.useState(!0),
            [F, V] = r.useState(!M && I),
            H = I && P,
            j = (0, l.bG)([m.A], () => m.A.useReducedMotion),
            [Y] = r.useState(() => new u.Ep());
        r.useEffect(() => () => Y.stop(), [Y]),
            r.useEffect(() => {
                T?.onInteractionPopoutTargetRefChange(R);
            }, [T]);
        let [W, K] = (0, p.z)(() => ({ maxHeight: `${L.current}px`, config: { clamp: !0, duration: 150 } }));
        r.useLayoutEffect(() => {
            if ((x(!0), null == b.current || null == D.current || !H)) return;
            let e = b.current.getBoundingClientRect().height,
                t = D.current.getBoundingClientRect().height;
            V(t > e),
                (L.current = e),
                (w.current = t),
                K({ maxHeight: `${Math.min(U ? L.current : w.current, U ? y : O)}px` });
        }, [H, s, n, K, U, y, O]);
        let z = (e) => {
                F &&
                    (e
                        ? K({
                              maxHeight: `${Math.min(w.current, O)}px`,
                              delay: 300 * !j,
                              config: { clamp: !0, duration: 150 * !j },
                          })
                        : K({ maxHeight: `${Math.min(L.current, y)}px`, delay: 0 }),
                    j ? G(!e) : Y.start(e ? 300 : 150, () => G(!e)));
            },
            $ =
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
            Q = (0, i.jsxs)("div", { ref: b, className: eu.Qs, children: [$, X] }),
            J = (0, i.jsxs)("div", { ref: D, className: a()(eu.Qs, eu.m2), children: [$, X] }),
            ee = (0, i.jsx)("div", {
                ref: t,
                className: eu.A7,
                children: (0, i.jsx)("span", {
                    className: eu.vW,
                    children: (0, i.jsxs)(o.animated.div, {
                        style: W,
                        className: a()(eu.Qs, { [eu.m2]: !U }),
                        children: [$, X],
                    }),
                }),
            }),
            et = (0, i.jsxs)(ec, { children: [Q, J] });
        return null == h
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: R,
                          className: a()(eu.kL, d),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), z(!0);
                          },
                          onMouseLeave: () => {
                              z(!1);
                          },
                          onFocus: () => z(!0),
                          onBlur: () => z(!1),
                          children: [
                              (0, i.jsx)(E.vN, {
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
                              f?.(F),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: R,
                          className: a()(eu.kL, d),
                          onFocus: () => {
                              h(!0), z(!0);
                          },
                          onBlur: (e) => {
                              R.current?.contains(e.relatedTarget) || (h(!1), z(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), h(!0), z(!0);
                          },
                          onMouseLeave: () => {
                              h(!1), z(!1);
                          },
                          children: [
                              (0, i.jsx)(E.vN, {
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
                              f?.(F),
                          ],
                      }),
                  ],
              });
    }),
    ef = r.forwardRef(function (e, t) {
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
function eh(e) {
    let t,
        { emoji: n, text: s, user: a, guildId: o, channelId: l, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, C.NJ)(),
        { interactionType: _, interactionSource: f, resetInteraction: h } = (0, v.Pq)(),
        p = f === k.dS.STATUS && _ === k.AQ.REACT,
        E = f === k.dS.STATUS && _ === k.AQ.REPLY,
        m = p || E,
        g = r.useRef(null),
        A = r.useRef(n),
        I = r.useRef(s);
    r.useEffect(() => {
        f === k.dS.STATUS && ((A.current !== n || I.current !== s) && h(), (A.current = n), (I.current = s));
    }, [f, h, n, s]);
    let [T, S] = r.useState(!1),
        y = r.useCallback(
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
                onShowToolbar: y,
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
let ep = r.forwardRef(function (e, t) {
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
        { analyticsLocations: f } = (0, I.Ay)(A.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        h = (0, l.bG)([y.default], () => y.default.getId() === n.id),
        p = h && !c,
        E = !h && !n.bot && !c;
    if (null != s || null != a)
        return (0, i.jsx)(I.f5, {
            value: f,
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
    return null != m || null != T || p
        ? null == m && null == T
            ? (0, i.jsx)(I.f5, { value: f, children: (0, i.jsx)(ed, { onCloseProfile: r, prompt: u, ref: t, ...d }) })
            : E
              ? (0, i.jsx)(I.f5, { value: f, children: (0, i.jsx)(eh, { user: n, emoji: m, text: T, ...d }) })
              : p
                ? (0, i.jsx)(I.f5, {
                      value: f,
                      children: (0, i.jsx)(ef, { emoji: m, text: T, onCloseProfile: r, ref: t, ...d }),
                  })
                : (0, i.jsx)(I.f5, { value: f, children: (0, i.jsx)(e_, { emoji: m, text: T, ref: t, ...d }) })
        : null;
});
