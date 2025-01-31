n.d(t, { Z: () => _ }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(572691),
    s = n(287734),
    o = n(872810),
    c = n(40851),
    u = n(102172),
    d = n(199902),
    m = n(592125),
    f = n(585483),
    p = n(915863),
    h = n(981631),
    g = n(388032),
    v = n(951908);
function _(e) {
    let { isCurrentUser: t, color: n, look: _, applicationStream: S, onAction: I } = e,
        { activeStream: x, watchingOtherStream: E } = (0, l.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(S),
            watchingOtherStream:
                null != S &&
                d.Z.getAllActiveStreamsForChannel(S.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== S.ownerId;
                }).length > 0
        })),
        C = (0, l.e7)([m.Z], () => m.Z.getChannel(null == S ? void 0 : S.channelId)),
        [Z, y] = (0, u.wq)(C),
        b = (0, c.Aq)(),
        N = null != x && null != S && x.state !== h.jm8.ENDED && x.ownerId === S.ownerId,
        T = (e) => {
            null != S && (null == I || I(), s.default.selectVoiceChannel(S.channelId), N || (0, o.iV)(S, { forceMultiple: e }), b.dispatch(h.CkL.POPOUT_CLOSE), f.S.dispatch(h.CkL.MODAL_CLOSE), r.Z.popAll());
        };
    if (null == S) return null;
    let A = (0, u.P9)(y);
    t ? (A = g.intl.string(g.t.XvBdeX)) : N && (A = g.intl.string(g.t.JH1SJy));
    let w = {
        color: n,
        look: _
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(
                p.Z,
                {
                    disabled: t || N || !Z,
                    onClick: () => T(!1),
                    ...w,
                    fullWidth: !0,
                    children: [
                        (0, i.jsx)(a.hGI, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.streamIcon
                        }),
                        A
                    ]
                },
                'play'
            ),
            E && !N
                ? (0, i.jsx)(a.ua7, {
                      text: g.intl.string(g.t.wCrzur),
                      children: (e) =>
                          (0, i.jsx)(p.Z, {
                              ...e,
                              onClick: () => {
                                  var t;
                                  null === (t = e.onClick) || void 0 === t || t.call(e), T(!0);
                              },
                              ...w,
                              className: v.iconButton,
                              size: v.iconButtonSize,
                              children: (0, i.jsx)(a.OgY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.iconSize
                              })
                          })
                  })
                : null
        ]
    });
}
