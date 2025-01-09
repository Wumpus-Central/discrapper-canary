t.d(n, {
    Z: function () {
        return B;
    },
    d: function () {
        return O;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
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
    _ = t(671533),
    h = t(259580),
    x = t(358085),
    C = t(962086),
    I = t(160404),
    v = t(889695),
    T = t(981631),
    N = t(176505),
    w = t(302463),
    Z = t(293810),
    S = t(388032),
    E = t(646217);
function R(e) {
    let { className: n, onClick: t, children: r } = e;
    return (0, i.jsx)(s.Button, {
        className: l()(E.button, n),
        innerClassName: E.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: t,
        children: r
    });
}
function k(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(R, {
        onClick: n,
        children: S.intl.string(S.t.R9GHyc)
    });
}
function B() {
    let e = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        n = (0, o.e7)([p.Z], () => p.Z.getChannelId(e)),
        {
            viewingRoles: t,
            backNavigationSection: r,
            isFullServerPreview: l,
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
                    return S.intl.string(S.t.k7LGdn);
                case T.pNK.ROLE_SUBSCRIPTIONS:
                    return S.intl.string(S.t.bRqiqa);
                case T.pNK.ONBOARDING:
                    return S.intl.string(S.t.qZpU3d);
                default:
                    return S.intl.string(S.t.MTIXho);
            }
        })(r),
        O = r === T.pNK.ROLE_SUBSCRIPTIONS ? S.intl.string(S.t.hZUCzc) : S.intl.string(S.t['/djIh4']),
        j = n === N.oC.GUILD_ONBOARDING,
        L = (n) => {
            let { backToSettings: t } = n;
            null != e && (I.Z.isFullServerPreview(e) && (0, g.uL)(T.Z5c.CHANNEL(e)), d.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, u.discardOnboardingPromise)(e)), (0, C.mL)(e), t && m.Z.open(e, r), r === T.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e));
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
            j && l
                ? (0, i.jsx)('div', {
                      className: E.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: E.noticeText,
                          children: S.intl.string(S.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: E.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: E.noticeText,
                              children: l ? S.intl.formatToPlainString(S.t['0PHahI'], { numRoles: Object.keys(t).length }) : S.intl.formatToPlainString(S.t.vMlK8v, { numRoles: Object.keys(t).length })
                          }),
                          (0, i.jsx)(s.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(v.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: n } = e;
                                  return (0, i.jsxs)(R, {
                                      onClick: n,
                                      children: [
                                          O,
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
                          l &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: E.previewWarning,
                                  text: S.intl.string(S.t.mW4DUF),
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          x &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: E.previewWarning,
                                  text: S.intl.formatToPlainString(S.t.eummvb, {
                                      maxTiers: Z.fF,
                                      maxProducts: w.dD
                                  }),
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || r === T.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(k, { onClick: () => L({ backToSettings: !1 }) })
        ]
    });
}
function O(e) {
    let { guildId: n } = e;
    return (0, o.e7)([I.Z], () => I.Z.isViewingRoles(n))
        ? (0, i.jsx)('div', {
              className: l()(E.settingsWrapper, {
                  [E.windows]: (0, x.isWindows)(),
                  [E.osx]: (0, x.isMac)()
              }),
              children: (0, i.jsx)(B, {})
          })
        : null;
}
