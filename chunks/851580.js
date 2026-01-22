n.d(t, {
    v: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(554146),
    a = n(342494),
    s = n(379848),
    o = n(966597),
    l = n(49999),
    c = n(985018),
    u = n(936037);
let d = i.M.FOR_LATER_POPOUT_COACHMARK;

function f(e) {
    let { location: t, targetElementRef: n } = e,
        { enabled: i, inInbox: f } = o.A.useExperiment(
            {
                location: "ForLaterCoachmarkWeb",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        p = t === (f ? "inbox-button" : "bookmarks-button"),
        _ = i && p ? [d] : [],
        [h, m] = (0, s.kn)(_, void 0);
    return h !== d
        ? null
        : (0, r.jsx)(a.AM, {
              targetElementRef: n,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: {
                  align: "end",
              },
              onRequestClose: () => m(l.i.USER_DISMISS),
              title: c.intl.string(c.t.qPbFK2),
              body: c.intl.string(c.t.URrJq1),
              actions: [
                  {
                      text: c.intl.string(c.t["NX+WJN"]),
                      onClick: () => m(l.i.USER_DISMISS),
                  },
              ],
              graphic: {
                  type: "image",
                  src: u,
              },
          });
}
