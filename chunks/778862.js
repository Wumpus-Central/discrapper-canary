"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(684339);
function s(e) {
    let { location: t, videoSpinnerContext: n, userId: s, streamId: a, loading: o, paused: l = !1 } = e,
        [u] = r.useState(() => new i.M(t));
    r.useEffect(() => {
        l || (o ? u.onSpinnerStarted() : null != a && u.trackSpinnerDuration(n, s, a));
    }, [o, l, a, u, n, s]);
}
