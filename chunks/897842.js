n.d(t, {
    A: () => u,
    default: () => m
});
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(466377),
    s = n(481060),
    o = n(310752),
    c = n(731994),
    d = n(946252);
let u = 'UPLOAD_ERROR_MODAL_KEY',
    m = (e) => {
        let { title: t, help: n, transitionState: r } = e;
        return (0, a.jsx)(i.Y0, {
            size: i.Cg.DYNAMIC,
            transitionState: r,
            children: (0, a.jsx)('div', {
                className: l()(d.uploadModal, d.errorModal),
                children: (0, a.jsxs)('div', {
                    className: d.inner,
                    children: [
                        (0, a.jsx)(o.Z, { icons: c.J6 }),
                        (0, a.jsx)(s.X6q, {
                            variant: 'heading-lg/bold',
                            children: t
                        }),
                        (0, a.jsx)('div', {
                            className: d.instructions,
                            children: (0, a.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: n
                            })
                        })
                    ]
                })
            })
        });
    };
