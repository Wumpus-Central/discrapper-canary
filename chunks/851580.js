r.d(t, { v: () => h });
var n = r(627968),
    s = r(554146),
    l = r(342494),
    a = r(932001),
    i = r(966597),
    o = r(49999),
    c = r(985018),
    u = r(936037);
let d = s.M.FOR_LATER_POPOUT_COACHMARK;
function h(e) {
    let { location: t, targetElementRef: r } = e,
        { enabled: s, inInbox: h } = i.A.useConfig({ location: "ForLaterCoachmarkWeb" }),
        [_, f] = (0, a.kn)(s && t === (h ? "inbox-button" : "bookmarks-button") ? [d] : [], void 0);
    return _ !== d
        ? null
        : (0, n.jsx)(l.AM, {
              targetElementRef: r,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: { align: "end" },
              onRequestClose: () => f(o.i.USER_DISMISS),
              title: c.intl.string(c.t.qPbFK2),
              body: c.intl.string(c.t.URrJq1),
              actions: [{ text: c.intl.string(c.t["NX+WJN"]), onClick: () => f(o.i.USER_DISMISS) }],
              graphic: { type: "image", src: u },
          });
}
