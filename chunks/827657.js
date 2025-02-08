l.d(t, { Z: () => m });
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(481060),
    r = l(994463),
    c = l(472596),
    d = l(918192),
    C = l(388032),
    u = l(720703);
function m(e) {
    let { searchState: t } = e,
        l = a.useMemo(
            () => ({
                [c.po.LOADING]: null,
                [c.po.SUCCESS_STILL_INDEXING]: {
                    icon: (0, n.jsx)(r.Z, {}),
                    message: C.intl.string(C.t.AXPbZm)
                },
                [c.po.SUCCESS_EMPTY]: {
                    icon: (0, n.jsx)(d.Z, {}),
                    message: C.intl.string(C.t['wdyR5+'])
                },
                [c.po.SUCCESS_FULL]: null
            }),
            []
        )[t];
    return null == l
        ? null
        : (0, n.jsxs)('div', {
              className: o()(u.noResultsContainer),
              children: [
                  (0, n.jsx)('div', {
                      className: o()(u.__invalid_noResultsIconContainer),
                      children: l.icon
                  }),
                  (0, n.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: l.message
                  })
              ]
          });
}
