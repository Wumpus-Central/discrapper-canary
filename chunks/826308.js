n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(397927),
    o = n(954571),
    u = n(723702),
    c = n(652215),
    d = n(985018);
function E(e) {
    let t = l.useCallback(() => {
        s()(null != e, "text cannot be null"),
            o.default.track(c.HAw.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank");
    }, [e]);
    return u.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0
        ? [
              (0, i.jsx)(
                  a.Drp,
                  {
                      id: "search-google",
                      label: d.intl.string(d.t["Rd/Mko"]),
                      action: t,
                  },
                  "search-google",
              ),
          ]
        : null;
}
