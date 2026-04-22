"use strict";
n.d(t, { RX: () => l, Sn: () => u, UZ: () => c, hQ: () => d, lc: () => o });
var r = n(961350),
    i = n(9448),
    s = n(974930),
    a = n(988794);
function o(e) {
    return !!e?.id;
}
function l(e) {
    return null == e
        ? null
        : {
              start: e.start,
              end: e.end,
              frequency: e.frequency,
              interval: e.interval,
              by_weekday: e.byWeekday,
              by_n_weekday: e.byNWeekday,
              by_month: e.byMonth,
              by_month_day: (e.byMonthDay?.length ?? 0) > 0 ? e.byMonthDay : null,
              by_year_day: e.byYearDay,
              count: e.count,
          };
}
function u(e) {
    return null == e
        ? null
        : {
              start: new Date(e.start).toISOString(),
              end: null != e.end ? new Date(e.end).toISOString() : null,
              frequency: e.frequency,
              interval: e.interval,
              byWeekday: e.by_weekday,
              byNWeekday: e.by_n_weekday,
              byMonth: e.by_month,
              byMonthDay: e.by_month_day,
              byYearDay: e.by_year_day,
              count: e.count,
          };
}
function d(e, t, n) {
    let {
        name: i,
        description: s,
        privacyLevel: o,
        channelId: u,
        scheduledStartTime: d,
        scheduledEndTime: c,
        entityType: _,
        entityMetadata: f,
        image: E,
        recurrenceRule: h,
        eventExceptions: p,
    } = e;
    return {
        id: n ?? a.tq,
        name: i,
        description: s ?? null,
        privacy_level: o,
        scheduled_start_time: d,
        scheduled_end_time: c,
        entity_type: _,
        entity_metadata: f ?? null,
        image: E ?? void 0,
        channel_id: u,
        guild_id: t,
        creator_id: r.default.getId(),
        status: a.XG.SCHEDULED,
        recurrence_rule: l(h),
        guild_scheduled_event_exceptions: p.map((e) => ({
            event_exception_id: e.eventExceptionId,
            event_id: e.eventId,
            guild_id: e.guildId,
            scheduled_start_time: e.scheduledStartTime,
            scheduled_end_time: e.scheduledEndTime,
            is_canceled: e.isCanceled,
        })),
    };
}
function c(e, t) {
    let n = {
        name: e?.name ?? "",
        privacyLevel: e?.privacy_level ?? a.dD.GUILD_ONLY,
        description: e?.description ?? "",
        scheduledStartTime: e?.scheduled_start_time ?? (0, s.jd)().toISOString(),
        entityType: e?.entity_type ?? a.Ps.NONE,
        entityMetadata: e?.entity_metadata ?? void 0,
        channelId: e?.channel_id,
        creatorId: e?.creator_id,
        image: e?.image,
        scheduledEndTime: e?.scheduled_end_time,
        recurrenceRule: u(e?.recurrence_rule),
        eventExceptions: (e?.guild_scheduled_event_exceptions ?? []).map((e) => ({
            eventExceptionId: e.event_exception_id,
            eventId: e.event_id,
            guildId: e.guild_id,
            scheduledStartTime: e.scheduled_start_time,
            scheduledEndTime: e.scheduled_end_time,
            isCanceled: e.is_canceled,
        })),
    };
    if (null != e && "id" in e && e?.entity_type === a.Ps.EXTERNAL) {
        let t = (0, i.oF)(e);
        null != t && (n.entityMetadata = { location: t });
    } else
        null == n.channelId &&
            null != t &&
            ((n.channelId = t.id),
            t.isGuildStageVoice()
                ? (n.entityType = a.Ps.STAGE_INSTANCE)
                : t.isGuildVoice() && (n.entityType = a.Ps.VOICE));
    return n;
}
