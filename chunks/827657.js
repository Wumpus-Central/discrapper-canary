n.d(t, {
    Z: function () {
        return m;
    }
});
var l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(481060),
    s = n(994463),
    c = n(472596),
    C = n(918192),
    d = n(388032),
    u = n(720703);
function m(e) {
    let { searchState: t } = e,
        n = o.useMemo(
            () => ({
                [c.po.LOADING]: null,
                [c.po.SUCCESS_STILL_INDEXING]: {
                    icon: (0, l.jsx)(s.Z, {}),
                    message: d.intl.string(d.t.AXPbZm)
                },
                [c.po.SUCCESS_EMPTY]: {
                    icon: (0, l.jsx)(C.Z, {}),
                    message: d.intl.string(d.t['wdyR5+'])
                },
                [c.po.SUCCESS_FULL]: null
            }),
            []
        )[t];
    return null == n
        ? null
        : (0, l.jsxs)('div', {
              className: a()(u.noResultsContainer),
              children: [
                  (0, l.jsx)('div', {
                      className: a()(u.__invalid_noResultsIconContainer),
                      children: n.icon
                  }),
                  (0, l.jsx)(r.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: n.message
                  })
              ]
          });
}
