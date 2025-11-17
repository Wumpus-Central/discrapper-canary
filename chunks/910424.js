n.d(t, { Z: () => E }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(28664),
    o = n(481060),
    s = n(572691),
    l = n(287734),
    c = n(872810),
    u = n(595816),
    d = n(102172),
    f = n(728285),
    _ = n(199902),
    p = n(592125),
    h = n(585483),
    m = n(981631),
    g = n(388032);
function E(e) {
    let { isCurrentUser: t, applicationStream: n, onAction: E } = e,
        { defaultWatchMultipleStreams: b } = (0, u.P)({ location: "WatchStreamButton" }),
        { activeStream: y, watchingOtherStream: O } = (0, i.cj)([_.Z], () => ({
            activeStream: _.Z.getActiveStreamForApplicationStream(n),
            watchingOtherStream:
                null != n &&
                _.Z.getAllActiveStreamsForChannel(n.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== n.ownerId;
                }).length > 0,
        })),
        v = (0, i.e7)([p.Z], () => p.Z.getChannel(null == n ? void 0 : n.channelId)),
        [I, T] = (0, d.wq)(v),
        S = (0, f.Aq)(),
        A = null != y && null != n && y.state !== m.jm8.ENDED && y.ownerId === n.ownerId,
        C = (e) => {
            null != n &&
                (null == E || E(),
                l.default.selectVoiceChannel(n.channelId),
                A || (0, c.iV)(n, { forceMultiple: e }),
                S.dispatch(m.CkL.POPOUT_CLOSE),
                h.S.dispatch(m.CkL.MODAL_CLOSE),
                s.Z.popAll());
        };
    if (null == n) return null;
    let N = (0, d.P9)(T);
    return (
        t ? (N = g.intl.string(g.t.XvBdeT)) : A && (N = g.intl.string(g.t["JH1SJ+"])),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Button, {
                    size: "sm",
                    variant: A ? "secondary" : "active",
                    icon: o.hGI,
                    text: N,
                    disabled: t || A || !I,
                    onClick: () => C(!1),
                    fullWidth: !0,
                }),
                !O || A || b
                    ? null
                    : (0, r.jsx)(a.u, {
                          text: g.intl.string(g.t.wCrzut),
                          children: (0, r.jsx)(o.hU, {
                              variant: "secondary",
                              size: "sm",
                              icon: o.OgY,
                              "aria-label": g.intl.string(g.t.wCrzut),
                              onClick: () => {
                                  C(!0);
                              },
                          }),
                      }),
            ],
        })
    );
}
