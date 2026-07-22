"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(877624),
    a = n(459192),
    s = n(549996),
    l = n(807098);
function o(e) {
    let { children: t } = e,
        n = (0, s.c)(r.C.PREMIUM_TAB_TOOLTIP),
        o =
            null != n && "premiumTabTooltip" === n.properties.properties.oneofKind
                ? n.properties.properties.premiumTabTooltip
                : null,
        d = (0, l.T)(o?.asset);
    return null == o
        ? t
        : (0, i.jsx)(a.u, {
              title: o.header,
              body: o.body,
              asset: null != d ? (0, i.jsx)("img", { src: d, alt: "" }) : void 0,
              assetSize: 80,
              padding: "lg",
              position: "right",
              asContainer: !0,
              children: (0, i.jsx)("div", { children: t }),
          });
}
