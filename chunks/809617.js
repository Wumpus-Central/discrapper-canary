n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    i = n(397927),
    o = n(159083),
    a = n(189552),
    s = n(636670),
    c = n(985018),
    d = n(6561);
function u(e) {
    let { searchState: t } = e,
        n = l.useMemo(
            () => ({
                [a.IY.LOADING]: null,
                [a.IY.SUCCESS_STILL_INDEXING]: {
                    icon: (0, r.jsx)(o.A, {}),
                    message: c.intl.string(c.t.AXPbZr),
                },
                [a.IY.SUCCESS_EMPTY]: {
                    icon: (0, r.jsx)(s.A, {}),
                    message: c.intl.string(c.t.wdyR52),
                },
                [a.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: d.p,
              children: [
                  (0, r.jsx)("div", {
                      className: d.__invalid_noResultsIconContainer,
                      children: n.icon,
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: n.message,
                  }),
              ],
          });
}
