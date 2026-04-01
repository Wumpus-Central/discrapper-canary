"use strict";
n.d(t, { A: () => E, y: () => m });
var r = n(627968);
n(64700);
var i = n(729937),
    s = n(541806),
    a = n(352306),
    o = n(829203),
    l = n(307600),
    u = n(998218),
    c = n(939496),
    d = n(993401),
    _ = n(346640),
    f = n(996988),
    p = n(985018),
    h = n(844630);
async function m(e) {
    let { activity: t, user: n, index: r } = e;
    try {
        let e = await (0, i.yb)(t, n.id);
        if (t?.application_id === _.L8 && a.s.getConfig({ location: "rich_presence" }).enabled)
            return void (0, o.A)({ source: "rich_presence" });
        if (e.button_urls.length <= r) return;
        let s = e.button_urls[r];
        if ("string" != typeof s) return;
        let c = u.A.safeParseWithQuery(s);
        if (c?.protocol == null || c?.hostname == null) return;
        (0, l.h)({ href: u.A.format(c), trusted: !1 });
    } catch (e) {}
}
function E(e) {
    let { user: t, activity: n, onAction: i } = e,
        { themeType: a } = (0, c.E)();
    if (n?.buttons == null || n.buttons.length < 1) return null;
    let o = (0, s.A)(n);
    return a === f.d.MODAL_V2
        ? (0, r.jsx)("div", {
              className: h.fO,
              children: n.buttons.map((e, s) =>
                  (0, r.jsx)(
                      d.FD,
                      {
                          text: o ? p.intl.string(p.t.I6JG46) : e,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  i?.({ action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  m({ user: t, activity: n, index: s });
                          },
                      },
                      s,
                  ),
              ),
          })
        : (0, r.jsx)("div", {
              className: h.fO,
              children: n.buttons.map((e, s) =>
                  (0, r.jsx)(
                      d.FD,
                      {
                          text: o ? p.intl.string(p.t.I6JG46) : e,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  i?.({ action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  m({ user: t, activity: n, index: s });
                          },
                      },
                      s,
                  ),
              ),
          });
}
