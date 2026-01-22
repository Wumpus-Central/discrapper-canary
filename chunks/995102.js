n.d(e, {
    Ay: () => h,
    gv: () => N,
    pB: () => E,
}),
    n(896048);
var i = n(627968);
n(64700);
var r = n(989349),
    l = n.n(r),
    a = n(311907),
    s = n(397927),
    o = n(914430),
    d = n(832712),
    u = n(392567),
    c = n(543465),
    g = n(477427),
    _ = n(47167),
    A = n(652215),
    S = n(815968),
    f = n(985018);
let N = () => [
        {
            value: S.Xx.MINUTES_15,
            label: f.intl.string(f.t["8ot6gv"]),
        },
        {
            value: S.Xx.HOURS_1,
            label: f.intl.string(f.t.UMWBZr),
        },
        {
            value: S.Xx.HOURS_3,
            label: f.intl.string(f.t.QmYWtu),
        },
        {
            value: S.Xx.HOURS_8,
            label: f.intl.string(f.t.EpAXPC),
        },
        {
            value: S.Xx.HOURS_24,
            label: f.intl.string(f.t["755t4q"]),
        },
        {
            value: S.Xx.ALWAYS,
            label: f.intl.string(f.t.r3LawO),
        },
    ],
    E = (t) => {
        let e = t > 0 ? l()().add(t, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e,
            },
        };
    };
function h(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, l] = (0, a.yK)([c.Ay], () => [
            c.Ay.isChannelMuted(t.guild_id, t.id),
            c.Ay.getChannelMuteConfig(t.guild_id, t.id),
        ]),
        S = (0, u.M)(l),
        h = (0, _.Ay)(t, !0);
    function b(e) {
        e && t.type === A.rbe.GUILD_CATEGORY && (0, o.Gv)(t.id),
            d.A.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, g.G_.muted(e));
    }
    let v = f.intl.string(f.t.tbeRRJ),
        p = f.intl.string(f.t.OYefme);
    switch (t.type) {
        case A.rbe.GUILD_CATEGORY:
            (v = f.intl.string(f.t.pNMCg2)), (p = f.intl.string(f.t.olaBeG));
            break;
        case A.rbe.GROUP_DM:
            (v = f.intl.string(f.t.LO3kaK)), (p = f.intl.string(f.t["s5/5fm"]));
            break;
        case A.rbe.DM:
            (v = n ? f.intl.format(f.t.byjuJm, { name: h }) : f.intl.string(f.t.LO3kaK)),
                (p = n ? f.intl.format(f.t["eC+9rj"], { name: h }) : f.intl.string(f.t["s5/5fm"]));
            break;
        default:
            (v = f.intl.string(f.t.tbeRRJ)), (p = f.intl.string(f.t.OYefme));
    }
    return r
        ? (0, i.jsx)(s.Drp, {
              id: "unmute-channel",
              label: p,
              subtext: S,
              action: () => b(!1),
          })
        : (0, i.jsx)(s.Drp, {
              id: "mute-channel",
              label: v,
              action: () => {
                  b(!0);
              },
              children: N().map((n) => {
                  let { value: r, label: l } = n;
                  return (0, i.jsx)(
                      s.Drp,
                      {
                          id: "".concat(r),
                          label: l,
                          action: () => {
                              let n;
                              return (
                                  t.type === A.rbe.GUILD_CATEGORY && (0, o.Gv)(t.id),
                                  (n = E(r)),
                                  void d.A.updateChannelOverrideSettings(t.guild_id, t.id, n, g.fd.Muted, e)
                              );
                          },
                      },
                      r,
                  );
              }),
          });
}
