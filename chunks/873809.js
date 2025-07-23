a.d(t, { default: () => l });
var n = a(255367);
a(73800);
var i = a(82659),
    s = a(481060),
    r = a(724723),
    o = a(388032),
    c = a(78349);
function l(e) {
    let { transitionState: t, header: l, body: d, confirmText: x, onClose: h, onConfirm: p } = e,
        m = r.Z.useExperiment({ location: 'VideoDevicesWarningModal' }, { autoTrackExposure: !0 }).enabled,
        u = () => {
            (h(), null == p || p());
        };
    return m
        ? (0, n.jsx)(i.Modal, {
              title: l,
              subtitle: d,
              transitionState: t,
              onClose: h,
              actions: [
                  {
                      text: x,
                      onClick: u,
                      variant: 'primary'
                  }
              ]
          })
        : (0, n.jsxs)(s.Y0X, {
              'data-migration-pending': !0,
              transitionState: t,
              'aria-label': l,
              parentComponent: 'VideoDevicesWarningModal',
              children: [
                  (0, n.jsxs)(s.hzk, {
                      className: c.content,
                      children: [
                          (0, n.jsx)('img', {
                              src: a(568533),
                              alt: l
                          }),
                          (0, n.jsx)(s.X6q, {
                              variant: 'heading-xl/semibold',
                              className: c.header,
                              children: l
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              children: d
                          })
                      ]
                  }),
                  (0, n.jsx)(s.mzw, {
                      className: c.footer,
                      children: (0, n.jsxs)(s.hE2, {
                          direction: 'horizontal-reverse',
                          children: [
                              (0, n.jsx)(s.zxk, {
                                  variant: 'primary',
                                  size: 'sm',
                                  text: x,
                                  onClick: u
                              }),
                              (0, n.jsx)(s.zxk, {
                                  variant: 'secondary',
                                  size: 'sm',
                                  text: o.intl.string(o.t.cpT0Cg),
                                  onClick: h
                              })
                          ]
                      })
                  })
              ]
          });
}
