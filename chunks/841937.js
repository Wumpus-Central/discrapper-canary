n.d(t, { A: () => C });
var l = n(627968);
n(64700);
var i = n(349288),
    s = n(683071),
    r = n(331322),
    a = n(885574),
    d = n(738188),
    o = n(834730),
    c = n(404778),
    u = n(975807),
    x = n(935649),
    h = n(847599),
    m = n(36149),
    g = n(975571),
    v = n(418208),
    j = n(652215),
    A = n(985018);
function E() {
    return (0, m.yM)()
        ? A.intl.format(A.t.iWGjcg, {
              hook: (e) =>
                  (0, l.jsx)(i.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, u.A)(g.A.getArticleURL(j.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : A.intl.format(A.t.edpbxy, {
              hook: (e) =>
                  (0, l.jsx)(i.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              x.A.showAgeVerificationGetStartedModal({ entryPoint: h.q1.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function p(e) {
    let { className: t } = e,
        n = (0, m.yM)();
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(s.w, { type: n ? "info" : "warning", children: (0, l.jsx)(E, {}) }),
    });
}
function N(e) {
    let { className: t } = e,
        n = (0, m.yM)();
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)(r.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                n
                    ? (0, l.jsx)(a.m, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, l.jsx)(d.i, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, l.jsx)(o.E, { color: "text-default", variant: "text-sm/medium", children: (0, l.jsx)(E, {}) }),
            ],
        }),
    });
}
function C(e) {
    let { className: t, noBackground: n, divider: i } = e;
    if (!(0, v.PI)()) return null;
    let s = Array.isArray(i) ? i : null != i ? [i] : [];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            s.includes(0) && (0, l.jsx)(c.c, { gap: 16 }),
            (0, l.jsx)("div", { className: t, children: n ? (0, l.jsx)(N, {}) : (0, l.jsx)(p, {}) }),
            s?.includes(1) && (0, l.jsx)(c.c, { gap: 16 }),
        ],
    });
}
