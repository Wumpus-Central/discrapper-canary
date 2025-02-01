i.d(t, { Z: () => m }), i(47120);
var r = i(192379),
    n = i(399606),
    a = i(544891),
    l = i(570140),
    s = i(367907),
    o = i(430824),
    c = i(496675),
    d = i(626135),
    u = i(70956),
    _ = i(997787),
    E = i(981631);
let p = 1 * u.Z.Millis.DAY,
    I = new Map(),
    m = {
        useShouldShowChannelNotice(e) {
            let t = (0, n.e7)([o.Z, c.Z], () => {
                let t = o.Z.getGuild(e);
                return null != t && c.Z.can(E.Plq.ADMINISTRATOR, t);
            });
            r.useEffect(() => {
                t &&
                    (function (e) {
                        var t;
                        let i = Date.now(),
                            r = null !== (t = I.get(e)) && void 0 !== t ? t : 0;
                        !(i < r + p) &&
                            (I.set(e, i),
                            a.tn
                                .post({
                                    url: E.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                                    rejectWithError: !0
                                })
                                .then(
                                    (t) => {
                                        var i, r;
                                        l.Z.dispatch({
                                            type: 'COMMANDS_MIGRATION_UPDATE_SUCCESS',
                                            guildId: e,
                                            integrationIdsWithAppCommands: null !== (r = null === (i = t.body) || void 0 === i ? void 0 : i.integration_ids_with_app_commands) && void 0 !== r ? r : []
                                        });
                                    },
                                    () => {
                                        I.set(e, r);
                                    }
                                ));
                    })(e);
            }, [e, t]);
            let i = (0, n.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
            return t && i;
        },
        dismissNotice(e) {
            l.Z.dispatch({
                type: 'COMMANDS_MIGRATION_NOTICE_DISMISSED',
                guildId: e
            });
        },
        dismissOverviewTooltip(e, t) {
            var i;
            l.Z.dispatch({
                type: 'COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED',
                guildId: e,
                integrationId: t.id
            }),
                d.default.track(E.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, s.hH)(e),
                    application_id: null === (i = t.application) || void 0 === i ? void 0 : i.id,
                    location: 'overview'
                });
        },
        dismissToggleTooltip(e, t) {
            var i;
            void 0 !== t &&
                (l.Z.dispatch({
                    type: 'COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED',
                    integrationId: t.id
                }),
                d.default.track(E.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, s.hH)(e),
                    application_id: null === (i = t.application) || void 0 === i ? void 0 : i.id,
                    location: 'toggle'
                }));
        }
    };
