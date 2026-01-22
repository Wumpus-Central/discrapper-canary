n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(355622),
    o = n(58736),
    c = n(353428),
    u = n(380335),
    d = n(157550),
    p = n(336590),
    f = n(471271),
    h = n(977347),
    A = n(378570),
    g = n(138298),
    m = n(761640),
    b = n(47167),
    _ = n(698718),
    E = n(985018),
    O = n(305585),
    y = n(633030);
function I(e) {
    let { channel: t, baseChannelId: n } = e,
        I = (0, b.Ay)(t),
        v = (0, p.k)(),
        S = (0, p.r)(),
        C = (0, l.bG)([u.A], () => u.A.isMessageRequest(t.id)),
        N = (0, l.bG)([d.A], () => d.A.isSpam(t.id)),
        T = (0, h.D)(t.id, t.getRecipientId()),
        j = i.useCallback(() => {
            g.A.closeChannelSidebar(m.fe), C && v && (0, A.iN)(t.id), N && S && (0, A.iN)(t.id);
        }, [t.id, N, S, C, v]),
        x = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(E.intl.string(E.t.pIQ3h4), a.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: P } = (0, f.t)({
            onAcceptSuccess: j,
            onError: x,
        });
    if (null == t || !t.isDM()) return null;
    let w = [
        (0, r.jsx)(
            o.Ay.Icon,
            {
                icon: a.PGe,
                tooltip: E.intl.string(E.t.cpT0Cq),
                onClick: () => g.A.closeChannelSidebar(n),
            },
            "close",
        ),
    ];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Ay, {
                toolbar: w,
                "aria-label": E.intl.string(E.t.BIYAqa),
                children: (0, c.zF)({
                    channel: t,
                    channelName: I,
                    inSidebar: !0,
                }),
            }),
            N &&
                (0, r.jsxs)("div", {
                    className: y.F,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: E.intl.string(E.t.XVOKgj),
                        }),
                        (0, r.jsx)("div", {
                            className: y.$,
                            children: (0, r.jsx)(a.Button, {
                                size: "sm",
                                onClick: () => P(t, T),
                                text: E.intl.string(E.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: O.T,
                children: (0, r.jsx)(
                    _.A,
                    {
                        channel: t,
                        guild: null,
                        chatInputType: s.oU.SIDEBAR,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
