n.d(t, { A: () => h }), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(263063),
    o = n(71393),
    d = n(711014),
    c = n(403362),
    u = n(612025),
    _ = n(303351),
    m = n(985018),
    g = n(208227);
let A = { label: () => m.intl.string(m.t["32u1Dx"]), value: u.YG };
function h() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xk)(),
        n = (0, l.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        m = (0, l.bG)([o.A], () => o.A.getGuilds()),
        { hideGuildOptions: h, hideGlobalOption: x } = (0, _.Z)(),
        p = n[0];
    s.useEffect(() => {
        (x && h) || (e === u.YG && e !== p && x && t(p), e !== u.YG && h && t(u.YG));
    }, [e, t, x, h, p]);
    let T = s.useMemo(() => {
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
                                leading: (0, i.jsx)(a.Ay, {
                                    className: g.cl,
                                    guild: t,
                                    size: a.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            };
                  })
                  .filter(c.Vq);
        return (
            x ||
                e.unshift({
                    ...A,
                    id: A.value,
                    label: A.label(),
                    leading: (0, i.jsx)("div", {
                        className: g.KP,
                        children: (0, i.jsx)(r.pVd, { size: "sm", color: "white", "aria-hidden": !0, className: g.cl }),
                    }),
                }),
            e
        );
    }, [h, n, x, m]);
    return (0, i.jsx)(r.ZiE, {
        selectionMode: "single",
        onSelectionChange: (e) => {
            t(e);
        },
        value: e,
        options: T,
    });
}
