n.d(t, { A: () => em });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(123924),
    o = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    h = n(834730),
    f = n(939249),
    A = n(140735),
    m = n(717421),
    S = n(187322),
    x = n(775602),
    T = n(51183),
    g = n(793574),
    E = n(688810),
    p = n(915089),
    v = n(410540),
    R = n(7584),
    y = n(495544),
    C = n(183555),
    j = n(679492),
    N = n(922016),
    P = n(403777),
    L = n(462887),
    b = n(267889),
    _ = n(363195),
    I = n(403362),
    U = n(427262),
    M = n(448613),
    w = n(8925),
    $ = n(939496),
    O = n(518477),
    V = n(307731),
    k = n(818348),
    D = n(650583),
    F = n(985018),
    G = n(435693);
function H(e) {
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
        { resetInteraction: h, setInteractionToast: f } = (0, j.Pq)(),
        { theme: A } = (0, $.E)(),
        m = (0, o.bG)([_.A], () => _.A.theme),
        S = (0, L.M)(m) ? !(0, L.M)(A) : (0, L.M)(A),
        x = r.useRef(null);
    r.useEffect(() => {
        u?.(x?.current);
    }, [x, u]),
        r.useEffect(() => {
            let e = (e) => {
                e.key === D.dh.ESCAPE && (e.stopPropagation(), h());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, h]);
    let T = async (e) => {
        if (null == e) return;
        i === O.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : i === O.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = ((e) => {
            let { emoji: t, username: n, sourceType: l, sourceDetails: r } = e,
                a = `:${t.name}:`;
            switch (l) {
                case O.dS.ACTIVITY:
                    let i = F.intl.formatToPlainString(F.t.EUFEJt, { username: n }),
                        s = `
> ${r}`;
                    return null != r
                        ? `${w.c5}${i}*${s}
${a}`
                        : `${w.c5}${i}*
${a}`;
                case O.dS.AVATAR:
                    let o = F.intl.formatToPlainString(F.t.E6H15q, { username: n });
                    return `${w.c5}${o}*
${a}`;
                case O.dS.STATUS:
                    let u = F.intl.formatToPlainString(F.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${w.c5}${u}*${c}
${a}`
                        : `${w.c5}${u}*
${a}`;
                default:
                    (0, I.xb)(l);
            }
        })({ emoji: e, username: U.Ay.getName(t), sourceType: i, sourceDetails: s });
        f(null);
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
        f(O.AQ.REACT);
    };
    return (0, l.jsx)(b.A, {
        headerClassName: S ? G.X : void 0,
        guildId: n ?? void 0,
        closePopout: k.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await T(t), n && (h(), d?.());
        },
        pickerIntention: V.EmojiIntention.PROFILE,
    });
}
var Y = n(478437),
    B = n(305866),
    Q = n(355622),
    z = n(408018),
    q = n(201349),
    K = n(95701),
    W = n(562153),
    X = n(450262);
let J = (0, K.createChannelRecord)({ id: "1", type: Y.r.DM });
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
            onClose: h,
            entry: f,
        } = e,
        { resetInteraction: A, setInteractionToast: m } = (0, j.Pq)(),
        { primaryColor: S } = (0, $.E)(),
        [x, T] = r.useState(""),
        [g, E] = r.useState((0, z.x7)(x)),
        p = r.useRef(!1),
        v = r.useRef(null),
        R = r.useCallback(
            (e) => {
                e.key === D.dh.ESCAPE && (e.stopPropagation(), A());
            },
            [A],
        );
    r.useEffect(() => {
        u?.(v?.current);
    }, [v, u]);
    let y = async (e) => {
            if (null == e) return;
            s === O.dS.AVATAR
                ? d({ action: "SEND_REPLY_AVATAR" })
                : s === O.dS.STATUS
                  ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : d({ action: "SEND_REPLY_ACTIVITY" });
            let n = ((e) => {
                let { input: t, username: n, sourceType: l, sourceDetails: r } = e;
                switch (l) {
                    case O.dS.ACTIVITY:
                        let a = F.intl.formatToPlainString(F.t.WmvMCo, { username: n }),
                            i = `
> ${r}`;
                        return null != r
                            ? `${w.c5}${a}*${i}
${t}`
                            : `${w.c5}${a}*
${t}`;
                    case O.dS.AVATAR:
                        let s = F.intl.formatToPlainString(F.t.lpaBsB, { username: n });
                        return `${w.c5}${s}*
${t}`;
                    case O.dS.STATUS:
                        let o = F.intl.formatToPlainString(F.t.lFXgFV, { username: n }),
                            u = `
> ${r}`;
                        return null != r
                            ? `${w.c5}${o}*${u}
${t}`
                            : `${w.c5}${o}*
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
                    entry: f,
                });
            } catch (e) {}
            m(O.AQ.REPLY);
        },
        C = { [X.h5]: s === O.dS.STATUS, [X.my]: s === O.dS.AVATAR, [X.Eb]: s === O.dS.ACTIVITY };
    return (0, l.jsx)(B.l, {
        ref: v,
        onKeyDown: R,
        children: (0, l.jsx)("div", {
            className: i()(X.kL, C, { [X.GE]: null != S }),
            children: (0, l.jsx)(q.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: X.hF,
                innerClassName: X.rn,
                editorClassName: X.EN,
                type: Q.oU.USER_PROFILE_REPLY,
                placeholder: F.intl.formatToPlainString(
                    ((e) => {
                        switch (e) {
                            case O.dS.ACTIVITY:
                                return F.t.Qn081O;
                            case O.dS.AVATAR:
                                return F.t.xGNPFK;
                            case O.dS.STATUS:
                                return F.t.g9BTCM;
                            default:
                                (0, I.xb)(e);
                        }
                    })(s),
                    { username: W.Ay.getName(n, a, t) },
                ),
                channel: J,
                textValue: x,
                richValue: g,
                onChange: (e, t, n) => {
                    t !== x && (T(t), E(n));
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
                        return await y(n), A(), h?.(), { shouldClear: !0, shouldRefocus: !1 };
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
            interactionSourceId: h,
            interactionPopoutTargetRef: f,
        } = (0, j.Pq)(),
        A = [ee.d.MODAL, ee.d.MODAL_V2].includes(a) ? (0, P.n)(t.id, n) : void 0,
        m = c === o.sourceType && u === O.AQ.REACT,
        S = c === o.sourceType && u === O.AQ.REPLY,
        x = (m || S) && h === o.sourceId;
    return (0, l.jsx)(N.Y, {
        targetElementRef: f ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: s } = e;
            return (0, l.jsx)(m ? H : Z, {
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
        shouldShow: x,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: l } = e;
            return t === O.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : l === ee.d.MODAL || l === ee.d.MODAL_V2 || n === O.dS.ACTIVITY
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
    ei = n(253932),
    es = n(242744);
function eo(e) {
    let { isVisible: t, isExpandable: a, onCloseProfile: s } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, C.NJ)(),
        h = r.useRef(null),
        f = r.useRef(null),
        [A, m] = (0, o.yK)([x.A], () => [x.A.useReducedMotion, x.A.keyboardModeEnabled]),
        S = !a || A || m ? 0 : 300,
        { themeType: T } = (0, $.E)();
    return (0, l.jsxs)(ea.Ay, {
        className: i()(es.oO, { [es.RK]: t, [es.lu]: a }),
        children: [
            (0, l.jsx)(en.m, {
                asContainer: !0,
                targetElementRef: h,
                text: F.intl.string(F.t.bt75uw),
                delay: S,
                ariaHidden: !0,
                children: (0, l.jsx)(ea.$n, {
                    ref: h,
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
                                            n.e("80813"),
                                            n.e("56991"),
                                            n.e("77598"),
                                            n.e("91388"),
                                            n.e("20287"),
                                            n.e("28367"),
                                            n.e("96565"),
                                            n.e("48900"),
                                            n.e("20007"),
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
                text: F.intl.string(F.t.VkKicb),
                delay: S,
                ariaHidden: !0,
                children: (0, l.jsx)(ea.$n, {
                    ref: f,
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
            { themeType: m } = (0, $.E)(),
            S = null != a ? a.label() : F.intl.string(F.t.evw0oz),
            x = (0, l.jsxs)("div", {
                className: eu.Qs,
                children: [
                    (0, l.jsx)(d.U, { size: "xs", className: eu.Tw, colorClass: eu.qv }),
                    (0, l.jsx)(h.E, {
                        variant: "text-sm/normal",
                        className: i()(eu.ch, null != a && eu.R9),
                        children: S,
                    }),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ec, { children: x }),
                (0, l.jsx)("div", {
                    className: i()(eu.kL, eu.LL),
                    ref: t,
                    children: (0, l.jsx)(f.D, {
                        className: eu.A7,
                        "aria-label": F.intl.string(F.t["zrpF/b"]),
                        "aria-describedby": s,
                        onClick: () => {
                            u({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("80813"),
                                            n.e("56991"),
                                            n.e("77598"),
                                            n.e("91388"),
                                            n.e("20287"),
                                            n.e("28367"),
                                            n.e("96565"),
                                            n.e("48900"),
                                            n.e("20007"),
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
                                (0, l.jsx)(h.E, {
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
    eh = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: a,
                animate: c,
                className: d,
                renderToolbar: f,
                onShowToolbar: A,
                placeholderText: g,
                hasEntered: E = !0,
            } = e,
            p = (0, j.NR)(),
            { trackUserProfileAction: v } = (0, C.NJ)(),
            R = 1.25 * (null != n),
            y = 36 + R,
            N = 144 + R,
            P = r.useRef(null),
            L = r.useRef(null),
            b = r.useRef(null),
            _ = r.useRef(y),
            I = r.useRef(N),
            U = null != n && null == a,
            [M, w] = r.useState(!1),
            [$, V] = r.useState(!0),
            [k, D] = r.useState(!U && E),
            G = E && M,
            H = (0, o.bG)([x.A], () => x.A.useReducedMotion),
            [Y] = r.useState(() => new u.Ep());
        r.useEffect(() => () => Y.stop(), [Y]),
            r.useEffect(() => {
                p?.onInteractionPopoutTargetRefChange(P);
            }, [p]);
        let [B, Q] = (0, m.z)(() => ({ maxHeight: `${_.current}px`, config: { clamp: !0, duration: 150 } }));
        r.useLayoutEffect(() => {
            if ((w(!0), null == L.current || null == b.current || !G)) return;
            let e = L.current.getBoundingClientRect().height,
                t = b.current.getBoundingClientRect().height;
            D(t > e),
                (_.current = e),
                (I.current = t),
                Q({ maxHeight: `${Math.min($ ? _.current : I.current, $ ? y : N)}px` });
        }, [G, a, n, Q, $, y, N]);
        let z = (e) => {
                k &&
                    (e
                        ? Q({
                              maxHeight: `${Math.min(I.current, N)}px`,
                              delay: 300 * !H,
                              config: { clamp: !0, duration: 150 * !H },
                          })
                        : Q({ maxHeight: `${Math.min(_.current, y)}px`, delay: 0 }),
                    H ? V(!e) : Y.start(e ? 300 : 150, () => V(!e)));
            },
            q =
                null != n
                    ? (0, l.jsx)(T.A, { emoji: n, animate: c, hideTooltip: !1, tooltipDelay: O.In, className: eu.H0 })
                    : null,
            K = null != a ? (0, l.jsx)(h.E, { variant: "text-sm/normal", className: eu.qS, children: a }) : null,
            W =
                void 0 !== g && null == n
                    ? (0, l.jsx)(h.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${F.intl.string(F.t.EVV6uZ)}: ${g}`,
                          className: i()(eu.qS, eu.R9),
                          children: g ?? "",
                      })
                    : null,
            X = null == K || "" === a ? W : K,
            J = (0, l.jsxs)("div", { ref: L, className: eu.Qs, children: [q, X] }),
            Z = (0, l.jsxs)("div", { ref: b, className: i()(eu.Qs, eu.m2), children: [q, X] }),
            ee = (0, l.jsx)("div", {
                ref: t,
                className: eu.A7,
                children: (0, l.jsx)("span", {
                    className: eu.vW,
                    children: (0, l.jsxs)(s.animated.div, {
                        style: B,
                        className: i()(eu.Qs, { [eu.m2]: !$ }),
                        children: [q, X],
                    }),
                }),
            }),
            et = (0, l.jsxs)(ec, { children: [J, Z] });
        return null == A
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      et,
                      (0, l.jsxs)("div", {
                          ref: P,
                          className: i()(eu.kL, d),
                          onMouseEnter: () => {
                              v({ action: "HOVER_CUSTOM_STATUS" }), z(!0);
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
                              f?.(k),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      et,
                      (0, l.jsxs)("div", {
                          ref: P,
                          className: i()(eu.kL, d),
                          onFocus: () => {
                              A(!0), z(!0);
                          },
                          onBlur: (e) => {
                              P.current?.contains(e.relatedTarget) || (A(!1), z(!1));
                          },
                          onMouseEnter: () => {
                              v({ action: "HOVER_CUSTOM_STATUS" }), A(!0), z(!0);
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
                              f?.(k),
                          ],
                      }),
                  ],
              });
    }),
    ef = r.forwardRef(function (e, t) {
        let { emoji: n, text: a, onCloseProfile: i, ...s } = e,
            [o, u] = r.useState(!1);
        return (0, l.jsx)(eh, {
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
        { interactionType: h, interactionSource: f, resetInteraction: A } = (0, j.Pq)(),
        m = f === O.dS.STATUS && h === O.AQ.REACT,
        S = f === O.dS.STATUS && h === O.AQ.REPLY,
        x = m || S,
        T = r.useRef(null),
        g = r.useRef(n),
        E = r.useRef(a);
    r.useEffect(() => {
        f === O.dS.STATUS && ((g.current !== n || E.current !== a) && A(), (g.current = n), (E.current = a));
    }, [f, A, n, a]);
    let [p, v] = r.useState(!1),
        y = r.useCallback(
            (e) => {
                (e || !x) && v(e);
            },
            [x],
        );
    return (0, l.jsx)(et, {
        user: i,
        guildId: s,
        channelId: o,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : R.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == a ? t : null == t ? a : `${t} ${a}`),
        sourceType: O.dS.STATUS,
        onAction: d,
        onClose: () => v(!1),
        children: () =>
            (0, l.jsx)(eh, {
                ...c,
                ref: T,
                emoji: n,
                text: a,
                themeType: u,
                className: x ? eu.zf : void 0,
                onShowToolbar: y,
                renderToolbar: (e) =>
                    (0, l.jsx)(w.Ay, {
                        targetRef: T,
                        user: i,
                        sourceType: O.dS.STATUS,
                        isVisible: p && !x,
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
        h = (0, v.A)(n.id),
        { analyticsLocations: f } = (0, E.Ay)(g.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        A = (0, o.bG)([y.default], () => y.default.getId() === n.id),
        m = A && !c,
        S = !A && !n.bot && !c;
    if (null != a || null != i)
        return (0, l.jsx)(E.f5, {
            value: f,
            children: (0, l.jsx)(eh, {
                emoji: i ?? null,
                text: null != a && "" !== a ? a : null,
                placeholderText: s,
                ref: t,
                ...d,
            }),
        });
    let x = h?.emoji ?? null,
        T = h?.state ?? null,
        p = null != T && "" !== T ? T : null;
    return null != x || null != p || m
        ? null == x && null == p
            ? (0, l.jsx)(E.f5, { value: f, children: (0, l.jsx)(ed, { onCloseProfile: r, prompt: u, ref: t, ...d }) })
            : S
              ? (0, l.jsx)(E.f5, { value: f, children: (0, l.jsx)(eA, { user: n, emoji: x, text: p, ...d }) })
              : m
                ? (0, l.jsx)(E.f5, {
                      value: f,
                      children: (0, l.jsx)(ef, { emoji: x, text: p, onCloseProfile: r, ref: t, ...d }),
                  })
                : (0, l.jsx)(E.f5, { value: f, children: (0, l.jsx)(eh, { emoji: x, text: p, ref: t, ...d }) })
        : null;
});
