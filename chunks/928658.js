"use strict";
n.d(t, {
    GJ: () => R,
    LF: () => b,
    NW: () => I,
    RR: () => T,
    RV: () => h,
    Rj: () => p,
    V2: () => f,
    V3: () => S,
    _Y: () => v,
    b8: () => E,
    bM: () => C,
    dy: () => D,
    jJ: () => N,
    nQ: () => y,
    pb: () => m,
    r3: () => O,
    sJ: () => _,
    tJ: () => A,
    uA: () => g,
});
var r = n(58149),
    i = n(446600),
    a = n(383233),
    s = n(427157),
    o = n(860689),
    l = n(17372),
    u = n(369053),
    c = n(882276),
    d = n(652215);
function _(e, t) {
    L(l.t0.GUILD_DIRECTORY_ENTRY, { channel_id: e.channelId, guild_id: e.guildId }),
        (0, c.T)({ name: l.t0.GUILD_DIRECTORY_ENTRY, record: e }, {}, { onSubmit: t });
}
function f(e, t, n) {
    L(l.t0.MESSAGE, { message_id: e.id, channel_id: e.channel_id }),
        (0, c.T)({ name: l.t0.MESSAGE, record: e }, {}, { onSubmit: n });
}
function p(e, t, n) {
    L(l.t0.MESSAGE, { message_id: e.id, channel_id: e.channel_id }),
        (0, c.T)({ name: l.t0.MESSAGE, record: e }, { variant: "staff" }, { onSubmit: n });
}
function h(e, t, n) {
    L(l.t0.GUILD, { guild_id: e.id }), (0, c.T)({ name: l.t0.GUILD, record: e }, { variant: "staff" }, { onSubmit: n });
}
function m(e, t) {
    let n = i.A.getStageInstanceByChannel(e.id);
    null != n &&
        (L(l.t0.STAGE_CHANNEL, { stage_instance_id: n.id, channel_id: n.channel_id, guild_id: n.guild_id }),
        (0, c.T)({ name: l.t0.STAGE_CHANNEL, record: n }, {}, { onSubmit: t }));
}
function g(e, t) {
    L(l.t0.GUILD_SCHEDULED_EVENT, {
        guild_scheduled_event_id: e.id,
        guild_id: e.guild_id,
        channel_id: e.channel_id ?? void 0,
    }),
        (0, c.T)({ name: l.t0.GUILD_SCHEDULED_EVENT, record: e }, {}, { onSubmit: t });
}
function E(e, t) {
    L(l.t0.FIRST_DM, { message_id: e.id, channel_id: e.channel_id }),
        (0, c.T)({ name: l.t0.FIRST_DM, record: e }, {}, { onSubmit: t, isEligibleForFeedback: !1 });
}
async function A(e, t) {
    try {
        await (0, u.gP)({ name: l.t0.FIRST_DM, record: e }, { variant: "_first_dm_ham_v1" }), t?.();
    } catch {}
}
function I(e, t, n, r) {
    L(l.t0.USER, { reported_user_id: e.id }),
        (0, c.T)({ name: l.t0.USER, record: e, contextualGuildId: t }, {}, { onSubmit: n, appContext: r });
}
function T(e, t, n, r) {
    L(l.t0.USER, { reported_user_id: e.id }),
        (0, c.T)(
            { name: l.t0.USER, record: e, contextualGuildId: t },
            { variant: "staff" },
            { onSubmit: n, isEligibleForFeedback: !1, appContext: r },
        );
}
function y(e, t) {
    let n = new s.A({});
    L(l.tY.USER, { reported_user_id: n.id }),
        (0, c.T)(
            { name: l.tY.USER, record: n },
            {},
            { onClose: t, isEligibleForFeedback: !1, isAuthenticated: !1, emailToken: e },
        );
}
function S(e, t) {
    let n = (0, o.dangerouslyConstructGuildRecordFromUntypedObject)({});
    L(l.tY.GUILD, { guild_id: n.id }),
        (0, c.T)(
            { name: l.tY.GUILD, record: n },
            {},
            { onClose: t, isEligibleForFeedback: !1, isAuthenticated: !1, emailToken: e },
        );
}
function v(e, t) {
    L(l.tY.MEDIA_TAKEDOWN, {}),
        (0, c.T)(
            { name: l.tY.MEDIA_TAKEDOWN },
            {},
            { onClose: t, isEligibleForFeedback: !1, isAuthenticated: !1, emailToken: e },
        );
}
function C(e, t) {
    let n = new a.Ay({});
    L(l.tY.MESSAGE, { message_id: void 0, channel_id: void 0 }),
        (0, c.T)(
            { name: l.tY.MESSAGE, record: n },
            {},
            { onClose: t, isEligibleForFeedback: !1, isAuthenticated: !1, emailToken: e },
        );
}
async function b(e, t, n) {
    try {
        await (0, u.gP)({ name: l.t0.MESSAGE, record: e }, { variant: "safety_alerts_headless_v1" }), t?.();
    } catch {
        n?.();
    }
}
function N(e, t) {
    L(l.t0.MESSAGE, { message_id: e.id, channel_id: e.channel_id }),
        (0, c.T)({ name: l.t0.MESSAGE, record: e }, { variant: "safety_alerts_v1" }, { onSubmit: t });
}
function R(e, t, n, r) {
    (0, c.T)({ name: l.t0.WIDGET, widget_id: t.id ?? "", user_id: e, widget: t }, {}, { onSubmit: n, appContext: r });
}
function O(e) {
    let { application: t, entrypoint: n, contextualGuildId: i, contextualChannelId: a, onSubmit: s, appContext: o } = e;
    r.Ay.trackWithMetadata(d.HAw.REPORT_APPLICATION_CLICKED, { application_id: t.id, location: n }),
        L(l.t0.APPLICATION, { application_id: t.id, guild_id: i, channel_id: a }),
        (0, c.T)(
            { name: l.t0.APPLICATION, record: t, contextualGuildId: i, contextualChannelId: a, entrypoint: n },
            {},
            { onSubmit: s, appContext: o },
        );
}
function D(e, t) {
    (0, c.T)({ name: l.Yw.MESSAGE, record: e }, {}, { onSubmit: t, isEligibleForFeedback: !1 });
}
function L(e, t) {
    r.Ay.trackWithMetadata(d.HAw.IAR_MODAL_OPEN, { report_type: e, ...t });
}
