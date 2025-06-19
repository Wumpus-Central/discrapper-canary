t.d(n, { Z: () => d });
var r = t(255367),
    i = t(793030),
    o = t(481060),
    a = t(921944),
    s = t(93841),
    l = t(388032),
    c = t(305063),
    u = t(719119);
function d(e) {
    let { markAsDismissed: n } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: c.image,
                src: u
            }),
            (0, r.jsx)(i.xv, {
                color: 'always-white',
                variant: 'text-md/semibold',
                children: l.intl.string(s.default.diMhWV)
            }),
            (0, r.jsx)(i.xv, {
                color: 'always-white',
                variant: 'text-sm/medium',
                children: l.intl.string(s.default.pycxTk)
            }),
            (0, r.jsx)(o.olH, {
                className: c.close,
                innerClassName: c.innerClose,
                onClick: () => {
                    n(a.L.USER_DISMISS);
                }
            })
        ]
    });
}
