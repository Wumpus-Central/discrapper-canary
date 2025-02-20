n.d(t, {
    Fe: () => y,
    Ih: () => b,
    Lz: () => O
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(846519),
    a = n(110924),
    s = n(314897),
    l = n(70956),
    c = n(51144),
    u = n(768419),
    d = n(300020),
    f = n(456190),
    p = n(239470),
    _ = n(894344),
    h = n(203777),
    m = n(616922);
let g = 30 * l.Z.Millis.SECOND;
function E(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [s, l] = r.useState(!1),
        [c] = r.useState(() => new o.V7()),
        u = (0, a.Z)(t);
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
function v(e, t) {
    return (0, i.cj)([u.Z, s.default], () => (0, p.Z)(u.Z, s.default, t, e), [e, t]);
}
function b(e, t, n) {
    let i = v(e, t),
        { notPlayable: o, isCurrentUser: a, playingSameTrack: s } = i,
        { loading: l, startLoading: c, clearLoading: u } = E(i),
        p = r.useCallback(() => {
            c(), (0, h.Z)(i, m.kG.USER_ACTIVITY_PLAY, n).catch(u);
        }, [i, n, c, u]);
    return {
        label: (0, d.Z)(i, m.kG.USER_ACTIVITY_PLAY),
        tooltip: (0, f.Z)(i, m.kG.USER_ACTIVITY_PLAY),
        disabled: !l && (a || o || s),
        loading: l,
        onClick: p,
        spotifyData: i
    };
}
function y(e, t, n, i) {
    let o = null != i ? i : c.ZP.getName(t),
        a = v(e, t),
        { notPlayable: s, syncingWithUser: l, syncingWithParty: u, isCurrentUser: p } = a,
        { loading: h, startLoading: g, clearLoading: b } = E(a),
        y = r.useCallback(() => {
            g(), (0, _.Z)(a, m.kG.USER_ACTIVITY_SYNC, n).catch(b);
        }, [a, n, g, b]);
    return {
        label: (0, d.Z)(a, m.kG.USER_ACTIVITY_SYNC),
        tooltip: (0, f.Z)(a, m.kG.USER_ACTIVITY_SYNC, o),
        disabled: !h && (s || p || l || u),
        loading: h,
        onClick: y,
        spotifyData: a
    };
}
function O(e, t, n) {
    let i = v(e, t),
        { notPlayable: o, syncingWithUser: a, syncingWithParty: s, isCurrentUser: l } = i,
        { loading: c, startLoading: u, clearLoading: p } = E(i),
        h = r.useCallback(() => {
            u(), (0, _.Z)(i, m.kG.EMBED_SYNC, n).catch(p);
        }, [i, n, u, p]);
    return {
        label: (0, d.Z)(i, m.kG.EMBED_SYNC),
        tooltip: (0, f.Z)(i, m.kG.EMBED_SYNC),
        disabled: !c && (l || a || s || o),
        loading: c,
        onClick: h,
        spotifyData: i
    };
}
