n.d(t, { A: () => R });
var s = n(627968),
    l = n(64700),
    a = n(311907),
    i = n(691540),
    r = n(857250),
    c = n(97483),
    d = n(789645),
    o = n(834730),
    u = n(821609),
    A = n(355622),
    h = n(58736),
    m = n(353428),
    g = n(380335),
    x = n(157550),
    S = n(336590),
    E = n(471271),
    f = n(977347),
    _ = n(378570),
    b = n(138298),
    j = n(761640),
    p = n(47167),
    v = n(698718),
    C = n(985018),
    I = n(906462),
    N = n(669747);
function R(e) {
    let { channel: t, baseChannelId: n } = e,
        R = (0, p.Ay)(t),
        M = (0, S.k)(),
        k = (0, S.r)(),
        y = (0, a.bG)([g.A], () => g.A.isMessageRequest(t.id)),
        G = (0, a.bG)([x.A], () => x.A.isSpam(t.id)),
        T = (0, f.D)(t.id, t.getRecipientId()),
        P = l.useCallback(() => {
            b.A.closeChannelSidebar(j.fe), y && M && (0, _.iN)(t.id), G && k && (0, _.iN)(t.id);
        }, [t.id, G, k, y, M]),
        L = l.useCallback(() => {
            (0, i.P0)((0, r.o)(C.intl.string(C.t.pIQ3h4), c.Ck.FAILURE));
        }, []),
        { markAsNotSpam: z } = (0, E.t)({ onAcceptSuccess: P, onError: L });
    if (null == t || !t.isDM()) return null;
    let w = [
        (0, s.jsx)(
            h.Ay.Icon,
            { icon: d.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: () => b.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(h.Ay, {
                toolbar: w,
                "aria-label": C.intl.string(C.t.BIYAqa),
                children: (0, m.zF)({ channel: t, channelName: R, inSidebar: !0 }),
            }),
            G &&
                (0, s.jsxs)("div", {
                    className: N.F,
                    children: [
                        (0, s.jsx)(o.E, { variant: "text-sm/normal", children: C.intl.string(C.t.XVOKgj) }),
                        (0, s.jsx)("div", {
                            className: N.$,
                            children: (0, s.jsx)(u.$, {
                                size: "sm",
                                onClick: () => z(t, T),
                                text: C.intl.string(C.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, s.jsx)("div", {
                className: I.T,
                children: (0, s.jsx)(v.A, { channel: t, guild: null, chatInputType: A.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
