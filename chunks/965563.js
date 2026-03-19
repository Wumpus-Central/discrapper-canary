n.d(t, { A: () => x }), n(667532);
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
    m = n(985018),
    g = n(21973);
let A = { label: () => m.intl.string(m.t["32u1Dx"]), value: u.YG };
function x() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xk)(),
        n = (0, l.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        m = (0, l.bG)([o.A], () => o.A.getGuilds()),
        { hideGuildOptions: x, hideGlobalOption: h } = (0, _.Z)(),
        p = n[0];
    s.useEffect(() => {
        (h && x) || (e === u.YG && e !== p && h && t(p), e !== u.YG && x && t(u.YG));
    }, [e, t, h, x, p]);
    let T = s.useMemo(() => {
        let e = x
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
                                    className: g.cl,
                                    guild: t,
                                    size: r.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            };
                  })
                  .filter(c.Vq);
        return (
            h ||
                e.unshift({
                    ...A,
                    id: A.value,
                    label: A.label(),
                    leading: (0, i.jsx)("div", {
                        className: g.KP,
                        children: (0, i.jsx)(a.pVd, { size: "sm", color: "white", "aria-hidden": !0, className: g.cl }),
                    }),
                }),
            e
        );
    }, [x, n, h, m]);
    return (0, i.jsx)(a.ZiE, {
        selectionMode: "single",
        onSelectionChange: (e) => {
            t(e);
        },
        value: e,
        options: T,
    });
}
