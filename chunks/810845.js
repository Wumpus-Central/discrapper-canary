i.d(e, { A: () => m });
var n = i(627968),
    l = i(64700),
    a = i(17928),
    r = i(477782),
    s = i(811893),
    d = i(367513),
    o = i(401843),
    u = i(574172),
    c = i(954571),
    A = i(313961),
    g = i(806931),
    b = i(652215),
    f = i(985018);
function m(t, e) {
    let i = (0, a.bG)([A.A], () => A.A.getParticipant(t, e)),
        m = (0, a.bG)([A.A], () => A.A.isParticipantPoppedOut(t, e)),
        p = l.useCallback(() => {
            null != i &&
                ((0, g.Ay)(i) && (0, o.A9)(i.stream, { forceMultiple: !0 }),
                d.A.popoutParticipant(t, i.id),
                u.openCallTilePopout(t, i.id),
                c.default.track(b.HAw.CALL_TILE_POPPED_OUT, {
                    channel_id: t,
                    tile_type: (0, g.Ay)(i) ? "stream" : "user",
                }));
        }, [i, t]);
    return m || null == i || i.type === g.lp.ACTIVITY
        ? null
        : (0, n.jsx)(r.Dr, {
              id: "call-tile-popout",
              label: (0, g.Ay)(i)
                  ? f.intl.string(f.t.Cm4aDQ)
                  : null != i.streamId
                    ? f.intl.string(f.t["8Xyas9"])
                    : f.intl.string(f.t.ifpl2s),
              action: p,
              icon: s.t,
              leadingAccessory: { type: "icon", icon: s.t },
          });
}
