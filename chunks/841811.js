n.d(t, { default: () => N, j: () => I });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    r = n(311907),
    a = n(397927),
    o = n(702805),
    d = n(198982),
    h = n(155718),
    u = n(845202),
    c = n(86944),
    g = n(734057),
    p = n(71393),
    m = n(488926),
    A = n(233993),
    C = n(737045),
    E = n(985018),
    b = n(69405);
function I(e, t) {
    return { id: e, type: t, deny: m.x3, allow: A.QY };
}
function N(e) {
    let { channelId: t, onClose: n, ...m } = e,
        N = (0, r.bG)([g.A], () => g.A.getChannel(t)),
        S = (0, r.bG)([p.A], () => p.A.getGuild(N?.getGuildId())),
        [x, f] = l.useState(""),
        [O, T] = l.useState({}),
        [_, v] = l.useState(!1),
        [G, U] = l.useState(null),
        L = l.useRef(null),
        { roles: M, members: R, getRichTag: y } = (0, c.K)(S, N, A.QY, x),
        j = u.A.useSections({ roles: M, members: R });
    if (null == N || null == S) return null;
    let D = async () => {
        v(!0);
        try {
            let e;
            await ((e = Object.values(O)
                .filter((e) => {
                    let { row: t } = e;
                    return null != t.id;
                })
                .map((e) => {
                    let { row: t } = e;
                    return t.rowType === C.T6.ROLE ? I(t.id, h.r2.ROLE) : I(t.id, h.r2.MEMBER);
                })),
            (0, o.R$)(N.id, e, !0)),
                n();
        } catch (t) {
            let e = new d.LG(t);
            v(!1), U(e);
        }
    };
    return (0, i.jsx)(u.A.Provider, {
        listRef: L,
        query: x,
        setQuery: f,
        pendingAdditions: O,
        setPendingAdditions: T,
        roles: M,
        members: R,
        getRichTag: y,
        children: (0, i.jsx)(s.Modal, {
            ...m,
            title: E.intl.string(E.t.dMJ3Y6),
            onClose: n,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(a.Text, {
                        className: b.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(a.qux, { className: b.p, size: "sm", color: "currentColor" }), N.name],
                    }),
                    N.isGuildStageVoice() &&
                        (0, i.jsx)(a.Text, {
                            color: "text-default",
                            className: b.h_,
                            variant: "text-sm/normal",
                            children: E.intl.string(E.t.f7VbhF),
                        }),
                    (0, i.jsx)(u.A.SearchBox, { placeholderText: E.intl.string(E.t.iezLLn) }),
                    (0, i.jsx)(a.Text, {
                        className: b.W$,
                        variant: "text-xs/normal",
                        children: E.intl.string(E.t.rwFx85),
                    }),
                    null != G
                        ? (0, i.jsx)(a.Text, {
                              className: b.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: G.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: L,
                sectionHeight: u.A.SECTION_HEIGHT,
                renderSection: u.A.renderSection,
                rowHeight: u.A.ROW_HEIGHT,
                renderRow: u.A.renderRow,
                sections: j,
            },
            actions: [
                { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: E.intl.string(E.t.OYkgVk), onClick: D, loading: _ },
            ],
        }),
    });
}
