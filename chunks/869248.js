n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(355622),
    o = n(58736),
    d = n(353428),
    c = n(380335),
    u = n(157550),
    A = n(336590),
    h = n(471271),
    _ = n(977347),
    m = n(378570),
    p = n(138298),
    g = n(761640),
    E = n(47167),
    f = n(698718),
    I = n(985018),
    C = n(305585),
    N = n(633030);
function T(e) {
    let { channel: t, baseChannelId: n } = e,
        T = (0, E.Ay)(t),
        S = (0, A.k)(),
        x = (0, A.r)(),
        v = (0, a.bG)([c.A], () => c.A.isMessageRequest(t.id)),
        b = (0, a.bG)([u.A], () => u.A.isSpam(t.id)),
        y = (0, _.D)(t.id, t.getRecipientId()),
        L = r.useCallback(() => {
            p.A.closeChannelSidebar(g.fe), v && S && (0, m.iN)(t.id), b && x && (0, m.iN)(t.id);
        }, [t.id, b, x, v, S]),
        O = r.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(I.intl.string(I.t.pIQ3h4), l.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: R } = (0, h.t)({ onAcceptSuccess: L, onError: O });
    if (null == t || !t.isDM()) return null;
    let P = [
        (0, i.jsx)(
            o.Ay.Icon,
            { icon: l.PGe, tooltip: I.intl.string(I.t.cpT0Cq), onClick: () => p.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Ay, {
                toolbar: P,
                "aria-label": I.intl.string(I.t.BIYAqa),
                children: (0, d.zF)({ channel: t, channelName: T, inSidebar: !0 }),
            }),
            b &&
                (0, i.jsxs)("div", {
                    className: N.F,
                    children: [
                        (0, i.jsx)(l.Text, { variant: "text-sm/normal", children: I.intl.string(I.t.XVOKgj) }),
                        (0, i.jsx)("div", {
                            className: N.$,
                            children: (0, i.jsx)(l.Button, {
                                size: "sm",
                                onClick: () => R(t, y),
                                text: I.intl.string(I.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: C.T,
                children: (0, i.jsx)(f.A, { channel: t, guild: null, chatInputType: s.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
