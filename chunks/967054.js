n.d(t, {
    K: () => _,
    _: () => h,
}),
    n(896048);
var r = n(64700),
    i = n(736653),
    a = n(226540),
    s = n(369496),
    o = n(818348);
let l = "14",
    c = "1A",
    u = "33",
    d = "4D",
    f = "66",
    p = "80";

function _(e) {
    let t = (0, i.Ay)(),
        [n, a] = (0, r.useState)({});
    return (
        (0, r.useEffect)(() => {
            null == e ||
                a({
                    "--custom-nameplate": (t === o.NJ.LIGHT ? e.palette.lightBackground : e.palette.darkBackground) + u,
                    "--custom-nameplate-neutral":
                        t !== o.NJ.LIGHT ? "rgba(0, 0, 0, 0.22)" : "rgba(255, 255, 255  , 0.22)",
                    "--custom-nameplate-neutral-hovered":
                        t !== o.NJ.LIGHT ? "rgba(0, 0, 0, 0.33)" : "rgba(255, 255, 255  , 0.33)",
                });
        }, [e, t]),
        n
    );
}

function h(e, t, n, s, o) {
    let l = (0, i.Ay)(),
        c = (0, r.useMemo)(
            () =>
                null == t
                    ? null
                    : m({
                          palette: t.palette,
                          theme: l,
                          hover: n,
                          selected: s,
                          placement: o,
                      }),
            [t, n, s, l, o],
        ),
        [u, d] = (0, r.useState)(
            null != c
                ? {
                      background: c,
                  }
                : {},
        ),
        f = o === a.u.MEMBER_LIST;
    return (
        (0, r.useEffect)(() => {
            if (null == c) return;
            if (null == e || null == e.current)
                return void d({
                    background: c,
                });
            let t = new ResizeObserver((e) => {
                let t = e[0].contentRect.width + (f ? 10 : -5),
                    n = t,
                    r = t + 50;
                d({
                    background: c,
                    maskImage: "linear-gradient(to right, rgba(0, 0, 0, .3) "
                        .concat(n, "px, rgba(0, 0, 0, 1) ")
                        .concat(r, "px)"),
                });
            });
            return t.observe(e.current), () => t.disconnect();
        }, [e, c, f]),
        u
    );
}

function m(e) {
    let { palette: t, theme: n, hover: r, selected: i, placement: _ } = e;
    if (!(0, s.wT)(t)) return;
    let h = n === o.NJ.LIGHT,
        m = h ? t.lightBackground : t.darkBackground;
    if (_ === a.u.MEMBER_LIST || _ === a.u.CHANNEL) {
        let e = "".concat(i ? p : r && _ === a.u.MEMBER_LIST ? d : u);
        return "linear-gradient(90deg, transparent 0%, "
            .concat(m)
            .concat(l, " 20%, ")
            .concat(m)
            .concat(l, " 50%, ")
            .concat(m)
            .concat(e, " 100%)");
    }
    let g = _ === a.u.MINI_PREVIEW ? u : c,
        E = h ? d : f;
    return "linear-gradient(90deg, ".concat(m).concat(g, " 0%, ").concat(m).concat(E, " 100%)");
}
