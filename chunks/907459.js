n.d(t, { Z: () => L });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(230711),
    d = n(351773),
    f = n(607070),
    _ = n(100527),
    p = n(906732),
    h = n(550385),
    m = n(639119),
    g = n(767714),
    E = n(587446),
    b = n(594174),
    y = n(626135),
    O = n(74538),
    v = n(874926),
    I = n(737604),
    T = n(539873),
    S = n(981631),
    A = n(921944),
    N = n(474936),
    C = n(388032),
    R = n(362450);
let P = () => {
        var e, t, n;
        let i = (0, s.e7)([b.default], () => O.ZP.isPremium(b.default.getCurrentUser())),
            a = (0, m.N)(),
            o = (null == a || null == (e = a.subscription_trial) ? void 0 : e.sku_id) === N.Si.TIER_2;
        return (0, r.jsx)(g.Z, {
            size: l.zx.Sizes.MEDIUM,
            textOptions: {
                textOverride: i
                    ? C.intl.string(C.t.IJI7ys)
                    : o
                      ? (0, O.Rt)({
                            intervalType: null == a || null == (t = a.subscription_trial) ? void 0 : t.interval,
                            intervalCount: null == a || null == (n = a.subscription_trial) ? void 0 : n.interval_count
                        })
                      : C.intl.string(C.t.mr4K7O)
            },
            subscriptionTier: N.Si.TIER_2
        });
    },
    w = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                (null == t || t(A.L.DISMISS), (0, h.Ll)(), (0, v.O)());
            };
        return (0, r.jsxs)('div', {
            className: R.editorHeader,
            children: [
                (0, r.jsx)(c.P3F, {
                    className: R.closeCircleButton,
                    onClick: () => n(),
                    children: (0, r.jsx)(c.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: R.closeCircle
                    })
                }),
                (0, r.jsxs)('div', {
                    className: R.title,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: C.intl.string(C.t['hb/wEx'])
                        }),
                        (0, r.jsx)(E.Z, { className: R.premiumIcon })
                    ]
                })
            ]
        });
    },
    D = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, s.e7)([I.Z], () => I.Z.isUpsellPreview),
            a = () => {
                (null == n || n(A.L.DISMISS), (0, h.Ll)(), (0, v.O)(), t || u.Z.open());
            };
        return (0, r.jsxs)('div', {
            className: R.editorFooter,
            children: [
                i && (0, r.jsx)(P, {}),
                (0, r.jsx)(l.zx, {
                    className: R.footerButton,
                    onClick: a,
                    color: l.zx.Colors.PRIMARY,
                    size: l.zx.Sizes.MEDIUM,
                    children: i || t ? C.intl.string(C.t['dqH+qq']) : C.intl.string(C.t.Olc2Ky)
                })
            ]
        });
    };
function L(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: a } = (0, p.ZP)(_.Z.APP_ICON_EDITOR),
        l = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        { isUpsellPreview: u, shouldEditorAnimate: m } = (0, s.cj)([I.Z, f.Z], () => ({
            isUpsellPreview: I.Z.isUpsellPreview,
            shouldEditorAnimate: t && !f.Z.useReducedMotion
        })),
        g = h.oq.getState().activePanel === h.wh.APP_ICON;
    i.useEffect(() => {
        u &&
            y.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.cd.APP_ICON_UPSELL,
                location_stack: a
            });
    }, [u, a]);
    let E = (0, d.Z)(null, u ? v.O : S.dG4);
    return (i.useEffect(() => {
        if (u && !g) return v.O;
    }, [u, g]),
    null == l)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: a,
              children: (0, r.jsx)('div', {
                  ref: E,
                  className: o()(R.editor, m ? R.editorAnimate : null),
                  'data-app-right-panel': !0,
                  children: (0, r.jsxs)(c.y5t, {
                      children: [
                          (0, r.jsx)(w, { markAsDismissed: n }),
                          (0, r.jsx)(c.Ttm, {
                              className: R.editorBody,
                              children: (0, r.jsx)(T.Z, {
                                  className: R.selectionGroup,
                                  isEditor: !0
                              })
                          }),
                          (0, r.jsx)(D, {
                              markAsDismissed: n,
                              isCoachmark: t
                          })
                      ]
                  })
              })
          });
}
