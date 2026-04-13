n.d(t, { A: () => _, P: () => h }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    r = n(284009),
    l = n.n(r),
    a = n(477450),
    c = n.n(a),
    o = n(311907),
    d = n(397927),
    u = n(964404),
    E = n(954571),
    A = n(723702),
    p = n(998218),
    m = n(652215),
    f = n(355097),
    g = n(985018);
let D = {
    [f.YL.GOOGLE]: "https://www.google.com/search?q=",
    [f.YL.BING]: "https://www.bing.com/search?q=",
    [f.YL.DUCKDUCKGO]: "https://duckduckgo.com/?q=",
};
function h(e) {
    let t;
    if (1 != e.split("%s").length - 1) return !1;
    let n = e.replace("%s", "");
    try {
        if (((t = new URL(n)), "https:" !== t.protocol)) return !1;
    } catch {
        return !1;
    }
    let { hostname: i } = t;
    return (
        !("localhost" === i || c()({ exact: !0 }).test(i) || !i.includes(".") || e.indexOf("%s") <= t.origin.length) &&
        !p.A.isDiscordUrl(n, !0)
    );
}
function _(e) {
    let t = (0, o.bG)([u.Ay], () => u.Ay.searchProvider),
        n = (0, o.bG)([u.Ay], () => u.Ay.customSearchUrl),
        r = s.useCallback(() => {
            l()(null != e, "text cannot be null"),
                E.default.track(m.HAw.MESSAGE_MENU_GOOGLE_SEARCHED),
                window.open(
                    (function (e, t, n) {
                        let i = encodeURIComponent(n);
                        if (e === f.YL.CUSTOM && h(t)) return t.replace("%s", i);
                        let s = D[e] ?? D[f.YL.GOOGLE];
                        return `${s}${i}`;
                    })(t, n, e),
                    "_blank",
                );
        }, [e, t, n]);
    return A.isPlatformEmbedded && null != e && e?.length !== 0
        ? [
              (0, i.jsx)(
                  d.Drp,
                  {
                      id: "search-web",
                      label: (function (e) {
                          switch (e) {
                              case f.YL.BING:
                                  return g.intl.string(g.t.Cdkg1s);
                              case f.YL.DUCKDUCKGO:
                                  return g.intl.string(g.t["3MXgwN"]);
                              case f.YL.CUSTOM:
                                  return g.intl.string(g.t.YHykMS);
                              default:
                                  return g.intl.string(g.t["Rd/Mko"]);
                          }
                      })(t),
                      leadingAccessory: { type: "icon", icon: d.$p$ },
                      action: r,
                  },
                  "search-web",
              ),
          ]
        : null;
}
