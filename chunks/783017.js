n.d(t, { Z: () => f });
var s = n(255367),
    i = n(512722),
    l = n.n(i),
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
    h = n(977339),
    m = n(667325),
    Z = n(552039),
    g = n(445161);
let x = (e) => {
        switch (e) {
            case H.Yk.PREMIUM_UPDATED:
                return M.intl.string(M.t["75Wt0N"]);
            case H.Yk.PREMIUM_ACTIVATED:
                return M.intl.string(M.t.QWljxM);
            default:
                return M.intl.string(M.t.X79Az8);
        }
    },
    f = (e) => {
        let { type: t, text: n, buttonText: i, hideClose: H, onClose: M } = e,
            f = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
            p = (0, a.e7)([o.default], () => {
                let e = o.default.getCurrentUser();
                return l()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
            }),
            N = (0, L.rO)() ? m.Z : Z.Z,
            T = x(t);
        return (0, s.jsxs)("div", {
            className: h.container,
            children: [
                (0, s.jsx)(C.X6q, {
                    className: h.header,
                    variant: "display-md",
                    color: "header-primary",
                    children: T,
                }),
                (0, s.jsxs)("div", {
                    className: h.nameplatePreviewContainer,
                    children: [
                        f
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
                                  children: (0, s.jsx)("source", { src: N }),
                              }),
                        (0, s.jsx)(d.Z, {
                            user: p,
                            isHighlighted: !0,
                            nameplate: null,
                            nameplateData: p.nameplate,
                            className: h.nameplatePreview,
                            nameplatePreviewSize: "large",
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: h.textContainer,
                    children: n,
                }),
                !H &&
                    (0, s.jsx)("div", {
                        className: h.footer,
                        children: (0, s.jsx)(r.z, {
                            variant: "expressive",
                            fullWidth: !0,
                            text: i,
                            onClick: M,
                        }),
                    }),
            ],
        });
    };
