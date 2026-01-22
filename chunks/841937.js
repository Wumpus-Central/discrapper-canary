n.d(t, {
    A: () => j,
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(975807),
    s = n(935649),
    a = n(847599),
    o = n(36149),
    c = n(975571),
    u = n(418208),
    d = n(652215),
    x = n(985018);

function g() {
    return (0, o.yM)()
        ? x.intl.format(x.t.iWGjcg, {
              hook: (e) =>
                  (0, l.jsx)(r.MzZ, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, i.A)(c.A.getArticleURL(d.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : x.intl.format(x.t.edpbxy, {
              hook: (e) =>
                  (0, l.jsx)(r.MzZ, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              s.A.showAgeVerificationGetStartedModal({
                                  entryPoint: a.q1.START_STAGE_PROMPT,
                              });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}

function m(e) {
    let { className: t } = e,
        n = (0, o.yM)();
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(r.wx6, {
            type: n ? "info" : "warning",
            children: (0, l.jsx)(g, {}),
        }),
    });
}

function h(e) {
    let { className: t } = e,
        n = (0, o.yM)();
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)(r.BJc, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                n
                    ? (0, l.jsx)(r.mir, {
                          size: "refresh_sm",
                          color: "var(--text-default)",
                      })
                    : (0, l.jsx)(r.id, {
                          size: "refresh_sm",
                          color: "var(--text-default)",
                      }),
                (0, l.jsx)(r.Text, {
                    color: "text-default",
                    variant: "text-sm/medium",
                    children: (0, l.jsx)(g, {}),
                }),
            ],
        }),
    });
}

function j(e) {
    let { className: t, noBackground: n, divider: i } = e;
    if (!(0, u.PI)()) return null;
    let s = Array.isArray(i) ? i : null != i ? [i] : [];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            s.includes(0) &&
                (0, l.jsx)(r.cGx, {
                    gap: 16,
                }),
            (0, l.jsx)("div", {
                className: t,
                children: n ? (0, l.jsx)(h, {}) : (0, l.jsx)(m, {}),
            }),
            (null == s ? void 0 : s.includes(1)) &&
                (0, l.jsx)(r.cGx, {
                    gap: 16,
                }),
        ],
    });
}
