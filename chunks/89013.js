l.d(t, { Z: () => h });
var e = l(951288),
    o = l(647438),
    a = l(512722),
    c = l.n(a),
    i = l(481060),
    s = l(626135),
    r = l(358085),
    d = l(981631),
    u = l(388032);
function h(n) {
    let t = o.useCallback(() => {
        c()(null != n, "text cannot be null"),
            s.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open("https://www.google.com/search?q=".concat(encodeURIComponent(n)), "_blank");
    }, [n]);
    return r.isPlatformEmbedded && null != n && (null == n ? void 0 : n.length) !== 0
        ? [
              (0, e.jsx)(
                  i.sNh,
                  {
                      id: "search-google",
                      label: u.intl.string(u.t["Rd/Mkp"]),
                      action: t,
                  },
                  "search-google",
              ),
          ]
        : null;
}
