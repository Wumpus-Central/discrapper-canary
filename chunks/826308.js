n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(397927),
    c = n(954571),
    o = n(723702),
    d = n(652215),
    u = n(985018);
function E(e) {
    let t = s.useCallback(() => {
        r()(null != e, "text cannot be null"),
            c.default.track(d.HAw.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(`https://www.google.com/search?q=${encodeURIComponent(e)}`, "_blank");
    }, [e]);
    return o.isPlatformEmbedded && null != e && e?.length !== 0
        ? [
              (0, i.jsx)(
                  a.Drp,
                  {
                      id: "search-google",
                      label: u.intl.string(u.t["Rd/Mko"]),
                      leadingAccessory: { type: "icon", icon: a.$p$ },
                      action: t,
                  },
                  "search-google",
              ),
          ]
        : null;
}
