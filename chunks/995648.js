n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(481060),
    o = n(422559),
    s = n(432161);
function c(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: n,
        grantedPermissionsHeader: l,
        disabledPermissionsHeader: c,
        className: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(s.list, u),
        children: [
            null != t && t.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != l
                              ? (0, r.jsx)(i.X6q, {
                                    variant: "heading-sm/semibold",
                                    color: "header-primary",
                                    className: s.header,
                                    children: l,
                                })
                              : null,
                          (0, r.jsx)("div", {
                              className: s.container,
                              children: t.map((e) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: s.permission,
                                          children: [
                                              (0, r.jsx)(i.dz2, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: s.check,
                                              }),
                                              (0, r.jsx)(i.Text, {
                                                  variant: "text-sm/normal",
                                                  children: (0, o.wt)(e),
                                              }),
                                          ],
                                      },
                                      e.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            null != n && n.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != c
                              ? (0, r.jsx)(i.X6q, {
                                    variant: "heading-sm/semibold",
                                    color: "header-primary",
                                    className: s.header,
                                    children: c,
                                })
                              : null,
                          (0, r.jsx)("div", {
                              className: s.container,
                              children: n.map((e) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: s.permission,
                                          children: [
                                              (0, r.jsx)(i.Dio, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: s.cross,
                                              }),
                                              (0, r.jsx)(i.Text, {
                                                  variant: "text-sm/normal",
                                                  children: (0, o.wt)(e),
                                              }),
                                          ],
                                      },
                                      e.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
