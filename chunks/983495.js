n.d(t, { A: () => em });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(785651),
    o = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    f = n(834730),
    h = n(939249),
    A = n(140735),
    m = n(717421),
    S = n(187322),
    g = n(775602),
    x = n(51183),
    T = n(793574),
    E = n(688810),
    p = n(915089),
    R = n(410540),
    v = n(7584),
    y = n(495544),
    C = n(183555),
    j = n(679492),
    P = n(922016),
    N = n(403777),
    L = n(462887),
    _ = n(267889),
    b = n(363195),
    I = n(403362),
    U = n(427262),
    M = n(448613),
    O = n(8925),
    w = n(939496),
    $ = n(518477),
    V = n(307731),
    k = n(818348),
    D = n(650583),
    F = n(375708),
    G = n(435693);
function Y(e) {
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
        { resetInteraction: f, setInteractionToast: h } = (0, j.Pq)(),
        { theme: A } = (0, w.E)(),
        m = (0, o.bG)([b.A], () => b.A.theme),
        S = (0, L.M)(m) ? !(0, L.M)(A) : (0, L.M)(A),
        g = r.useRef(null);
    r.useEffect(() => {
        u?.(g?.current);
    }, [g, u]),
        r.useEffect(() => {
            let e = (e) => {
                e.key === D.dh.ESCAPE && (e.stopPropagation(), f());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, f]);
    let x = async (e) => {
        if (null == e) return;
        i === $.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : i === $.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = ((e) => {
            let { emoji: t, username: n, sourceType: l, sourceDetails: r } = e,
                a = `:${t.name}:`;
            switch (l) {
                case $.dS.ACTIVITY:
                    let i = F.intl.formatToPlainString(F.t.EUFEJt, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${O.c5}${i}*${s}
${a}`
                        : `${O.c5}${i}*
${a}`;
                case $.dS.AVATAR:
                    let o = F.intl.formatToPlainString(F.t.E6H15q, { username: n });
                    return `${O.c5}${o}*
${a}`;
                case $.dS.STATUS:
                    let u = F.intl.formatToPlainString(F.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${O.c5}${u}*${c}
${a}`
                        : `${O.c5}${u}*
${a}`;
                default:
                    (0, I.xb)(l);
            }
        })({ emoji: e, username: U.Ay.getName(t), sourceType: i, sourceDetails: s });
        h(null);
        try {
            await (0, M.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: a,
            });
        } catch (e) {}
        h($.AQ.REACT);
    };
    return (0, l.jsx)(_.A, {
        headerClassName: S ? G.X : void 0,
        guildId: n ?? void 0,
        closePopout: k.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await x(t), n && (f(), d?.());
        },
        pickerIntention: V.EmojiIntention.PROFILE,
    });
}
var H = n(478437),
    Q = n(305866),
    B = n(355622),
    z = n(408018),
    K = n(201349),
    q = n(95701),
    X = n(562153),
    W = n(450262);
let J = (0, q.createChannelRecord)({ id: "1", type: H.r.DM });
function Z(e) {
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
        { resetInteraction: A, setInteractionToast: m } = (0, j.Pq)(),
        { primaryColor: S } = (0, w.E)(),
        [g, x] = r.useState(""),
        [T, E] = r.useState((0, z.x7)(g)),
        p = r.useRef(!1),
        R = r.useRef(null),
        v = r.useCallback(
            (e) => {
                e.key === D.dh.ESCAPE && (e.stopPropagation(), A());
            },
            [A],
        );
    r.useEffect(() => {
        u?.(R?.current);
    }, [R, u]);
    let y = async (e) => {
            if (null == e) return;
            s === $.dS.AVATAR
                ? d({ action: "SEND_REPLY_AVATAR" })
                : s === $.dS.STATUS
                  ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : d({ action: "SEND_REPLY_ACTIVITY" });
            let n = ((e) => {
                let { input: t, username: n, sourceType: l, sourceDetails: r } = e;
                switch (l) {
                    case $.dS.ACTIVITY:
                        let a = F.intl.formatToPlainString(F.t.WmvMCo, { username: n }),
                            i = `
> ${r}`;
                        return null != r
                            ? `${O.c5}${a}*${i}
${t}`
                            : `${O.c5}${a}*
${t}`;
                    case $.dS.AVATAR:
                        let s = F.intl.formatToPlainString(F.t.lpaBsB, { username: n });
                        return `${O.c5}${s}*
${t}`;
                    case $.dS.STATUS:
                        let o = F.intl.formatToPlainString(F.t.lFXgFV, { username: n }),
                            u = `
> ${r}`;
                        return null != r
                            ? `${O.c5}${o}*${u}
${t}`
                            : `${O.c5}${o}*
${t}`;
                    default:
                        (0, I.xb)(l);
                }
            })({ input: e, username: U.Ay.getName(t), sourceType: s, sourceDetails: o });
            m(null);
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
            m($.AQ.REPLY);
        },
        C = { [W.h5]: s === $.dS.STATUS, [W.my]: s === $.dS.AVATAR, [W.Eb]: s === $.dS.ACTIVITY };
    return (0, l.jsx)(Q.l, {
        ref: R,
        onKeyDown: v,
        children: (0, l.jsx)("div", {
            className: i()(W.kL, C, { [W.GE]: null != S }),
            children: (0, l.jsx)(K.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: W.hF,
                innerClassName: W.rn,
                editorClassName: W.EN,
                type: B.oU.USER_PROFILE_REPLY,
                placeholder: F.intl.formatToPlainString(
                    ((e) => {
                        switch (e) {
                            case $.dS.ACTIVITY:
                                return F.t.Qn081O;
                            case $.dS.AVATAR:
                                return F.t.xGNPFK;
                            case $.dS.STATUS:
                                return F.t.g9BTCM;
                            default:
                                (0, I.xb)(e);
                        }
                    })(s),
                    { username: X.Ay.getName(n, a, t) },
                ),
                channel: J,
                textValue: g,
                richValue: T,
                onChange: (e, t, n) => {
                    t !== g && (x(t), E(n));
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
                        return await y(n), A(), f?.(), { shouldClear: !0, shouldRefocus: !1 };
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
    let { user: t, guildId: n, channelId: r, themeType: a, onClose: i, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: h,
        } = (0, j.Pq)(),
        A = [ee.d.MODAL, ee.d.MODAL_V2].includes(a) ? (0, N.n)(t.id, n) : void 0,
        m = c === o.sourceType && u === $.AQ.REACT,
        S = c === o.sourceType && u === $.AQ.REPLY,
        g = (m || S) && f === o.sourceId;
    return (0, l.jsx)(P.Y, {
        targetElementRef: h ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: s } = e;
            return (0, l.jsx)(m ? Y : Z, {
                user: t,
                guildId: n,
                channelId: r,
                themeType: a,
                onClose: i,
                modalKey: A,
                setPopoutRef: s,
                ...o,
            });
        },
        onRequestClose: () => {
            d(), i?.();
        },
        shouldShow: g,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: l } = e;
            return t === $.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : l === ee.d.MODAL || l === ee.d.MODAL_V2 || n === $.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: u, interactionSource: c, themeType: a }),
        children: s,
    });
}
var en = n(990078),
    el = n(22231),
    er = n(241326),
    ea = n(101555),
    ei = n(885386),
    es = n(242744);
function eo(e) {
    let { isVisible: t, isExpandable: a, onCloseProfile: s } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, C.NJ)(),
        f = r.useRef(null),
        h = r.useRef(null),
        [A, m] = (0, o.yK)([g.A], () => [g.A.useReducedMotion, g.A.keyboardModeEnabled]),
        S = !a || A || m ? 0 : 300,
        { themeType: x } = (0, w.E)();
    return (0, l.jsxs)(ea.Ay, {
        className: i()(es.oO, { [es.RK]: t, [es.lu]: a }),
        children: [
            (0, l.jsx)(en.m, {
                asContainer: !0,
                targetElementRef: f,
                text: F.intl.string(F.t.bt75uw),
                delay: S,
                ariaHidden: !0,
                children: (0, l.jsx)(ea.$n, {
                    ref: f,
                    className: i()(es.x6, es.kb),
                    "aria-label": F.intl.string(F.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: () => {
                        d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            ((e) => {
                                let { analyticsLocations: t, stackingBehavior: r } = e;
                                return (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("76007"),
                                            n.e("25377"),
                                            n.e("31483"),
                                            n.e("23495"),
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
                                        return (n) => (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                    },
                                    null != r ? { stackingBehavior: r } : void 0,
                                );
                            })({ analyticsLocations: u, stackingBehavior: x === ee.d.MODAL_V2 ? "stack" : void 0 }),
                            s?.();
                    },
                    children: (0, l.jsx)(el.R, { size: "xs", colorClass: es.Kk }),
                }),
            }),
            (0, l.jsx)(en.m, {
                asContainer: !0,
                text: F.intl.string(F.t.VkKicb),
                delay: S,
                ariaHidden: !0,
                children: (0, l.jsx)(ea.$n, {
                    ref: h,
                    className: i()(es.x6, es.pG),
                    "aria-label": F.intl.string(F.t.wfYTHe),
                    onClick: () => {
                        d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), ei.G2.updateSetting(void 0);
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
        className: i()(eu.nL, n),
        children: (0, l.jsx)("div", {
            className: eu.A7,
            children: (0, l.jsx)("span", { className: eu.vW, children: t }),
        }),
    });
}
let ed = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: a } = e,
            s = (0, p.GV)(),
            { analyticsLocations: o } = (0, E.Ay)(),
            { trackUserProfileAction: u } = (0, C.NJ)(),
            { themeType: m } = (0, w.E)(),
            S = null != a ? a.label() : F.intl.string(F.t.evw0oz),
            g = (0, l.jsxs)("div", {
                className: eu.Qs,
                children: [
                    (0, l.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        className: i()(eu.ch, null != a && eu.R9),
                        children: S,
                    }),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ec, { children: g }),
                (0, l.jsx)("div", {
                    className: i()(eu.kL, eu.LL),
                    ref: t,
                    children: (0, l.jsx)(h.D, {
                        className: eu.A7,
                        "aria-label": F.intl.string(F.t["zrpF/b"]),
                        "aria-describedby": s,
                        onClick: () => {
                            u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("76007"),
                                            n.e("25377"),
                                            n.e("31483"),
                                            n.e("23495"),
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
                                        return (t) => (0, l.jsx)(e, { ...t, sourceAnalyticsLocations: o, prompt: a });
                                    },
                                    m === ee.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: eu.hN },
                        children: (0, l.jsxs)("span", {
                            className: i()(eu.vW, eu.vk),
                            children: [
                                (0, l.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                                (0, l.jsxs)(A.A, { id: s, children: [F.intl.string(F.t.EVV6uZ), ": ", S] }),
                                (0, l.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    className: i()(eu.ch, null != a && eu.R9),
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
    ef = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: a,
                animate: c,
                className: d,
                renderToolbar: h,
                onShowToolbar: A,
                placeholderText: T,
                hasEntered: E = !0,
            } = e,
            p = (0, j.NR)(),
            { trackUserProfileAction: R } = (0, C.NJ)(),
            v = 1.25 * (null != n),
            y = 36 + v,
            P = 144 + v,
            N = r.useRef(null),
            L = r.useRef(null),
            _ = r.useRef(null),
            b = r.useRef(y),
            I = r.useRef(P),
            U = null != n && null == a,
            [M, O] = r.useState(!1),
            [w, V] = r.useState(!0),
            [k, D] = r.useState(!U && E),
            G = E && M,
            Y = (0, o.bG)([g.A], () => g.A.useReducedMotion),
            [H] = r.useState(() => new u.Ep());
        r.useEffect(() => () => H.stop(), [H]),
            r.useEffect(() => {
                p?.onInteractionPopoutTargetRefChange(N);
            }, [p]);
        let [Q, B] = (0, m.z)(() => ({ maxHeight: `${b.current}px`, config: { clamp: !0, duration: 150 } }));
        r.useLayoutEffect(() => {
            if ((O(!0), null == L.current || null == _.current || !G)) return;
            let e = L.current.getBoundingClientRect().height,
                t = _.current.getBoundingClientRect().height;
            D(t > e),
                (b.current = e),
                (I.current = t),
                B({ maxHeight: `${Math.min(w ? b.current : I.current, w ? y : P)}px` });
        }, [G, a, n, B, w, y, P]);
        let z = (e) => {
                k &&
                    (e
                        ? B({
                              maxHeight: `${Math.min(I.current, P)}px`,
                              delay: 300 * !Y,
                              config: { clamp: !0, duration: 150 * !Y },
                          })
                        : B({ maxHeight: `${Math.min(b.current, y)}px`, delay: 0 }),
                    Y ? V(!e) : H.start(e ? 300 : 150, () => V(!e)));
            },
            K =
                null != n
                    ? (0, l.jsx)(x.A, { emoji: n, animate: c, hideTooltip: !1, tooltipDelay: $.In, className: eu.H0 })
                    : null,
            q = null != a ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: eu.qS, children: a }) : null,
            X =
                void 0 !== T && null == n
                    ? (0, l.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${F.intl.string(F.t.EVV6uZ)}: ${T}`,
                          className: i()(eu.qS, eu.R9),
                          children: T ?? "",
                      })
                    : null,
            W = null == q || "" === a ? X : q,
            J = (0, l.jsxs)("div", { ref: L, className: eu.Qs, children: [K, W] }),
            Z = (0, l.jsxs)("div", { ref: _, className: i()(eu.Qs, eu.m2), children: [K, W] }),
            ee = (0, l.jsx)("div", {
                ref: t,
                className: eu.A7,
                children: (0, l.jsx)("span", {
                    className: eu.vW,
                    children: (0, l.jsxs)(s.animated.div, {
                        style: Q,
                        className: i()(eu.Qs, { [eu.m2]: !w }),
                        children: [K, W],
                    }),
                }),
            }),
            et = (0, l.jsxs)(ec, { children: [J, Z] });
        return null == A
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      et,
                      (0, l.jsxs)("div", {
                          ref: N,
                          className: i()(eu.kL, d),
                          onMouseEnter: () => {
                              R({ action: "HOVER_CUSTOM_STATUS" }), z(!0);
                          },
                          onMouseLeave: () => {
                              z(!1);
                          },
                          onFocus: () => z(!0),
                          onBlur: () => z(!1),
                          children: [
                              (0, l.jsx)(S.vN, {
                                  children: (0, l.jsx)("div", {
                                      className: eu.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": F.intl.formatToPlainString(F.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
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
                          ref: N,
                          className: i()(eu.kL, d),
                          onFocus: () => {
                              A(!0), z(!0);
                          },
                          onBlur: (e) => {
                              N.current?.contains(e.relatedTarget) || (A(!1), z(!1));
                          },
                          onMouseEnter: () => {
                              R({ action: "HOVER_CUSTOM_STATUS" }), A(!0), z(!0);
                          },
                          onMouseLeave: () => {
                              A(!1), z(!1);
                          },
                          children: [
                              (0, l.jsx)(S.vN, {
                                  children: (0, l.jsx)("div", {
                                      className: eu.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": F.intl.formatToPlainString(F.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: a,
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
        let { emoji: n, text: a, onCloseProfile: i, ...s } = e,
            [o, u] = r.useState(!1);
        return (0, l.jsx)(ef, {
            ...s,
            ref: t,
            emoji: n,
            text: a,
            className: eu.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, l.jsx)(eo, { isVisible: o, isExpandable: e, onCloseProfile: i }),
        });
    });
function eA(e) {
    let t,
        { emoji: n, text: a, user: i, guildId: s, channelId: o, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, C.NJ)(),
        { interactionType: f, interactionSource: h, resetInteraction: A } = (0, j.Pq)(),
        m = h === $.dS.STATUS && f === $.AQ.REACT,
        S = h === $.dS.STATUS && f === $.AQ.REPLY,
        g = m || S,
        x = r.useRef(null),
        T = r.useRef(n),
        E = r.useRef(a);
    r.useEffect(() => {
        h === $.dS.STATUS && ((T.current !== n || E.current !== a) && A(), (T.current = n), (E.current = a));
    }, [h, A, n, a]);
    let [p, R] = r.useState(!1),
        y = r.useCallback(
            (e) => {
                (e || !g) && R(e);
            },
            [g],
        );
    return (0, l.jsx)(et, {
        user: i,
        guildId: s,
        channelId: o,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : v.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == a ? t : null == t ? a : `${t} ${a}`),
        sourceType: $.dS.STATUS,
        onAction: d,
        onClose: () => R(!1),
        children: () =>
            (0, l.jsx)(ef, {
                ...c,
                ref: x,
                emoji: n,
                text: a,
                themeType: u,
                className: g ? eu.zf : void 0,
                onShowToolbar: y,
                renderToolbar: (e) =>
                    (0, l.jsx)(O.Ay, {
                        targetRef: x,
                        user: i,
                        sourceType: $.dS.STATUS,
                        isVisible: p && !g,
                        isExpandable: e,
                        onAction: d,
                    }),
            }),
    });
}
let em = r.forwardRef(function (e, t) {
    let {
            user: n,
            onCloseProfile: r,
            previewText: a,
            previewEmoji: i,
            placeholderText: s,
            prompt: u,
            disableToolbar: c = !1,
            ...d
        } = e,
        f = (0, R.A)(n.id),
        { analyticsLocations: h } = (0, E.Ay)(T.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        A = (0, o.bG)([y.default], () => y.default.getId() === n.id),
        m = A && !c,
        S = !A && !n.bot && !c;
    if (null != a || null != i)
        return (0, l.jsx)(E.f5, {
            value: h,
            children: (0, l.jsx)(ef, {
                emoji: i ?? null,
                text: null != a && "" !== a ? a : null,
                placeholderText: s,
                ref: t,
                ...d,
            }),
        });
    let g = f?.emoji ?? null,
        x = f?.state ?? null,
        p = null != x && "" !== x ? x : null;
    return null != g || null != p || m
        ? null == g && null == p
            ? (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(ed, { onCloseProfile: r, prompt: u, ref: t, ...d }) })
            : S
              ? (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(eA, { user: n, emoji: g, text: p, ...d }) })
              : m
                ? (0, l.jsx)(E.f5, {
                      value: h,
                      children: (0, l.jsx)(eh, { emoji: g, text: p, onCloseProfile: r, ref: t, ...d }),
                  })
                : (0, l.jsx)(E.f5, { value: h, children: (0, l.jsx)(ef, { emoji: g, text: p, ref: t, ...d }) })
        : null;
});
