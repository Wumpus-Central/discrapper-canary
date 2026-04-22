"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(311907),
    o = n(289873),
    c = n(796774),
    u = n(209932),
    d = n(69217),
    h = n(734057),
    m = n(71393),
    p = n(576705),
    f = n(287809),
    g = n(927578);
n(980504);
var _ = n(818348),
    x = n(219920);
let A = l.memo(function (e) {
    let t,
        n,
        s,
        A,
        { channelId: C, onSelectSoundmoji: E } = e,
        I = (0, a.bG)([u.A], () => !u.A.isFetching() && !u.A.hasFetchedAllSounds(), []),
        v = (0, a.bG)([h.A], () => h.A.getChannel(C)),
        y =
            ((t = (0, a.bG)([f.default], () => g.Ay.canUseSoundboardEverywhere(f.default.getCurrentUser()))),
            (n = (0, a.bG)([u.A], () => u.A.getSoundsForGuild("0"))),
            (s = (0, a.yK)([m.A], () => m.A.getGuildIds())),
            (A = l.useMemo(() => p.A.can(_.xB.USE_EXTERNAL_SOUNDS, v), [v])),
            l.useMemo(() => {
                let e = [];
                if (t && A) {
                    let t = s.flatMap((e) => u.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...r().sampleSize(t, 4));
                } else if (v?.guild_id != null) {
                    let t = u.A.getSoundsForGuild(v?.guild_id)?.filter((e) => e.available);
                    e.push(...r().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...r().sampleSize(n ?? [], 4 - e.length)), e;
            }, [A, v?.guild_id, n, s, t]));
    return (l.useEffect(() => {
        (0, c.E7)();
    }, [I]),
    0 === y.length)
        ? (0, i.jsx)(o.y, {})
        : (0, i.jsx)("div", {
              className: x.q,
              children: y.map((e, t) =>
                  (0, i.jsx)(
                      d.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: v,
                          onSelectItem: (t) => E?.(e, !t.shiftKey),
                      },
                      t,
                  ),
              ),
          });
});
