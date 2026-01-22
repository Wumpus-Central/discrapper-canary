n.d(t, { Cf: () => a });
var r = n(403362),
    l = n(51082),
    i = n(806931);
function a(e, t, n) {
    return null == t || t.type === i.lp.ACTIVITY
        ? []
        : [
              t.type === i.lp.STREAM
                  ? e.find(
                        (e) =>
                            e.type === i.lp.USER &&
                            e.id === (null == t ? void 0 : t.user.id) &&
                            e.id !== n &&
                            (0, l.Ay)(e),
                    )
                  : null,
              t.type === i.lp.USER
                  ? e.find(
                        (e) =>
                            e.type === i.lp.STREAM &&
                            e.user.id === (null == t ? void 0 : t.user.id) &&
                            null != e.streamId,
                    )
                  : null,
              t.id !== n ? e.find((e) => e.type === i.lp.USER && e.id === n && (0, l.Ay)(e)) : null,
          ].filter(r.Vq);
}
