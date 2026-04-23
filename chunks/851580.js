n.d(t, { v: () => A });
var i = n(627968),
    r = n(554146),
    a = n(265486),
    l = n(932001),
    s = n(966597),
    o = n(49999),
    d = n(985018),
    u = n(936037);
let c = r.M.FOR_LATER_POPOUT_COACHMARK;
function A(e) {
    let { location: t, targetElementRef: n } = e,
        { enabled: r, inInbox: A } = s.A.useConfig({ location: "ForLaterCoachmarkWeb" }),
        [h, _] = (0, l.kn)(r && t === (A ? "inbox-button" : "bookmarks-button") ? [c] : [], void 0);
    return h !== c
        ? null
        : (0, i.jsx)(a.A, {
              targetElementRef: n,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: { align: "end" },
              onRequestClose: () => _(o.i.USER_DISMISS),
              title: d.intl.string(d.t.qPbFK2),
              body: d.intl.string(d.t.URrJq1),
              actions: [{ text: d.intl.string(d.t["NX+WJN"]), onClick: () => _(o.i.USER_DISMISS) }],
              graphic: { type: "image", src: u },
          });
}
