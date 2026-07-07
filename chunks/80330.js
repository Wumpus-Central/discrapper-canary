"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(140735),
    l = n(707554),
    u = n(939249),
    c = n(946356),
    d = n(375708),
    _ = n(827839);
function h(e) {
    let { renderCards: t, heading: n, onExpand: s } = e,
        h = r.useId(),
        f = r.useMemo(() => t({ className: _.Nr }), [t]),
        [E] = f;
    return 0 === f.length
        ? null
        : (0, i.jsxs)("section", {
              "aria-labelledby": null != n ? h : void 0,
              className: _.kL,
              children: [
                  null != n && (0, i.jsx)(o.A, { children: (0, i.jsx)(l.H, { id: h, children: n }) }),
                  (0, i.jsx)(l.F, {
                      children: (0, i.jsxs)("ul", {
                          className: a()(_.ML, f.length > 1 && _.Kr),
                          "aria-labelledby": null != n ? h : void 0,
                          tabIndex: -1,
                          children: [
                              (0, i.jsx)("li", { className: _.Us, children: E }),
                              f.length > 1 &&
                                  (0, i.jsx)(u.D, {
                                      tag: "li",
                                      className: _.Ee,
                                      onClick: s,
                                      "aria-label": d.intl.string(d.t["OBCR+p"]),
                                      children: (0, i.jsx)(c.A.Overlay, { className: _.h9, children: null }),
                                  }),
                          ],
                      }),
                  }),
              ],
          });
}
