t.d(n, { A: () => eP });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    r = t.n(a),
    s = t(120692),
    o = t(855986),
    u = t(451988),
    c = t(192308),
    d = t(245604),
    f = t(834730),
    A = t(939249),
    S = t(140735),
    h = t(717421),
    T = t(847374),
    m = t(775602),
    g = t(51183),
    x = t(793574),
    E = t(688810),
    p = t(915089),
    R = t(410540),
    C = t(7584),
    y = t(208971),
    v = t(46653),
    j = t(562153),
    P = t(183555),
    N = t(679492),
    I = t(453903),
    b = t(265872),
    _ = t(403777),
    L = t(462887),
    M = t(863576),
    U = t(413599),
    O = t(403362),
    w = t(427262),
    V = t(448613),
    k = t(866665),
    $ = t(460905),
    D = t(110384),
    Y = t(365199),
    F = t(101555),
    H = t(570287),
    G = t(518477),
    B = t(792996),
    Q = t(47119);
let z = {
        [G.dS.AVATAR]: () => B.intl.string(B.t["fEUP/i"]),
        [G.dS.STATUS]: () => B.intl.string(B.t.TKdBC8),
        [G.dS.ACTIVITY]: () => B.intl.string(B.t.bSe71F),
    },
    K = {
        [G.dS.AVATAR]: () => B.intl.string(B.t.xvN0fV),
        [G.dS.STATUS]: () => B.intl.string(B.t["C/vzS7"]),
        [G.dS.ACTIVITY]: () => B.intl.string(B.t.ObfsSj),
    };
function q(e) {
    let {
            user: n,
            sourceType: t,
            isVisible: a,
            isExpandable: s,
            interactionSourceId: u,
            targetRef: c,
            onAction: d,
            renderMoreButtonPopout: f,
        } = e,
        A = i.useRef(null),
        S = (0, o.bG)([v.default], () => v.default.getId() === n.id),
        h = (0, H.A)(n.id),
        { onInteraction: T, onInteractionPopoutTargetRefChange: m } = (0, N.Pq)();
    return n.bot || S || !h
        ? null
        : (0, l.jsxs)(F.Ay, {
              className: r()(Q.oO, {
                  [Q.RK]: a,
                  [Q.lu]: s,
                  [Q.U7]: t === G.dS.STATUS,
                  [Q.nL]: t === G.dS.AVATAR,
                  [Q.bt]: t === G.dS.ACTIVITY,
              }),
              children: [
                  (0, l.jsx)(k.m, {
                      asContainer: !0,
                      text: B.intl.string(B.t.nhaI4b),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(F.$n, {
                          onClick: function () {
                              (m(c),
                                  t === G.dS.AVATAR
                                      ? d({ action: "PRESS_REACT_AVATAR" })
                                      : t === G.dS.STATUS
                                        ? d({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REACT_ACTIVITY" }),
                                  T?.({ interactionType: G.AQ.REACT, interactionSource: t, interactionSourceId: u }));
                          },
                          className: Q.x6,
                          "aria-label": z[t](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)($.ReactionIcon, { size: "xs", className: Q.Kk }),
                      }),
                  }),
                  (0, l.jsx)(k.m, {
                      asContainer: !0,
                      text: B.intl.string(B.t.RmDYKK),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(F.$n, {
                          onClick: function () {
                              (m(c),
                                  t === G.dS.AVATAR
                                      ? d({ action: "PRESS_REPLY_AVATAR" })
                                      : t === G.dS.STATUS
                                        ? d({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REPLY_ACTIVITY" }),
                                  T?.({ interactionType: G.AQ.REPLY, interactionSource: t, interactionSourceId: u }));
                          },
                          className: Q.x6,
                          "aria-label": K[t](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(D.ArrowAngleLeftUpIcon, { size: "xs", className: Q.Kk }),
                      }),
                  }),
                  f?.((e) =>
                      (0, l.jsx)(k.m, {
                          asContainer: !0,
                          text: B.intl.string(B.t["UKOtz+"]),
                          shouldShow: a,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, l.jsx)(F.$n, {
                              ref: A,
                              ...e,
                              onClick: function () {
                                  (m(A), e.onClick?.());
                              },
                              className: Q.x6,
                              "aria-label": B.intl.string(B.t["UKOtz+"]),
                              children: (0, l.jsx)(Y.MoreHorizontalIcon, { size: "xs", className: Q.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
var W = t(939496),
    X = t(307731),
    J = t(818348),
    Z = t(650583),
    ee = t(954024);
function en(e) {
    let {
            user: n,
            guildId: t,
            entry: a,
            sourceType: r,
            sourceDetails: s,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: f, setInteractionToast: A } = (0, N.Pq)(),
        { theme: S } = (0, W.E)(),
        h = (0, o.bG)([U.A], () => U.A.theme),
        T = (0, L.M)(h) ? !(0, L.M)(S) : (0, L.M)(S),
        m = i.useRef(null);
    return (
        i.useEffect(() => {
            u?.(m?.current);
        }, [m, u]),
        i.useEffect(() => {
            function e(e) {
                e.key === Z.dh.ESCAPE && (e.stopPropagation(), f());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, f]),
        (0, l.jsx)(M.A, {
            headerClassName: T ? ee.X : void 0,
            guildId: t ?? void 0,
            closePopout: J.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: l } = e;
                (await (async function (e) {
                    if (null == e) return;
                    r === G.dS.AVATAR
                        ? c({ action: "SEND_REACT_AVATAR" })
                        : r === G.dS.STATUS
                          ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
                          : c({ action: "SEND_REACT_ACTIVITY" });
                    let t = (function (e) {
                        let { emoji: n, username: t, sourceType: l, sourceDetails: i } = e,
                            a = `:${n.name}:`;
                        switch (l) {
                            case G.dS.ACTIVITY:
                                let r = B.intl.formatToPlainString(B.t.EUFEJt, { username: t }),
                                    s = `
> ${i}`;
                                return null != i
                                    ? `> -# *${r}*${s}
${a}`
                                    : `> -# *${r}*
${a}`;
                            case G.dS.AVATAR:
                                let o = B.intl.formatToPlainString(B.t.E6H15q, { username: t });
                                return `> -# *${o}*
${a}`;
                            case G.dS.STATUS:
                                let u = B.intl.formatToPlainString(B.t.XPQgL2, { username: t }),
                                    c = `
> ${i}`;
                                return null != i
                                    ? `> -# *${u}*${c}
${a}`
                                    : `> -# *${u}*
${a}`;
                            default:
                                (0, O.xb)(l);
                        }
                    })({ emoji: e, username: w.Ay.getName(n), sourceType: r, sourceDetails: s });
                    A(null);
                    try {
                        await (0, V.p)({
                            userId: n.id,
                            content: t,
                            location: "UserProfileReactPopout",
                            openChannel: !1,
                            whenReady: !1,
                            entry: a,
                        });
                    } catch (e) {}
                    A(G.AQ.REACT);
                })(t),
                    l && (f(), d?.()));
            },
            pickerIntention: X.EmojiIntention.PROFILE,
        })
    );
}
var et = t(478437),
    el = t(305866),
    ei = t(355622),
    ea = t(408018),
    er = t(989161),
    es = t(95701),
    eo = t(767523);
let eu = (0, es.createChannelRecord)({ id: "1", type: et.r.DM });
function ec(e) {
    let {
            user: n,
            guildId: t,
            channelId: a,
            sourceType: s,
            sourceDetails: o,
            setPopoutRef: u,
            modalKey: c,
            onAction: d,
            onClose: f,
            entry: A,
        } = e,
        { resetInteraction: S, setInteractionToast: h } = (0, N.Pq)(),
        { primaryColor: T } = (0, W.E)(),
        [m, g] = i.useState(""),
        [x, E] = i.useState((0, ea.x7)(m)),
        p = i.useRef(!1),
        R = i.useRef(null),
        C = i.useCallback(
            (e) => {
                e.key === Z.dh.ESCAPE && (e.stopPropagation(), S());
            },
            [S],
        );
    i.useEffect(() => {
        u?.(R?.current);
    }, [R, u]);
    let y = { [eo.h5]: s === G.dS.STATUS, [eo.my]: s === G.dS.AVATAR, [eo.Eb]: s === G.dS.ACTIVITY };
    return (0, l.jsx)(el.l, {
        ref: R,
        onKeyDown: C,
        children: (0, l.jsx)("div", {
            className: r()(eo.kL, y, { [eo.GE]: null != T }),
            children: (0, l.jsx)(er.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: eo.hF,
                innerClassName: eo.rn,
                editorClassName: eo.EN,
                type: ei.oU.USER_PROFILE_REPLY,
                placeholder: B.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case G.dS.ACTIVITY:
                                return B.t.Qn081O;
                            case G.dS.AVATAR:
                                return B.t.xGNPFK;
                            case G.dS.STATUS:
                                return B.t.g9BTCM;
                            default:
                                (0, O.xb)(e);
                        }
                    })(s),
                    { username: j.Ay.getName(t, a, n) },
                ),
                channel: eu,
                textValue: m,
                richValue: x,
                onChange: (e, n, t) => {
                    n !== m && (g(n), E(t));
                },
                focused: p.current,
                onFocus: () => {
                    p.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        l = t.trim();
                    if (0 === l.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return (
                            await (async function (e) {
                                if (null == e) return;
                                s === G.dS.AVATAR
                                    ? d({ action: "SEND_REPLY_AVATAR" })
                                    : s === G.dS.STATUS
                                      ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                                      : d({ action: "SEND_REPLY_ACTIVITY" });
                                let t = (function (e) {
                                    let { input: n, username: t, sourceType: l, sourceDetails: i } = e;
                                    switch (l) {
                                        case G.dS.ACTIVITY:
                                            let a = B.intl.formatToPlainString(B.t.WmvMCo, { username: t }),
                                                r = `
> ${i}`;
                                            return null != i
                                                ? `> -# *${a}*${r}
${n}`
                                                : `> -# *${a}*
${n}`;
                                        case G.dS.AVATAR:
                                            let s = B.intl.formatToPlainString(B.t.lpaBsB, { username: t });
                                            return `> -# *${s}*
${n}`;
                                        case G.dS.STATUS:
                                            let o = B.intl.formatToPlainString(B.t.lFXgFV, { username: t }),
                                                u = `
> ${i}`;
                                            return null != i
                                                ? `> -# *${o}*${u}
${n}`
                                                : `> -# *${o}*
${n}`;
                                        default:
                                            (0, O.xb)(l);
                                    }
                                })({ input: e, username: w.Ay.getName(n), sourceType: s, sourceDetails: o });
                                h(null);
                                try {
                                    await (0, V.p)({
                                        userId: n.id,
                                        content: t,
                                        location: "UserProfileReplyPopout",
                                        openChannel: !1,
                                        whenReady: !1,
                                        entry: A,
                                    });
                                } catch (e) {}
                                h(G.AQ.REPLY);
                            })(l),
                            S(),
                            f?.(),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch {
                        return { shouldClear: !1, shouldRefocus: !1 };
                    }
                },
            }),
        }),
    });
}
var ed = t(996988);
function ef(e) {
    let { user: n, guildId: t, channelId: i, themeType: a, onClose: r, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: A,
        } = (0, N.Pq)(),
        S = [ed.d.MODAL, ed.d.MODAL_V2].includes(a) ? (0, _.n1)(n.id, t) : void 0,
        h = c === o.sourceType && u === G.AQ.REACT,
        T = c === o.sourceType && u === G.AQ.REPLY,
        m = (h || T) && f === o.sourceId;
    return (0, l.jsx)(I.NA.Provider, {
        value: null,
        children: (0, l.jsx)(b.Y, {
            targetElementRef: A ?? void 0,
            renderPopout: (e) => {
                let { setPopoutRef: s } = e;
                return (0, l.jsx)(h ? en : ec, {
                    user: n,
                    guildId: t,
                    channelId: i,
                    themeType: a,
                    onClose: r,
                    modalKey: S,
                    setPopoutRef: s,
                    ...o,
                });
            },
            onRequestClose: () => {
                (d(), r?.());
            },
            shouldShow: m,
            ...(function (e) {
                let { interactionType: n, interactionSource: t, themeType: l } = e;
                return n === G.AQ.REACT
                    ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                    : l === ed.d.MODAL || l === ed.d.MODAL_V2 || t === G.dS.ACTIVITY
                      ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                      : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
            })({ interactionType: u, interactionSource: c, themeType: a }),
            children: s,
        }),
    });
}
var eA = t(22231),
    eS = t(241326),
    eh = t(253932),
    eT = t(969603);
function em(e) {
    let {
            className: n,
            ref: t,
            tooltipText: i,
            onClick: a,
            shouldDelayTooltip: s,
            disabled: u,
            "aria-label": c,
            "aria-haspopup": d,
            "aria-expanded": f,
            "aria-controls": A,
            icon: S,
            variant: h,
            onMouseDown: T,
            onMouseEnter: g,
            onKeyDown: x,
        } = e,
        E = (0, o.bG)([m.Ay], () => (!s || m.Ay.useReducedMotion || m.Ay.keyboardModeEnabled ? 0 : 300));
    return (0, l.jsx)(k.m, {
        asContainer: !0,
        text: i,
        delay: E,
        ariaHidden: !0,
        children: (0, l.jsx)(F.$n, {
            ref: t,
            className: r()(eT.button, eT[h], n),
            disabled: u,
            "aria-label": c ?? i,
            "aria-haspopup": d,
            "aria-expanded": f,
            "aria-controls": A,
            onClick: a,
            onMouseDown: T,
            onMouseEnter: g,
            onKeyDown: x,
            children: (0, l.jsx)(S, { size: "xs", colorClass: eT.icon }),
        }),
    });
}
function eg(e) {
    let { className: n, children: t } = e;
    return (0, l.jsx)(F.Ay, { className: r()(eT.bar, n), children: t });
}
var ex = t(777357);
function eE(e) {
    let { isVisible: n, isExpandable: a, onCloseProfile: s, editButtonRef: o } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, P.NJ)(),
        f = i.useRef(null),
        { themeType: A } = (0, W.E)();
    return (0, l.jsxs)(eg, {
        className: r()(ex.oO, { [ex.RK]: n, [ex.lu]: a }),
        children: [
            (0, l.jsx)(em, {
                variant: "custom-status",
                ref: o,
                tooltipText: B.intl.string(B.t.bt75uw),
                shouldDelayTooltip: a,
                onClick: function () {
                    (d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                        (function (e) {
                            let { analyticsLocations: n, stackingBehavior: i, returnRef: a } = e;
                            (0, c.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        t.e(775417),
                                        t.e(865429),
                                        t.e(25300),
                                        t.e(291103),
                                        t.e(686889),
                                        t.e(875762),
                                        t.e(526807),
                                        t.e(826240),
                                        t.e(455924),
                                        t.e(250478),
                                        t.e(993610),
                                        t.e(356296),
                                        t.e(220287),
                                        t.e(428367),
                                        t.e(655552),
                                        t.e(772163),
                                        t.e(748370),
                                    ]).then(t.bind(t, 431273));
                                    return (t) => (0, l.jsx)(e, { ...t, sourceAnalyticsLocations: n, returnRef: a });
                                },
                                null != i ? { stackingBehavior: i } : void 0,
                            );
                        })({
                            analyticsLocations: u,
                            stackingBehavior: A === ed.d.MODAL_V2 ? "stack" : void 0,
                            returnRef: o,
                        }),
                        s?.());
                },
                "aria-label": B.intl.string(B.t.QdHxos),
                "aria-haspopup": "dialog",
                icon: eA.PencilIcon,
            }),
            (0, l.jsx)(em, {
                variant: "custom-status",
                ref: f,
                tooltipText: B.intl.string(B.t.VkKicb),
                shouldDelayTooltip: a,
                onClick: function () {
                    (d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }),
                        eh.G2.updateSetting(void 0),
                        requestAnimationFrame(() => o.current?.focus()));
                },
                "aria-label": B.intl.string(B.t.wfYTHe),
                icon: eS.TrashIcon,
            }),
        ],
    });
}
var ep = t(502622);
function eR(e) {
    let { children: n, className: t } = e;
    return (0, l.jsx)("div", {
        className: r()(ep.nL, t),
        children: (0, l.jsx)("div", {
            className: ep.A7,
            children: (0, l.jsx)("span", { className: ep.vW, children: n }),
        }),
    });
}
function eC(e) {
    let { onCloseProfile: n, prompt: i, addButtonRef: a, ref: s } = e,
        o = (0, p.GV)(),
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: h } = (0, P.NJ)(),
        { themeType: T } = (0, W.E)(),
        m = null != i ? i.label() : B.intl.string(B.t.evw0oz),
        g = (0, l.jsxs)("div", {
            className: ep.Qs,
            children: [
                (0, l.jsx)(d.CirclePlusIcon, { size: "xs", className: ep.Tw, colorClass: ep.qv }),
                (0, l.jsx)(f.E, { variant: "body-sm/normal", className: r()(ep.ch, null != i && ep.R9), children: m }),
            ],
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eR, { children: g }),
            (0, l.jsx)("div", {
                className: r()(ep.kL, ep.LL),
                ref: s,
                children: (0, l.jsx)(A.D, {
                    innerRef: a,
                    className: ep.A7,
                    "aria-label": B.intl.string(B.t["zrpF/b"]),
                    "aria-describedby": o,
                    onClick: function () {
                        (h({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                            n?.(),
                            (0, c.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        t.e(775417),
                                        t.e(865429),
                                        t.e(25300),
                                        t.e(291103),
                                        t.e(686889),
                                        t.e(875762),
                                        t.e(526807),
                                        t.e(826240),
                                        t.e(455924),
                                        t.e(250478),
                                        t.e(993610),
                                        t.e(356296),
                                        t.e(220287),
                                        t.e(428367),
                                        t.e(655552),
                                        t.e(772163),
                                        t.e(748370),
                                    ]).then(t.bind(t, 431273));
                                    return (n) =>
                                        (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: u, prompt: i, returnRef: a });
                                },
                                T === ed.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                            ));
                    },
                    focusProps: { ringClassName: ep.hN },
                    children: (0, l.jsxs)("span", {
                        className: r()(ep.vW, ep.vk),
                        children: [
                            (0, l.jsx)(d.CirclePlusIcon, { size: "xs", className: ep.Tw, colorClass: ep.qv }),
                            (0, l.jsxs)(S.A, { id: o, children: [B.intl.string(B.t.EVV6uZ), ": ", m] }),
                            (0, l.jsx)(f.E, {
                                variant: "body-sm/normal",
                                className: r()(ep.ch, null != i && ep.R9),
                                "aria-hidden": "true",
                                children: m,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ey(e) {
    let {
            emoji: n,
            text: t,
            statusLabel: a,
            themeType: c,
            animate: d,
            className: x,
            referenceClassName: E,
            renderToolbar: R,
            onShowToolbar: C,
            placeholderText: y,
            hasEntered: v = !0,
            ref: j,
        } = e,
        I = (0, N.NR)(),
        { trackUserProfileAction: b } = (0, P.NJ)(),
        _ = 1.25 * (null != n),
        L = 36 + _,
        M = 144 + _,
        U = i.useRef(null),
        O = i.useRef(null),
        w = i.useRef(null),
        V = (0, p.GV)(),
        k = i.useRef(L),
        $ = i.useRef(L),
        D = null != n && null == t,
        [Y, F] = i.useState(!1),
        [H, G] = i.useState(!0),
        [Q, z] = i.useState(!D && v),
        [K, q] = i.useState(!1),
        W = v && Y,
        X = c === ed.d.MODAL || c === ed.d.MODAL_V2,
        J = i.useCallback((e) => (X ? e : Math.min(e, M)), [M, X]),
        Z = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        [ee] = i.useState(() => new u.Ep());
    (i.useEffect(() => () => ee.stop(), [ee]),
        i.useEffect(() => {
            I?.onInteractionPopoutTargetRefChange(U);
        }, [I]));
    let [en, et] = (0, h.z)(() => ({ maxHeight: `${k.current}px`, config: { clamp: !0, duration: 150 } }));
    function el(e) {
        Q &&
            (q(e),
            e
                ? et({ maxHeight: `${J($.current)}px`, delay: 300 * !Z, config: { clamp: !0, duration: 150 * !Z } })
                : et({ maxHeight: `${Math.min(k.current, L)}px`, delay: 0 }),
            Z ? G(!e) : ee.start(e ? 300 : 150, () => G(!e)));
    }
    i.useLayoutEffect(() => {
        if ((F(!0), null == O.current || null == w.current || !W)) return;
        let e = O.current.getBoundingClientRect().height,
            n = w.current.getBoundingClientRect().height,
            t = J(n);
        (z(t > e), (k.current = e), ($.current = n), et({ maxHeight: `${H ? Math.min(k.current, L) : t}px` }));
    }, [W, t, n, et, H, L, J]);
    let ei =
            null != n
                ? (0, l.jsx)(g.A, { emoji: n, animate: d, hideTooltip: !1, tooltipDelay: 300, className: ep.H0 })
                : null,
        ea = null != t ? (0, l.jsx)(f.E, { variant: "body-sm/normal", className: ep.qS, children: t }) : null,
        er =
            void 0 !== y && null == n
                ? (0, l.jsx)(f.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      "aria-label": `${B.intl.string(B.t.EVV6uZ)}: ${y}`,
                      className: r()(ep.qS, ep.R9),
                      children: y ?? "",
                  })
                : null,
        es = null == ea || "" === t ? er : ea,
        eo = (0, l.jsxs)("div", { className: ep.Qs, children: [ei, es] }),
        eu = (0, l.jsxs)("div", { ref: O, className: r()(ep.Qs, ep.mj), children: [ei, es] }),
        ec = (0, l.jsxs)("div", { ref: w, className: r()(ep.Qs, ep.m2, ep.mj), children: [ei, es] }),
        ef = B.intl.string(K ? B.t.fFaN1b : B.t.xPkLPy),
        eA = Q
            ? (0, l.jsx)(S.A, {
                  showOnFocus: !0,
                  children: (0, l.jsx)(A.D, {
                      className: ep.uJ,
                      "aria-label": ef,
                      "aria-controls": V,
                      "aria-expanded": K,
                      onClick: () => el(!K),
                      focusProps: { ringClassName: ep.o5 },
                      children: (0, l.jsx)(T.ChevronSmallDownIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: K ? ep.DE : void 0,
                      }),
                  }),
              })
            : null,
        eS = (0, l.jsx)("div", {
            ref: j,
            className: ep.A7,
            role: "group",
            "aria-label": a,
            children: (0, l.jsx)("span", {
                className: ep.vW,
                children: (0, l.jsxs)(s.animated.div, {
                    id: V,
                    style: en,
                    className: r()(ep.Qs, { [ep.m2]: !H && X, [ep.p$]: !H && !X }),
                    children: [ei, es],
                }),
            }),
        }),
        eh = (0, l.jsxs)(eR, { className: E, children: [eo, eu, ec] });
    return null == C
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  eh,
                  (0, l.jsxs)("div", {
                      ref: U,
                      className: r()(ep.kL, x),
                      onMouseEnter: () => {
                          (b({ action: "HOVER_CUSTOM_STATUS" }), el(!0));
                      },
                      onMouseLeave: () => {
                          el(!1);
                      },
                      children: [eS, R?.(Q), eA],
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  eh,
                  (0, l.jsxs)("div", {
                      ref: U,
                      className: r()(ep.kL, x),
                      onFocus: () => {
                          C(!0);
                      },
                      onBlur: (e) => {
                          U.current?.contains(e.relatedTarget) || C(!1);
                      },
                      onMouseEnter: () => {
                          (b({ action: "HOVER_CUSTOM_STATUS" }), C(!0), el(!0));
                      },
                      onMouseLeave: () => {
                          (C(!1), el(!1));
                      },
                      children: [eS, R?.(Q), eA],
                  }),
              ],
          });
}
function ev(e) {
    let { emoji: n, text: t, onCloseProfile: a, editButtonRef: s, className: o, ref: u, ...c } = e,
        [d, f] = i.useState(!1);
    return (0, l.jsx)(ey, {
        ...c,
        ref: u,
        emoji: n,
        text: t,
        className: r()(ep.LL, o),
        onShowToolbar: f,
        renderToolbar: (e) => (0, l.jsx)(eE, { isVisible: d, isExpandable: e, onCloseProfile: a, editButtonRef: s }),
    });
}
function ej(e) {
    let n,
        { emoji: t, text: a, user: s, guildId: o, channelId: u, themeType: c, className: d, ...f } = e,
        { trackUserProfileAction: A } = (0, P.NJ)(),
        { interactionType: S, interactionSource: h, resetInteraction: T } = (0, N.Pq)(),
        m = h === G.dS.STATUS && S === G.AQ.REACT,
        g = h === G.dS.STATUS && S === G.AQ.REPLY,
        x = m || g,
        E = i.useRef(null),
        p = i.useRef(t),
        R = i.useRef(a);
    i.useEffect(() => {
        h === G.dS.STATUS && ((p.current !== t || R.current !== a) && T(), (p.current = t), (R.current = a));
    }, [h, T, t, a]);
    let [y, v] = i.useState(!1),
        j = i.useCallback(
            (e) => {
                (e || !x) && v(e);
            },
            [x],
        );
    return (0, l.jsx)(ef, {
        user: s,
        guildId: o,
        channelId: u,
        themeType: c,
        sourceDetails:
            ((n = null == t ? null : null != t.id ? `\`:${t.name}:\`` : C.Ay.translateSurrogatesToInlineEmoji(t.name)),
            null == a ? n : null == n ? a : `${n} ${a}`),
        sourceType: G.dS.STATUS,
        onAction: A,
        onClose: () => v(!1),
        children: () =>
            (0, l.jsx)(ey, {
                ...f,
                ref: E,
                emoji: t,
                text: a,
                themeType: c,
                className: r()(d, { [ep.zf]: x }),
                onShowToolbar: j,
                renderToolbar: (e) =>
                    (0, l.jsx)(q, {
                        targetRef: E,
                        user: s,
                        sourceType: G.dS.STATUS,
                        isVisible: y && !x,
                        isExpandable: e,
                        onAction: A,
                    }),
            }),
    });
}
let eP = function (e) {
    let { ref: n, ...t } = e,
        {
            user: a,
            guildId: r,
            channelId: s,
            onCloseProfile: u,
            previewText: c,
            previewEmoji: d,
            placeholderText: f,
            prompt: A,
            disableToolbar: S = !1,
            ...h
        } = t,
        T = (0, R.A)(a.id),
        { analyticsLocations: m } = (0, E.Ay)(x.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        g = i.useRef(null),
        p = null != c || null != d,
        C = (0, y.G)(p ? c : T?.state),
        P = (0, o.bG)([v.default], () => v.default.getId() === a.id),
        N = P && !S,
        I = j.Ay.useName(r, s, a),
        b = P ? B.intl.string(B.t.SlKMnR) : B.intl.formatToPlainString(B.t["91lTRe"], { name: I }),
        _ = !P && !a.bot && !S;
    if (p) {
        let e = null != C && "" !== C ? C : null;
        return (0, l.jsx)(E.f5, {
            value: m,
            children: (0, l.jsx)(ey, { emoji: d ?? null, text: e, statusLabel: b, placeholderText: f, ref: n, ...h }),
        });
    }
    let L = T?.emoji ?? null,
        M = null != C && "" !== C ? C : null;
    return null != L || null != M || N
        ? null == L && null == M
            ? (0, l.jsx)(E.f5, {
                  value: m,
                  children: (0, l.jsx)(eC, { onCloseProfile: u, prompt: A, ref: n, addButtonRef: g }),
              })
            : _
              ? (0, l.jsx)(E.f5, {
                    value: m,
                    children: (0, l.jsx)(ej, {
                        user: a,
                        guildId: r,
                        channelId: s,
                        emoji: L,
                        text: M,
                        statusLabel: b,
                        ...h,
                    }),
                })
              : N
                ? (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(ev, {
                          emoji: L,
                          text: M,
                          statusLabel: b,
                          onCloseProfile: u,
                          editButtonRef: g,
                          ref: n,
                          ...h,
                      }),
                  })
                : (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(ey, { emoji: L, text: M, statusLabel: b, ref: n, ...h }),
                  })
        : null;
};
