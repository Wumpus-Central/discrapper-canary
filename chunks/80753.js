i.r(t), i.d(t, { default: () => u }), i(388685);
var n = i(54381),
    r = i(473749),
    s = i(692547),
    c = i(481060),
    l = i(31336),
    o = i(481637),
    a = i(532810),
    d = i(915312);
function u() {
    let [e, t] = r.useState(!1),
        i = (0, d.LL)(),
        { reporting: u } = o.Z.useExperiment({ location: "be7a1c_1" }, { autoTrackExposure: !1 });
    return (r.useEffect(() => {
        if (u && e && null != i)
            return (
                i.forEach((e) => {
                    e.elements.forEach((e) => {
                        e.setAttribute(a.OF, "");
                    });
                }),
                () => {
                    i.forEach((e) => {
                        e.elements.forEach((e) => {
                            e.removeAttribute(a.OF);
                        });
                    });
                }
            );
    }, [i, u, e]),
    u && null != i && 0 !== i.length)
        ? (0, n.jsxs)("div", {
              style: {
                  backgroundColor: s.Z.colors.BACKGROUND_FEEDBACK_CRITICAL.css,
                  color: s.Z.colors.TEXT_FEEDBACK_CRITICAL.css,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 12px",
              },
              children: [
                  (0, n.jsx)(c.Text, {
                      variant: "text-sm/semibold",
                      color: "text-feedback-critical",
                      children: "Accessibility compliance issue(s) detected, check in-app DevTools",
                  }),
                  (0, n.jsxs)(c.ButtonGroup, {
                      direction: "horizontal",
                      size: "sm",
                      children: [
                          (0, n.jsx)(c.Button, {
                              text: "Open DevTools",
                              onClick: l.SO,
                              variant: "critical-secondary",
                          }),
                          (0, n.jsx)(c.Button, {
                              onClick: () => t(!e),
                              text: "".concat(e ? "Hide" : "Show", " Overlays"),
                              variant: "critical-primary",
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
