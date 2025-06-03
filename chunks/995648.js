n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    i = n(481060),
    l = n(422559),
    c = n(432161);
function s(e) {
    let { grantedPermissions: t, disabledPermissions: n, grantedPermissionsHeader: o, disabledPermissionsHeader: s, className: u } = e;
    return (0, r.jsxs)('div', {
        className: a()(c.list, u),
        children: [
            null != t && t.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != o
                              ? (0, r.jsx)(i.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: c.header,
                                    children: o
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: c.container,
                              children: t.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: c.permission,
                                          children: [
                                              (0, r.jsx)(i.dz2, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: c.check
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
                          null != s
                              ? (0, r.jsx)(i.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: c.header,
                                    children: s
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: c.container,
                              children: n.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: c.permission,
                                          children: [
                                              (0, r.jsx)(i.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: c.cross
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
