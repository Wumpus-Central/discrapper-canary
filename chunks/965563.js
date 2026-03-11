n.d(t, { A: () => h }), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(263063),
    o = n(71393),
    d = n(711014),
    c = n(403362),
    u = n(612025),
    _ = n(303351),
    g = n(985018),
    A = n(21973);
let m = { label: () => g.intl.string(g.t["32u1Dx"]), value: u.YG };
function h() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xk)(),
        n = (0, l.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        g = (0, l.bG)([o.A], () => o.A.getGuilds()),
        { hideGuildOptions: h, hideGlobalOption: p } = (0, _.Z)(),
        x = n[0];
    s.useEffect(() => {
        (p && h) || (e === u.YG && e !== x && p && t(x), e !== u.YG && h && t(u.YG));
    }, [e, t, p, h, x]);
    let E = s.useMemo(() => {
        let e = h
            ? []
            : n
                  .map((e) => {
                      let t = g[e];
                      return null == t
                          ? null
                          : {
                                id: t.id,
                                label: t.name,
                                value: t.id,
                                leading: (0, i.jsx)(r.Ay, {
                                    className: A.cl,
                                    guild: t,
                                    size: r.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            };
                  })
                  .filter(c.Vq);
        return (
            p ||
                e.unshift({
                    ...m,
                    id: m.value,
                    label: m.label(),
                    leading: (0, i.jsx)("div", {
                        className: A.KP,
                        children: (0, i.jsx)(a.pVd, { size: "sm", color: "white", "aria-hidden": !0, className: A.cl }),
                    }),
                }),
            e
        );
    }, [h, n, p, g]);
    return (0, i.jsx)(a.ZiE, {
        selectionMode: "single",
        onSelectionChange: (e) => {
            t(e);
        },
        value: e,
        options: E,
    });
}
