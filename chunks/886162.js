n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(990547),
    a = n(399606),
    o = n(481060),
    s = n(232567),
    c = n(213609),
    u = n(313201),
    d = n(23434),
    p = n(981631),
    f = n(388032),
    h = n(734305);
function g(e) {
    let { transitionState: t } = e,
        g = (0, a.e7)([d.Z], () => d.Z.getAction()),
        [m, b] = i.useState(!1),
        _ = (0, u.Dt)();
    async function O() {
        return b(!0), g === p.c2C.AGREEMENTS && b(await (0, s.Lr)()), null;
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
        (0, r.jsxs)(o.Y0X, {
            "aria-labelledby": _,
            transitionState: t,
            parentComponent: "UserAgreementsModal",
            children: [
                (0, r.jsx)("div", { id: _ }),
                (0, r.jsx)(o.xBx, {
                    separator: !1,
                    children: (0, r.jsx)(o.X6q, {
                        variant: "heading-lg/semibold",
                        children: f.intl.string(f.t["7glvXl"]),
                    }),
                }),
                (0, r.jsxs)(o.hzk, {
                    children: [
                        (0, r.jsx)(o.Text, {
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
                                        (0, r.jsx)("li", { children: f.intl.format(f.t.iw0hFh, { url: p.EYA.TERMS }) }),
                                        (0, r.jsx)("li", {
                                            children: f.intl.format(f.t["36klnJ"], { url: p.EYA.PAID_TERMS }),
                                        }),
                                        (0, r.jsx)("li", {
                                            children: f.intl.format(f.t.TquFBA, { url: p.EYA.PRIVACY }),
                                        }),
                                        (0, r.jsx)("li", {
                                            children: f.intl.format(f.t.ia96TU, { url: p.EYA.GUIDELINES }),
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
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: h.agreementDescription,
                            children: f.intl.string(f.t["+USXQE"]),
                        }),
                    ],
                }),
                (0, r.jsx)(o.mzw, {
                    children: (0, r.jsx)(o.zxk, {
                        variant: "active",
                        text: f.intl.string(f.t["+TBKLy"]),
                        loading: m,
                        onClick: O,
                    }),
                }),
            ],
        })
    );
}
