n.d(t, {
    Ay: () => m,
    _E: () => _,
    ac: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(939341),
    o = n(263577),
    l = n(583846),
    c = n(506326),
    u = n(868065),
    d = n(332225);
let f = [c.Xr],
    p = [a.j.WEEK];

function _(e) {
    let t = p;
    return null != e && t.includes(e);
}
let h = (e) => {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: a } = (0, s.nO)({
                entry: t,
                showCoverImage: !1,
            }),
            p = (0, l.TQ)(t);
        return null != p && _(p)
            ? (0, r.jsxs)(u.Zp, {
                  selected: i,
                  children: [
                      (0, r.jsxs)(u.UA, {
                          children: [
                              (0, r.jsx)(u.Hp, {
                                  entry: t,
                                  channelId: n.id,
                                  guildId: n.guild_id,
                              }),
                              (0, r.jsx)(u.ZB, {
                                  children: t.extra.game_name,
                              }),
                              (0, r.jsx)(c.mG, {
                                  location: c.N5.CARD,
                                  children: f.map((e, n) =>
                                      (0, r.jsx)(
                                          e,
                                          {
                                              entry: t,
                                          },
                                          n,
                                      ),
                                  ),
                              }),
                          ],
                      }),
                      (0, r.jsx)(o.V, {
                          src: null == a ? void 0 : a.src,
                          size: 48,
                          className: d.xn,
                          alt: null == a ? void 0 : a.alt,
                      }),
                  ],
              })
            : null;
    },
    m = i.memo(h);
