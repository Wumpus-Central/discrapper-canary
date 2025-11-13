n.d(t, { default: () => _ });
var i = n(951288);
n(647438);
var l = n(481060),
    r = n(239091),
    o = n(883385),
    a = n(108843),
    s = n(947440),
    d = n(100527),
    u = n(299206),
    c = n(819403),
    f = n(777658),
    b = n(858488),
    g = n(44652),
    Z = n(185457),
    v = n(389052),
    O = n(24311),
    p = n(158508),
    j = n(710631),
    h = n(88966),
    m = n(47091),
    P = n(991307),
    y = n(37258),
    x = n(700994),
    E = n(332031),
    S = n(981631),
    C = n(388032);
let _ = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    channelId: o,
                    showMediaItems: a = !1,
                    mediaEngineContext: d,
                    onSelect: _,
                    onInteraction: I,
                    appContext: A = S.IlC.APP,
                } = e,
                U = (0, y.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: o,
                }),
                D = (0, h.Z)(t.id, A),
                N = (0, O.Z)({ user: t }),
                w = (0, Z.Z)({
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: A,
                }),
                k = (0, b.Z)({ user: t }),
                L = (0, E.Z)(t.id),
                T = (0, x.Z)(t.id),
                M = (0, P.Z)(t.id, d),
                V = (0, j.Z)({ user: t }),
                B = (0, s.Z)(null, t),
                R = (0, f.Z)({ user: t }),
                F = (0, g.Z)({ user: t }),
                G = (0, m.Z)({ user: t }),
                H = (0, v.Z)({ user: t }),
                W = (0, p.Z)({ user: t }),
                Q = (0, u.Z)({
                    id: t.id,
                    label: C.intl.string(C.t["/AXYnE"]),
                }),
                Y = (0, c.Z)(t),
                q = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: "user-context",
                onClose: r.Zy,
                "aria-label": C.intl.string(C.t.liqwPJ),
                onSelect: _,
                onInteraction: I,
                children: [
                    !q &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: Y }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [U, D, N, w, k, L],
                                }),
                                a && (0, i.jsx)(l.kSQ, { children: T }),
                                (0, i.jsx)(l.kSQ, { children: B }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [a && M, V, R, F, G, W, H],
                                }),
                            ],
                        }),
                    (0, i.jsx)(l.kSQ, { children: Q }),
                ],
            });
        },
        { object: S.qAy.CONTEXT_MENU },
    ),
    [d.Z.CONTEXT_MENU, d.Z.USER_GENERIC_MENU],
);
