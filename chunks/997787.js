let r;
i.d(t, { Z: () => _ }), i(47120), i(653041);
var n,
    a = i(442837),
    l = i(570140);
function s(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let o = { guildNoticeDismissed: [] },
    c = new Map(),
    d = new Set();
class u extends (n = a.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        r = e;
    }
    getState() {
        return r;
    }
    shouldShowChannelNotice(e) {
        var t, i;
        return !r.guildNoticeDismissed.includes(e) && (null !== (i = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== i ? i : 0) > 0;
    }
    canShowOverviewTooltip(e, t) {
        var i;
        return (null === (i = c.get(e)) || void 0 === i ? void 0 : i.has(t)) === !0;
    }
    canShowToggleTooltip(e) {
        return d.has(e);
    }
}
s(u, 'displayName', 'CommandsMigrationStore'), s(u, 'persistKey', 'CommandsMigrationStore');
let _ = new u(l.Z, {
    COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
        let { guildId: t, integrationIdsWithAppCommands: i } = e;
        return c.set(t, new Set(i)), !0;
    },
    COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        r.guildNoticeDismissed.push(t);
    },
    COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
        var t;
        let { guildId: i, integrationId: r } = e;
        null === (t = c.get(i)) || void 0 === t || t.clear(), d.add(r);
    },
    COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
        let { integrationId: t } = e;
        d.delete(t);
    }
});
