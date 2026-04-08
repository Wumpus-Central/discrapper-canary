n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(319354),
    o = n(435371),
    d = n(397927),
    c = n(573435),
    u = n(624848);
let A = r.forwardRef(function (e, t) {
    let {
            icon: n,
            onClick: r,
            selected: a = !1,
            showBadge: A = !1,
            disabled: h = !1,
            color: _,
            colorClass: m,
            tooltip: p,
            "aria-label": g,
            "aria-expanded": E,
            "aria-haspopup": I,
            "data-jump-section": f,
        } = e,
        C = (0, i.jsx)(n, { size: "sm", color: _ ?? "currentColor", colorClass: m });
    return (0, i.jsx)(o.m_, {
        position: "bottom",
        text: p,
        ariaHidden: !0,
        children: (0, i.jsx)(d.DUT, {
            innerRef: t,
            tag: "div",
            onClick: h ? void 0 : r,
            className: l()(u.vk, { [u.wH]: a, [u.r9]: h }),
            role: "button",
            "aria-label": null != g ? g : p,
            "aria-haspopup": I,
            "aria-expanded": E,
            "data-jump-section": f,
            "aria-disabled": h,
            children: A
                ? (0, i.jsxs)("div", {
                      className: u.fC,
                      children: [
                          (0, i.jsx)(c.Ay, {
                              mask: c.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                              height: s.E.sm,
                              width: s.E.sm,
                              children: C,
                          }),
                          (0, i.jsx)("span", { className: u.qS }),
                      ],
                  })
                : C,
        }),
    });
});
