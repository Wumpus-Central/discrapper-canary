r.d(n, {
    G: function () {
        return _;
    },
    j: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(466377),
    l = r(481060),
    u = r(252618),
    c = r(981631),
    d = r(388032),
    f = r(993230);
function _(e) {
    let { children: n, removeChildWrapper: r, wrapperClassName: a } = e;
    return (
        (0, u.Tt)({ location: d.intl.string(d.t['3S249/']) }),
        (0, i.jsx)(l.ThemeProvider, {
            theme: c.BRd.DARK,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: s()(e, f.oauth2PageWrapper, a),
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
    let { children: n, footer: r, transitionState: a, ...s } = e;
    return (0, i.jsxs)(o.Y0, {
        size: o.Cg.DYNAMIC,
        transitionState: a,
        className: f.oauth2ModalWrapper,
        ...s,
        children: [
            (0, i.jsx)(o.hz, { children: n }),
            null != r &&
                (0, i.jsx)(o.mz, {
                    className: f.footer,
                    children: r
                })
        ]
    });
}
