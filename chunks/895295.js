l.d(t, { m: () => o });
var s = l(627968),
    n = l(64700),
    a = l(503698),
    r = l.n(a),
    i = l(785007),
    d = l(834730),
    c = l(318626);
function u(e) {
    let { text: t } = e;
    return (0, s.jsx)(d.E, { tag: "span", variant: "eyebrow", color: "always-white", className: c.Fi, children: t });
}
function o(e) {
    let { headingComponent: t, headingSubText: l, value: a, planRadioOptions: o, ...m } = e,
        x = n.useMemo(
            () =>
                null == o
                    ? []
                    : o.map((e) => {
                          let t = e.value === a,
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
                              radioBarClassName: r()(c.tG, { [c.uA]: t }),
                          };
                      }),
            [o, a],
        );
    return (0, s.jsxs)("div", {
        children: [
            t,
            null != l &&
                (0, s.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: c.cm, children: l }),
            (0, s.jsx)(i.$d, { ...m, options: x, value: a, className: c.ul }),
        ],
    });
}
