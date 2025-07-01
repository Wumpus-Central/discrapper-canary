n.d(t, { Z: () => g });
var i = n(255367),
    l = n(73800),
    r = n(512722),
    s = n.n(r),
    a = n(481060),
    o = n(626135),
    c = n(358085),
    d = n(981631),
    u = n(388032);
function g(e) {
    let t = l.useCallback(() => {
        (s()(null != e, 'text cannot be null'), o.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open('https://www.google.com/search?q='.concat(encodeURIComponent(e)), '_blank'));
    }, [e]);
    return c.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0
        ? [
              (0, i.jsx)(
                  a.sNh,
                  {
                      id: 'search-google',
                      label: u.intl.string(u.t['Rd/Mkp']),
                      action: t
                  },
                  'search-google'
              )
          ]
        : null;
}
