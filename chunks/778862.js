n.d(t, { A: () => a });
var i = n(64700),
    l = n(684339);
function a(e) {
    let { location: t, videoSpinnerContext: n, userId: a, streamId: r, loading: s, paused: o = !1 } = e,
        [d] = i.useState(() => new l.M(t));
    i.useEffect(() => {
        o || (s ? d.onSpinnerStarted() : null != r && d.trackSpinnerDuration(n, a, r));
    }, [s, o, r, d, n, a]);
}
