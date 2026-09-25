n.d(t, { default: () => y, j: () => w });
var r = n(477900),
    i = n(582128),
    l = n(17928);
if (221552 == n.j) var s = n(189213);
if (221552 == n.j) var a = n(834730);
if (221552 == n.j) var o = n(451394);
var c = n(702805),
    d = n(913122),
    u = n(155718),
    x = n(47167),
    g = n(517622),
    h = n(86944),
    f = n(734057),
    A = n(71393),
    m = n(488926),
    p = n(233993),
    j = n(719366),
    v = n(375708),
    E = n(562785);
function w(e, t) {
    return { id: e, type: t, deny: m.x3, allow: p.QY };
}
function y(e) {
    let { channelId: t, onClose: n, ...m } = e,
        y = (0, l.bG)([f.A], () => f.A.getChannel(t)),
        R = (0, l.bG)([A.A], () => A.A.getGuild(y?.getGuildId())),
        S = (0, x.Ay)(y),
        [k, C] = i.useState(""),
        [b, G] = i.useState({}),
        [T, H] = i.useState(!1),
        [N, O] = i.useState(null),
        L = i.useRef(null),
        { roles: _, members: I, getRichTag: M } = (0, h.K)(R, y, p.QY, k),
        Y = g.A.useSections({ roles: _, members: I });
    if (null == y || null == R) return null;
    async function P() {
        if (null != y) {
            H(!0);
            try {
                let e;
                (await ((e = Object.values(b)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === j.T6.ROLE ? w(t.id, u.r2.ROLE) : w(t.id, u.r2.MEMBER);
                    })),
                (0, c.R$)(y.id, e, !0)),
                    n());
            } catch (t) {
                let e = new d.LG(t);
                (H(!1), O(e));
            }
        }
    }
    return (0, r.jsx)(g.A.Provider, {
        listRef: L,
        query: k,
        setQuery: C,
        pendingAdditions: b,
        setPendingAdditions: G,
        roles: _,
        members: I,
        getRichTag: M,
        children: (0, r.jsx)(s.a, {
            ...m,
            title: v.intl.string(v.t.dMJ3Y6),
            onClose: n,
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(a.E, {
                        className: E.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, r.jsx)(o.q, { className: E.p, size: "sm", color: "currentColor" }), S],
                    }),
                    y.isGuildStageVoice() &&
                        (0, r.jsx)(a.E, {
                            color: "text-default",
                            className: E.h_,
                            variant: "text-sm/normal",
                            children: v.intl.string(v.t.f7VbhF),
                        }),
                    (0, r.jsx)(g.A.SearchBox, { placeholderText: v.intl.string(v.t.iezLLn) }),
                    (0, r.jsx)(a.E, {
                        className: E.W$,
                        variant: "text-xs/normal",
                        children: v.intl.string(v.t.rwFx85),
                    }),
                    null != N
                        ? (0, r.jsx)(a.E, {
                              className: E.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: N.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: L,
                sectionHeight: g.A.SECTION_HEIGHT,
                renderSection: g.A.renderSection,
                rowHeight: g.A.ROW_HEIGHT,
                renderRow: g.A.renderRow,
                sections: Y,
            },
            actions: [
                { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: v.intl.string(v.t.OYkgVk), onClick: P, loading: T },
            ],
        }),
    });
}
