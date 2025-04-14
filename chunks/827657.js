n.d(t, { Z: () => C });
var r = n(200651),
    l = n(192379),
    o = n(481060),
    i = n(994463),
    a = n(472596),
    s = n(918192),
    c = n(388032),
    u = n(128863);
function C(e) {
    let { searchState: t } = e,
        n = l.useMemo(
            () => ({
                [a.po.LOADING]: null,
                [a.po.SUCCESS_STILL_INDEXING]: {
                    icon: (0, r.jsx)(i.Z, {}),
                    message: c.NW.string(c.t.AXPbZm)
                },
                [a.po.SUCCESS_EMPTY]: {
                    icon: (0, r.jsx)(s.Z, {}),
                    message: c.NW.string(c.t['wdyR5+'])
                },
                [a.po.SUCCESS_FULL]: null
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
