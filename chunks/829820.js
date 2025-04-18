n.d(t, {
    Fe: () => v,
    Ih: () => y,
    Lz: () => O
}),
    n(388685);
var r = n(192379),
    i = n(442837),
    a = n(846519),
    o = n(110924),
    s = n(314897),
    l = n(70956),
    c = n(51144),
    u = n(768419),
    d = n(300020),
    f = n(456190),
    _ = n(239470),
    p = n(894344),
    h = n(203777),
    m = n(616922);
let g = 30 * l.Z.Millis.SECOND;
function E(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [s, l] = r.useState(!1),
        [c] = r.useState(() => new a.V7()),
        u = (0, o.Z)(t);
    r.useEffect(() => {
        s && (t !== u || n || i) && (l(!1), c.stop());
    }, [t, u, n, i, s, c]);
    let d = r.useCallback(() => {
            l(!0), c.start(g, () => l(!1));
        }, [c]),
        f = r.useCallback(() => {
            l(!1), c.stop();
        }, [c]);
    return (
        r.useEffect(() => () => c.stop(), [c]),
        {
            loading: s,
            startLoading: d,
            clearLoading: f
        }
    );
}
function b(e, t) {
    return (0, i.cj)([u.Z, s.default], () => (0, _.Z)(u.Z, s.default, t, e), [e, t]);
}
function y(e, t, n) {
    let i = b(e, t),
        { notPlayable: a, isCurrentUser: o, playingSameTrack: s } = i,
        { loading: l, startLoading: c, clearLoading: u } = E(i),
        _ = r.useCallback(() => {
            c(), (0, h.Z)(i, m.kG.USER_ACTIVITY_PLAY, n).catch(u);
        }, [i, n, c, u]);
    return {
        label: (0, d.Z)(i, m.kG.USER_ACTIVITY_PLAY),
        tooltip: (0, f.Z)(i, m.kG.USER_ACTIVITY_PLAY),
        disabled: !l && (o || a || s),
        loading: l,
        onClick: _,
        spotifyData: i
    };
}
function v(e, t, n, i) {
    let a = null != i ? i : c.ZP.getName(t),
        o = b(e, t),
        { notPlayable: s, syncingWithUser: l, syncingWithParty: u, isCurrentUser: _ } = o,
        { loading: h, startLoading: g, clearLoading: y } = E(o),
        v = r.useCallback(() => {
            g(), (0, p.Z)(o, m.kG.USER_ACTIVITY_SYNC, n).catch(y);
        }, [o, n, g, y]);
    return {
        label: (0, d.Z)(o, m.kG.USER_ACTIVITY_SYNC),
        tooltip: (0, f.Z)(o, m.kG.USER_ACTIVITY_SYNC, a),
        disabled: !h && (s || _ || l || u),
        loading: h,
        onClick: v,
        spotifyData: o
    };
}
function O(e, t, n) {
    let i = b(e, t),
        { notPlayable: a, syncingWithUser: o, syncingWithParty: s, isCurrentUser: l } = i,
        { loading: c, startLoading: u, clearLoading: _ } = E(i),
        h = r.useCallback(() => {
            u(), (0, p.Z)(i, m.kG.EMBED_SYNC, n).catch(_);
        }, [i, n, u, _]);
    return {
        label: (0, d.Z)(i, m.kG.EMBED_SYNC),
        tooltip: (0, f.Z)(i, m.kG.EMBED_SYNC),
        disabled: !c && (l || o || s || a),
        loading: c,
        onClick: h,
        spotifyData: i
    };
}
