r.d(n, { Z: () => o });
var t = r(951288);
r(647438);
var s = r(120356),
    i = r.n(s),
    a = r(481060),
    l = r(422559),
    c = r(347044);
function o(e) {
    let {
        grantedPermissions: n,
        disabledPermissions: r,
        grantedPermissionsHeader: s,
        disabledPermissionsHeader: o,
        className: u,
    } = e;
    return (0, t.jsxs)("div", {
        className: i()(c.list, u),
        children: [
            null != n && n.length > 0
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          null != s
                              ? (0, t.jsx)(a.X6q, {
                                    variant: "heading-sm/semibold",
                                    color: "header-primary",
                                    className: c.header,
                                    children: s,
                                })
                              : null,
                          (0, t.jsx)("div", {
                              className: c.container,
                              children: n.map((e) =>
                                  (0, t.jsxs)(
                                      "div",
                                      {
                                          className: c.permission,
                                          children: [
                                              (0, t.jsx)(a.dz2, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: c.check,
                                              }),
                                              (0, t.jsx)(a.Text, {
                                                  variant: "text-sm/normal",
                                                  children: (0, l.wt)(e),
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
            null != r && r.length > 0
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          null != o
                              ? (0, t.jsx)(a.X6q, {
                                    variant: "heading-sm/semibold",
                                    color: "header-primary",
                                    className: c.header,
                                    children: o,
                                })
                              : null,
                          (0, t.jsx)("div", {
                              className: c.container,
                              children: r.map((e) =>
                                  (0, t.jsxs)(
                                      "div",
                                      {
                                          className: c.permission,
                                          children: [
                                              (0, t.jsx)(a.Dio, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: c.cross,
                                              }),
                                              (0, t.jsx)(a.Text, {
                                                  variant: "text-sm/normal",
                                                  children: (0, l.wt)(e),
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
