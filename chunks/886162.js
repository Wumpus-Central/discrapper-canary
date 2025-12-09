n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(990547),
    a = n(399606),
    s = n(481060),
    o = n(232567),
    c = n(213609),
    u = n(313201),
    d = n(23434),
    p = n(981631),
    f = n(388032),
    h = n(734305);
function g(e) {
    let { transitionState: t } = e,
        g = (0, a.e7)([d.Z], () => d.Z.getAction()),
        [m, _] = i.useState(!1),
        b = (0, u.Dt)();
    async function E() {
        return _(!0), g === p.c2C.AGREEMENTS && _(await (0, o.Lr)()), null;
    }
    return (
        (0, c.Z)(
            {
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: g },
            },
            {},
            [],
        ),
        (0, r.jsxs)(s.Y0X, {
            "aria-labelledby": b,
            transitionState: t,
            parentComponent: "UserAgreementsModal",
            children: [
                (0, r.jsx)("div", { id: b }),
                (0, r.jsx)(s.xBx, {
                    separator: !1,
                    children: (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: f.intl.string(f.t["7glvXu"]),
                    }),
                }),
                (0, r.jsxs)(s.hzk, {
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children:
                                g === p.c2C.AGREEMENTS ? f.intl.format(f.t.CN0Hvb, { url: p.EYA.TERMS_SUMMARY }) : null,
                        }),
                        (0, r.jsxs)("div", {
                            className: h.container,
                            children: [
                                (0, r.jsxs)("ul", {
                                    className: h.links,
                                    children: [
                                        (0, r.jsx)("li", { children: f.intl.format(f.t.iw0hFi, { url: p.EYA.TERMS }) }),
                                        (0, r.jsx)("li", {
                                            children: f.intl.format(f.t["36klnD"], { url: p.EYA.PAID_TERMS }),
                                        }),
                                        (0, r.jsx)("li", {
                                            children: f.intl.format(f.t.TquFBF, { url: p.EYA.PRIVACY }),
                                        }),
                                        (0, r.jsx)("li", {
                                            children: f.intl.format(f.t.ia96Tb, { url: p.EYA.GUIDELINES }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("img", {
                                    className: h.image,
                                    alt: "",
                                    src: n(146714),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: h.agreementDescription,
                            children: f.intl.string(f.t["+USXQE"]),
                        }),
                    ],
                }),
                (0, r.jsx)(s.mzw, {
                    children: (0, r.jsx)(s.Button, {
                        variant: "active",
                        text: f.intl.string(f.t["+TBKL1"]),
                        loading: m,
                        onClick: E,
                    }),
                }),
            ],
        })
    );
}
