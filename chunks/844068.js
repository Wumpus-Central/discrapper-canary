n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(563132),
    a = n(448078);
function s(e) {
    let { notificationBlockRef: t } = e,
        { selectedPlanNotification: n } = (0, o.JL)();
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: a.notification,
              ref: t,
              children: [
                  (0, r.jsx)(i.owK, {
                      className: a.icon,
                      color: 'currentColor'
                  }),
                  (0, r.jsx)('div', {
                      className: a.text,
                      children: n
                  })
              ]
          });
}
