n.d(t, { default: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(22095),
    s = n(968843),
    l = n(115179),
    c = n(644646),
    d = n(187546),
    u = n(285910),
    m = n(324805),
    f = n(388032),
    x = n(772052);
function p(e) {
    let { quest: t, rewardName: n, location: i, sourceQuestContent: o } = e;
    return (0, r.jsxs)("div", {
        className: x.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: x.rewardTileContainer,
                children: (0, r.jsx)(c.Z, {
                    autoplay: !0,
                    className: x.rewardTile,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: i,
                    location: m.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: o,
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.copyContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: x.heading,
                        children: f.intl.string(f.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: f.intl.format(f.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, r.jsx)(a.Button, {
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
    let { initialQuest: a, onClose: c, transitionState: f, location: x, sourceQuestContent: C } = e,
        g = null != (n = (0, s.B4)(a.id)) ? n : a,
        h = i.useMemo(() => (0, l.K)(g.config), [g]),
        _ = (null == (t = g.userStatus) ? void 0 : t.claimedAt) != null,
        j = !g.preview && !_,
        [v, N] = i.useState(j ? "loading" : "claimed");
    i.useEffect(() => {
        if (j) {
            let e = (0, l.zG)(g.config);
            (0, o.QB)(g.id, e, x)
                .then(() => N("claimed"))
                .catch(() => N("error"));
        }
    }, [g, x, j]);
    let y = "error" === v || null == h;
    return (0, r.jsx)(u.Z, {
        onClose: c,
        transitionState: f,
        quest: g,
        sourceQuestContent: C,
        location: m.dr.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === v,
        rewardContentHasError: y,
        rewardContent: y
            ? null
            : (0, r.jsx)(d.Z, {
                  rewardName: h.messages.name,
                  children: (0, r.jsx)(p, {
                      quest: g,
                      rewardName: h.messages.name,
                      location: x,
                      sourceQuestContent: C,
                  }),
              }),
    });
}
