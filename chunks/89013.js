t.d(n, {
    Z: function () {
        return g;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(512722),
    a = t.n(r),
    o = t(481060),
    s = t(626135),
    u = t(358085),
    d = t(981631),
    c = t(388032);
function g(e) {
    let n = l.useCallback(() => {
        a()(null != e, 'text cannot be null'), s.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open('https://www.google.com/search?q='.concat(encodeURIComponent(e)), '_blank');
    }, [e]);
    return u.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0
        ? [
              (0, i.jsx)(
                  o.MenuItem,
                  {
                      id: 'search-google',
                      label: c.intl.string(c.t['Rd/Mkp']),
                      action: n
                  },
                  'search-google'
              )
          ]
        : null;
}
