n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(563132),
    o = n(500375);
function s(e) {
    let { notificationBlockRef: t } = e,
        { selectedPlanNotification: n } = (0, a.JL)();
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: o.notification,
              ref: t,
              children: [
                  (0, r.jsx)(i.owK, {
                      className: o.icon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)("div", {
                      className: o.text,
                      children: n,
                  }),
              ],
          });
}
