r.d(t, {
    Z: function () {
        return c;
    }
});
var n = r(200651);
r(192379);
var i = r(120356),
    a = r.n(i),
    l = r(481060),
    s = r(422559),
    o = r(95648);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: r, grantedPermissionsHeader: i, disabledPermissionsHeader: c, className: d } = e;
    return (0, n.jsxs)('div', {
        className: a()(o.list, d),
        children: [
            null != t && t.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != i
                              ? (0, n.jsx)(l.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: o.header,
                                    children: i
                                })
                              : null,
                          (0, n.jsx)('div', {
                              className: o.container,
                              children: t.map((e) =>
                                  (0, n.jsxs)(
                                      'div',
                                      {
                                          className: o.permission,
                                          children: [
                                              (0, n.jsx)(l.CheckmarkLargeIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: o.check
                                              }),
                                              (0, n.jsx)(l.Text, {
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
                              ? (0, n.jsx)(l.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: o.header,
                                    children: c
                                })
                              : null,
                          (0, n.jsx)('div', {
                              className: o.container,
                              children: r.map((e) =>
                                  (0, n.jsxs)(
                                      'div',
                                      {
                                          className: o.permission,
                                          children: [
                                              (0, n.jsx)(l.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: o.cross
                                              }),
                                              (0, n.jsx)(l.Text, {
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
