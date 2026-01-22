n.d(t, {
    A: () => A,
}),
    n(114821),
    n(339614),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(796774),
    u = n(209932),
    d = n(69217),
    f = n(734057),
    p = n(71393),
    _ = n(576705),
    h = n(287809),
    m = n(927578),
    g = n(980504),
    E = n(818348),
    b = n(343743);
let y = 4;

function O(e) {
    let t = (0, o.bG)([h.default], () => m.Ay.canUseSoundboardEverywhere(h.default.getCurrentUser())),
        n = (0, o.bG)([u.A], () => u.A.getSoundsForGuild(g.mV)),
        r = (0, o.yK)([p.A], () => p.A.getGuildIds()),
        a = i.useMemo(() => _.A.can(E.xB.USE_EXTERNAL_SOUNDS, e), [e]);
    return i.useMemo(() => {
        let i = [];
        if (t && a) {
            let e = r.flatMap((e) => {
                var t, n;
                return null != (t = null == (n = u.A.getSoundsForGuild(e)) ? void 0 : n.filter((e) => e.available))
                    ? t
                    : [];
            });
            i.push(...s().sampleSize(e, y));
        } else if ((null == e ? void 0 : e.guild_id) != null) {
            var o;
            let t =
                null == (o = u.A.getSoundsForGuild(null == e ? void 0 : e.guild_id))
                    ? void 0
                    : o.filter((e) => e.available);
            i.push(...s().sampleSize(t, y));
        }
        return i.length < y && i.push(...s().sampleSize(null != n ? n : [], y - i.length)), i;
    }, [a, null == e ? void 0 : e.guild_id, n, r, t]);
}
let A = i.memo(function (e) {
    let { channelId: t, onSelectSoundmoji: n } = e,
        a = (0, o.bG)([u.A], () => !u.A.isFetching() && !u.A.hasFetchedAllSounds(), []),
        s = (0, o.bG)([f.A], () => f.A.getChannel(t)),
        p = O(s);
    return (i.useEffect(() => {
        (0, c.E7)();
    }, [a]),
    0 === p.length)
        ? (0, r.jsx)(l.y$y, {})
        : (0, r.jsx)("div", {
              className: b.q,
              children: p.map((e, t) =>
                  (0, r.jsx)(
                      d.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: s,
                          onSelectItem: (t) => (null == n ? void 0 : n(e, !t.shiftKey)),
                      },
                      t,
                  ),
              ),
          });
});
