s.d(t, { A: () => b });
var i = s(627968);
s(64700);
var r = s(503698),
    n = s.n(r),
    l = s(299855),
    a = s.n(l),
    o = s(834730),
    c = s(534514),
    d = s(939249),
    u = s(31300),
    f = s(93688),
    h = s(77729),
    x = s(430452),
    p = s(723702),
    _ = s(571044),
    m = s(624130),
    g = s(688465),
    j = s(297524),
    v = s(502075),
    A = s(818348),
    C = s(985018),
    S = s(538298);
function y(e) {
    let { id: t, text: s, icon: r, selected: l, onClick: a } = e;
    return (0, i.jsx)(d.D, {
        role: "radio",
        "aria-checked": l,
        onClick: () => a(t),
        tabIndex: 0,
        className: n()(S.tp, S.ey, { [S.wH]: l }),
        children: (0, i.jsxs)("div", {
            className: S.DD,
            children: [
                (0, i.jsx)(r, { size: "lg" }),
                (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "none", children: s }),
            ],
        }),
    });
}
function b(e) {
    let { onSourceSelect: t } = e;
    (0, _.jd)(), (0, m.A)(t, A.FX);
    let [{ nativeSourceType: s }, r] = (0, g.tS)(),
        n = (0, p.isMac)() && a().satisfies(h.A?.os.release, v.WZ),
        l = x.Ay.getUseGamescopeCapture(),
        d = l ? "gamescope" : "screen";
    return (0, i.jsxs)("div", {
        className: S.zr,
        children: [
            (0, i.jsx)(c.D, {
                className: S.wx,
                variant: "heading-lg/semibold",
                color: "text-default",
                children: C.intl.string(C.t.XyYoFc),
            }),
            n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.E, {
                              className: S.rf,
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: C.intl.format(C.t.sbbPhW, { buttonName: C.intl.string(C.t.FiBjwU) }),
                          }),
                          (0, i.jsx)(j.A, {}),
                      ],
                  })
                : (0, i.jsxs)("div", {
                      className: S.Ro,
                      children: [
                          (0, i.jsx)(y, {
                              selected: s === d,
                              onClick: () => {
                                  r({ type: "set_native_source_type", sourceType: d });
                              },
                              id: "screen",
                              text: C.intl.string(C.t.cVUFXY),
                              icon: u.k,
                          }),
                          !l &&
                              (0, i.jsx)(y, {
                                  selected: "window" === s,
                                  onClick: () => {
                                      r({ type: "set_native_source_type", sourceType: "window" });
                                  },
                                  id: "window",
                                  text: C.intl.string(C.t.dG2A1E),
                                  icon: f.W,
                              }),
                      ],
                  }),
        ],
    });
}
