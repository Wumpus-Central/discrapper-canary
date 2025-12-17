n.d(t, {
    $Z: () => _,
    B8: () => Z,
    F4: () => P,
    HH: () => x,
    Hd: () => I,
    Xl: () => A,
    dF: () => C,
    eM: () => L,
    fB: () => T,
    gK: () => M,
    mG: () => N,
    qe: () => D,
    rY: () => w,
    ts: () => R,
    zW: () => E,
}),
    n(54381),
    n(473749),
    n(481060);
var r = n(332148),
    i = n(904245),
    l = n(742828),
    o = n(912332),
    a = n(434404);
n(726521);
var c = n(623292),
    s = n(324701),
    u = n(488131),
    d = n(314897),
    f = n(592125),
    g = n(626135),
    b = n(934415),
    p = n(572004),
    O = n(585483),
    y = n(709054),
    m = n(111618),
    v = n(50284),
    h = n(730954),
    j = n(819514),
    S = n(981631);
function E(e) {
    let t = e.getGuildId();
    null != t && a.Z.open(t, S.pNK.ENGAGEMENT);
}
function P(e, t, n) {
    (0, p.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id);
}
function T(e, t) {
    g.default.track(S.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id,
    }),
        (0, p.JG)((0, b.wR)(e.guild_id, e.id, t.id));
}
function _(e, t, n) {
    t.state === S.yb.SEND_FAILED || n.shiftKey
        ? i.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED)
        : j.Z.confirmDelete(e, t);
}
function I(e, t) {
    i.Z.startEditMessageRecord(e.id, t);
}
function Z(e, t) {
    (0, v.Z)(e.id, t.id);
}
function w(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? r.Z.pinMessage(e, t.id) : j.Z.confirmPin(e, t));
    n.shiftKey ? r.Z.unpinMessage(e, t.id) : j.Z.confirmUnpin(e, t);
}
function A(e, t) {
    (0, l.Z)(e.id, t.id);
}
function N(e, t) {
    (0, h.Z)(e, t, void 0, m.Z.getOptions(t.id));
}
function x(e, t, n) {
    let r = e.isPrivate(),
        i = t.author.id === d.default.getId();
    (0, c.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !i,
        showMentionToggle: !r && !i,
    }),
        O.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
}
function M(e, t) {
    (0, u.R6)(e, t, "Message");
}
function D(e, t) {
    let n = f.Z.getChannel(y.default.castMessageIdAsChannelId(t.id));
    null != n && (0, u.ok)(n);
}
function C(e, t) {
    (0, s.z)({
        channelId: e.id,
        messageId: t.id,
    });
}
function L(e, t) {
    (0, s.x)({
        channelId: e.id,
        messageId: t.id,
    });
}
function R(e, t) {
    (0, o.l8)({
        message: t,
        source: "message-actions",
    });
}
