"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(946356),
    u = n(985018),
    c = n(598808);
function d(e) {
    let { renderCards: t, heading: n, onExpand: s } = e,
        d = i.useId(),
        _ = i.useMemo(() => t({ className: c.Nr }), [t]),
        [f] = _;
    return 0 === _.length
        ? null
        : (0, r.jsxs)("section", {
              "aria-labelledby": null != n ? d : void 0,
              className: c.kL,
              children: [
                  null != n && (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { id: d, children: n }) }),
                  (0, r.jsx)(o.Fmo, {
                      children: (0, r.jsxs)("ul", {
                          className: a()(c.ML, _.length > 1 && c.Kr),
                          "aria-labelledby": null != n ? d : void 0,
                          tabIndex: -1,
                          children: [
                              (0, r.jsx)("li", { className: c.Us, children: f }),
                              _.length > 1 &&
                                  (0, r.jsx)(o.DUT, {
                                      tag: "li",
                                      className: c.Ee,
                                      onClick: s,
                                      "aria-label": u.intl.string(u.t["OBCR+p"]),
                                      children: (0, r.jsx)(l.A.Overlay, { className: c.h9, children: null }),
                                  }),
                          ],
                      }),
                  }),
              ],
          });
}
