"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(397927),
    u = n(730134),
    h = n(378570),
    A = n(863005),
    p = n(707539),
    m = n(747926),
    g = n(576705),
    _ = n(222823),
    f = n(287809),
    x = n(486020),
    C = n(661191),
    E = n(652215),
    I = n(37411),
    N = n(985018),
    S = n(533848);
function b(e) {
    let { channel: t, isStandardGap: l = !1 } = e,
        r = (0, c.yK)([A.A, _.Ay, g.A], () => {
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
        s.useEffect(() => {
            (0, p.TE)();
        }, []),
        (0, i.jsxs)("div", {
            className: a()(S.SW, { [S.iA]: l }),
            children: [
                (0, i.jsx)(d.Text, {
                    className: S.DD,
                    variant: "text-xs/bold",
                    color: "text-default",
                    children: t.isForumLikeChannel() ? N.intl.string(N.t.ioVdO2) : N.intl.string(N.t.VNYs2v),
                }),
                r
                    .slice(0, t.isForumLikeChannel() ? r.length : u)
                    .map((e) => (0, i.jsx)(T, { thread: e }, e.id))
                    .filter((e) => s.isValidElement(e))
                    .slice(0, u),
                (0, i.jsx)(d.DUT, {
                    className: S.OS,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, h.iN)(t.id)
                            : (0, d.mMO)(async () => {
                                  let { default: e } = await n.e("65225").then(n.bind(n, 126768));
                                  return (n) => (0, i.jsx)(e, { channel: t, ...n });
                              });
                    },
                    children: (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: N.intl.string(N.t["4qdZ93"]),
                    }),
                }),
            ],
        })
    );
}
function T(e) {
    let { thread: t } = e,
        n = (0, c.bG)([f.default], () => f.default.getUser(t.ownerId)),
        s = (0, p.JO)(t);
    return (0, i.jsxs)(d.DUT, {
        className: S.nM,
        onClick: (e) => {
            (0, m.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, I.H9.POPOUT);
        },
        children: [
            null == n
                ? (0, i.jsx)("img", { className: S.my, src: x.Ay.getDefaultAvatarURL(void 0, void 0), alt: "" })
                : (0, i.jsx)(u.A, { className: S.my, user: n, size: d._3J.SIZE_16 }),
            (0, i.jsx)(d.Text, { className: S.UU, variant: "text-sm/normal", color: "none", children: t.name }),
            (0, i.jsxs)(d.Text, {
                className: S.vE,
                variant: "text-sm/normal",
                color: "none",
                children: [(0, i.jsx)("span", { className: S.xE, children: "•" }), (0, p.aK)(s)],
            }),
        ],
    });
}
