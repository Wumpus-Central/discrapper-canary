n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(397927),
    c = n(954571),
    o = n(723702),
    d = n(652215),
    u = n(985018);
function A(e) {
    let t = l.useCallback(() => {
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
