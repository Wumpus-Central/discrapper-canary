n.d(t, { Z: () => E });
var i = n(255367),
    l = n(73800),
    r = n(512722),
    s = n.n(r),
    a = n(481060),
    o = n(626135),
    u = n(358085),
    c = n(981631),
    d = n(388032);
function E(e) {
    let t = l.useCallback(() => {
        s()(null != e, "text cannot be null"),
            o.default.track(c.rMx.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank");
    }, [e]);
    return u.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0
        ? [
              (0, i.jsx)(
                  a.sNh,
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
