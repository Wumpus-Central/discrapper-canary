r.d(n, {
    Z: function () {
        return x;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(230711),
    d = r(351773),
    f = r(607070),
    _ = r(100527),
    h = r(906732),
    p = r(639119),
    m = r(197115),
    g = r(587446),
    E = r(594174),
    v = r(626135),
    I = r(74538),
    T = r(94795),
    b = r(327943),
    y = r(539873),
    S = r(981631),
    A = r(921944),
    N = r(474936),
    C = r(388032),
    R = r(45950);
let O = () => {
        var e, n, r;
        let a = (0, l.e7)([E.default], () => I.ZP.isPremium(E.default.getCurrentUser())),
            s = (0, p.N)(),
            o = (null == s ? void 0 : null === (e = s.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === N.Si.TIER_2;
        return (0, i.jsx)(m.Z, {
            size: u.Button.Sizes.MEDIUM,
            buttonText: a
                ? C.intl.string(C.t.IJI7ys)
                : o
                  ? (0, I.Rt)({
                        intervalType: null == s ? void 0 : null === (n = s.subscription_trial) || void 0 === n ? void 0 : n.interval,
                        intervalCount: null == s ? void 0 : null === (r = s.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                    })
                  : C.intl.string(C.t.mr4K7O),
            subscriptionTier: N.Si.TIER_2
        });
    },
    D = (e) => {
        let { markAsDismissed: n } = e,
            r = () => {
                null == n || n(A.L.DISMISS), (0, T.G8)();
            };
        return (0, i.jsxs)('div', {
            className: R.editorHeader,
            children: [
                (0, i.jsx)(u.Clickable, {
                    className: R.closeCircleButton,
                    onClick: () => r(),
                    children: (0, i.jsx)(u.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: R.closeCircle
                    })
                }),
                (0, i.jsxs)('div', {
                    className: R.title,
                    children: [
                        (0, i.jsx)(u.Heading, {
                            variant: 'heading-lg/extrabold',
                            children: C.intl.string(C.t['hb/wEx'])
                        }),
                        (0, i.jsx)(g.Z, { className: R.premiumIcon })
                    ]
                })
            ]
        });
    },
    L = (e) => {
        let { isCoachmark: n, markAsDismissed: r } = e,
            a = (0, l.e7)([b.Z], () => b.Z.isUpsellPreview),
            s = () => {
                null == r || r(A.L.DISMISS), (0, T.G8)(), !n && c.Z.open();
            };
        return (0, i.jsxs)('div', {
            className: R.editorFooter,
            children: [
                a && (0, i.jsx)(O, {}),
                (0, i.jsx)(u.Button, {
                    className: R.footerButton,
                    onClick: s,
                    color: u.Button.Colors.PRIMARY,
                    size: u.Button.Sizes.MEDIUM,
                    children: a || n ? C.intl.string(C.t['dqH+qq']) : C.intl.string(C.t.Olc2Ky)
                })
            ]
        });
    };
function x(e) {
    let { isCoachmark: n, markAsDismissed: r } = e,
        { analyticsLocations: s } = (0, h.ZP)(_.Z.APP_ICON_EDITOR),
        c = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        {
            isUpsellPreview: p,
            isEditorOpen: m,
            shouldEditorAnimate: g
        } = (0, l.cj)([b.Z, f.Z], () => ({
            isUpsellPreview: b.Z.isUpsellPreview,
            isEditorOpen: b.Z.isEditorOpen,
            shouldEditorAnimate: n && !f.Z.useReducedMotion
        }));
    a.useEffect(() => {
        if (!!p)
            v.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.cd.APP_ICON_UPSELL,
                location_stack: s
            });
    }, [p, s]);
    let I = (0, d.Z)(null, p ? T.O7 : S.dG4);
    return (a.useEffect(() => {
        if (!!p && !m) return T.O7;
    }, [p, m]),
    null == c)
        ? null
        : (0, i.jsx)(h.Gt, {
              value: s,
              children: (0, i.jsx)('div', {
                  ref: I,
                  className: o()(R.editor, g ? R.editorAnimate : null),
                  'data-app-right-panel': !0,
                  children: (0, i.jsxs)(u.HeadingLevel, {
                      children: [
                          (0, i.jsx)(D, { markAsDismissed: r }),
                          (0, i.jsx)(u.Scroller, {
                              className: R.editorBody,
                              children: (0, i.jsx)(y.Z, {
                                  className: R.selectionGroup,
                                  isEditor: !0
                              })
                          }),
                          (0, i.jsx)(L, {
                              markAsDismissed: r,
                              isCoachmark: n
                          })
                      ]
                  })
              })
          });
}
