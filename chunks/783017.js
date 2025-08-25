n.d(e, { Z: () => p });
var l = n(951288),
    i = n(512722),
    s = n.n(i),
    a = n(442837),
    r = n(680018),
    C = n(481060),
    c = n(607070),
    d = n(22267),
    u = n(70097),
    o = n(594174),
    L = n(526167),
    H = n(741245),
    M = n(388032),
    h = n(127290),
    m = n(667325),
    Z = n(552039),
    g = n(445161);
let p = (t) => {
    let { type: e, text: n, buttonText: i, buttonLoading: p, hideClose: x, onClose: f } = t,
        N = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        T = (0, a.e7)([o.default], () => {
            let t = o.default.getCurrentUser();
            return s()(null != t, "UserSettingsProfileCustomization: user cannot be undefined"), t;
        }),
        I = (0, L.rO)() ? m.Z : Z.Z,
        E = ((t) => {
            switch (t) {
                case H.Yk.PREMIUM_UPDATED:
                    return M.intl.string(M.t["75Wt0N"]);
                case H.Yk.PREMIUM_ACTIVATED:
                    return M.intl.string(M.t.QWljxM);
                default:
                    return M.intl.string(M.t.X79Az8);
            }
        })(e);
    return (0, l.jsxs)("div", {
        className: h.container,
        children: [
            (0, l.jsx)(C.X6q, {
                className: h.header,
                variant: "display-md",
                color: "header-primary",
                children: E,
            }),
            (0, l.jsxs)("div", {
                className: h.nameplatePreviewContainer,
                children: [
                    N
                        ? (0, l.jsx)("img", {
                              src: g.Z,
                              alt: "",
                              className: h.nameplateGlow,
                          })
                        : (0, l.jsx)(u.Z, {
                              playsInline: !0,
                              muted: !0,
                              autoPlay: !0,
                              loop: !0,
                              className: h.nameplateGlow,
                              children: (0, l.jsx)("source", { src: I }),
                          }),
                    (0, l.jsx)(d.Z, {
                        user: T,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: T.nameplate,
                        className: h.nameplatePreview,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: h.textContainer,
                children: n,
            }),
            !x &&
                (0, l.jsx)("div", {
                    className: h.footer,
                    children: (0, l.jsx)(r.z, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: i,
                        onClick: f,
                        loading: p,
                    }),
                }),
        ],
    });
};
