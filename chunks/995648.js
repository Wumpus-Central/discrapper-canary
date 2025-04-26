n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    i = n(481060),
    c = n(422559),
    l = n(432161);
function s(e) {
    let { grantedPermissions: t, disabledPermissions: n, grantedPermissionsHeader: a, disabledPermissionsHeader: s, className: u } = e;
    return (0, r.jsxs)('div', {
        className: o()(l.list, u),
        children: [
            null != t && t.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != a
                              ? (0, r.jsx)(i.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: a
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: l.container,
                              children: t.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, r.jsx)(i.dz2, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.check
                                              }),
                                              (0, r.jsx)(i.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, c.wt)(e)
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
                                    className: l.header,
                                    children: s
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: l.container,
                              children: n.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, r.jsx)(i.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.cross
                                              }),
                                              (0, r.jsx)(i.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, c.wt)(e)
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
