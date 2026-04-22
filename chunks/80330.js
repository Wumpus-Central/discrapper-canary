n.d(t, { A: () => _ });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(140735),
    o = n(707554),
    u = n(939249),
    d = n(946356),
    c = n(985018),
    A = n(827839);
function _(e) {
    let { renderCards: t, heading: n, onExpand: r } = e,
        _ = i.useId(),
        h = i.useMemo(() => t({ className: A.Nr }), [t]),
        [E] = h;
    return 0 === h.length
        ? null
        : (0, l.jsxs)("section", {
              "aria-labelledby": null != n ? _ : void 0,
              className: A.kL,
              children: [
                  null != n && (0, l.jsx)(s.A, { children: (0, l.jsx)(o.H, { id: _, children: n }) }),
                  (0, l.jsx)(o.F, {
                      children: (0, l.jsxs)("ul", {
                          className: a()(A.ML, h.length > 1 && A.Kr),
                          "aria-labelledby": null != n ? _ : void 0,
                          tabIndex: -1,
                          children: [
                              (0, l.jsx)("li", { className: A.Us, children: E }),
                              h.length > 1 &&
                                  (0, l.jsx)(u.D, {
                                      tag: "li",
                                      className: A.Ee,
                                      onClick: r,
                                      "aria-label": c.intl.string(c.t["OBCR+p"]),
                                      children: (0, l.jsx)(d.A.Overlay, { className: A.h9, children: null }),
                                  }),
                          ],
                      }),
                  }),
              ],
          });
}
