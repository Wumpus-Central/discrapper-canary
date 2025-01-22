r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(230711),
    d = r(351773),
    f = r(607070),
    p = r(100527),
    h = r(906732),
    _ = r(639119),
    m = r(197115),
    g = r(587446),
    E = r(594174),
    v = r(626135),
    y = r(74538),
    b = r(94795),
    I = r(327943),
    T = r(539873),
    S = r(981631),
    A = r(921944),
    C = r(474936),
    N = r(388032),
    R = r(45950);
let O = () => {
        var e, n, r;
        let a = (0, l.e7)([E.default], () => y.ZP.isPremium(E.default.getCurrentUser())),
            o = (0, _.N)(),
            s = (null == o ? void 0 : null === (e = o.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === C.Si.TIER_2;
        return (0, i.jsx)(m.Z, {
            size: u.Button.Sizes.MEDIUM,
            buttonText: a
                ? N.intl.string(N.t.IJI7ys)
                : s
                  ? (0, y.Rt)({
                        intervalType: null == o ? void 0 : null === (n = o.subscription_trial) || void 0 === n ? void 0 : n.interval,
                        intervalCount: null == o ? void 0 : null === (r = o.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                    })
                  : N.intl.string(N.t.mr4K7O),
            subscriptionTier: C.Si.TIER_2
        });
    },
    D = (e) => {
        let { markAsDismissed: n } = e,
            r = () => {
                null == n || n(A.L.DISMISS), (0, b.G8)();
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
                            children: N.intl.string(N.t['hb/wEx'])
                        }),
                        (0, i.jsx)(g.Z, { className: R.premiumIcon })
                    ]
                })
            ]
        });
    },
    x = (e) => {
        let { isCoachmark: n, markAsDismissed: r } = e,
            a = (0, l.e7)([I.Z], () => I.Z.isUpsellPreview),
            o = () => {
                null == r || r(A.L.DISMISS), (0, b.G8)(), !n && c.Z.open();
            };
        return (0, i.jsxs)('div', {
            className: R.editorFooter,
            children: [
                a && (0, i.jsx)(O, {}),
                (0, i.jsx)(u.Button, {
                    className: R.footerButton,
                    onClick: o,
                    color: u.Button.Colors.PRIMARY,
                    size: u.Button.Sizes.MEDIUM,
                    children: a || n ? N.intl.string(N.t['dqH+qq']) : N.intl.string(N.t.Olc2Ky)
                })
            ]
        });
    };
function L(e) {
    let { isCoachmark: n, markAsDismissed: r } = e,
        { analyticsLocations: o } = (0, h.ZP)(p.Z.APP_ICON_EDITOR),
        c = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        {
            isUpsellPreview: _,
            isEditorOpen: m,
            shouldEditorAnimate: g
        } = (0, l.cj)([I.Z, f.Z], () => ({
            isUpsellPreview: I.Z.isUpsellPreview,
            isEditorOpen: I.Z.isEditorOpen,
            shouldEditorAnimate: n && !f.Z.useReducedMotion
        }));
    a.useEffect(() => {
        if (!!_)
            v.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.APP_ICON_UPSELL,
                location_stack: o
            });
    }, [_, o]);
    let y = (0, d.Z)(null, _ ? b.O7 : S.dG4);
    return (a.useEffect(() => {
        if (!!_ && !m) return b.O7;
    }, [_, m]),
    null == c)
        ? null
        : (0, i.jsx)(h.Gt, {
              value: o,
              children: (0, i.jsx)('div', {
                  ref: y,
                  className: s()(R.editor, g ? R.editorAnimate : null),
                  'data-app-right-panel': !0,
                  children: (0, i.jsxs)(u.HeadingLevel, {
                      children: [
                          (0, i.jsx)(D, { markAsDismissed: r }),
                          (0, i.jsx)(u.Scroller, {
                              className: R.editorBody,
                              children: (0, i.jsx)(T.Z, {
                                  className: R.selectionGroup,
                                  isEditor: !0
                              })
                          }),
                          (0, i.jsx)(x, {
                              markAsDismissed: r,
                              isCoachmark: n
                          })
                      ]
                  })
              })
          });
}
