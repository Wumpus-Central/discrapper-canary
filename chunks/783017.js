n.d(e, { Z: () => x });
var s = n(951288),
    i = n(512722),
    l = n.n(i),
    a = n(442837),
    r = n(159691),
    C = n(481060),
    c = n(607070),
    d = n(22267),
    u = n(70097),
    L = n(594174),
    o = n(526167),
    H = n(741245),
    M = n(388032),
    h = n(127290),
    m = n(530641),
    Z = n(491567),
    g = n(419698);
let x = (t) => {
    let { type: e, text: n, buttonText: i, buttonLoading: x, hideClose: N, onClose: f } = t,
        p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        T = (0, a.e7)([L.default], () => {
            let t = L.default.getCurrentUser();
            return l()(null != t, "UserSettingsProfileCustomization: user cannot be undefined"), t;
        }),
        E = (0, o.rO)() ? m.Z : Z.Z,
        I = ((t) => {
            switch (t) {
                case H.Yk.PREMIUM_UPDATED:
                    return M.intl.string(M.t["75Wt0N"]);
                case H.Yk.PREMIUM_ACTIVATED:
                    return M.intl.string(M.t.QWljxM);
                default:
                    return M.intl.string(M.t.X79Az8);
            }
        })(e);
    return (0, s.jsxs)("div", {
        className: h.container,
        children: [
            (0, s.jsx)(C.X6q, {
                className: h.header,
                variant: "display-md",
                color: "header-primary",
                children: I,
            }),
            (0, s.jsxs)("div", {
                className: h.nameplatePreviewContainer,
                children: [
                    p
                        ? (0, s.jsx)("img", {
                              src: g.Z,
                              alt: "",
                              className: h.nameplateGlow,
                          })
                        : (0, s.jsx)(u.Z, {
                              playsInline: !0,
                              muted: !0,
                              autoPlay: !0,
                              loop: !0,
                              className: h.nameplateGlow,
                              children: (0, s.jsx)("source", { src: E }),
                          }),
                    (0, s.jsx)(d.Z, {
                        user: T,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: T.nameplate,
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
                        text: i,
                        onClick: f,
                        loading: x,
                    }),
                }),
        ],
    });
};
