let i;
r.d(t, { Z: () => E }), r(47120), r(653041);
var n,
    a = r(442837),
    s = r(570140);
function l(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let o = { guildNoticeDismissed: [] },
    c = new Map(),
    d = new Set();
class _ extends (n = a.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        i = e;
    }
    getState() {
        return i;
    }
    shouldShowChannelNotice(e) {
        var t, r;
        return !i.guildNoticeDismissed.includes(e) && (null !== (r = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== r ? r : 0) > 0;
    }
    canShowOverviewTooltip(e, t) {
        var r;
        return (null === (r = c.get(e)) || void 0 === r ? void 0 : r.has(t)) === !0;
    }
    canShowToggleTooltip(e) {
        return d.has(e);
    }
}
l(_, 'displayName', 'CommandsMigrationStore'), l(_, 'persistKey', 'CommandsMigrationStore');
let E = new _(s.Z, {
    COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
        let { guildId: t, integrationIdsWithAppCommands: r } = e;
        return c.set(t, new Set(r)), !0;
    },
    COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        i.guildNoticeDismissed.push(t);
    },
    COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
        var t;
        let { guildId: r, integrationId: i } = e;
        null === (t = c.get(r)) || void 0 === t || t.clear(), d.add(i);
    },
    COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
        let { integrationId: t } = e;
        d.delete(t);
    }
});
