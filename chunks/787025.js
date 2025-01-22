r.d(n, {
    G: function () {
        return p;
    },
    j: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(466377),
    l = r(481060),
    u = r(252618),
    c = r(981631),
    d = r(388032),
    f = r(993230);
function p(e) {
    let { children: n, removeChildWrapper: r, wrapperClassName: a } = e;
    return (
        (0, u.Tt)({ location: d.intl.string(d.t['3S249/']) }),
        (0, i.jsx)(l.ThemeProvider, {
            theme: c.BRd.DARK,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: o()(e, f.oauth2PageWrapper, a),
                    children:
                        !0 === r
                            ? n
                            : (0, i.jsx)('div', {
                                  className: f.oauth2PageContent,
                                  children: n
                              })
                })
        })
    );
}
function h(e) {
    let { children: n, footer: r, transitionState: a, ...o } = e;
    return (0, i.jsxs)(s.Y0, {
        size: s.Cg.DYNAMIC,
        transitionState: a,
        className: f.oauth2ModalWrapper,
        ...o,
        children: [
            (0, i.jsx)(s.hz, { children: n }),
            null != r &&
                (0, i.jsx)(s.mz, {
                    className: f.footer,
                    children: r
                })
        ]
    });
}
