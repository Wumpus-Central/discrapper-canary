t.d(n, { Z: () => g });
var a = t(54381);
t(473749);
var i = t(481060),
    r = t(782568),
    l = t(168107),
    o = t(480916),
    c = t(81643),
    s = t(63063),
    d = t(430104),
    u = t(981631),
    b = t(388032),
    f = t(372881);
function p() {
    return (0, c.Jm)()
        ? b.intl.format(b.t.iWGjcg, {
              hook: (e) =>
                  (0, a.jsx)(i.Anchor, {
                      className: f.anchor,
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, r.Z)(s.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : b.intl.format(b.t.edpbxy, {
              hook: (e) =>
                  (0, a.jsx)(i.Anchor, {
                      className: f.anchor,
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              l.Z.showAgeVerificationGetStartedModal({ entryPoint: o.cU.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      style: { textDecoration: "underline" },
                      children: e.join(""),
                  }),
          });
}
function h(e) {
    let { className: n } = e,
        t = (0, c.Jm)();
    return (0, a.jsx)("div", {
        className: n,
        children: (0, a.jsx)(i.M14, {
            type: t ? "info" : "warning",
            children: (0, a.jsx)(p, {}),
        }),
    });
}
function m(e) {
    let { className: n } = e,
        t = (0, c.Jm)();
    return (0, a.jsx)("div", {
        className: n,
        children: (0, a.jsxs)(i.Kqy, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                t
                    ? (0, a.jsx)(i.d3s, { color: "var(--icon-feedback-info)" })
                    : (0, a.jsx)(i.aNP, { color: "var(--icon-feedback-warning)" }),
                (0, a.jsx)(i.Text, {
                    color: "text-default",
                    variant: "text-sm/medium",
                    children: (0, a.jsx)(p, {}),
                }),
            ],
        }),
    });
}
function g(e) {
    let { className: n, noBackground: t } = e;
    return (0, d.to)()
        ? (0, a.jsx)("div", {
              className: n,
              children: t ? (0, a.jsx)(m, {}) : (0, a.jsx)(h, {}),
          })
        : null;
}
