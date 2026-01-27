r.d(t, {
    v: () => h,
}),
    r(896048);
var n = r(627968),
    l = r(554146),
    s = r(342494),
    a = r(379848),
    i = r(966597),
    o = r(49999),
    c = r(985018),
    u = r(936037);
let d = l.M.FOR_LATER_POPOUT_COACHMARK;

function h(e) {
    let { location: t, targetElementRef: r } = e,
        { enabled: l, inInbox: h } = i.A.useExperiment(
            {
                location: "ForLaterCoachmarkWeb",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        [p, f] = (0, a.kn)(l && t === (h ? "inbox-button" : "bookmarks-button") ? [d] : [], void 0);
    return p !== d
        ? null
        : (0, n.jsx)(s.AM, {
              targetElementRef: r,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: {
                  align: "end",
              },
              onRequestClose: () => f(o.i.USER_DISMISS),
              title: c.intl.string(c.t.qPbFK2),
              body: c.intl.string(c.t.URrJq1),
              actions: [
                  {
                      text: c.intl.string(c.t["NX+WJN"]),
                      onClick: () => f(o.i.USER_DISMISS),
                  },
              ],
              graphic: {
                  type: "image",
                  src: u,
              },
          });
}
