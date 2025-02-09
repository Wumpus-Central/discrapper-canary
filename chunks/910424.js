n.d(t, { Z: () => S }), n(47120);
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(572691),
    s = n(287734),
    o = n(872810),
    u = n(40851),
    c = n(102172),
    d = n(199902),
    m = n(592125),
    h = n(585483),
    g = n(915863),
    f = n(981631),
    p = n(388032),
    v = n(394631);
function S(e) {
    let { isCurrentUser: t, color: n, look: S, applicationStream: I, onAction: x } = e,
        { activeStream: T, watchingOtherStream: Z } = (0, i.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(I),
            watchingOtherStream:
                null != I &&
                d.Z.getAllActiveStreamsForChannel(I.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== I.ownerId;
                }).length > 0
        })),
        y = (0, i.e7)([m.Z], () => m.Z.getChannel(null == I ? void 0 : I.channelId)),
        [N, E] = (0, c.wq)(y),
        C = (0, u.Aq)(),
        A = null != T && null != I && T.state !== f.jm8.ENDED && T.ownerId === I.ownerId,
        j = (e) => {
            null != I && (null == x || x(), s.default.selectVoiceChannel(I.channelId), A || (0, o.iV)(I, { forceMultiple: e }), C.dispatch(f.CkL.POPOUT_CLOSE), h.S.dispatch(f.CkL.MODAL_CLOSE), a.Z.popAll());
        };
    if (null == I) return null;
    let P = (0, c.P9)(E);
    t ? (P = p.intl.string(p.t.XvBdeX)) : A && (P = p.intl.string(p.t.JH1SJy));
    let b = {
        color: n,
        look: S
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(
                g.Z,
                {
                    disabled: t || A || !N,
                    onClick: () => j(!1),
                    ...b,
                    fullWidth: !0,
                    children: [
                        (0, l.jsx)(r.hGI, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.streamIcon
                        }),
                        P
                    ]
                },
                'play'
            ),
            Z && !A
                ? (0, l.jsx)(r.ua7, {
                      text: p.intl.string(p.t.wCrzur),
                      children: (e) =>
                          (0, l.jsx)(g.Z, {
                              ...e,
                              onClick: () => {
                                  var t;
                                  null === (t = e.onClick) || void 0 === t || t.call(e), j(!0);
                              },
                              ...b,
                              className: v.iconButton,
                              size: v.iconButtonSize,
                              children: (0, l.jsx)(r.OgY, {
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
