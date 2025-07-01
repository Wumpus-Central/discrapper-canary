(n.d(t, { Z: () => E }), n(704826), n(35282), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(892001),
    u = n(594174),
    d = n(403182),
    f = n(587446),
    _ = n(504983),
    p = n(388032),
    h = n(396032);
function m(e) {
    return e.replace(/[0-9.,]+ ?kb/g, (e) => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, d.Ng)(t);
    });
}
function g(e) {
    let { errors: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                l.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    className: h.errorMessage,
                    children: m(e)
                },
                t
            )
        )
    });
}
let E = i.forwardRef(function (e, t) {
    let { title: n, titleIcon: i, titleId: a, description: d, children: m, className: E, errors: b, disabled: y = !1, hideDivider: O = !1, showBorder: v = !1, borderType: I, hasBackground: T = !1, forcedDivider: S = !1, showPremiumIcon: A = !1, showViewFullProfileButton: N = !1 } = e,
        C = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        R = () => {
            null != C &&
                (0, c.openUserProfileModal)({
                    userId: C.id,
                    disableActionsForPreview: !0
                });
        };
    return (0, r.jsx)('div', {
        className: o()(h.customizationSection, E, {
            [h.disabled]: y,
            [h.hideDivider]: O,
            [h.showBorder]: v,
            [h.withDivider]: S
        }),
        ref: t,
        children: (0, r.jsxs)(_.Z, {
            className: h.customizationSectionBorder,
            backgroundClassName: h.customizationSectionBackground,
            isShown: v,
            type: I,
            hasBackground: T,
            children: [
                (0, r.jsxs)(l.vwX, {
                    className: h.title,
                    id: a,
                    children: [
                        n,
                        A && (0, r.jsx)(f.Z, {}),
                        i,
                        N &&
                            null != C &&
                            (0, r.jsx)(l.zxk, {
                                look: l.zxk.Looks.LINK,
                                color: l.zxk.Colors.TRANSPARENT,
                                size: l.zxk.Sizes.TINY,
                                className: h.viewFullProfileButton,
                                onClick: R,
                                children: (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: p.intl.string(p.t['+Xp3ho'])
                                })
                            })
                    ]
                }),
                null != d
                    ? (0, r.jsx)(l.R94, {
                          type: l.R94.Types.DESCRIPTION,
                          className: h.sectionDescription,
                          children: d
                      })
                    : null,
                m,
                null != b && (0, r.jsx)(g, { errors: b })
            ]
        })
    });
});
