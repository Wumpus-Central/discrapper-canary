a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(534514),
    s = a(939249),
    r = a(834730),
    o = a(412461),
    c = a(310419),
    d = a(656106),
    u = a(652215),
    h = a(985018),
    m = a(49461);
function p(e) {
    let { application: t, className: a } = e,
        p = l.useCallback((e) => {
            (0, o.TR)(u.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: c.ev.APPLICATION,
            }),
                (0, d.JX)({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, n.jsxs)("div", {
              className: a,
              children: [
                  (0, n.jsx)(i.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: h.intl.string(h.t.s7iald),
                  }),
                  (0, n.jsx)("div", {
                      className: m.L,
                      children: t.categories.map((e) =>
                          (0, n.jsx)(
                              s.D,
                              {
                                  className: m.c,
                                  onClick: () => p(e),
                                  children: (0, n.jsx)(r.E, {
                                      variant: "text-sm/semibold",
                                      color: "redesign-button-tertiary-text",
                                      children: e.name,
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
