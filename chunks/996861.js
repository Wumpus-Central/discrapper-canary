n.d(t, {
    $Z: () => Z,
    B8: () => I,
    F4: () => _,
    HH: () => x,
    Hd: () => N,
    Xl: () => M,
    dF: () => C,
    eM: () => R,
    fB: () => P,
    gK: () => D,
    mG: () => T,
    qe: () => A,
    rY: () => w,
    ts: () => L,
    zW: () => S
}),
    n(255367),
    n(73800),
    n(481060);
var r = n(332148),
    i = n(904245),
    l = n(257559),
    a = n(143740),
    o = n(912332),
    s = n(434404);
n(726521);
var c = n(623292),
    u = n(324701),
    d = n(488131),
    f = n(314897),
    g = n(592125),
    b = n(626135),
    p = n(934415),
    O = n(572004),
    m = n(585483),
    h = n(709054),
    y = n(111618),
    v = n(50284),
    E = n(730954),
    j = n(981631);
function S(e) {
    let t = e.getGuildId();
    null != t && s.Z.open(t, j.pNK.ENGAGEMENT);
}
function _(e, t, n) {
    (0, O.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function P(e, t) {
    b.default.track(j.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, O.JG)((0, p.wR)(e.guild_id, e.id, t.id));
}
function Z(e, t, n) {
    t.state === j.yb.SEND_FAILED || n.shiftKey ? i.Z.deleteMessage(e.id, t.id, t.state === j.yb.SEND_FAILED) : l.Z.confirmDelete(e, t);
}
function N(e, t) {
    i.Z.startEditMessage(e.id, t.id, t.content);
}
function I(e, t) {
    (0, v.Z)(e.id, t.id);
}
function w(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? r.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t));
    n.shiftKey ? r.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t);
}
function M(e, t) {
    (0, a.Z)(e.id, t.id);
}
function T(e, t) {
    (0, E.Z)(e, t, void 0, y.Z.getOptions(t.id));
}
function x(e, t, n) {
    let r = e.isPrivate(),
        i = t.author.id === f.default.getId();
    (0, c.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !i,
        showMentionToggle: !r && !i
    }),
        m.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS);
}
function D(e, t) {
    (0, d.R6)(e, t, 'Message');
}
function A(e, t) {
    let n = g.Z.getChannel(h.default.castMessageIdAsChannelId(t.id));
    null != n && (0, d.ok)(n);
}
function C(e, t) {
    (0, u.z)({
        channelId: e.id,
        messageId: t.id
    });
}
function R(e, t) {
    (0, u.x)({
        channelId: e.id,
        messageId: t.id
    });
}
function L(e, t) {
    (0, o.l8)({
        message: t,
        source: 'message-actions'
    });
}
