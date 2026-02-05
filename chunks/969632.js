"use strict";
n.d(t, {
    $m: () => k,
    G8: () => D,
    Gh: () => v,
    I7: () => C,
    Il: () => w,
    Kj: () => S,
    ND: () => N,
    VD: () => R,
    Wn: () => b,
    YP: () => T,
    aw: () => x,
});
var r = n(735438),
    i = n.n(r),
    a = n(835245),
    s = n(23339),
    o = n(311907),
    l = n(695870),
    u = n(505527),
    c = n(763754),
    d = n(734057),
    _ = n(956703),
    f = n(320501),
    p = n(576705),
    h = n(994500),
    m = n(927813),
    g = n(562153),
    E = n(412136),
    A = n(652215),
    I = n(985018);
function T() {
    return { text: void 0, image: void 0, localCreationAnswerId: y() };
}
function y() {
    return (0, a.A)();
}
function S(e) {
    let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(t, "");
}
function v(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function C(e) {
    return (0, o.bG)(
        [p.A],
        () =>
            null != e &&
            e.id !== l.E &&
            !!A.kvI.POLLS.has(e.type) &&
            (!!e.isPrivate() || (p.A.can(A.xBc.SEND_MESSAGES, e) && p.A.can(A.xBc.SEND_POLLS, e))),
    );
}
function b(e, t) {
    return 0 === e.length && null == t.find((e) => N(e));
}
function N(e) {
    let t = e.text?.trim();
    return null != t && t.length > 0;
}
function R(e) {
    let t = e.text?.trim();
    return null != e.image && (null == t || 0 === t.length);
}
function O(e) {
    return new Date(Date.now() + e * m.A.Millis.HOUR).toISOString();
}
function D(e) {
    if (null == e) return;
    let t = e?.answers?.map((e, t) => {
            let n = e.poll_media?.emoji,
                r = { ...e.poll_media, emoji: null != n ? { id: n.id, name: n.name ?? "" } : void 0 };
            return { ...e, answer_id: t + 1, poll_media: r };
        }),
        n = e?.duration != null ? O(e.duration) : "0";
    return { ...e, expiry: n, answers: t };
}
function L(e, t) {
    let n = e.embeds[0]?.fields?.find((e) => "poll_question_text" === e.rawName)?.rawValue ?? "";
    return null != t ? (0, s.EJ)(n, t) : n;
}
function w(e) {
    let t = (0, c.p_)(e),
        n = L(e, E.TU);
    return I.intl.format(I.t.Vn97Ka, { username: t.nick, title: n });
}
function x(e) {
    return e.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0);
}
function P(e, t) {
    let n = { id: t, name: "", animated: !1 },
        r = e.getChannelId(),
        a = _.A.getReactions(r, e.id, n, E.kx, u.v.VOTE),
        s = d.A.getChannel(r),
        o = null == s || s.isPrivate() ? null : s.getGuildId();
    return i()(Array.from(a?.values() ?? []))
        .reject((e) => h.A.isBlockedOrIgnored(e.id))
        .take(E.kx)
        .map((e) => g.Ay.getName(o, s?.id, e))
        .value();
}
function M(e, t) {
    let n = Math.max(0, t - e.length);
    if (1 === e.length)
        if (n > 0) return I.intl.formatToPlainString(I.t["SV/iZn"], { a: e[0], n: n });
        else return e[0];
    if (2 === e.length)
        if (n > 0) return I.intl.formatToPlainString(I.t.YBnZK0, { a: e[0], b: e[1], n: n });
        else return I.intl.formatToPlainString(I.t["O5+f5c"], { a: e[0], b: e[1] });
    return 3 !== e.length
        ? I.intl.formatToPlainString(I.t.yVX6kE, { n: n })
        : n > 0
          ? I.intl.formatToPlainString(I.t["ThXp+N"], { a: e[0], b: e[1], c: e[2], n: n })
          : I.intl.formatToPlainString(I.t["0UzBM3"], { a: e[0], b: e[1], c: e[2] });
}
function k(e, t, n) {
    let r = f.A.getMessage(t, e);
    if (null == r) return "";
    let i = r.getReaction({ id: n, name: "", animated: !1 }),
        a = i?.count_details?.vote ?? 0,
        s = P(r, n);
    return 0 === s.length ? "" : M(s, a);
}
