n.d(t, {
    A: () => _,
    y: () => p,
});
var r = n(627968);
n(64700);
var i = n(729937),
    a = n(541806),
    s = n(307600),
    o = n(998218),
    l = n(939496),
    c = n(993401),
    u = n(996988),
    d = n(985018),
    f = n(380297);
async function p(e) {
    let { activity: t, user: n, index: r } = e;
    try {
        let e = await (0, i.yb)(t, n.id);
        if (e.button_urls.length <= r) return;
        let a = e.button_urls[r];
        if ("string" != typeof a) return;
        let l = o.A.safeParseWithQuery(a);
        if ((null == l ? void 0 : l.protocol) == null || (null == l ? void 0 : l.hostname) == null) return;
        (0, s.h)({
            href: o.A.format(l),
            trusted: !1,
        });
    } catch (e) {}
}

function _(e) {
    let { user: t, activity: n, onAction: i } = e,
        { themeType: s } = (0, l.E)();
    if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1) return null;
    let o = (0, a.A)(n);
    return s === u.d.MODAL_V2
        ? (0, r.jsx)("div", {
              className: f.fO,
              children: n.buttons.map((e, a) =>
                  (0, r.jsx)(
                      c.FD,
                      {
                          text: o ? d.intl.string(d.t.I6JG46) : e,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == i ||
                                      i({
                                          action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON",
                                      }),
                                  p({
                                      user: t,
                                      activity: n,
                                      index: a,
                                  });
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, r.jsx)("div", {
              className: f.fO,
              children: n.buttons.map((e, a) =>
                  (0, r.jsx)(
                      c.FD,
                      {
                          text: o ? d.intl.string(d.t.I6JG46) : e,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == i ||
                                      i({
                                          action: o ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON",
                                      }),
                                  p({
                                      user: t,
                                      activity: n,
                                      index: a,
                                  });
                          },
                      },
                      a,
                  ),
              ),
          });
}
