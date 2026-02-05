"use strict";
n.d(t, { A: () => T }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(796774),
    c = n(209932),
    d = n(69217),
    _ = n(734057),
    f = n(71393),
    p = n(576705),
    h = n(287809),
    m = n(927578);
n(980504);
var g = n(818348),
    E = n(343743);
let A = 4;
function I(e) {
    let t = (0, o.bG)([h.default], () => m.Ay.canUseSoundboardEverywhere(h.default.getCurrentUser())),
        n = (0, o.bG)([c.A], () => c.A.getSoundsForGuild("0")),
        r = (0, o.yK)([f.A], () => f.A.getGuildIds()),
        a = i.useMemo(() => p.A.can(g.xB.USE_EXTERNAL_SOUNDS, e), [e]);
    return i.useMemo(() => {
        let i = [];
        if (t && a) {
            let e = r.flatMap((e) => c.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
            i.push(...s().sampleSize(e, A));
        } else if (e?.guild_id != null) {
            let t = c.A.getSoundsForGuild(e?.guild_id)?.filter((e) => e.available);
            i.push(...s().sampleSize(t, A));
        }
        return i.length < A && i.push(...s().sampleSize(n ?? [], A - i.length)), i;
    }, [a, e?.guild_id, n, r, t]);
}
let T = i.memo(function (e) {
    let { channelId: t, onSelectSoundmoji: n } = e,
        a = (0, o.bG)([c.A], () => !c.A.isFetching() && !c.A.hasFetchedAllSounds(), []),
        s = (0, o.bG)([_.A], () => _.A.getChannel(t)),
        f = I(s);
    return (i.useEffect(() => {
        (0, u.E7)();
    }, [a]),
    0 === f.length)
        ? (0, r.jsx)(l.y$y, {})
        : (0, r.jsx)("div", {
              className: E.q,
              children: f.map((e, t) =>
                  (0, r.jsx)(
                      d.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: s,
                          onSelectItem: (t) => n?.(e, !t.shiftKey),
                      },
                      t,
                  ),
              ),
          });
});
