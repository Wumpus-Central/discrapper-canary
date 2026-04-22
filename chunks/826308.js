n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(477782),
    c = n(7689),
    o = n(954571),
    d = n(723702),
    u = n(652215),
    E = n(985018);
function A(e) {
    let t = s.useCallback(() => {
        r()(null != e, "text cannot be null"),
            o.default.track(u.HAw.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(`https://www.google.com/search?q=${encodeURIComponent(e)}`, "_blank");
    }, [e]);
    return d.isPlatformEmbedded && null != e && e?.length !== 0
        ? [
              (0, i.jsx)(
                  a.Dr,
                  {
                      id: "search-google",
                      label: E.intl.string(E.t["Rd/Mko"]),
                      leadingAccessory: { type: "icon", icon: c.$ },
                      action: t,
                  },
                  "search-google",
              ),
          ]
        : null;
}
