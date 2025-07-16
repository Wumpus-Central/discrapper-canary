n.d(t, { Z: () => u });
var r = n(255367),
    i = n(793030),
    o = n(481060),
    a = n(921944),
    s = n(93841),
    l = n(388032),
    c = n(305063),
    d = n(719119);
function u(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: c.image,
                src: d
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
                    t(a.L.USER_DISMISS);
                }
            })
        ]
    });
}
