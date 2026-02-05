n.d(t, { A: () => E }), n(667532);
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(263063),
    o = n(71393),
    c = n(711014),
    d = n(403362),
    u = n(612025),
    _ = n(303351),
    m = n(985018),
    A = n(208227);
let g = { label: () => m.intl.string(m.t["32u1Dx"]), value: u.YG };
function E() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xk)(),
        n = (0, r.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()),
        m = (0, r.bG)([o.A], () => o.A.getGuilds()),
        { hideGuildOptions: E, hideGlobalOption: h } = (0, _.Z)(),
        p = n[0];
    s.useEffect(() => {
        (h && E) || (e === u.YG && e !== p && h && t(p), e !== u.YG && E && t(u.YG));
    }, [e, t, h, E, p]);
    let C = s.useMemo(() => {
        let e = E
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
                                leading: (0, i.jsx)(l.A, {
                                    className: A.cl,
                                    guild: t,
                                    size: l.A.Sizes.SMALLER,
                                    active: !0,
                                }),
                            };
                  })
                  .filter(d.Vq);
        return (
            h ||
                e.unshift({
                    ...g,
                    id: g.value,
                    label: g.label(),
                    leading: (0, i.jsx)("div", {
                        className: A.KP,
                        children: (0, i.jsx)(a.pVd, { size: "sm", color: "white", "aria-hidden": !0, className: A.cl }),
                    }),
                }),
            e
        );
    }, [E, n, h, m]);
    return (0, i.jsx)(a.ZiE, {
        selectionMode: "single",
        onSelectionChange: (e) => {
            t(e);
        },
        value: e,
        options: C,
    });
}
