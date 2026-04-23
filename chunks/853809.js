i.d(e, { default: () => E });
var r = i(627968);
i(64700);
var o = i(406810),
    s = i(360669),
    l = i(331322),
    n = i(189213),
    c = i(978940),
    h = i(214947),
    d = i(704333),
    a = i(276293),
    C = i(834730),
    u = i(923531),
    x = i(294433),
    p = i(438732),
    j = i(953727),
    N = i(191627),
    g = i(602339),
    m = i(985018),
    w = i(974150);
let _ = {
        [N.NV.USER_INTERACTION]: (0, r.jsx)(
            function (t) {
                let { width: e = 24, height: i = 24, color: o = "currentColor", ...s } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, j.A)(s),
                    width: e,
                    height: i,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [
                        (0, r.jsx)("path", {
                            d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
                            fill: o,
                        }),
                        (0, r.jsx)("path", {
                            d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
                            fill: o,
                        }),
                    ],
                });
            },
            { width: 18, height: 18 },
        ),
        [N.NV.USER_CALLED]: (0, r.jsx)(c._, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.USER_ADD]: (0, r.jsx)(h.$, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.GUILD_ADD]: (0, r.jsx)(d.B, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.GUILD_INTERACTION]: (0, r.jsx)(a.N, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.TOTAL_VOICE_MINUTES]: (0, r.jsx)(o.O, { size: "custom", color: "currentColor", width: 22, height: 22 }),
        [N.NV.PURCHASES]: (0, r.jsx)(s.B, { size: "custom", color: "currentColor", width: 22, height: 22 }),
    },
    f = (t) => {
        let { header: e, description: i, icon: o } = t;
        return (0, r.jsxs)(l.B, {
            direction: "horizontal",
            className: w.nM,
            padding: 16,
            align: "center",
            gap: 16,
            fullWidth: !1,
            children: [
                (0, r.jsx)("div", { className: w.zc, children: o }),
                (0, r.jsxs)("div", {
                    className: w.u4,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-sm/bold", children: e }),
                        (0, r.jsx)(C.E, { variant: "text-xs/medium", children: i }),
                    ],
                }),
            ],
        });
    },
    E = (t) => {
        let { transitionState: e, onClose: i } = t,
            o = (0, x.y)(m.intl.string(g.default.q3IRal), m.intl.string(g.default.JNLpDZ)),
            s = (0, p.A)(),
            c = (0, u.Mo)();
        return (0, r.jsx)(n.Modal, {
            transitionState: e,
            onClose: i,
            actions: [],
            title: o,
            children: (0, r.jsx)(l.B, {
                gap: 8,
                fullWidth: !1,
                children: c.map((t) => {
                    let [e, i] = t;
                    return (0, r.jsx)(
                        f,
                        { icon: _[e], header: i.tooltipHeader(), description: i.tooltipDescription(s ?? void 0) },
                        e,
                    );
                }),
            }),
        });
    };
