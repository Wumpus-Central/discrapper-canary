t.d(s, { A: () => V, o: () => $ });
var n = t(627968),
    a = t(64700),
    l = t(503698),
    i = t.n(l),
    r = t(989349),
    o = t.n(r),
    c = t(534890),
    m = t(638916),
    u = t(642846),
    d = t(922016),
    h = t(176781),
    x = t(834730),
    g = t(939249),
    N = t(531142),
    j = t(191023),
    C = t(812282),
    A = t(633018),
    p = t(831544),
    E = t(793574),
    I = t(688810),
    v = t(874357),
    M = t(427930),
    _ = t(387408),
    S = t(427209),
    k = t(650019),
    f = t(969632),
    L = t(9842),
    D = t(68935),
    T = t(486020),
    R = t(58703),
    O = t(403362),
    P = t(860227),
    y = t(291812),
    J = t(943220),
    b = t(943815),
    w = t(838541),
    U = t(652215),
    z = t(375708),
    G = t(334211),
    B = t(992595);
function H(e) {
    let { width: s = 12, height: t = 8, color: a = "currentColor", className: l, foreground: i } = e;
    return (0, n.jsx)("svg", {
        className: l,
        width: s,
        height: t,
        viewBox: "0 0 12 8",
        children: (0, n.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: i,
            fill: a,
        }),
    });
}
function X(e) {
    let { width: s = 18, height: t = 18, className: a, foreground: l } = e;
    return (0, n.jsx)("svg", {
        className: a,
        width: s,
        height: t,
        viewBox: "0 0 18 18",
        children: (0, n.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: l,
        }),
    });
}
function $(e, s, t, a, l, r) {
    let o,
        c,
        m,
        u,
        d = (0, _.A)(e),
        { trailingIconClass: h, leadingIconClass: x, iconSize: g } = r,
        N = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
        E = (0, D.o6)(d).length > 0,
        I = null != d.interaction,
        k = d.hasFlag(U.pr7.IS_VOICE_MESSAGE),
        L = d.isPoll(),
        T = d.type === U.lAJ.POLL_RESULT;
    return (
        (0, M.A)(e) && (u = (0, n.jsx)(S.A, { size: "custom", className: x, width: g, height: g })),
        t
            ? (o = z.intl.string(z.t.XAkOo2))
            : a
              ? (o = z.intl.string(z.t["G7p6v/"]))
              : d.type === U.lAJ.CHANNEL_PINNED_MESSAGE
                ? (o = z.intl.string(z.t.sCfDDl))
                : d.type === U.lAJ.EMOJI_ADDED
                  ? (c = (0, n.jsx)(v.HN, { message: d, rendered: s }))
                  : N
                    ? L
                        ? (c = (0, n.jsx)("div", { className: i()(G.Io, B.PT), children: d?.poll?.question?.text }))
                        : T
                          ? (o = (0, f.Il)(d))
                          : E
                            ? (o = z.intl.string(z.t.kHdYCW))
                            : I
                              ? (o = z.intl.string(z.t["E+6SSY"]))
                              : k
                                ? (o = z.intl.string(z.t.XC3A52))
                                : d.hasFlag(U.pr7.IS_COMPONENTS_V2)
                                  ? (o = z.intl.string(z.t.Xxat6S))
                                  : ((o = z.intl.string(z.t["6hGo0c"])),
                                    (m = (0, n.jsx)(j.x, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: h,
                                        width: g,
                                        height: g,
                                    })))
                    : (c = (0, n.jsx)(y.Ay, { message: d, content: s, className: l, compact: !0 })),
        E
            ? (m = (0, n.jsx)(C.s, { size: "custom", color: "currentColor", className: h, width: g, height: g }))
            : I
              ? (m = (0, n.jsx)(A.k, { size: "custom", color: "currentColor", className: h, width: g, height: g }))
              : k
                ? (m = (0, n.jsx)(p.c, {
                      size: "custom",
                      color: "currentColor",
                      className: h,
                      width: (19 / 24) * g,
                      height: g,
                  }))
                : (d.attachments.length > 0 || d.embeds.length > 0) &&
                  !T &&
                  (m = (0, n.jsx)(j.x, { size: "custom", color: "currentColor", className: h, width: g, height: g })),
        { contentPlaceholder: o, renderedContent: c, trailingIcon: m, leadingIcon: u }
    );
}
function V(e) {
    let s,
        {
            repliedAuthor: t,
            baseAuthor: l,
            baseMessage: r,
            referencedMessage: j,
            renderPopout: C,
            isReplySpineClickable: A,
            showReplySpine: p,
        } = e,
        [v, M] = a.useState(!1),
        _ = a.useMemo(() => (null != C && j.state === L.a.LOADED ? (e) => C(e, j.message) : void 0), [j, C]),
        S = a.useCallback(() => M((e) => !e), []),
        f = (function (e, s, t) {
            let {
                    referencedMessage: l,
                    channel: r,
                    compact: o,
                    isReplyAuthorBlocked: h,
                    repliedAuthor: x,
                    showAvatarPopout: g,
                    onClickAvatar: N,
                    onContextMenu: j,
                    onPopoutRequestClose: C,
                } = e,
                { analyticsLocations: A } = (0, I.Ay)(E.A.AVATAR),
                p = a.useRef(null);
            if (o || l.state !== L.a.LOADED || h)
                return t === U.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, n.jsx)("div", { className: G.Do, children: (0, n.jsx)(c.o, { size: "xs" }) })
                    : (0, n.jsx)("div", { className: G.Cz, children: (0, n.jsx)(H, { className: G.UE }) });
            if (
                l.message.type === U.lAJ.USER_JOIN ||
                l.message.type === U.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                l.message.type === U.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, n.jsx)(X, { className: G.VJ });
            if (l.message.type === U.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, n.jsx)(m.q, { size: "md", color: "currentColor", className: G.Cw });
            if (l.message.type === U.lAJ.POLL_RESULT)
                return (0, n.jsx)(u.Y, { className: G.Vs, width: w.eJ, height: w.eJ, size: "custom" });
            let v = () => {
                var e, s;
                return (
                    (e = l.message.author),
                    (s = r.guild_id),
                    (0, n.jsx)("img", {
                        alt: "",
                        src:
                            x?.guildMemberAvatar != null && null != s
                                ? (0, T.s7)({ guildId: s, userId: e.id, avatar: x.guildMemberAvatar })
                                : e.getAvatarURL(s, 16),
                        onClick: N,
                        onContextMenu: j,
                        className: i()({ [G.mf]: !0, [G.vk]: null != N }),
                        ref: p,
                    })
                );
            };
            return null != s && null != g
                ? (0, n.jsx)(I.f5, {
                      value: A,
                      children: (0, n.jsx)(d.Y, {
                          targetElementRef: p,
                          renderPopout: s,
                          shouldShow: g,
                          position: "right",
                          onRequestClose: C,
                          children: v,
                      }),
                  })
                : (0, n.jsx)(I.f5, { value: A, children: v() });
        })(e, _, r.type),
        D = (function (e, s) {
            let {
                    baseMessage: t,
                    channel: a,
                    referencedMessage: l,
                    showUsernamePopout: i,
                    onClickUsername: r,
                    onContextMenu: o,
                    onPopoutRequestClose: c,
                } = e,
                m = l?.state === L.a.LOADED ? l.message : void 0;
            if (
                null == m ||
                m.type === U.lAJ.USER_JOIN ||
                m.type === U.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                m.type === U.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                m.type === U.lAJ.GUILD_GAMING_STATS_PROMPT ||
                m.type === U.lAJ.POLL_RESULT
            )
                return null;
            let u = (0, k.A)(t.mediaMention, m.attachments);
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(J.A, {
                        message: m,
                        channel: a,
                        compact: !0,
                        withMentionPrefix: null != m && !!t.mentions.includes(m.author.id),
                        showPopout: i,
                        renderPopout: s,
                        onClick: r,
                        onContextMenu: o,
                        onPopoutRequestClose: c,
                        isRepliedMessage: !0,
                    }),
                    u?.title != null &&
                        (0, n.jsxs)("span", {
                            className: G.wl,
                            children: [
                                u.isClip && (0, n.jsx)(h.x, { size: "xs", color: "currentColor", className: G.te }),
                                (0, n.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: G.CD,
                                    children: u.title,
                                }),
                                (0, n.jsxs)(x.E, {
                                    variant: "text-sm/normal",
                                    color: "text-link",
                                    children: ["@", u.timestamp],
                                }),
                            ],
                        }),
                ],
            });
        })(e, _),
        y = j.state === L.a.LOADED ? j.message : void 0,
        B =
            null != r.mediaMention &&
            y?.attachments.some((e) => e.id === r.mediaMention?.attachment_id && null != e.title)
                ? null
                : (function (e, s, t) {
                      let {
                              content: a,
                              referencedMessage: l,
                              isReplyAuthorBlocked: r,
                              isReplyAuthorIgnored: o,
                              onClickReply: c,
                          } = e,
                          m = l.state !== L.a.DELETED ? c : void 0;
                      switch (l.state) {
                          case L.a.LOADED: {
                              let {
                                  contentPlaceholder: e,
                                  renderedContent: c,
                                  trailingIcon: u,
                                  leadingIcon: d,
                              } = $(l.message, a, r, o, G.Io, {
                                  trailingIconClass: G.$4,
                                  leadingIconClass: G.Vs,
                                  iconSize: w.eJ,
                              });
                              return (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      d,
                                      (0, n.jsx)(g.D, {
                                          className: i()(G.$y, G.vk, { [G.FQ]: s }),
                                          onClick: m,
                                          onMouseEnter: t,
                                          onMouseLeave: t,
                                          children: (0, n.jsx)(N.R, {
                                              children: c ?? (0, n.jsx)("span", { className: G.MK, children: e }),
                                          }),
                                      }),
                                      u,
                                  ],
                              });
                          }
                          case L.a.NOT_LOADED:
                              return (0, n.jsx)(g.D, {
                                  className: i()(G.$y, G.vk),
                                  onClick: m,
                                  children: (0, n.jsx)("span", {
                                      className: G.MK,
                                      children: z.intl.string(z.t["1i+hMi"]),
                                  }),
                              });
                          case L.a.DELETED:
                              return (0, n.jsx)("div", {
                                  className: G.$y,
                                  children: (0, n.jsx)("span", {
                                      className: G.MK,
                                      children: z.intl.string(z.t.mE3KJN),
                                  }),
                              });
                          default:
                              (0, O.xb)(l);
                      }
                  })(e, v, S),
        V = a.useMemo(() => (e.compact ? (0, b.A)((0, R.i$)(o()(), "LT")) : null), [e.compact]);
    null != t && null != l && (s = z.intl.formatToPlainString(z.t.RhbQ2K, { author: l?.nick, repliedAuthor: t?.nick }));
    let K = r.type === U.lAJ.CONTEXT_MENU_COMMAND;
    return (0, n.jsxs)("div", {
        id: (0, P.nS)(r),
        className: i()(G.JZ, V, K ? G.C4 : { [G.NB]: !A && p }),
        "aria-label": s,
        children: [
            A &&
                p &&
                (0, n.jsx)(g.D, {
                    tag: "div",
                    "aria-label": z.intl.string(z.t.dpjpOp),
                    className: i()(G.Uo, { [G.xe]: v }),
                    onClick: e.onClickReply,
                    onMouseEnter: S,
                    onMouseLeave: S,
                }),
            f,
            D,
            B,
        ],
    });
}
