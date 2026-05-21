n.d(t, { s6: () => y, W5: () => m, Vj: () => S, E5: () => U, nV: () => R, wu: () => D, H0: () => T, G6: () => N });
var a = n(636537),
    r = n(228366),
    i = n(95561),
    o = n(71393),
    l = n(576705),
    d = n(403362),
    s = n(935208),
    _ = n(615550),
    E = n(735438);
function u(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let a = (0, E.camelCase)(n);
              return "object" != typeof e[n] || Array.isArray(e[n]) ? (t[a] = e[n]) : (t[a] = u(e[n])), t;
          }, {});
}
function A(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let a = (0, E.snakeCase)(n);
              return (
                  "object" != typeof e[n] || Array.isArray(e[n]) ? (t[a] = e[n]) : (t[a] = A(e[n])), (t[a] = e[n]), t
              );
          }, {});
}
var c = n(449585),
    I = n(652215);
function O(e) {
    return { type: e.type, metadata: A(e.metadata) };
}
function L(e) {
    let t = A(e.triggerMetadata);
    return (
        null != t && delete t.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: t,
            actions: e.actions.filter(d.Vq).map(O),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []),
        }
    );
}
function M(e) {
    return { type: e.type, metadata: u(e.metadata) };
}
function p(e) {
    let t = {
        id: e.id ?? s.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: u(e.trigger_metadata),
        actions: e.actions.filter(d.Vq).map(M),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? []),
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t;
}
async function y(e) {
    let t = L(e);
    return u(
        (await a.Bo.post({ url: I.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId), body: t, rejectWithError: !1 })).body,
    );
}
async function N(e) {
    let t = L(e);
    return (
        delete t.id,
        p((await a.Bo.post({ url: I.Rsh.GUILD_AUTOMOD_RULES(e.guildId), body: t, rejectWithError: !1 })).body)
    );
}
async function S(e) {
    let t = L(e);
    return p((await a.Bo.patch({ url: I.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id), body: t, rejectWithError: !1 })).body);
}
async function R(e, t) {
    return await a.Bo.del({ url: I.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: !1 }), !0;
}
async function T(e) {
    let t = await a.Bo.get({ url: I.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: !1 });
    return Array.isArray(t.body) ? t.body.map(p) : [];
}
async function U(e, t, n) {
    l.A.can(I.xBc.MANAGE_MESSAGES, t) &&
        (await a.Bo.post({
            url: I.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
        }));
}
function m(e, t, n) {
    let r = o.A.getGuild(e);
    null != r &&
        l.A.can(I.xBc.MANAGE_GUILD, r) &&
        (0, c.rI)(() => {
            (0, i.zV)(I.HAw.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: _.Gb.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t,
            }),
                a.Bo.post({ url: I.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
                n();
        });
}
function D(e) {
    r.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
}
