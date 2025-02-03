s.d(l, { Z: () => m });
var a = s(200651),
    n = s(192379),
    i = s(120356),
    t = s.n(i),
    r = s(481060),
    c = s(934269),
    d = s(722300),
    o = s(910200),
    u = s(37633);
function m(e) {
    let { guildId: l, name: s, setPopoutRef: i } = e,
        { guildProfile: m, fetchGuildProfile: h, isFetching: x } = (0, c.u)(l),
        j = n.useRef(null),
        g = n.useCallback(() => {
            h(!0);
        }, [h]);
    n.useEffect(() => {
        h();
    }, [h]),
        n.useEffect(() => {
            null == i || i(null == j ? void 0 : j.current);
        }, [j, i]);
    let v = null;
    return (
        (v = x
            ? (0, a.jsx)('div', {
                  className: t()(u.container, u.spinnerContainer),
                  children: (0, a.jsx)(r.$jN, {})
              })
            : null == m
              ? (0, a.jsx)('div', {
                    className: u.container,
                    children: (0, a.jsx)(d.Z, {
                        name: s,
                        onRetry: g
                    })
                })
              : (0, a.jsx)('div', {
                    className: u.container,
                    children: (0, a.jsx)(o.Z, { profile: m })
                })),
        (0, a.jsx)(r.VqE, {
            ref: j,
            'aria-label': null == m ? void 0 : m.name,
            children: v
        })
    );
}
