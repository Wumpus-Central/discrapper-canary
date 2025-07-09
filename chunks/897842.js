a.d(t, {
    A: () => u,
    default: () => m
});
var n = a(255367);
a(73800);
var r = a(120356),
    l = a.n(r),
    i = a(466377),
    s = a(481060),
    o = a(310752),
    c = a(731994),
    d = a(792351);
let u = 'UPLOAD_ERROR_MODAL_KEY',
    m = (e) => {
        let { title: t, help: a, transitionState: r } = e;
        return (0, n.jsx)(i.Y0, {
            size: i.Cg.DYNAMIC,
            transitionState: r,
            parentComponent: 'ShopAssetsUploadErrorModal',
            children: (0, n.jsx)('div', {
                className: l()(d.uploadModal, d.errorModal),
                children: (0, n.jsxs)('div', {
                    className: d.inner,
                    children: [
                        (0, n.jsx)(o.Z, { icons: c.J6 }),
                        (0, n.jsx)(s.X6q, {
                            variant: 'heading-lg/bold',
                            children: t
                        }),
                        (0, n.jsx)('div', {
                            className: d.instructions,
                            children: (0, n.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: a
                            })
                        })
                    ]
                })
            })
        });
    };
