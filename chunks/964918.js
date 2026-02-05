n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(730134),
    c = n(378570),
    u = n(863005),
    h = n(707539),
    A = n(747926),
    g = n(576705),
    m = n(222823),
    p = n(287809),
    _ = n(486020),
    x = n(661191),
    f = n(652215),
    E = n(37411),
    C = n(985018),
    I = n(533848);
function S(e) {
    let { channel: t } = e,
        s = (0, r.yK)([u.A, m.Ay, g.A], () => {
            let e = u.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return a()(u.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(a().values(u.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && g.A.can(f.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = m.Ay.lastMessageId(e.id),
                        i = m.Ay.lastMessageId(t.id);
                    return x.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        d = t.isForumLikeChannel() ? 5 : 3;
    return (
        l.useEffect(() => {
            (0, h.TE)();
        }, []),
        (0, i.jsxs)("div", {
            className: I.SW,
            children: [
                (0, i.jsx)(o.Text, {
                    className: I.DD,
                    variant: "text-xs/bold",
                    color: "text-default",
                    children: t.isForumLikeChannel() ? C.intl.string(C.t.ioVdO2) : C.intl.string(C.t.VNYs2v),
                }),
                s
                    .slice(0, t.isForumLikeChannel() ? s.length : d)
                    .map((e) => (0, i.jsx)(b, { thread: e }, e.id))
                    .filter((e) => l.isValidElement(e))
                    .slice(0, d),
                (0, i.jsx)(o.DUT, {
                    className: I.OS,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, c.iN)(t.id)
                            : (0, o.mMO)(async () => {
                                  let { default: e } = await n.e("65225").then(n.bind(n, 126768));
                                  return (n) => (0, i.jsx)(e, { channel: t, ...n });
                              });
                    },
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: C.intl.string(C.t["4qdZ93"]),
                    }),
                }),
            ],
        })
    );
}
function b(e) {
    let { thread: t } = e,
        n = (0, r.bG)([p.default], () => p.default.getUser(t.ownerId)),
        l = (0, h.JO)(t);
    return (0, i.jsxs)(o.DUT, {
        className: I.nM,
        onClick: (e) => {
            (0, A.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, E.H9.POPOUT);
        },
        children: [
            null == n
                ? (0, i.jsx)("img", { className: I.my, src: _.Ay.getDefaultAvatarURL(void 0, void 0), alt: "" })
                : (0, i.jsx)(d.A, { className: I.my, user: n, size: o._3J.SIZE_16 }),
            (0, i.jsx)(o.Text, { className: I.UU, variant: "text-sm/normal", color: "none", children: t.name }),
            (0, i.jsxs)(o.Text, {
                className: I.vE,
                variant: "text-sm/normal",
                color: "none",
                children: [(0, i.jsx)("span", { className: I.xE, children: "•" }), (0, h.aK)(l)],
            }),
        ],
    });
}
