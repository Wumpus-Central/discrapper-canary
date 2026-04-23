n.d(t, { default: () => f, j: () => S });
var i = n(627968),
    l = n(64700);
if (21552 == n.j) var s = n(189213);
var r = n(311907);
if (21552 == n.j) var a = n(834730);
if (21552 == n.j) var o = n(451394);
var d = n(702805),
    h = n(198982),
    u = n(155718),
    c = n(47167),
    g = n(845202),
    p = n(86944),
    m = n(734057),
    A = n(71393),
    E = n(488926),
    C = n(233993),
    I = n(737045),
    b = n(985018),
    N = n(380174);
function S(e, t) {
    return { id: e, type: t, deny: E.x3, allow: C.QY };
}
function f(e) {
    let { channelId: t, onClose: n, ...E } = e,
        f = (0, r.bG)([m.A], () => m.A.getChannel(t)),
        O = (0, r.bG)([A.A], () => A.A.getGuild(f?.getGuildId())),
        x = (0, c.Ay)(f),
        [_, T] = l.useState(""),
        [v, G] = l.useState({}),
        [L, U] = l.useState(!1),
        [R, M] = l.useState(null),
        y = l.useRef(null),
        { roles: j, members: D, getRichTag: P } = (0, p.K)(O, f, C.QY, _),
        w = g.A.useSections({ roles: j, members: D });
    if (null == f || null == O) return null;
    let H = async () => {
        U(!0);
        try {
            let e;
            await ((e = Object.values(v)
                .filter((e) => {
                    let { row: t } = e;
                    return null != t.id;
                })
                .map((e) => {
                    let { row: t } = e;
                    return t.rowType === I.T6.ROLE ? S(t.id, u.r2.ROLE) : S(t.id, u.r2.MEMBER);
                })),
            (0, d.R$)(f.id, e, !0)),
                n();
        } catch (t) {
            let e = new h.LG(t);
            U(!1), M(e);
        }
    };
    return (0, i.jsx)(g.A.Provider, {
        listRef: y,
        query: _,
        setQuery: T,
        pendingAdditions: v,
        setPendingAdditions: G,
        roles: j,
        members: D,
        getRichTag: P,
        children: (0, i.jsx)(s.Modal, {
            ...E,
            title: b.intl.string(b.t.dMJ3Y6),
            onClose: n,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(a.E, {
                        className: N.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(o.q, { className: N.p, size: "sm", color: "currentColor" }), x],
                    }),
                    f.isGuildStageVoice() &&
                        (0, i.jsx)(a.E, {
                            color: "text-default",
                            className: N.h_,
                            variant: "text-sm/normal",
                            children: b.intl.string(b.t.f7VbhF),
                        }),
                    (0, i.jsx)(g.A.SearchBox, { placeholderText: b.intl.string(b.t.iezLLn) }),
                    (0, i.jsx)(a.E, {
                        className: N.W$,
                        variant: "text-xs/normal",
                        children: b.intl.string(b.t.rwFx85),
                    }),
                    null != R
                        ? (0, i.jsx)(a.E, {
                              className: N.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: R.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: y,
                sectionHeight: g.A.SECTION_HEIGHT,
                renderSection: g.A.renderSection,
                rowHeight: g.A.ROW_HEIGHT,
                renderRow: g.A.renderRow,
                sections: w,
            },
            actions: [
                { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: b.intl.string(b.t.OYkgVk), onClick: H, loading: L },
            ],
        }),
    });
}
