n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(412461),
    s = n(310419),
    c = n(656106),
    o = n(652215),
    d = n(985018),
    u = n(101386);
function p(e) {
    let { application: t, className: n } = e,
        p = a.useCallback((e) => {
            (0, i.TR)(o.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: s.ev.APPLICATION,
            }),
                (0, c.JX)({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, l.jsxs)("div", {
              className: n,
              children: [
                  (0, l.jsx)(r.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: d.intl.string(d.t.s7iald),
                  }),
                  (0, l.jsx)("div", {
                      className: u.L,
                      children: t.categories.map((e) =>
                          (0, l.jsx)(
                              r.DUT,
                              {
                                  className: u.c,
                                  onClick: () => p(e),
                                  children: (0, l.jsx)(r.Text, {
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
