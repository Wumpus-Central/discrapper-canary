n.d(t, {
    A: () => i,
}),
    n(896048);
var l = n(64700),
    r = n(684339);

function i(e) {
    let { location: t, videoSpinnerContext: n, userId: i, streamId: a, loading: s, paused: o = !1 } = e,
        [c] = l.useState(() => new r.M(t));
    l.useEffect(() => {
        o || (s ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, i, a));
    }, [s, o, a, c, n, i]);
}
