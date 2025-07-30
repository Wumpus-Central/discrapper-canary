n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    l = n(481060),
    i = n(422559),
    s = n(432161);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: n, grantedPermissionsHeader: o, disabledPermissionsHeader: c, className: u } = e;
    return (0, r.jsxs)('div', {
        className: a()(s.list, u),
        children: [
            null != t && t.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != o
                              ? (0, r.jsx)(l.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: s.header,
                                    children: o
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: s.container,
                              children: t.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: s.permission,
                                          children: [
                                              (0, r.jsx)(l.dz2, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: s.check
                                              }),
                                              (0, r.jsx)(l.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, i.wt)(e)
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
                              ? (0, r.jsx)(l.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: s.header,
                                    children: c
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: s.container,
                              children: n.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: s.permission,
                                          children: [
                                              (0, r.jsx)(l.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: s.cross
                                              }),
                                              (0, r.jsx)(l.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, i.wt)(e)
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
