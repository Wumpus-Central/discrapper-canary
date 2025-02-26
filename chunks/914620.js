n.d(t, { Z: () => g });
var r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    c = n(481060),
    o = n(100527),
    d = n(906732),
    u = n(699553),
    m = n(314852),
    h = n(65361),
    j = n(722300),
    f = n(910200),
    p = n(323220),
    b = n(592642);
function g(e) {
    let { guildId: t, name: n, setPopoutRef: s } = e,
        { analyticsLocations: g } = (0, d.ZP)(o.Z.GUILD_PROFILE),
        { guildProfile: x, fetchGuildProfile: O, fetchStatus: v } = (0, h.u)(t),
        P = (0, i.e7)([m.Z], () => m.Z.getErrorCode(t)),
        y = l.useRef(null),
        N = l.useCallback(() => {
            O(!0);
        }, [O]);
    l.useEffect(() => {
        O();
    }, [O]),
        l.useEffect(() => {
            (0, u.vb)(t, g);
        }, [t, g]),
        l.useEffect(() => {
            null == s || s(null == y ? void 0 : y.current);
        }, [y, s]);
    let w = null;
    return (
        (w =
            v === m.a.NOT_FETCHED || v === m.a.FETCHING
                ? (0, r.jsx)('div', {
                      className: a()(b.container, b.spinnerContainer),
                      children: (0, r.jsx)(c.$jN, {})
                  })
                : null == x && 50001 === P
                  ? (0, r.jsx)('div', {
                        className: b.container,
                        children: (0, r.jsx)(p.Z, {
                            guildId: t,
                            name: n
                        })
                    })
                  : null == x
                    ? (0, r.jsx)('div', {
                          className: b.container,
                          children: (0, r.jsx)(j.Z, {
                              name: n,
                              onRetry: N
                          })
                      })
                    : (0, r.jsx)('div', {
                          className: b.container,
                          children: (0, r.jsx)(f.Z, { profile: x })
                      })),
        (0, r.jsx)(c.VqE, {
            ref: y,
            'aria-label': null == x ? void 0 : x.name,
            children: w
        })
    );
}
