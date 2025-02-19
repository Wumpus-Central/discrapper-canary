n.d(t, {
    Vq: () => b,
    c8: () => v,
    oQ: () => y
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(692547),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(600164),
    d = n(63063),
    f = n(211242),
    p = n(981631),
    _ = n(388032),
    h = n(22313),
    m = n(51125),
    g = n(47268);
function E(e) {
    let { className: t } = e,
        n = (0, c.ZP)(),
        i = (0, s.wj)(n) ? m : g;
    return (0, r.jsxs)('div', {
        className: o()(h.container, t),
        children: [
            (0, r.jsx)(l.X6q, {
                className: h.header,
                variant: 'heading-xl/semibold',
                children: _.NW.string(_.t.vwMEHR)
            }),
            (0, r.jsxs)(l.Text, {
                className: h.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, r.jsx)('p', { children: _.NW.string(_.t.fev8MT) }), (0, r.jsx)('p', { children: _.NW.format(_.t.IHxEJS, { helpdeskArticle: d.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, r.jsx)('img', {
                src: i,
                className: h.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function v() {
    return (0, r.jsx)(E, { className: h.settings });
}
function b(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.xBx, {
                className: h.blockedPaymentsModalHeader,
                justify: u.Z.Justify.END,
                children: (0, r.jsx)(l.olH, { onClick: t })
            }),
            (0, r.jsx)(l.hzk, {
                className: h.blockedPaymentsModalContent,
                children: (0, r.jsx)(E, { className: h.modal })
            })
        ]
    });
}
function y(e) {
    let { className: t } = e;
    return (0, f.Q)()
        ? (0, r.jsxs)(l.Zbd, {
              className: o()(h.blockedPaymentsWarning, t),
              type: l.Zbd.Types.CUSTOM,
              children: [
                  (0, r.jsx)(l.P4T, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: h.blockedPaymentsWarningIcon,
                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/normal',
                      children: _.NW.format(_.t.NYkcCg, { helpdeskArticle: d.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
