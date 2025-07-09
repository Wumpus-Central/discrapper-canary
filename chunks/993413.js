(n.d(t, { Z: () => b }), n(704826), n(35282), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(892001),
    d = n(594174),
    f = n(403182),
    _ = n(587446),
    p = n(504983),
    h = n(388032),
    m = n(396032);
function g(e) {
    return e.replace(/[0-9.,]+ ?kb/g, (e) => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, f.Ng)(t);
    });
}
function E(e) {
    let { errors: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                c.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    className: m.errorMessage,
                    children: g(e)
                },
                t
            )
        )
    });
}
let b = i.forwardRef(function (e, t) {
    let { title: n, titleIcon: i, titleId: a, description: f, children: g, className: b, errors: y, disabled: O = !1, hideDivider: v = !1, showBorder: I = !1, borderType: T, hasBackground: S = !1, forcedDivider: A = !1, showPremiumIcon: N = !1, showViewFullProfileButton: C = !1 } = e,
        R = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        P = () => {
            null != R &&
                (0, u.openUserProfileModal)({
                    userId: R.id,
                    disableActionsForPreview: !0
                });
        };
    return (0, r.jsx)('div', {
        className: o()(m.customizationSection, b, {
            [m.disabled]: O,
            [m.hideDivider]: v,
            [m.showBorder]: I,
            [m.withDivider]: A
        }),
        ref: t,
        children: (0, r.jsxs)(p.Z, {
            className: m.customizationSectionBorder,
            backgroundClassName: m.customizationSectionBackground,
            isShown: I,
            type: T,
            hasBackground: S,
            children: [
                (0, r.jsxs)(c.vwX, {
                    className: m.title,
                    id: a,
                    children: [
                        n,
                        N && (0, r.jsx)(_.Z, {}),
                        i,
                        C &&
                            null != R &&
                            (0, r.jsx)(l.zx, {
                                look: l.zx.Looks.LINK,
                                color: l.zx.Colors.TRANSPARENT,
                                size: l.zx.Sizes.TINY,
                                className: m.viewFullProfileButton,
                                onClick: P,
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    children: h.intl.string(h.t['+Xp3ho'])
                                })
                            })
                    ]
                }),
                null != f
                    ? (0, r.jsx)(c.R94, {
                          type: c.R94.Types.DESCRIPTION,
                          className: m.sectionDescription,
                          children: f
                      })
                    : null,
                g,
                null != y && (0, r.jsx)(E, { errors: y })
            ]
        })
    });
});
