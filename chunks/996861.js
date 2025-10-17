n.d(t, {
    $Z: () => Z,
    B8: () => w,
    F4: () => P,
    HH: () => D,
    Hd: () => T,
    Xl: () => A,
    dF: () => C,
    eM: () => R,
    fB: () => _,
    gK: () => x,
    mG: () => N,
    qe: () => M,
    rY: () => I,
    ts: () => L,
    zW: () => E,
}),
    n(951288),
    n(647438),
    n(481060);
var r = n(332148),
    i = n(904245),
    l = n(143740),
    a = n(912332),
    o = n(434404);
n(726521);
var s = n(623292),
    c = n(324701),
    u = n(488131),
    d = n(314897),
    f = n(592125),
    g = n(626135),
    b = n(934415),
    p = n(572004),
    O = n(585483),
    y = n(709054),
    m = n(111618),
    h = n(50284),
    v = n(730954),
    j = n(819514),
    S = n(981631);
function E(e) {
    let t = e.getGuildId();
    null != t && o.Z.open(t, S.pNK.ENGAGEMENT);
}
function P(e, t, n) {
    (0, p.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id);
}
function _(e, t) {
    g.default.track(S.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id,
    }),
        (0, p.JG)((0, b.wR)(e.guild_id, e.id, t.id));
}
function Z(e, t, n) {
    t.state === S.yb.SEND_FAILED || n.shiftKey
        ? i.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED)
        : j.Z.confirmDelete(e, t);
}
function T(e, t) {
    i.Z.startEditMessageRecord(e.id, t);
}
function w(e, t) {
    (0, h.Z)(e.id, t.id);
}
function I(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? r.Z.pinMessage(e, t.id) : j.Z.confirmPin(e, t));
    n.shiftKey ? r.Z.unpinMessage(e, t.id) : j.Z.confirmUnpin(e, t);
}
function A(e, t) {
    (0, l.Z)(e.id, t.id);
}
function N(e, t) {
    (0, v.Z)(e, t, void 0, m.Z.getOptions(t.id));
}
function D(e, t, n) {
    let r = e.isPrivate(),
        i = t.author.id === d.default.getId();
    (0, s.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !i,
        showMentionToggle: !r && !i,
    }),
        O.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
}
function x(e, t) {
    (0, u.R6)(e, t, "Message");
}
function M(e, t) {
    let n = f.Z.getChannel(y.default.castMessageIdAsChannelId(t.id));
    null != n && (0, u.ok)(n);
}
function C(e, t) {
    (0, c.z)({
        channelId: e.id,
        messageId: t.id,
    });
}
function R(e, t) {
    (0, c.x)({
        channelId: e.id,
        messageId: t.id,
    });
}
function L(e, t) {
    (0, a.l8)({
        message: t,
        source: "message-actions",
    });
}
