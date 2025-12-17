n.d(e, { Z: () => Z });
var l = n(54381),
    s = n(512722),
    i = n.n(s),
    a = n(442837),
    r = n(159691),
    C = n(481060),
    c = n(607070),
    d = n(70097),
    o = n(566697),
    u = n(594174),
    L = n(526167),
    H = n(741245),
    M = n(388032),
    h = n(353516),
    p = n(530641),
    g = n(491567),
    m = n(419698);
let Z = (t) => {
    let { type: e, text: n, buttonText: s, buttonLoading: Z, hideClose: N, onClose: f } = t,
        x = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        _ = (0, a.e7)([u.default], () => {
            let t = u.default.getCurrentUser();
            return i()(null != t, "UserSettingsProfileCustomization: user cannot be undefined"), t;
        }),
        E = (0, L.rO)() ? p.Z : g.Z,
        I = ((t) => {
            switch (t) {
                case H.Yk.PREMIUM_UPDATED:
                    return M.intl.string(M.t["75Wt0E"]);
                case H.Yk.PREMIUM_ACTIVATED:
                    return M.intl.string(M.t.QWljxE);
                default:
                    return M.intl.string(M.t.X79Az5);
            }
        })(e);
    return (0, l.jsxs)("div", {
        className: h.container,
        children: [
            (0, l.jsx)(C.Heading, {
                className: h.header,
                variant: "display-md",
                color: "text-strong",
                children: I,
            }),
            (0, l.jsxs)("div", {
                className: h.nameplatePreviewContainer,
                children: [
                    x
                        ? (0, l.jsx)("img", {
                              src: m.Z,
                              alt: "",
                              className: h.nameplateGlow,
                          })
                        : (0, l.jsx)(d.Z, {
                              playsInline: !0,
                              muted: !0,
                              autoPlay: !0,
                              loop: !0,
                              className: h.nameplateGlow,
                              children: (0, l.jsx)("source", { src: E }),
                          }),
                    (0, l.jsx)(o.Z, {
                        user: _,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: _.nameplate,
                        className: h.nameplatePreview,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: h.textContainer,
                children: n,
            }),
            !N &&
                (0, l.jsx)("div", {
                    className: h.footer,
                    children: (0, l.jsx)(r.zxk, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: s,
                        onClick: f,
                        loading: Z,
                    }),
                }),
        ],
    });
};
