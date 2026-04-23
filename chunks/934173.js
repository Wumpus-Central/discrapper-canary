e.d(n, { A: () => p, y: () => x });
var i = e(627968);
e(64700);
var l = e(729937),
    r = e(541806),
    a = e(307600),
    s = e(998218),
    o = e(939496),
    c = e(993401),
    u = e(996988),
    d = e(985018),
    A = e(514566);
async function x(t) {
    let { activity: n, user: e, index: i } = t;
    try {
        let t = await (0, l.yb)(n, e.id);
        if (t.button_urls.length <= i) return;
        let r = t.button_urls[i];
        if ("string" != typeof r) return;
        let o = s.A.safeParseWithQuery(r);
        if (o?.protocol == null || o?.hostname == null) return;
        (0, a.h)({ href: s.A.format(o), trusted: !1 });
    } catch (t) {}
}
function p(t) {
    let { user: n, activity: e, onAction: l } = t,
        { themeType: a } = (0, o.E)();
    if (e?.buttons == null || e.buttons.length < 1) return null;
    let s = (0, r.A)(e);
    return a === u.d.MODAL_V2
        ? (0, i.jsx)("div", {
              className: A.fO,
              children: e.buttons.map((t, r) =>
                  (0, i.jsx)(
                      c.FD,
                      {
                          text: s ? d.intl.string(d.t.I6JG46) : t,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: s ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  x({ user: n, activity: e, index: r });
                          },
                      },
                      r,
                  ),
              ),
          })
        : (0, i.jsx)("div", {
              className: A.fO,
              children: e.buttons.map((t, r) =>
                  (0, i.jsx)(
                      c.FD,
                      {
                          text: s ? d.intl.string(d.t.I6JG46) : t,
                          fullWidth: !0,
                          onClick: (t) => {
                              t.stopPropagation(),
                                  l?.({ action: s ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  x({ user: n, activity: e, index: r });
                          },
                      },
                      r,
                  ),
              ),
          });
}
