n.d(t, { default: () => C }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(481060),
    o = n(22095),
    s = n(968843),
    l = n(115179),
    c = n(644646),
    d = n(187546),
    u = n(285910),
    m = n(324805),
    f = n(388032),
    x = n(897619);
function p(e) {
    let { quest: t, rewardName: n, location: r, sourceQuestContent: o } = e;
    return (0, a.jsxs)("div", {
        className: x.contentContainer,
        children: [
            (0, a.jsx)("div", {
                className: x.rewardTileContainer,
                children: (0, a.jsx)(c.Z, {
                    autoplay: !0,
                    className: x.rewardTile,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: r,
                    location: m.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: o,
                }),
            }),
            (0, a.jsxs)("div", {
                className: x.copyContainer,
                children: [
                    (0, a.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: x.heading,
                        children: f.intl.string(f.t["0/Yz+Y"]),
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: f.intl.format(f.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, a.jsx)(i.Button, {
                variant: "secondary",
                size: "sm",
                text: f.intl.string(f.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function C(e) {
    var t, n;
    let { initialQuest: i, onClose: c, transitionState: f, location: x, sourceQuestContent: C } = e,
        g = null != (n = (0, s.B4)(i.id)) ? n : i,
        h = r.useMemo(() => (0, l.K)(g.config), [g]),
        j = (null == (t = g.userStatus) ? void 0 : t.claimedAt) != null,
        b = !g.preview && !j,
        [v, N] = r.useState(b ? "loading" : "claimed");
    r.useEffect(() => {
        if (b) {
            let e = (0, l.zG)(g.config);
            (0, o.QB)(g.id, e, x)
                .then(() => N("claimed"))
                .catch(() => N("error"));
        }
    }, [g, x, b]);
    let _ = "error" === v || null == h;
    return (0, a.jsx)(u.Z, {
        onClose: c,
        transitionState: f,
        quest: g,
        sourceQuestContent: C,
        location: m.dr.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === v,
        rewardContentHasError: _,
        rewardContent: _
            ? null
            : (0, a.jsx)(d.Z, {
                  rewardName: h.messages.name,
                  children: (0, a.jsx)(p, {
                      quest: g,
                      rewardName: h.messages.name,
                      location: x,
                      sourceQuestContent: C,
                  }),
              }),
    });
}
