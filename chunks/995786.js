"use strict";
n.d(t, { s6: () => I, W5: () => v, Vj: () => S, E5: () => C, nV: () => N, wu: () => O, H0: () => y, G6: () => T });
var i = n(636537),
    r = n(228366),
    s = n(95561),
    a = n(71393),
    o = n(576705),
    l = n(403362),
    u = n(935208),
    c = n(615550),
    d = n(735438);
function _(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let i = (0, d.camelCase)(n);
              return "object" != typeof e[n] || Array.isArray(e[n]) ? (t[i] = e[n]) : (t[i] = _(e[n])), t;
          }, {});
}
function f(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let i = (0, d.snakeCase)(n);
              return (
                  "object" != typeof e[n] || Array.isArray(e[n]) ? (t[i] = e[n]) : (t[i] = f(e[n])), (t[i] = e[n]), t
              );
          }, {});
}
var h = n(449585),
    p = n(652215);
function E(e) {
    return { type: e.type, metadata: f(e.metadata) };
}
function m(e) {
    let t = f(e.triggerMetadata);
    return (
        null != t && delete t.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: t,
            actions: e.actions.filter(l.Vq).map(E),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []),
        }
    );
}
function g(e) {
    return { type: e.type, metadata: _(e.metadata) };
}
function A(e) {
    let t = {
        id: e.id ?? u.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: _(e.trigger_metadata),
        actions: e.actions.filter(l.Vq).map(g),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? []),
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t;
}
async function I(e) {
    let t = m(e);
    return _(
        (await i.Bo.post({ url: p.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId), body: t, rejectWithError: !1 })).body,
    );
}
async function T(e) {
    let t = m(e);
    return (
        delete t.id,
        A((await i.Bo.post({ url: p.Rsh.GUILD_AUTOMOD_RULES(e.guildId), body: t, rejectWithError: !1 })).body)
    );
}
async function S(e) {
    let t = m(e);
    return A((await i.Bo.patch({ url: p.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id), body: t, rejectWithError: !1 })).body);
}
async function N(e, t) {
    return await i.Bo.del({ url: p.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: !1 }), !0;
}
async function y(e) {
    let t = await i.Bo.get({ url: p.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: !1 });
    return Array.isArray(t.body) ? t.body.map(A) : [];
}
async function C(e, t, n) {
    o.A.can(p.xBc.MANAGE_MESSAGES, t) &&
        (await i.Bo.post({
            url: p.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
        }));
}
function v(e, t, n) {
    let r = a.A.getGuild(e);
    null != r &&
        o.A.can(p.xBc.MANAGE_GUILD, r) &&
        (0, h.rI)(() => {
            (0, s.zV)(p.HAw.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.Gb.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t,
            }),
                i.Bo.post({ url: p.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
                n();
        });
}
function O(e) {
    r.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
}
