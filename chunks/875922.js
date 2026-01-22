n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(308528),
    s = n(58149),
    o = n(231608),
    c = n(954571),
    u = n(652215),
    d = n(985018);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { priorityMembers: n, partiedMembers: f } = e,
        h = i.useContext(c.AnalyticsContext),
        A = n.map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        g = 1 === f.length && 1 === n.length,
        m = n.length - f.length > 0;
    return (g || t) && !m && 0 !== A.length
        ? (0, r.jsx)(l.Drp, {
              id: "message",
              action: function () {
                  a.A.openPrivateChannel({
                      recipientIds: A,
                  }).then((t) => {
                      var n, r;
                      return s.Ay.trackWithMetadata(
                          u.HAw.ACTIVITY_FEED_DM_VISITED,
                          p(
                              {
                                  source:
                                      ((n = p({}, h.location)),
                                      (r = r =
                                          {
                                              object: u.ZSU.LIST_ITEM,
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(r)).forEach(function (e) {
                                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                            }),
                                      n),
                                  channel_id: t,
                                  recipient_id: "string" == typeof A ? A : A[0],
                                  af_recently_played: !1,
                              },
                              (0, o.o)(e),
                          ),
                      );
                  });
              },
              label: d.intl.string(d.t["g33r/P"]),
          })
        : null;
}
