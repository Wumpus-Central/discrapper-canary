n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(680018),
    c = n(755721),
    u = n(481060),
    d = n(230711),
    f = n(351773),
    _ = n(607070),
    p = n(100527),
    h = n(906732),
    m = n(550385),
    g = n(639119),
    E = n(767714),
    b = n(587446),
    y = n(594174),
    O = n(626135),
    v = n(74538),
    I = n(874926),
    T = n(737604),
    S = n(539873),
    A = n(981631),
    N = n(921944),
    C = n(474936),
    R = n(388032),
    P = n(362450);
let w = () => {
        var e, t, n;
        let i = (0, s.e7)([y.default], () => v.ZP.isPremium(y.default.getCurrentUser())),
            a = (0, g.N)(),
            o = (null == a || null == (e = a.subscription_trial) ? void 0 : e.sku_id) === C.Si.TIER_2;
        return (0, r.jsx)(E.Z, {
            size: c.zx.Sizes.MEDIUM,
            textOptions: {
                textOverride: i
                    ? R.intl.string(R.t.IJI7ys)
                    : o
                      ? (0, v.Rt)({
                            intervalType: null == a || null == (t = a.subscription_trial) ? void 0 : t.interval,
                            intervalCount: null == a || null == (n = a.subscription_trial) ? void 0 : n.interval_count
                        })
                      : R.intl.string(R.t.mr4K7O)
            },
            subscriptionTier: C.Si.TIER_2
        });
    },
    D = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                (null == t || t(N.L.DISMISS), (0, m.Ll)(), (0, I.O)());
            };
        return (0, r.jsxs)('div', {
            className: P.editorHeader,
            children: [
                (0, r.jsx)(u.P3F, {
                    className: P.closeCircleButton,
                    onClick: () => n(),
                    children: (0, r.jsx)(u.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: P.closeCircle
                    })
                }),
                (0, r.jsxs)('div', {
                    className: P.title,
                    children: [
                        (0, r.jsx)(u.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: R.intl.string(R.t['hb/wEx'])
                        }),
                        (0, r.jsx)(b.Z, { className: P.premiumIcon })
                    ]
                })
            ]
        });
    },
    L = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, s.e7)([T.Z], () => T.Z.isUpsellPreview),
            a = () => {
                (null == n || n(N.L.DISMISS), (0, m.Ll)(), (0, I.O)(), t || d.Z.open());
            };
        return (0, r.jsxs)('div', {
            className: P.editorFooter,
            children: [
                i && (0, r.jsx)(w, {}),
                (0, r.jsx)(l.z, {
                    onClick: a,
                    variant: 'secondary',
                    fullWidth: !0,
                    text: i || t ? R.intl.string(R.t['dqH+qq']) : R.intl.string(R.t.Olc2Ky)
                })
            ]
        });
    };
function x(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: a } = (0, h.ZP)(p.Z.APP_ICON_EDITOR),
        l = (0, s.e7)([y.default], () => y.default.getCurrentUser()),
        { isUpsellPreview: c, shouldEditorAnimate: d } = (0, s.cj)([T.Z, _.Z], () => ({
            isUpsellPreview: T.Z.isUpsellPreview,
            shouldEditorAnimate: t && !_.Z.useReducedMotion
        })),
        g = m.oq.getState().activePanel === m.wh.APP_ICON;
    i.useEffect(() => {
        c &&
            O.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.APP_ICON_UPSELL,
                location_stack: a
            });
    }, [c, a]);
    let E = (0, f.Z)(null, c ? I.O : A.dG4);
    return (i.useEffect(() => {
        if (c && !g) return I.O;
    }, [c, g]),
    null == l)
        ? null
        : (0, r.jsx)(h.Gt, {
              value: a,
              children: (0, r.jsx)('div', {
                  ref: E,
                  className: o()(P.editor, d ? P.editorAnimate : null),
                  'data-app-right-panel': !0,
                  children: (0, r.jsxs)(u.y5t, {
                      children: [
                          (0, r.jsx)(D, { markAsDismissed: n }),
                          (0, r.jsx)(u.Ttm, {
                              className: P.editorBody,
                              children: (0, r.jsx)(S.Z, {
                                  className: P.selectionGroup,
                                  isEditor: !0
                              })
                          }),
                          (0, r.jsx)(L, {
                              markAsDismissed: n,
                              isCoachmark: t
                          })
                      ]
                  })
              })
          });
}
