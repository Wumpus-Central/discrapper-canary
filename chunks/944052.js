n.d(e, { X7: () => h, fn: () => m });
var i = n(64700),
    a = n(735438),
    l = n(17928),
    r = n(427358),
    u = n(907459),
    s = n(734057),
    c = n(287809),
    o = n(480012),
    d = n(763754),
    p = n(375708);
function h(t) {
    let e = (0, l.yK)(
            [c.default],
            () =>
                t.call?.participants != null
                    ? t.call.participants
                          .map((t) => c.default.getUser(t))
                          .filter((t) => null != t)
                          .filter((e) => e.id !== t.author.id)
                    : [],
            [t.author.id, t.call],
        ),
        n = (0, l.bG)([r.A], () => r.A.getUserAffinitiesMap(), []);
    return i.useMemo(() => (0, u.L)(e, n, "VoiceSessionUtils - participants"), [e, n]);
}
function m(t) {
    let e,
        n,
        i = s.A.getChannel(t.channel_id),
        l = (0, o.A)(t),
        h = (0, d.p_)(t),
        m = ((e =
            t.call?.participants.reduce((e, n) => {
                let i = c.default.getUser(n);
                return null == i || i.id === t.author.id ? e : [...e, i];
            }, []) ?? []),
        (n = r.A.getUserAffinitiesMap()),
        (0, u.L)(e, n, "VoiceSessionUtils - participants")).map((t) => ({ user: t, messageAuthor: (0, d.FT)(t, i) }));
    return null == l
        ? p.intl.formatToPlainString(p.t.HzBfIN, { username: h.nick, usernameOnClick: a.identity })
        : p.intl.formatToPlainString(p.t.atbXuX, {
              userCount: m.length + 1,
              username: h.nick,
              usernameOnClick: a.identity,
              username2: m[0]?.messageAuthor.nick,
              username2OnClick: a.identity,
              username3: m[1]?.messageAuthor.nick,
              username3OnClick: a.identity,
              otherCount: m.length - 1,
              duration: l,
          });
}
