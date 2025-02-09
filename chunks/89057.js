n.d(t, {
    Vq: () => y,
    c8: () => v,
    oQ: () => I
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(692547),
    o = n(780384),
    l = n(481060),
    u = n(410030),
    c = n(600164),
    d = n(63063),
    f = n(211242),
    _ = n(981631),
    p = n(388032),
    h = n(466409),
    m = n(51125),
    g = n(47268);
function E(e) {
    let { className: t } = e,
        n = (0, u.ZP)(),
        r = (0, o.wj)(n) ? m : g;
    return (0, i.jsxs)('div', {
        className: a()(h.container, t),
        children: [
            (0, i.jsx)(l.X6q, {
                className: h.header,
                variant: 'heading-xl/semibold',
                children: p.intl.string(p.t.vwMEHR)
            }),
            (0, i.jsxs)(l.Text, {
                className: h.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, i.jsx)('p', { children: p.intl.string(p.t.fev8MT) }), (0, i.jsx)('p', { children: p.intl.format(p.t.IHxEJS, { helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, i.jsx)('img', {
                src: r,
                className: h.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function v() {
    return (0, i.jsx)(E, { className: h.settings });
}
function y(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.xBx, {
                className: h.blockedPaymentsModalHeader,
                justify: c.Z.Justify.END,
                children: (0, i.jsx)(l.olH, { onClick: t })
            }),
            (0, i.jsx)(l.hzk, {
                className: h.blockedPaymentsModalContent,
                children: (0, i.jsx)(E, { className: h.modal })
            })
        ]
    });
}
function I(e) {
    let { className: t } = e;
    return (0, f.Q)()
        ? (0, i.jsxs)(l.Zbd, {
              className: a()(h.blockedPaymentsWarning, t),
              type: l.Zbd.Types.CUSTOM,
              children: [
                  (0, i.jsx)(l.P4T, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: h.blockedPaymentsWarningIcon,
                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/normal',
                      children: p.intl.format(p.t.NYkcCg, { helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
