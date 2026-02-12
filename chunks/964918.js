n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(397927),
    u = n(730134),
    h = n(378570),
    A = n(863005),
    m = n(707539),
    p = n(747926),
    g = n(576705),
    _ = n(222823),
    f = n(287809),
    x = n(486020),
    C = n(661191),
    E = n(652215),
    I = n(37411),
    b = n(985018),
    N = n(533848);
function S(e) {
    let { channel: t, isStandardGap: s = !1 } = e,
        r = (0, d.yK)([A.A, _.Ay, g.A], () => {
            let e = A.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(A.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(A.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && g.A.can(E.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = _.Ay.lastMessageId(e.id),
                        i = _.Ay.lastMessageId(t.id);
                    return C.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        u = t.isForumLikeChannel() ? 5 : 3;
    return (
        l.useEffect(() => {
            (0, m.TE)();
        }, []),
        (0, i.jsxs)("div", {
            className: a()(N.SW, { [N.iA]: s }),
            children: [
                (0, i.jsx)(c.Text, {
                    className: N.DD,
                    variant: "text-xs/bold",
                    color: "text-default",
                    children: t.isForumLikeChannel() ? b.intl.string(b.t.ioVdO2) : b.intl.string(b.t.VNYs2v),
                }),
                r
                    .slice(0, t.isForumLikeChannel() ? r.length : u)
                    .map((e) => (0, i.jsx)(T, { thread: e }, e.id))
                    .filter((e) => l.isValidElement(e))
                    .slice(0, u),
                (0, i.jsx)(c.DUT, {
                    className: N.OS,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, h.iN)(t.id)
                            : (0, c.mMO)(async () => {
                                  let { default: e } = await n.e("65225").then(n.bind(n, 126768));
                                  return (n) => (0, i.jsx)(e, { channel: t, ...n });
                              });
                    },
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: b.intl.string(b.t["4qdZ93"]),
                    }),
                }),
            ],
        })
    );
}
function T(e) {
    let { thread: t } = e,
        n = (0, d.bG)([f.default], () => f.default.getUser(t.ownerId)),
        l = (0, m.JO)(t);
    return (0, i.jsxs)(c.DUT, {
        className: N.nM,
        onClick: (e) => {
            (0, p.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, I.H9.POPOUT);
        },
        children: [
            null == n
                ? (0, i.jsx)("img", { className: N.my, src: x.Ay.getDefaultAvatarURL(void 0, void 0), alt: "" })
                : (0, i.jsx)(u.A, { className: N.my, user: n, size: c._3J.SIZE_16 }),
            (0, i.jsx)(c.Text, { className: N.UU, variant: "text-sm/normal", color: "none", children: t.name }),
            (0, i.jsxs)(c.Text, {
                className: N.vE,
                variant: "text-sm/normal",
                color: "none",
                children: [(0, i.jsx)("span", { className: N.xE, children: "•" }), (0, m.aK)(l)],
            }),
        ],
    });
}
