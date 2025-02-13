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
    f = n(585483),
    h = n(915863),
    g = n(981631),
    p = n(388032),
    v = n(394631);
function S(e) {
    let { isCurrentUser: t, color: n, look: S, applicationStream: I, onAction: x } = e,
        { activeStream: E, watchingOtherStream: T } = (0, i.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(I),
            watchingOtherStream:
                null != I &&
                d.Z.getAllActiveStreamsForChannel(I.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== I.ownerId;
                }).length > 0
        })),
        Z = (0, i.e7)([m.Z], () => m.Z.getChannel(null == I ? void 0 : I.channelId)),
        [y, N] = (0, c.wq)(Z),
        A = (0, u.Aq)(),
        C = null != E && null != I && E.state !== g.jm8.ENDED && E.ownerId === I.ownerId,
        P = (e) => {
            null != I && (null == x || x(), s.default.selectVoiceChannel(I.channelId), C || (0, o.iV)(I, { forceMultiple: e }), A.dispatch(g.CkL.POPOUT_CLOSE), f.S.dispatch(g.CkL.MODAL_CLOSE), a.Z.popAll());
        };
    if (null == I) return null;
    let j = (0, c.P9)(N);
    t ? (j = p.intl.string(p.t.XvBdeX)) : C && (j = p.intl.string(p.t.JH1SJy));
    let b = {
        color: n,
        look: S
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(
                h.Z,
                {
                    disabled: t || C || !y,
                    onClick: () => P(!1),
                    ...b,
                    fullWidth: !0,
                    children: [
                        (0, l.jsx)(r.hGI, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.streamIcon
                        }),
                        j
                    ]
                },
                'play'
            ),
            T && !C
                ? (0, l.jsx)(r.ua7, {
                      text: p.intl.string(p.t.wCrzur),
                      children: (e) =>
                          (0, l.jsx)(h.Z, {
                              ...e,
                              onClick: () => {
                                  var t;
                                  null === (t = e.onClick) || void 0 === t || t.call(e), P(!0);
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
