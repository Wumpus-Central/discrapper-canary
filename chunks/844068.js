r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(563132),
    u = r(738068);
function c(e) {
    let { notificationBlockRef: n } = e,
        { selectedPlanNotification: r } = (0, l.usePaymentContext)();
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: o()(u.notification),
              ref: n,
              children: [
                  (0, i.jsx)(s.CircleCheckIcon, {
                      className: o()(u.icon),
                      color: 'currentColor'
                  }),
                  (0, i.jsx)('div', {
                      className: u.text,
                      children: r
                  })
              ]
          });
}
