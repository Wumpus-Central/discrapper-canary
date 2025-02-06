n.d(t, {
    $Z: () => j,
    B8: () => A,
    F4: () => T,
    HH: () => D,
    Hd: () => b,
    Xl: () => C,
    dF: () => R,
    eM: () => G,
    fB: () => M,
    gK: () => L,
    mG: () => y,
    qe: () => O,
    rY: () => P,
    ts: () => k,
    zW: () => _
}),
    n(200651),
    n(192379),
    n(481060);
var i = n(332148),
    l = n(904245),
    a = n(257559),
    s = n(143740),
    r = n(912332),
    o = n(434404),
    d = n(978946);
n(726521);
var c = n(623292),
    u = n(324701),
    g = n(488131),
    f = n(314897),
    m = n(592125),
    h = n(626135),
    E = n(934415),
    v = n(572004),
    Z = n(585483),
    x = n(709054),
    S = n(111618),
    N = n(50284),
    I = n(730954),
    p = n(981631);
function _(e) {
    let t = e.getGuildId();
    null != t && o.Z.open(t, (0, d.r)(t));
}
function T(e, t, n) {
    (0, v.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function M(e, t) {
    h.default.track(p.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, v.JG)((0, E.wR)(e.guild_id, e.id, t.id));
}
function j(e, t, n) {
    t.state === p.yb.SEND_FAILED || n.shiftKey ? l.Z.deleteMessage(e.id, t.id, t.state === p.yb.SEND_FAILED) : a.Z.confirmDelete(e, t);
}
function b(e, t) {
    l.Z.startEditMessage(e.id, t.id, t.content);
}
function A(e, t) {
    (0, N.Z)(e.id, t.id);
}
function P(e, t, n) {
    if (!1 === t.pinned) {
        n.shiftKey ? i.Z.pinMessage(e, t.id) : a.Z.confirmPin(e, t);
        return;
    }
    n.shiftKey ? i.Z.unpinMessage(e, t.id) : a.Z.confirmUnpin(e, t);
}
function C(e, t) {
    (0, s.Z)(e.id, t.id);
}
function y(e, t) {
    (0, I.Z)(e, t, void 0, S.Z.getOptions(t.id));
}
function D(e, t, n) {
    let i = e.isPrivate(),
        l = t.author.id === f.default.getId();
    (0, c.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !l,
        showMentionToggle: !i && !l
    }),
        Z.S.dispatchToLastSubscribed(p.CkL.TEXTAREA_FOCUS);
}
function L(e, t) {
    (0, g.R6)(e, t, 'Message');
}
function O(e, t) {
    let n = m.Z.getChannel(x.default.castMessageIdAsChannelId(t.id));
    null != n && (0, g.ok)(n);
}
function R(e, t) {
    (0, u.z)({
        channelId: e.id,
        messageId: t.id
    });
}
function G(e, t) {
    (0, u.x)({
        channelId: e.id,
        messageId: t.id
    });
}
function k(e, t) {
    (0, r.l8)({
        message: t,
        source: 'message-actions'
    });
}
