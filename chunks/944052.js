n.d(t, { X7: () => A, fn: () => m });
var i = n(64700),
    l = n(735438),
    a = n(311907),
    r = n(21119),
    s = n(907459),
    o = n(734057),
    c = n(287809),
    d = n(480012),
    u = n(763754),
    _ = n(985018);
function A(e) {
    let t = (0, a.yK)(
            [c.default],
            () =>
                e.call?.participants != null
                    ? e.call.participants
                          .map((e) => c.default.getUser(e))
                          .filter((e) => null != e)
                          .filter((t) => t.id !== e.author.id)
                    : [],
            [e.author.id, e.call],
        ),
        n = (0, a.bG)([r.A], () => r.A.getUserAffinitiesMap(), []);
    return i.useMemo(() => (0, s.L)(t, n, "VoiceSessionUtils - participants"), [t, n]);
}
function m(e) {
    let t,
        n,
        i = o.A.getChannel(e.channel_id),
        a = (0, d.A)(e),
        A = (0, u.p_)(e),
        m = ((t =
            e.call?.participants.reduce((t, n) => {
                let i = c.default.getUser(n);
                return null == i || i.id === e.author.id ? t : [...t, i];
            }, []) ?? []),
        (n = r.A.getUserAffinitiesMap()),
        (0, s.L)(t, n, "VoiceSessionUtils - participants")).map((e) => ({ user: e, messageAuthor: (0, u.FT)(e, i) }));
    return null == a
        ? _.intl.formatToPlainString(_.t.HzBfIN, { username: A.nick, usernameOnClick: l.identity })
        : _.intl.formatToPlainString(_.t.atbXuX, {
              userCount: m.length + 1,
              username: A.nick,
              usernameOnClick: l.identity,
              username2: m[0]?.messageAuthor.nick,
              username2OnClick: l.identity,
              username3: m[1]?.messageAuthor.nick,
              username3OnClick: l.identity,
              otherCount: m.length - 1,
              duration: a,
          });
}
