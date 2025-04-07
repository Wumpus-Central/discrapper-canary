n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(699553),
    f = n(314852),
    _ = n(65361),
    p = n(722300),
    h = n(910200),
    m = n(323220),
    g = n(595732);
let E = 50001;
function b(e) {
    let { guildId: t, name: n, setPopoutRef: o, onClose: b } = e,
        { analyticsLocations: y } = (0, u.ZP)(c.Z.GUILD_PROFILE),
        { guildProfile: v, fetchGuildProfile: O, fetchStatus: I } = (0, _.u)(t),
        S = (0, s.e7)([f.Z], () => f.Z.getErrorCode(t)),
        T = i.useRef(null),
        N = i.useCallback(() => {
            O(!0);
        }, [O]);
    i.useEffect(() => {
        O();
    }, [O]),
        i.useEffect(() => {
            (0, d.vb)(t, y);
        }, [t, y]),
        i.useEffect(() => {
            null == o || o(null == T ? void 0 : T.current);
        }, [T, o]);
    let A = i.useMemo(
        () =>
            I === f.a.NOT_FETCHED || I === f.a.FETCHING
                ? (0, r.jsx)('div', {
                      className: a()(g.container, g.spinnerContainer),
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == v && S === E
                  ? (0, r.jsx)('div', {
                        className: g.container,
                        children: (0, r.jsx)(m.Z, {
                            guildId: t,
                            name: n
                        })
                    })
                  : null == v
                    ? (0, r.jsx)('div', {
                          className: g.container,
                          children: (0, r.jsx)(p.Z, {
                              name: n,
                              onRetry: N
                          })
                      })
                    : (0, r.jsx)('div', {
                          className: g.container,
                          children: (0, r.jsx)(h.ZP, {
                              profile: v,
                              onClose: b
                          })
                      }),
        [I, v, S, t, n, N, b]
    );
    return (0, r.jsx)(l.VqE, {
        ref: T,
        'aria-label': null == v ? void 0 : v.name,
        children: A
    });
}
