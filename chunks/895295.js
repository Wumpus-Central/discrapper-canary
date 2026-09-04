l.d(t, { m: () => d });
var n = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
    a = l(785007),
    u = l(834730),
    c = l(517837);
function o(e) {
    let { text: t } = e;
    return (0, n.jsx)(u.E, {
        tag: "span",
        variant: "eyebrow",
        color: "text-overlay-light",
        className: c.Fi,
        children: t,
    });
}
function d(e) {
    let { headingComponent: t, headingSubText: l, value: i, planRadioOptions: d, ...m } = e,
        x = r.useMemo(
            () =>
                null == d
                    ? []
                    : d.map((e) => {
                          let t = e.value === i,
                              l = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, n.jsxs)("div", {
                                  className: c.VH,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: c.C2,
                                          children: [
                                              (0, n.jsx)(u.E, {
                                                  variant: "text-md/medium",
                                                  color: l,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, n.jsx)(o, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: c.Cq,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: c.SS,
                                                  children: [
                                                      null != e.subTextStrikethrough &&
                                                          (0, n.jsx)(u.E, {
                                                              tag: "span",
                                                              variant: "text-md/medium",
                                                              color: "text-subtle",
                                                              className: c.fF,
                                                              children: e.subTextStrikethrough,
                                                          }),
                                                      (0, n.jsx)(u.E, {
                                                          tag: "span",
                                                          variant: "text-md/medium",
                                                          color: l,
                                                          children: e.subText,
                                                      }),
                                                  ],
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, n.jsx)(u.E, {
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
                              radioBarClassName: s()(c.tG, { [c.uA]: t }),
                          };
                      }),
            [d, i],
        );
    return (0, n.jsxs)("div", {
        children: [
            t,
            null != l &&
                (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", className: c.cm, children: l }),
            (0, n.jsx)(a.$d, { ...m, options: x, value: i, className: c.ul }),
        ],
    });
}
