n.d(t, { A: () => a });
var i = n(64700),
    l = n(684339);
function a(e) {
    let { location: t, videoSpinnerContext: n, userId: a, streamId: s, loading: r, paused: o = !1 } = e,
        [c] = i.useState(() => new l.M(t));
    i.useEffect(() => {
        o || (r ? c.onSpinnerStarted() : null != s && c.trackSpinnerDuration(n, a, s));
    }, [r, o, s, c, n, a]);
}
