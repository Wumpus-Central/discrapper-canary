n.d(t, {
    G: () => f,
    j: () => _
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(466377),
    o = n(481060),
    l = n(252618),
    u = n(981631),
    c = n(388032),
    d = n(126941);
function f(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: r } = e;
    return (
        (0, l.Tt)({ location: c.intl.string(c.t['3S249/']) }),
        (0, i.jsx)(o.f6W, {
            theme: u.BRd.DARK,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: a()(e, d.oauth2PageWrapper, r),
                    children:
                        !0 === n
                            ? t
                            : (0, i.jsx)('div', {
                                  className: d.oauth2PageContent,
                                  children: t
                              })
                })
        })
    );
}
function _(e) {
    let { children: t, footer: n, transitionState: r, modalSize: a, ...o } = e;
    return (0, i.jsxs)(s.Y0, {
        size: null != a ? a : s.Cg.DYNAMIC,
        transitionState: r,
        className: d.oauth2ModalWrapper,
        ...o,
        children: [
            (0, i.jsx)(s.hz, { children: t }),
            null != n &&
                (0, i.jsx)(s.mz, {
                    className: d.footer,
                    children: n
                })
        ]
    });
}
