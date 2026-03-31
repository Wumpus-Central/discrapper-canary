n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(397927),
    u = n(730134),
    h = n(378570),
    A = n(863005),
    _ = n(707539),
    m = n(747926),
    g = n(576705),
    p = n(222823),
    f = n(287809),
    x = n(486020),
    E = n(661191),
    I = n(652215),
    C = n(37411),
    N = n(985018),
    T = n(175397),
    S = n(442078);
function b(e) {
    let { channel: t } = e,
        s = (0, c.yK)([A.A, p.Ay, g.A], () => {
            let e = A.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(A.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(A.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && g.A.can(I.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = p.Ay.lastMessageId(e.id),
                        i = p.Ay.lastMessageId(t.id);
                    return E.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        r = t.isForumLikeChannel() ? 5 : 3,
        u = t.isForumLikeChannel() ? d.bSJ : d.ysw;
    return (
        l.useEffect(() => {
            (0, _.TE)();
        }, []),
        (0, i.jsxs)("div", {
            className: a()(S.popover, T.SW),
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: T.DD,
                    children: t.isForumLikeChannel() ? N.intl.string(N.t.ioVdO2) : N.intl.string(N.t.VNYs2v),
                }),
                (0, i.jsxs)("div", {
                    className: T.p_,
                    children: [
                        s
                            .slice(0, t.isForumLikeChannel() ? s.length : r)
                            .map((e) => (0, i.jsx)(y, { thread: e }, e.id))
                            .filter((e) => l.isValidElement(e))
                            .slice(0, r),
                        (0, i.jsxs)(d.DUT, {
                            className: T.nM,
                            onClick: () => {
                                t.isForumLikeChannel()
                                    ? (0, h.iN)(t.id)
                                    : (0, d.mMO)(async () => {
                                          let { default: e } = await n.e("65225").then(n.bind(n, 126768));
                                          return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, i.jsx)("div", {
                                    className: T.R4,
                                    children: (0, i.jsx)(u, { size: "custom", className: T.Kk }),
                                }),
                                (0, i.jsx)("div", {
                                    className: T.Pf,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: N.intl.string(N.t["4qdZ93"]),
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
function y(e) {
    let { thread: t } = e,
        n = (0, c.bG)([f.default], () => f.default.getUser(t.ownerId)),
        l = (0, _.JO)(t);
    return (0, i.jsxs)(d.DUT, {
        className: T.nM,
        onClick: (e) => {
            (0, m.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, C.H9.POPOUT);
        },
        children: [
            (0, i.jsx)("div", {
                className: T.R4,
                children:
                    null == n
                        ? (0, i.jsx)("img", { className: T.my, src: x.Ay.getDefaultAvatarURL(void 0, void 0), alt: "" })
                        : (0, i.jsx)(u.A, { className: T.my, user: n, size: d._3J.SIZE_16 }),
            }),
            (0, i.jsxs)("div", {
                className: T.Pf,
                children: [
                    (0, i.jsx)(d.Text, { className: T.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, i.jsx)(d.Text, { variant: "text-sm/normal", color: "text-muted", children: "•" }),
                    (0, i.jsx)(d.Text, {
                        className: T.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, _.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
