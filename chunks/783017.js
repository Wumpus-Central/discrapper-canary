n.d(e, { Z: () => g });
var i = n(255367),
    s = n(512722),
    l = n.n(s),
    a = n(442837),
    r = n(680018),
    C = n(481060),
    c = n(22267),
    d = n(70097),
    u = n(594174),
    L = n(526167),
    H = n(741245),
    o = n(388032),
    M = n(977339),
    h = n(667325),
    m = n(552039);
let Z = (t) => {
        switch (t) {
            case H.Yk.PREMIUM_UPDATED:
                return o.intl.string(o.t["75Wt0N"]);
            case H.Yk.PREMIUM_ACTIVATED:
                return o.intl.string(o.t.QWljxM);
            default:
                return o.intl.string(o.t.X79Az8);
        }
    },
    g = (t) => {
        let { type: e, text: n, buttonText: s, hideClose: H, onClose: o } = t,
            g = (0, a.e7)([u.default], () => {
                let t = u.default.getCurrentUser();
                return l()(null != t, "UserSettingsProfileCustomization: user cannot be undefined"), t;
            }),
            x = (0, L.rO)() ? h.Z : m.Z,
            f = Z(e);
        return (0, i.jsxs)("div", {
            className: M.container,
            children: [
                (0, i.jsx)(C.X6q, {
                    className: M.header,
                    variant: "display-md",
                    color: "header-primary",
                    children: f,
                }),
                (0, i.jsxs)("div", {
                    className: M.nameplatePreviewContainer,
                    children: [
                        (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            muted: !0,
                            autoPlay: !0,
                            loop: !0,
                            className: M.nameplateGlow,
                            children: (0, i.jsx)("source", { src: x }),
                        }),
                        (0, i.jsx)(c.Z, {
                            user: g,
                            isHighlighted: !0,
                            nameplate: null,
                            nameplateData: g.nameplate,
                            className: M.nameplatePreview,
                            nameplatePreviewSize: "large",
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: M.textContainer,
                    children: n,
                }),
                !H &&
                    (0, i.jsx)("div", {
                        className: M.footer,
                        children: (0, i.jsx)(r.z, {
                            variant: "expressive",
                            fullWidth: !0,
                            text: s,
                            onClick: o,
                        }),
                    }),
            ],
        });
    };
