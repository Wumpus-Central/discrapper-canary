var i = n(435558),
    r = n.n(i),
    a = n(115560),
    s = n(23339),
    l = n(855986);
n(695870);
var o = n(505527),
    d = n(763754),
    c = n(734057),
    u = n(956703),
    _ = n(596344),
    E = n(576705),
    A = n(994500),
    h = n(927813),
    f = n(562153);
n(412136);
var I = n(652215),
    p = n(792996);
function m(e) {
    let t = e.text?.trim();
    return null != t && t.length > 0;
}
n.d(
    t,
    {},
    {
        $m: function (e, t, n) {
            let i,
                a,
                s,
                l,
                d = _.A.getMessage(t, e);
            if (null == d) return "";
            let E = d.getReaction({ id: n, name: "", animated: !1 }),
                h = E?.count_details?.vote ?? 0,
                I =
                    ((i = d.getChannelId()),
                    (a = u.A.getReactions(i, d.id, { id: n, name: "", animated: !1 }, 3, o.v.VOTE)),
                    (l = null == (s = c.A.getChannel(i)) || s.isPrivate() ? null : s.getGuildId()),
                    r()(Array.from(a?.values() ?? []))
                        .reject((e) => A.A.isBlockedOrIgnored(e.id))
                        .take(3)
                        .map((e) => f.Ay.getName(l, s?.id, e))
                        .value());
            if (0 === I.length) return "";
            let m = Math.max(0, h - I.length);
            if (1 === I.length)
                if (m > 0) return p.intl.formatToPlainString(p.t["SV/iZn"], { a: I[0], n: m });
                else return I[0];
            if (2 === I.length)
                if (m > 0) return p.intl.formatToPlainString(p.t.YBnZK0, { a: I[0], b: I[1], n: m });
                else return p.intl.formatToPlainString(p.t["O5+f5c"], { a: I[0], b: I[1] });
            return 3 !== I.length
                ? p.intl.formatToPlainString(p.t.yVX6kE, { n: m })
                : m > 0
                  ? p.intl.formatToPlainString(p.t["ThXp+N"], { a: I[0], b: I[1], c: I[2], n: m })
                  : p.intl.formatToPlainString(p.t["0UzBM3"], { a: I[0], b: I[1], c: I[2] });
        },
        G8: function (e) {
            var t;
            if (null == e) return;
            let n = e?.answers?.map((e, t) => {
                    let n = e.poll_media?.emoji,
                        i = { ...e.poll_media, emoji: null != n ? { id: n.id, name: n.name ?? "" } : void 0 };
                    return { ...e, answer_id: t + 1, poll_media: i };
                }),
                i =
                    e?.duration != null
                        ? ((t = e.duration), new Date(Date.now() + t * h.A.Millis.HOUR).toISOString())
                        : "0";
            return { ...e, expiry: i, answers: n };
        },
        Gh: function (e) {
            for (let t of e.reactions) if (null == t.me_vote) return !0;
            return !1;
        },
        I7: function (e) {
            return (0, l.bG)(
                [E.A],
                () =>
                    null != e &&
                    "131" !== e.id &&
                    !!I.kvI.POLLS.has(e.type) &&
                    (!!e.isPrivate() || (E.A.can(I.xBc.SEND_MESSAGES, e) && E.A.can(I.xBc.SEND_POLLS, e))),
            );
        },
        Il: function (e) {
            let t,
                n = (0, d.p_)(e),
                i =
                    ((t = e.embeds[0]?.fields?.find((e) => "poll_question_text" === e.rawName)?.rawValue ?? ""),
                    (0, s.EJ)(t, 50));
            return p.intl.format(p.t.Vn97Ka, { username: n.nick, title: i });
        },
        Kj: function (e) {
            return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "");
        },
        ND: m,
        VD: function (e) {
            let t = e.text?.trim();
            return null != e.image && (null == t || 0 === t.length);
        },
        Wn: function (e, t) {
            return 0 === e.length && null == t.find((e) => m(e));
        },
        YP: function () {
            return { text: void 0, image: void 0, localCreationAnswerId: (0, a.A)() };
        },
        aw: function (e) {
            return e.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0);
        },
    },
);
