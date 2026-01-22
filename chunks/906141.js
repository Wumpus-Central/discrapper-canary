n.d(t, {
    A: () => F,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(33358),
    u = n(384231),
    d = n(207133),
    f = n(704413),
    p = n(9842),
    h = n(253932),
    b = n(734057),
    g = n(994500),
    m = n(661191),
    A = n(988012),
    y = n(141468),
    O = n(694318),
    j = n(143413),
    v = n(763754),
    x = n(467073),
    E = n(491182),
    _ = n(860227),
    C = n(756369),
    S = n(538355),
    I = n(522871),
    N = n(715628),
    T = n(752636),
    P = n(675722),
    w = n(268719),
    R = n(234957),
    D = n(888675),
    M = n(652215),
    L = n(985018),
    G = n(410132),
    k = n(119907);

function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = l.memo(function e(t) {
    var n;
    let l,
        {
            channel: i,
            message: o,
            compact: D = !1,
            className: G,
            onContextMenu: F,
            onClick: B,
            disableInteraction: K = !1,
            hasThread: W,
            treatSpam: z,
        } = t,
        Y = M.sl8.has(o.type) ? o.messageReference : void 0,
        q = (0, s.bG)([p.A], () => p.A.getMessageByReference(Y)),
        X = (0, s.bG)([b.A], () =>
            o.type === M.lAJ.THREAD_STARTER_MESSAGE && q.state === p.a.LOADED
                ? b.A.getChannel(q.message.channel_id)
                : null,
        ),
        J = h.X6.useSetting(),
        Q = h.hD.useSetting(),
        Z = h.rs.useSetting(),
        $ = h.kt.useSetting(),
        ee = (0, u.S)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
        et = (0, d.A)(null == i ? void 0 : i.id),
        { disableReactionCreates: en } = (0, x.A)(i),
        {
            content: er,
            hasSpoilerEmbeds: el,
            hasBailedAst: ei,
        } = (0, S.A)(o, {
            hideSimpleEmbedContent: Q && Z,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        ea = (0, v.Ay)(o),
        es = (0, s.bG)(
            [b.A],
            () => o.hasFlag(M.pr7.HAS_THREAD) && b.A.getChannel(m.default.castMessageIdAsChannelId(o.id)),
        ),
        eo = o.type === M.lAJ.THREAD_STARTER_MESSAGE && q.state === p.a.LOADED && null != X,
        ec = !eo && void 0 === l,
        eu = (0, I.A)({
            message: o,
            channel: i,
            enabled: ec,
        }),
        ed = (0, c.P)(o),
        ef = (0, A._f)(o.id, o.channel_id),
        ep = (0, f.A)(o),
        eh = (0, _.fF)(o);
    return eo
        ? (0, r.jsx)(
              e,
              V(U({}, t), {
                  message: q.message,
                  channel: X,
                  hasThread: !1,
              }),
          )
        : (g.A.isBlockedForMessage(o)
                ? (l = L.t["+FcYM/"])
                : g.A.isIgnoredForMessage(o)
                  ? (l = L.t["VFWjc+"])
                  : (0, O.kf)(o) && z && (l = L.t.xfkfTK),
            void 0 !== l)
          ? (0, r.jsx)(H, {
                className: G,
                compact: D,
                count: 1,
                collapsedReason: l,
            })
          : (0, r.jsx)(E.A, {
                compact: D,
                className: a()(G, {
                    [k.M1]: (0, y.ec)(o),
                    [k.XN]: K,
                    [k._A]: t.isGroupStart,
                }),
                childrenRepliedMessage: (0, R.A)(o, i, Y, q, D),
                childrenHeader: (0, T.A)(
                    V(U({}, t), {
                        author: ea,
                        guildId: i.guild_id,
                    }),
                ),
                childrenAccessories: (0, r.jsx)(C.iV, {
                    channel: i,
                    message: o,
                    hasSpoilerEmbeds: el,
                    hasBailedAst: ei,
                    compact: D,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: en,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: W,
                    inlineAttachmentMedia: J,
                    inlineEmbedMedia: Q,
                    renderEmbeds: Z,
                    gifAutoPlay: $,
                    poll: ep,
                    showListsAndHeaders: ee,
                    showMaskedLinks: ee,
                    shouldHideMediaOptions: et,
                    enabledContentHarmTypeFlags: ed,
                    ctaButtonType: ef,
                }),
                childrenExecutedCommand: (0, w.A)(o, i, D),
                childrenMessageContent: (0, N.A)(t, er),
                childrenSystemMessage: (0, P.A)(t),
                onContextMenu: F,
                onClick: B,
                hasThread: !1 !== W && null != es && o.hasFlag(M.pr7.HAS_THREAD),
                hasReply: o.type === M.lAJ.REPLY,
                isSystemMessage: (0, j.A)(o),
                messageRef: eu,
                author: ea,
                "aria-labelledby": eh,
                "aria-roledescription": L.intl.string(L.t.BAB0yK),
            });
});

function H(e) {
    let { className: t, count: n, compact: l, collapsedReason: i } = e;
    return (0, r.jsx)(E.A, {
        className: t,
        compact: l,
        role: "group",
        childrenMessageContent: (0, r.jsx)(D.A, {
            compact: l,
            className: G.L9,
            iconNode: (0, r.jsx)(o.PGe, {
                size: "md",
                color: "currentColor",
                className: G.Q6,
            }),
            children: (0, r.jsx)("div", {
                className: G.Fo,
                children: L.intl.format(i, {
                    count: n,
                }),
            }),
        }),
    });
}
