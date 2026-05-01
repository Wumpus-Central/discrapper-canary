n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(990078),
    l = n(133171),
    o = n(652215);
n(851883);
var d = n(124704);
function c(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: a, className: c, onTooltipShow: _ } = e,
        E = (0, l.S3)(o.clD.ONLINE);
    return null == n
        ? (0, i.jsx)(t, { size: "custom", color: E, className: r()(d.Kk, c) })
        : (0, i.jsx)(s.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: _,
              children: (0, i.jsx)(t, { size: "custom", color: E, className: r()(d.Kk, c), "aria-label": a }),
          });
}
