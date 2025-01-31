n.d(l, { Z: () => m });
var i = n(200651),
    t = n(192379),
    a = n(120356),
    s = n.n(a),
    r = n(481060),
    c = n(934269),
    d = n(722300),
    o = n(910200),
    u = n(37633);
function m(e) {
    let { guildId: l, name: n, setPopoutRef: a } = e,
        { guildProfile: m, fetchGuildProfile: h, isFetching: x } = (0, c.u)(l),
        j = t.useRef(null),
        f = t.useCallback(() => {
            h(!0);
        }, [h]);
    t.useEffect(() => {
        h();
    }, [h]),
        t.useEffect(() => {
            null == a || a(null == j ? void 0 : j.current);
        }, [j, a]);
    let v = null;
    return (
        (v = x
            ? (0, i.jsx)('div', {
                  className: s()(u.container, u.spinnerContainer),
                  children: (0, i.jsx)(r.$jN, {})
              })
            : null == m
              ? (0, i.jsx)('div', {
                    className: u.container,
                    children: (0, i.jsx)(d.Z, {
                        name: n,
                        onRetry: f
                    })
                })
              : (0, i.jsx)('div', {
                    className: u.container,
                    children: (0, i.jsx)(o.Z, { profile: m })
                })),
        (0, i.jsx)(r.VqE, {
            ref: j,
            'aria-label': null == m ? void 0 : m.name,
            children: v
        })
    );
}
