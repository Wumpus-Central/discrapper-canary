n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(56059),
    u = n(163328),
    h = n(192308),
    A = n(834730),
    _ = n(939249),
    m = n(778712),
    g = n(730134),
    p = n(378570),
    f = n(863005),
    E = n(707539),
    x = n(747926),
    I = n(576705),
    C = n(222823),
    b = n(287809),
    N = n(486020),
    S = n(661191),
    v = n(652215),
    T = n(37411),
    y = n(985018),
    R = n(550837),
    j = n(824078);
function L(e) {
    let { channel: t } = e,
        s = (0, d.yK)([f.A, C.Ay, I.A], () => {
            let e = f.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(f.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(f.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && I.A.can(v.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = C.Ay.lastMessageId(e.id),
                        i = C.Ay.lastMessageId(t.id);
                    return S.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        r = t.isForumLikeChannel() ? 5 : 3,
        m = t.isForumLikeChannel() ? c.b : u.y;
    return (
        l.useEffect(() => {
            (0, E.TE)();
        }, []),
        (0, i.jsxs)("div", {
            className: a()(j.popover, R.SW),
            children: [
                (0, i.jsx)(A.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: R.DD,
                    children: t.isForumLikeChannel() ? y.intl.string(y.t.ioVdO2) : y.intl.string(y.t.VNYs2v),
                }),
                (0, i.jsxs)("div", {
                    className: R.p_,
                    children: [
                        s
                            .slice(0, t.isForumLikeChannel() ? s.length : r)
                            .map((e) => (0, i.jsx)(O, { thread: e }, e.id))
                            .filter((e) => l.isValidElement(e))
                            .slice(0, r),
                        (0, i.jsxs)(_.D, {
                            className: R.nM,
                            onClick: () => {
                                t.isForumLikeChannel()
                                    ? (0, p.iN)(t.id)
                                    : (0, h.openModalLazy)(async () => {
                                          let { default: e } = await n.e("65225").then(n.bind(n, 126768));
                                          return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, i.jsx)("div", {
                                    className: R.R4,
                                    children: (0, i.jsx)(m, { size: "custom", className: R.Kk }),
                                }),
                                (0, i.jsx)("div", {
                                    className: R.Pf,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: y.intl.string(y.t["4qdZ93"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function O(e) {
    let { thread: t } = e,
        n = (0, d.bG)([b.default], () => b.default.getUser(t.ownerId)),
        l = (0, E.JO)(t);
    return (0, i.jsxs)(_.D, {
        className: R.nM,
        onClick: (e) => {
            (0, x.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, T.H9.POPOUT);
        },
        children: [
            (0, i.jsx)("div", {
                className: R.R4,
                children:
                    null == n
                        ? (0, i.jsx)("img", { className: R.my, src: N.Ay.getDefaultAvatarURL(void 0, void 0), alt: "" })
                        : (0, i.jsx)(g.A, { className: R.my, user: n, size: m._3.SIZE_16 }),
            }),
            (0, i.jsxs)("div", {
                className: R.Pf,
                children: [
                    (0, i.jsx)(A.E, { className: R.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, i.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: "•" }),
                    (0, i.jsx)(A.E, {
                        className: R.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, E.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
