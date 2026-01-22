r.d(t, { A: () => S }), r(896048);
var n = r(627968);
r(64700);
var l = r(503698),
    s = r.n(l),
    i = r(299855),
    a = r.n(i),
    c = r(158954),
    o = r(397927),
    d = r(77729),
    f = r(430452),
    u = r(723702),
    h = r(571044),
    p = r(624130),
    x = r(688465),
    j = r(297524),
    m = r(502075),
    g = r(818348),
    b = r(985018),
    v = r(687637);
function y(e) {
    let { id: t, text: r, icon: l, selected: i, onClick: a } = e;
    return (0, n.jsx)(o.DUT, {
        role: "radio",
        "aria-checked": i,
        onClick: () => a(t),
        tabIndex: 0,
        className: s()(v.tp, v.ey, { [v.wH]: i }),
        children: (0, n.jsxs)("div", {
            className: v.DD,
            children: [
                (0, n.jsx)(l, { size: "lg" }),
                (0, n.jsx)(c.EYj, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: r,
                }),
            ],
        }),
    });
}
function S(e) {
    let { onSourceSelect: t } = e;
    (0, h.jd)(), (0, p.A)(t, g.FX);
    let [{ nativeSourceType: r }, l] = (0, x.tS)(),
        s = (0, u.isMac)() && a().satisfies(null === d.A || void 0 === d.A ? void 0 : d.A.os.release, m.WZ),
        i = f.A.getUseGamescopeCapture(),
        S = i ? "gamescope" : "screen";
    return (0, n.jsxs)("div", {
        className: v.zr,
        children: [
            (0, n.jsx)(c.DZT, {
                className: v.wx,
                variant: "heading-lg/semibold",
                color: "text-default",
                children: b.intl.string(b.t.XyYoFc),
            }),
            s
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(c.EYj, {
                              className: v.rf,
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: b.intl.format(b.t.sbbPhW, { buttonName: b.intl.string(b.t.FiBjwU) }),
                          }),
                          (0, n.jsx)(j.A, {}),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: v.Ro,
                      children: [
                          (0, n.jsx)(y, {
                              selected: r === S,
                              onClick: () => {
                                  l({
                                      type: "set_native_source_type",
                                      sourceType: S,
                                  });
                              },
                              id: "screen",
                              text: b.intl.string(b.t.cVUFXY),
                              icon: o.kN9,
                          }),
                          !i &&
                              (0, n.jsx)(y, {
                                  selected: "window" === r,
                                  onClick: () => {
                                      l({
                                          type: "set_native_source_type",
                                          sourceType: "window",
                                      });
                                  },
                                  id: "window",
                                  text: b.intl.string(b.t.dG2A1E),
                                  icon: o.WxK,
                              }),
                      ],
                  }),
        ],
    });
}
