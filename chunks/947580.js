n.d(t, { Cf: () => a });
var i = n(403362),
    l = n(51082),
    s = n(806931);
function a(e, t, n) {
    return null == t || t.type === s.lp.ACTIVITY
        ? []
        : [
              t.type === s.lp.STREAM
                  ? e.find((e) => e.type === s.lp.USER && e.id === t?.user.id && e.id !== n && (0, l.Ay)(e))
                  : null,
              t.type === s.lp.USER
                  ? e.find((e) => e.type === s.lp.STREAM && e.user.id === t?.user.id && null != e.streamId)
                  : null,
              t.id !== n ? e.find((e) => e.type === s.lp.USER && e.id === n && (0, l.Ay)(e)) : null,
          ].filter(i.Vq);
}
