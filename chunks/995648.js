i.d(t, { Z: () => c });
var r = i(200651);
i(192379);
var n = i(120356),
    a = i.n(n),
    l = i(481060),
    s = i(422559),
    o = i(95648);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: i, grantedPermissionsHeader: n, disabledPermissionsHeader: c, className: d } = e;
    return (0, r.jsxs)('div', {
        className: a()(o.list, d),
        children: [
            null != t && t.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != n
                              ? (0, r.jsx)(l.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: o.header,
                                    children: n
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: o.container,
                              children: t.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: o.permission,
                                          children: [
                                              (0, r.jsx)(l.dz2, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: o.check
                                              }),
                                              (0, r.jsx)(l.Text, {
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
            null != i && i.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != c
                              ? (0, r.jsx)(l.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: o.header,
                                    children: c
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: o.container,
                              children: i.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: o.permission,
                                          children: [
                                              (0, r.jsx)(l.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: o.cross
                                              }),
                                              (0, r.jsx)(l.Text, {
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
