n.d(e, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(367513),
    d = n(401843),
    o = n(574172),
    u = n(954571),
    c = n(313961),
    A = n(806931),
    g = n(652215),
    b = n(985018);
function p(t, e) {
    let n = (0, a.bG)([c.A], () => c.A.getParticipant(t, e)),
        p = (0, a.bG)([c.A], () => c.A.isParticipantPoppedOut(t, e)),
        f = l.useCallback(() => {
            null != n &&
                ((0, A.Ay)(n) && (0, d.A9)(n.stream, { forceMultiple: !0 }),
                s.A.popoutParticipant(t, n.id),
                o.openCallTilePopout(t, n.id),
                u.default.track(g.HAw.CALL_TILE_POPPED_OUT, {
                    channel_id: t,
                    tile_type: (0, A.Ay)(n) ? "stream" : "user",
                }));
        }, [n, t]);
    return p || null == n || n.type === A.lp.ACTIVITY
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "call-tile-popout",
              label: (0, A.Ay)(n)
                  ? b.intl.string(b.t.Cm4aDQ)
                  : null != n.streamId
                    ? b.intl.string(b.t["8Xyas9"])
                    : b.intl.string(b.t.ifpl2s),
              action: f,
              icon: r.tfB,
              leadingAccessory: { type: "icon", icon: r.tfB },
          });
}
