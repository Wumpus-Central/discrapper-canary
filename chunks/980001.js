n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    l = n(626584),
    s = n(543465),
    a = n(723176);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = new l.A("ReadStates"),
    d = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await a.A.userGuildSettings(e).getMany(),
                r = performance.now();
            return c.log("asynchronously loaded in ".concat(r - t, "ms (userGuildSettings: ").concat(n.length, ")")), n;
        }
        resetInMemoryState() {}
        handleConnectionOpen(e, t) {
            e.userGuildSettings.partial || a.A.userGuildSettingsTransaction(t).delete(),
                this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
        }
        handleUserGuildSettingsUpdate(e, t) {
            let n = i().max(
                e.userGuildSettings.map((e) => {
                    var t;
                    return null != (t = e.version) ? t : -1;
                }),
            );
            null != n && this.write(e.userGuildSettings, n, t);
        }
        write(e, t, n) {
            let r = a.A.userGuildSettingsTransaction(n);
            for (let t of e) {
                var i;
                let e = (function (e, t) {
                    return (
                        (t = null != t ? t : {}),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(t)).forEach(function (n) {
                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                              }),
                        e
                    );
                })(
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
                                    o(e, t, n[t]);
                                });
                        }
                        return e;
                    })({}, (0, s.wn)(t.guild_id), t),
                    {
                        channel_overrides: (0, s.b5)(t.channel_overrides),
                    },
                );
                r.put(null != (i = t.guild_id) ? i : "dm-sentinel", e);
            }
            a.A.nonGuildVersionsTransaction(n).put({
                id: "user_guild_settings_version",
                version: t,
            });
        }
        constructor() {
            o(this, "actions", {
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t),
            });
        }
    })();
