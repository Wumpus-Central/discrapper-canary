n.d(t, { Z: () => d });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(994463),
    a = n(472596),
    s = n(918192),
    c = n(388032),
    u = n(419342);
function d(e) {
    let { searchState: t } = e,
        n = l.useMemo(
            () => ({
                [a.po.LOADING]: null,
                [a.po.SUCCESS_STILL_INDEXING]: {
                    icon: (0, r.jsx)(o.Z, {}),
                    message: c.intl.string(c.t.AXPbZr),
                },
                [a.po.SUCCESS_EMPTY]: {
                    icon: (0, r.jsx)(s.Z, {}),
                    message: c.intl.string(c.t.wdyR52),
                },
                [a.po.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: u.noResultsContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: u.__invalid_noResultsIconContainer,
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
