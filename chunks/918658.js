t.d(n, {
    Z: function () {
        return B;
    },
    d: function () {
        return j;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    o = t(442837),
    a = t(692547),
    s = t(481060),
    c = t(549817),
    d = t(819553),
    u = t(17181),
    b = t(303737),
    m = t(434404),
    g = t(703656),
    p = t(944486),
    f = t(914010),
    h = t(671533),
    _ = t(259580),
    x = t(358085),
    I = t(962086),
    C = t(160404),
    v = t(889695),
    T = t(981631),
    N = t(176505),
    Z = t(302463),
    w = t(293810),
    S = t(388032),
    R = t(646217);
function E(e) {
    let { className: n, onClick: t, children: l } = e;
    return (0, i.jsx)(s.Button, {
        className: r()(R.button, n),
        innerClassName: R.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: t,
        children: l
    });
}
function k(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(E, {
        onClick: n,
        children: S.intl.string(S.t.R9GHyc)
    });
}
function B() {
    let e = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        n = (0, o.e7)([p.Z], () => p.Z.getChannelId(e)),
        {
            viewingRoles: t,
            backNavigationSection: l,
            isFullServerPreview: r,
            isServerShopPreview: x
        } = (0, o.cj)([C.Z], () => ({
            viewingRoles: null != e ? C.Z.getViewingRoles(e) : null,
            backNavigationSection: C.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && C.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && C.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e) return null;
    let B = (function (e) {
            switch (e) {
                case T.pNK.INTEGRATIONS:
                    return S.intl.string(S.t.k7LGdn);
                case T.pNK.ROLE_SUBSCRIPTIONS:
                    return S.intl.string(S.t.bRqiqa);
                case T.pNK.ONBOARDING:
                    return S.intl.string(S.t.qZpU3d);
                default:
                    return S.intl.string(S.t.MTIXho);
            }
        })(l),
        j = l === T.pNK.ROLE_SUBSCRIPTIONS ? S.intl.string(S.t.hZUCzc) : S.intl.string(S.t['/djIh4']),
        O = n === N.oC.GUILD_ONBOARDING,
        L = (n) => {
            let { backToSettings: t } = n;
            null != e && (C.Z.isFullServerPreview(e) && (0, g.uL)(T.Z5c.CHANNEL(e)), d.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, u.discardOnboardingPromise)(e)), (0, I.mL)(e), t && m.Z.open(e, l), l === T.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e));
        };
    return (0, i.jsxs)(s.Notice, {
        color: s.NoticeColors.BRAND,
        className: R.notice,
        children: [
            (0, i.jsxs)(E, {
                onClick: () => L({ backToSettings: !0 }),
                className: R.backButton,
                children: [
                    (0, i.jsx)(h.Z, {
                        width: 16,
                        height: 16,
                        direction: h.Z.Directions.LEFT,
                        className: R.backArrow
                    }),
                    B
                ]
            }),
            O && r
                ? (0, i.jsx)('div', {
                      className: R.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: R.noticeText,
                          children: S.intl.string(S.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: R.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: R.noticeText,
                              children: r ? S.intl.formatToPlainString(S.t['0PHahI'], { numRoles: Object.keys(t).length }) : S.intl.formatToPlainString(S.t.vMlK8v, { numRoles: Object.keys(t).length })
                          }),
                          (0, i.jsx)(s.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(v.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: n } = e;
                                  return (0, i.jsxs)(E, {
                                      onClick: n,
                                      children: [
                                          j,
                                          (0, i.jsx)(_.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: _.Z.Directions.DOWN,
                                              className: R.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          r &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: R.previewWarning,
                                  text: S.intl.string(S.t.mW4DUF),
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          x &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: R.previewWarning,
                                  text: S.intl.formatToPlainString(S.t.eummvb, {
                                      maxTiers: w.fF,
                                      maxProducts: Z.dD
                                  }),
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            r || l === T.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(k, { onClick: () => L({ backToSettings: !1 }) })
        ]
    });
}
function j(e) {
    let { guildId: n } = e;
    return (0, o.e7)([C.Z], () => C.Z.isViewingRoles(n))
        ? (0, i.jsx)('div', {
              className: r()(R.settingsWrapper, {
                  [R.windows]: (0, x.isWindows)(),
                  [R.osx]: (0, x.isMac)()
              }),
              children: (0, i.jsx)(B, {})
          })
        : null;
}
