n.d(t, { A: () => h }), n(667532);
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(263063),
    o = n(71393),
    c = n(711014),
    d = n(403362),
    u = n(612025),
    _ = n(303351),
    m = n(985018),
    A = n(208227);
let g = { label: () => m.intl.string(m.t["32u1Dx"]), value: u.YG };
function h() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xk)(),
        n = (0, a.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()),
        m = (0, a.bG)([o.A], () => o.A.getGuilds()),
        { hideGuildOptions: h, hideGlobalOption: x } = (0, _.Z)(),
        p = n[0];
    s.useEffect(() => {
        (x && h) || (e === u.YG && e !== p && x && t(p), e !== u.YG && h && t(u.YG));
    }, [e, t, x, h, p]);
    let E = s.useMemo(() => {
        let e = h
            ? []
            : n
                  .map((e) => {
                      let t = m[e];
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
                  .filter(d.Vq);
        return (
            x ||
                e.unshift({
                    ...g,
                    id: g.value,
                    label: g.label(),
                    leading: (0, i.jsx)("div", {
                        className: A.KP,
                        children: (0, i.jsx)(l.pVd, { size: "sm", color: "white", "aria-hidden": !0, className: A.cl }),
                    }),
                }),
            e
        );
    }, [h, n, x, m]);
    return (0, i.jsx)(l.ZiE, {
        selectionMode: "single",
        onSelectionChange: (e) => {
            t(e);
        },
        value: e,
        options: E,
    });
}
