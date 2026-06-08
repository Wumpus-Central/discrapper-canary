l.d(t, { A: () => o });
var a = l(627968),
    i = l(64700),
    r = l(503698),
    n = l.n(r),
    s = l(17928),
    d = l(363195),
    u = l(476931),
    c = l(205032);
function o(e) {
    let { themeSettings: t, className: l, "aria-label": r, "data-testid": o, overlayTestId: g } = e,
        h = (0, s.bG)([d.A], () => d.A.theme),
        p = i.useMemo(
            () =>
                (function (e, t) {
                    if (null == e) return;
                    let l = e.customUserThemeSettings;
                    if (null != l) {
                        let e = l.colors[0];
                        if (null == e) return;
                        let t = l.gradientAngle ?? 0,
                            a = (0, u.kI)(e);
                        return `linear-gradient(${t}deg, ${a.join(", ")})`;
                    }
                    if (null != e.presetId) {
                        let l = (0, u.Yt)(e.presetId);
                        if (null != l) return (0, u.U6)(l, t);
                    }
                })(t, h),
            [t, h],
        ),
        m = null != p;
    return (0, a.jsx)("div", {
        className: n()(c.Ky, { [c.zc]: m }, l),
        "data-testid": o,
        style: m ? { backgroundImage: p } : void 0,
        role: null != r ? "img" : void 0,
        "aria-label": r,
        "aria-hidden": null == r,
        children: (0, a.jsx)("img", {
            alt: "",
            "aria-hidden": "true",
            className: c.Yg,
            "data-testid": g,
            draggable: !1,
            src: "/assets/24adc7403e1b836d.svg",
        }),
    });
}
