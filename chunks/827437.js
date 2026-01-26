n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(315246),
    c = n(92240),
    u = n(679492),
    d = n(645463),
    f = n(985018);

function p(e) {
    var t;
    let {
            children: n,
            user: p,
            activity: _,
            entry: h,
            display: m,
            onSelect: g,
            onClose: E,
            appContext: y,
            targetElementRef: b,
        } = e,
        [O, v] = i.useState(!1),
        { analyticsLocations: A } = (0, o.Ay)(s.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        I = (0, c.A)({
            display: m,
            user: p,
            activity: _,
            entry: h,
            analyticsLocations: A,
        }),
        S = (0, u.NR)(),
        T = i.useRef(null),
        C = null != (t = null == S ? void 0 : S.interactionPopoutTargetRef) ? t : T,
        N = (0, d.A)({
            entry: h,
            activity: _,
            user: p,
            display: m,
            onClose: E,
            onAction: I,
            isMenuOpen: O,
            appContext: y,
        });
    return 0 === N.length || p.bot
        ? null
        : (0, r.jsx)(a.YNO, {
              targetElementRef: null != b ? b : C,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  I({
                      action: "OPEN_MENU",
                  }),
                      v(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)("div", {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, r.jsx)(a.W1t, {
                          "data-menu-migrated-auto": !0,
                          navId: l.n,
                          onClose: () => {
                              t(), v(!1);
                          },
                          "aria-label": f.intl.string(f.t.PlAQz1),
                          onSelect: g,
                          children: (0, r.jsx)(a.rXV, {
                              children: N,
                          }),
                      }),
                  });
              },
              children: n,
          });
}
