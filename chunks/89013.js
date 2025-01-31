n.d(t, { Z: () => g });
var i = n(200651),
    l = n(192379),
    a = n(512722),
    s = n.n(a),
    r = n(481060),
    o = n(626135),
    d = n(358085),
    c = n(981631),
    u = n(388032);
function g(e) {
    let t = l.useCallback(() => {
        s()(null != e, 'text cannot be null'), o.default.track(c.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open('https://www.google.com/search?q='.concat(encodeURIComponent(e)), '_blank');
    }, [e]);
    return d.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0
        ? [
              (0, i.jsx)(
                  r.sNh,
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
