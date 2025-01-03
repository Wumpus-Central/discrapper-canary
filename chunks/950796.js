n.d(t, {
    T: function () {
        return I;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(428548),
    c = n(679219),
    d = n(939039),
    u = n(358085),
    h = n(998502),
    m = n(388032),
    p = n(565923);
let g = (e) => h.ZP.close(e),
    f = (e) => h.ZP.minimize(e),
    _ = (e, t) => {
        (0, u.isMac)() && !t.altKey ? h.ZP.fullscreen(e) : h.ZP.maximize(e);
    };
function E(e) {
    let { windowKey: t, showDivider: n } = e,
        r = (0, i.jsx)(s.Clickable, {
            className: a()(p.winButton, p.winButtonClose),
            onClick: () => g(t),
            'aria-label': m.intl.string(m.t.ZdNUj4),
            tabIndex: -1,
            children: (0, i.jsx)(o.Z, {})
        }),
        l = (0, i.jsx)(s.Clickable, {
            className: a()(p.winButton, p.winButtonMinMax),
            onClick: (e) => _(t, e),
            'aria-label': m.intl.string(m.t.G1u0hI),
            tabIndex: -1,
            children: (0, i.jsx)(c.Z, {})
        }),
        u = (0, i.jsx)(s.Clickable, {
            className: a()(p.winButton, p.winButtonMinMax),
            onClick: () => f(t),
            'aria-label': m.intl.string(m.t.CxOC4e),
            tabIndex: -1,
            children: (0, i.jsx)(d.Z, {})
        });
    return (0, i.jsxs)('div', {
        className: a()(p.winButtons, { [p.winButtonsWithDivider]: n }),
        children: [u, l, r]
    });
}
function I(e) {
    let { leading: t, title: n, trailing: l, windowKey: a } = e,
        s = (0, u.getPlatform)() === u.PlatformTypes.WINDOWS,
        o = r.useCallback(() => {
            (0, u.isMac)() && h.ZP.maximize();
        }, []);
    function c(e) {
        e.stopPropagation();
    }
    return (0, i.jsxs)('div', {
        className: p.bar,
        onDoubleClick: o,
        children: [
            (0, i.jsx)('div', {
                className: p.title,
                children: n
            }),
            (0, i.jsx)('div', {
                className: p.leading,
                onDoubleClick: c,
                children: t
            }),
            (0, i.jsxs)('div', {
                className: p.trailing,
                onDoubleClick: c,
                children: [
                    l,
                    s &&
                        (0, i.jsx)(E, {
                            windowKey: a,
                            showDivider: null != l
                        })
                ]
            })
        ]
    });
}
