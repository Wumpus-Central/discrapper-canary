n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(73153),
    o = n(58736),
    c = n(994500),
    u = n(291445),
    d = n(726079),
    p = n(985018);

function h(e) {
    let { className: t } = e,
        n = (0, l.bG)([c.A], () => c.A.getPendingCount() > 0),
        u = (0, a.rdh)(a.LU0.modules.chat.INPUT_ICON_SIZE);
    return (
        i.useEffect(() => {
            s.h.dispatch({
                type: "FRIENDS_LIST_POPOUT_MOUNTED",
            });
        }, []),
        (0, r.jsx)(d.l, {
            popoutPosition: "bottom",
            popoutAlign: "left",
            children: (e, i, l, s) => {
                var c, d;
                return (0, r.jsx)(
                    o.In,
                    ((c = (function (e) {
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
                    })({}, l)),
                    (d = d =
                        {
                            ref: s,
                            className: t,
                            onClick: e,
                            icon: a.$yI,
                            iconSize: u,
                            "aria-label": p.intl.string(p.t.TdEu5X),
                            tooltip: i ? null : p.intl.string(p.t.TdEu5X),
                            selected: i,
                            showBadge: n,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(d)).forEach(function (e) {
                              Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(d, e));
                          }),
                    c),
                );
            },
        })
    );
}

function f(e) {
    let { className: t } = e,
        { hasFriendList: n } = (0, u.K)("friends-button");
    return n
        ? (0, r.jsx)(h, {
              className: t,
          })
        : null;
}
