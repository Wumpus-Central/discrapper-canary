n.d(t, { Z: () => x });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(230711),
    c = n(351773),
    d = n(607070),
    f = n(100527),
    _ = n(906732),
    p = n(639119),
    h = n(197115),
    m = n(587446),
    g = n(594174),
    E = n(626135),
    v = n(74538),
    y = n(94795),
    I = n(327943),
    T = n(539873),
    b = n(981631),
    S = n(921944),
    A = n(474936),
    N = n(388032),
    C = n(45950);
let R = () => {
        var e, t, n;
        let r = (0, o.e7)([g.default], () => v.ZP.isPremium(g.default.getCurrentUser())),
            a = (0, p.N)(),
            s = (null == a ? void 0 : null === (e = a.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === A.Si.TIER_2;
        return (0, i.jsx)(h.Z, {
            size: l.zxk.Sizes.MEDIUM,
            buttonText: r
                ? N.intl.string(N.t.IJI7ys)
                : s
                  ? (0, v.Rt)({
                        intervalType: null == a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.interval,
                        intervalCount: null == a ? void 0 : null === (n = a.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                    })
                  : N.intl.string(N.t.mr4K7O),
            subscriptionTier: A.Si.TIER_2
        });
    },
    O = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                null == t || t(S.L.DISMISS), (0, y.G8)();
            };
        return (0, i.jsxs)('div', {
            className: C.editorHeader,
            children: [
                (0, i.jsx)(l.P3F, {
                    className: C.closeCircleButton,
                    onClick: () => n(),
                    children: (0, i.jsx)(l.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: C.closeCircle
                    })
                }),
                (0, i.jsxs)('div', {
                    className: C.title,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: N.intl.string(N.t['hb/wEx'])
                        }),
                        (0, i.jsx)(m.Z, { className: C.premiumIcon })
                    ]
                })
            ]
        });
    },
    D = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            r = (0, o.e7)([I.Z], () => I.Z.isUpsellPreview),
            a = () => {
                null == n || n(S.L.DISMISS), (0, y.G8)(), t || u.Z.open();
            };
        return (0, i.jsxs)('div', {
            className: C.editorFooter,
            children: [
                r && (0, i.jsx)(R, {}),
                (0, i.jsx)(l.zxk, {
                    className: C.footerButton,
                    onClick: a,
                    color: l.zxk.Colors.PRIMARY,
                    size: l.zxk.Sizes.MEDIUM,
                    children: r || t ? N.intl.string(N.t['dqH+qq']) : N.intl.string(N.t.Olc2Ky)
                })
            ]
        });
    };
function x(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: a } = (0, _.ZP)(f.Z.APP_ICON_EDITOR),
        u = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        {
            isUpsellPreview: p,
            isEditorOpen: h,
            shouldEditorAnimate: m
        } = (0, o.cj)([I.Z, d.Z], () => ({
            isUpsellPreview: I.Z.isUpsellPreview,
            isEditorOpen: I.Z.isEditorOpen,
            shouldEditorAnimate: t && !d.Z.useReducedMotion
        }));
    r.useEffect(() => {
        p &&
            E.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                type: A.cd.APP_ICON_UPSELL,
                location_stack: a
            });
    }, [p, a]);
    let v = (0, c.Z)(null, p ? y.O7 : b.dG4);
    return (r.useEffect(() => {
        if (p && !h) return y.O7;
    }, [p, h]),
    null == u)
        ? null
        : (0, i.jsx)(_.Gt, {
              value: a,
              children: (0, i.jsx)('div', {
                  ref: v,
                  className: s()(C.editor, m ? C.editorAnimate : null),
                  'data-app-right-panel': !0,
                  children: (0, i.jsxs)(l.y5t, {
                      children: [
                          (0, i.jsx)(O, { markAsDismissed: n }),
                          (0, i.jsx)(l.Ttm, {
                              className: C.editorBody,
                              children: (0, i.jsx)(T.Z, {
                                  className: C.selectionGroup,
                                  isEditor: !0
                              })
                          }),
                          (0, i.jsx)(D, {
                              markAsDismissed: n,
                              isCoachmark: t
                          })
                      ]
                  })
              })
          });
}
