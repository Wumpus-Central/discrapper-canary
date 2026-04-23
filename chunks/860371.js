"use strict";
n.d(t, { A: () => A }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(289873),
    u = n(796774),
    c = n(209932),
    d = n(69217),
    _ = n(734057),
    f = n(71393),
    p = n(576705),
    h = n(287809),
    E = n(927578);
n(980504);
var m = n(818348),
    g = n(219920);
let A = i.memo(function (e) {
    let t,
        n,
        s,
        A,
        { channelId: I, onSelectSoundmoji: T } = e,
        S = (0, o.bG)([c.A], () => !c.A.isFetching() && !c.A.hasFetchedAllSounds(), []),
        y = (0, o.bG)([_.A], () => _.A.getChannel(I)),
        N =
            ((t = (0, o.bG)([h.default], () => E.Ay.canUseSoundboardEverywhere(h.default.getCurrentUser()))),
            (n = (0, o.bG)([c.A], () => c.A.getSoundsForGuild("0"))),
            (s = (0, o.yK)([f.A], () => f.A.getGuildIds())),
            (A = i.useMemo(() => p.A.can(m.xB.USE_EXTERNAL_SOUNDS, y), [y])),
            i.useMemo(() => {
                let e = [];
                if (t && A) {
                    let t = s.flatMap((e) => c.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...a().sampleSize(t, 4));
                } else if (y?.guild_id != null) {
                    let t = c.A.getSoundsForGuild(y?.guild_id)?.filter((e) => e.available);
                    e.push(...a().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...a().sampleSize(n ?? [], 4 - e.length)), e;
            }, [A, y?.guild_id, n, s, t]));
    return (i.useEffect(() => {
        (0, u.E7)();
    }, [S]),
    0 === N.length)
        ? (0, r.jsx)(l.y, {})
        : (0, r.jsx)("div", {
              className: g.q,
              children: N.map((e, t) =>
                  (0, r.jsx)(
                      d.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: y,
                          onSelectItem: (t) => T?.(e, !t.shiftKey),
                      },
                      t,
                  ),
              ),
          });
});
