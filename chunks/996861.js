n.d(t, {
    $Z: () => x,
    B8: () => _,
    F4: () => S,
    HH: () => A,
    Hd: () => I,
    Xl: () => w,
    dF: () => W,
    eM: () => L,
    fB: () => Z,
    gK: () => D,
    mG: () => M,
    qe: () => C,
    rY: () => T,
    ts: () => k,
    zW: () => P
}),
    n(200651),
    n(192379),
    n(481060);
var r = n(332148),
    i = n(904245),
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
    p = n(934415),
    h = n(572004),
    v = n(585483),
    y = n(709054),
    O = n(111618),
    N = n(50284),
    E = n(730954),
    j = n(981631);
function P(e) {
    let t = e.getGuildId();
    null != t && s.Z.open(t, (0, c.r)(t));
}
function S(e, t, n) {
    (0, h.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}
function Z(e, t) {
    b.default.track(j.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }),
        (0, h.JG)((0, p.wR)(e.guild_id, e.id, t.id));
}
function x(e, t, n) {
    t.state === j.yb.SEND_FAILED || n.shiftKey ? i.Z.deleteMessage(e.id, t.id, t.state === j.yb.SEND_FAILED) : l.Z.confirmDelete(e, t);
}
function I(e, t) {
    i.Z.startEditMessage(e.id, t.id, t.content);
}
function _(e, t) {
    (0, N.Z)(e.id, t.id);
}
function T(e, t, n) {
    if (!1 === t.pinned) {
        n.shiftKey ? r.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t);
        return;
    }
    n.shiftKey ? r.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t);
}
function w(e, t) {
    (0, a.Z)(e.id, t.id);
}
function M(e, t) {
    (0, E.Z)(e, t, void 0, O.Z.getOptions(t.id));
}
function A(e, t, n) {
    let r = e.isPrivate(),
        i = t.author.id === g.default.getId();
    (0, u.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !i,
        showMentionToggle: !r && !i
    }),
        v.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS);
}
function D(e, t) {
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
function k(e, t) {
    (0, o.l8)({
        message: t,
        source: 'message-actions'
    });
}
