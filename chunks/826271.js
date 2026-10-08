l.d(e, { default: () => I });
var n = l(477900),
    a = l(582128),
    i = l(837381),
    r = l(189213),
    s = l(765178),
    u = l(376357),
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
    C = l(174459),
    S = l(652215),
    R = l(462617),
    b = l(22277),
    j = l(660183),
    D = l(349828),
    P = l(548654);
function I(t) {
    let { transitionState: e, onClose: l, parentId: d, source: I } = t;
    a.useEffect(() => {
        C.default.track(S.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: I });
    }, [I]);
    let [A, E] = a.useState(""),
        [w, _] = a.useState([]),
        [O, L] = a.useState(!1),
        M = (0, R.A)(),
        { results: N, updateSearchText: y } = (0, m.R)({
            includeMissingDMs: !0,
            channelFilter: M,
            selectedDestinations: w,
        }),
        F = w.length,
        H = F >= D.dh,
        U = a.useCallback(
            (t) => {
                (E(t), y(t));
            },
            [y],
        ),
        Q = a.useCallback(
            (t, e) => {
                let l = (0, g.I)(t),
                    n = !w.some((t) => (0, g.I)(t) === l);
                (n && H) ||
                    (null != e &&
                        s.O.announce(
                            j.intl.formatToPlainString(n ? b.default.mvPjcC : b.default.SgkNaU, {
                                name: e,
                                count: n ? F + 1 : F - 1,
                            }),
                            "polite",
                        ),
                    _(n ? [...w, t] : w.filter((t) => (0, g.I)(t) !== l)));
            },
            [F, w, H],
        ),
        T = a.useCallback(async () => {
            L(!0);
            let t = (await Promise.all(w.map(g.pk))).filter(x.Vq);
            if (0 === t.length) {
                ((0, u.P0)((0, u.ox)(j.intl.string(j.t.R0RpRX), u.Ck.FAILURE)), L(!1));
                return;
            }
            ((0, k.S_)({ channelIds: t, parentId: d ?? null, source: "modal" }), l());
        }, [l, d, w]),
        q = a.useMemo(() => N.filter((t) => t.type !== f.rD.HEADER), [N]),
        V = (0, p.s)({ rowData: q, selectedDestinations: w, handleToggleDestination: Q, disableSelection: H }),
        X = a.useRef(null),
        z = (0, h.A)("favorites-add-channel-modal", X),
        B = a.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, n.jsx)(v, {}) }),
            [],
        );
    return (0, n.jsx)(i.hD, {
        navigator: z,
        children: (0, n.jsx)(i.PR, {
            children: (t) => {
                let { ref: a, ...i } = t;
                return (0, n.jsx)(r.a, {
                    title: j.intl.string(b.default.Rp35U1),
                    actions: [],
                    transitionState: e,
                    onClose: l,
                    input: (0, n.jsx)(o.I, {
                        query: A,
                        onChange: U,
                        onClear: () => U(""),
                        placeholder: j.intl.string(j.t["5h0QOP"]),
                        "aria-label": j.intl.string(j.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    actionBarInput: (0, n.jsx)("div", {
                        className: P.c,
                        children: (0, n.jsx)(c.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text:
                                F >= 2
                                    ? j.intl.formatToPlainString(b.default.LbCa8x, { count: F })
                                    : j.intl.string(b.default.xKXcSu),
                            onClick: T,
                            disabled: 0 === F,
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
function v() {
    return (0, n.jsx)("div", {
        className: P.p,
        children: (0, n.jsx)(d.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: j.intl.string(b.default.kQL9be),
        }),
    });
}
