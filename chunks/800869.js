n.d(t, { Z: () => d });
var r = n(255367),
    o = n(793030),
    i = n(481060),
    l = n(921944),
    s = n(93841),
    a = n(388032),
    c = n(305063),
    u = n(719119);
function d(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: c.image,
                src: u
            }),
            (0, r.jsx)(o.xv, {
                color: 'always-white',
                variant: 'text-md/semibold',
                children: a.intl.string(s.default.diMhWV)
            }),
            (0, r.jsx)(o.xv, {
                color: 'always-white',
                variant: 'text-sm/medium',
                children: a.intl.string(s.default.pycxTk)
            }),
            (0, r.jsx)(i.olH, {
                className: c.close,
                innerClassName: c.innerClose,
                onClick: () => {
                    t(l.L.USER_DISMISS);
                }
            })
        ]
    });
}
