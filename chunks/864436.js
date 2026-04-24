a.d(t, { A: () => d });
var n = a(627968);
a(64700);
var r = a(503698),
    l = a.n(r),
    i = a(990078),
    s = a(133171),
    o = a(652215);
a(851883);
var c = a(124704);
function d(e) {
    let { icon: t, tooltipText: a, tooltipAriaLabel: r, className: d, onTooltipShow: u } = e,
        h = (0, s.S3)(o.clD.ONLINE);
    return null == a
        ? (0, n.jsx)(t, { size: "custom", color: h, className: l()(c.Kk, d) })
        : (0, n.jsx)(i.m, {
              ariaHidden: !0,
              text: a,
              delay: 150,
              onTooltipShow: u,
              children: (0, n.jsx)(t, { size: "custom", color: h, className: l()(c.Kk, d), "aria-label": r }),
          });
}
