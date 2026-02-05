"use strict";
n.d(t, { A: () => p, y: () => f });
var r = n(627968);
n(64700);
var i = n(729937),
    a = n(541806),
    s = n(307600),
    o = n(998218),
    l = n(939496),
    u = n(993401),
    c = n(996988),
    d = n(985018),
    _ = n(380297);
async function f(e) {
    let { activity: t, user: n, index: r } = e;
    try {
        let e = await (0, i.yb)(t, n.id);
        if (e.button_urls.length <= r) return;
        let a = e.button_urls[r];
        if ("string" != typeof a) return;
        let l = o.A.safeParseWithQuery(a);
        if (l?.protocol == null || l?.hostname == null) return;
        (0, s.h)({ href: o.A.format(l), trusted: !1 });
    } catch (e) {}
}
function p(e) {
    let { user: t, activity: n, onAction: i } = e,
        { themeType: s } = (0, l.E)();
    if (n?.buttons == null || n.buttons.length < 1) return null;
    let o = (0, a.A)(n);
    return s === c.d.MODAL_V2
        ? (0, r.jsx)("div", {
              className: _.fO,
              children: n.buttons.map((e, a) =>
                  (0, r.jsx)(
                      u.FD,
                      {
                          text: o ? d.intl.string(d.t.I6JG46) : e,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  i?.({ action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  f({ user: t, activity: n, index: a });
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, r.jsx)("div", {
              className: _.fO,
              children: n.buttons.map((e, a) =>
                  (0, r.jsx)(
                      u.FD,
                      {
                          text: o ? d.intl.string(d.t.I6JG46) : e,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  i?.({ action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  f({ user: t, activity: n, index: a });
                          },
                      },
                      a,
                  ),
              ),
          });
}
