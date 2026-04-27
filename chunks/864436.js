a.d(t, { A: () => d });
var r = a(627968);
a(64700);
var n = a(503698),
    l = a.n(n),
    i = a(990078),
    s = a(133171),
    o = a(652215);
a(851883);
var c = a(124704);
function d(e) {
    let { icon: t, tooltipText: a, tooltipAriaLabel: n, className: d, onTooltipShow: u } = e,
        h = (0, s.S3)(o.clD.ONLINE);
    return null == a
        ? (0, r.jsx)(t, { size: "custom", color: h, className: l()(c.Kk, d) })
        : (0, r.jsx)(i.m, {
              ariaHidden: !0,
              text: a,
              delay: 150,
              onTooltipShow: u,
              children: (0, r.jsx)(t, { size: "custom", color: h, className: l()(c.Kk, d), "aria-label": n }),
          });
}
