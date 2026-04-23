l.d(t, { A: () => N });
var n = l(627968);
l(64700);
var i = l(349288),
    s = l(683071),
    a = l(331322),
    r = l(885574),
    d = l(738188),
    o = l(834730),
    c = l(404778),
    u = l(975807),
    x = l(935649),
    h = l(847599),
    m = l(36149),
    g = l(975571),
    v = l(418208),
    j = l(652215),
    A = l(985018);
function E() {
    return (0, m.yM)()
        ? A.intl.format(A.t.iWGjcg, {
              hook: (e) =>
                  (0, n.jsx)(i.Anchor, {
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
                  (0, n.jsx)(i.Anchor, {
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
        l = (0, m.yM)();
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(s.w, { type: l ? "info" : "warning", children: (0, n.jsx)(E, {}) }),
    });
}
function f(e) {
    let { className: t } = e,
        l = (0, m.yM)();
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsxs)(a.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                l
                    ? (0, n.jsx)(r.m, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, n.jsx)(d.i, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, n.jsx)(o.E, { color: "text-default", variant: "text-sm/medium", children: (0, n.jsx)(E, {}) }),
            ],
        }),
    });
}
function N(e) {
    let { className: t, noBackground: l, divider: i } = e;
    if (!(0, v.PI)()) return null;
    let s = Array.isArray(i) ? i : null != i ? [i] : [];
    return (0, n.jsxs)(n.Fragment, {
        children: [
            s.includes(0) && (0, n.jsx)(c.c, { gap: 16 }),
            (0, n.jsx)("div", { className: t, children: l ? (0, n.jsx)(f, {}) : (0, n.jsx)(p, {}) }),
            s?.includes(1) && (0, n.jsx)(c.c, { gap: 16 }),
        ],
    });
}
