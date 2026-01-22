n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(367513),
    s = n(401843),
    d = n(574172),
    c = n(911900),
    u = n(313961),
    A = n(806931),
    f = n(985018);
function b(e, t) {
    let { enabled: n } = c.A.useConfig({ location: "useCallTilePopoutItem" }),
        b = (0, l.bG)([u.A], () => u.A.getParticipant(e, t)),
        g = (0, l.bG)([u.A], () => u.A.isParticipantPoppedOut(e, t)),
        p = i.useCallback(() => {
            null != b &&
                ((0, A.Ay)(b) && (0, s.A9)(b.stream, { forceMultiple: !0 }),
                o.A.popoutParticipant(e, b.id),
                d.openCallTilePopout(e, b.id));
        }, [b, e]);
    return g || null == b || !n || b.type === A.lp.ACTIVITY
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "call-tile-popout",
              label: (0, A.Ay)(b)
                  ? f.intl.string(f.t.Cm4aDQ)
                  : null != b.streamId
                    ? f.intl.string(f.t["8Xyas9"])
                    : f.intl.string(f.t.ifpl2s),
              action: p,
              icon: a.tfB,
          });
}
