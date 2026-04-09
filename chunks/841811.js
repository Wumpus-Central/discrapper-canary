n.d(t, { default: () => S, j: () => N });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(397927),
    o = n(702805),
    d = n(198982),
    h = n(155718),
    u = n(47167),
    c = n(845202),
    g = n(86944),
    p = n(734057),
    m = n(71393),
    A = n(488926),
    C = n(233993),
    E = n(737045),
    I = n(985018),
    b = n(925677);
function N(e, t) {
    return { id: e, type: t, deny: A.x3, allow: C.QY };
}
function S(e) {
    let { channelId: t, onClose: n, ...A } = e,
        S = (0, r.bG)([p.A], () => p.A.getChannel(t)),
        O = (0, r.bG)([m.A], () => m.A.getGuild(S?.getGuildId())),
        x = (0, u.Ay)(S),
        [f, T] = s.useState(""),
        [_, G] = s.useState({}),
        [v, U] = s.useState(!1),
        [L, R] = s.useState(null),
        M = s.useRef(null),
        { roles: y, members: j, getRichTag: D } = (0, g.K)(O, S, C.QY, f),
        P = c.A.useSections({ roles: y, members: j });
    if (null == S || null == O) return null;
    let w = async () => {
        U(!0);
        try {
            let e;
            await ((e = Object.values(_)
                .filter((e) => {
                    let { row: t } = e;
                    return null != t.id;
                })
                .map((e) => {
                    let { row: t } = e;
                    return t.rowType === E.T6.ROLE ? N(t.id, h.r2.ROLE) : N(t.id, h.r2.MEMBER);
                })),
            (0, o.R$)(S.id, e, !0)),
                n();
        } catch (t) {
            let e = new d.LG(t);
            U(!1), R(e);
        }
    };
    return (0, i.jsx)(c.A.Provider, {
        listRef: M,
        query: f,
        setQuery: T,
        pendingAdditions: _,
        setPendingAdditions: G,
        roles: y,
        members: j,
        getRichTag: D,
        children: (0, i.jsx)(l.Modal, {
            ...A,
            title: I.intl.string(I.t.dMJ3Y6),
            onClose: n,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(a.Text, {
                        className: b.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(a.qux, { className: b.p, size: "sm", color: "currentColor" }), x],
                    }),
                    S.isGuildStageVoice() &&
                        (0, i.jsx)(a.Text, {
                            color: "text-default",
                            className: b.h_,
                            variant: "text-sm/normal",
                            children: I.intl.string(I.t.f7VbhF),
                        }),
                    (0, i.jsx)(c.A.SearchBox, { placeholderText: I.intl.string(I.t.iezLLn) }),
                    (0, i.jsx)(a.Text, {
                        className: b.W$,
                        variant: "text-xs/normal",
                        children: I.intl.string(I.t.rwFx85),
                    }),
                    null != L
                        ? (0, i.jsx)(a.Text, {
                              className: b.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: L.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: M,
                sectionHeight: c.A.SECTION_HEIGHT,
                renderSection: c.A.renderSection,
                rowHeight: c.A.ROW_HEIGHT,
                renderRow: c.A.renderRow,
                sections: P,
            },
            actions: [
                { variant: "secondary", text: I.intl.string(I.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: I.intl.string(I.t.OYkgVk), onClick: w, loading: v },
            ],
        }),
    });
}
