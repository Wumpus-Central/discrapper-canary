s.d(e, { A: () => o });
var n = s(627968),
    a = s(64700),
    i = s(503698),
    t = s.n(i),
    r = s(140735),
    d = s(707554),
    c = s(939249),
    u = s(946356),
    h = s(375708),
    A = s(827839);
function o(l) {
    let { renderCards: e, heading: s, onExpand: i } = l,
        o = a.useId(),
        x = a.useMemo(() => e({ className: A.Nr }), [e]),
        [p] = x;
    return 0 === x.length
        ? null
        : (0, n.jsxs)("section", {
              "aria-labelledby": null != s ? o : void 0,
              className: A.kL,
              children: [
                  null != s && (0, n.jsx)(r.A, { children: (0, n.jsx)(d.H, { id: o, children: s }) }),
                  (0, n.jsx)(d.F, {
                      children: (0, n.jsxs)("ul", {
                          className: t()(A.ML, x.length > 1 && A.Kr),
                          "aria-labelledby": null != s ? o : void 0,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)("li", { className: A.Us, children: p }),
                              x.length > 1 &&
                                  (0, n.jsx)(c.D, {
                                      tag: "li",
                                      className: A.Ee,
                                      onClick: i,
                                      "aria-label": h.intl.string(h.t["OBCR+p"]),
                                      children: (0, n.jsx)(u.A.Overlay, { className: A.h9, children: null }),
                                  }),
                          ],
                      }),
                  }),
              ],
          });
}
