r.d(t, {
    default: () => B,
});
var n = r(627968);
r(64700);
var i = r(397927),
    l = r(442433),
    o = r(847767),
    a = r(358367),
    c = r(155718),
    d = r(468389),
    s = r(793574),
    u = r(810845),
    A = r(854182),
    f = r(734337),
    p = r(855187),
    b = r(479335),
    g = r(343328),
    y = r(848977),
    O = r(995102),
    v = r(50268),
    E = r(222311),
    h = r(803664),
    j = r(29293),
    I = r(509302),
    S = r(497600),
    m = r(773699),
    x = r(239211),
    D = r(707378),
    w = r(486524),
    M = r(631637),
    P = r(984894),
    N = r(399476),
    _ = r(889460),
    k = r(460597),
    C = r(313998),
    R = r(198229),
    V = r(243949),
    F = r(972432),
    U = r(77544),
    L = r(571964),
    T = r(708653),
    X = r(297460),
    G = r(652215),
    H = r(985018);
let B = (0, a.A)(
    (0, o.A)(
        function (e) {
            let {
                    user: t,
                    channel: r,
                    channelSelected: o = !1,
                    showMute: a = !0,
                    showMediaItems: s = !1,
                    showChannelCallItems: G = !1,
                    showModalItems: B = !0,
                    targetIsUser: Y = !1,
                    context: Z,
                    onSelect: W,
                    onHeightUpdate: K,
                    onInteraction: $,
                    widgetType: z,
                } = e,
                q = (0, X.A)(
                    {
                        kind: "DM_USER",
                        userId: t.id,
                    },
                    z,
                ),
                J = (0, V.A)({
                    userId: t.id,
                    guildId: null,
                }),
                Q = (0, D.A)({
                    user: t,
                    context: Z,
                }),
                ee = (0, S.A)({
                    user: t,
                    channelId: r.id,
                    context: Z,
                }),
                et = (0, j.A)({
                    user: t,
                }),
                er = (0, U.A)(t.id),
                en = (0, w.A)(r.id, o),
                ei = (0, _.A)({
                    user: t,
                }),
                el = (0, d.A)(null, t),
                eo = (0, F.A)(t.id),
                ea = (0, C.g)(r.id, "OverlayDMUserContextMenu"),
                ec = (0, C.A)(t, ea),
                ed = (0, h.A)({
                    user: t,
                }),
                es = (0, I.A)({
                    user: t,
                }),
                eu = (0, k.A)({
                    user: t,
                }),
                eA = (0, L.A)({
                    user: t,
                }),
                ef = (0, R.A)(t.id),
                ep = (0, b.u)({
                    userId: t.id,
                    channelId: r.id,
                    guildId: r.getGuildId(),
                }),
                eb = (0, P.A)(t.id, r.id),
                eg = (0, x.A)({
                    user: t,
                    location: "OverlayDMUserContextMenu",
                }),
                ey = (0, N.A)({
                    user: t,
                    location: "OverlayDMUserContextMenu",
                }),
                eO = (0, O.Ay)(r),
                ev = (0, v.A)({
                    id: t.id,
                    label: H.intl.string(H.t["/AXYnE"]),
                }),
                eE = (0, v.A)({
                    id: r.id,
                    label: H.intl.string(H.t.gFHI3k),
                }),
                eh = (0, y.A)(r),
                ej = (0, f.A)(t.id),
                eI = (0, A.A)(r.id),
                eS = (0, E.A)(t),
                em = (0, p.A)(t.id),
                ex = (0, u.A)(r.id, t.id),
                eD = (0, m.A)({
                    commandType: c.kc.USER,
                    commandTargetId: t.id,
                    channel: r,
                    guildId: void 0,
                    onHeightUpdate: K,
                }),
                { toggleFavoriteItem: ew } = (0, T.As)(t.id, z),
                eM = (0, M.A)({
                    channel: r,
                }),
                eP = r.isManaged(),
                eN = t.isNonUserBot();
            return (0, n.jsxs)(i.W1t, {
                navId: "overlay-user-context",
                onClose: l.Z_,
                "aria-label": H.intl.string(H.t.liqwPJ),
                onSelect: W,
                onInteraction: $,
                children: [
                    (0, n.jsxs)(i.rXV, {
                        children: [!(eN && !(0, g.A)(r.id)) && eh, q, ew],
                    }),
                    (0, n.jsx)(i.rXV, {
                        children: !eN && eS,
                    }),
                    (0, n.jsxs)(i.rXV, {
                        children: [
                            !eN &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [B && J, Q, !eP && ec, B && ee, B && et, eA, er],
                                }),
                            en,
                        ],
                    }),
                    !eN &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(i.rXV, {
                                    children: s && eo,
                                }),
                                (0, n.jsx)(i.rXV, {
                                    children: B && el,
                                }),
                                (0, n.jsxs)(i.rXV, {
                                    children: [
                                        s && ef,
                                        B && ep,
                                        s && eb,
                                        eD,
                                        B && ei,
                                        ed,
                                        es,
                                        eu,
                                        B && ey,
                                        B && eg,
                                        s && em,
                                    ],
                                }),
                                (0, n.jsx)(i.rXV, {
                                    children: a && eO,
                                }),
                                G &&
                                    (0, n.jsxs)(i.rXV, {
                                        children: [ex, eI, ej],
                                    }),
                            ],
                        }),
                    (0, g.A)(r.id) &&
                        (0, n.jsx)(i.rXV, {
                            children: a && eO,
                        }),
                    (0, n.jsx)(i.rXV, {
                        children: eM,
                    }),
                    (0, n.jsxs)(i.rXV, {
                        children: [ev, !Y && eE],
                    }),
                ],
            });
        },
        {
            object: G.ZSU.CONTEXT_MENU,
        },
    ),
    [s.A.CONTEXT_MENU, s.A.OVERLAY, s.A.DM_USER_MENU],
);
