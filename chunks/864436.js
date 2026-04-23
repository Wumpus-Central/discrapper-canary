n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(990078),
    _ = n(133171),
    l = n(652215);
n(851883);
var o = n(124704);
function E(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: r, className: E, onTooltipShow: d } = e,
        c = (0, _.S3)(l.clD.ONLINE);
    return null == n
        ? (0, i.jsx)(t, { size: "custom", color: c, className: a()(o.Kk, E) })
        : (0, i.jsx)(s.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: d,
              children: (0, i.jsx)(t, { size: "custom", color: c, className: a()(o.Kk, E), "aria-label": r }),
          });
}
