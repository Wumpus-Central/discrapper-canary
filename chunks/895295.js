l.d(t, { m: () => o });
var s = l(627968),
    a = l(64700),
    n = l(503698),
    i = l.n(n),
    r = l(785007),
    d = l(834730),
    c = l(318626);
let u = (e) => {
    let { text: t } = e;
    return (0, s.jsx)(d.E, { tag: "span", variant: "eyebrow", color: "always-white", className: c.Fi, children: t });
};
function o(e) {
    let { headingComponent: t, headingSubText: l, value: n, planRadioOptions: o, ...m } = e,
        x = a.useMemo(
            () =>
                null == o
                    ? []
                    : o.map((e) => {
                          let t = e.value === n,
                              l = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, s.jsxs)("div", {
                                  className: c.VH,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: c.C2,
                                          children: [
                                              (0, s.jsx)(d.E, {
                                                  variant: "text-md/medium",
                                                  color: l,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, s.jsx)(u, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, s.jsxs)("div", {
                                          className: c.Cq,
                                          children: [
                                              (0, s.jsxs)("div", {
                                                  className: c.SS,
                                                  children: [
                                                      null != e.subTextStrikethrough &&
                                                          (0, s.jsx)(d.E, {
                                                              tag: "span",
                                                              variant: "text-md/medium",
                                                              color: "text-subtle",
                                                              className: c.fF,
                                                              children: e.subTextStrikethrough,
                                                          }),
                                                      (0, s.jsx)(d.E, {
                                                          tag: "span",
                                                          variant: "text-md/medium",
                                                          color: l,
                                                          children: e.subText,
                                                      }),
                                                  ],
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, s.jsx)(d.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-subtle",
                                                      children: e.secondarySubText,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              value: e.value,
                              disabled: e.isDisabled,
                              radioBarClassName: i()(c.tG, { [c.uA]: t }),
                          };
                      }),
            [o, n],
        );
    return (0, s.jsxs)("div", {
        children: [
            t,
            null != l &&
                (0, s.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: c.cm, children: l }),
            (0, s.jsx)(r.$d, { ...m, options: x, value: n, className: c.ul }),
        ],
    });
}
