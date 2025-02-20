n.d(t, { Z: () => f });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    i = n(442837),
    c = n(481060),
    o = n(314852),
    d = n(65361),
    u = n(722300),
    m = n(910200),
    h = n(323220),
    j = n(592642);
function f(e) {
    let { guildId: t, name: n, setPopoutRef: a } = e,
        { guildProfile: f, fetchGuildProfile: x, fetchStatus: g } = (0, d.u)(t),
        p = (0, i.e7)([o.Z], () => o.Z.getErrorCode(t)),
        b = l.useRef(null),
        v = l.useCallback(() => {
            x(!0);
        }, [x]);
    l.useEffect(() => {
        x();
    }, [x]),
        l.useEffect(() => {
            null == a || a(null == b ? void 0 : b.current);
        }, [b, a]);
    let O = null;
    return (
        (O =
            g === o.a.NOT_FETCHED || g === o.a.FETCHING
                ? (0, r.jsx)('div', {
                      className: s()(j.container, j.spinnerContainer),
                      children: (0, r.jsx)(c.$jN, {})
                  })
                : null == f && 50001 === p
                  ? (0, r.jsx)('div', {
                        className: j.container,
                        children: (0, r.jsx)(h.Z, {
                            guildId: t,
                            name: n
                        })
                    })
                  : null == f
                    ? (0, r.jsx)('div', {
                          className: j.container,
                          children: (0, r.jsx)(u.Z, {
                              name: n,
                              onRetry: v
                          })
                      })
                    : (0, r.jsx)('div', {
                          className: j.container,
                          children: (0, r.jsx)(m.Z, { profile: f })
                      })),
        (0, r.jsx)(c.VqE, {
            ref: b,
            'aria-label': null == f ? void 0 : f.name,
            children: O
        })
    );
}
