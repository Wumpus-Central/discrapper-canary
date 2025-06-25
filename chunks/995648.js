n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var a = n(120356),
    o = n.n(a),
    i = n(481060),
    l = n(422559),
    u = n(432161);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: n, grantedPermissionsHeader: a, disabledPermissionsHeader: c, className: s } = e;
    return (0, r.jsxs)('div', {
        className: o()(u.list, s),
        children: [
            null != t && t.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != a
                              ? (0, r.jsx)(i.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: u.header,
                                    children: a
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: u.container,
                              children: t.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: u.permission,
                                          children: [
                                              (0, r.jsx)(i.dz2, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: u.check
                                              }),
                                              (0, r.jsx)(i.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, l.wt)(e)
                                              })
                                          ]
                                      },
                                      e.toString()
                                  )
                              )
                          })
                      ]
                  })
                : null,
            null != n && n.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != c
                              ? (0, r.jsx)(i.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: u.header,
                                    children: c
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: u.container,
                              children: n.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: u.permission,
                                          children: [
                                              (0, r.jsx)(i.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: u.cross
                                              }),
                                              (0, r.jsx)(i.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, l.wt)(e)
                                              })
                                          ]
                                      },
                                      e.toString()
                                  )
                              )
                          })
                      ]
                  })
                : null
        ]
    });
}
