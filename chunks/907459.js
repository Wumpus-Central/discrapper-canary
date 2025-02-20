n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(230711),
    u = n(351773),
    d = n(607070),
    f = n(100527),
    p = n(906732),
    _ = n(639119),
    h = n(197115),
    m = n(587446),
    g = n(594174),
    E = n(626135),
    v = n(74538),
    b = n(94795),
    y = n(327943),
    O = n(539873),
    S = n(981631),
    I = n(921944),
    T = n(474936),
    N = n(388032),
    A = n(643931);
let C = () => {
        var e, t, n;
        let i = (0, s.e7)([g.default], () => v.ZP.isPremium(g.default.getCurrentUser())),
            o = (0, _.N)(),
            a = (null == o ? void 0 : null === (e = o.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === T.Si.TIER_2;
        return (0, r.jsx)(h.Z, {
            size: l.zxk.Sizes.MEDIUM,
            buttonText: i
                ? N.NW.string(N.t.IJI7ys)
                : a
                  ? (0, v.Rt)({
                        intervalType: null == o ? void 0 : null === (t = o.subscription_trial) || void 0 === t ? void 0 : t.interval,
                        intervalCount: null == o ? void 0 : null === (n = o.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                    })
                  : N.NW.string(N.t.mr4K7O),
            subscriptionTier: T.Si.TIER_2
        });
    },
    R = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                null == t || t(I.L.DISMISS), (0, b.G8)();
            };
        return (0, r.jsxs)('div', {
            className: A.editorHeader,
            children: [
                (0, r.jsx)(l.P3F, {
                    className: A.closeCircleButton,
                    onClick: () => n(),
                    children: (0, r.jsx)(l.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: A.closeCircle
                    })
                }),
                (0, r.jsxs)('div', {
                    className: A.title,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: N.NW.string(N.t['hb/wEx'])
                        }),
                        (0, r.jsx)(m.Z, { className: A.premiumIcon })
                    ]
                })
            ]
        });
    },
    P = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, s.e7)([y.Z], () => y.Z.isUpsellPreview),
            o = () => {
                null == n || n(I.L.DISMISS), (0, b.G8)(), t || c.Z.open();
            };
        return (0, r.jsxs)('div', {
            className: A.editorFooter,
            children: [
                i && (0, r.jsx)(C, {}),
                (0, r.jsx)(l.zxk, {
                    className: A.footerButton,
                    onClick: o,
                    color: l.zxk.Colors.PRIMARY,
                    size: l.zxk.Sizes.MEDIUM,
                    children: i || t ? N.NW.string(N.t['dqH+qq']) : N.NW.string(N.t.Olc2Ky)
                })
            ]
        });
    };
function w(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: o } = (0, p.ZP)(f.Z.APP_ICON_EDITOR),
        c = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        {
            isUpsellPreview: _,
            isEditorOpen: h,
            shouldEditorAnimate: m
        } = (0, s.cj)([y.Z, d.Z], () => ({
            isUpsellPreview: y.Z.isUpsellPreview,
            isEditorOpen: y.Z.isEditorOpen,
            shouldEditorAnimate: t && !d.Z.useReducedMotion
        }));
    i.useEffect(() => {
        _ &&
            E.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.APP_ICON_UPSELL,
                location_stack: o
            });
    }, [_, o]);
    let v = (0, u.Z)(null, _ ? b.O7 : S.dG4);
    return (i.useEffect(() => {
        if (_ && !h) return b.O7;
    }, [_, h]),
    null == c)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: o,
              children: (0, r.jsx)('div', {
                  ref: v,
                  className: a()(A.editor, m ? A.editorAnimate : null),
                  'data-app-right-panel': !0,
                  children: (0, r.jsxs)(l.y5t, {
                      children: [
                          (0, r.jsx)(R, { markAsDismissed: n }),
                          (0, r.jsx)(l.Ttm, {
                              className: A.editorBody,
                              children: (0, r.jsx)(O.Z, {
                                  className: A.selectionGroup,
                                  isEditor: !0
                              })
                          }),
                          (0, r.jsx)(P, {
                              markAsDismissed: n,
                              isCoachmark: t
                          })
                      ]
                  })
              })
          });
}
