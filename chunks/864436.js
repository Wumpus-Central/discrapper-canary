n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927);
n(851883);
var l = n(123511);
function c(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: i, className: c, onTooltipShow: u } = e,
        d = (0, o.S31)(o.clD.ONLINE);
    return null == n
        ? (0, r.jsx)(t, {
              size: "custom",
              color: d,
              className: a()(l.Kk, c),
          })
        : (0, r.jsx)(s.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: u,
              children: (0, r.jsx)(t, {
                  size: "custom",
                  color: d,
                  className: a()(l.Kk, c),
                  "aria-label": i,
              }),
          });
}
