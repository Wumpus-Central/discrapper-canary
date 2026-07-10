"use strict";
n.d(t, { A: () => eh });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(17928),
    d = n(451988),
    c = n(192308),
    u = n(245604),
    _ = n(834730),
    E = n(939249),
    A = n(140735),
    h = n(717421),
    I = n(187322),
    f = n(775602),
    p = n(51183),
    T = n(793574),
    m = n(688810),
    g = n(915089),
    S = n(410540),
    N = n(7584),
    C = n(280450),
    R = n(183555),
    O = n(679492),
    L = n(922016),
    D = n(403777),
    y = n(462887),
    v = n(334295),
    b = n(363195),
    M = n(403362),
    P = n(427262),
    U = n(448613),
    w = n(8925),
    G = n(939496),
    x = n(518477),
    k = n(307731),
    F = n(818348),
    V = n(650583),
    B = n(375708),
    H = n(435693);
function j(e) {
    let {
            user: t,
            guildId: n,
            entry: a,
            sourceType: s,
            sourceDetails: l,
            setPopoutRef: d,
            onAction: c,
            onClose: u,
        } = e,
        { resetInteraction: _, setInteractionToast: E } = (0, O.Pq)(),
        { theme: A } = (0, G.E)(),
        h = (0, o.bG)([b.A], () => b.A.theme),
        I = (0, y.M)(h) ? !(0, y.M)(A) : (0, y.M)(A),
        f = r.useRef(null);
    r.useEffect(() => {
        d?.(f?.current);
    }, [f, d]),
        r.useEffect(() => {
            function e(e) {
                e.key === V.dh.ESCAPE && (e.stopPropagation(), _());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [u, _]);
    let p = async (e) => {
        if (null == e) return;
        s === x.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : s === x.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: i, sourceDetails: r } = e,
                a = `:${t.name}:`;
            switch (i) {
                case x.dS.ACTIVITY:
                    let s = B.intl.formatToPlainString(B.t.EUFEJt, { username: n }),
                        l = `
> ${r}`;
                    return null != r
                        ? `${w.c5}${s}*${l}
${a}`
                        : `${w.c5}${s}*
${a}`;
                case x.dS.AVATAR:
                    let o = B.intl.formatToPlainString(B.t.E6H15q, { username: n });
                    return `${w.c5}${o}*
${a}`;
                case x.dS.STATUS:
                    let d = B.intl.formatToPlainString(B.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${w.c5}${d}*${c}
${a}`
                        : `${w.c5}${d}*
${a}`;
                default:
                    (0, M.xb)(i);
            }
        })({ emoji: e, username: P.Ay.getName(t), sourceType: s, sourceDetails: l });
        E(null);
        try {
            await (0, U.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: a,
            });
        } catch (e) {}
        E(x.AQ.REACT);
    };
    return (0, i.jsx)(v.A, {
        headerClassName: I ? H.X : void 0,
        guildId: n ?? void 0,
        closePopout: F.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await p(t), n && (_(), u?.());
        },
        pickerIntention: k.EmojiIntention.PROFILE,
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
            channelId: a,
            sourceType: l,
            sourceDetails: o,
            setPopoutRef: d,
            modalKey: c,
            onAction: u,
            onClose: _,
            entry: E,
        } = e,
        { resetInteraction: A, setInteractionToast: h } = (0, O.Pq)(),
        { primaryColor: I } = (0, G.E)(),
        [f, p] = r.useState(""),
        [T, m] = r.useState((0, $.x7)(f)),
        g = r.useRef(!1),
        S = r.useRef(null),
        N = r.useCallback(
            (e) => {
                e.key === V.dh.ESCAPE && (e.stopPropagation(), A());
            },
            [A],
        );
    r.useEffect(() => {
        d?.(S?.current);
    }, [S, d]);
    let C = async (e) => {
            if (null == e) return;
            l === x.dS.AVATAR
                ? u({ action: "SEND_REPLY_AVATAR" })
                : l === x.dS.STATUS
                  ? u({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : u({ action: "SEND_REPLY_ACTIVITY" });
            let n = (function (e) {
                let { input: t, username: n, sourceType: i, sourceDetails: r } = e;
                switch (i) {
                    case x.dS.ACTIVITY:
                        let a = B.intl.formatToPlainString(B.t.WmvMCo, { username: n }),
                            s = `
> ${r}`;
                        return null != r
                            ? `${w.c5}${a}*${s}
${t}`
                            : `${w.c5}${a}*
${t}`;
                    case x.dS.AVATAR:
                        let l = B.intl.formatToPlainString(B.t.lpaBsB, { username: n });
                        return `${w.c5}${l}*
${t}`;
                    case x.dS.STATUS:
                        let o = B.intl.formatToPlainString(B.t.lFXgFV, { username: n }),
                            d = `
> ${r}`;
                        return null != r
                            ? `${w.c5}${o}*${d}
${t}`
                            : `${w.c5}${o}*
${t}`;
                    default:
                        (0, M.xb)(i);
                }
            })({ input: e, username: P.Ay.getName(t), sourceType: l, sourceDetails: o });
            h(null);
            try {
                await (0, U.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: E,
                });
            } catch (e) {}
            h(x.AQ.REPLY);
        },
        R = { [X.h5]: l === x.dS.STATUS, [X.my]: l === x.dS.AVATAR, [X.Eb]: l === x.dS.ACTIVITY };
    return (0, i.jsx)(Y.l, {
        ref: S,
        onKeyDown: N,
        children: (0, i.jsx)("div", {
            className: s()(X.kL, R, { [X.GE]: null != I }),
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
                            case x.dS.ACTIVITY:
                                return B.t.Qn081O;
                            case x.dS.AVATAR:
                                return B.t.xGNPFK;
                            case x.dS.STATUS:
                                return B.t.g9BTCM;
                            default:
                                (0, M.xb)(e);
                        }
                    })(l),
                    { username: Z.Ay.getName(n, a, t) },
                ),
                channel: Q,
                textValue: f,
                richValue: T,
                onChange: (e, t, n) => {
                    t !== f && (p(t), m(n));
                },
                focused: g.current,
                onFocus: () => {
                    g.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return await C(n), A(), _?.(), { shouldClear: !0, shouldRefocus: !1 };
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
    let { user: t, guildId: n, channelId: r, themeType: a, onClose: s, children: l, ...o } = e,
        {
            interactionType: d,
            interactionSource: c,
            resetInteraction: u,
            interactionSourceId: _,
            interactionPopoutTargetRef: E,
        } = (0, O.Pq)(),
        A = [ee.d.MODAL, ee.d.MODAL_V2].includes(a) ? (0, D.n)(t.id, n) : void 0,
        h = c === o.sourceType && d === x.AQ.REACT,
        I = c === o.sourceType && d === x.AQ.REPLY,
        f = (h || I) && _ === o.sourceId;
    return (0, i.jsx)(L.Y, {
        targetElementRef: E ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: l } = e;
            return (0, i.jsx)(h ? j : J, {
                user: t,
                guildId: n,
                channelId: r,
                themeType: a,
                onClose: s,
                modalKey: A,
                setPopoutRef: l,
                ...o,
            });
        },
        onRequestClose: () => {
            u(), s?.();
        },
        shouldShow: f,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: i } = e;
            return t === x.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : i === ee.d.MODAL || i === ee.d.MODAL_V2 || n === x.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: d, interactionSource: c, themeType: a }),
        children: l,
    });
}
var en = n(990078),
    ei = n(22231),
    er = n(241326),
    ea = n(101555),
    es = n(885386),
    el = n(242744);
function eo(e) {
    let { isVisible: t, isExpandable: a, onCloseProfile: l } = e,
        { analyticsLocations: d } = (0, m.Ay)(),
        { trackUserProfileAction: u } = (0, R.NJ)(),
        _ = r.useRef(null),
        E = r.useRef(null),
        [A, h] = (0, o.yK)([f.Ay], () => [f.Ay.useReducedMotion, f.Ay.keyboardModeEnabled]),
        I = !a || A || h ? 0 : 300,
        { themeType: p } = (0, G.E)();
    return (0, i.jsxs)(ea.Ay, {
        className: s()(el.oO, { [el.RK]: t, [el.lu]: a }),
        children: [
            (0, i.jsx)(en.m, {
                asContainer: !0,
                targetElementRef: _,
                text: B.intl.string(B.t.bt75uw),
                delay: I,
                ariaHidden: !0,
                children: (0, i.jsx)(ea.$n, {
                    ref: _,
                    className: s()(el.x6, el.kb),
                    "aria-label": B.intl.string(B.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: function () {
                        u({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
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
                            })({ analyticsLocations: d, stackingBehavior: p === ee.d.MODAL_V2 ? "stack" : void 0 }),
                            l?.();
                    },
                    children: (0, i.jsx)(ei.R, { size: "xs", colorClass: el.Kk }),
                }),
            }),
            (0, i.jsx)(en.m, {
                asContainer: !0,
                text: B.intl.string(B.t.VkKicb),
                delay: I,
                ariaHidden: !0,
                children: (0, i.jsx)(ea.$n, {
                    ref: E,
                    className: s()(el.x6, el.pG),
                    "aria-label": B.intl.string(B.t.wfYTHe),
                    onClick: function () {
                        u({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), es.G2.updateSetting(void 0);
                    },
                    children: (0, i.jsx)(er.u, { size: "xs", colorClass: el.Kk }),
                }),
            }),
        ],
    });
}
var ed = n(713305);
function ec(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: s()(ed.nL, n),
        children: (0, i.jsx)("div", {
            className: ed.A7,
            children: (0, i.jsx)("span", { className: ed.vW, children: t }),
        }),
    });
}
let eu = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: a } = e,
            l = (0, g.GV)(),
            { analyticsLocations: o } = (0, m.Ay)(),
            { trackUserProfileAction: d } = (0, R.NJ)(),
            { themeType: h } = (0, G.E)(),
            I = null != a ? a.label() : B.intl.string(B.t.evw0oz),
            f = (0, i.jsxs)("div", {
                className: ed.Qs,
                children: [
                    (0, i.jsx)(u.U, { size: "xs", className: ed.Tw, colorClass: ed.qv }),
                    (0, i.jsx)(_.E, {
                        variant: "text-sm/normal",
                        className: s()(ed.ch, null != a && ed.R9),
                        children: I,
                    }),
                ],
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ec, { children: f }),
                (0, i.jsx)("div", {
                    className: s()(ed.kL, ed.LL),
                    ref: t,
                    children: (0, i.jsx)(E.D, {
                        className: ed.A7,
                        "aria-label": B.intl.string(B.t["zrpF/b"]),
                        "aria-describedby": l,
                        onClick: function () {
                            d({ action: "PRESS_ADD_CUSTOM_STATUS" }),
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
                                        return (t) => (0, i.jsx)(e, { ...t, sourceAnalyticsLocations: o, prompt: a });
                                    },
                                    h === ee.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: ed.hN },
                        children: (0, i.jsxs)("span", {
                            className: s()(ed.vW, ed.vk),
                            children: [
                                (0, i.jsx)(u.U, { size: "xs", className: ed.Tw, colorClass: ed.qv }),
                                (0, i.jsxs)(A.A, { id: l, children: [B.intl.string(B.t.EVV6uZ), ": ", I] }),
                                (0, i.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    className: s()(ed.ch, null != a && ed.R9),
                                    "aria-hidden": "true",
                                    children: I,
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
                text: a,
                animate: c,
                className: u,
                renderToolbar: E,
                onShowToolbar: A,
                placeholderText: T,
                hasEntered: m = !0,
            } = e,
            g = (0, O.NR)(),
            { trackUserProfileAction: S } = (0, R.NJ)(),
            N = 1.25 * (null != n),
            C = 36 + N,
            L = 144 + N,
            D = r.useRef(null),
            y = r.useRef(null),
            v = r.useRef(null),
            b = r.useRef(C),
            M = r.useRef(L),
            P = null != n && null == a,
            [U, w] = r.useState(!1),
            [G, k] = r.useState(!0),
            [F, V] = r.useState(!P && m),
            H = m && U,
            j = (0, o.bG)([f.Ay], () => f.Ay.useReducedMotion),
            [W] = r.useState(() => new d.Ep());
        r.useEffect(() => () => W.stop(), [W]),
            r.useEffect(() => {
                g?.onInteractionPopoutTargetRefChange(D);
            }, [g]);
        let [Y, K] = (0, h.z)(() => ({ maxHeight: `${b.current}px`, config: { clamp: !0, duration: 150 } }));
        function $(e) {
            F &&
                (e
                    ? K({
                          maxHeight: `${Math.min(M.current, L)}px`,
                          delay: 300 * !j,
                          config: { clamp: !0, duration: 150 * !j },
                      })
                    : K({ maxHeight: `${Math.min(b.current, C)}px`, delay: 0 }),
                j ? k(!e) : W.start(e ? 300 : 150, () => k(!e)));
        }
        r.useLayoutEffect(() => {
            if ((w(!0), null == y.current || null == v.current || !H)) return;
            let e = y.current.getBoundingClientRect().height,
                t = v.current.getBoundingClientRect().height;
            V(t > e),
                (b.current = e),
                (M.current = t),
                K({ maxHeight: `${Math.min(G ? b.current : M.current, G ? C : L)}px` });
        }, [H, a, n, K, G, C, L]);
        let z =
                null != n
                    ? (0, i.jsx)(p.A, { emoji: n, animate: c, hideTooltip: !1, tooltipDelay: x.In, className: ed.H0 })
                    : null,
            q = null != a ? (0, i.jsx)(_.E, { variant: "text-sm/normal", className: ed.qS, children: a }) : null,
            Z =
                void 0 !== T && null == n
                    ? (0, i.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${B.intl.string(B.t.EVV6uZ)}: ${T}`,
                          className: s()(ed.qS, ed.R9),
                          children: T ?? "",
                      })
                    : null,
            X = null == q || "" === a ? Z : q,
            Q = (0, i.jsxs)("div", { ref: y, className: ed.Qs, children: [z, X] }),
            J = (0, i.jsxs)("div", { ref: v, className: s()(ed.Qs, ed.m2), children: [z, X] }),
            ee = (0, i.jsx)("div", {
                ref: t,
                className: ed.A7,
                children: (0, i.jsx)("span", {
                    className: ed.vW,
                    children: (0, i.jsxs)(l.animated.div, {
                        style: Y,
                        className: s()(ed.Qs, { [ed.m2]: !G }),
                        children: [z, X],
                    }),
                }),
            }),
            et = (0, i.jsxs)(ec, { children: [Q, J] });
        return null == A
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: D,
                          className: s()(ed.kL, u),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), $(!0);
                          },
                          onMouseLeave: () => {
                              $(!1);
                          },
                          onFocus: () => $(!0),
                          onBlur: () => $(!1),
                          children: [
                              (0, i.jsx)(I.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: ed.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": B.intl.formatToPlainString(B.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              E?.(F),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: D,
                          className: s()(ed.kL, u),
                          onFocus: () => {
                              A(!0), $(!0);
                          },
                          onBlur: (e) => {
                              D.current?.contains(e.relatedTarget) || (A(!1), $(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), A(!0), $(!0);
                          },
                          onMouseLeave: () => {
                              A(!1), $(!1);
                          },
                          children: [
                              (0, i.jsx)(I.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: ed.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": B.intl.formatToPlainString(B.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              E?.(F),
                          ],
                      }),
                  ],
              });
    }),
    eE = r.forwardRef(function (e, t) {
        let { emoji: n, text: a, onCloseProfile: s, ...l } = e,
            [o, d] = r.useState(!1);
        return (0, i.jsx)(e_, {
            ...l,
            ref: t,
            emoji: n,
            text: a,
            className: ed.LL,
            onShowToolbar: d,
            renderToolbar: (e) => (0, i.jsx)(eo, { isVisible: o, isExpandable: e, onCloseProfile: s }),
        });
    });
function eA(e) {
    let t,
        { emoji: n, text: a, user: s, guildId: l, channelId: o, themeType: d, ...c } = e,
        { trackUserProfileAction: u } = (0, R.NJ)(),
        { interactionType: _, interactionSource: E, resetInteraction: A } = (0, O.Pq)(),
        h = E === x.dS.STATUS && _ === x.AQ.REACT,
        I = E === x.dS.STATUS && _ === x.AQ.REPLY,
        f = h || I,
        p = r.useRef(null),
        T = r.useRef(n),
        m = r.useRef(a);
    r.useEffect(() => {
        E === x.dS.STATUS && ((T.current !== n || m.current !== a) && A(), (T.current = n), (m.current = a));
    }, [E, A, n, a]);
    let [g, S] = r.useState(!1),
        C = r.useCallback(
            (e) => {
                (e || !f) && S(e);
            },
            [f],
        );
    return (0, i.jsx)(et, {
        user: s,
        guildId: l,
        channelId: o,
        themeType: d,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : N.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == a ? t : null == t ? a : `${t} ${a}`),
        sourceType: x.dS.STATUS,
        onAction: u,
        onClose: () => S(!1),
        children: () =>
            (0, i.jsx)(e_, {
                ...c,
                ref: p,
                emoji: n,
                text: a,
                themeType: d,
                className: f ? ed.zf : void 0,
                onShowToolbar: C,
                renderToolbar: (e) =>
                    (0, i.jsx)(w.Ay, {
                        targetRef: p,
                        user: s,
                        sourceType: x.dS.STATUS,
                        isVisible: g && !f,
                        isExpandable: e,
                        onAction: u,
                    }),
            }),
    });
}
let eh = r.forwardRef(function (e, t) {
    let {
            user: n,
            onCloseProfile: r,
            previewText: a,
            previewEmoji: s,
            placeholderText: l,
            prompt: d,
            disableToolbar: c = !1,
            ...u
        } = e,
        _ = (0, S.A)(n.id),
        { analyticsLocations: E } = (0, m.Ay)(T.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        A = (0, o.bG)([C.default], () => C.default.getId() === n.id),
        h = A && !c,
        I = !A && !n.bot && !c;
    if (null != a || null != s)
        return (0, i.jsx)(m.f5, {
            value: E,
            children: (0, i.jsx)(e_, {
                emoji: s ?? null,
                text: null != a && "" !== a ? a : null,
                placeholderText: l,
                ref: t,
                ...u,
            }),
        });
    let f = _?.emoji ?? null,
        p = _?.state ?? null,
        g = null != p && "" !== p ? p : null;
    return null != f || null != g || h
        ? null == f && null == g
            ? (0, i.jsx)(m.f5, { value: E, children: (0, i.jsx)(eu, { onCloseProfile: r, prompt: d, ref: t, ...u }) })
            : I
              ? (0, i.jsx)(m.f5, { value: E, children: (0, i.jsx)(eA, { user: n, emoji: f, text: g, ...u }) })
              : h
                ? (0, i.jsx)(m.f5, {
                      value: E,
                      children: (0, i.jsx)(eE, { emoji: f, text: g, onCloseProfile: r, ref: t, ...u }),
                  })
                : (0, i.jsx)(m.f5, { value: E, children: (0, i.jsx)(e_, { emoji: f, text: g, ref: t, ...u }) })
        : null;
});
