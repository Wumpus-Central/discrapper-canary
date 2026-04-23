s.r(t), s.d(t, { default: () => p });
var i = s(627968),
    r = s(64700),
    l = s(827734),
    a = s(834730),
    n = s(825484),
    c = s(821609),
    o = s(538064),
    d = s(348639),
    u = s(972049),
    h = s(772958);
function p() {
    let [e, t] = r.useState(!1),
        s = (0, h.vX)(),
        { reporting: p } = d.A.useExperiment({ location: "be7a1c_1" }, { autoTrackExposure: !1 });
    return (r.useEffect(() => {
        if (p && e && null != s)
            return (
                s.forEach((e) => {
                    e.elements.forEach((e) => {
                        e.setAttribute(u.nY, "");
                    });
                }),
                () => {
                    s.forEach((e) => {
                        e.elements.forEach((e) => {
                            e.removeAttribute(u.nY);
                        });
                    });
                }
            );
    }, [s, p, e]),
    p && null != s && 0 !== s.length)
        ? (0, i.jsxs)("div", {
              style: {
                  backgroundColor: l.A.colors.BACKGROUND_FEEDBACK_CRITICAL.css,
                  color: l.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 12px",
              },
              children: [
                  (0, i.jsx)(a.E, {
                      variant: "text-sm/semibold",
                      color: "text-feedback-critical",
                      children: "Accessibility compliance issue(s) detected, check in-app DevTools",
                  }),
                  (0, i.jsxs)(n.e, {
                      direction: "horizontal",
                      size: "sm",
                      children: [
                          (0, i.jsx)(c.$, { text: "Open DevTools", onClick: o.pf, variant: "critical-secondary" }),
                          (0, i.jsx)(c.$, {
                              onClick: () => t(!e),
                              text: `${e ? "Hide" : "Show"} Overlays`,
                              variant: "critical-primary",
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
