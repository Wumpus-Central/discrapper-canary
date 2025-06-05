n.d(e, { default: () => c }), n(953529);
var i = n(255367),
    a = n(73800),
    s = n(481060),
    l = n(388032),
    r = n(661640);
let c = (t) => {
    let { transitionState: e, processFiles: n, onClose: c } = t;
    return (
        a.useEffect(() => {
            (async () => {
                e === s.Dvm.ENTERED && (await n(), c());
            })();
        }, [c, n, e]),
        (0, i.jsx)(s.Y0X, {
            transitionState: e,
            size: s.CgR.SMALL,
            'aria-label': l.intl.string(l.t['B/HSDQ']),
            parentComponent: 'ImageInputUploadModal',
            children: (0, i.jsxs)(s.hzk, {
                className: r.modalContent,
                children: [
                    (0, i.jsx)(s.$jN, { className: r.spinner }),
                    (0, i.jsx)(s.hjN, {
                        tag: s.RB0.H1,
                        titleClassName: r.title,
                        title: l.intl.string(l.t['B/HSDQ']),
                        className: r.__invalid_content,
                        children: (0, i.jsx)(s.R94, {
                            type: s.geA.DESCRIPTION,
                            className: r.description,
                            children: l.intl.string(l.t.k7OALi)
                        })
                    })
                ]
            })
        })
    );
};
