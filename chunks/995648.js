n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(481060),
    l = n(422559),
    c = n(432161);
function u(e) {
    let { grantedPermissions: t, disabledPermissions: n, grantedPermissionsHeader: r, disabledPermissionsHeader: u, className: s } = e;
    return (0, i.jsxs)('div', {
        className: a()(c.list, s),
        children: [
            null != t && t.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != r
                              ? (0, i.jsx)(o.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: c.header,
                                    children: r
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: c.container,
                              children: t.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: c.permission,
                                          children: [
                                              (0, i.jsx)(o.dz2, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: c.check
                                              }),
                                              (0, i.jsx)(o.Text, {
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
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != u
                              ? (0, i.jsx)(o.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: c.header,
                                    children: u
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: c.container,
                              children: n.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: c.permission,
                                          children: [
                                              (0, i.jsx)(o.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: c.cross
                                              }),
                                              (0, i.jsx)(o.Text, {
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
