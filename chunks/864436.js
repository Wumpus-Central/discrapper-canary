a.d(t, { A: () => d });
var n = a(627968);
a(64700);
var l = a(503698),
    r = a.n(l),
    i = a(990078),
    s = a(133171),
    o = a(652215);
a(851883);
var c = a(124704);
function d(e) {
    let { icon: t, tooltipText: a, tooltipAriaLabel: l, className: d, onTooltipShow: u } = e,
        h = (0, s.S3)(o.clD.ONLINE);
    return null == a
        ? (0, n.jsx)(t, { size: "custom", color: h, className: r()(c.Kk, d) })
        : (0, n.jsx)(i.m, {
              ariaHidden: !0,
              text: a,
              delay: 150,
              onTooltipShow: u,
              children: (0, n.jsx)(t, { size: "custom", color: h, className: r()(c.Kk, d), "aria-label": l }),
          });
}
