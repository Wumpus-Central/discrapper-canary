n.d(t, {
    $Z: () => Z,
    B8: () => x,
    F4: () => P,
    HH: () => D,
    Hd: () => I,
    Xl: () => A,
    dF: () => W,
    eM: () => L,
    fB: () => _,
    gK: () => w,
    mG: () => M,
    qe: () => C,
    rY: () => T,
    ts: () => R,
    zW: () => S
}),
    n(200651),
    n(192379),
    n(481060);
var r = n(332148),
    i = n(904245),
    a = n(257559),
    l = n(143740),
    o = n(912332),
    s = n(434404),
    c = n(978946);
n(726521);
var u = n(623292),
    d = n(324701),
    f = n(488131),
    g = n(314897),
    m = n(592125),
    b = n(626135),
    h = n(934415),
    p = n(572004),
    O = n(585483),
    y = n(709054),
    E = n(111618),
    N = n(50284),
    v = n(730954),
    j = n(981631);
function S(e) {
    let t = e.getGuildId();
    null != t && s.Z.open(t, (0, c.r)(t));
}
function P(e, t, n) {
    (0, p.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function _(e, t) {
    b.default.track(j.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, p.JG)((0, h.wR)(e.guild_id, e.id, t.id));
}
function Z(e, t, n) {
    t.state === j.yb.SEND_FAILED || n.shiftKey ? i.Z.deleteMessage(e.id, t.id, t.state === j.yb.SEND_FAILED) : a.Z.confirmDelete(e, t);
}
function I(e, t) {
    i.Z.startEditMessage(e.id, t.id, t.content);
}
function x(e, t) {
    (0, N.Z)(e.id, t.id);
}
function T(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? r.Z.pinMessage(e, t.id) : a.Z.confirmPin(e, t));
    n.shiftKey ? r.Z.unpinMessage(e, t.id) : a.Z.confirmUnpin(e, t);
}
function A(e, t) {
    (0, l.Z)(e.id, t.id);
}
function M(e, t) {
    (0, v.Z)(e, t, void 0, E.Z.getOptions(t.id));
}
function D(e, t, n) {
    let r = e.isPrivate(),
        i = t.author.id === g.default.getId();
    (0, u.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !i,
        showMentionToggle: !r && !i
    }),
        O.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS);
}
function w(e, t) {
    (0, f.R6)(e, t, 'Message');
}
function C(e, t) {
    let n = m.Z.getChannel(y.default.castMessageIdAsChannelId(t.id));
    null != n && (0, f.ok)(n);
}
function W(e, t) {
    (0, d.z)({
        channelId: e.id,
        messageId: t.id
    });
}
function L(e, t) {
    (0, d.x)({
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
