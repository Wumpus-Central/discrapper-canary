n.d(t, { Z: () => g });
var s = n(951288),
    l = n(512722),
    i = n.n(l),
    a = n(442837),
    r = n(159691),
    C = n(481060),
    c = n(607070),
    d = n(22267),
    L = n(70097),
    u = n(594174),
    o = n(526167),
    H = n(741245),
    M = n(388032),
    h = n(127290),
    p = n(667325),
    Z = n(552039),
    m = n(445161);
let g = (e) => {
    let { type: t, text: n, buttonText: l, buttonLoading: g, hideClose: N, onClose: f } = e,
        x = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        _ = (0, a.e7)([u.default], () => {
            let e = u.default.getCurrentUser();
            return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        E = (0, o.rO)() ? p.Z : Z.Z,
        I = ((e) => {
            switch (e) {
                case H.Yk.PREMIUM_UPDATED:
                    return M.intl.string(M.t["75Wt0N"]);
                case H.Yk.PREMIUM_ACTIVATED:
                    return M.intl.string(M.t.QWljxM);
                default:
                    return M.intl.string(M.t.X79Az8);
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
                        : (0, s.jsx)(L.Z, {
                              playsInline: !0,
                              muted: !0,
                              autoPlay: !0,
                              loop: !0,
                              className: h.nameplateGlow,
                              children: (0, s.jsx)("source", { src: E }),
                          }),
                    (0, s.jsx)(d.Z, {
                        user: _,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: _.nameplate,
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
