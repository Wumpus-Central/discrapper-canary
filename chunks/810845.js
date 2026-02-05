n.d(e, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(367513),
    d = n(401843),
    o = n(574172),
    u = n(911900),
    c = n(313961),
    A = n(806931),
    g = n(985018);
function b(t, e) {
    let { enabled: n } = u.A.useConfig({ location: "useCallTilePopoutItem" }),
        b = (0, a.bG)([c.A], () => c.A.getParticipant(t, e)),
        p = (0, a.bG)([c.A], () => c.A.isParticipantPoppedOut(t, e)),
        f = l.useCallback(() => {
            null != b &&
                ((0, A.Ay)(b) && (0, d.A9)(b.stream, { forceMultiple: !0 }),
                s.A.popoutParticipant(t, b.id),
                o.openCallTilePopout(t, b.id));
        }, [b, t]);
    return p || null == b || !n || b.type === A.lp.ACTIVITY
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "call-tile-popout",
              label: (0, A.Ay)(b)
                  ? g.intl.string(g.t.Cm4aDQ)
                  : null != b.streamId
                    ? g.intl.string(g.t["8Xyas9"])
                    : g.intl.string(g.t.ifpl2s),
              action: f,
              icon: r.tfB,
              leadingAccessory: { type: "icon", icon: r.tfB },
          });
}
