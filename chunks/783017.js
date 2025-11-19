n.d(t, { Z: () => g });
var s = n(54381),
    l = n(512722),
    i = n.n(l),
    a = n(442837),
    r = n(159691),
    C = n(481060),
    c = n(607070),
    d = n(70097),
    u = n(566697),
    L = n(594174),
    o = n(526167),
    H = n(741245),
    M = n(388032),
    h = n(202267),
    Z = n(667325),
    p = n(552039),
    m = n(445161);
let g = (e) => {
    let { type: t, text: n, buttonText: l, buttonLoading: g, hideClose: N, onClose: f } = e,
        x = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        E = (0, a.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        _ = (0, o.rO)() ? Z.Z : p.Z,
        I = ((e) => {
            switch (e) {
                case H.Yk.PREMIUM_UPDATED:
                    return M.intl.string(M.t["75Wt0E"]);
                case H.Yk.PREMIUM_ACTIVATED:
                    return M.intl.string(M.t.QWljxE);
                default:
                    return M.intl.string(M.t.X79Az5);
            }
        })(t);
    return (0, s.jsxs)("div", {
        className: h.container,
        children: [
            (0, s.jsx)(C.Heading, {
                className: h.header,
                variant: "display-md",
                color: "header-primary",
                children: I,
            }),
            (0, s.jsxs)("div", {
                className: h.nameplatePreviewContainer,
                children: [
                    x
                        ? (0, s.jsx)("img", {
                              src: m.Z,
                              alt: "",
                              className: h.nameplateGlow,
                          })
                        : (0, s.jsx)(d.Z, {
                              playsInline: !0,
                              muted: !0,
                              autoPlay: !0,
                              loop: !0,
                              className: h.nameplateGlow,
                              children: (0, s.jsx)("source", { src: _ }),
                          }),
                    (0, s.jsx)(u.Z, {
                        user: E,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: E.nameplate,
                        className: h.nameplatePreview,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: h.textContainer,
                children: n,
            }),
            !N &&
                (0, s.jsx)("div", {
                    className: h.footer,
                    children: (0, s.jsx)(r.zxk, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: l,
                        onClick: f,
                        loading: g,
                    }),
                }),
        ],
    });
};
