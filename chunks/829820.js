r.d(n, {
    Fe: function () {
        return y;
    },
    Ih: function () {
        return b;
    },
    Lz: function () {
        return S;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(846519),
    l = r(110924),
    u = r(314897),
    c = r(70956),
    d = r(51144),
    f = r(768419),
    _ = r(300020),
    h = r(456190),
    p = r(239470),
    m = r(894344),
    g = r(203777),
    E = r(616922);
let v = 30 * c.Z.Millis.SECOND;
function I(e) {
    let { currentUserTrackId: n, syncingWithUser: r, syncingWithParty: i } = e,
        [s, u] = a.useState(!1),
        [c] = a.useState(() => new o.V7()),
        d = (0, l.Z)(n);
    a.useEffect(() => {
        s && (n !== d || r || i) && (u(!1), c.stop());
    }, [n, d, r, i, s, c]);
    let f = a.useCallback(() => {
            u(!0), c.start(v, () => u(!1));
        }, [c]),
        _ = a.useCallback(() => {
            u(!1), c.stop();
        }, [c]);
    return (
        a.useEffect(() => () => c.stop(), [c]),
        {
            loading: s,
            startLoading: f,
            clearLoading: _
        }
    );
}
function T(e, n) {
    return (0, s.cj)([f.Z, u.default], () => (0, p.Z)(f.Z, u.default, n, e), [e, n]);
}
function b(e, n, r) {
    let i = T(e, n),
        { notPlayable: s, isCurrentUser: o, playingSameTrack: l } = i,
        { loading: u, startLoading: c, clearLoading: d } = I(i),
        f = a.useCallback(() => {
            c(), (0, g.Z)(i, E.kG.USER_ACTIVITY_PLAY, r).catch(d);
        }, [i, r, c, d]);
    return {
        label: (0, _.Z)(i, E.kG.USER_ACTIVITY_PLAY),
        tooltip: (0, h.Z)(i, E.kG.USER_ACTIVITY_PLAY),
        disabled: !u && (o || s || l),
        loading: u,
        onClick: f,
        spotifyData: i
    };
}
function y(e, n, r, i) {
    let s = null != i ? i : d.ZP.getName(n),
        o = T(e, n),
        { notPlayable: l, syncingWithUser: u, syncingWithParty: c, isCurrentUser: f } = o,
        { loading: p, startLoading: g, clearLoading: v } = I(o),
        b = a.useCallback(() => {
            g(), (0, m.Z)(o, E.kG.USER_ACTIVITY_SYNC, r).catch(v);
        }, [o, r, g, v]);
    return {
        label: (0, _.Z)(o, E.kG.USER_ACTIVITY_SYNC),
        tooltip: (0, h.Z)(o, E.kG.USER_ACTIVITY_SYNC, s),
        disabled: !p && (l || f || u || c),
        loading: p,
        onClick: b,
        spotifyData: o
    };
}
function S(e, n, r) {
    let i = T(e, n),
        { notPlayable: s, syncingWithUser: o, syncingWithParty: l, isCurrentUser: u } = i,
        { loading: c, startLoading: d, clearLoading: f } = I(i),
        p = a.useCallback(() => {
            d(), (0, m.Z)(i, E.kG.EMBED_SYNC, r).catch(f);
        }, [i, r, d, f]);
    return {
        label: (0, _.Z)(i, E.kG.EMBED_SYNC),
        tooltip: (0, h.Z)(i, E.kG.EMBED_SYNC),
        disabled: !c && (u || o || l || s),
        loading: c,
        onClick: p,
        spotifyData: i
    };
}
