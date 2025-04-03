r.d(t, { Z: () => c });
var n = r(200651);
r(192379);
var i = r(120356),
    a = r.n(i),
    o = r(481060),
    s = r(422559),
    l = r(432161);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: r, grantedPermissionsHeader: i, disabledPermissionsHeader: c, className: d } = e;
    return (0, n.jsxs)('div', {
        className: a()(l.list, d),
        children: [
            null != t && t.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != i
                              ? (0, n.jsx)(o.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: i
                                })
                              : null,
                          (0, n.jsx)('div', {
                              className: l.container,
                              children: t.map((e) =>
                                  (0, n.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, n.jsx)(o.dz2, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.check
                                              }),
                                              (0, n.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, s.wt)(e)
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
            null != r && r.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != c
                              ? (0, n.jsx)(o.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: c
                                })
                              : null,
                          (0, n.jsx)('div', {
                              className: l.container,
                              children: r.map((e) =>
                                  (0, n.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, n.jsx)(o.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.cross
                                              }),
                                              (0, n.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, s.wt)(e)
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
