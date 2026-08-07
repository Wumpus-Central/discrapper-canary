"use strict";
n.d(t, { A: () => eI });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(682577),
    o = n(17928),
    d = n(451988),
    c = n(192308),
    u = n(245604),
    _ = n(834730),
    E = n(939249),
    A = n(140735),
    h = n(717421),
    I = n(259678),
    f = n(775602),
    p = n(51183),
    T = n(793574),
    m = n(688810),
    g = n(915089),
    S = n(410540),
    N = n(7584),
    C = n(208971),
    O = n(280450),
    R = n(183555),
    L = n(679492),
    D = n(922016),
    y = n(403777),
    v = n(462887),
    b = n(267889),
    M = n(363195),
    P = n(403362),
    U = n(427262),
    w = n(448613),
    G = n(8925),
    x = n(939496),
    k = n(518477),
    F = n(307731),
    V = n(818348),
    B = n(650583),
    H = n(375708),
    j = n(852005);
function W(e) {
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
        { resetInteraction: _, setInteractionToast: E } = (0, L.Pq)(),
        { theme: A } = (0, x.E)(),
        h = (0, o.bG)([M.A], () => M.A.theme),
        I = (0, v.M)(h) ? !(0, v.M)(A) : (0, v.M)(A),
        f = r.useRef(null);
    async function p(e) {
        if (null == e) return;
        s === k.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : s === k.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: i, sourceDetails: r } = e,
                a = `:${t.name}:`;
            switch (i) {
                case k.dS.ACTIVITY:
                    let s = H.intl.formatToPlainString(H.t.EUFEJt, { username: n }),
                        l = `
> ${r}`;
                    return null != r
                        ? `${G.c5}${s}*${l}
${a}`
                        : `${G.c5}${s}*
${a}`;
                case k.dS.AVATAR:
                    let o = H.intl.formatToPlainString(H.t.E6H15q, { username: n });
                    return `${G.c5}${o}*
${a}`;
                case k.dS.STATUS:
                    let d = H.intl.formatToPlainString(H.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${G.c5}${d}*${c}
${a}`
                        : `${G.c5}${d}*
${a}`;
                default:
                    (0, P.xb)(i);
            }
        })({ emoji: e, username: U.Ay.getName(t), sourceType: s, sourceDetails: l });
        E(null);
        try {
            await (0, w.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: a,
            });
        } catch (e) {}
        E(k.AQ.REACT);
    }
    return (
        r.useEffect(() => {
            d?.(f?.current);
        }, [f, d]),
        r.useEffect(() => {
            function e(e) {
                e.key === B.dh.ESCAPE && (e.stopPropagation(), _());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [u, _]),
        (0, i.jsx)(b.A, {
            headerClassName: I ? j.X : void 0,
            guildId: n ?? void 0,
            closePopout: V.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: n } = e;
                await p(t), n && (_(), u?.());
            },
            pickerIntention: F.EmojiIntention.PROFILE,
        })
    );
}
var Y = n(478437),
    K = n(305866),
    $ = n(355622),
    z = n(408018),
    q = n(138617),
    Z = n(95701),
    X = n(562153),
    Q = n(451438);
let J = (0, Z.createChannelRecord)({ id: "1", type: Y.r.DM });
function ee(e) {
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
        { resetInteraction: A, setInteractionToast: h } = (0, L.Pq)(),
        { primaryColor: I } = (0, x.E)(),
        [f, p] = r.useState(""),
        [T, m] = r.useState((0, z.x7)(f)),
        g = r.useRef(!1),
        S = r.useRef(null),
        N = r.useCallback(
            (e) => {
                e.key === B.dh.ESCAPE && (e.stopPropagation(), A());
            },
            [A],
        );
    async function C(e) {
        if (null == e) return;
        l === k.dS.AVATAR
            ? u({ action: "SEND_REPLY_AVATAR" })
            : l === k.dS.STATUS
              ? u({ action: "SEND_REPLY_CUSTOM_STATUS" })
              : u({ action: "SEND_REPLY_ACTIVITY" });
        let n = (function (e) {
            let { input: t, username: n, sourceType: i, sourceDetails: r } = e;
            switch (i) {
                case k.dS.ACTIVITY:
                    let a = H.intl.formatToPlainString(H.t.WmvMCo, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${G.c5}${a}*${s}
${t}`
                        : `${G.c5}${a}*
${t}`;
                case k.dS.AVATAR:
                    let l = H.intl.formatToPlainString(H.t.lpaBsB, { username: n });
                    return `${G.c5}${l}*
${t}`;
                case k.dS.STATUS:
                    let o = H.intl.formatToPlainString(H.t.lFXgFV, { username: n }),
                        d = `
> ${r}`;
                    return null != r
                        ? `${G.c5}${o}*${d}
${t}`
                        : `${G.c5}${o}*
${t}`;
                default:
                    (0, P.xb)(i);
            }
        })({ input: e, username: U.Ay.getName(t), sourceType: l, sourceDetails: o });
        h(null);
        try {
            await (0, w.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReplyPopout",
                openChannel: !1,
                whenReady: !1,
                entry: E,
            });
        } catch (e) {}
        h(k.AQ.REPLY);
    }
    r.useEffect(() => {
        d?.(S?.current);
    }, [S, d]);
    let O = { [Q.h5]: l === k.dS.STATUS, [Q.my]: l === k.dS.AVATAR, [Q.Eb]: l === k.dS.ACTIVITY };
    return (0, i.jsx)(K.l, {
        ref: S,
        onKeyDown: N,
        children: (0, i.jsx)("div", {
            className: s()(Q.kL, O, { [Q.GE]: null != I }),
            children: (0, i.jsx)(q.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: Q.hF,
                innerClassName: Q.rn,
                editorClassName: Q.EN,
                type: $.oU.USER_PROFILE_REPLY,
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
                                (0, P.xb)(e);
                        }
                    })(l),
                    { username: X.Ay.getName(n, a, t) },
                ),
                channel: J,
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
var et = n(996988);
function en(e) {
    let { user: t, guildId: n, channelId: r, themeType: a, onClose: s, children: l, ...o } = e,
        {
            interactionType: d,
            interactionSource: c,
            resetInteraction: u,
            interactionSourceId: _,
            interactionPopoutTargetRef: E,
        } = (0, L.Pq)(),
        A = [et.d.MODAL, et.d.MODAL_V2].includes(a) ? (0, y.n)(t.id, n) : void 0,
        h = c === o.sourceType && d === k.AQ.REACT,
        I = c === o.sourceType && d === k.AQ.REPLY,
        f = (h || I) && _ === o.sourceId;
    return (0, i.jsx)(D.Y, {
        targetElementRef: E ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: l } = e;
            return (0, i.jsx)(h ? W : ee, {
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
            return t === k.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : i === et.d.MODAL || i === et.d.MODAL_V2 || n === k.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: d, interactionSource: c, themeType: a }),
        children: l,
    });
}
var ei = n(866665),
    er = n(22231),
    ea = n(241326),
    es = n(101555),
    el = n(885386),
    eo = n(818832);
function ed(e) {
    let { isVisible: t, isExpandable: a, onCloseProfile: l } = e,
        { analyticsLocations: d } = (0, m.Ay)(),
        { trackUserProfileAction: u } = (0, R.NJ)(),
        _ = r.useRef(null),
        E = r.useRef(null),
        [A, h] = (0, o.yK)([f.Ay], () => [f.Ay.useReducedMotion, f.Ay.keyboardModeEnabled]),
        I = !a || A || h ? 0 : 300,
        { themeType: p } = (0, x.E)();
    return (0, i.jsxs)(es.Ay, {
        className: s()(eo.oO, { [eo.RK]: t, [eo.lu]: a }),
        children: [
            (0, i.jsx)(ei.m, {
                asContainer: !0,
                targetElementRef: _,
                text: H.intl.string(H.t.bt75uw),
                delay: I,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: _,
                    className: s()(eo.x6, eo.kb),
                    "aria-label": H.intl.string(H.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: function () {
                        u({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
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
                                            n.e("20491"),
                                            n.e("55552"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (n) => (0, i.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                    },
                                    null != r ? { stackingBehavior: r } : void 0,
                                );
                            })({ analyticsLocations: d, stackingBehavior: p === et.d.MODAL_V2 ? "stack" : void 0 }),
                            l?.();
                    },
                    children: (0, i.jsx)(er.R, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
            (0, i.jsx)(ei.m, {
                asContainer: !0,
                text: H.intl.string(H.t.VkKicb),
                delay: I,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: E,
                    className: s()(eo.x6, eo.pG),
                    "aria-label": H.intl.string(H.t.wfYTHe),
                    onClick: function () {
                        u({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), el.G2.updateSetting(void 0);
                    },
                    children: (0, i.jsx)(ea.u, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
        ],
    });
}
var ec = n(258417);
function eu(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: s()(ec.nL, n),
        children: (0, i.jsx)("div", {
            className: ec.A7,
            children: (0, i.jsx)("span", { className: ec.vW, children: t }),
        }),
    });
}
let e_ = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: a } = e,
            l = (0, g.GV)(),
            { analyticsLocations: o } = (0, m.Ay)(),
            { trackUserProfileAction: d } = (0, R.NJ)(),
            { themeType: h } = (0, x.E)(),
            I = null != a ? a.label() : H.intl.string(H.t.evw0oz),
            f = (0, i.jsxs)("div", {
                className: ec.Qs,
                children: [
                    (0, i.jsx)(u.U, { size: "xs", className: ec.Tw, colorClass: ec.qv }),
                    (0, i.jsx)(_.E, {
                        variant: "text-sm/normal",
                        className: s()(ec.ch, null != a && ec.R9),
                        children: I,
                    }),
                ],
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eu, { children: f }),
                (0, i.jsx)("div", {
                    className: s()(ec.kL, ec.LL),
                    ref: t,
                    children: (0, i.jsx)(E.D, {
                        className: ec.A7,
                        "aria-label": H.intl.string(H.t["zrpF/b"]),
                        "aria-describedby": l,
                        onClick: function () {
                            d({ action: "PRESS_ADD_CUSTOM_STATUS" }),
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
                                            n.e("20491"),
                                            n.e("55552"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (t) => (0, i.jsx)(e, { ...t, sourceAnalyticsLocations: o, prompt: a });
                                    },
                                    h === et.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: ec.hN },
                        children: (0, i.jsxs)("span", {
                            className: s()(ec.vW, ec.vk),
                            children: [
                                (0, i.jsx)(u.U, { size: "xs", className: ec.Tw, colorClass: ec.qv }),
                                (0, i.jsxs)(A.A, { id: l, children: [H.intl.string(H.t.EVV6uZ), ": ", I] }),
                                (0, i.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    className: s()(ec.ch, null != a && ec.R9),
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
    eE = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: a,
                themeType: c,
                animate: u,
                className: E,
                renderToolbar: A,
                onShowToolbar: T,
                placeholderText: m,
                hasEntered: g = !0,
            } = e,
            S = (0, L.NR)(),
            { trackUserProfileAction: N } = (0, R.NJ)(),
            C = 1.25 * (null != n),
            O = 36 + C,
            D = 144 + C,
            y = r.useRef(null),
            v = r.useRef(null),
            b = r.useRef(null),
            M = r.useRef(O),
            P = r.useRef(O),
            U = null != n && null == a,
            [w, G] = r.useState(!1),
            [x, F] = r.useState(!0),
            [V, B] = r.useState(!U && g),
            j = g && w,
            W = c === et.d.MODAL || c === et.d.MODAL_V2,
            Y = r.useCallback((e) => (W ? e : Math.min(e, D)), [D, W]),
            K = (0, o.bG)([f.Ay], () => f.Ay.useReducedMotion),
            [$] = r.useState(() => new d.Ep());
        r.useEffect(() => () => $.stop(), [$]),
            r.useEffect(() => {
                S?.onInteractionPopoutTargetRefChange(y);
            }, [S]);
        let [z, q] = (0, h.z)(() => ({ maxHeight: `${M.current}px`, config: { clamp: !0, duration: 150 } }));
        function Z(e) {
            V &&
                (e
                    ? q({ maxHeight: `${Y(P.current)}px`, delay: 300 * !K, config: { clamp: !0, duration: 150 * !K } })
                    : q({ maxHeight: `${Math.min(M.current, O)}px`, delay: 0 }),
                K ? F(!e) : $.start(e ? 300 : 150, () => F(!e)));
        }
        r.useLayoutEffect(() => {
            if ((G(!0), null == v.current || null == b.current || !j)) return;
            let e = v.current.getBoundingClientRect().height,
                t = b.current.getBoundingClientRect().height,
                n = Y(t);
            B(n > e), (M.current = e), (P.current = t), q({ maxHeight: `${x ? Math.min(M.current, O) : n}px` });
        }, [j, a, n, q, x, O, Y]);
        let X =
                null != n
                    ? (0, i.jsx)(p.A, { emoji: n, animate: u, hideTooltip: !1, tooltipDelay: k.In, className: ec.H0 })
                    : null,
            Q = null != a ? (0, i.jsx)(_.E, { variant: "text-sm/normal", className: ec.qS, children: a }) : null,
            J =
                void 0 !== m && null == n
                    ? (0, i.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${H.intl.string(H.t.EVV6uZ)}: ${m}`,
                          className: s()(ec.qS, ec.R9),
                          children: m ?? "",
                      })
                    : null,
            ee = null == Q || "" === a ? J : Q,
            en = (0, i.jsxs)("div", { className: ec.Qs, children: [X, ee] }),
            ei = (0, i.jsxs)("div", { ref: v, className: s()(ec.Qs, ec.mj), children: [X, ee] }),
            er = (0, i.jsxs)("div", { ref: b, className: s()(ec.Qs, ec.m2, ec.mj), children: [X, ee] }),
            ea = (0, i.jsx)("div", {
                ref: t,
                className: ec.A7,
                children: (0, i.jsx)("span", {
                    className: ec.vW,
                    children: (0, i.jsxs)(l.animated.div, {
                        style: z,
                        className: s()(ec.Qs, { [ec.m2]: !x && W, [ec.p$]: !x && !W }),
                        children: [X, ee],
                    }),
                }),
            }),
            es = (0, i.jsxs)(eu, { children: [en, ei, er] });
        return null == T
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      es,
                      (0, i.jsxs)("div", {
                          ref: y,
                          className: s()(ec.kL, E),
                          onMouseEnter: () => {
                              N({ action: "HOVER_CUSTOM_STATUS" }), Z(!0);
                          },
                          onMouseLeave: () => {
                              Z(!1);
                          },
                          onFocus: () => Z(!0),
                          onBlur: () => Z(!1),
                          children: [
                              (0, i.jsx)(I.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: ec.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": H.intl.formatToPlainString(H.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
                                      }),
                                      children: ea,
                                  }),
                              }),
                              A?.(V),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      es,
                      (0, i.jsxs)("div", {
                          ref: y,
                          className: s()(ec.kL, E),
                          onFocus: () => {
                              T(!0), Z(!0);
                          },
                          onBlur: (e) => {
                              y.current?.contains(e.relatedTarget) || (T(!1), Z(!1));
                          },
                          onMouseEnter: () => {
                              N({ action: "HOVER_CUSTOM_STATUS" }), T(!0), Z(!0);
                          },
                          onMouseLeave: () => {
                              T(!1), Z(!1);
                          },
                          children: [
                              (0, i.jsx)(I.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: ec.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": H.intl.formatToPlainString(H.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
                                      }),
                                      children: ea,
                                  }),
                              }),
                              A?.(V),
                          ],
                      }),
                  ],
              });
    }),
    eA = r.forwardRef(function (e, t) {
        let { emoji: n, text: a, onCloseProfile: s, ...l } = e,
            [o, d] = r.useState(!1);
        return (0, i.jsx)(eE, {
            ...l,
            ref: t,
            emoji: n,
            text: a,
            className: ec.LL,
            onShowToolbar: d,
            renderToolbar: (e) => (0, i.jsx)(ed, { isVisible: o, isExpandable: e, onCloseProfile: s }),
        });
    });
function eh(e) {
    let t,
        { emoji: n, text: a, user: s, guildId: l, channelId: o, themeType: d, ...c } = e,
        { trackUserProfileAction: u } = (0, R.NJ)(),
        { interactionType: _, interactionSource: E, resetInteraction: A } = (0, L.Pq)(),
        h = E === k.dS.STATUS && _ === k.AQ.REACT,
        I = E === k.dS.STATUS && _ === k.AQ.REPLY,
        f = h || I,
        p = r.useRef(null),
        T = r.useRef(n),
        m = r.useRef(a);
    r.useEffect(() => {
        E === k.dS.STATUS && ((T.current !== n || m.current !== a) && A(), (T.current = n), (m.current = a));
    }, [E, A, n, a]);
    let [g, S] = r.useState(!1),
        C = r.useCallback(
            (e) => {
                (e || !f) && S(e);
            },
            [f],
        );
    return (0, i.jsx)(en, {
        user: s,
        guildId: l,
        channelId: o,
        themeType: d,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : N.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == a ? t : null == t ? a : `${t} ${a}`),
        sourceType: k.dS.STATUS,
        onAction: u,
        onClose: () => S(!1),
        children: () =>
            (0, i.jsx)(eE, {
                ...c,
                ref: p,
                emoji: n,
                text: a,
                themeType: d,
                className: f ? ec.zf : void 0,
                onShowToolbar: C,
                renderToolbar: (e) =>
                    (0, i.jsx)(G.Ay, {
                        targetRef: p,
                        user: s,
                        sourceType: k.dS.STATUS,
                        isVisible: g && !f,
                        isExpandable: e,
                        onAction: u,
                    }),
            }),
    });
}
let eI = r.forwardRef(function (e, t) {
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
        A = null != a || null != s,
        h = (0, C.G)(A ? a : _?.state),
        I = (0, o.bG)([O.default], () => O.default.getId() === n.id),
        f = I && !c,
        p = !I && !n.bot && !c;
    if (A) {
        let e = null != h && "" !== h ? h : null;
        return (0, i.jsx)(m.f5, {
            value: E,
            children: (0, i.jsx)(eE, { emoji: s ?? null, text: e, placeholderText: l, ref: t, ...u }),
        });
    }
    let g = _?.emoji ?? null,
        N = null != h && "" !== h ? h : null;
    return null != g || null != N || f
        ? null == g && null == N
            ? (0, i.jsx)(m.f5, { value: E, children: (0, i.jsx)(e_, { onCloseProfile: r, prompt: d, ref: t, ...u }) })
            : p
              ? (0, i.jsx)(m.f5, { value: E, children: (0, i.jsx)(eh, { user: n, emoji: g, text: N, ...u }) })
              : f
                ? (0, i.jsx)(m.f5, {
                      value: E,
                      children: (0, i.jsx)(eA, { emoji: g, text: N, onCloseProfile: r, ref: t, ...u }),
                  })
                : (0, i.jsx)(m.f5, { value: E, children: (0, i.jsx)(eE, { emoji: g, text: N, ref: t, ...u }) })
        : null;
});
