a.d(e, { default: () => v });
var i = a(477900),
    t = a(582128),
    l = a(776310),
    n = a(224640),
    r = a(815021),
    c = a(534514),
    d = a(834730),
    u = a(821609),
    o = a(524246),
    m = a(349085),
    x = a(135570),
    h = a(105292),
    j = a(759204);
function v(s) {
    let {
            gameId: e,
            gameName: a,
            onViewServer: v,
            isPlanChange: g = !1,
            isDowngrade: N = !1,
            renewalDate: f,
            ...C
        } = s,
        p = (0, m.A)(e, "cover"),
        b = t.useRef(null),
        [k] = t.useState(() => new l.OH()),
        [y, w] = t.useState(null),
        F = g ? h.intl.string(x.default.VPDgHa) : h.intl.string(x.default.CrCSF3),
        H = g && N && null != f ? h.intl.format(h.t["+y0Tjy"], { renewalDate: f }) : h.intl.string(x.default.H9ti8H),
        S = t.useCallback(() => {
            (v(), C.onClose());
        }, [v, C]);
    return (0, i.jsx)(n.d, {
        ...C,
        size: "sm",
        "aria-label": F,
        contentOutsideContainer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.Fk, { ref: w, className: j.Lb, environment: k }),
                (0, i.jsx)(o.A, { confettiTarget: b.current, confettiCanvas: y }),
            ],
        }),
        children: (0, i.jsxs)("div", {
            className: j.Nr,
            ref: b,
            children: [
                (0, i.jsxs)("div", {
                    className: j.Qw,
                    children: [
                        null != p && (0, i.jsx)("img", { className: j.tB, src: p, alt: "", "aria-hidden": "true" }),
                        (0, i.jsxs)("div", {
                            className: j.iJ,
                            children: [
                                null != p && (0, i.jsx)("img", { className: j.N4, src: p, alt: a }),
                                (0, i.jsx)("div", { className: j.M0, "aria-hidden": "true" }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: j.b,
                            children: (0, i.jsx)(r.J, {
                                variant: "overlay-secondary",
                                onClick: C.onClose,
                                "aria-label": h.intl.string(h.t.cpT0Cq),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.Z,
                            children: [
                                (0, i.jsx)(c.D, { variant: "heading-lg/semibold", color: "text-strong", children: F }),
                                (0, i.jsx)(d.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    tag: "p",
                                    className: j.h_,
                                    children: H,
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.$, {
                            variant: "primary",
                            size: "md",
                            text: h.intl.string(x.default.FEWMXW),
                            onClick: S,
                        }),
                    ],
                }),
            ],
        }),
    });
}
