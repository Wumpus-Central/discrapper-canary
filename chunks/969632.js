"use strict";
n.d(t, {
    $m: () => L,
    G8: () => C,
    Gh: () => y,
    I7: () => N,
    Il: () => b,
    Kj: () => S,
    ND: () => R,
    VD: () => v,
    Wn: () => O,
    YP: () => T,
    aw: () => D,
});
var r = n(735438),
    i = n.n(r),
    s = n(835245),
    a = n(23339),
    o = n(311907),
    l = n(695870),
    u = n(505527),
    d = n(763754),
    c = n(734057),
    _ = n(956703),
    f = n(320501),
    E = n(576705),
    h = n(994500),
    p = n(927813),
    m = n(562153),
    g = n(412136),
    A = n(652215),
    I = n(985018);
function T() {
    return { text: void 0, image: void 0, localCreationAnswerId: (0, s.A)() };
}
function S(e) {
    return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "");
}
function y(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function N(e) {
    return (0, o.bG)(
        [E.A],
        () =>
            null != e &&
            e.id !== l.E &&
            !!A.kvI.POLLS.has(e.type) &&
            (!!e.isPrivate() || (E.A.can(A.xBc.SEND_MESSAGES, e) && E.A.can(A.xBc.SEND_POLLS, e))),
    );
}
function O(e, t) {
    return 0 === e.length && null == t.find((e) => R(e));
}
function R(e) {
    let t = e.text?.trim();
    return null != t && t.length > 0;
}
function v(e) {
    let t = e.text?.trim();
    return null != e.image && (null == t || 0 === t.length);
}
function C(e) {
    var t;
    if (null == e) return;
    let n = e?.answers?.map((e, t) => {
            let n = e.poll_media?.emoji,
                r = { ...e.poll_media, emoji: null != n ? { id: n.id, name: n.name ?? "" } : void 0 };
            return { ...e, answer_id: t + 1, poll_media: r };
        }),
        r = e?.duration != null ? ((t = e.duration), new Date(Date.now() + t * p.A.Millis.HOUR).toISOString()) : "0";
    return { ...e, expiry: r, answers: n };
}
function b(e) {
    var t;
    let n,
        r = (0, d.p_)(e),
        i =
            ((t = g.TU),
            (n = e.embeds[0]?.fields?.find((e) => "poll_question_text" === e.rawName)?.rawValue ?? ""),
            null != t ? (0, a.EJ)(n, t) : n);
    return I.intl.format(I.t.Vn97Ka, { username: r.nick, title: i });
}
function D(e) {
    return e.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0);
}
function L(e, t, n) {
    let r,
        s,
        a,
        o,
        l = f.A.getMessage(t, e);
    if (null == l) return "";
    let d = l.getReaction({ id: n, name: "", animated: !1 }),
        E = d?.count_details?.vote ?? 0,
        p =
            ((r = l.getChannelId()),
            (s = _.A.getReactions(r, l.id, { id: n, name: "", animated: !1 }, g.kx, u.v.VOTE)),
            (o = null == (a = c.A.getChannel(r)) || a.isPrivate() ? null : a.getGuildId()),
            i()(Array.from(s?.values() ?? []))
                .reject((e) => h.A.isBlockedOrIgnored(e.id))
                .take(g.kx)
                .map((e) => m.Ay.getName(o, a?.id, e))
                .value());
    if (0 === p.length) return "";
    let A = Math.max(0, E - p.length);
    if (1 === p.length)
        if (A > 0) return I.intl.formatToPlainString(I.t["SV/iZn"], { a: p[0], n: A });
        else return p[0];
    if (2 === p.length)
        if (A > 0) return I.intl.formatToPlainString(I.t.YBnZK0, { a: p[0], b: p[1], n: A });
        else return I.intl.formatToPlainString(I.t["O5+f5c"], { a: p[0], b: p[1] });
    return 3 !== p.length
        ? I.intl.formatToPlainString(I.t.yVX6kE, { n: A })
        : A > 0
          ? I.intl.formatToPlainString(I.t["ThXp+N"], { a: p[0], b: p[1], c: p[2], n: A })
          : I.intl.formatToPlainString(I.t["0UzBM3"], { a: p[0], b: p[1], c: p[2] });
}
