n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(267102),
    s = n(993952),
    a = n(576705),
    o = n(652215),
    c = n(985018);

function u(e, t, n, u) {
    let d = {
            streamUserId: n,
            channel: e,
            applicationId: u,
            appContext: (0, i.Us)(),
        },
        p = () => {
            null != t &&
                e.type === o.rbe.GUILD_VOICE &&
                (0, s.X)(
                    (function (e) {
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
                    })(
                        {
                            guild: t,
                        },
                        d,
                    ),
                );
        };
    return null != u
        ? (0, r.jsx)(l.Drp, {
              id: "invite-to-stream",
              label: c.intl.string(c.t["OzOM/q"]),
              action: p,
              icon: l.DpX,
              leadingAccessory: {
                  type: "icon",
                  icon: l.DpX,
              },
          })
        : null != t && null != e && a.A.can(o.xBc.CREATE_INSTANT_INVITE, e)
          ? (0, r.jsx)(l.Drp, {
                id: "invite-friends",
                label: c.intl.string(c.t["EE+P0H"]),
                action: p,
                icon: l.Rvf,
                leadingAccessory: {
                    type: "icon",
                    icon: l.Rvf,
                },
            })
          : null;
}
