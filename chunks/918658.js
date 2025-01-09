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
    g = t(434404),
    m = t(703656),
    p = t(944486),
    f = t(914010),
    _ = t(671533),
    h = t(259580),
    x = t(358085),
    C = t(962086),
    I = t(160404),
    v = t(889695),
    T = t(981631),
    N = t(176505),
    S = t(302463),
    w = t(293810),
    Z = t(388032),
    E = t(646217);
function R(e) {
    let { className: n, onClick: t, children: l } = e;
    return (0, i.jsx)(s.Button, {
        className: r()(E.button, n),
        innerClassName: E.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: t,
        children: l
    });
}
function k(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(R, {
        onClick: n,
        children: Z.intl.string(Z.t.R9GHyc)
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
        } = (0, o.cj)([I.Z], () => ({
            viewingRoles: null != e ? I.Z.getViewingRoles(e) : null,
            backNavigationSection: I.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && I.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && I.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e) return null;
    let B = (function (e) {
            switch (e) {
                case T.pNK.INTEGRATIONS:
                    return Z.intl.string(Z.t.k7LGdn);
                case T.pNK.ROLE_SUBSCRIPTIONS:
                    return Z.intl.string(Z.t.bRqiqa);
                case T.pNK.ONBOARDING:
                    return Z.intl.string(Z.t.qZpU3d);
                default:
                    return Z.intl.string(Z.t.MTIXho);
            }
        })(l),
        j = l === T.pNK.ROLE_SUBSCRIPTIONS ? Z.intl.string(Z.t.hZUCzc) : Z.intl.string(Z.t['/djIh4']),
        O = n === N.oC.GUILD_ONBOARDING,
        L = (n) => {
            let { backToSettings: t } = n;
            null != e && (I.Z.isFullServerPreview(e) && (0, m.uL)(T.Z5c.CHANNEL(e)), d.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, u.discardOnboardingPromise)(e)), (0, C.mL)(e), t && g.Z.open(e, l), l === T.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e));
        };
    return (0, i.jsxs)(s.Notice, {
        color: s.NoticeColors.BRAND,
        className: E.notice,
        children: [
            (0, i.jsxs)(R, {
                onClick: () => L({ backToSettings: !0 }),
                className: E.backButton,
                children: [
                    (0, i.jsx)(_.Z, {
                        width: 16,
                        height: 16,
                        direction: _.Z.Directions.LEFT,
                        className: E.backArrow
                    }),
                    B
                ]
            }),
            O && r
                ? (0, i.jsx)('div', {
                      className: E.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: E.noticeText,
                          children: Z.intl.string(Z.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: E.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: E.noticeText,
                              children: r ? Z.intl.formatToPlainString(Z.t['0PHahI'], { numRoles: Object.keys(t).length }) : Z.intl.formatToPlainString(Z.t.vMlK8v, { numRoles: Object.keys(t).length })
                          }),
                          (0, i.jsx)(s.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(v.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: n } = e;
                                  return (0, i.jsxs)(R, {
                                      onClick: n,
                                      children: [
                                          j,
                                          (0, i.jsx)(h.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: h.Z.Directions.DOWN,
                                              className: E.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          r &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: E.previewWarning,
                                  text: Z.intl.string(Z.t.mW4DUF),
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          x &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: E.previewWarning,
                                  text: Z.intl.formatToPlainString(Z.t.eummvb, {
                                      maxTiers: w.fF,
                                      maxProducts: S.dD
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
    return (0, o.e7)([I.Z], () => I.Z.isViewingRoles(n))
        ? (0, i.jsx)('div', {
              className: r()(E.settingsWrapper, {
                  [E.windows]: (0, x.isWindows)(),
                  [E.osx]: (0, x.isMac)()
              }),
              children: (0, i.jsx)(B, {})
          })
        : null;
}
