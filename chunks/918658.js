t.d(n, {
    Z: function () {
        return E;
    },
    d: function () {
        return O;
    }
});
var i = t(200651);
t(192379);
var o = t(120356),
    r = t.n(o),
    a = t(442837),
    l = t(692547),
    c = t(481060),
    s = t(549817),
    d = t(819553),
    u = t(17181),
    b = t(303737),
    m = t(434404),
    g = t(703656),
    _ = t(944486),
    p = t(914010),
    f = t(671533),
    h = t(259580),
    C = t(358085),
    x = t(962086),
    S = t(160404),
    I = t(889695),
    B = t(981631),
    T = t(176505),
    k = t(302463),
    v = t(293810),
    w = t(388032),
    N = t(781705);
function R(e) {
    let { className: n, onClick: t, children: o } = e;
    return (0, i.jsx)(c.Button, {
        className: r()(N.button, n),
        innerClassName: N.buttonInner,
        look: c.Button.Looks.OUTLINED,
        color: c.Button.Colors.WHITE,
        size: c.Button.Sizes.NONE,
        onClick: t,
        children: o
    });
}
function Z(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(R, {
        onClick: n,
        children: w.intl.string(w.t.R9GHyc)
    });
}
function E() {
    let e = (0, a.e7)([p.Z], () => p.Z.getGuildId()),
        n = (0, a.e7)([_.Z], () => _.Z.getChannelId(e)),
        {
            viewingRoles: t,
            backNavigationSection: o,
            isFullServerPreview: r,
            isServerShopPreview: C
        } = (0, a.cj)([S.Z], () => ({
            viewingRoles: null != e ? S.Z.getViewingRoles(e) : null,
            backNavigationSection: S.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && S.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && S.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e) return null;
    let E = (function (e) {
            switch (e) {
                case B.pNK.INTEGRATIONS:
                    return w.intl.string(w.t.k7LGdn);
                case B.pNK.ROLE_SUBSCRIPTIONS:
                    return w.intl.string(w.t.bRqiqa);
                case B.pNK.ONBOARDING:
                    return w.intl.string(w.t.qZpU3d);
                default:
                    return w.intl.string(w.t.MTIXho);
            }
        })(o),
        O = o === B.pNK.ROLE_SUBSCRIPTIONS ? w.intl.string(w.t.hZUCzc) : w.intl.string(w.t['/djIh4']),
        P = n === T.oC.GUILD_ONBOARDING,
        j = (n) => {
            let { backToSettings: t } = n;
            null != e && (S.Z.isFullServerPreview(e) && (0, g.uL)(B.Z5c.CHANNEL(e)), d.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, u.discardOnboardingPromise)(e)), (0, x.mL)(e), t && m.Z.open(e, o), o === B.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e));
        };
    return (0, i.jsxs)(c.Notice, {
        color: c.NoticeColors.BRAND,
        className: N.notice,
        children: [
            (0, i.jsxs)(R, {
                onClick: () => j({ backToSettings: !0 }),
                className: N.backButton,
                children: [
                    (0, i.jsx)(f.Z, {
                        width: 16,
                        height: 16,
                        direction: f.Z.Directions.LEFT,
                        className: N.backArrow
                    }),
                    E
                ]
            }),
            P && r
                ? (0, i.jsx)('div', {
                      className: N.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: N.noticeText,
                          children: w.intl.string(w.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: N.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: N.noticeText,
                              children: r ? w.intl.formatToPlainString(w.t['0PHahI'], { numRoles: Object.keys(t).length }) : w.intl.formatToPlainString(w.t.vMlK8v, { numRoles: Object.keys(t).length })
                          }),
                          (0, i.jsx)(c.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(I.Z, { guildId: e }),
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
                                              className: N.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          r &&
                              (0, i.jsx)(c.TooltipContainer, {
                                  className: N.previewWarning,
                                  text: w.intl.string(w.t.mW4DUF),
                                  children: (0, i.jsx)(c.CircleWarningIcon, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          C &&
                              (0, i.jsx)(c.TooltipContainer, {
                                  className: N.previewWarning,
                                  text: w.intl.formatToPlainString(w.t.eummvb, {
                                      maxTiers: v.fF,
                                      maxProducts: k.dD
                                  }),
                                  children: (0, i.jsx)(c.CircleWarningIcon, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            r || o === B.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(Z, { onClick: () => j({ backToSettings: !1 }) })
        ]
    });
}
function O(e) {
    let { guildId: n } = e;
    return (0, a.e7)([S.Z], () => S.Z.isViewingRoles(n))
        ? (0, i.jsx)('div', {
              className: r()(N.settingsWrapper, {
                  [N.windows]: (0, C.isWindows)(),
                  [N.osx]: (0, C.isMac)()
              }),
              children: (0, i.jsx)(E, {})
          })
        : null;
}
