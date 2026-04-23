n.d(e, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(477782),
    s = n(811893),
    d = n(367513),
    o = n(401843),
    u = n(574172),
    c = n(954571),
    A = n(313961),
    g = n(806931),
    b = n(652215),
    f = n(985018);
function m(t, e) {
    let n = (0, a.bG)([A.A], () => A.A.getParticipant(t, e)),
        m = (0, a.bG)([A.A], () => A.A.isParticipantPoppedOut(t, e)),
        p = l.useCallback(() => {
            null != n &&
                ((0, g.Ay)(n) && (0, o.A9)(n.stream, { forceMultiple: !0 }),
                d.A.popoutParticipant(t, n.id),
                u.openCallTilePopout(t, n.id),
                c.default.track(b.HAw.CALL_TILE_POPPED_OUT, {
                    channel_id: t,
                    tile_type: (0, g.Ay)(n) ? "stream" : "user",
                }));
        }, [n, t]);
    return m || null == n || n.type === g.lp.ACTIVITY
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "call-tile-popout",
              label: (0, g.Ay)(n)
                  ? f.intl.string(f.t.Cm4aDQ)
                  : null != n.streamId
                    ? f.intl.string(f.t["8Xyas9"])
                    : f.intl.string(f.t.ifpl2s),
              action: p,
              icon: s.t,
              leadingAccessory: { type: "icon", icon: s.t },
          });
}
