"use strict";
n.d(t, { s6: () => m, W5: () => O, Vj: () => S, E5: () => R, nV: () => N, wu: () => L, H0: () => C, G6: () => g });
var i = n(636537),
    r = n(228366),
    a = n(95561),
    s = n(71393),
    l = n(576705),
    o = n(403362),
    d = n(935208),
    c = n(615550),
    u = n(435558);
function _(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let i = (0, u.camelCase)(n);
              return "object" != typeof e[n] || Array.isArray(e[n]) ? (t[i] = e[n]) : (t[i] = _(e[n])), t;
          }, {});
}
function E(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let i = (0, u.snakeCase)(n);
              return (
                  "object" != typeof e[n] || Array.isArray(e[n]) ? (t[i] = e[n]) : (t[i] = E(e[n])), (t[i] = e[n]), t
              );
          }, {});
}
var A = n(449585),
    h = n(652215);
function I(e) {
    return { type: e.type, metadata: E(e.metadata) };
}
function f(e) {
    let t = E(e.triggerMetadata);
    return (
        null != t && delete t.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: t,
            actions: e.actions.filter(o.Vq).map(I),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []),
        }
    );
}
function p(e) {
    return { type: e.type, metadata: _(e.metadata) };
}
function T(e) {
    let t = {
        id: e.id ?? d.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: _(e.trigger_metadata),
        actions: e.actions.filter(o.Vq).map(p),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? []),
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t;
}
async function m(e) {
    let t = f(e);
    return _(
        (await i.Bo.post({ url: h.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId), body: t, rejectWithError: (0, i.fT)() }))
            .body,
    );
}
async function g(e) {
    let t = f(e);
    return (
        delete t.id,
        T((await i.Bo.post({ url: h.Rsh.GUILD_AUTOMOD_RULES(e.guildId), body: t, rejectWithError: (0, i.fT)() })).body)
    );
}
async function S(e) {
    let t = f(e);
    return T(
        (await i.Bo.patch({ url: h.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id), body: t, rejectWithError: (0, i.fT)() }))
            .body,
    );
}
async function N(e, t) {
    return await i.Bo.del({ url: h.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: (0, i.fT)() }), !0;
}
async function C(e) {
    let t = await i.Bo.get({ url: h.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: (0, i.fT)() });
    return Array.isArray(t.body) ? t.body.map(T) : [];
}
async function R(e, t, n) {
    l.A.can(h.xBc.MANAGE_MESSAGES, t) &&
        (await i.Bo.post({
            url: h.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: (0, i.fT)(),
        }));
}
function O(e, t, n) {
    let r = s.A.getGuild(e);
    null == r ||
        (l.A.can(h.xBc.MANAGE_GUILD, r) &&
            (0, A.rI)(function () {
                (0, a.zV)(h.HAw.GUILD_AUTOMOD_FEEDBACK, {
                    feedback_type: c.Gb.MENTION_RAID_REMOVE_RESTRICTION,
                    decision_id: t,
                }),
                    i.Bo.post({ url: h.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
                    n();
            }));
}
function L(e) {
    r.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
}
