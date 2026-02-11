s.d(t, { A: () => S });
var r = s(627968);
s(64700);
var i = s(503698),
    n = s.n(i),
    l = s(299855),
    a = s.n(l),
    o = s(158954),
    c = s(397927),
    d = s(77729),
    u = s(430452),
    f = s(723702),
    h = s(571044),
    x = s(624130),
    p = s(688465),
    m = s(297524),
    _ = s(502075),
    g = s(818348),
    j = s(985018),
    v = s(687637);
function A(e) {
    let { id: t, text: s, icon: i, selected: l, onClick: a } = e;
    return (0, r.jsx)(c.DUT, {
        role: "radio",
        "aria-checked": l,
        onClick: () => a(t),
        tabIndex: 0,
        className: n()(v.tp, v.ey, { [v.wH]: l }),
        children: (0, r.jsxs)("div", {
            className: v.DD,
            children: [
                (0, r.jsx)(i, { size: "lg" }),
                (0, r.jsx)(o.EYj, { variant: "text-sm/medium", color: "none", children: s }),
            ],
        }),
    });
}
function S(e) {
    let { onSourceSelect: t } = e;
    (0, h.jd)(), (0, x.A)(t, g.FX);
    let [{ nativeSourceType: s }, i] = (0, p.tS)(),
        n = (0, f.isMac)() && a().satisfies(d.A?.os.release, _.WZ),
        l = u.Ay.getUseGamescopeCapture(),
        S = l ? "gamescope" : "screen";
    return (0, r.jsxs)("div", {
        className: v.zr,
        children: [
            (0, r.jsx)(o.DZT, {
                className: v.wx,
                variant: "heading-lg/semibold",
                color: "text-default",
                children: j.intl.string(j.t.XyYoFc),
            }),
            n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.EYj, {
                              className: v.rf,
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.sbbPhW, { buttonName: j.intl.string(j.t.FiBjwU) }),
                          }),
                          (0, r.jsx)(m.A, {}),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: v.Ro,
                      children: [
                          (0, r.jsx)(A, {
                              selected: s === S,
                              onClick: () => {
                                  i({ type: "set_native_source_type", sourceType: S });
                              },
                              id: "screen",
                              text: j.intl.string(j.t.cVUFXY),
                              icon: c.kN9,
                          }),
                          !l &&
                              (0, r.jsx)(A, {
                                  selected: "window" === s,
                                  onClick: () => {
                                      i({ type: "set_native_source_type", sourceType: "window" });
                                  },
                                  id: "window",
                                  text: j.intl.string(j.t.dG2A1E),
                                  icon: c.WxK,
                              }),
                      ],
                  }),
        ],
    });
}
