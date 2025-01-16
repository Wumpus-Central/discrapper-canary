t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(481060),
    a = t(563132),
    c = t(738068);
function o(e) {
    let { notificationBlockRef: n } = e,
        { selectedPlanNotification: t } = (0, a.usePaymentContext)();
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: r()(c.notification),
              ref: n,
              children: [
                  (0, i.jsx)(s.CircleCheckIcon, {
                      className: r()(c.icon),
                      color: 'currentColor'
                  }),
                  (0, i.jsx)('div', {
                      className: c.text,
                      children: t
                  })
              ]
          });
}
