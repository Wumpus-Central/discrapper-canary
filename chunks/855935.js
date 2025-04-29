n.d(t, { Z: () => p });
var r = n(255367),
    l = n(73800),
    o = n(498607),
    i = n.n(o),
    a = n(399606),
    s = n(481060),
    c = n(588215),
    u = n(893966),
    d = n(527379),
    C = n(981631),
    m = n(388032);
let b = [c.d$.ORDER_BY_GUILD_JOINED_AT_DESC, c.d$.ORDER_BY_GUILD_JOINED_AT_ASC, c.d$.ORDER_BY_USER_ID_DESC, c.d$.ORDER_BY_USER_ID_ASC];
function p(e) {
    let { guildId: t, onClose: n } = e,
        o = (0, a.e7)([u.Z], () => u.Z.getSearchStateByGuildId(t), [t], i()),
        p = l.useCallback(
            (e) => {
                var n, r;
                (0, d.Dr)(
                    t,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, o)),
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
                    n)
                );
            },
            [t, o]
        );
    return (0, r.jsx)(s.v2r, {
        navId: 'members-table-sort-menu',
        onClose: () => {
            null == n || n();
        },
        'aria-label': m.intl.string(m.t['u/7RdX']),
        onSelect: C.dG4,
        children: (0, r.jsx)(s.kSQ, {
            children: b.map((e) => {
                var t;
                return (0, r.jsx)(
                    s.k5B,
                    {
                        id: 'members-table-sort-'.concat(e),
                        label: (function (e) {
                            switch (e) {
                                case c.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
                                    return m.intl.string(m.t.V7zCwM);
                                case c.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
                                    return m.intl.string(m.t.l2Zaen);
                                case c.d$.ORDER_BY_USER_ID_DESC:
                                    return m.intl.string(m.t.xMA6RE);
                                case c.d$.ORDER_BY_USER_ID_ASC:
                                    return m.intl.string(m.t.bUKkZ2);
                                default:
                                    return null;
                            }
                        })(e),
                        checked: (t = o.selectedSort) === c.d$.ORDER_BY_UNSPECIFIED || null == t ? e === c.d$.ORDER_BY_GUILD_JOINED_AT_DESC : e === t,
                        disabled: !1,
                        action: () => p(e),
                        group: 'members-table-sort'
                    },
                    'members-table-sort-'.concat(e)
                );
            })
        })
    });
}
