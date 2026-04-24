n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    r = n(990078),
    o = n(133171),
    s = n(652215);
n(851883);
var c = n(124704);
function d(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: i, className: d, onTooltipShow: u } = e,
        _ = (0, o.S3)(s.clD.ONLINE);
    return null == n
        ? (0, a.jsx)(t, { size: "custom", color: _, className: l()(c.Kk, d) })
        : (0, a.jsx)(r.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: u,
              children: (0, a.jsx)(t, { size: "custom", color: _, className: l()(c.Kk, d), "aria-label": i }),
          });
}
