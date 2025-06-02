n.d(t, {
    $Z: () => I,
    B8: () => Z,
    F4: () => _,
    HH: () => x,
    Hd: () => N,
    Xl: () => T,
    dF: () => C,
    eM: () => L,
    fB: () => P,
    gK: () => M,
    mG: () => A,
    qe: () => w,
    rY: () => D,
    ts: () => R,
    zW: () => j
}),
    n(255367),
    n(73800),
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
    p = n(934415),
    b = n(572004),
    h = n(585483),
    O = n(709054),
    E = n(111618),
    y = n(50284),
    v = n(730954),
    S = n(981631);
function j(e) {
    let t = e.getGuildId();
    null != t && s.Z.open(t, S.pNK.ENGAGEMENT);
}
function _(e, t, n) {
    (0, b.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function P(e, t) {
    m.default.track(S.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, b.JG)((0, p.wR)(e.guild_id, e.id, t.id));
}
function I(e, t, n) {
    t.state === S.yb.SEND_FAILED || n.shiftKey ? r.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED) : l.Z.confirmDelete(e, t);
}
function N(e, t) {
    r.Z.startEditMessage(e.id, t.id, t.content);
}
function Z(e, t) {
    (0, y.Z)(e.id, t.id);
}
function D(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? i.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t));
    n.shiftKey ? i.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t);
}
function T(e, t) {
    (0, a.Z)(e.id, t.id);
}
function A(e, t) {
    (0, v.Z)(e, t, void 0, E.Z.getOptions(t.id));
}
function x(e, t, n) {
    let i = e.isPrivate(),
        r = t.author.id === f.default.getId();
    (0, c.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !r,
        showMentionToggle: !i && !r
    }),
        h.S.dispatchToLastSubscribed(S.CkL.TEXTAREA_FOCUS);
}
function M(e, t) {
    (0, d.R6)(e, t, 'Message');
}
function w(e, t) {
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
