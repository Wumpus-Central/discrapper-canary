n.d(t, { v: () => E });
var i = n(627968),
    a = n(554146),
    r = n(43105),
    s = n(932001),
    l = n(966597),
    o = n(49999),
    d = n(985018),
    c = n(936037);
let _ = a.M.FOR_LATER_POPOUT_COACHMARK;
function E(e) {
    let { location: t, targetElementRef: n } = e,
        { enabled: a, inInbox: E } = l.A.useConfig({ location: "ForLaterCoachmarkWeb" }),
        [u, A] = (0, s.kn)(a && t === (E ? "inbox-button" : "bookmarks-button") ? [_] : [], void 0);
    return u !== _
        ? null
        : (0, i.jsx)(r.A, {
              targetElementRef: n,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: { align: "end" },
              onRequestClose: () => A(o.i.USER_DISMISS),
              title: d.intl.string(d.t.qPbFK2),
              body: d.intl.string(d.t.URrJq1),
              actions: [{ text: d.intl.string(d.t["NX+WJN"]), onClick: () => A(o.i.USER_DISMISS) }],
              graphic: { type: "image", src: c },
          });
}
