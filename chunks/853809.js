e.d(i, { default: () => _ });
var o = e(477900);
e(582128);
var r = e(406810),
    s = e(360669),
    l = e(331322),
    c = e(189213),
    n = e(978940),
    h = e(214947),
    d = e(704333),
    a = e(276293),
    C = e(597770),
    u = e(834730),
    x = e(923531),
    j = e(294433),
    p = e(438732),
    N = e(953727),
    g = e(191627),
    m = e(273665),
    f = e(375708),
    w = e(147837);
let I = {
    [g.NV.USER_INTERACTION]: (0, o.jsx)(
        function (t) {
            let { width: i = 24, height: e = 24, color: r = "currentColor", ...s } = t;
            return (0, o.jsxs)("svg", {
                ...(0, N.A)(s),
                width: i,
                height: e,
                viewBox: "0 0 20 20",
                fill: "none",
                children: [
                    (0, o.jsx)("path", {
                        d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
                        fill: r,
                    }),
                    (0, o.jsx)("path", {
                        d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
                        fill: r,
                    }),
                ],
            });
        },
        { width: 18, height: 18 },
    ),
    [g.NV.USER_CALLED]: (0, o.jsx)(n._, { size: "custom", color: "currentColor", width: 22, height: 22 }),
    [g.NV.USER_ADD]: (0, o.jsx)(h.$, { size: "custom", color: "currentColor", width: 22, height: 22 }),
    [g.NV.GUILD_ADD]: (0, o.jsx)(d.B, { size: "custom", color: "currentColor", width: 22, height: 22 }),
    [g.NV.GUILD_INTERACTION]: (0, o.jsx)(a.N, { size: "custom", color: "currentColor", width: 22, height: 22 }),
    [g.NV.TOTAL_VOICE_MINUTES]: (0, o.jsx)(r.ClockIcon, {
        size: "custom",
        color: "currentColor",
        width: 22,
        height: 22,
    }),
    [g.NV.PURCHASES]: (0, o.jsx)(s.B, { size: "custom", color: "currentColor", width: 22, height: 22 }),
    [g.NV.GIFTS]: (0, o.jsx)(C.GiftIcon, { size: "custom", color: "currentColor", width: 22, height: 22 }),
};
function E(t) {
    let { header: i, description: e, icon: r } = t;
    return (0, o.jsxs)(l.B, {
        direction: "horizontal",
        className: w.nM,
        padding: 16,
        align: "center",
        gap: 16,
        fullWidth: !1,
        children: [
            (0, o.jsx)("div", { className: w.zc, children: r }),
            (0, o.jsxs)("div", {
                className: w.u4,
                children: [
                    (0, o.jsx)(u.E, { variant: "text-sm/bold", children: i }),
                    (0, o.jsx)(u.E, { variant: "text-xs/medium", children: e }),
                ],
            }),
        ],
    });
}
let _ = function (t) {
    let { transitionState: i, onClose: e } = t,
        r = (0, j.y)(f.intl.string(m.default.q3IRal), f.intl.string(m.default.JNLpDZ)),
        s = (0, p.A)(),
        n = (0, x.Mo)();
    return (0, o.jsx)(c.Modal, {
        transitionState: i,
        onClose: e,
        actions: [],
        title: r,
        children: (0, o.jsx)(l.B, {
            gap: 8,
            fullWidth: !1,
            children: n.map((t) => {
                let [i, e] = t;
                return (0, o.jsx)(
                    E,
                    { icon: I[i], header: e.tooltipHeader(), description: e.tooltipDescription(s ?? void 0) },
                    i,
                );
            }),
        }),
    });
};
