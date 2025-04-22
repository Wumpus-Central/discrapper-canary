n.d(t, {
    $Z: () => N,
    B8: () => x,
    F4: () => _,
    HH: () => D,
    Hd: () => I,
    Xl: () => M,
    dF: () => L,
    eM: () => R,
    fB: () => Z,
    gK: () => w,
    mG: () => A,
    qe: () => C,
    rY: () => T,
    ts: () => k,
    zW: () => P
}),
    n(200651),
    n(192379),
    n(481060);
var i = n(332148),
    r = n(904245),
    l = n(257559),
    a = n(143740),
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
    v = n(50284),
    j = n(730954),
    S = n(981631);
function P(e) {
    let t = e.getGuildId();
    null != t && s.Z.open(t, (0, c.r)(t));
}
function _(e, t, n) {
    (0, p.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function Z(e, t) {
    b.default.track(S.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, p.JG)((0, h.wR)(e.guild_id, e.id, t.id));
}
function N(e, t, n) {
    t.state === S.yb.SEND_FAILED || n.shiftKey ? r.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED) : l.Z.confirmDelete(e, t);
}
function I(e, t) {
    r.Z.startEditMessage(e.id, t.id, t.content);
}
function x(e, t) {
    (0, v.Z)(e.id, t.id);
}
function T(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? i.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t));
    n.shiftKey ? i.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t);
}
function M(e, t) {
    (0, a.Z)(e.id, t.id);
}
function A(e, t) {
    (0, j.Z)(e, t, void 0, E.Z.getOptions(t.id));
}
function D(e, t, n) {
    let i = e.isPrivate(),
        r = t.author.id === g.default.getId();
    (0, u.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !r,
        showMentionToggle: !i && !r
    }),
        O.S.dispatchToLastSubscribed(S.CkL.TEXTAREA_FOCUS);
}
function w(e, t) {
    (0, f.R6)(e, t, 'Message');
}
function C(e, t) {
    let n = m.Z.getChannel(y.default.castMessageIdAsChannelId(t.id));
    null != n && (0, f.ok)(n);
}
function L(e, t) {
    (0, d.z)({
        channelId: e.id,
        messageId: t.id
    });
}
function R(e, t) {
    (0, d.x)({
        channelId: e.id,
        messageId: t.id
    });
}
function k(e, t) {
    (0, o.l8)({
        message: t,
        source: 'message-actions'
    });
}
