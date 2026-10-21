n.d(t, { default: () => w, j: () => v });
var r = n(477900),
    i = n(582128),
    l = n(17928);
if (221552 == n.j) var s = n(834730);
if (221552 == n.j) var a = n(451394);
var o = n(702805),
    c = n(913122),
    d = n(155718),
    u = n(47167),
    x = n(517622),
    g = n(86944),
    h = n(734057),
    A = n(71393),
    f = n(488926),
    m = n(233993),
    p = n(719366),
    E = n(105292),
    j = n(562785);
function v(e, t) {
    return { id: e, type: t, deny: f.x3, allow: m.QY };
}
function w(e) {
    let { channelId: t, onClose: n, ...f } = e,
        w = (0, l.bG)([h.A], () => h.A.getChannel(t)),
        y = (0, l.bG)([A.A], () => A.A.getGuild(w?.getGuildId())),
        R = (0, u.Ay)(w),
        [S, k] = i.useState(""),
        [C, b] = i.useState({}),
        [G, T] = i.useState(!1),
        [H, N] = i.useState(null),
        O = i.useRef(null),
        { roles: L, members: M, getRichTag: _ } = (0, g.K)(y, w, m.QY, S),
        I = x.A.useSections({ roles: L, members: M });
    if (null == w || null == y) return null;
    async function Y() {
        if (null != w) {
            T(!0);
            try {
                let e;
                (await ((e = Object.values(C)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === p.T6.ROLE ? v(t.id, d.r2.ROLE) : v(t.id, d.r2.MEMBER);
                    })),
                (0, o.R$)(w.id, e, !0)),
                    n());
            } catch (t) {
                let e = new c.LG(t);
                (T(!1), N(e));
            }
        }
    }
    return (0, r.jsx)(x.A.Provider, {
        listRef: O,
        query: S,
        setQuery: k,
        pendingAdditions: C,
        setPendingAdditions: b,
        roles: L,
        members: M,
        getRichTag: _,
        children: (0, r.jsx)(x.A.Modal, {
            ...f,
            title: E.intl.string(E.t.dMJ3Y6),
            onClose: n,
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)(s.E, {
                        className: j.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, r.jsx)(a.q, { className: j.p, size: "sm", color: "currentColor" }), R],
                    }),
                    w.isGuildStageVoice() &&
                        (0, r.jsx)(s.E, {
                            color: "text-default",
                            className: j.h_,
                            variant: "text-sm/normal",
                            children: E.intl.string(E.t.f7VbhF),
                        }),
                    (0, r.jsx)(x.A.SearchBox, { placeholderText: E.intl.string(E.t.iezLLn) }),
                    (0, r.jsx)(s.E, {
                        className: j.W$,
                        variant: "text-xs/normal",
                        children: E.intl.string(E.t.rwFx85),
                    }),
                    null != H
                        ? (0, r.jsx)(s.E, {
                              className: j.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: H.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                sectionHeight: x.A.SECTION_HEIGHT,
                renderSection: x.A.renderSection,
                rowHeight: x.A.ROW_HEIGHT,
                renderRow: x.A.renderRow,
                sections: I,
            },
            actions: [
                { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: E.intl.string(E.t.OYkgVk), onClick: Y, loading: G },
            ],
        }),
    });
}
