r.d(t, { Z: () => T }), r(47120);
var n = r(192379),
    i = r(399606),
    a = r(544891),
    o = r(570140),
    s = r(367907),
    l = r(430824),
    c = r(496675),
    d = r(626135),
    u = r(70956),
    _ = r(997787),
    p = r(981631);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let I = +u.Z.Millis.DAY,
    A = new Map(),
    T = {
        useShouldShowChannelNotice(e) {
            let t = (0, i.e7)([l.Z, c.Z], () => {
                let t = l.Z.getGuild(e);
                return null != t && c.Z.can(p.Plq.ADMINISTRATOR, t);
            });
            n.useEffect(() => {
                t &&
                    (function (e) {
                        var t;
                        let r = Date.now(),
                            n = null != (t = A.get(e)) ? t : 0;
                        r < n + I ||
                            (A.set(e, r),
                            a.tn
                                .post({
                                    url: p.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                                    rejectWithError: !0
                                })
                                .then(
                                    (t) => {
                                        var r, n;
                                        o.Z.dispatch({
                                            type: 'COMMANDS_MIGRATION_UPDATE_SUCCESS',
                                            guildId: e,
                                            integrationIdsWithAppCommands: null != (n = null == (r = t.body) ? void 0 : r.integration_ids_with_app_commands) ? n : []
                                        });
                                    },
                                    () => {
                                        A.set(e, n);
                                    }
                                ));
                    })(e);
            }, [e, t]);
            let r = (0, i.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
            return t && r;
        },
        dismissNotice(e) {
            o.Z.dispatch({
                type: 'COMMANDS_MIGRATION_NOTICE_DISMISSED',
                guildId: e
            });
        },
        dismissOverviewTooltip(e, t) {
            var r;
            o.Z.dispatch({
                type: 'COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED',
                guildId: e,
                integrationId: t.id
            }),
                d.default.track(
                    p.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED,
                    O(E({}, (0, s.hH)(e)), {
                        application_id: null == (r = t.application) ? void 0 : r.id,
                        location: 'overview'
                    })
                );
        },
        dismissToggleTooltip(e, t) {
            var r;
            void 0 !== t &&
                (o.Z.dispatch({
                    type: 'COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED',
                    integrationId: t.id
                }),
                d.default.track(
                    p.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED,
                    O(E({}, (0, s.hH)(e)), {
                        application_id: null == (r = t.application) ? void 0 : r.id,
                        location: 'toggle'
                    })
                ));
        }
    };
