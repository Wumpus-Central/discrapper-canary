var a = l(477900),
    e = l(582128),
    n = l(855986),
    p = l(477782),
    s = l(811893),
    c = l(367513),
    r = l(401843),
    u = l(574172),
    o = l(129230),
    A = l(628983),
    d = l(806931),
    y = l(652215),
    P = l(792996);
l.d(
    i,
    {},
    {
        A: function (t, i) {
            let l = (0, n.bG)([A.A], () => A.A.getParticipant(t, i)),
                _ = (0, n.bG)([A.A], () => A.A.isParticipantPoppedOut(t, i)),
                b = e.useCallback(() => {
                    null != l &&
                        ((0, d.Ay)(l) && (0, r.A9)(l.stream, { forceMultiple: !0 }),
                        c.A.popoutParticipant(t, l.id),
                        u.eQ(t, l.id),
                        o.default.track(y.HAw.CALL_TILE_POPPED_OUT, {
                            channel_id: t,
                            tile_type: (0, d.Ay)(l) ? "stream" : "user",
                        }));
                }, [l, t]);
            return _ || null == l || l.type === d.lp.ACTIVITY
                ? null
                : (0, a.jsx)(p.Dr, {
                      id: "call-tile-popout",
                      label: (0, d.Ay)(l)
                          ? P.intl.string(P.t.Cm4aDQ)
                          : null != l.streamId
                            ? P.intl.string(P.t["8Xyas9"])
                            : P.intl.string(P.t.ifpl2s),
                      action: b,
                      icon: s.t,
                      leadingAccessory: { type: "icon", icon: s.t },
                  });
        },
    },
);
