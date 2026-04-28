n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(990078),
    u = n(133171),
    o = n(652215);
n(851883);
var s = n(124704);
function d(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: l, className: d, onTooltipShow: c } = e,
        A = (0, u.S3)(o.clD.ONLINE);
    return null == n
        ? (0, r.jsx)(t, { size: "custom", color: A, className: i()(s.Kk, d) })
        : (0, r.jsx)(a.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: c,
              children: (0, r.jsx)(t, { size: "custom", color: A, className: i()(s.Kk, d), "aria-label": l }),
          });
}
