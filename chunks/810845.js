n.d(e, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(367513),
    d = n(401843),
    o = n(574172),
    u = n(954571),
    c = n(911900),
    A = n(313961),
    g = n(806931),
    b = n(652215),
    p = n(985018);
function f(t, e) {
    let { enabled: n } = c.A.useConfig({ location: "useCallTilePopoutItem" }),
        f = (0, a.bG)([A.A], () => A.A.getParticipant(t, e)),
        m = (0, a.bG)([A.A], () => A.A.isParticipantPoppedOut(t, e)),
        _ = l.useCallback(() => {
            null != f &&
                ((0, g.Ay)(f) && (0, d.A9)(f.stream, { forceMultiple: !0 }),
                s.A.popoutParticipant(t, f.id),
                o.openCallTilePopout(t, f.id),
                u.default.track(b.HAw.CALL_TILE_POPPED_OUT, {
                    channel_id: t,
                    tile_type: (0, g.Ay)(f) ? "stream" : "user",
                }));
        }, [f, t]);
    return m || null == f || !n || f.type === g.lp.ACTIVITY
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "call-tile-popout",
              label: (0, g.Ay)(f)
                  ? p.intl.string(p.t.Cm4aDQ)
                  : null != f.streamId
                    ? p.intl.string(p.t["8Xyas9"])
                    : p.intl.string(p.t.ifpl2s),
              action: _,
              icon: r.tfB,
              leadingAccessory: { type: "icon", icon: r.tfB },
          });
}
