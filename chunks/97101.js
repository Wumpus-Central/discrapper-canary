var e = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    l = n(289873),
    s = n(840091);
n.d(
    a,
    {},
    {
        A: function (t) {
            let { activity: a, className: n } = t;
            return "working" === a
                ? (0, e.jsx)("span", {
                      className: r()(s.qS, n),
                      "aria-hidden": !0,
                      children: (0, e.jsx)(l.y, {
                          type: l.t.SPINNING_CIRCLE_SIMPLE,
                          className: s.u1,
                          itemClassName: s.pu,
                      }),
                  })
                : (0, e.jsx)("span", { className: r()(s.qS, s.Zm, n), "aria-hidden": !0 });
        },
    },
);
