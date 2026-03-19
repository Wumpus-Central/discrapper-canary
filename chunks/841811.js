n.d(t, { default: () => N, j: () => b });
var i = n(627968),
    s = n(64700),
    l = n(158954),
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
    I = n(69405);
function b(e, t) {
    return { id: e, type: t, deny: m.x3, allow: A.QY };
}
function N(e) {
    let { channelId: t, onClose: n, ...m } = e,
        N = (0, r.bG)([g.A], () => g.A.getChannel(t)),
        S = (0, r.bG)([p.A], () => p.A.getGuild(N?.getGuildId())),
        [O, x] = s.useState(""),
        [f, T] = s.useState({}),
        [_, G] = s.useState(!1),
        [v, U] = s.useState(null),
        L = s.useRef(null),
        { roles: R, members: M, getRichTag: y } = (0, c.K)(S, N, A.QY, O),
        j = u.A.useSections({ roles: R, members: M });
    if (null == N || null == S) return null;
    let D = async () => {
        G(!0);
        try {
            let e;
            await ((e = Object.values(f)
                .filter((e) => {
                    let { row: t } = e;
                    return null != t.id;
                })
                .map((e) => {
                    let { row: t } = e;
                    return t.rowType === C.T6.ROLE ? b(t.id, h.r2.ROLE) : b(t.id, h.r2.MEMBER);
                })),
            (0, o.R$)(N.id, e, !0)),
                n();
        } catch (t) {
            let e = new d.LG(t);
            G(!1), U(e);
        }
    };
    return (0, i.jsx)(u.A.Provider, {
        listRef: L,
        query: O,
        setQuery: x,
        pendingAdditions: f,
        setPendingAdditions: T,
        roles: R,
        members: M,
        getRichTag: y,
        children: (0, i.jsx)(l.Modal, {
            ...m,
            title: E.intl.string(E.t.dMJ3Y6),
            onClose: n,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(a.Text, {
                        className: I.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(a.qux, { className: I.p, size: "sm", color: "currentColor" }), N.name],
                    }),
                    N.isGuildStageVoice() &&
                        (0, i.jsx)(a.Text, {
                            color: "text-default",
                            className: I.h_,
                            variant: "text-sm/normal",
                            children: E.intl.string(E.t.f7VbhF),
                        }),
                    (0, i.jsx)(u.A.SearchBox, { placeholderText: E.intl.string(E.t.iezLLn) }),
                    (0, i.jsx)(a.Text, {
                        className: I.W$,
                        variant: "text-xs/normal",
                        children: E.intl.string(E.t.rwFx85),
                    }),
                    null != v
                        ? (0, i.jsx)(a.Text, {
                              className: I.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: v.getAnyErrorMessage(),
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
