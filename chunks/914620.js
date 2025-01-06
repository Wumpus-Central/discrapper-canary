t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(481060),
    c = t(934269),
    o = t(722300),
    u = t(910200),
    d = t(37633);
function h(e) {
    let { guildId: n, name: t, setPopoutRef: r } = e,
        { guildProfile: h, fetchGuildProfile: m, isFetching: f } = (0, c.u)(n),
        x = l.useRef(null),
        g = l.useCallback(() => {
            m(!0);
        }, [m]);
    l.useEffect(() => {
        m();
    }, [m]),
        l.useEffect(() => {
            null == r || r(null == x ? void 0 : x.current);
        }, [x, r]);
    let j = null;
    return (
        (j = f
            ? (0, i.jsx)('div', {
                  className: a()(d.container, d.spinnerContainer),
                  children: (0, i.jsx)(s.Spinner, {})
              })
            : null == h
              ? (0, i.jsx)('div', {
                    className: d.container,
                    children: (0, i.jsx)(o.Z, {
                        name: t,
                        onRetry: g
                    })
                })
              : (0, i.jsx)('div', {
                    className: d.container,
                    children: (0, i.jsx)(u.Z, { profile: h })
                })),
        (0, i.jsx)(s.Dialog, {
            ref: x,
            'aria-label': null == h ? void 0 : h.name,
            children: j
        })
    );
}
