i.r(t), i.d(t, { default: () => p }), i(388685);
var l = i(54381),
    s = i(473749),
    n = i(692547),
    o = i(755721),
    r = i(481060),
    c = i(31336),
    a = i(481637),
    d = i(532810),
    u = i(915312);
function p() {
    let [e, t] = s.useState(!1),
        i = (0, u.LL)(),
        { reporting: p } = a.Z.useExperiment({ location: "be7a1c_1" }, { autoTrackExposure: !1 });
    return (s.useEffect(() => {
        if (p && e && null != i)
            return (
                i.forEach((e) => {
                    e.elements.forEach((e) => {
                        e.setAttribute(d.OF, "");
                    });
                }),
                () => {
                    i.forEach((e) => {
                        e.elements.forEach((e) => {
                            e.removeAttribute(d.OF);
                        });
                    });
                }
            );
    }, [i, p, e]),
    p && null != i && 0 !== i.length)
        ? (0, l.jsxs)("div", {
              style: {
                  backgroundColor: n.Z.colors.BACKGROUND_FEEDBACK_CRITICAL.css,
                  color: n.Z.colors.TEXT_FEEDBACK_CRITICAL.css,
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 12px",
              },
              children: [
                  (0, l.jsx)(r.Text, {
                      variant: "text-sm/semibold",
                      color: "text-feedback-critical",
                      children: "Accessibility compliance issue(s) detected, check in-app DevTools",
                  }),
                  (0, l.jsxs)("div", {
                      style: {
                          display: "grid",
                          gridAutoFlow: "column",
                          gap: 4,
                          marginLeft: "auto",
                      },
                      children: [
                          (0, l.jsx)(o.zx, {
                              size: o.zx.Sizes.TINY,
                              color: o.zx.Colors.RED,
                              style: { marginLeft: "auto" },
                              onClick: c.SO,
                              children: "Open DevTools",
                          }),
                          (0, l.jsxs)(o.zx, {
                              size: o.zx.Sizes.TINY,
                              color: o.zx.Colors.RED,
                              style: { marginLeft: "auto" },
                              onClick: () => t(!e),
                              children: [e ? "Hide" : "Show", " Overlays"],
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
