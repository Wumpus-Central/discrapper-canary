n.d(t, {
    b: () => f,
});
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(937008),
    l = n(552736),
    c = n(810498),
    u = n(298305),
    d = n(708611);

function f() {
    var e;
    let t = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        { claimableRewards: n } = (0, o.Pv)(),
        f = (0, l.A)(),
        p = null == f ? void 0 : f.planSelection,
        _ = (0, c.K5)(null == p ? void 0 : p.gradientConfig, {
            reverse: !0,
        }),
        h = null == p || null == (e = p.getBannerImageUrl) ? void 0 : e.call(p);
    return null == p || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: d.kL,
              style: _,
              children: [
                  null != h &&
                      (0, r.jsx)("div", {
                          className: d._e,
                          style: {
                              backgroundImage: "url(".concat(h, ")"),
                          },
                      }),
                  (0, r.jsxs)("div", {
                      className: d.V_,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-md/bold",
                              color: "always-white",
                              children: p.heading(),
                          }),
                          null != p.subheading &&
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/medium",
                                  color: "always-white",
                                  children: p.subheading(n.length),
                              }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: d.my,
                      children: (0, r.jsx)(u.A, {
                          maxRewardImageSrc: p.getImageUrl(!0, t),
                          claimableRewards: n,
                          size: a._3J.SIZE_48,
                          imageScaling: t ? 1.9 : 2.4,
                      }),
                  }),
              ],
          });
}
