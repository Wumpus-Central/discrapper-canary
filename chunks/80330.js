r.d(t, { A: () => A });
var i = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    o = r(140735),
    c = r(707554),
    a = r(939249),
    u = r(946356),
    S = r(375708),
    d = r(602751);
function A(e) {
    let { renderCards: t, heading: r, onExpand: l } = e,
        A = n.useId(),
        v = n.useMemo(() => t({ className: d.Nr }), [t]),
        [h] = v;
    return 0 === v.length
        ? null
        : (0, i.jsxs)("section", {
              "aria-labelledby": null != r ? A : void 0,
              className: d.kL,
              children: [
                  null != r && (0, i.jsx)(o.A, { children: (0, i.jsx)(c.H, { id: A, children: r }) }),
                  (0, i.jsx)(c.F, {
                      children: (0, i.jsxs)("ul", {
                          className: s()(d.ML, v.length > 1 && d.Kr),
                          "aria-labelledby": null != r ? A : void 0,
                          tabIndex: -1,
                          children: [
                              (0, i.jsx)("li", { className: d.Us, children: h }),
                              v.length > 1 &&
                                  (0, i.jsx)(a.D, {
                                      tag: "li",
                                      className: d.Ee,
                                      onClick: l,
                                      "aria-label": S.intl.string(S.t["OBCR+p"]),
                                      children: (0, i.jsx)(u.A.Overlay, { className: d.h9, children: null }),
                                  }),
                          ],
                      }),
                  }),
              ],
          });
}
