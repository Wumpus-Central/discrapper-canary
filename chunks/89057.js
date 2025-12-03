n.d(t, {
    Vq: () => y,
    c8: () => b,
    oQ: () => O,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(692547),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(600164),
    d = n(63063),
    f = n(211242),
    p = n(981631),
    _ = n(388032),
    m = n(840416),
    h = n(51125),
    g = n(47268);
function E(e) {
    let { className: t } = e,
        n = (0, c.ZP)(),
        i = (0, s.wj)(n) ? h : g;
    return (0, r.jsxs)("div", {
        className: a()(m.container, t),
        children: [
            (0, r.jsx)(l.Heading, {
                className: m.header,
                variant: "heading-xl/semibold",
                children: _.intl.string(_.t.vwMEHS),
            }),
            (0, r.jsxs)(l.Text, {
                className: m.description,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, r.jsx)("p", { children: _.intl.string(_.t.fev8MQ) }),
                    (0, r.jsx)("p", {
                        children: _.intl.format(_.t.IHxEJU, {
                            helpdeskArticle: d.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("img", {
                src: i,
                className: m.splashImage,
                alt: "Blocked Payments",
            }),
        ],
    });
}
function b() {
    return (0, r.jsx)(E, { className: m.settings });
}
function y(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.xBx, {
                className: m.blockedPaymentsModalHeader,
                justify: u.Z.Justify.END,
                "data-migration-pending": !0,
                children: (0, r.jsx)(l.olH, {
                    onClick: t,
                    "data-migration-pending": !0,
                }),
            }),
            (0, r.jsx)(l.hzk, {
                className: m.blockedPaymentsModalContent,
                "data-migration-pending": !0,
                children: (0, r.jsx)(E, { className: m.modal }),
            }),
        ],
    });
}
function O(e) {
    let { className: t } = e;
    return (0, f.Q)()
        ? (0, r.jsxs)(l.Zbd, {
              className: a()(m.blockedPaymentsWarning, t),
              type: l.Zbd.Types.CUSTOM,
              children: [
                  (0, r.jsx)(l.Mgn, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: m.blockedPaymentsWarningIcon,
                      color: o.Z.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: _.intl.format(_.t.NYkcCh, {
                          helpdeskArticle: d.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
