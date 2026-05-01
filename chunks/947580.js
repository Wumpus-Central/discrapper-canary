n.d(t, { Cf: () => s });
var i = n(403362),
    l = n(51082),
    a = n(806931);
function s(e, t, n) {
    return null == t || t.type === a.lp.ACTIVITY
        ? []
        : [
              t.type === a.lp.STREAM
                  ? e.find((e) => e.type === a.lp.USER && e.id === t?.user.id && e.id !== n && (0, l.Ay)(e))
                  : null,
              t.type === a.lp.USER
                  ? e.find((e) => e.type === a.lp.STREAM && e.user.id === t?.user.id && null != e.streamId)
                  : null,
              t.id !== n ? e.find((e) => e.type === a.lp.USER && e.id === n && (0, l.Ay)(e)) : null,
          ].filter(i.Vq);
}
