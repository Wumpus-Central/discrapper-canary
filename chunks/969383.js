n.r(t), n.d(t, { default: () => d });
var i = n(200651);
n(192379);
var r = n(40851),
    a = n(238246),
    l = n(989373),
    o = n(438162);
n(606206), n(371467);
var c = n(981631);
function d(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return (0, l.useOverlayInitialFocus)(n)
        ? (0, i.jsx)(a.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, i.jsx)(r.Wu, {
                  appContext: c.IlC.OVERLAY,
                  renderWindow: window,
                  children: (0, i.jsx)(o.Z, {})
              })
          })
        : null;
}
