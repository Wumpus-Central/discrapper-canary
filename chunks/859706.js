l.d(e, { B: () => R, xE: () => A, tr: () => c, jB: () => I, G1: () => o });
var u = l(536637),
    r = l.n(u),
    a = l(620632),
    n = l(149468),
    d = l(727419),
    i = l(71393),
    s = l(129230);
l(218113);
var _ = l(652215);
function o(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    0 !== e.length && s.default.track(_.HAw.GUILD_RAID_REPORTED, { ...(0, n.H$)(t), guild_id: t, raid_types: e });
}
async function I(t, e) {
    let l = new Set(t.features);
    (l.has(_.GuildFeatures.COMMUNITY)
        ? e
            ? l.delete(_.GuildFeatures.RAID_ALERTS_DISABLED)
            : l.add(_.GuildFeatures.RAID_ALERTS_DISABLED)
        : e
          ? l.add(_.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
          : l.delete(_.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
        await d.A.saveGuild(t.id, { features: l }, { throwErr: !0 }));
}
async function c(t, e, l, u) {
    let n = e || l,
        d = u ?? 2,
        i = n ? r()().add(d, "hours").toISOString() : null;
    return await a.Bo.put({
        url: _.Rsh.GUILD_INCIDENT_ACTIONS(t),
        body: {
            invites_disabled_until: e ? i : null,
            dms_disabled_until: l ? i : null,
            lockdown_duration_hours: n ? d : null,
        },
        rejectWithError: (0, a.fT)(),
    });
}
async function A(t, e, l) {
    return await a.Bo.post({
        url: _.Rsh.GUILD_INCIDENT_REPORT_FALSE_ALARM(t),
        body: { alert_message_id: e, reason: l },
        rejectWithError: (0, a.fT)(),
    });
}
async function R(t) {
    let e = i.A.getGuild(t);
    return null == (null != e ? (e.safetyAlertsChannelId ?? e.publicUpdatesChannelId) : null)
        ? null
        : await a.Bo.post({ url: _.Rsh.GUILD_INCIDENT_REPORT_RAID(t), rejectWithError: (0, a.fT)() });
}
