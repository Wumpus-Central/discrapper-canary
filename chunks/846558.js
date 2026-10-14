(n.d(t, { A: () => eu }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(607399),
    s = n(17928),
    a = n(155718),
    o = n(775602),
    u = n(861382),
    c = n(136722),
    d = n(406704),
    h = n(696451),
    m = n(576705),
    f = n(287809),
    p = n(652215),
    g = n(86379),
    x = n(503698),
    E = n.n(x),
    S = n(697744),
    y = n(939249),
    C = n(795816),
    A = n(211401),
    b = n(989837),
    I = n(500049),
    v = n(598071),
    N = n(60809),
    T = n(660183),
    j = n(215837);
let _ = function (e) {
        let { type: t, channelId: n, ref: r } = e,
            a = (0, s.bG)(
                [b.A],
                () => b.A.shouldShowPopup() && b.A.activeViewType() === t && b.A.activeChannelId() === n,
            ),
            { Component: o, events: u, play: c } = (0, S.c)(),
            d = i.useContext(v.Ay);
        i.useEffect(() => {
            function e() {
                u.onMouseEnter();
            }
            return (
                d.on("command-sentinel-typed", e),
                () => {
                    d.off("command-sentinel-typed", e);
                }
            );
        }, [d, u]);
        let h = i.useCallback(() => {
                (a ? A.k(I.Se.DISMISSED) : (A.R(I.s4.TEXT, t, void 0, n), C.LK()), c());
            }, [a, t, n, c]),
            m = (0, l.jsx)(o, { size: "refresh_sm", color: "currentColor" });
        return (0, l.jsx)("div", {
            className: E()(j.UD, N.KG),
            ref: r,
            children: (0, l.jsx)(y.D, {
                tabIndex: 0,
                className: E()(j.x6, { [j.rK]: a }),
                onClick: h,
                "aria-label": T.intl.string(T.t.erHFxI),
                "aria-expanded": a,
                "aria-haspopup": "dialog",
                focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                ...u,
                children: m,
            }),
        });
    },
    k = i.memo(function (e) {
        let { type: t, channelId: n } = e;
        return (0, l.jsx)(_, { type: t, channelId: n });
    });
var R = n(931664),
    O = n(951260),
    L = n(522602),
    w = n(158045),
    M = n(462180),
    P = n(375499),
    D = n(554146),
    U = n(43105),
    V = n(131607),
    W = n(151271),
    F = n(490035),
    B = n(49999),
    K = n(698279),
    G = n(732447);
function H(e) {
    let { targetElementRef: t, type: n, channelId: r } = e,
        s = (0, F.H)("DefaultEmojisPopover"),
        a = (0, W.RQ)((e) => null != e.activeView),
        [o, u] = (0, V.kn)(s && !a ? [D.M.DEFAULT_EMOJIS_POPOVER] : []),
        c = o === D.M.DEFAULT_EMOJIS_POPOVER,
        d = i.useCallback(() => {
            (u(B.i.TAKE_ACTION), (0, W.bf)(K.kx.EMOJI, n, r));
        }, [u, n, r]),
        h = i.useCallback(() => {
            u(B.i.USER_DISMISS);
        }, [u]);
    return c
        ? (0, l.jsx)(U.A, {
              targetElementRef: t,
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/5981958b8cc17387911929588ea3d63ce0b2d5469feb0d0b304482312f877a82.svg",
              },
              badge: { type: "beta", variant: "expressive" },
              position: "top",
              alignmentStrategy: "trigger-center",
              caretConfig: { align: "end" },
              title: T.intl.string(G.default["6mcVBm"]),
              body: T.intl.string(G.default.RhpNnh),
              gradientColor: "nitro-pink",
              onRequestClose: h,
              actions: [{ text: T.intl.string(G.default.HtUpwy), onClick: d }],
          })
        : null;
}
var z = n(355622),
    q = n(495088);
let $ = i.memo(function (e) {
    let { disabled: t, type: n, channelId: r, ref: s } = e,
        [a, o, u, c] = (0, W.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], M.x),
        d = n === z.oU.NORMAL,
        h = i.useRef(null),
        m = i.useCallback(() => {
            (0, W.r$)(K.kx.EMOJI, n, r);
        }, [n, r]);
    return t
        ? null
        : (0, l.jsxs)("div", {
              className: E()(K.VQ, q.UD),
              ref: s,
              children: [
                  (0, l.jsx)(P.A, {
                      ref: h,
                      className: q.Z8,
                      onClick: m,
                      active: a === K.kx.EMOJI && o === n && c === r,
                      "aria-controls": u,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: d,
                  }),
                  d && (0, l.jsx)(H, { targetElementRef: h, type: n, channelId: r }),
              ],
          });
});
var Q = n(530134),
    Z = n(3203),
    X = n(866665),
    J = n(617617),
    Y = n(234320),
    ee = n(767089);
let et = i.memo(function (e) {
    let { disabled: t, type: n, channel: r, ref: a } = e,
        [o, u] = i.useState(!1),
        c = (0, s.bG)(
            [J.A],
            () => o && Object.values(J.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
        ),
        [d, h, m, f] = (0, W.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], M.x),
        g = i.useRef(0),
        x = i.useCallback(() => {
            (u(!0),
                clearTimeout(g.current),
                (g.current = setTimeout(() => {
                    (u(!1), (g.current = 0));
                }, 2e3)));
        }, []);
    (0, Y.Vo)({ event: p.jej.FAVORITE_GIF, handler: x });
    let S = i.useCallback(() => {
            (0, W.r$)(K.kx.GIF, n, r.id);
        }, [n, r.id]),
        { Component: y, events: C, play: A } = (0, Z.V)();
    if (t) return null;
    let b = d === K.kx.GIF && h === n && f === r.id;
    return (0, l.jsx)(X.m, {
        text: T.intl.string(c ? T.t.mE2e8A : T.t.nffuyb),
        shouldShow: c,
        forceOpen: c,
        children: (0, l.jsx)("div", {
            ref: a,
            className: E()(K.VQ, q.UD),
            children: (0, l.jsx)(ee.A, {
                className: q.x6,
                onMouseEnter: C.onMouseEnter,
                onMouseLeave: C.onMouseLeave,
                onClick: () => {
                    (S(), A());
                },
                isActive: b,
                pulse: o,
                "aria-label": T.intl.string(T.t.PtVpk2),
                "aria-expanded": b,
                "aria-haspopup": "dialog",
                "aria-controls": m,
                children: (0, l.jsx)(y, { size: "refresh_sm", color: "currentColor" }),
            }),
        }),
    });
});
var en = n(489248),
    el = n(559647),
    ei = n(757261);
let er = i.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: ei.me }),
            (0, l.jsx)("div", {
                className: ei.kL,
                children: (0, l.jsx)("div", {
                    className: ei.UD,
                    children: (0, l.jsx)(ee.A, {
                        className: ei.x6,
                        childClassName: E()(ei.Z4, { [ei.r9]: n, [ei.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": T.intl.string(T.t.oeb1vg),
                        children: (0, l.jsx)(el.SendMessageIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: ei.AO,
                        }),
                    }),
                }),
            }),
        ],
    });
});
var es = n(744682);
let ea = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    eo = i.memo(function (e) {
        let t,
            r,
            s,
            a,
            o,
            { disabled: u, type: c, channel: d, ref: h } = e,
            [m, f, p, g] = (0, W.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], M.x),
            x = m === K.kx.STICKER && g === c && p === d.id,
            S = i.useCallback(() => {
                (0, W.r$)(K.kx.STICKER, c, d.id);
            }, [c, d.id]),
            {
                Component: y,
                events: C,
                play: A,
            } = ((t = i.useRef(null)),
            (r = i.useCallback(() => {
                null != t.current && t.current.play("click");
            }, [])),
            (s = i.useCallback(() => {
                null != t.current && t.current.play("hover");
            }, [])),
            (a = i.useCallback(() => {
                null != t.current && t.current.stopIfPlaying("hover");
            }, [])),
            (o = i.useCallback(
                (e) =>
                    (0, l.jsx)(es.P, {
                        ...e,
                        src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                        ref: t,
                        markers: ea,
                    }),
                [],
            )),
            {
                events: { onMouseEnter: s, onMouseLeave: a },
                play: r,
                getDuration: i.useCallback(() => t.current?.getDuration(), []),
                getCurrentFrame: i.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
                Component: o,
            });
        return u
            ? null
            : (0, l.jsx)("div", {
                  className: E()(K.VQ, q.UD),
                  ref: h,
                  children: (0, l.jsx)(ee.A, {
                      className: E()(q.x6, q.KE),
                      ...C,
                      onClick: () => {
                          (S(), A());
                      },
                      isActive: x,
                      "aria-label": T.intl.string(T.t.rZpidU),
                      "aria-expanded": x,
                      "aria-haspopup": "dialog",
                      "aria-controls": f,
                      sparkle: !1,
                      children: (0, l.jsx)(y, { size: "refresh_sm", color: "currentColor" }),
                  }),
              });
    }),
    eu = i.memo(function (e) {
        var t, n, i;
        let {
                type: x,
                disabled: E,
                channel: S,
                handleSubmit: y,
                isEmpty: C,
                showAllButtons: A,
                expressionButtonsHidden: b,
            } = e,
            I = (0, O.n)("ChannelTextAreaButtons"),
            v = (0, s.cf)([o.Ay], () => ({
                isSubmitButtonEnabled: o.Ay.isSubmitButtonEnabled,
                isAppsButtonEnabled: o.Ay.isAppsButtonEnabled,
                isEmojiButtonEnabled: o.Ay.isEmojiButtonEnabled,
                isGifButtonEnabled: o.Ay.isGifButtonEnabled,
                isStickerButtonEnabled: o.Ay.isStickerButtonEnabled,
            })),
            N = v.isSubmitButtonEnabled,
            T = !I || v.isAppsButtonEnabled,
            j = !I || v.isEmojiButtonEnabled,
            _ = !I || v.isGifButtonEnabled,
            M = !I || v.isStickerButtonEnabled,
            P =
                ((t = S.id),
                (n = x),
                (i = C),
                (0, s.bG)([R.A, L.A], () => {
                    let e = R.A.getStickerPreview(t, n.drafts.type),
                        l = null != e && e.length > 0;
                    return 0 === L.A.getUploads(t, n.drafts.type).length && i && !l;
                })),
            { activeCommand: D, activeCommandOption: U } = (0, s.cf)([u.A], () => ({
                activeCommand: u.A.getActiveCommand(S.id),
                activeCommandOption: u.A.getActiveOption(S.id),
            })),
            V = (0, g.dw)(),
            W = [],
            F = !S.isDM() || void 0 === S.recipients || S.recipients.length > 1,
            B = (0, s.bG)([f.default], () => (F ? null : f.default.getUser(S.recipients[0]))),
            K = (function (e) {
                let { channel: t, chatInputType: n } = e,
                    l = n.commands?.enabled ?? !1,
                    i = (function (e) {
                        let t = e.getGuildId(),
                            n = (0, s.bG)([h.Ay, f.default], () => {
                                let e = f.default.getCurrentUser();
                                return (null != t && null != e ? h.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                            }),
                            { messagesDisabled: l } = (0, s.cf)(
                                [m.A],
                                () => {
                                    let t = e.isPrivate(),
                                        l = m.A.computePermissions(e),
                                        i = c.zy(l, p.xBc.SEND_MESSAGES),
                                        r = (0, d.UJ)(e);
                                    return { messagesDisabled: n || (!t && !i) || r };
                                },
                                [e, n],
                            );
                        return !l;
                    })(t),
                    { activeCommand: r } = (0, s.cf)([u.A], () => ({
                        activeCommand: l ? u.A.getActiveCommand(t.id) : null,
                    }));
                return l && i && null == r;
            })({ channel: S, chatInputType: x }),
            G = x.submit?.button != null && (x.submit?.ignorePreference || N),
            H = null == D || (null != U && U.type !== a.n4.ATTACHMENT);
        return (!r.Fr &&
            (x.gifts?.button != null &&
                null == D &&
                !V &&
                (null == B || w.Ay.isPremiumEligible(B)) &&
                W.push((0, l.jsx)(en.A, { disabled: E, channel: S }, "gift")),
            x.gifs?.button != null &&
                null == D &&
                A &&
                _ &&
                !b &&
                W.push((0, l.jsx)(et, { disabled: E, type: x, channel: S }, "gif")),
            x.stickers?.button != null &&
                null == D &&
                A &&
                M &&
                !b &&
                W.push((0, l.jsx)(eo, { disabled: E, type: x, channel: S }, "sticker"))),
        x.emojis?.button != null &&
            !b &&
            H &&
            (A || b
                ? j && W.push((0, l.jsx)($, { disabled: E, type: x, channelId: S.id }, "emoji"))
                : W.push((0, l.jsx)(Q.A, { disabled: E, type: x, channel: S }, "expression"))),
        K && T && W.push((0, l.jsx)(k, { channelId: S.id, type: x }, "appLauncher")),
        G && W.push((0, l.jsx)(er, { onClick: y, disabled: E || P }, "submit")),
        0 === W.length)
            ? null
            : (0, l.jsx)("div", { className: q.Uo, children: W });
    });
