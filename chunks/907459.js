n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(159691),
    c = n(755721),
    u = n(481060),
    d = n(351773),
    f = n(607070),
    p = n(100527),
    _ = n(906732),
    m = n(550385),
    h = n(639119),
    g = n(767714),
    E = n(587446),
    b = n(313789),
    y = n(518596),
    O = n(594174),
    v = n(626135),
    S = n(74538),
    I = n(874926),
    T = n(737604),
    A = n(539873),
    C = n(981631),
    N = n(921944),
    P = n(474936),
    R = n(388032),
    w = n(164161);
let D = () => {
        var e, t, n;
        let i = (0, s.e7)([O.default], () => S.ZP.isPremium(O.default.getCurrentUser())),
            a = (0, h.N)(),
            o = (null == a || null == (e = a.subscription_trial) ? void 0 : e.sku_id) === P.Si.TIER_2;
        return (0, r.jsx)(g.Z, {
            size: c.zx.Sizes.MEDIUM,
            textOptions: {
                textOverride: i
                    ? R.intl.string(R.t.IJI7yk)
                    : o
                      ? (0, S.Rt)({
                            intervalType: null == a || null == (t = a.subscription_trial) ? void 0 : t.interval,
                            intervalCount: null == a || null == (n = a.subscription_trial) ? void 0 : n.interval_count,
                        })
                      : R.intl.string(R.t.mr4K7D),
            },
            subscriptionTier: P.Si.TIER_2,
        });
    },
    x = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                null == t || t(N.L.DISMISS), (0, m.Ll)(), (0, I.O)();
            };
        return (0, r.jsxs)("div", {
            className: w.editorHeader,
            children: [
                (0, r.jsx)(u.P3F, {
                    className: w.closeCircleButton,
                    onClick: () => n(),
                    children: (0, r.jsx)(u.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: w.closeCircle,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: w.title,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: "heading-lg/extrabold",
                            children: R.intl.string(R.t["hb/wE0"]),
                        }),
                        (0, r.jsx)(E.Z, { className: w.premiumIcon }),
                    ],
                }),
            ],
        });
    },
    L = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, s.e7)([T.Z], () => T.Z.isUpsellPreview),
            a = () => {
                null == n || n(N.L.DISMISS),
                    (0, m.Ll)(),
                    (0, I.O)(),
                    t || (0, y.openUserSettings)(b.n.APPEARANCE_PANEL, { section: C.oAB.APPEARANCE });
            };
        return (0, r.jsxs)("div", {
            className: w.editorFooter,
            children: [
                i && (0, r.jsx)(D, {}),
                (0, r.jsx)(l.zxk, {
                    onClick: a,
                    variant: "secondary",
                    fullWidth: !0,
                    text: i || t ? R.intl.string(R.t["dqH+qr"]) : R.intl.string(R.t.Olc2K3),
                }),
            ],
        });
    };
function j(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: a } = (0, _.ZP)(p.Z.APP_ICON_EDITOR),
        l = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        { isUpsellPreview: c, shouldEditorAnimate: h } = (0, s.cj)([T.Z, f.Z], () => ({
            isUpsellPreview: T.Z.isUpsellPreview,
            shouldEditorAnimate: t && !f.Z.useReducedMotion,
        })),
        g = m.oq.getState().activePanel === m.wh.APP_ICON;
    i.useEffect(() => {
        c &&
            v.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                type: P.cd.APP_ICON_UPSELL,
                location_stack: a,
            });
    }, [c, a]);
    let E = (0, d.Z)(null, c ? I.O : C.dG4);
    return (i.useEffect(() => {
        if (c && !g) return I.O;
    }, [c, g]),
    null == l)
        ? null
        : (0, r.jsx)(_.Gt, {
              value: a,
              children: (0, r.jsx)("div", {
                  ref: E,
                  className: o()(w.editor, h ? w.editorAnimate : null),
                  "data-app-right-panel": !0,
                  children: (0, r.jsxs)(u.y5t, {
                      children: [
                          (0, r.jsx)(x, { markAsDismissed: n }),
                          (0, r.jsx)(u.Ttm, {
                              className: w.editorBody,
                              children: (0, r.jsx)(A.Z, {
                                  className: w.selectionGroup,
                                  isEditor: !0,
                              }),
                          }),
                          (0, r.jsx)(L, {
                              markAsDismissed: n,
                              isCoachmark: t,
                          }),
                      ],
                  }),
              }),
          });
}
