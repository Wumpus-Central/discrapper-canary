n.d(t, { R: () => s });
var i = n(978914),
    l = n(623075),
    a = n(977347);
function s(e, t, n) {
    let s = (0, l.V)(t),
        r = n || s,
        o = (0, a.D)(e.id, t),
        { message: c, loaded: d, error: u } = (0, i.I)(e, { enabled: r }),
        h = o ?? (c?.author?.id === t ? c : null);
    return { message: h, isReportable: r, isLoaded: null != h || d || u };
}
