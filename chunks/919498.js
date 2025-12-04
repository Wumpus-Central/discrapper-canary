n.d(t, {
    F: () => d,
    L: () => f,
});
var r = n(54381),
    i = n(810568),
    l = n(168524),
    a = n(5192),
    o = n(971082),
    c = n(853072),
    s = n(388032),
    u = n(885486);
function d(e) {
    var { applicationId: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["applicationId"]);
    let i = (0, c.Z)(t);
    return i.length > 0
        ? (0, r.jsx)(
              o.Z,
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
                      label: s.intl.formatToPlainString(s.t.ujhJdG, { numFriends: i.length }),
                      users: i,
                      maxUsers: 4,
                  },
                  n,
              ),
          )
        : null;
}
function f(e) {
    let { userId: t, applicationId: n, guildId: d, channelId: f, className: g } = e,
        p = (0, c.Z)(n),
        m = p.length > 0,
        b = (function (e, t, n) {
            let r = e.slice(0, 3).map((e) => a.ZP.getName(t, n, e));
            return 1 === e.length
                ? s.intl.formatToPlainString(s.t.FURqTU, { name: r[0] })
                : 2 === e.length
                  ? s.intl.formatToPlainString(s.t["08Usu/"], {
                        name1: r[0],
                        name2: r[1],
                    })
                  : 3 === e.length
                    ? s.intl.formatToPlainString(s.t.NTYHag, {
                          name1: r[0],
                          name2: r[1],
                          name3: r[2],
                      })
                    : s.intl.formatToPlainString(s.t["i/5oAn"], {
                          name1: r[0],
                          name2: r[1],
                          name3: r[2],
                          numPeople: e.length - 3,
                      });
        })(p, d, f),
        h = (0, l.Z)({
            location: "SocialProofButton",
            applicationId: n,
            source: i.m1.UserProfile,
            sourceUserId: t,
            trackEntryPointImpression: !0,
        });
    return m && null != h
        ? (0, r.jsx)(o.$, {
              users: p,
              label: b,
              className: g,
              onClick: h,
              guildId: d,
              channelId: f,
              "aria-label": b,
              overflowCountColor: "text-strong",
              overflowCountClassName: u.gameCoverOverflowCount,
          })
        : null;
}
