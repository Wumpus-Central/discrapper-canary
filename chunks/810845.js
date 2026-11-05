var a = n(477900),
    l = n(582128),
    e = n(855986),
    c = n(477782),
    p = n(811893),
    s = n(367513),
    r = n(401843),
    u = n(574172),
    o = n(129230),
    d = n(628983),
    A = n(806931),
    h = n(652215),
    y = n(792996);
n.d(
    i,
    {},
    {
        A: function (t, i) {
            let n = (0, e.bG)([d.A], () => d.A.getParticipant(t, i)),
                P = (0, e.bG)([d.A], () => d.A.isParticipantPoppedOut(t, i)),
                _ = l.useCallback(() => {
                    null != n &&
                        ((0, A.Ay)(n) && (0, r.A9)(n.stream, { forceMultiple: !0 }),
                        s.A.popoutParticipant(t, n.id),
                        u.eQ(t, n.id),
                        o.default.track(h.HAw.CALL_TILE_POPPED_OUT, {
                            channel_id: t,
                            tile_type: (0, A.Ay)(n) ? "stream" : "user",
                        }));
                }, [n, t]);
            return P || null == n || n.type === A.lp.ACTIVITY
                ? null
                : (0, a.jsx)(c.Dr, {
                      id: "call-tile-popout",
                      label: (0, A.Ay)(n)
                          ? y.intl.string(y.t.Cm4aDQ)
                          : null != n.streamId
                            ? y.intl.string(y.t["8Xyas9"])
                            : y.intl.string(y.t.ifpl2s),
                      action: _,
                      icon: p.WindowLaunchIcon,
                      leadingAccessory: { type: "icon", icon: p.WindowLaunchIcon },
                  });
        },
    },
);
