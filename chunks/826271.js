l.d(e, { default: () => v });
var n = l(477900),
    a = l(582128),
    i = l(837381),
    r = l(189213),
    s = l(765178),
    u = l(858899),
    o = l(683438),
    c = l(821609),
    d = l(834730),
    h = l(928039),
    f = l(115718),
    p = l(61916),
    g = l(446244),
    m = l(151054),
    x = l(403362),
    k = l(16236),
    S = l(174459),
    C = l(652215),
    b = l(462617),
    j = l(22277),
    D = l(660183),
    P = l(349828),
    R = l(548654);
function v(t) {
    let { transitionState: e, onClose: l, parentId: d, source: v } = t;
    a.useEffect(() => {
        S.default.track(C.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: v });
    }, [v]);
    let [w, A] = a.useState(""),
        [E, _] = a.useState([]),
        [O, M] = a.useState(!1),
        N = (0, b.A)(),
        { results: y, updateSearchText: H } = (0, m.R)({
            includeMissingDMs: !0,
            channelFilter: N,
            selectedDestinations: E,
        }),
        L = E.length,
        F = L >= P.dh,
        Q = a.useCallback(
            (t) => {
                (A(t), H(t));
            },
            [H],
        ),
        T = a.useCallback(
            (t, e) => {
                let l = (0, g.I)(t),
                    n = !E.some((t) => (0, g.I)(t) === l);
                (n && F) ||
                    (null != e &&
                        s.O.announce(
                            D.intl.formatToPlainString(n ? j.default.mvPjcC : j.default.SgkNaU, {
                                name: e,
                                count: n ? L + 1 : L - 1,
                            }),
                            "polite",
                        ),
                    _(n ? [...E, t] : E.filter((t) => (0, g.I)(t) !== l)));
            },
            [L, E, F],
        ),
        U = a.useCallback(async () => {
            M(!0);
            let t = (await Promise.all(E.map(g.pk))).filter(x.Vq);
            if (0 === t.length) {
                ((0, u.P0)({ text: D.intl.string(D.t.R0RpRX), variant: "critical" }), M(!1));
                return;
            }
            ((0, k.S_)({ channelIds: t, parentId: d ?? null, source: "modal" }), l());
        }, [l, d, E]),
        q = a.useMemo(() => y.filter((t) => t.type !== f.rD.HEADER), [y]),
        V = (0, p.s)({ rowData: q, selectedDestinations: E, handleToggleDestination: T, disableSelection: F }),
        X = a.useRef(null),
        z = (0, h.A)("favorites-add-channel-modal", X),
        B = a.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, n.jsx)(I, {}) }),
            [],
        );
    return (0, n.jsx)(i.hD, {
        navigator: z,
        children: (0, n.jsx)(i.PR, {
            children: (t) => {
                let { ref: a, ...i } = t;
                return (0, n.jsx)(r.a, {
                    title: D.intl.string(j.default.Rp35U1),
                    actions: [],
                    transitionState: e,
                    onClose: l,
                    input: (0, n.jsx)(o.I, {
                        query: w,
                        onChange: Q,
                        onClear: () => Q(""),
                        placeholder: D.intl.string(D.t["5h0QOP"]),
                        "aria-label": D.intl.string(D.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    actionBarInput: (0, n.jsx)("div", {
                        className: R.c,
                        children: (0, n.jsx)(c.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text:
                                L >= 2
                                    ? D.intl.formatToPlainString(j.default.LbCa8x, { count: L })
                                    : D.intl.string(j.default.xKXcSu),
                            onClick: U,
                            disabled: 0 === L,
                            loading: O,
                        }),
                    }),
                    listProps: {
                        ...(0 === q.length ? B : V),
                        ...i,
                        ref: (t) => {
                            ((X.current = t), (a.current = t?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
function I() {
    return (0, n.jsx)("div", {
        className: R.p,
        children: (0, n.jsx)(d.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: D.intl.string(j.default.kQL9be),
        }),
    });
}
