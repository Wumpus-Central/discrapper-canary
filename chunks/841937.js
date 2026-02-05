n.d(t, { A: () => v });
var l = n(627968);
n(64700);
var i = n(397927),
    s = n(975807),
    a = n(935649),
    r = n(847599),
    d = n(36149),
    c = n(975571),
    o = n(418208),
    u = n(652215),
    x = n(985018);
function h() {
    return (0, d.yM)()
        ? x.intl.format(x.t.iWGjcg, {
              hook: (e) =>
                  (0, l.jsx)(i.MzZ, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, s.A)(c.A.getArticleURL(u.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : x.intl.format(x.t.edpbxy, {
              hook: (e) =>
                  (0, l.jsx)(i.MzZ, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              a.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function m(e) {
    let { className: t } = e,
        n = (0, d.yM)();
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(i.wx6, { type: n ? "info" : "warning", children: (0, l.jsx)(h, {}) }),
    });
}
function g(e) {
    let { className: t } = e,
        n = (0, d.yM)();
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)(i.BJc, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                n
                    ? (0, l.jsx)(i.mir, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, l.jsx)(i.id, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, l.jsx)(i.Text, { color: "text-default", variant: "text-sm/medium", children: (0, l.jsx)(h, {}) }),
            ],
        }),
    });
}
function v(e) {
    let { className: t, noBackground: n, divider: s } = e;
    if (!(0, o.PI)()) return null;
    let a = Array.isArray(s) ? s : null != s ? [s] : [];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a.includes(0) && (0, l.jsx)(i.cGx, { gap: 16 }),
            (0, l.jsx)("div", { className: t, children: n ? (0, l.jsx)(g, {}) : (0, l.jsx)(m, {}) }),
            a?.includes(1) && (0, l.jsx)(i.cGx, { gap: 16 }),
        ],
    });
}
