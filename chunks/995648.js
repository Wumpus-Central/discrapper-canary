n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(422559),
    l = n(95648);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: n, grantedPermissionsHeader: r, disabledPermissionsHeader: c, className: u } = e;
    return (0, i.jsxs)('div', {
        className: a()(l.list, u),
        children: [
            null != t && t.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != r
                              ? (0, i.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: r
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: l.container,
                              children: t.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, i.jsx)(o.CheckmarkLargeIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.check
                                              }),
                                              (0, i.jsx)(o.Text, {
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
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != c
                              ? (0, i.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: c
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: l.container,
                              children: n.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, i.jsx)(o.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.cross
                                              }),
                                              (0, i.jsx)(o.Text, {
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
