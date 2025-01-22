r.d(n, {
    Vq: function () {
        return b;
    },
    c8: function () {
        return y;
    },
    oQ: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(692547),
    l = r(780384),
    u = r(481060),
    c = r(410030),
    d = r(600164),
    f = r(63063),
    p = r(211242),
    h = r(981631),
    _ = r(388032),
    m = r(792776),
    g = r(51125),
    E = r(47268);
function v(e) {
    let { className: n } = e,
        r = (0, c.ZP)(),
        a = (0, l.wj)(r) ? g : E;
    return (0, i.jsxs)('div', {
        className: o()(m.container, n),
        children: [
            (0, i.jsx)(u.Heading, {
                className: m.header,
                variant: 'heading-xl/semibold',
                children: _.intl.string(_.t.vwMEHR)
            }),
            (0, i.jsxs)(u.Text, {
                className: m.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, i.jsx)('p', { children: _.intl.string(_.t.fev8MT) }), (0, i.jsx)('p', { children: _.intl.format(_.t.IHxEJS, { helpdeskArticle: f.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, i.jsx)('img', {
                src: a,
                className: m.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function y() {
    return (0, i.jsx)(v, { className: m.settings });
}
function b(e) {
    let { onClose: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.ModalHeader, {
                className: m.blockedPaymentsModalHeader,
                justify: d.Z.Justify.END,
                children: (0, i.jsx)(u.ModalCloseButton, { onClick: n })
            }),
            (0, i.jsx)(u.ModalContent, {
                className: m.blockedPaymentsModalContent,
                children: (0, i.jsx)(v, { className: m.modal })
            })
        ]
    });
}
function I(e) {
    let { className: n } = e;
    return (0, p.Q)()
        ? (0, i.jsxs)(u.Card, {
              className: o()(m.blockedPaymentsWarning, n),
              type: u.Card.Types.CUSTOM,
              children: [
                  (0, i.jsx)(u.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: m.blockedPaymentsWarningIcon,
                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, i.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      children: _.intl.format(_.t.NYkcCg, { helpdeskArticle: f.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
