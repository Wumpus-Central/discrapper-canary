n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(681715),
    i = n(481060),
    a = n(617136),
    s = n(915750),
    c = n(509212),
    u = n(497505),
    d = n(937797),
    m = n(536687),
    p = n(604162),
    f = n(46140),
    v = n(388032);
function E(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: E, isPortrait: g } = o.useContext(m.VideoQuestModalContext),
        O = (0, s.aM)(),
        { enabled: h, variant: b } = d.EO.useConfig({ location: f.dr.VIDEO_MODAL }),
        S = b === d.m_.OVERLAY_SHARE_ON_VIDEO,
        [y, C] = (0, p.G6)(v.intl.string(v.t.RDE0Sc), v.intl.string(v.t["+5kSoW"]), 1700),
        [_, x] = o.useState(!1),
        j = o.useRef(null),
        T = (0, c.vB)(n.config),
        D = o.useCallback(() => {
            T &&
                ((0, c.f2)(n.id, {
                    content: u.jn.VIDEO_MODAL,
                    ctaContent: a.jZ.COPY_QUEST_URL,
                    impressionId: O,
                    sourceQuestContent: E,
                }),
                (h || g) && (0, i.showToast)((0, i.createToast)(v.intl.string(v.t["+5kSoW"]), i.ToastType.SUCCESS)),
                C(),
                x(!0),
                null != j.current && clearTimeout(j.current),
                (j.current = setTimeout(() => {
                    x(!1);
                }, 1700)));
        }, [O, T, n.id, E, C, h, g]);
    return (o.useEffect(
        () => () => {
            null != j.current && clearTimeout(j.current);
        },
        [],
    ),
    T)
        ? h || g
            ? (0, r.jsx)("div", {
                  style: { marginLeft: t ? "auto" : void 0 },
                  children: _
                      ? (0, r.jsx)(i.hU, {
                            variant: "active",
                            icon: i.owK,
                            onClick: D,
                            "aria-label": v.intl.string(v.t.RDE0Sc),
                        })
                      : (0, r.jsx)(l.u, {
                            text: S || !h ? void 0 : v.intl.string(v.t.WqhZss),
                            children: (0, r.jsx)(i.hU, {
                                variant: S ? "overlay-secondary" : "secondary",
                                icon: h ? i.aAc : i.TIy,
                                "aria-label": v.intl.string(v.t.RDE0Sc),
                                onClick: D,
                            }),
                        }),
              })
            : (0, r.jsx)(i.Button, {
                  variant: "secondary",
                  text: y,
                  onClick: D,
              })
        : null;
}
