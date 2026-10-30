n.d(t, { A: () => s });
var i = n(570138),
    r = n(350835),
    a = n(61330);
function s(e) {
    return null == e || null == e.type || e.type !== r.$.PLAYING
        ? null
        : (0, a.A)(e)
          ? i.y.XBOX
          : null != e.platform
            ? e.platform
            : i.y.DESKTOP;
}
