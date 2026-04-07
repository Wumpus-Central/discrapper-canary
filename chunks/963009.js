n.d(t, { R: () => a });
var i = n(978914),
    l = n(623075),
    s = n(977347);
function a(e, t, n) {
    let a = (0, l.V)(t),
        r = n || a,
        o = (0, s.D)(e.id, t),
        { message: c, loaded: d, error: u } = (0, i.I)(e, { enabled: r }),
        h = o ?? (c?.author?.id === t ? c : null);
    return { message: h, isReportable: r, isLoaded: null != h || d || u };
}
