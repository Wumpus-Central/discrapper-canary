(n.d(t, {
    $Z: () => Z,
    B8: () => T,
    F4: () => _,
    HH: () => x,
    Hd: () => I,
    Xl: () => N,
    dF: () => R,
    eM: () => C,
    fB: () => P,
    gK: () => M,
    mG: () => A,
    qe: () => D,
    rY: () => w,
    ts: () => L,
    zW: () => S
}),
    n(255367),
    n(73800),
    n(481060));
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
    y = n(709054),
    h = n(111618),
    v = n(50284),
    j = n(730954),
    E = n(981631);
function S(e) {
    let t = e.getGuildId();
    null != t && s.Z.open(t, E.pNK.ENGAGEMENT);
}
function _(e, t, n) {
    (0, O.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function P(e, t) {
    (b.default.track(E.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, O.JG)((0, p.wR)(e.guild_id, e.id, t.id)));
}
function Z(e, t, n) {
    t.state === E.yb.SEND_FAILED || n.shiftKey ? i.Z.deleteMessage(e.id, t.id, t.state === E.yb.SEND_FAILED) : l.Z.confirmDelete(e, t);
}
function I(e, t) {
    i.Z.startEditMessage(e.id, t.id, t.content);
}
function T(e, t) {
    (0, v.Z)(e.id, t.id);
}
function w(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? r.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t));
    n.shiftKey ? r.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t);
}
function N(e, t) {
    (0, a.Z)(e.id, t.id);
}
function A(e, t) {
    (0, j.Z)(e, t, void 0, h.Z.getOptions(t.id));
}
function x(e, t, n) {
    let r = e.isPrivate(),
        i = t.author.id === f.default.getId();
    ((0, c.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !i,
        showMentionToggle: !r && !i
    }),
        m.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id }));
}
function M(e, t) {
    (0, d.R6)(e, t, 'Message');
}
function D(e, t) {
    let n = g.Z.getChannel(y.default.castMessageIdAsChannelId(t.id));
    null != n && (0, d.ok)(n);
}
function R(e, t) {
    (0, u.z)({
        channelId: e.id,
        messageId: t.id
    });
}
function C(e, t) {
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
