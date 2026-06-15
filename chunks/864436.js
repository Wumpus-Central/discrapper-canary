r.d(t, { A: () => E });
var n = r(627968);
r(64700);
var l = r(503698),
    i = r.n(l),
    o = r(990078),
    a = r(133171),
    s = r(652215);
r(851883);
var u = r(124704);
function E(e) {
    let { icon: t, tooltipText: r, tooltipAriaLabel: l, className: E, onTooltipShow: d } = e,
        I = (0, a.S3)(s.clD.ONLINE);
    return null == r
        ? (0, n.jsx)(t, { size: "custom", color: I, className: i()(u.Kk, E) })
        : (0, n.jsx)(o.m, {
              ariaHidden: !0,
              text: r,
              delay: 150,
              onTooltipShow: d,
              children: (0, n.jsx)(t, { size: "custom", color: I, className: i()(u.Kk, E), "aria-label": l }),
          });
}
