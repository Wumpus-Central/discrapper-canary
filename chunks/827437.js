e.d(n, { A: () => f });
var i = e(627968),
    l = e(64700),
    r = e(265872),
    a = e(861672),
    s = e(477782),
    o = e(793574),
    c = e(688810),
    u = e(315246),
    d = e(92240),
    A = e(679492),
    x = e(645463),
    p = e(985018);
function f(t) {
    let {
            children: n,
            user: e,
            activity: f,
            entry: _,
            display: m,
            onSelect: g,
            onClose: E,
            appContext: T,
            targetElementRef: N,
        } = t,
        [C, I] = l.useState(!1),
        { analyticsLocations: S } = (0, c.Ay)(o.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        O = (0, d.A)({ display: m, user: e, activity: f, entry: _, analyticsLocations: S }),
        y = (0, A.NR)(),
        h = l.useRef(null),
        j = y?.interactionPopoutTargetRef ?? h,
        v = (0, x.A)({
            entry: _,
            activity: f,
            user: e,
            display: m,
            onClose: E,
            onAction: O,
            isMenuOpen: C,
            appContext: T,
        });
    return 0 === v.length || e.bot
        ? null
        : (0, i.jsx)(r.Y, {
              targetElementRef: N ?? j,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  O({ action: "OPEN_MENU" }), I(!0);
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, i.jsx)("div", {
                      onClick: (t) => t.stopPropagation(),
                      children: (0, i.jsx)(a.W, {
                          "data-menu-migrated-auto": !0,
                          navId: u.n,
                          onClose: () => {
                              n(), I(!1);
                          },
                          "aria-label": p.intl.string(p.t.PlAQz1),
                          onSelect: g,
                          children: (0, i.jsx)(s.rX, { children: v }),
                      }),
                  });
              },
              children: n,
          });
}
