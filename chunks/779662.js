n.d(t, { A: () => m });
var r = n(627968),
    l = n(64700),
    i = n(33851),
    o = n.n(i),
    a = n(417597),
    s = n(397927),
    c = n(70738),
    d = n(266047),
    u = n(221950),
    C = n(652215),
    f = n(985018);
let b = [
    c.mF.ORDER_BY_GUILD_JOINED_AT_DESC,
    c.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
    c.mF.ORDER_BY_USER_ID_DESC,
    c.mF.ORDER_BY_USER_ID_ASC,
];
function m(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, a.bG)([d.A], () => d.A.getSearchStateByGuildId(t), [t], o()),
        m = l.useCallback(
            (e) => {
                var n, r;
                (0, u.Ld)(
                    t,
                    ((n = (function (e) {
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
                    })({}, i)),
                    (r = r = { selectedSort: e }),
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
                );
            },
            [t, i],
        );
    return (0, r.jsx)(s.W1t, {
        navId: "members-table-sort-menu",
        onClose: () => {
            null == n || n();
        },
        "aria-label": f.intl.string(f.t["u/7Rdc"]),
        onSelect: C.tEg,
        children: (0, r.jsx)(s.rXV, {
            children: b.map((e) => {
                var t;
                return (0, r.jsx)(
                    s.iDA,
                    {
                        id: "members-table-sort-".concat(e),
                        label: (function (e) {
                            switch (e) {
                                case c.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
                                    return f.intl.string(f.t.V7zCwB);
                                case c.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
                                    return f.intl.string(f.t.l2Zaet);
                                case c.mF.ORDER_BY_USER_ID_DESC:
                                    return f.intl.string(f.t.xMA6RG);
                                case c.mF.ORDER_BY_USER_ID_ASC:
                                    return f.intl.string(f.t.bUKkZx);
                                default:
                                    return null;
                            }
                        })(e),
                        checked:
                            (t = i.selectedSort) === c.mF.ORDER_BY_UNSPECIFIED || null == t
                                ? e === c.mF.ORDER_BY_GUILD_JOINED_AT_DESC
                                : e === t,
                        disabled: !1,
                        action: () => m(e),
                        group: "members-table-sort",
                    },
                    "members-table-sort-".concat(e),
                );
            }),
        }),
    });
}
