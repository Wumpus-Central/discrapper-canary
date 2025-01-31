n.d(t, {
    $Z: () => T,
    B8: () => M,
    F4: () => j,
    HH: () => C,
    Hd: () => b,
    Xl: () => y,
    dF: () => O,
    eM: () => R,
    fB: () => _,
    gK: () => D,
    mG: () => P,
    qe: () => L,
    rY: () => A,
    ts: () => w,
    zW: () => I
}),
    n(200651),
    n(192379),
    n(481060);
var i = n(332148),
    l = n(904245),
    a = n(257559),
    s = n(143740),
    r = n(912332),
    o = n(434404);
n(726521);
var d = n(623292),
    c = n(324701),
    u = n(488131),
    g = n(314897),
    f = n(592125),
    m = n(626135),
    h = n(934415),
    E = n(572004),
    v = n(585483),
    Z = n(709054),
    x = n(111618),
    p = n(50284),
    N = n(730954),
    S = n(981631);
function I(e) {
    let t = e.getGuildId();
    null != t && o.Z.open(t, S.pNK.OVERVIEW);
}
function j(e, t, n) {
    (0, E.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function _(e, t) {
    m.default.track(S.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, E.JG)((0, h.wR)(e.guild_id, e.id, t.id));
}
function T(e, t, n) {
    t.state === S.yb.SEND_FAILED || n.shiftKey ? l.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED) : a.Z.confirmDelete(e, t);
}
function b(e, t) {
    l.Z.startEditMessage(e.id, t.id, t.content);
}
function M(e, t) {
    (0, p.Z)(e.id, t.id);
}
function A(e, t, n) {
    if (!1 === t.pinned) {
        n.shiftKey ? i.Z.pinMessage(e, t.id) : a.Z.confirmPin(e, t);
        return;
    }
    n.shiftKey ? i.Z.unpinMessage(e, t.id) : a.Z.confirmUnpin(e, t);
}
function y(e, t) {
    (0, s.Z)(e.id, t.id);
}
function P(e, t) {
    (0, N.Z)(e, t, void 0, x.Z.getOptions(t.id));
}
function C(e, t, n) {
    let i = e.isPrivate(),
        l = t.author.id === g.default.getId();
    (0, d.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !l,
        showMentionToggle: !i && !l
    }),
        v.S.dispatchToLastSubscribed(S.CkL.TEXTAREA_FOCUS);
}
function D(e, t) {
    (0, u.R6)(e, t, 'Message');
}
function L(e, t) {
    let n = f.Z.getChannel(Z.default.castMessageIdAsChannelId(t.id));
    null != n && (0, u.ok)(n);
}
function O(e, t) {
    (0, c.z)({
        channelId: e.id,
        messageId: t.id
    });
}
function R(e, t) {
    (0, c.x)({
        channelId: e.id,
        messageId: t.id
    });
}
function w(e, t) {
    (0, r.l8)({
        message: t,
        source: 'message-actions'
    });
}
