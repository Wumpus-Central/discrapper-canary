r.d(t, { Z: () => c });
var i = r(200651);
r(192379);
var n = r(120356),
    a = r.n(n),
    s = r(481060),
    l = r(422559),
    o = r(197190);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: r, grantedPermissionsHeader: n, disabledPermissionsHeader: c, className: d } = e;
    return (0, i.jsxs)('div', {
        className: a()(o.list, d),
        children: [
            null != t && t.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != n
                              ? (0, i.jsx)(s.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: o.header,
                                    children: n
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: o.container,
                              children: t.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: o.permission,
                                          children: [
                                              (0, i.jsx)(s.dz2, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: o.check
                                              }),
                                              (0, i.jsx)(s.Text, {
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
            null != r && r.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != c
                              ? (0, i.jsx)(s.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: o.header,
                                    children: c
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: o.container,
                              children: r.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: o.permission,
                                          children: [
                                              (0, i.jsx)(s.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: o.cross
                                              }),
                                              (0, i.jsx)(s.Text, {
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
