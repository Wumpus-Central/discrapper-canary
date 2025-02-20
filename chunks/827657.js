n.d(t, { Z: () => m });
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(481060),
    s = n(994463),
    c = n(472596),
    u = n(918192),
    d = n(388032),
    C = n(720769);
function m(e) {
    let { searchState: t } = e,
        n = l.useMemo(
            () => ({
                [c.po.LOADING]: null,
                [c.po.SUCCESS_STILL_INDEXING]: {
                    icon: (0, r.jsx)(s.Z, {}),
                    message: d.NW.string(d.t.AXPbZm)
                },
                [c.po.SUCCESS_EMPTY]: {
                    icon: (0, r.jsx)(u.Z, {}),
                    message: d.NW.string(d.t['wdyR5+'])
                },
                [c.po.SUCCESS_FULL]: null
            }),
            []
        )[t];
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: a()(C.noResultsContainer),
              children: [
                  (0, r.jsx)('div', {
                      className: a()(C.__invalid_noResultsIconContainer),
                      children: n.icon
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: n.message
                  })
              ]
          });
}
