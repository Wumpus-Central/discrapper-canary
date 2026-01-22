n.d(t, { A: () => d }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(946356),
    c = n(985018),
    u = n(598808);
function d(e) {
    let { renderCards: t, heading: n, onExpand: a } = e,
        d = i.useId(),
        f = i.useMemo(() => t({ className: u.Nr }), [t]),
        [p] = f;
    return 0 === f.length
        ? null
        : (0, r.jsxs)("section", {
              "aria-labelledby": null != n ? d : void 0,
              className: u.kL,
              children: [
                  null != n &&
                      (0, r.jsx)(o.AC4, {
                          children: (0, r.jsx)(o.H, {
                              id: d,
                              children: n,
                          }),
                      }),
                  (0, r.jsxs)("ul", {
                      className: s()(u.ML, f.length > 1 && u.Kr),
                      "aria-labelledby": null != n ? d : void 0,
                      tabIndex: -1,
                      children: [
                          (0, r.jsx)("li", {
                              className: u.Us,
                              children: p,
                          }),
                          f.length > 1 &&
                              (0, r.jsx)(o.DUT, {
                                  tag: "li",
                                  className: u.Ee,
                                  onClick: a,
                                  "aria-label": c.intl.string(c.t["OBCR+p"]),
                                  children: (0, r.jsx)(l.A.Overlay, {
                                      className: u.h9,
                                      children: null,
                                  }),
                              }),
                      ],
                  }),
              ],
          });
}
