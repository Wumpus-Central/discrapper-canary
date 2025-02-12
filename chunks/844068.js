n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(563132),
    l = n(824587);
function u(e) {
    let { notificationBlockRef: t } = e,
        { selectedPlanNotification: n } = (0, o.JL)();
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: a()(l.notification),
              ref: t,
              children: [
                  (0, i.jsx)(s.owK, {
                      className: a()(l.icon),
                      color: 'currentColor'
                  }),
                  (0, i.jsx)('div', {
                      className: l.text,
                      children: n
                  })
              ]
          });
}
