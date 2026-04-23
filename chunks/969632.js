"use strict";
n.d(t, {
    $m: () => b,
    G8: () => v,
    Gh: () => N,
    I7: () => C,
    Il: () => D,
    Kj: () => S,
    ND: () => O,
    VD: () => y,
    Wn: () => R,
    YP: () => T,
    aw: () => L,
});
var i = n(735438),
    r = n.n(i),
    s = n(132500),
    a = n(23339),
    o = n(17928),
    l = n(695870),
    d = n(505527),
    _ = n(763754),
    u = n(734057),
    c = n(956703),
    E = n(232835),
    h = n(576705),
    m = n(994500),
    f = n(927813),
    g = n(562153),
    p = n(412136),
    A = n(652215),
    I = n(985018);
function T() {
    return { text: void 0, image: void 0, localCreationAnswerId: (0, s.A)() };
}
function S(e) {
    return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "");
}
function N(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function C(e) {
    return (0, o.bG)(
        [h.A],
        () =>
            null != e &&
            e.id !== l.E &&
            !!A.kvI.POLLS.has(e.type) &&
            (!!e.isPrivate() || (h.A.can(A.xBc.SEND_MESSAGES, e) && h.A.can(A.xBc.SEND_POLLS, e))),
    );
}
function R(e, t) {
    return 0 === e.length && null == t.find((e) => O(e));
}
function O(e) {
    let t = e.text?.trim();
    return null != t && t.length > 0;
}
function y(e) {
    let t = e.text?.trim();
    return null != e.image && (null == t || 0 === t.length);
}
function v(e) {
    var t;
    if (null == e) return;
    let n = e?.answers?.map((e, t) => {
            let n = e.poll_media?.emoji,
                i = { ...e.poll_media, emoji: null != n ? { id: n.id, name: n.name ?? "" } : void 0 };
            return { ...e, answer_id: t + 1, poll_media: i };
        }),
        i = e?.duration != null ? ((t = e.duration), new Date(Date.now() + t * f.A.Millis.HOUR).toISOString()) : "0";
    return { ...e, expiry: i, answers: n };
}
function D(e) {
    var t;
    let n,
        i = (0, _.p_)(e),
        r =
            ((t = p.TU),
            (n = e.embeds[0]?.fields?.find((e) => "poll_question_text" === e.rawName)?.rawValue ?? ""),
            null != t ? (0, a.EJ)(n, t) : n);
    return I.intl.format(I.t.Vn97Ka, { username: i.nick, title: r });
}
function L(e) {
    return e.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0);
}
function b(e, t, n) {
    let i,
        s,
        a,
        o,
        l = E.A.getMessage(t, e);
    if (null == l) return "";
    let _ = l.getReaction({ id: n, name: "", animated: !1 }),
        h = _?.count_details?.vote ?? 0,
        f =
            ((i = l.getChannelId()),
            (s = c.A.getReactions(i, l.id, { id: n, name: "", animated: !1 }, p.kx, d.v.VOTE)),
            (o = null == (a = u.A.getChannel(i)) || a.isPrivate() ? null : a.getGuildId()),
            r()(Array.from(s?.values() ?? []))
                .reject((e) => m.A.isBlockedOrIgnored(e.id))
                .take(p.kx)
                .map((e) => g.Ay.getName(o, a?.id, e))
                .value());
    if (0 === f.length) return "";
    let A = Math.max(0, h - f.length);
    if (1 === f.length)
        if (A > 0) return I.intl.formatToPlainString(I.t["SV/iZn"], { a: f[0], n: A });
        else return f[0];
    if (2 === f.length)
        if (A > 0) return I.intl.formatToPlainString(I.t.YBnZK0, { a: f[0], b: f[1], n: A });
        else return I.intl.formatToPlainString(I.t["O5+f5c"], { a: f[0], b: f[1] });
    return 3 !== f.length
        ? I.intl.formatToPlainString(I.t.yVX6kE, { n: A })
        : A > 0
          ? I.intl.formatToPlainString(I.t["ThXp+N"], { a: f[0], b: f[1], c: f[2], n: A })
          : I.intl.formatToPlainString(I.t["0UzBM3"], { a: f[0], b: f[1], c: f[2] });
}
