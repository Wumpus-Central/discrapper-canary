n.d(t, { A: () => d });
var o = n(627968);
n(64700);
var l = n(877624),
    a = n(459192),
    r = n(549996),
    i = n(807098);
function d(e) {
    let { children: t } = e,
        n = (0, r.c)(l.C.PREMIUM_TAB_TOOLTIP),
        d =
            null != n && "premiumTabTooltip" === n.properties.properties.oneofKind
                ? n.properties.properties.premiumTabTooltip
                : null,
        s = (0, i.T)(d?.asset);
    return null == d
        ? t
        : (0, o.jsx)(a.u, {
              title: d.header,
              body: d.body,
              asset: null != s ? (0, o.jsx)("img", { src: s, alt: "" }) : void 0,
              assetSize: 80,
              padding: "lg",
              position: "right",
              asContainer: !0,
              children: (0, o.jsx)("div", { children: t }),
          });
}
