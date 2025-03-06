t.d(n, { Z: () => u });
var r = t(200651),
    i = t(793030),
    o = t(481060),
    s = t(921944),
    a = t(730621),
    l = t(388032),
    c = t(951652),
    d = t(719119);
function u(e) {
    let { markAsDismissed: n } = e;
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
                children: l.NW.string(a.Z.diMhWV)
            }),
            (0, r.jsx)(i.xv, {
                color: 'always-white',
                variant: 'text-sm/medium',
                children: l.NW.string(a.Z.pycxTk)
            }),
            (0, r.jsx)(o.olH, {
                className: c.close,
                innerClassName: c.innerClose,
                onClick: () => {
                    n(s.L.USER_DISMISS);
                }
            })
        ]
    });
}
