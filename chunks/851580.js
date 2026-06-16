"use strict";
n.d(t, { v: () => _ });
var i = n(627968),
    r = n(554146),
    s = n(43105),
    a = n(131607),
    o = n(966597),
    l = n(49999),
    u = n(375708),
    c = n(936037);
let d = r.M.FOR_LATER_POPOUT_COACHMARK;
function _(e) {
    let { location: t, targetElementRef: n } = e,
        { enabled: r, inInbox: _ } = o.A.useConfig({ location: "ForLaterCoachmarkWeb" }),
        [h, f] = (0, a.kn)(r && t === (_ ? "inbox-button" : "bookmarks-button") ? [d] : [], void 0);
    return h !== d
        ? null
        : (0, i.jsx)(s.A, {
              targetElementRef: n,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: { align: "end" },
              onRequestClose: () => f(l.i.USER_DISMISS),
              title: u.intl.string(u.t.qPbFK2),
              body: u.intl.string(u.t.URrJq1),
              actions: [{ text: u.intl.string(u.t["NX+WJN"]), onClick: () => f(l.i.USER_DISMISS) }],
              graphic: { type: "image", src: c },
          });
}
