i.d(e, { default: () => c }), i(953529);
var n = i(255367),
    s = i(73800),
    a = i(481060),
    l = i(388032),
    r = i(661640);
let c = (t) => {
    let { transitionState: e, processFiles: i, onClose: c } = t;
    return (
        s.useEffect(() => {
            (async () => {
                e === a.Dvm.ENTERED && (await i(), c());
            })();
        }, [c, i, e]),
        (0, n.jsx)(a.Y0X, {
            transitionState: e,
            size: a.CgR.SMALL,
            'aria-label': l.intl.string(l.t['B/HSDQ']),
            children: (0, n.jsxs)(a.hzk, {
                className: r.modalContent,
                children: [
                    (0, n.jsx)(a.$jN, { className: r.spinner }),
                    (0, n.jsx)(a.hjN, {
                        tag: a.RB0.H1,
                        titleClassName: r.title,
                        title: l.intl.string(l.t['B/HSDQ']),
                        className: r.__invalid_content,
                        children: (0, n.jsx)(a.R94, {
                            type: a.geA.DESCRIPTION,
                            className: r.description,
                            children: l.intl.string(l.t.k7OALi)
                        })
                    })
                ]
            })
        })
    );
};
