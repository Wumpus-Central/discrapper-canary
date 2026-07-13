t.d(s, { A: () => F, o: () => $ });
var l = t(627968),
    n = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(989349),
    o = t.n(r),
    c = t(534890),
    u = t(638916),
    h = t(642846),
    m = t(922016),
    d = t(939249),
    C = t(176781),
    x = t(834730),
    N = t(531142),
    A = t(191023),
    g = t(812282),
    p = t(633018),
    E = t(831544),
    j = t(793574),
    M = t(688810),
    _ = t(427930),
    S = t(387408),
    L = t(427209),
    I = t(650019),
    v = t(969632),
    O = t(9842),
    D = t(68935),
    P = t(486020),
    R = t(58703),
    T = t(403362),
    f = t(860227),
    y = t(438729),
    k = t(943220),
    J = t(943815),
    U = t(838541),
    w = t(652215),
    b = t(375708),
    z = t(334211),
    G = t(992595);
function V(e) {
    let { width: s = 12, height: t = 8, color: n = "currentColor", className: a, foreground: i } = e;
    return (0, l.jsx)("svg", {
        className: a,
        width: s,
        height: t,
        viewBox: "0 0 12 8",
        children: (0, l.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: i,
            fill: n,
        }),
    });
}
function B(e) {
    let { width: s = 18, height: t = 18, className: n, foreground: a } = e;
    return (0, l.jsx)("svg", {
        className: n,
        width: s,
        height: t,
        viewBox: "0 0 18 18",
        children: (0, l.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: a,
        }),
    });
}
function $(e, s, t, n, a, r) {
    let o,
        c,
        u,
        h,
        m = (0, S.A)(e),
        { trailingIconClass: d, leadingIconClass: C, iconSize: x } = r,
        N = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
        j = (0, D.o6)(m).length > 0,
        M = null != m.interaction,
        I = m.hasFlag(w.pr7.IS_VOICE_MESSAGE),
        O = m.isPoll(),
        P = m.type === w.lAJ.POLL_RESULT;
    return (
        (0, _.A)(e) && (h = (0, l.jsx)(L.A, { size: "custom", className: C, width: x, height: x })),
        t
            ? (o = b.intl.string(b.t.XAkOo2))
            : n
              ? (o = b.intl.string(b.t["G7p6v/"]))
              : m.type === w.lAJ.CHANNEL_PINNED_MESSAGE
                ? (o = b.intl.string(b.t.sCfDDl))
                : N
                  ? O
                      ? (c = (0, l.jsx)("div", { className: i()(z.Io, G.PT), children: m?.poll?.question?.text }))
                      : P
                        ? (o = (0, v.Il)(m))
                        : j
                          ? (o = b.intl.string(b.t.kHdYCW))
                          : M
                            ? (o = b.intl.string(b.t["E+6SSY"]))
                            : I
                              ? (o = b.intl.string(b.t.XC3A52))
                              : m.hasFlag(w.pr7.IS_COMPONENTS_V2)
                                ? (o = b.intl.string(b.t.Xxat6S))
                                : ((o = b.intl.string(b.t["6hGo0c"])),
                                  (u = (0, l.jsx)(A.x, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: d,
                                      width: x,
                                      height: x,
                                  })))
                  : (c = (0, l.jsx)(y.Ay, { message: m, content: s, className: a, compact: !0 })),
        j
            ? (u = (0, l.jsx)(g.s, { size: "custom", color: "currentColor", className: d, width: x, height: x }))
            : M
              ? (u = (0, l.jsx)(p.k, { size: "custom", color: "currentColor", className: d, width: x, height: x }))
              : I
                ? (u = (0, l.jsx)(E.c, {
                      size: "custom",
                      color: "currentColor",
                      className: d,
                      width: (19 / 24) * x,
                      height: x,
                  }))
                : (m.attachments.length > 0 || m.embeds.length > 0) &&
                  !P &&
                  (u = (0, l.jsx)(A.x, { size: "custom", color: "currentColor", className: d, width: x, height: x })),
        { contentPlaceholder: o, renderedContent: c, trailingIcon: u, leadingIcon: h }
    );
}
function F(e) {
    let s,
        {
            repliedAuthor: t,
            baseAuthor: a,
            baseMessage: r,
            referencedMessage: A,
            renderPopout: g,
            isReplySpineClickable: p,
            showReplySpine: E,
        } = e,
        [_, S] = n.useState(!1),
        L = n.useMemo(() => (null != g && A.state === O.a.LOADED ? (e) => g(e, A.message) : void 0), [A, g]),
        v = n.useCallback(() => S((e) => !e), []),
        D = (function (e, s, t) {
            let {
                    referencedMessage: a,
                    channel: r,
                    compact: o,
                    isReplyAuthorBlocked: d,
                    repliedAuthor: C,
                    showAvatarPopout: x,
                    onClickAvatar: N,
                    onContextMenu: A,
                    onPopoutRequestClose: g,
                } = e,
                { analyticsLocations: p } = (0, M.Ay)(j.A.AVATAR),
                E = n.useRef(null);
            if (o || a.state !== O.a.LOADED || d)
                return t === w.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, l.jsx)("div", { className: z.Do, children: (0, l.jsx)(c.o, { size: "xs" }) })
                    : (0, l.jsx)("div", { className: z.Cz, children: (0, l.jsx)(V, { className: z.UE }) });
            if (
                a.message.type === w.lAJ.USER_JOIN ||
                a.message.type === w.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                a.message.type === w.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, l.jsx)(B, { className: z.VJ });
            if (a.message.type === w.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, l.jsx)(u.q, { size: "md", color: "currentColor", className: z.Cw });
            if (a.message.type === w.lAJ.POLL_RESULT)
                return (0, l.jsx)(h.Y, { className: z.Vs, width: U.eJ, height: U.eJ, size: "custom" });
            let _ = () => {
                var e, s;
                return (
                    (e = a.message.author),
                    (s = r.guild_id),
                    (0, l.jsx)("img", {
                        alt: "",
                        src:
                            C?.guildMemberAvatar != null && null != s
                                ? (0, P.s7)({ guildId: s, userId: e.id, avatar: C.guildMemberAvatar })
                                : e.getAvatarURL(s, 16),
                        onClick: N,
                        onContextMenu: A,
                        className: i()({ [z.mf]: !0, [z.vk]: null != N }),
                        ref: E,
                    })
                );
            };
            return null != s && null != x
                ? (0, l.jsx)(M.f5, {
                      value: p,
                      children: (0, l.jsx)(m.Y, {
                          targetElementRef: E,
                          renderPopout: s,
                          shouldShow: x,
                          position: "right",
                          onRequestClose: g,
                          children: _,
                      }),
                  })
                : (0, l.jsx)(M.f5, { value: p, children: _() });
        })(e, L, r.type),
        y = (function (e, s) {
            let {
                    baseMessage: t,
                    channel: n,
                    referencedMessage: a,
                    showUsernamePopout: i,
                    onClickUsername: r,
                    onContextMenu: o,
                    onPopoutRequestClose: c,
                } = e,
                u = a?.state === O.a.LOADED ? a.message : void 0;
            return null == u ||
                u.type === w.lAJ.USER_JOIN ||
                u.type === w.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                u.type === w.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                u.type === w.lAJ.GUILD_GAMING_STATS_PROMPT ||
                u.type === w.lAJ.POLL_RESULT
                ? null
                : (0, l.jsx)(k.A, {
                      message: u,
                      channel: n,
                      compact: !0,
                      withMentionPrefix: null != u && !!t.mentions.includes(u.author.id),
                      showPopout: i,
                      renderPopout: s,
                      onClick: r,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0,
                  });
        })(e, L),
        G = (function (e, s, t) {
            let {
                    baseMessage: n,
                    content: a,
                    referencedMessage: r,
                    isReplyAuthorBlocked: o,
                    isReplyAuthorIgnored: c,
                    onClickReply: u,
                } = e,
                h = r.state !== O.a.DELETED ? u : void 0;
            switch (r.state) {
                case O.a.LOADED: {
                    let e = (0, I.A)(n.mediaMention, r.message.attachments);
                    if (null != e)
                        return (0, l.jsx)(d.D, {
                            className: i()(z.$y, z.vk, { [z.FQ]: s }),
                            onClick: h,
                            onMouseEnter: t,
                            onMouseLeave: t,
                            children: (0, l.jsxs)("span", {
                                className: z.wl,
                                children: [
                                    e.isClip && (0, l.jsx)(C.x, { size: "xs", color: "currentColor", className: z.te }),
                                    (0, l.jsx)(x.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        className: z.CD,
                                        children: e.title ?? b.intl.string(b.t.Cyxddp),
                                    }),
                                    (0, l.jsxs)(x.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: ["@", e.timestamp],
                                    }),
                                ],
                            }),
                        });
                    let {
                        contentPlaceholder: u,
                        renderedContent: m,
                        trailingIcon: A,
                        leadingIcon: g,
                    } = $(r.message, a, o, c, z.Io, {
                        trailingIconClass: z.$4,
                        leadingIconClass: z.Vs,
                        iconSize: U.eJ,
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            g,
                            (0, l.jsx)(d.D, {
                                className: i()(z.$y, z.vk, { [z.FQ]: s }),
                                onClick: h,
                                onMouseEnter: t,
                                onMouseLeave: t,
                                children: (0, l.jsx)(N.R, {
                                    children: m ?? (0, l.jsx)("span", { className: z.MK, children: u }),
                                }),
                            }),
                            A,
                        ],
                    });
                }
                case O.a.NOT_LOADED:
                    return (0, l.jsx)(d.D, {
                        className: i()(z.$y, z.vk),
                        onClick: h,
                        children: (0, l.jsx)("span", { className: z.MK, children: b.intl.string(b.t["1i+hMi"]) }),
                    });
                case O.a.DELETED:
                    return (0, l.jsx)("div", {
                        className: z.$y,
                        children: (0, l.jsx)("span", { className: z.MK, children: b.intl.string(b.t.mE3KJN) }),
                    });
                default:
                    (0, T.xb)(r);
            }
        })(e, _, v),
        F = n.useMemo(() => (e.compact ? (0, J.A)((0, R.i$)(o()(), "LT")) : null), [e.compact]);
    null != t && null != a && (s = b.intl.formatToPlainString(b.t.RhbQ2K, { author: a?.nick, repliedAuthor: t?.nick }));
    let H = r.type === w.lAJ.CONTEXT_MENU_COMMAND;
    return (0, l.jsxs)("div", {
        id: (0, f.nS)(r),
        className: i()(z.JZ, F, H ? z.C4 : { [z.NB]: !p && E }),
        "aria-label": s,
        children: [
            p &&
                E &&
                (0, l.jsx)(d.D, {
                    tag: "div",
                    "aria-label": b.intl.string(b.t.dpjpOp),
                    className: i()(z.Uo, { [z.xe]: _ }),
                    onClick: e.onClickReply,
                    onMouseEnter: v,
                    onMouseLeave: v,
                }),
            D,
            y,
            G,
        ],
    });
}
