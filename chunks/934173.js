"use strict";
n.d(t, { A: () => p, y: () => f });
var r = n(627968);
n(64700);
var i = n(729937),
    s = n(541806),
    a = n(307600),
    o = n(998218),
    l = n(939496),
    u = n(993401),
    c = n(996988),
    d = n(985018),
    _ = n(844630);
async function f(e) {
    let { activity: t, user: n, index: r } = e;
    try {
        let e = await (0, i.yb)(t, n.id);
        if (e.button_urls.length <= r) return;
        let s = e.button_urls[r];
        if ("string" != typeof s) return;
        let l = o.A.safeParseWithQuery(s);
        if (l?.protocol == null || l?.hostname == null) return;
        (0, a.h)({ href: o.A.format(l), trusted: !1 });
    } catch (e) {}
}
function p(e) {
    let { user: t, activity: n, onAction: i } = e,
        { themeType: a } = (0, l.E)();
    if (n?.buttons == null || n.buttons.length < 1) return null;
    let o = (0, s.A)(n);
    return a === c.d.MODAL_V2
        ? (0, r.jsx)("div", {
              className: _.fO,
              children: n.buttons.map((e, s) =>
                  (0, r.jsx)(
                      u.FD,
                      {
                          text: o ? d.intl.string(d.t.I6JG46) : e,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  i?.({ action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  f({ user: t, activity: n, index: s });
                          },
                      },
                      s,
                  ),
              ),
          })
        : (0, r.jsx)("div", {
              className: _.fO,
              children: n.buttons.map((e, s) =>
                  (0, r.jsx)(
                      u.FD,
                      {
                          text: o ? d.intl.string(d.t.I6JG46) : e,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  i?.({ action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  f({ user: t, activity: n, index: s });
                          },
                      },
                      s,
                  ),
              ),
          });
}
