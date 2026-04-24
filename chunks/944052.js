a.d(n, { X7: () => f, fn: () => h });
var t = a(64700),
    r = a(735438),
    l = a(17928),
    i = a(427358),
    s = a(907459),
    c = a(734057),
    o = a(287809),
    _ = a(480012),
    d = a(763754),
    u = a(985018);
function f(e) {
    let n = (0, l.yK)(
            [o.default],
            () =>
                e.call?.participants != null
                    ? e.call.participants
                          .map((e) => o.default.getUser(e))
                          .filter((e) => null != e)
                          .filter((n) => n.id !== e.author.id)
                    : [],
            [e.author.id, e.call],
        ),
        a = (0, l.bG)([i.A], () => i.A.getUserAffinitiesMap(), []);
    return t.useMemo(() => (0, s.L)(n, a, "VoiceSessionUtils - participants"), [n, a]);
}
function h(e) {
    let n,
        a,
        t = c.A.getChannel(e.channel_id),
        l = (0, _.A)(e),
        f = (0, d.p_)(e),
        h = ((n =
            e.call?.participants.reduce((n, a) => {
                let t = o.default.getUser(a);
                return null == t || t.id === e.author.id ? n : [...n, t];
            }, []) ?? []),
        (a = i.A.getUserAffinitiesMap()),
        (0, s.L)(n, a, "VoiceSessionUtils - participants")).map((e) => ({ user: e, messageAuthor: (0, d.FT)(e, t) }));
    return null == l
        ? u.intl.formatToPlainString(u.t.HzBfIN, { username: f.nick, usernameOnClick: r.identity })
        : u.intl.formatToPlainString(u.t.atbXuX, {
              userCount: h.length + 1,
              username: f.nick,
              usernameOnClick: r.identity,
              username2: h[0]?.messageAuthor.nick,
              username2OnClick: r.identity,
              username3: h[1]?.messageAuthor.nick,
              username3OnClick: r.identity,
              otherCount: h.length - 1,
              duration: l,
          });
}
