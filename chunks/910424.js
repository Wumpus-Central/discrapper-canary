n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
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
function S(e) {
    let { isCurrentUser: t, color: n, look: S, applicationStream: I, onAction: _ } = e,
        { activeStream: x, watchingOtherStream: E } = (0, l.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(I),
            watchingOtherStream:
                null != I &&
                d.Z.getAllActiveStreamsForChannel(I.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== I.ownerId;
                }).length > 0
        })),
        C = (0, l.e7)([m.Z], () => m.Z.getChannel(null == I ? void 0 : I.channelId)),
        [y, b] = (0, u.wq)(C),
        Z = (0, c.Aq)(),
        T = null != x && null != I && x.state !== h.jm8.ENDED && x.ownerId === I.ownerId,
        N = (e) => {
            if (null != I) null == _ || _(), s.default.selectVoiceChannel(I.channelId), !T && (0, o.iV)(I, { forceMultiple: e }), Z.dispatch(h.CkL.POPOUT_CLOSE), f.S.dispatch(h.CkL.MODAL_CLOSE), r.Z.popAll();
        };
    if (null == I) return null;
    let A = (0, u.P9)(b);
    t ? (A = g.intl.string(g.t.XvBdeX)) : T && (A = g.intl.string(g.t.JH1SJy));
    let j = {
        color: n,
        look: S
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(
                p.Z,
                {
                    disabled: t || T || !y,
                    onClick: () => N(!1),
                    ...j,
                    fullWidth: !0,
                    children: [
                        (0, i.jsx)(a.ScreenArrowIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.streamIcon
                        }),
                        A
                    ]
                },
                'play'
            ),
            E && !T
                ? (0, i.jsx)(a.Tooltip, {
                      text: g.intl.string(g.t.wCrzur),
                      children: (e) =>
                          (0, i.jsx)(p.Z, {
                              ...e,
                              onClick: () => {
                                  var t;
                                  null === (t = e.onClick) || void 0 === t || t.call(e), N(!0);
                              },
                              ...j,
                              className: v.iconButton,
                              size: v.iconButtonSize,
                              children: (0, i.jsx)(a.EyePlusIcon, {
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
