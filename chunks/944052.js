"use strict";
n.d(t, { X7: () => E, fn: () => A });
var i = n(64700),
    r = n(735438),
    l = n(311907),
    s = n(21119),
    a = n(907459),
    o = n(734057),
    c = n(287809),
    u = n(480012),
    d = n(763754),
    _ = n(985018);
function E(e) {
    let t = (0, l.yK)(
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
        n = (0, l.bG)([s.A], () => s.A.getUserAffinitiesMap(), []);
    return i.useMemo(() => (0, a.L)(t, n, "VoiceSessionUtils - participants"), [t, n]);
}
function A(e) {
    let t,
        n,
        i = o.A.getChannel(e.channel_id),
        l = (0, u.A)(e),
        E = (0, d.p_)(e),
        A = ((t =
            e.call?.participants.reduce((t, n) => {
                let i = c.default.getUser(n);
                return null == i || i.id === e.author.id ? t : [...t, i];
            }, []) ?? []),
        (n = s.A.getUserAffinitiesMap()),
        (0, a.L)(t, n, "VoiceSessionUtils - participants")).map((e) => ({ user: e, messageAuthor: (0, d.FT)(e, i) }));
    return null == l
        ? _.intl.formatToPlainString(_.t.HzBfIN, { username: E.nick, usernameOnClick: r.identity })
        : _.intl.formatToPlainString(_.t.atbXuX, {
              userCount: A.length + 1,
              username: E.nick,
              usernameOnClick: r.identity,
              username2: A[0]?.messageAuthor.nick,
              username2OnClick: r.identity,
              username3: A[1]?.messageAuthor.nick,
              username3OnClick: r.identity,
              otherCount: A.length - 1,
              duration: l,
          });
}
