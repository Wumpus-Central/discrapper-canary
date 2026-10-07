n.d(t, { A: () => u });
var o = n(477900);
n(582128);
var l = n(877624),
    a = n(683063),
    r = n(549996),
    i = n(807098),
    d = n(92551),
    s = n(660183);
function u(e) {
    let { children: t } = e,
        n = (0, r.c)(l.C.PREMIUM_TAB_TOOLTIP),
        u =
            null != n && "premiumTabTooltip" === n.properties.properties.oneofKind
                ? n.properties.properties.premiumTabTooltip
                : null,
        p = (0, i.T)(u?.asset);
    if (null == u || null == n) return t;
    let c = n.getFormatVariableValues(s.intl.currentLocale),
        b = (0, d.d)(u.body, c);
    if (!b.ok) return t;
    let m = (0, d.d)(u.header, c);
    return m.ok
        ? (0, o.jsx)(a.u, {
              title: m.content,
              body: b.content,
              asset: null != p ? (0, o.jsx)("img", { src: p, alt: "" }) : void 0,
              assetSize: 80,
              padding: "lg",
              position: "right",
              asContainer: !0,
              children: (0, o.jsx)("div", { children: t }),
          })
        : t;
}
