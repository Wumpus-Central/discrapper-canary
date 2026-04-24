n.d(t, { v: () => _ });
var i = n(627968),
    r = n(554146),
    a = n(43105),
    l = n(932001),
    s = n(966597),
    o = n(49999),
    d = n(985018),
    c = n(936037);
let u = r.M.FOR_LATER_POPOUT_COACHMARK;
function _(e) {
    let { location: t, targetElementRef: n } = e,
        { enabled: r, inInbox: _ } = s.A.useConfig({ location: "ForLaterCoachmarkWeb" }),
        [A, h] = (0, l.kn)(r && t === (_ ? "inbox-button" : "bookmarks-button") ? [u] : [], void 0);
    return A !== u
        ? null
        : (0, i.jsx)(a.A, {
              targetElementRef: n,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: { align: "end" },
              onRequestClose: () => h(o.i.USER_DISMISS),
              title: d.intl.string(d.t.qPbFK2),
              body: d.intl.string(d.t.URrJq1),
              actions: [{ text: d.intl.string(d.t["NX+WJN"]), onClick: () => h(o.i.USER_DISMISS) }],
              graphic: { type: "image", src: c },
          });
}
