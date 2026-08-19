l.d(t, { A: () => d });
var n = l(477900);
l(582128);
var i = l(503698),
    r = l.n(i),
    a = l(935154),
    s = l(652215),
    o = l(866665);
l(851883);
var c = l(491160);
function d(e) {
    let { icon: t, tooltipText: l, tooltipAriaLabel: i, className: d, onTooltipShow: u } = e,
        h = (0, a.S3)(s.clD.ONLINE);
    return null == l
        ? (0, n.jsx)(t, { size: "custom", color: h, className: r()(c.Kk, d) })
        : (0, n.jsx)(o.m, {
              ariaHidden: !0,
              text: l,
              delay: 150,
              onTooltipShow: u,
              children: (0, n.jsx)(t, { size: "custom", color: h, className: r()(c.Kk, d), "aria-label": i }),
          });
}
