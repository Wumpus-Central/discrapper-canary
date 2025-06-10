n.d(t, { Z: () => D });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(230711),
    u = n(351773),
    d = n(607070),
    f = n(100527),
    _ = n(906732),
    p = n(550385),
    h = n(639119),
    m = n(767714),
    g = n(587446),
    E = n(594174),
    b = n(626135),
    y = n(74538),
    O = n(874926),
    v = n(737604),
    I = n(539873),
    T = n(981631),
    S = n(921944),
    A = n(474936),
    N = n(388032),
    C = n(362450);
let R = () => {
        var e, t, n;
        let i = (0, s.e7)([E.default], () => y.ZP.isPremium(E.default.getCurrentUser())),
            a = (0, h.N)(),
            o = (null == a || null == (e = a.subscription_trial) ? void 0 : e.sku_id) === A.Si.TIER_2;
        return (0, r.jsx)(m.Z, {
            size: l.zxk.Sizes.MEDIUM,
            textOptions: {
                textOverride: i
                    ? N.intl.string(N.t.IJI7ys)
                    : o
                      ? (0, y.Rt)({
                            intervalType: null == a || null == (t = a.subscription_trial) ? void 0 : t.interval,
                            intervalCount: null == a || null == (n = a.subscription_trial) ? void 0 : n.interval_count
                        })
                      : N.intl.string(N.t.mr4K7O)
            },
            subscriptionTier: A.Si.TIER_2
        });
    },
    P = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                null == t || t(S.L.DISMISS), (0, p.Ll)(), (0, O.O)();
            };
        return (0, r.jsxs)('div', {
            className: C.editorHeader,
            children: [
                (0, r.jsx)(l.P3F, {
                    className: C.closeCircleButton,
                    onClick: () => n(),
                    children: (0, r.jsx)(l.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: C.closeCircle
                    })
                }),
                (0, r.jsxs)('div', {
                    className: C.title,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: N.intl.string(N.t['hb/wEx'])
                        }),
                        (0, r.jsx)(g.Z, { className: C.premiumIcon })
                    ]
                })
            ]
        });
    },
    w = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, s.e7)([v.Z], () => v.Z.isUpsellPreview),
            a = () => {
                null == n || n(S.L.DISMISS), (0, p.Ll)(), (0, O.O)(), t || c.Z.open();
            };
        return (0, r.jsxs)('div', {
            className: C.editorFooter,
            children: [
                i && (0, r.jsx)(R, {}),
                (0, r.jsx)(l.zxk, {
                    className: C.footerButton,
                    onClick: a,
                    color: l.zxk.Colors.PRIMARY,
                    size: l.zxk.Sizes.MEDIUM,
                    children: i || t ? N.intl.string(N.t['dqH+qq']) : N.intl.string(N.t.Olc2Ky)
                })
            ]
        });
    };
function D(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: a } = (0, _.ZP)(f.Z.APP_ICON_EDITOR),
        c = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        { isUpsellPreview: h, shouldEditorAnimate: m } = (0, s.cj)([v.Z, d.Z], () => ({
            isUpsellPreview: v.Z.isUpsellPreview,
            shouldEditorAnimate: t && !d.Z.useReducedMotion
        })),
        g = p.oq.getState().activePanel === p.wh.APP_ICON;
    i.useEffect(() => {
        h &&
            b.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: A.cd.APP_ICON_UPSELL,
                location_stack: a
            });
    }, [h, a]);
    let y = (0, u.Z)(null, h ? O.O : T.dG4);
    return (i.useEffect(() => {
        if (h && !g) return O.O;
    }, [h, g]),
    null == c)
        ? null
        : (0, r.jsx)(_.Gt, {
              value: a,
              children: (0, r.jsx)('div', {
                  ref: y,
                  className: o()(C.editor, m ? C.editorAnimate : null),
                  'data-app-right-panel': !0,
                  children: (0, r.jsxs)(l.y5t, {
                      children: [
                          (0, r.jsx)(P, { markAsDismissed: n }),
                          (0, r.jsx)(l.Ttm, {
                              className: C.editorBody,
                              children: (0, r.jsx)(I.Z, {
                                  className: C.selectionGroup,
                                  isEditor: !0
                              })
                          }),
                          (0, r.jsx)(w, {
                              markAsDismissed: n,
                              isCoachmark: t
                          })
                      ]
                  })
              })
          });
}
