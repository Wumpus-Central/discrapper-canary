"use strict";
n.d(t, { A: () => eI });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(53466),
    o = n(17928),
    d = n(451988),
    c = n(192308),
    u = n(245604),
    _ = n(834730),
    E = n(939249),
    A = n(140735),
    h = n(717421),
    I = n(847374),
    f = n(775602),
    p = n(51183),
    T = n(793574),
    m = n(688810),
    g = n(915089),
    S = n(410540),
    N = n(7584),
    C = n(208971),
    R = n(280450),
    O = n(562153),
    L = n(183555),
    D = n(679492),
    y = n(922016),
    v = n(403777),
    b = n(462887),
    M = n(267889),
    P = n(363195),
    U = n(403362),
    w = n(427262),
    G = n(448613),
    x = n(8925),
    k = n(939496),
    F = n(518477),
    V = n(307731),
    B = n(818348),
    H = n(650583),
    j = n(375708),
    W = n(852005);
function Y(e) {
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
        { resetInteraction: _, setInteractionToast: E } = (0, D.Pq)(),
        { theme: A } = (0, k.E)(),
        h = (0, o.bG)([P.A], () => P.A.theme),
        I = (0, b.M)(h) ? !(0, b.M)(A) : (0, b.M)(A),
        f = r.useRef(null);
    async function p(e) {
        if (null == e) return;
        s === F.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : s === F.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: i, sourceDetails: r } = e,
                a = `:${t.name}:`;
            switch (i) {
                case F.dS.ACTIVITY:
                    let s = j.intl.formatToPlainString(j.t.EUFEJt, { username: n }),
                        l = `
> ${r}`;
                    return null != r
                        ? `${x.c5}${s}*${l}
${a}`
                        : `${x.c5}${s}*
${a}`;
                case F.dS.AVATAR:
                    let o = j.intl.formatToPlainString(j.t.E6H15q, { username: n });
                    return `${x.c5}${o}*
${a}`;
                case F.dS.STATUS:
                    let d = j.intl.formatToPlainString(j.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${x.c5}${d}*${c}
${a}`
                        : `${x.c5}${d}*
${a}`;
                default:
                    (0, U.xb)(i);
            }
        })({ emoji: e, username: w.Ay.getName(t), sourceType: s, sourceDetails: l });
        E(null);
        try {
            await (0, G.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: a,
            });
        } catch (e) {}
        E(F.AQ.REACT);
    }
    return (
        r.useEffect(() => {
            d?.(f?.current);
        }, [f, d]),
        r.useEffect(() => {
            function e(e) {
                e.key === H.dh.ESCAPE && (e.stopPropagation(), _());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [u, _]),
        (0, i.jsx)(M.A, {
            headerClassName: I ? W.X : void 0,
            guildId: n ?? void 0,
            closePopout: B.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: n } = e;
                await p(t), n && (_(), u?.());
            },
            pickerIntention: V.EmojiIntention.PROFILE,
        })
    );
}
var K = n(478437),
    $ = n(305866),
    z = n(355622),
    Z = n(408018),
    q = n(273754),
    X = n(95701),
    Q = n(451438);
let J = (0, X.createChannelRecord)({ id: "1", type: K.r.DM });
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
        { resetInteraction: A, setInteractionToast: h } = (0, D.Pq)(),
        { primaryColor: I } = (0, k.E)(),
        [f, p] = r.useState(""),
        [T, m] = r.useState((0, Z.x7)(f)),
        g = r.useRef(!1),
        S = r.useRef(null),
        N = r.useCallback(
            (e) => {
                e.key === H.dh.ESCAPE && (e.stopPropagation(), A());
            },
            [A],
        );
    async function C(e) {
        if (null == e) return;
        l === F.dS.AVATAR
            ? u({ action: "SEND_REPLY_AVATAR" })
            : l === F.dS.STATUS
              ? u({ action: "SEND_REPLY_CUSTOM_STATUS" })
              : u({ action: "SEND_REPLY_ACTIVITY" });
        let n = (function (e) {
            let { input: t, username: n, sourceType: i, sourceDetails: r } = e;
            switch (i) {
                case F.dS.ACTIVITY:
                    let a = j.intl.formatToPlainString(j.t.WmvMCo, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${x.c5}${a}*${s}
${t}`
                        : `${x.c5}${a}*
${t}`;
                case F.dS.AVATAR:
                    let l = j.intl.formatToPlainString(j.t.lpaBsB, { username: n });
                    return `${x.c5}${l}*
${t}`;
                case F.dS.STATUS:
                    let o = j.intl.formatToPlainString(j.t.lFXgFV, { username: n }),
                        d = `
> ${r}`;
                    return null != r
                        ? `${x.c5}${o}*${d}
${t}`
                        : `${x.c5}${o}*
${t}`;
                default:
                    (0, U.xb)(i);
            }
        })({ input: e, username: w.Ay.getName(t), sourceType: l, sourceDetails: o });
        h(null);
        try {
            await (0, G.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReplyPopout",
                openChannel: !1,
                whenReady: !1,
                entry: E,
            });
        } catch (e) {}
        h(F.AQ.REPLY);
    }
    r.useEffect(() => {
        d?.(S?.current);
    }, [S, d]);
    let R = { [Q.h5]: l === F.dS.STATUS, [Q.my]: l === F.dS.AVATAR, [Q.Eb]: l === F.dS.ACTIVITY };
    return (0, i.jsx)($.l, {
        ref: S,
        onKeyDown: N,
        children: (0, i.jsx)("div", {
            className: s()(Q.kL, R, { [Q.GE]: null != I }),
            children: (0, i.jsx)(q.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: Q.hF,
                innerClassName: Q.rn,
                editorClassName: Q.EN,
                type: z.oU.USER_PROFILE_REPLY,
                placeholder: j.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case F.dS.ACTIVITY:
                                return j.t.Qn081O;
                            case F.dS.AVATAR:
                                return j.t.xGNPFK;
                            case F.dS.STATUS:
                                return j.t.g9BTCM;
                            default:
                                (0, U.xb)(e);
                        }
                    })(l),
                    { username: O.Ay.getName(n, a, t) },
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
        } = (0, D.Pq)(),
        A = [et.d.MODAL, et.d.MODAL_V2].includes(a) ? (0, v.n)(t.id, n) : void 0,
        h = c === o.sourceType && d === F.AQ.REACT,
        I = c === o.sourceType && d === F.AQ.REPLY,
        f = (h || I) && _ === o.sourceId;
    return (0, i.jsx)(y.Y, {
        targetElementRef: E ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: l } = e;
            return (0, i.jsx)(h ? Y : ee, {
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
            return t === F.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : i === et.d.MODAL || i === et.d.MODAL_V2 || n === F.dS.ACTIVITY
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
        { trackUserProfileAction: u } = (0, L.NJ)(),
        _ = r.useRef(null),
        E = r.useRef(null),
        [A, h] = (0, o.yK)([f.Ay], () => [f.Ay.useReducedMotion, f.Ay.keyboardModeEnabled]),
        I = !a || A || h ? 0 : 300,
        { themeType: p } = (0, k.E)();
    return (0, i.jsxs)(es.Ay, {
        className: s()(eo.oO, { [eo.RK]: t, [eo.lu]: a }),
        children: [
            (0, i.jsx)(ei.m, {
                asContainer: !0,
                targetElementRef: _,
                text: j.intl.string(j.t.bt75uw),
                delay: I,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: _,
                    className: s()(eo.x6, eo.kb),
                    "aria-label": j.intl.string(j.t.QdHxos),
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
                                            n.e("55552"),
                                            n.e("20491"),
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
                text: j.intl.string(j.t.VkKicb),
                delay: I,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: E,
                    className: s()(eo.x6, eo.pG),
                    "aria-label": j.intl.string(j.t.wfYTHe),
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
            { trackUserProfileAction: d } = (0, L.NJ)(),
            { themeType: h } = (0, k.E)(),
            I = null != a ? a.label() : j.intl.string(j.t.evw0oz),
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
                        "aria-label": j.intl.string(j.t["zrpF/b"]),
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
                                            n.e("55552"),
                                            n.e("20491"),
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
                                (0, i.jsxs)(A.A, { id: l, children: [j.intl.string(j.t.EVV6uZ), ": ", I] }),
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
                statusLabel: c,
                themeType: u,
                animate: T,
                className: m,
                renderToolbar: S,
                onShowToolbar: N,
                placeholderText: C,
                hasEntered: R = !0,
            } = e,
            O = (0, D.NR)(),
            { trackUserProfileAction: y } = (0, L.NJ)(),
            v = 1.25 * (null != n),
            b = 36 + v,
            M = 144 + v,
            P = r.useRef(null),
            U = r.useRef(null),
            w = r.useRef(null),
            G = (0, g.GV)(),
            x = r.useRef(b),
            k = r.useRef(b),
            V = null != n && null == a,
            [B, H] = r.useState(!1),
            [W, Y] = r.useState(!0),
            [K, $] = r.useState(!V && R),
            [z, Z] = r.useState(!1),
            q = R && B,
            X = u === et.d.MODAL || u === et.d.MODAL_V2,
            Q = r.useCallback((e) => (X ? e : Math.min(e, M)), [M, X]),
            J = (0, o.bG)([f.Ay], () => f.Ay.useReducedMotion),
            [ee] = r.useState(() => new d.Ep());
        r.useEffect(() => () => ee.stop(), [ee]),
            r.useEffect(() => {
                O?.onInteractionPopoutTargetRefChange(P);
            }, [O]);
        let [en, ei] = (0, h.z)(() => ({ maxHeight: `${x.current}px`, config: { clamp: !0, duration: 150 } }));
        function er(e) {
            K &&
                (Z(e),
                e
                    ? ei({ maxHeight: `${Q(k.current)}px`, delay: 300 * !J, config: { clamp: !0, duration: 150 * !J } })
                    : ei({ maxHeight: `${Math.min(x.current, b)}px`, delay: 0 }),
                J ? Y(!e) : ee.start(e ? 300 : 150, () => Y(!e)));
        }
        r.useLayoutEffect(() => {
            if ((H(!0), null == U.current || null == w.current || !q)) return;
            let e = U.current.getBoundingClientRect().height,
                t = w.current.getBoundingClientRect().height,
                n = Q(t);
            $(n > e), (x.current = e), (k.current = t), ei({ maxHeight: `${W ? Math.min(x.current, b) : n}px` });
        }, [q, a, n, ei, W, b, Q]);
        let ea =
                null != n
                    ? (0, i.jsx)(p.A, { emoji: n, animate: T, hideTooltip: !1, tooltipDelay: F.In, className: ec.H0 })
                    : null,
            es = null != a ? (0, i.jsx)(_.E, { variant: "text-sm/normal", className: ec.qS, children: a }) : null,
            el =
                void 0 !== C && null == n
                    ? (0, i.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${j.intl.string(j.t.EVV6uZ)}: ${C}`,
                          className: s()(ec.qS, ec.R9),
                          children: C ?? "",
                      })
                    : null,
            eo = null == es || "" === a ? el : es,
            ed = (0, i.jsxs)("div", { className: ec.Qs, children: [ea, eo] }),
            e_ = (0, i.jsxs)("div", { ref: U, className: s()(ec.Qs, ec.mj), children: [ea, eo] }),
            eE = (0, i.jsxs)("div", { ref: w, className: s()(ec.Qs, ec.m2, ec.mj), children: [ea, eo] }),
            eA = j.intl.string(z ? j.t.fFaN1b : j.t.xPkLPy),
            eh = K
                ? (0, i.jsx)(A.A, {
                      showOnFocus: !0,
                      children: (0, i.jsx)(E.D, {
                          className: ec.uJ,
                          "aria-label": eA,
                          "aria-controls": G,
                          "aria-expanded": z,
                          onClick: () => er(!z),
                          focusProps: { ringClassName: ec.o5 },
                          children: (0, i.jsx)(I.a, {
                              size: "xs",
                              color: "currentColor",
                              className: z ? ec.DE : void 0,
                          }),
                      }),
                  })
                : null,
            eI = (0, i.jsx)("div", {
                ref: t,
                className: ec.A7,
                role: "group",
                "aria-label": c,
                children: (0, i.jsx)("span", {
                    className: ec.vW,
                    children: (0, i.jsxs)(l.animated.div, {
                        id: G,
                        style: en,
                        className: s()(ec.Qs, { [ec.m2]: !W && X, [ec.p$]: !W && !X }),
                        children: [ea, eo],
                    }),
                }),
            }),
            ef = (0, i.jsxs)(eu, { children: [ed, e_, eE] });
        return null == N
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ef,
                      (0, i.jsxs)("div", {
                          ref: P,
                          className: s()(ec.kL, m),
                          onMouseEnter: () => {
                              y({ action: "HOVER_CUSTOM_STATUS" }), er(!0);
                          },
                          onMouseLeave: () => {
                              er(!1);
                          },
                          children: [eI, S?.(K), eh],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      ef,
                      (0, i.jsxs)("div", {
                          ref: P,
                          className: s()(ec.kL, m),
                          onFocus: () => {
                              N(!0);
                          },
                          onBlur: (e) => {
                              P.current?.contains(e.relatedTarget) || N(!1);
                          },
                          onMouseEnter: () => {
                              y({ action: "HOVER_CUSTOM_STATUS" }), N(!0), er(!0);
                          },
                          onMouseLeave: () => {
                              N(!1), er(!1);
                          },
                          children: [eI, S?.(K), eh],
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
        { trackUserProfileAction: u } = (0, L.NJ)(),
        { interactionType: _, interactionSource: E, resetInteraction: A } = (0, D.Pq)(),
        h = E === F.dS.STATUS && _ === F.AQ.REACT,
        I = E === F.dS.STATUS && _ === F.AQ.REPLY,
        f = h || I,
        p = r.useRef(null),
        T = r.useRef(n),
        m = r.useRef(a);
    r.useEffect(() => {
        E === F.dS.STATUS && ((T.current !== n || m.current !== a) && A(), (T.current = n), (m.current = a));
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
        sourceType: F.dS.STATUS,
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
                    (0, i.jsx)(x.Ay, {
                        targetRef: p,
                        user: s,
                        sourceType: F.dS.STATUS,
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
            guildId: r,
            channelId: a,
            onCloseProfile: s,
            previewText: l,
            previewEmoji: d,
            placeholderText: c,
            prompt: u,
            disableToolbar: _ = !1,
            ...E
        } = e,
        A = (0, S.A)(n.id),
        { analyticsLocations: h } = (0, m.Ay)(T.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        I = null != l || null != d,
        f = (0, C.G)(I ? l : A?.state),
        p = (0, o.bG)([R.default], () => R.default.getId() === n.id),
        g = p && !_,
        N = O.Ay.useName(r, a, n),
        L = p ? j.intl.string(j.t.SlKMnR) : j.intl.formatToPlainString(j.t["91lTRe"], { name: N }),
        D = !p && !n.bot && !_;
    if (I) {
        let e = null != f && "" !== f ? f : null;
        return (0, i.jsx)(m.f5, {
            value: h,
            children: (0, i.jsx)(eE, { emoji: d ?? null, text: e, statusLabel: L, placeholderText: c, ref: t, ...E }),
        });
    }
    let y = A?.emoji ?? null,
        v = null != f && "" !== f ? f : null;
    return null != y || null != v || g
        ? null == y && null == v
            ? (0, i.jsx)(m.f5, { value: h, children: (0, i.jsx)(e_, { onCloseProfile: s, prompt: u, ref: t }) })
            : D
              ? (0, i.jsx)(m.f5, {
                    value: h,
                    children: (0, i.jsx)(eh, {
                        user: n,
                        guildId: r,
                        channelId: a,
                        emoji: y,
                        text: v,
                        statusLabel: L,
                        ...E,
                    }),
                })
              : g
                ? (0, i.jsx)(m.f5, {
                      value: h,
                      children: (0, i.jsx)(eA, { emoji: y, text: v, statusLabel: L, onCloseProfile: s, ref: t, ...E }),
                  })
                : (0, i.jsx)(m.f5, {
                      value: h,
                      children: (0, i.jsx)(eE, { emoji: y, text: v, statusLabel: L, ref: t, ...E }),
                  })
        : null;
});
