n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(563132),
    l = n(16754);
function c(e) {
    let { notificationBlockRef: t } = e,
        { selectedPlanNotification: n } = (0, s.JL)();
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: o()(l.notification),
              ref: t,
              children: [
                  (0, r.jsx)(a.owK, {
                      className: o()(l.icon),
                      color: 'currentColor'
                  }),
                  (0, r.jsx)('div', {
                      className: l.text,
                      children: n
                  })
              ]
          });
}
