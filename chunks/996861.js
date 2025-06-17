n.d(t, {
    $Z: () => N,
    B8: () => Z,
    F4: () => _,
    HH: () => M,
    Hd: () => I,
    Xl: () => D,
    dF: () => C,
    eM: () => R,
    fB: () => P,
    gK: () => A,
    mG: () => T,
    qe: () => w,
    rY: () => x,
    ts: () => L,
    zW: () => S
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
    h = n(934415),
    p = n(572004),
    b = n(585483),
    O = n(709054),
    E = n(111618),
    y = n(50284),
    v = n(730954),
    j = n(981631);
function S(e) {
    let t = e.getGuildId();
    null != t && s.Z.open(t, j.pNK.ENGAGEMENT);
}
function _(e, t, n) {
    (0, p.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function P(e, t) {
    m.default.track(j.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, p.JG)((0, h.wR)(e.guild_id, e.id, t.id));
}
function N(e, t, n) {
    t.state === j.yb.SEND_FAILED || n.shiftKey ? r.Z.deleteMessage(e.id, t.id, t.state === j.yb.SEND_FAILED) : l.Z.confirmDelete(e, t);
}
function I(e, t) {
    r.Z.startEditMessage(e.id, t.id, t.content);
}
function Z(e, t) {
    (0, y.Z)(e.id, t.id);
}
function x(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? i.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t));
    n.shiftKey ? i.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t);
}
function D(e, t) {
    (0, a.Z)(e.id, t.id);
}
function T(e, t) {
    (0, v.Z)(e, t, void 0, E.Z.getOptions(t.id));
}
function M(e, t, n) {
    let i = e.isPrivate(),
        r = t.author.id === f.default.getId();
    (0, c.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !r,
        showMentionToggle: !i && !r
    }),
        b.S.dispatch(j.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
}
function A(e, t) {
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
