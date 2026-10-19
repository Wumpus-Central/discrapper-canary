(n.d(t, { A: () => em }), n(321073));
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
    A = n(795816),
    C = n(211401),
    b = n(989837),
    I = n(500049),
    v = n(598071),
    N = n(60809),
    T = n(105292),
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
                (a ? C.k(I.Se.DISMISSED) : (C.R(I.s4.TEXT, t, void 0, n), A.LK()), c());
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
    w = n(951260),
    O = n(87207),
    M = n(625494),
    L = n(709372),
    P = n(264391),
    D = n(522602),
    U = n(158045),
    V = n(462180),
    W = n(375499),
    F = n(554146),
    B = n(43105),
    K = n(131607),
    G = n(151271),
    H = n(490035),
    z = n(49999),
    q = n(698279),
    $ = n(938213);
function Q(e) {
    let { targetElementRef: t, type: n, channelId: r } = e,
        s = (0, H.H)("DefaultEmojisPopover"),
        a = (0, G.RQ)((e) => null != e.activeView),
        [o, u] = (0, K.kn)(s && !a ? [F.M.DEFAULT_EMOJIS_POPOVER] : []),
        c = o === F.M.DEFAULT_EMOJIS_POPOVER,
        d = i.useCallback(() => {
            (u(z.i.TAKE_ACTION), (0, G.bf)(q.kx.EMOJI, n, r));
        }, [u, n, r]),
        h = i.useCallback(() => {
            u(z.i.USER_DISMISS);
        }, [u]);
    return c
        ? (0, l.jsx)(B.A, {
              targetElementRef: t,
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/5981958b8cc17387911929588ea3d63ce0b2d5469feb0d0b304482312f877a82.svg",
              },
              badge: { type: "beta", variant: "expressive" },
              position: "top",
              alignmentStrategy: "trigger-center",
              caretConfig: { align: "end" },
              title: T.intl.string($.default["6mcVBm"]),
              body: T.intl.string($.default.RhpNnh),
              gradientColor: "nitro-pink",
              onRequestClose: h,
              actions: [{ text: T.intl.string($.default.HtUpwy), onClick: d }],
          })
        : null;
}
var Z = n(355622),
    X = n(495088);
let J = i.memo(function (e) {
    let { disabled: t, type: n, channelId: r, ref: s } = e,
        [a, o, u, c] = (0, G.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], V.x),
        d = n === Z.oU.NORMAL,
        h = i.useRef(null),
        m = i.useCallback(() => {
            (0, G.r$)(q.kx.EMOJI, n, r);
        }, [n, r]);
    return t
        ? null
        : (0, l.jsxs)("div", {
              className: E()(q.VQ, X.UD),
              ref: s,
              children: [
                  (0, l.jsx)(W.A, {
                      ref: h,
                      className: X.Z8,
                      onClick: m,
                      active: a === q.kx.EMOJI && o === n && c === r,
                      "aria-controls": u,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: d,
                  }),
                  d && (0, l.jsx)(Q, { targetElementRef: h, type: n, channelId: r }),
              ],
          });
});
var Y = n(530134),
    ee = n(3203),
    et = n(866665),
    en = n(617617),
    el = n(234320),
    ei = n(767089);
let er = i.memo(function (e) {
    let { disabled: t, type: n, channel: r, ref: a } = e,
        [o, u] = i.useState(!1),
        c = (0, s.bG)(
            [en.A],
            () => o && Object.values(en.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
        ),
        [d, h, m, f] = (0, G.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], V.x),
        g = i.useRef(0),
        x = i.useCallback(() => {
            (u(!0),
                clearTimeout(g.current),
                (g.current = setTimeout(() => {
                    (u(!1), (g.current = 0));
                }, 2e3)));
        }, []);
    (0, el.Vo)({ event: p.jej.FAVORITE_GIF, handler: x });
    let S = i.useCallback(() => {
            (0, G.r$)(q.kx.GIF, n, r.id);
        }, [n, r.id]),
        { Component: y, events: A, play: C } = (0, ee.V)();
    if (t) return null;
    let b = d === q.kx.GIF && h === n && f === r.id;
    return (0, l.jsx)(et.m, {
        text: T.intl.string(c ? T.t.mE2e8A : T.t.nffuyb),
        shouldShow: c,
        forceOpen: c,
        children: (0, l.jsx)("div", {
            ref: a,
            className: E()(q.VQ, X.UD),
            children: (0, l.jsx)(ei.A, {
                className: X.x6,
                onMouseEnter: A.onMouseEnter,
                onMouseLeave: A.onMouseLeave,
                onClick: () => {
                    (S(), C());
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
var es = n(489248),
    ea = n(559647),
    eo = n(757261);
let eu = i.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: eo.me }),
            (0, l.jsx)("div", {
                className: eo.kL,
                children: (0, l.jsx)("div", {
                    className: eo.UD,
                    children: (0, l.jsx)(ei.A, {
                        className: eo.x6,
                        childClassName: E()(eo.Z4, { [eo.r9]: n, [eo.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": T.intl.string(T.t.oeb1vg),
                        children: (0, l.jsx)(ea.SendMessageIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: eo.AO,
                        }),
                    }),
                }),
            }),
        ],
    });
});
var ec = n(744682);
let ed = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    eh = i.memo(function (e) {
        let t,
            r,
            s,
            a,
            o,
            { disabled: u, type: c, channel: d, ref: h } = e,
            [m, f, p, g] = (0, G.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], V.x),
            x = m === q.kx.STICKER && g === c && p === d.id,
            S = i.useCallback(() => {
                (0, G.r$)(q.kx.STICKER, c, d.id);
            }, [c, d.id]),
            {
                Component: y,
                events: A,
                play: C,
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
                    (0, l.jsx)(ec.P, {
                        ...e,
                        src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                        ref: t,
                        markers: ed,
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
                  className: E()(q.VQ, X.UD),
                  ref: h,
                  children: (0, l.jsx)(ei.A, {
                      className: E()(X.x6, X.KE),
                      ...A,
                      onClick: () => {
                          (S(), C());
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
    em = i.memo(function (e) {
        var t, n, x, E;
        let S,
            {
                type: y,
                disabled: A,
                channel: C,
                handleSubmit: b,
                isEmpty: I,
                showAllButtons: v,
                expressionButtonsHidden: N,
            } = e,
            T = (0, w.n)("ChannelTextAreaButtons"),
            j = (0, s.cf)([o.Ay], () => ({
                isSubmitButtonEnabled: o.Ay.isSubmitButtonEnabled,
                isAppsButtonEnabled: o.Ay.isAppsButtonEnabled,
                isEmojiButtonEnabled: o.Ay.isEmojiButtonEnabled,
                isGifButtonEnabled: o.Ay.isGifButtonEnabled,
                isStickerButtonEnabled: o.Ay.isStickerButtonEnabled,
            })),
            _ = j.isSubmitButtonEnabled,
            V = !T || j.isAppsButtonEnabled,
            W = !T || j.isEmojiButtonEnabled,
            F = !T || j.isGifButtonEnabled,
            B = !T || j.isStickerButtonEnabled,
            K =
                ((n = C.id),
                (x = y),
                (E = I),
                (0, s.bG)([R.A, D.A], () => {
                    let e = R.A.getStickerPreview(n, x.drafts.type),
                        t = null != e && e.length > 0;
                    return 0 === D.A.getUploads(n, x.drafts.type).length && E && !t;
                })),
            { activeCommand: G, activeCommandOption: H } = (0, s.cf)([u.A], () => ({
                activeCommand: u.A.getActiveCommand(C.id),
                activeCommandOption: u.A.getActiveOption(C.id),
            })),
            z = (0, g.dw)(),
            q = [],
            $ = !C.isDM() || void 0 === C.recipients || C.recipients.length > 1,
            Q = (0, s.bG)([f.default], () => ($ ? null : f.default.getUser(C.recipients[0]))),
            Z = (function (e) {
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
            })({ channel: C, chatInputType: y }),
            ee = y.submit?.button != null && (y.submit?.ignorePreference || _),
            et = (0, O.A)(C, y);
        ((t = C.id),
            (S = (0, L.wX)()),
            i.useEffect(() => {
                if (et && !S)
                    return (
                        M._.subscribe(p.jej.RECORD_VOICE_MESSAGE, e),
                        () => {
                            M._.unsubscribe(p.jej.RECORD_VOICE_MESSAGE, e);
                        }
                    );
                function e() {
                    (0, P.K3)(t);
                }
            }, [t, et, S]));
        let en = null == G || (null != H && H.type !== a.n4.ATTACHMENT);
        return (!r.Fr &&
            (y.gifts?.button != null &&
                null == G &&
                !z &&
                (null == Q || U.Ay.isPremiumEligible(Q)) &&
                q.push((0, l.jsx)(es.A, { disabled: A, channel: C }, "gift")),
            y.gifs?.button != null &&
                null == G &&
                v &&
                F &&
                !N &&
                q.push((0, l.jsx)(er, { disabled: A, type: y, channel: C }, "gif")),
            y.stickers?.button != null &&
                null == G &&
                v &&
                B &&
                !N &&
                q.push((0, l.jsx)(eh, { disabled: A, type: y, channel: C }, "sticker"))),
        y.emojis?.button != null &&
            !N &&
            en &&
            (v || N
                ? W && q.push((0, l.jsx)(J, { disabled: A, type: y, channelId: C.id }, "emoji"))
                : q.push((0, l.jsx)(Y.A, { disabled: A, type: y, channel: C }, "expression"))),
        Z && V && q.push((0, l.jsx)(k, { channelId: C.id, type: y }, "appLauncher")),
        ee && q.push((0, l.jsx)(eu, { onClick: b, disabled: A || K }, "submit")),
        0 === q.length)
            ? null
            : (0, l.jsx)("div", { className: X.Uo, children: q });
    });
