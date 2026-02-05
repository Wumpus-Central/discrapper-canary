r.d(t, { v: () => h });
var s = r(627968),
    n = r(554146),
    l = r(342494),
    a = r(379848),
    i = r(966597),
    o = r(49999),
    u = r(985018),
    c = r(936037);
let d = n.M.FOR_LATER_POPOUT_COACHMARK;
function h(e) {
    let { location: t, targetElementRef: r } = e,
        { enabled: n, inInbox: h } = i.A.useExperiment({ location: "ForLaterCoachmarkWeb" }, { autoTrackExposure: !1 }),
        [_, S] = (0, a.kn)(n && t === (h ? "inbox-button" : "bookmarks-button") ? [d] : [], void 0);
    return _ !== d
        ? null
        : (0, s.jsx)(l.AM, {
              targetElementRef: r,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: { align: "end" },
              onRequestClose: () => S(o.i.USER_DISMISS),
              title: u.intl.string(u.t.qPbFK2),
              body: u.intl.string(u.t.URrJq1),
              actions: [{ text: u.intl.string(u.t["NX+WJN"]), onClick: () => S(o.i.USER_DISMISS) }],
              graphic: { type: "image", src: c },
          });
}
