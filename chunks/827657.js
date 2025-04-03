n.d(t, { Z: () => d });
var r = n(200651),
    l = n(192379),
    o = n(481060),
    a = n(994463),
    i = n(472596),
    s = n(918192),
    c = n(388032),
    u = n(128863);
function d(e) {
    let { searchState: t } = e,
        n = l.useMemo(
            () => ({
                [i.po.LOADING]: null,
                [i.po.SUCCESS_STILL_INDEXING]: {
                    icon: (0, r.jsx)(a.Z, {}),
                    message: c.NW.string(c.t.AXPbZm)
                },
                [i.po.SUCCESS_EMPTY]: {
                    icon: (0, r.jsx)(s.Z, {}),
                    message: c.NW.string(c.t['wdyR5+'])
                },
                [i.po.SUCCESS_FULL]: null
            }),
            []
        )[t];
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: u.noResultsContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: u.__invalid_noResultsIconContainer,
                      children: n.icon
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: n.message
                  })
              ]
          });
}
