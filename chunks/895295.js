n.d(t, { m: () => d });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(785007),
    u = n(834730),
    o = n(57066);
function c(e) {
    let { text: t } = e;
    return (0, l.jsx)(u.E, {
        tag: "span",
        variant: "eyebrow",
        color: "text-overlay-light",
        className: o.Fi,
        children: t,
    });
}
function d(e) {
    let { headingComponent: t, headingSubText: n, value: a, planRadioOptions: d, ...m } = e,
        x = r.useMemo(
            () =>
                null == d
                    ? []
                    : d.map((e) => {
                          let t = e.value === a,
                              n = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, l.jsxs)("div", {
                                  className: o.VH,
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: o.C2,
                                          children: [
                                              (0, l.jsx)(u.E, {
                                                  variant: "text-md/medium",
                                                  color: n,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, l.jsx)(c, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, l.jsxs)("div", {
                                          className: o.Cq,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: o.SS,
                                                  children: [
                                                      null != e.subTextStrikethrough &&
                                                          (0, l.jsx)(u.E, {
                                                              tag: "span",
                                                              variant: "text-md/medium",
                                                              color: "text-subtle",
                                                              className: o.fF,
                                                              children: e.subTextStrikethrough,
                                                          }),
                                                      (0, l.jsx)(u.E, {
                                                          tag: "span",
                                                          variant: "text-md/medium",
                                                          color: n,
                                                          children: e.subText,
                                                      }),
                                                  ],
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, l.jsx)(u.E, {
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
                              radioBarClassName: i()(o.tG, { [o.uA]: t }),
                          };
                      }),
            [d, a],
        );
    return (0, l.jsxs)("div", {
        children: [
            t,
            null != n &&
                (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", className: o.cm, children: n }),
            (0, l.jsx)(s.$d, { ...m, options: x, value: a, className: o.ul }),
        ],
    });
}
