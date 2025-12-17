n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(131271),
    l = n(828700),
    c = n(442837),
    u = n(316792),
    d = n(999203),
    f = n(19759),
    p = n(522474),
    _ = n(892071),
    m = n(252618),
    h = n(587061),
    g = n(981631);
n(381547);
let E = new Set([g.Z5c.LOGIN, g.Z5c.REGISTER]);
function b(e) {
    let { lang: t, style: n, className: a } = (0, _.vP)(),
        s = (0, l.TH)(),
        u = i.useMemo(() => E.has(s.pathname), [s.pathname]);
    (0, h.Z)(window, u);
    let d = (0, c.e7)([f.Z, p.Z], () => (p.Z.getWindowOpen(g.KJ3.DEVTOOLS_POPOUT) ? 0 : f.Z.sidebarWidth));
    return (0, r.jsx)("html", {
        lang: t,
        style: "".concat(n, " --devtools-sidebar-width: ").concat(d, "px;"),
        className: o()(a, e, { overlay: __OVERLAY__ }),
    });
}
function y() {
    let [e, t] = i.useState([]);
    return (
        i.useEffect(() => {
            Promise.all(
                u.L.map((e) =>
                    n(959598)("./".concat(e, ".woff2")).then((e) => {
                        let { default: t } = e;
                        return t;
                    }),
                ),
            ).then((e) => t(e));
        }, []),
        (0, r.jsx)(r.Fragment, {
            children: e.map((e, t) =>
                (0, r.jsx)(
                    "link",
                    {
                        rel: "preload",
                        href: e,
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "anonymous",
                    },
                    t,
                ),
            ),
        })
    );
}
function O(e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e;
    (0, m.ZD)({ skipsSettingDefaultPageTitle: n });
    let { clientThemesClassName: a, clientThemesCSS: o } = (0, d.ZP)(),
        l = i.createElement("style", { [d.PQ]: !0 }, o);
    return (0, r.jsxs)(s.ql, {
        children: [b(a), y(), l, t],
    });
}
let v = i.memo(O);
