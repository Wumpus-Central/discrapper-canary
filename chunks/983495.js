"use strict";
n.d(t, { A: () => em });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(17928),
    d = n(451988),
    _ = n(192308),
    u = n(245604),
    c = n(834730),
    E = n(939249),
    h = n(140735),
    m = n(717421),
    f = n(187322),
    g = n(775602),
    p = n(51183),
    A = n(793574),
    I = n(688810),
    T = n(915089),
    S = n(410540),
    N = n(7584),
    C = n(495544),
    R = n(183555),
    O = n(679492),
    y = n(922016),
    v = n(403777),
    D = n(462887),
    L = n(267889),
    b = n(363195),
    w = n(403362),
    P = n(427262),
    k = n(448613),
    M = n(8925),
    U = n(939496),
    x = n(518477),
    G = n(307731),
    V = n(818348),
    F = n(650583),
    B = n(985018),
    H = n(435693);
function j(e) {
    let {
            user: t,
            guildId: n,
            entry: s,
            sourceType: a,
            sourceDetails: o,
            setPopoutRef: d,
            onAction: _,
            onClose: u,
        } = e,
        { resetInteraction: c, setInteractionToast: E } = (0, O.Pq)(),
        { theme: h } = (0, U.E)(),
        m = (0, l.bG)([b.A], () => b.A.theme),
        f = (0, D.M)(m) ? !(0, D.M)(h) : (0, D.M)(h),
        g = r.useRef(null);
    r.useEffect(() => {
        d?.(g?.current);
    }, [g, d]),
        r.useEffect(() => {
            let e = (e) => {
                e.key === F.dh.ESCAPE && (e.stopPropagation(), c());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [u, c]);
    let p = async (e) => {
        if (null == e) return;
        a === x.dS.AVATAR
            ? _({ action: "SEND_REACT_AVATAR" })
            : a === x.dS.STATUS
              ? _({ action: "SEND_REACT_CUSTOM_STATUS" })
              : _({ action: "SEND_REACT_ACTIVITY" });
        let n = ((e) => {
            let { emoji: t, username: n, sourceType: i, sourceDetails: r } = e,
                s = `:${t.name}:`;
            switch (i) {
                case x.dS.ACTIVITY:
                    let a = B.intl.formatToPlainString(B.t.EUFEJt, { username: n }),
                        o = `
> ${r}`;
                    return null != r
                        ? `${M.c5}${a}*${o}
${s}`
                        : `${M.c5}${a}*
${s}`;
                case x.dS.AVATAR:
                    let l = B.intl.formatToPlainString(B.t.E6H15q, { username: n });
                    return `${M.c5}${l}*
${s}`;
                case x.dS.STATUS:
                    let d = B.intl.formatToPlainString(B.t.XPQgL2, { username: n }),
                        _ = `
> ${r}`;
                    return null != r
                        ? `${M.c5}${d}*${_}
${s}`
                        : `${M.c5}${d}*
${s}`;
                default:
                    (0, w.xb)(i);
            }
        })({ emoji: e, username: P.Ay.getName(t), sourceType: a, sourceDetails: o });
        E(null);
        try {
            await (0, k.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: s,
            });
        } catch (e) {}
        E(x.AQ.REACT);
    };
    return (0, i.jsx)(L.A, {
        headerClassName: f ? H.X : void 0,
        guildId: n ?? void 0,
        closePopout: V.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await p(t), n && (c(), u?.());
        },
        pickerIntention: G.EmojiIntention.PROFILE,
    });
}
var W = n(478437),
    Y = n(305866),
    K = n(355622),
    z = n(408018),
    $ = n(201349),
    q = n(95701),
    X = n(562153),
    Z = n(450262);
let Q = (0, q.createChannelRecord)({ id: "1", type: W.r.DM });
function J(e) {
    let {
            user: t,
            guildId: n,
            channelId: s,
            sourceType: o,
            sourceDetails: l,
            setPopoutRef: d,
            modalKey: _,
            onAction: u,
            onClose: c,
            entry: E,
        } = e,
        { resetInteraction: h, setInteractionToast: m } = (0, O.Pq)(),
        { primaryColor: f } = (0, U.E)(),
        [g, p] = r.useState(""),
        [A, I] = r.useState((0, z.x7)(g)),
        T = r.useRef(!1),
        S = r.useRef(null),
        N = r.useCallback(
            (e) => {
                e.key === F.dh.ESCAPE && (e.stopPropagation(), h());
            },
            [h],
        );
    r.useEffect(() => {
        d?.(S?.current);
    }, [S, d]);
    let C = async (e) => {
            if (null == e) return;
            o === x.dS.AVATAR
                ? u({ action: "SEND_REPLY_AVATAR" })
                : o === x.dS.STATUS
                  ? u({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : u({ action: "SEND_REPLY_ACTIVITY" });
            let n = ((e) => {
                let { input: t, username: n, sourceType: i, sourceDetails: r } = e;
                switch (i) {
                    case x.dS.ACTIVITY:
                        let s = B.intl.formatToPlainString(B.t.WmvMCo, { username: n }),
                            a = `
> ${r}`;
                        return null != r
                            ? `${M.c5}${s}*${a}
${t}`
                            : `${M.c5}${s}*
${t}`;
                    case x.dS.AVATAR:
                        let o = B.intl.formatToPlainString(B.t.lpaBsB, { username: n });
                        return `${M.c5}${o}*
${t}`;
                    case x.dS.STATUS:
                        let l = B.intl.formatToPlainString(B.t.lFXgFV, { username: n }),
                            d = `
> ${r}`;
                        return null != r
                            ? `${M.c5}${l}*${d}
${t}`
                            : `${M.c5}${l}*
${t}`;
                    default:
                        (0, w.xb)(i);
                }
            })({ input: e, username: P.Ay.getName(t), sourceType: o, sourceDetails: l });
            m(null);
            try {
                await (0, k.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: E,
                });
            } catch (e) {}
            m(x.AQ.REPLY);
        },
        R = { [Z.h5]: o === x.dS.STATUS, [Z.my]: o === x.dS.AVATAR, [Z.Eb]: o === x.dS.ACTIVITY };
    return (0, i.jsx)(Y.l, {
        ref: S,
        onKeyDown: N,
        children: (0, i.jsx)("div", {
            className: a()(Z.kL, R, { [Z.GE]: null != f }),
            children: (0, i.jsx)($.Ay, {
                parentModalKey: _,
                emojiPickerCloseOnModalOuterClick: !0,
                className: Z.hF,
                innerClassName: Z.rn,
                editorClassName: Z.EN,
                type: K.oU.USER_PROFILE_REPLY,
                placeholder: B.intl.formatToPlainString(
                    ((e) => {
                        switch (e) {
                            case x.dS.ACTIVITY:
                                return B.t.Qn081O;
                            case x.dS.AVATAR:
                                return B.t.xGNPFK;
                            case x.dS.STATUS:
                                return B.t.g9BTCM;
                            default:
                                (0, w.xb)(e);
                        }
                    })(o),
                    { username: X.Ay.getName(n, s, t) },
                ),
                channel: Q,
                textValue: g,
                richValue: A,
                onChange: (e, t, n) => {
                    t !== g && (p(t), I(n));
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
                        return await C(n), h(), c?.(), { shouldClear: !0, shouldRefocus: !1 };
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
            interactionType: d,
            interactionSource: _,
            resetInteraction: u,
            interactionSourceId: c,
            interactionPopoutTargetRef: E,
        } = (0, O.Pq)(),
        h = [ee.d.MODAL, ee.d.MODAL_V2].includes(s) ? (0, v.n)(t.id, n) : void 0,
        m = _ === l.sourceType && d === x.AQ.REACT,
        f = _ === l.sourceType && d === x.AQ.REPLY,
        g = (m || f) && c === l.sourceId;
    return (0, i.jsx)(y.Y, {
        targetElementRef: E ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: o } = e;
            return (0, i.jsx)(m ? j : J, {
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
            u(), a?.();
        },
        shouldShow: g,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: i } = e;
            return t === x.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : i === ee.d.MODAL || i === ee.d.MODAL_V2 || n === x.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: d, interactionSource: _, themeType: s }),
        children: o,
    });
}
var en = n(990078),
    ei = n(22231),
    er = n(241326),
    es = n(101555),
    ea = n(253932),
    eo = n(242744);
function el(e) {
    let { isVisible: t, isExpandable: s, onCloseProfile: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        { trackUserProfileAction: u } = (0, R.NJ)(),
        c = r.useRef(null),
        E = r.useRef(null),
        [h, m] = (0, l.yK)([g.A], () => [g.A.useReducedMotion, g.A.keyboardModeEnabled]),
        f = !s || h || m ? 0 : 300,
        { themeType: p } = (0, U.E)();
    return (0, i.jsxs)(es.Ay, {
        className: a()(eo.oO, { [eo.RK]: t, [eo.lu]: s }),
        children: [
            (0, i.jsx)(en.m, {
                asContainer: !0,
                targetElementRef: c,
                text: B.intl.string(B.t.bt75uw),
                delay: f,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: c,
                    className: a()(eo.x6, eo.kb),
                    "aria-label": B.intl.string(B.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: () => {
                        u({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            ((e) => {
                                let { analyticsLocations: t, stackingBehavior: r } = e;
                                return (0, _.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("89122").then(n.bind(n, 657977));
                                        return (n) => (0, i.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                    },
                                    null != r ? { stackingBehavior: r } : void 0,
                                );
                            })({ analyticsLocations: d, stackingBehavior: p === ee.d.MODAL_V2 ? "stack" : void 0 }),
                            o?.();
                    },
                    children: (0, i.jsx)(ei.R, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
            (0, i.jsx)(en.m, {
                asContainer: !0,
                text: B.intl.string(B.t.VkKicb),
                delay: f,
                ariaHidden: !0,
                children: (0, i.jsx)(es.$n, {
                    ref: E,
                    className: a()(eo.x6, eo.pG),
                    "aria-label": B.intl.string(B.t.wfYTHe),
                    onClick: () => {
                        u({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), ea.G2.updateSetting(void 0);
                    },
                    children: (0, i.jsx)(er.u, { size: "xs", colorClass: eo.Kk }),
                }),
            }),
        ],
    });
}
var ed = n(713305);
function e_(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: a()(ed.nL, n),
        children: (0, i.jsx)("div", {
            className: ed.A7,
            children: (0, i.jsx)("span", { className: ed.vW, children: t }),
        }),
    });
}
let eu = r.forwardRef(function (e, t) {
        let { onCloseProfile: r, prompt: s } = e,
            o = (0, T.GV)(),
            { analyticsLocations: l } = (0, I.Ay)(),
            { trackUserProfileAction: d } = (0, R.NJ)(),
            { themeType: m } = (0, U.E)(),
            f = null != s ? s.label() : B.intl.string(B.t.evw0oz),
            g = (0, i.jsxs)("div", {
                className: ed.Qs,
                children: [
                    (0, i.jsx)(u.U, { size: "xs", className: ed.Tw, colorClass: ed.qv }),
                    (0, i.jsx)(c.E, {
                        variant: "text-sm/normal",
                        className: a()(ed.ch, null != s && ed.R9),
                        children: f,
                    }),
                ],
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(e_, { children: g }),
                (0, i.jsx)("div", {
                    className: a()(ed.kL, ed.LL),
                    ref: t,
                    children: (0, i.jsx)(E.D, {
                        className: ed.A7,
                        "aria-label": B.intl.string(B.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: () => {
                            d({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                r?.(),
                                (0, _.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("89122").then(n.bind(n, 657977));
                                        return (t) => (0, i.jsx)(e, { ...t, sourceAnalyticsLocations: l, prompt: s });
                                    },
                                    m === ee.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                );
                        },
                        focusProps: { ringClassName: ed.hN },
                        children: (0, i.jsxs)("span", {
                            className: a()(ed.vW, ed.vk),
                            children: [
                                (0, i.jsx)(u.U, { size: "xs", className: ed.Tw, colorClass: ed.qv }),
                                (0, i.jsxs)(h.A, { id: o, children: [B.intl.string(B.t.EVV6uZ), ": ", f] }),
                                (0, i.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    className: a()(ed.ch, null != s && ed.R9),
                                    "aria-hidden": "true",
                                    children: f,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    ec = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: s,
                animate: _,
                className: u,
                renderToolbar: E,
                onShowToolbar: h,
                placeholderText: A,
                hasEntered: I = !0,
            } = e,
            T = (0, O.NR)(),
            { trackUserProfileAction: S } = (0, R.NJ)(),
            N = 1.25 * (null != n),
            C = 36 + N,
            y = 144 + N,
            v = r.useRef(null),
            D = r.useRef(null),
            L = r.useRef(null),
            b = r.useRef(C),
            w = r.useRef(y),
            P = null != n && null == s,
            [k, M] = r.useState(!1),
            [U, G] = r.useState(!0),
            [V, F] = r.useState(!P && I),
            H = I && k,
            j = (0, l.bG)([g.A], () => g.A.useReducedMotion),
            [W] = r.useState(() => new d.Ep());
        r.useEffect(() => () => W.stop(), [W]),
            r.useEffect(() => {
                T?.onInteractionPopoutTargetRefChange(v);
            }, [T]);
        let [Y, K] = (0, m.z)(() => ({ maxHeight: `${b.current}px`, config: { clamp: !0, duration: 150 } }));
        r.useLayoutEffect(() => {
            if ((M(!0), null == D.current || null == L.current || !H)) return;
            let e = D.current.getBoundingClientRect().height,
                t = L.current.getBoundingClientRect().height;
            F(t > e),
                (b.current = e),
                (w.current = t),
                K({ maxHeight: `${Math.min(U ? b.current : w.current, U ? C : y)}px` });
        }, [H, s, n, K, U, C, y]);
        let z = (e) => {
                V &&
                    (e
                        ? K({
                              maxHeight: `${Math.min(w.current, y)}px`,
                              delay: 300 * !j,
                              config: { clamp: !0, duration: 150 * !j },
                          })
                        : K({ maxHeight: `${Math.min(b.current, C)}px`, delay: 0 }),
                    j ? G(!e) : W.start(e ? 300 : 150, () => G(!e)));
            },
            $ =
                null != n
                    ? (0, i.jsx)(p.A, { emoji: n, animate: _, hideTooltip: !1, tooltipDelay: x.In, className: ed.H0 })
                    : null,
            q = null != s ? (0, i.jsx)(c.E, { variant: "text-sm/normal", className: ed.qS, children: s }) : null,
            X =
                void 0 !== A && null == n
                    ? (0, i.jsx)(c.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${B.intl.string(B.t.EVV6uZ)}: ${A}`,
                          className: a()(ed.qS, ed.R9),
                          children: A ?? "",
                      })
                    : null,
            Z = null == q || "" === s ? X : q,
            Q = (0, i.jsxs)("div", { ref: D, className: ed.Qs, children: [$, Z] }),
            J = (0, i.jsxs)("div", { ref: L, className: a()(ed.Qs, ed.m2), children: [$, Z] }),
            ee = (0, i.jsx)("div", {
                ref: t,
                className: ed.A7,
                children: (0, i.jsx)("span", {
                    className: ed.vW,
                    children: (0, i.jsxs)(o.animated.div, {
                        style: Y,
                        className: a()(ed.Qs, { [ed.m2]: !U }),
                        children: [$, Z],
                    }),
                }),
            }),
            et = (0, i.jsxs)(e_, { children: [Q, J] });
        return null == h
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: v,
                          className: a()(ed.kL, u),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), z(!0);
                          },
                          onMouseLeave: () => {
                              z(!1);
                          },
                          onFocus: () => z(!0),
                          onBlur: () => z(!1),
                          children: [
                              (0, i.jsx)(f.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: ed.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": B.intl.formatToPlainString(B.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              E?.(V),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: v,
                          className: a()(ed.kL, u),
                          onFocus: () => {
                              h(!0), z(!0);
                          },
                          onBlur: (e) => {
                              v.current?.contains(e.relatedTarget) || (h(!1), z(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), h(!0), z(!0);
                          },
                          onMouseLeave: () => {
                              h(!1), z(!1);
                          },
                          children: [
                              (0, i.jsx)(f.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: ed.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": B.intl.formatToPlainString(B.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              E?.(V),
                          ],
                      }),
                  ],
              });
    }),
    eE = r.forwardRef(function (e, t) {
        let { emoji: n, text: s, onCloseProfile: a, ...o } = e,
            [l, d] = r.useState(!1);
        return (0, i.jsx)(ec, {
            ...o,
            ref: t,
            emoji: n,
            text: s,
            className: ed.LL,
            onShowToolbar: d,
            renderToolbar: (e) => (0, i.jsx)(el, { isVisible: l, isExpandable: e, onCloseProfile: a }),
        });
    });
function eh(e) {
    let t,
        { emoji: n, text: s, user: a, guildId: o, channelId: l, themeType: d, ..._ } = e,
        { trackUserProfileAction: u } = (0, R.NJ)(),
        { interactionType: c, interactionSource: E, resetInteraction: h } = (0, O.Pq)(),
        m = E === x.dS.STATUS && c === x.AQ.REACT,
        f = E === x.dS.STATUS && c === x.AQ.REPLY,
        g = m || f,
        p = r.useRef(null),
        A = r.useRef(n),
        I = r.useRef(s);
    r.useEffect(() => {
        E === x.dS.STATUS && ((A.current !== n || I.current !== s) && h(), (A.current = n), (I.current = s));
    }, [E, h, n, s]);
    let [T, S] = r.useState(!1),
        C = r.useCallback(
            (e) => {
                (e || !g) && S(e);
            },
            [g],
        );
    return (0, i.jsx)(et, {
        user: a,
        guildId: o,
        channelId: l,
        themeType: d,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : N.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == s ? t : null == t ? s : `${t} ${s}`),
        sourceType: x.dS.STATUS,
        onAction: u,
        onClose: () => S(!1),
        children: () =>
            (0, i.jsx)(ec, {
                ..._,
                ref: p,
                emoji: n,
                text: s,
                themeType: d,
                className: g ? ed.zf : void 0,
                onShowToolbar: C,
                renderToolbar: (e) =>
                    (0, i.jsx)(M.Ay, {
                        targetRef: p,
                        user: a,
                        sourceType: x.dS.STATUS,
                        isVisible: T && !g,
                        isExpandable: e,
                        onAction: u,
                    }),
            }),
    });
}
let em = r.forwardRef(function (e, t) {
    let {
            user: n,
            onCloseProfile: r,
            previewText: s,
            previewEmoji: a,
            placeholderText: o,
            prompt: d,
            disableToolbar: _ = !1,
            ...u
        } = e,
        c = (0, S.A)(n.id),
        { analyticsLocations: E } = (0, I.Ay)(A.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        h = (0, l.bG)([C.default], () => C.default.getId() === n.id),
        m = h && !_,
        f = !h && !n.bot && !_;
    if (null != s || null != a)
        return (0, i.jsx)(I.f5, {
            value: E,
            children: (0, i.jsx)(ec, {
                emoji: a ?? null,
                text: null != s && "" !== s ? s : null,
                placeholderText: o,
                ref: t,
                ...u,
            }),
        });
    let g = c?.emoji ?? null,
        p = c?.state ?? null,
        T = null != p && "" !== p ? p : null;
    return null != g || null != T || m
        ? null == g && null == T
            ? (0, i.jsx)(I.f5, { value: E, children: (0, i.jsx)(eu, { onCloseProfile: r, prompt: d, ref: t, ...u }) })
            : f
              ? (0, i.jsx)(I.f5, { value: E, children: (0, i.jsx)(eh, { user: n, emoji: g, text: T, ...u }) })
              : m
                ? (0, i.jsx)(I.f5, {
                      value: E,
                      children: (0, i.jsx)(eE, { emoji: g, text: T, onCloseProfile: r, ref: t, ...u }),
                  })
                : (0, i.jsx)(I.f5, { value: E, children: (0, i.jsx)(ec, { emoji: g, text: T, ref: t, ...u }) })
        : null;
});
