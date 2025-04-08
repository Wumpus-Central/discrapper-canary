n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    a = n(512722),
    l = n.n(a),
    o = n(481060),
    s = n(626135),
    c = n(358085),
    u = n(981631),
    d = n(388032);
function f(e) {
    let t = i.useCallback(() => {
        l()(null != e, 'text cannot be null'), s.default.track(u.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open('https://www.google.com/search?q='.concat(encodeURIComponent(e)), '_blank');
    }, [e]);
    return c.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0
        ? [
              (0, r.jsx)(
                  o.sNh,
                  {
                      id: 'search-google',
                      label: d.NW.string(d.t['Rd/Mkp']),
                      action: t
                  },
                  'search-google'
              )
          ]
        : null;
}
