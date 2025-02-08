r.d(t, { Z: () => A }), r(47120);
var i = r(192379),
    n = r(399606),
    a = r(544891),
    s = r(570140),
    l = r(367907),
    o = r(430824),
    c = r(496675),
    d = r(626135),
    _ = r(70956),
    E = r(997787),
    u = r(981631);
let p = 1 * _.Z.Millis.DAY,
    I = new Map(),
    A = {
        useShouldShowChannelNotice(e) {
            let t = (0, n.e7)([o.Z, c.Z], () => {
                let t = o.Z.getGuild(e);
                return null != t && c.Z.can(u.Plq.ADMINISTRATOR, t);
            });
            i.useEffect(() => {
                t &&
                    (function (e) {
                        var t;
                        let r = Date.now(),
                            i = null !== (t = I.get(e)) && void 0 !== t ? t : 0;
                        !(r < i + p) &&
                            (I.set(e, r),
                            a.tn
                                .post({
                                    url: u.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                                    rejectWithError: !0
                                })
                                .then(
                                    (t) => {
                                        var r, i;
                                        s.Z.dispatch({
                                            type: 'COMMANDS_MIGRATION_UPDATE_SUCCESS',
                                            guildId: e,
                                            integrationIdsWithAppCommands: null !== (i = null === (r = t.body) || void 0 === r ? void 0 : r.integration_ids_with_app_commands) && void 0 !== i ? i : []
                                        });
                                    },
                                    () => {
                                        I.set(e, i);
                                    }
                                ));
                    })(e);
            }, [e, t]);
            let r = (0, n.e7)([E.Z], () => E.Z.shouldShowChannelNotice(e));
            return t && r;
        },
        dismissNotice(e) {
            s.Z.dispatch({
                type: 'COMMANDS_MIGRATION_NOTICE_DISMISSED',
                guildId: e
            });
        },
        dismissOverviewTooltip(e, t) {
            var r;
            s.Z.dispatch({
                type: 'COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED',
                guildId: e,
                integrationId: t.id
            }),
                d.default.track(u.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, l.hH)(e),
                    application_id: null === (r = t.application) || void 0 === r ? void 0 : r.id,
                    location: 'overview'
                });
        },
        dismissToggleTooltip(e, t) {
            var r;
            void 0 !== t &&
                (s.Z.dispatch({
                    type: 'COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED',
                    integrationId: t.id
                }),
                d.default.track(u.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, l.hH)(e),
                    application_id: null === (r = t.application) || void 0 === r ? void 0 : r.id,
                    location: 'toggle'
                }));
        }
    };
