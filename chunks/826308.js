l.d(e, { A: () => p });
var o = l(477900),
    t = l(582128),
    a = l(284009),
    c = l.n(a),
    s = l(477782),
    i = l(7689),
    d = l(174459),
    r = l(723702),
    u = l(652215),
    g = l(375708);
function p(n) {
    let e = t.useCallback(() => {
        c()(null != n, "text cannot be null"),
            d.default.track(u.HAw.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(`https://www.google.com/search?q=${encodeURIComponent(n)}`, "_blank");
    }, [n]);
    return r.isPlatformEmbedded && null != n && n?.length !== 0
        ? [
              (0, o.jsx)(
                  s.Dr,
                  {
                      id: "search-google",
                      label: g.intl.string(g.t["Rd/Mko"]),
                      leadingAccessory: { type: "icon", icon: i.MagnifyingGlassIcon },
                      action: e,
                  },
                  "search-google",
              ),
          ]
        : null;
}
