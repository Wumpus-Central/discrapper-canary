n.d(t, { default: () => P }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(979554),
    l = n(442837),
    o = n(481060),
    s = n(809206),
    d = n(204418),
    c = n(583434),
    u = n(150039),
    m = n(164946),
    f = n(25990),
    p = n(594174),
    x = n(960048),
    g = n(22095),
    C = n(49436),
    h = n(968843),
    v = n(475595),
    j = n(115179),
    b = n(187546),
    N = n(285910),
    y = n(324805),
    _ = n(388032),
    w = n(315573);
function A(e) {
    var t;
    let { quest: n, avatarDeco: r, onUseNow: i, user: l, mode: s } = e,
        c = (0, v.fh)(n, v.eC.REWARD).url,
        u = (0, h.Qy)(n.config),
        m =
            (null == (t = l.avatarDecoration) ? void 0 : t.skuId) != null &&
            l.avatarDecoration.skuId === (null == r ? void 0 : r.skuId);
    return (0, a.jsxs)("div", {
        className: w.contentContainer,
        children: [
            (0, a.jsx)("div", {
                className: w.previewContainer,
                children: (0, a.jsx)(d.Z, {
                    user: l,
                    guildId: null,
                    avatarDecorationOverride: r,
                    avatarSize: o.EFr.SIZE_152,
                    questPreviewRewardAssetUrl: c,
                }),
            }),
            (0, a.jsxs)("div", {
                className: w.copyContainer,
                children: [
                    (0, a.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: w.heading,
                        children: _.intl.string(_.t["0/Yz+Y"]),
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: u,
                    }),
                ],
            }),
            (0, a.jsx)(o.Button, {
                variant: "secondary",
                size: "sm",
                text: m ? _.intl.string(_.t.hjaYYn) : _.intl.string(_.t.MAS7uK),
                loading: "applying" === s,
                disabled: "claimed" !== s || m,
                onClick: i,
                fullWidth: !0,
            }),
        ],
    });
}
function P(e) {
    var t, n, o;
    let { initialQuest: d, onClose: v, transitionState: _, preview: w, location: P, sourceQuestContent: D } = e,
        E = null != (n = (0, h.B4)(d.id)) ? n : d,
        T = r.useMemo(() => (0, j.xn)(E.config), [E]),
        O = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        [L, R] = (function (e) {
            let { product: t, isFetching: n } = (0, c.T)(e),
                a = r.useMemo(() => {
                    if (null == t || n) return null;
                    let e = t.items.find((e) => e.type === i.Z.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [t, n]),
                l = async () => {
                    if (null == a)
                        return x.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, u.PO)(a);
                    let e = f.Z.getAllPending(),
                        t = (0, m.ED)(e),
                        n = await (0, s.Mn)(t);
                    return (0, s.si)(), !!(null == n ? void 0 : n.ok);
                };
            return [a, l];
        })(null != (o = null == T ? void 0 : T.skuId) ? o : null),
        I = (null == (t = E.userStatus) ? void 0 : t.claimedAt) != null,
        k = !w && !I,
        [S, M] = r.useState(k ? "loading" : "claimed");
    r.useEffect(() => {
        k &&
            (0, g.QB)(E.id, C.y$.CROSS_PLATFORM, P)
                .then(() => M("claimed"))
                .catch(() => M("error"));
    }, [E.id, P, k]);
    let Z = !0 === w && null === L && (null == T ? void 0 : T.skuId) !== "",
        B = null == O,
        W = B || (null == L && !0 !== w) || Z || "loading" === S,
        q = "error" === S || null == T,
        G = async () => {
            M("applying"), M((await R()) ? "applied" : "claimed");
        };
    return (0, a.jsx)(N.Z, {
        onClose: v,
        transitionState: _,
        quest: E,
        sourceQuestContent: D,
        location: y.dr.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: W,
        rewardContentHasError: q,
        rewardContent:
            q || B
                ? null
                : (0, a.jsx)(b.Z, {
                      rewardName: T.messages.name,
                      children: (0, a.jsx)(A, {
                          quest: E,
                          avatarDeco: L,
                          user: O,
                          mode: S,
                          onUseNow: G,
                      }),
                  }),
    });
}
