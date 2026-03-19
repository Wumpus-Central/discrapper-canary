"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(33358),
    d = n(384231),
    u = n(207133),
    h = n(704413),
    A = n(9842),
    m = n(253932),
    g = n(734057),
    p = n(994500),
    _ = n(661191),
    f = n(988012),
    x = n(141468),
    C = n(694318),
    E = n(143413),
    I = n(763754),
    N = n(467073),
    b = n(491182),
    S = n(860227),
    T = n(756369),
    v = n(538355),
    y = n(522871),
    j = n(715628),
    R = n(752636),
    O = n(675722),
    L = n(268719),
    M = n(234957),
    D = n(888675),
    G = n(652215),
    U = n(985018),
    P = n(785186),
    w = n(50397);
let k = s.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: o = !1,
            className: D,
            onContextMenu: P,
            onClick: k,
            disableInteraction: B = !1,
            hasThread: H,
            treatSpam: F,
        } = t,
        K = G.sl8.has(l.type) ? l.messageReference : void 0,
        W = (0, r.bG)([A.A], () => A.A.getMessageByReference(K)),
        Y = (0, r.bG)([g.A], () =>
            l.type === G.lAJ.THREAD_STARTER_MESSAGE && W.state === A.a.LOADED
                ? g.A.getChannel(W.message.channel_id)
                : null,
        ),
        z = m.X6.useSetting(),
        q = m.hD.useSetting(),
        X = m.rs.useSetting(),
        J = m.kt.useSetting(),
        Q = (0, d.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        $ = (0, u.A)(s?.id),
        { disableReactionCreates: Z } = (0, N.A)(s),
        {
            content: ee,
            hasSpoilerEmbeds: et,
            hasBailedAst: en,
        } = (0, v.A)(l, {
            hideSimpleEmbedContent: q && X,
            allowList: Q,
            allowHeading: Q,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        ei = (0, I.Ay)(l),
        es = (0, r.bG)(
            [g.A],
            () => l.hasFlag(G.pr7.HAS_THREAD) && g.A.getChannel(_.default.castMessageIdAsChannelId(l.id)),
        ),
        el = l.type === G.lAJ.THREAD_STARTER_MESSAGE && W.state === A.a.LOADED && null != Y,
        ea = !el && void 0 === n,
        er = (0, y.A)({ message: l, channel: s, enabled: ea }),
        eo = (0, c.P)(l),
        ec = (0, f._f)(l.id, l.channel_id),
        ed = (0, h.A)(l),
        eu = (0, S.fF)(l);
    return el
        ? (0, i.jsx)(e, { ...t, message: W.message, channel: Y, hasThread: !1 })
        : (p.A.isBlockedForMessage(l)
                ? (n = U.t["+FcYM/"])
                : p.A.isIgnoredForMessage(l)
                  ? (n = U.t["VFWjc+"])
                  : (0, C.kf)(l) && F && (n = U.t.xfkfTK),
            void 0 !== n)
          ? (0, i.jsx)(V, { className: D, compact: o, count: 1, collapsedReason: n })
          : (0, i.jsx)(b.A, {
                compact: o,
                className: a()(D, { [w.M1]: (0, x.ec)(l), [w.XN]: B, [w._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, M.A)(l, s, K, W, o),
                childrenHeader: (0, R.A)({ ...t, author: ei, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(T.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: et,
                    hasBailedAst: en,
                    compact: o,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: Z,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: H,
                    inlineAttachmentMedia: z,
                    inlineEmbedMedia: q,
                    renderEmbeds: X,
                    gifAutoPlay: J,
                    poll: ed,
                    showListsAndHeaders: Q,
                    showMaskedLinks: Q,
                    shouldHideMediaOptions: $,
                    enabledContentHarmTypeFlags: eo,
                    ctaButtonType: ec,
                }),
                childrenExecutedCommand: (0, L.A)(l, s, o),
                childrenMessageContent: (0, j.A)(t, ee),
                childrenSystemMessage: (0, O.A)(t),
                onContextMenu: P,
                onClick: k,
                hasThread: !1 !== H && null != es && l.hasFlag(G.pr7.HAS_THREAD),
                hasReply: l.type === G.lAJ.REPLY,
                isSystemMessage: (0, E.A)(l),
                messageRef: er,
                author: ei,
                "aria-labelledby": eu,
                "aria-roledescription": U.intl.string(U.t.BAB0yK),
            });
});
function V(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, i.jsx)(b.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(D.A, {
            compact: s,
            className: P.L9,
            iconNode: (0, i.jsx)(o.PGe, { size: "md", color: "currentColor", className: P.Q6 }),
            children: (0, i.jsx)("div", { className: P.Fo, children: U.intl.format(l, { count: n }) }),
        }),
    });
}
