t.d(n, { Z: () => m });
var a = t(54381);
t(473749);
var i = t(481060),
    r = t(782568),
    l = t(168107),
    o = t(480916),
    c = t(81643),
    d = t(63063),
    s = t(430104),
    u = t(981631),
    b = t(388032);
function f() {
    return (0, c.Jm)()
        ? b.intl.format(b.t.iWGjcg, {
              hook: (e) =>
                  (0, a.jsx)(i.eee, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, r.Z)(d.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : b.intl.format(b.t.edpbxy, {
              hook: (e) =>
                  (0, a.jsx)(i.eee, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              l.Z.showAgeVerificationGetStartedModal({ entryPoint: o.cU.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
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
            children: (0, a.jsx)(f, {}),
        }),
    });
}
function p(e) {
    let { className: n } = e,
        t = (0, c.Jm)();
    return (0, a.jsx)("div", {
        className: n,
        children: (0, a.jsxs)(i.Kqy, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                t
                    ? (0, a.jsx)(i.d3s, {
                          size: "refresh_sm",
                          color: "var(--text-default)",
                      })
                    : (0, a.jsx)(i.aNP, {
                          size: "refresh_sm",
                          color: "var(--text-default)",
                      }),
                (0, a.jsx)(i.Text, {
                    color: "text-default",
                    variant: "text-sm/medium",
                    children: (0, a.jsx)(f, {}),
                }),
            ],
        }),
    });
}
function m(e) {
    let { className: n, noBackground: t, divider: r } = e;
    return (0, s.to)()
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)("div", {
                      className: n,
                      children: t ? (0, a.jsx)(p, {}) : (0, a.jsx)(h, {}),
                  }),
                  r && (0, a.jsx)(i.izJ, { gap: 16 }),
              ],
          })
        : null;
}
