"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(315246),
    u = n(92240),
    c = n(679492),
    d = n(645463),
    _ = n(985018);
function f(e) {
    let {
            children: t,
            user: n,
            activity: f,
            entry: p,
            display: h,
            onSelect: m,
            onClose: g,
            appContext: E,
            targetElementRef: A,
        } = e,
        [I, T] = i.useState(!1),
        { analyticsLocations: y } = (0, o.Ay)(s.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        S = (0, u.A)({ display: h, user: n, activity: f, entry: p, analyticsLocations: y }),
        v = (0, c.NR)(),
        C = i.useRef(null),
        b = v?.interactionPopoutTargetRef ?? C,
        N = (0, d.A)({
            entry: p,
            activity: f,
            user: n,
            display: h,
            onClose: g,
            onAction: S,
            isMenuOpen: I,
            appContext: E,
        });
    return 0 === N.length || n.bot
        ? null
        : (0, r.jsx)(a.YNO, {
              targetElementRef: A ?? b,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  S({ action: "OPEN_MENU" }), T(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)("div", {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, r.jsx)(a.W1t, {
                          "data-menu-migrated-auto": !0,
                          navId: l.n,
                          onClose: () => {
                              t(), T(!1);
                          },
                          "aria-label": _.intl.string(_.t.PlAQz1),
                          onSelect: m,
                          children: (0, r.jsx)(a.rXV, { children: N }),
                      }),
                  });
              },
              children: t,
          });
}
