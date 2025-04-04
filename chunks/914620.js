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
    let { guildId: t, name: n, setPopoutRef: o } = e,
        { analyticsLocations: b } = (0, u.ZP)(c.Z.GUILD_PROFILE),
        { guildProfile: y, fetchGuildProfile: v, fetchStatus: O } = (0, _.u)(t),
        I = (0, s.e7)([f.Z], () => f.Z.getErrorCode(t)),
        S = i.useRef(null),
        T = i.useCallback(() => {
            v(!0);
        }, [v]);
    i.useEffect(() => {
        v();
    }, [v]),
        i.useEffect(() => {
            (0, d.vb)(t, b);
        }, [t, b]),
        i.useEffect(() => {
            null == o || o(null == S ? void 0 : S.current);
        }, [S, o]);
    let N = i.useMemo(
        () =>
            O === f.a.NOT_FETCHED || O === f.a.FETCHING
                ? (0, r.jsx)('div', {
                      className: a()(g.container, g.spinnerContainer),
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == y && I === E
                  ? (0, r.jsx)('div', {
                        className: g.container,
                        children: (0, r.jsx)(m.Z, {
                            guildId: t,
                            name: n
                        })
                    })
                  : null == y
                    ? (0, r.jsx)('div', {
                          className: g.container,
                          children: (0, r.jsx)(p.Z, {
                              name: n,
                              onRetry: T
                          })
                      })
                    : (0, r.jsx)('div', {
                          className: g.container,
                          children: (0, r.jsx)(h.ZP, { profile: y })
                      }),
        [O, y, I, t, n, T]
    );
    return (0, r.jsx)(l.VqE, {
        ref: S,
        'aria-label': null == y ? void 0 : y.name,
        children: N
    });
}
