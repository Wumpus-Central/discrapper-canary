n.d(t, {
    Z: function () {
        return P;
    },
    d: function () {
        return L;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(692547),
    s = n(481060),
    c = n(549817),
    u = n(819553),
    d = n(17181),
    m = n(303737),
    h = n(434404),
    f = n(703656),
    p = n(944486),
    _ = n(914010),
    g = n(671533),
    E = n(259580),
    C = n(358085),
    I = n(962086),
    x = n(160404),
    N = n(889695),
    v = n(981631),
    T = n(176505),
    S = n(302463),
    A = n(293810),
    b = n(388032),
    j = n(646217);
function R(e) {
    let { className: t, onClick: n, children: r } = e;
    return (0, i.jsx)(s.Button, {
        className: l()(j.button, t),
        innerClassName: j.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: n,
        children: r
    });
}
function Z(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(R, {
        onClick: t,
        children: b.intl.string(b.t.R9GHyc)
    });
}
function P() {
    let e = (0, a.e7)([_.Z], () => _.Z.getGuildId()),
        t = (0, a.e7)([p.Z], () => p.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: C
        } = (0, a.cj)([x.Z], () => ({
            viewingRoles: null != e ? x.Z.getViewingRoles(e) : null,
            backNavigationSection: x.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && x.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && x.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let P = (function (e) {
            switch (e) {
                case v.pNK.INTEGRATIONS:
                    return b.intl.string(b.t.k7LGdn);
                case v.pNK.ROLE_SUBSCRIPTIONS:
                    return b.intl.string(b.t.bRqiqa);
                case v.pNK.ONBOARDING:
                    return b.intl.string(b.t.qZpU3d);
                default:
                    return b.intl.string(b.t.MTIXho);
            }
        })(r),
        L = r === v.pNK.ROLE_SUBSCRIPTIONS ? b.intl.string(b.t.hZUCzc) : b.intl.string(b.t['/djIh4']),
        y = t === T.oC.GUILD_ONBOARDING,
        O = (t) => {
            let { backToSettings: n } = t;
            null != e && (x.Z.isFullServerPreview(e) && (0, f.uL)(v.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, I.mL)(e), n && h.Z.open(e, r), r === v.pNK.ROLE_SUBSCRIPTIONS && (0, m.GN)(e));
        };
    return (0, i.jsxs)(s.Notice, {
        color: s.NoticeColors.BRAND,
        className: j.notice,
        children: [
            (0, i.jsxs)(R, {
                onClick: () => O({ backToSettings: !0 }),
                className: j.backButton,
                children: [
                    (0, i.jsx)(g.Z, {
                        width: 16,
                        height: 16,
                        direction: g.Z.Directions.LEFT,
                        className: j.backArrow
                    }),
                    P
                ]
            }),
            y && l
                ? (0, i.jsx)('div', {
                      className: j.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: j.noticeText,
                          children: b.intl.string(b.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: j.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: j.noticeText,
                              children: l ? b.intl.formatToPlainString(b.t['0PHahI'], { numRoles: Object.keys(n).length }) : b.intl.formatToPlainString(b.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, i.jsx)(s.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(N.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, i.jsxs)(R, {
                                      onClick: t,
                                      children: [
                                          L,
                                          (0, i.jsx)(E.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: E.Z.Directions.DOWN,
                                              className: j.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: j.previewWarning,
                                  text: b.intl.string(b.t.mW4DUF),
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: o.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          C &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: j.previewWarning,
                                  text: b.intl.formatToPlainString(b.t.eummvb, {
                                      maxTiers: A.fF,
                                      maxProducts: S.dD
                                  }),
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: o.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || r === v.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(Z, { onClick: () => O({ backToSettings: !1 }) })
        ]
    });
}
function L(e) {
    let { guildId: t } = e;
    return (0, a.e7)([x.Z], () => x.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: l()(j.settingsWrapper, {
                  [j.windows]: (0, C.isWindows)(),
                  [j.osx]: (0, C.isMac)()
              }),
              children: (0, i.jsx)(P, {})
          })
        : null;
}
