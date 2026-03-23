n.d(t, { A: () => s });
var i = n(64700),
    l = n(684339);
function s(e) {
    let { location: t, videoSpinnerContext: n, userId: s, streamId: a, loading: r, paused: o = !1 } = e,
        [c] = i.useState(() => new l.M(t));
    i.useEffect(() => {
        o || (r ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, s, a));
    }, [r, o, a, c, n, s]);
}
