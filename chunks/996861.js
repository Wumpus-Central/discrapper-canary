n.d(t, {
    $Z: () => C,
    B8: () => P,
    F4: () => A,
    HH: () => x,
    Hd: () => R,
    Xl: () => D,
    dF: () => k,
    eM: () => U,
    fB: () => N,
    gK: () => M,
    mG: () => L,
    qe: () => j,
    rY: () => w,
    ts: () => G,
    zW: () => S,
}),
    n(255367),
    n(73800),
    n(481060);
var r = n(332148),
    i = n(904245),
    o = n(257559),
    a = n(143740),
    s = n(912332),
    l = n(434404);
n(726521);
var c = n(623292),
    u = n(324701),
    d = n(488131),
    f = n(314897),
    _ = n(592125),
    p = n(626135),
    h = n(934415),
    m = n(572004),
    g = n(585483),
    E = n(709054),
    b = n(111618),
    y = n(50284),
    O = n(730954),
    v = n(981631);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e) {
    let t = e.getGuildId();
    null != t && l.Z.open(t, v.pNK.ENGAGEMENT);
}
function A(e, t, n) {
    (0, m.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id);
}
function N(e, t) {
    p.default.track(v.rMx.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id,
    }),
        (0, m.JG)((0, h.wR)(e.guild_id, e.id, t.id));
}
function C(e, t, n) {
    t.state === v.yb.SEND_FAILED || n.shiftKey
        ? i.Z.deleteMessage(e.id, t.id, t.state === v.yb.SEND_FAILED)
        : o.Z.confirmDelete(e, t);
}
function R(e, t) {
    i.Z.startEditMessageRecord(e.id, t);
}
function P(e, t) {
    (0, y.Z)(e.id, t.id);
}
function w(e, t, n) {
    if (!1 === t.pinned) return void (n.shiftKey ? r.Z.pinMessage(e, t.id) : o.Z.confirmPin(e, t));
    n.shiftKey ? r.Z.unpinMessage(e, t.id) : o.Z.confirmUnpin(e, t);
}
function D(e, t) {
    (0, a.Z)(e.id, t.id);
}
function L(e, t) {
    (0, O.Z)(e, t, void 0, b.Z.getOptions(t.id));
}
function x(e, t, n) {
    let r = e.isPrivate(),
        i = t.author.id === f.default.getId();
    (0, c.fE)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !i,
        showMentionToggle: !r && !i,
    }),
        g.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
}
function M(e, t) {
    (0, d.R6)(e, t, "Message");
}
function j(e, t) {
    let n = _.Z.getChannel(E.default.castMessageIdAsChannelId(t.id));
    null != n && (0, d.ok)(n);
}
function k(e, t) {
    (0, u.z)({
        channelId: e.id,
        messageId: t.id,
    });
}
function U(e, t) {
    (0, u.x)({
        channelId: e.id,
        messageId: t.id,
    });
}
function G(e, t) {
    (0, s.l8)({
        message: t,
        source: "message-actions",
    });
}
