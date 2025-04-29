n.d(t, {
    $Z: () => Z,
    B8: () => I,
    F4: () => P,
    HH: () => D,
    Hd: () => N,
    Xl: () => T,
    dF: () => C,
    eM: () => L,
    fB: () => _,
    gK: () => w,
    mG: () => M,
    qe: () => A,
    rY: () => x,
    ts: () => R,
    zW: () => S
}),
    n(200651),
    n(192379),
    n(481060);
var i = n(332148),
    r = n(904245),
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
    m = n(626135),
    h = n(934415),
    b = n(572004),
    p = n(585483),
    O = n(709054),
    y = n(111618),
    E = n(50284),
    v = n(730954),
    j = n(981631);
function S(e) {
    let t = e.getGuildId();
    null != t && s.Z.open(t, j.pNK.ENGAGEMENT);
}
function P(e, t, n) {
    (0, b.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function _(e, t) {
    m.default.track(j.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, b.JG)((0, h.wR)(e.guild_id, e.id, t.id));
}
function Z(e, t, n) {
    t.state === j.yb.SEND_FAILED || n.shiftKey ? r.Z.deleteMessage(e.id, t.id, t.state === j.yb.SEND_FAILED) : l.Z.confirmDelete(e, t);
}
function N(e, t) {
    r.Z.startEditMessage(e.id, t.id, t.content);
}
function I(e, t) {
    (0, E.Z)(e.id, t.id);
}
function x(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? i.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t));
    n.shiftKey ? i.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t);
}
function T(e, t) {
    (0, a.Z)(e.id, t.id);
}
function M(e, t) {
    (0, v.Z)(e, t, void 0, y.Z.getOptions(t.id));
}
function D(e, t, n) {
    let i = e.isPrivate(),
        r = t.author.id === f.default.getId();
    (0, c.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !r,
        showMentionToggle: !i && !r
    }),
        p.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS);
}
function w(e, t) {
    (0, d.R6)(e, t, 'Message');
}
function A(e, t) {
    let n = g.Z.getChannel(O.default.castMessageIdAsChannelId(t.id));
    null != n && (0, d.ok)(n);
}
function C(e, t) {
    (0, u.z)({
        channelId: e.id,
        messageId: t.id
    });
}
function L(e, t) {
    (0, u.x)({
        channelId: e.id,
        messageId: t.id
    });
}
function R(e, t) {
    (0, o.l8)({
        message: t,
        source: 'message-actions'
    });
}
