i.r(t),
    i.d(t, {
        default: () => u,
    }),
    i(896048);
var n = i(627968),
    r = i(64700),
    s = i(827734),
    c = i(397927),
    l = i(538064),
    o = i(348639),
    a = i(972049),
    d = i(772958);

function u() {
    let [e, t] = r.useState(!1),
        i = (0, d.vX)(),
        { reporting: u } = o.A.useExperiment(
            {
                location: "be7a1c_1",
            },
            {
                autoTrackExposure: !1,
            },
        );
    return (r.useEffect(() => {
        if (u && e && null != i)
            return (
                i.forEach((e) => {
                    e.elements.forEach((e) => {
                        e.setAttribute(a.nY, "");
                    });
                }),
                () => {
                    i.forEach((e) => {
                        e.elements.forEach((e) => {
                            e.removeAttribute(a.nY);
                        });
                    });
                }
            );
    }, [i, u, e]),
    u && null != i && 0 !== i.length)
        ? (0, n.jsxs)("div", {
              style: {
                  backgroundColor: s.A.colors.BACKGROUND_FEEDBACK_CRITICAL.css,
                  color: s.A.colors.TEXT_FEEDBACK_CRITICAL.css,
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
                              onClick: l.pf,
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
