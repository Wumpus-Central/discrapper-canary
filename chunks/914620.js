a.d(l, { Z: () => j });
var s = a(200651),
    n = a(192379),
    i = a(120356),
    t = a.n(i),
    r = a(442837),
    d = a(481060),
    c = a(314852),
    o = a(65361),
    u = a(722300),
    m = a(910200),
    h = a(323220),
    x = a(187426);
function j(e) {
    let { guildId: l, name: a, setPopoutRef: i } = e,
        { guildProfile: j, fetchGuildProfile: g, isFetching: v } = (0, o.u)(l),
        N = (0, r.e7)([c.Z], () => c.Z.getErrorCode(l)),
        f = n.useRef(null),
        p = n.useCallback(() => {
            g(!0);
        }, [g]);
    n.useEffect(() => {
        g();
    }, [g]),
        n.useEffect(() => {
            null == i || i(null == f ? void 0 : f.current);
        }, [f, i]);
    let P = null;
    return (
        (P = v
            ? (0, s.jsx)('div', {
                  className: t()(x.container, x.spinnerContainer),
                  children: (0, s.jsx)(d.$jN, {})
              })
            : null == j && 50001 === N
              ? (0, s.jsx)('div', {
                    className: x.container,
                    children: (0, s.jsx)(h.Z, {
                        guildId: l,
                        name: a
                    })
                })
              : null == j
                ? (0, s.jsx)('div', {
                      className: x.container,
                      children: (0, s.jsx)(u.Z, {
                          name: a,
                          onRetry: p
                      })
                  })
                : (0, s.jsx)('div', {
                      className: x.container,
                      children: (0, s.jsx)(m.Z, { profile: j })
                  })),
        (0, s.jsx)(d.VqE, {
            ref: f,
            'aria-label': null == j ? void 0 : j.name,
            children: P
        })
    );
}
