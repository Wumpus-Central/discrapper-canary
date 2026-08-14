e.d(l, { A: () => p });
var n = e(477900);
e(582128);
var i = e(503698),
    a = e.n(i),
    s = e(935154),
    o = e(652215),
    r = e(866665);
e(851883);
var u = e(491160);
function p(t) {
    let { icon: l, tooltipText: e, tooltipAriaLabel: i, className: p, onTooltipShow: d } = t,
        c = (0, s.S3)(o.clD.ONLINE);
    return null == e
        ? (0, n.jsx)(l, { size: "custom", color: c, className: a()(u.Kk, p) })
        : (0, n.jsx)(r.m, {
              ariaHidden: !0,
              text: e,
              delay: 150,
              onTooltipShow: d,
              children: (0, n.jsx)(l, { size: "custom", color: c, className: a()(u.Kk, p), "aria-label": i }),
          });
}
