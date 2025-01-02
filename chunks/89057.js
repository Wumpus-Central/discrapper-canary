n.d(t, {
    Vq: function () {
        return _;
    },
    c8: function () {
        return y;
    },
    oQ: function () {
        return P;
    }
});
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(692547),
    i = n(780384),
    o = n(481060),
    c = n(410030),
    u = n(600164),
    d = n(63063),
    p = n(211242),
    m = n(981631),
    h = n(388032),
    A = n(792776),
    E = n(51125),
    N = n(47268);
function f(e) {
    let { className: t } = e,
        n = (0, c.ZP)(),
        r = (0, i.wj)(n) ? E : N;
    return (0, a.jsxs)('div', {
        className: l()(A.container, t),
        children: [
            (0, a.jsx)(o.Heading, {
                className: A.header,
                variant: 'heading-xl/semibold',
                children: h.intl.string(h.t.vwMEHR)
            }),
            (0, a.jsxs)(o.Text, {
                className: A.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, a.jsx)('p', { children: h.intl.string(h.t.fev8MT) }), (0, a.jsx)('p', { children: h.intl.format(h.t.IHxEJS, { helpdeskArticle: d.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, a.jsx)('img', {
                src: r,
                className: A.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function y() {
    return (0, a.jsx)(f, { className: A.settings });
}
function _(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.ModalHeader, {
                className: A.blockedPaymentsModalHeader,
                justify: u.Z.Justify.END,
                children: (0, a.jsx)(o.ModalCloseButton, { onClick: t })
            }),
            (0, a.jsx)(o.ModalContent, {
                className: A.blockedPaymentsModalContent,
                children: (0, a.jsx)(f, { className: A.modal })
            })
        ]
    });
}
function P(e) {
    let { className: t } = e;
    return (0, p.Q)()
        ? (0, a.jsxs)(o.Card, {
              className: l()(A.blockedPaymentsWarning, t),
              type: o.Card.Types.CUSTOM,
              children: [
                  (0, a.jsx)(o.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: A.blockedPaymentsWarningIcon,
                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, a.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: h.intl.format(h.t.NYkcCg, { helpdeskArticle: d.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
