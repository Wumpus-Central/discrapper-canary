n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(422559),
    o = n(432161);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: n, grantedPermissionsHeader: a, disabledPermissionsHeader: c, className: u } = e;
    return (0, r.jsxs)('div', {
        className: i()(o.list, u),
        children: [
            null != t && t.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != a
                              ? (0, r.jsx)(l.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: o.header,
                                    children: a
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
            null != n && n.length > 0
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
                              children: n.map((e) =>
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
