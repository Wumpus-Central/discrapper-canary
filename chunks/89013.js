n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(481060),
    l = n(626135),
    c = n(358085),
    u = n(981631),
    d = n(388032);
function f(e) {
    let t = i.useCallback(() => {
        a()(null != e, "text cannot be null"),
            l.default.track(u.rMx.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank");
    }, [e]);
    return c.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0
        ? [
              (0, r.jsx)(
                  s.sNh,
                  {
                      id: "search-google",
                      label: d.intl.string(d.t["Rd/Mkp"]),
                      action: t,
                  },
                  "search-google",
              ),
          ]
        : null;
}
