n.d(t, { s6: () => y, W5: () => m, Vj: () => S, E5: () => g, nV: () => R, wu: () => D, H0: () => U, G6: () => N });
var a = n(636537),
    r = n(228366),
    i = n(95561),
    o = n(317525),
    l = n(71393),
    d = n(576705),
    s = n(403362),
    _ = n(935208),
    u = n(615550),
    E = n(435558);
function A(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let a = (0, E.camelCase)(n);
              return "object" != typeof e[n] || Array.isArray(e[n]) ? (t[a] = e[n]) : (t[a] = A(e[n])), t;
          }, {});
}
function c(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let a = (0, E.snakeCase)(n);
              return (
                  "object" != typeof e[n] || Array.isArray(e[n]) ? (t[a] = e[n]) : (t[a] = c(e[n])), (t[a] = e[n]), t
              );
          }, {});
}
var I = n(449585),
    O = n(652215);
function L(e) {
    return { type: e.type, metadata: c(e.metadata) };
}
function T(e) {
    let t = c(e.triggerMetadata);
    return (
        null != t && delete t.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: t,
            actions: e.actions.filter(s.Vq).map(L),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []).filter((t) => null != o.A.getRole(e.guildId, t)),
        }
    );
}
function M(e) {
    return { type: e.type, metadata: A(e.metadata) };
}
function p(e) {
    let t = {
        id: e.id ?? _.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: A(e.trigger_metadata),
        actions: e.actions.filter(s.Vq).map(M),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? []),
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t;
}
async function y(e) {
    let t = T(e);
    return A(
        (await a.Bo.post({ url: O.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId), body: t, rejectWithError: (0, a.fT)() }))
            .body,
    );
}
async function N(e) {
    let t = T(e);
    return (
        delete t.id,
        p((await a.Bo.post({ url: O.Rsh.GUILD_AUTOMOD_RULES(e.guildId), body: t, rejectWithError: (0, a.fT)() })).body)
    );
}
async function S(e) {
    let t = T(e);
    return p(
        (await a.Bo.patch({ url: O.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id), body: t, rejectWithError: (0, a.fT)() }))
            .body,
    );
}
async function R(e, t) {
    return await a.Bo.del({ url: O.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: (0, a.fT)() }), !0;
}
async function U(e) {
    let t = await a.Bo.get({ url: O.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: (0, a.fT)() });
    return Array.isArray(t.body) ? t.body.map(p) : [];
}
async function g(e, t, n) {
    d.A.can(O.xBc.MANAGE_MESSAGES, t) &&
        (await a.Bo.post({
            url: O.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: (0, a.fT)(),
        }));
}
function m(e, t, n) {
    let r = l.A.getGuild(e);
    null == r ||
        (d.A.can(O.xBc.MANAGE_GUILD, r) &&
            (0, I.rI)(function () {
                (0, i.zV)(O.HAw.GUILD_AUTOMOD_FEEDBACK, {
                    feedback_type: u.Gb.MENTION_RAID_REMOVE_RESTRICTION,
                    decision_id: t,
                }),
                    a.Bo.post({ url: O.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
                    n();
            }));
}
function D(e) {
    r.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
}
