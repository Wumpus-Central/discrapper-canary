n.d(t, {
    $m: () => b,
    G8: () => y,
    Gh: () => N,
    I7: () => C,
    Il: () => D,
    Kj: () => S,
    ND: () => R,
    VD: () => L,
    Wn: () => O,
    YP: () => g,
    aw: () => v,
});
var i = n(435558),
    r = n.n(i),
    a = n(132500),
    s = n(23339),
    l = n(17928),
    o = n(695870),
    d = n(505527),
    c = n(763754),
    u = n(734057),
    _ = n(956703),
    E = n(232835),
    A = n(576705),
    h = n(994500),
    I = n(927813),
    f = n(562153),
    p = n(412136),
    T = n(652215),
    m = n(375708);
function g() {
    return { text: void 0, image: void 0, localCreationAnswerId: (0, a.A)() };
}
function S(e) {
    return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "");
}
function N(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function C(e) {
    return (0, l.bG)(
        [A.A],
        () =>
            null != e &&
            e.id !== o.E &&
            !!T.kvI.POLLS.has(e.type) &&
            (!!e.isPrivate() || (A.A.can(T.xBc.SEND_MESSAGES, e) && A.A.can(T.xBc.SEND_POLLS, e))),
    );
}
function O(e, t) {
    return 0 === e.length && null == t.find((e) => R(e));
}
function R(e) {
    let t = e.text?.trim();
    return null != t && t.length > 0;
}
function L(e) {
    let t = e.text?.trim();
    return null != e.image && (null == t || 0 === t.length);
}
function y(e) {
    var t;
    if (null == e) return;
    let n = e?.answers?.map((e, t) => {
            let n = e.poll_media?.emoji,
                i = { ...e.poll_media, emoji: null != n ? { id: n.id, name: n.name ?? "" } : void 0 };
            return { ...e, answer_id: t + 1, poll_media: i };
        }),
        i = e?.duration != null ? ((t = e.duration), new Date(Date.now() + t * I.A.Millis.HOUR).toISOString()) : "0";
    return { ...e, expiry: i, answers: n };
}
function D(e) {
    var t;
    let n,
        i = (0, c.p_)(e),
        r =
            ((t = p.TU),
            (n = e.embeds[0]?.fields?.find((e) => "poll_question_text" === e.rawName)?.rawValue ?? ""),
            null != t ? (0, s.EJ)(n, t) : n);
    return m.intl.format(m.t.Vn97Ka, { username: i.nick, title: r });
}
function v(e) {
    return e.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0);
}
function b(e, t, n) {
    let i,
        a,
        s,
        l,
        o = E.A.getMessage(t, e);
    if (null == o) return "";
    let c = o.getReaction({ id: n, name: "", animated: !1 }),
        A = c?.count_details?.vote ?? 0,
        I =
            ((i = o.getChannelId()),
            (a = _.A.getReactions(i, o.id, { id: n, name: "", animated: !1 }, p.kx, d.v.VOTE)),
            (l = null == (s = u.A.getChannel(i)) || s.isPrivate() ? null : s.getGuildId()),
            r()(Array.from(a?.values() ?? []))
                .reject((e) => h.A.isBlockedOrIgnored(e.id))
                .take(p.kx)
                .map((e) => f.Ay.getName(l, s?.id, e))
                .value());
    if (0 === I.length) return "";
    let T = Math.max(0, A - I.length);
    if (1 === I.length)
        if (T > 0) return m.intl.formatToPlainString(m.t["SV/iZn"], { a: I[0], n: T });
        else return I[0];
    if (2 === I.length)
        if (T > 0) return m.intl.formatToPlainString(m.t.YBnZK0, { a: I[0], b: I[1], n: T });
        else return m.intl.formatToPlainString(m.t["O5+f5c"], { a: I[0], b: I[1] });
    return 3 !== I.length
        ? m.intl.formatToPlainString(m.t.yVX6kE, { n: T })
        : T > 0
          ? m.intl.formatToPlainString(m.t["ThXp+N"], { a: I[0], b: I[1], c: I[2], n: T })
          : m.intl.formatToPlainString(m.t["0UzBM3"], { a: I[0], b: I[1], c: I[2] });
}
