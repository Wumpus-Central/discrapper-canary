n.d(t, { default: () => v, j: () => j });
var r = n(477900),
    i = n(582128),
    l = n(17928);
if (221552 == n.j) var s = n(834730);
if (221552 == n.j) var a = n(451394);
var o = n(702805),
    d = n(913122),
    c = n(155718),
    u = n(47167),
    g = n(517622),
    h = n(86944),
    x = n(734057),
    A = n(71393),
    f = n(488926),
    m = n(233993),
    p = n(719366),
    y = n(105292),
    E = n(562785);
function j(e, t) {
    return { id: e, type: t, deny: f.x3, allow: m.QY };
}
function v(e) {
    let { channelId: t, onClose: n, ...f } = e,
        v = (0, l.bG)([x.A], () => x.A.getChannel(t)),
        b = (0, l.bG)([A.A], () => A.A.getGuild(v?.getGuildId())),
        w = (0, u.Ay)(v),
        [R, S] = i.useState(""),
        [k, C] = i.useState({}),
        [G, T] = i.useState(!1),
        [H, N] = i.useState(null),
        O = i.useRef(null),
        { roles: L, members: M, getRichTag: _ } = (0, h.K)(b, v, m.QY, R),
        I = g.A.useSections({ roles: L, members: M });
    if (null == v || null == b) return null;
    async function Y() {
        if (null != v) {
            T(!0);
            try {
                let e;
                (await ((e = Object.values(k)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === p.T6.ROLE ? j(t.id, c.r2.ROLE) : j(t.id, c.r2.MEMBER);
                    })),
                (0, o.R$)(v.id, e, !0)),
                    n());
            } catch (t) {
                let e = new d.LG(t);
                (T(!1), N(e));
            }
        }
    }
    return (0, r.jsx)(g.A.Provider, {
        listRef: O,
        query: R,
        setQuery: S,
        pendingAdditions: k,
        setPendingAdditions: C,
        roles: L,
        members: M,
        getRichTag: _,
        children: (0, r.jsx)(g.A.Modal, {
            ...f,
            title: y.intl.string(y.t.dMJ3Y6),
            onClose: n,
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(s.E, {
                        className: E.HA,
                        variant: "body-lg/normal",
                        color: "text-default",
                        children: [(0, r.jsx)(a.q, { className: E.p, size: "sm", color: "currentColor" }), w],
                    }),
                    v.isGuildStageVoice() &&
                        (0, r.jsx)(s.E, {
                            color: "text-default",
                            className: E.h_,
                            variant: "body-sm/normal",
                            children: y.intl.string(y.t.f7VbhF),
                        }),
                    (0, r.jsx)(g.A.SearchBox, { placeholderText: y.intl.string(y.t.iezLLn) }),
                    (0, r.jsx)(s.E, {
                        className: E.W$,
                        variant: "body-xs/normal",
                        children: y.intl.string(y.t.rwFx85),
                    }),
                    null != H
                        ? (0, r.jsx)(s.E, {
                              className: E.W$,
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              children: H.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                sectionHeight: g.A.SECTION_HEIGHT,
                renderSection: g.A.renderSection,
                rowHeight: g.A.ROW_HEIGHT,
                renderRow: g.A.renderRow,
                sections: I,
            },
            actions: [
                { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: y.intl.string(y.t.OYkgVk), onClick: Y, loading: G },
            ],
        }),
    });
}
