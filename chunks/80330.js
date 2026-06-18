s.d(l, { A: () => x });
var a = s(627968),
    n = s(64700),
    i = s(503698),
    r = s.n(i),
    t = s(140735),
    c = s(707554),
    d = s(939249),
    u = s(946356),
    h = s(375708),
    o = s(827839);
function x(e) {
    let { renderCards: l, heading: s, onExpand: i } = e,
        x = n.useId(),
        v = n.useMemo(() => l({ className: o.Nr }), [l]),
        [j] = v;
    return 0 === v.length
        ? null
        : (0, a.jsxs)("section", {
              "aria-labelledby": null != s ? x : void 0,
              className: o.kL,
              children: [
                  null != s && (0, a.jsx)(t.A, { children: (0, a.jsx)(c.H, { id: x, children: s }) }),
                  (0, a.jsx)(c.F, {
                      children: (0, a.jsxs)("ul", {
                          className: r()(o.ML, v.length > 1 && o.Kr),
                          "aria-labelledby": null != s ? x : void 0,
                          tabIndex: -1,
                          children: [
                              (0, a.jsx)("li", { className: o.Us, children: j }),
                              v.length > 1 &&
                                  (0, a.jsx)(d.D, {
                                      tag: "li",
                                      className: o.Ee,
                                      onClick: i,
                                      "aria-label": h.intl.string(h.t["OBCR+p"]),
                                      children: (0, a.jsx)(u.A.Overlay, { className: o.h9, children: null }),
                                  }),
                          ],
                      }),
                  }),
              ],
          });
}
