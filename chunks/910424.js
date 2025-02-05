n.d(t, { Z: () => S }), n(47120);
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(572691),
    s = n(287734),
    o = n(872810),
    c = n(40851),
    u = n(102172),
    d = n(199902),
    m = n(592125),
    p = n(585483),
    h = n(915863),
    g = n(981631),
    f = n(388032),
    v = n(951908);
function S(e) {
    let { isCurrentUser: t, color: n, look: S, applicationStream: x, onAction: I } = e,
        { activeStream: y, watchingOtherStream: T } = (0, i.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(x),
            watchingOtherStream:
                null != x &&
                d.Z.getAllActiveStreamsForChannel(x.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== x.ownerId;
                }).length > 0
        })),
        N = (0, i.e7)([m.Z], () => m.Z.getChannel(null == x ? void 0 : x.channelId)),
        [A, E] = (0, u.wq)(N),
        Z = (0, c.Aq)(),
        C = null != y && null != x && y.state !== g.jm8.ENDED && y.ownerId === x.ownerId,
        j = (e) => {
            null != x && (null == I || I(), s.default.selectVoiceChannel(x.channelId), C || (0, o.iV)(x, { forceMultiple: e }), Z.dispatch(g.CkL.POPOUT_CLOSE), p.S.dispatch(g.CkL.MODAL_CLOSE), a.Z.popAll());
        };
    if (null == x) return null;
    let P = (0, u.P9)(E);
    t ? (P = f.intl.string(f.t.XvBdeX)) : C && (P = f.intl.string(f.t.JH1SJy));
    let b = {
        color: n,
        look: S
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(
                h.Z,
                {
                    disabled: t || C || !A,
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
            T && !C
                ? (0, l.jsx)(r.ua7, {
                      text: f.intl.string(f.t.wCrzur),
                      children: (e) =>
                          (0, l.jsx)(h.Z, {
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
