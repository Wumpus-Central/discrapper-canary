n.d(t, { Cf: () => s });
var i = n(403362),
    a = n(51082),
    l = n(806931);
function s(e, t, n) {
    return null == t || t.type === l.lp.ACTIVITY
        ? []
        : [
              t.type === l.lp.STREAM
                  ? e.find((e) => e.type === l.lp.USER && e.id === t?.user.id && e.id !== n && (0, a.Ay)(e))
                  : null,
              t.type === l.lp.USER
                  ? e.find((e) => e.type === l.lp.STREAM && e.user.id === t?.user.id && null != e.streamId)
                  : null,
              t.id !== n ? e.find((e) => e.type === l.lp.USER && e.id === n && (0, a.Ay)(e)) : null,
          ].filter(i.Vq);
}
