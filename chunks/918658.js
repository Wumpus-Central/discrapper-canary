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
    s = t(692547),
    a = t(481060),
    c = t(549817),
    d = t(819553),
    u = t(17181),
    g = t(303737),
    b = t(434404),
    m = t(703656),
    p = t(944486),
    h = t(914010),
    f = t(671533),
    _ = t(259580),
    x = t(358085),
    C = t(962086),
    v = t(160404),
    T = t(889695),
    I = t(981631),
    N = t(176505),
    Z = t(302463),
    w = t(293810),
    S = t(388032),
    R = t(646217);
function E(e) {
    let { className: n, onClick: t, children: l } = e;
    return (0, i.jsx)(a.Button, {
        className: r()(R.button, n),
        innerClassName: R.buttonInner,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.WHITE,
        size: a.Button.Sizes.NONE,
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
    let e = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        n = (0, o.e7)([p.Z], () => p.Z.getChannelId(e)),
        {
            viewingRoles: t,
            backNavigationSection: l,
            isFullServerPreview: r,
            isServerShopPreview: x
        } = (0, o.cj)([v.Z], () => ({
            viewingRoles: null != e ? v.Z.getViewingRoles(e) : null,
            backNavigationSection: v.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && v.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && v.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e) return null;
    let B = (function (e) {
            switch (e) {
                case I.pNK.INTEGRATIONS:
                    return S.intl.string(S.t.k7LGdn);
                case I.pNK.ROLE_SUBSCRIPTIONS:
                    return S.intl.string(S.t.bRqiqa);
                case I.pNK.ONBOARDING:
                    return S.intl.string(S.t.qZpU3d);
                default:
                    return S.intl.string(S.t.MTIXho);
            }
        })(l),
        j = l === I.pNK.ROLE_SUBSCRIPTIONS ? S.intl.string(S.t.hZUCzc) : S.intl.string(S.t['/djIh4']),
        O = n === N.oC.GUILD_ONBOARDING,
        L = (n) => {
            let { backToSettings: t } = n;
            null != e && (v.Z.isFullServerPreview(e) && (0, m.uL)(I.Z5c.CHANNEL(e)), d.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, u.discardOnboardingPromise)(e)), (0, C.mL)(e), t && b.Z.open(e, l), l === I.pNK.ROLE_SUBSCRIPTIONS && (0, g.GN)(e));
        };
    return (0, i.jsxs)(a.Notice, {
        color: a.NoticeColors.BRAND,
        className: R.notice,
        children: [
            (0, i.jsxs)(E, {
                onClick: () => L({ backToSettings: !0 }),
                className: R.backButton,
                children: [
                    (0, i.jsx)(f.Z, {
                        width: 16,
                        height: 16,
                        direction: f.Z.Directions.LEFT,
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
                          (0, i.jsx)(a.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(T.Z, { guildId: e }),
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
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: R.previewWarning,
                                  text: S.intl.string(S.t.mW4DUF),
                                  children: (0, i.jsx)(a.CircleWarningIcon, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          x &&
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: R.previewWarning,
                                  text: S.intl.formatToPlainString(S.t.eummvb, {
                                      maxTiers: w.fF,
                                      maxProducts: Z.dD
                                  }),
                                  children: (0, i.jsx)(a.CircleWarningIcon, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            r || l === I.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(k, { onClick: () => L({ backToSettings: !1 }) })
        ]
    });
}
function j(e) {
    let { guildId: n } = e;
    return (0, o.e7)([v.Z], () => v.Z.isViewingRoles(n))
        ? (0, i.jsx)('div', {
              className: r()(R.settingsWrapper, {
                  [R.windows]: (0, x.isWindows)(),
                  [R.osx]: (0, x.isMac)()
              }),
              children: (0, i.jsx)(B, {})
          })
        : null;
}
