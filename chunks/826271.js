l.d(e, { default: () => A });
var n = l(477900),
    a = l(582128),
    i = l(837381),
    r = l(189213),
    s = l(765178),
    u = l(691540),
    o = l(857250),
    c = l(97483),
    d = l(683438),
    h = l(821609),
    f = l(834730),
    p = l(928039),
    g = l(115718),
    m = l(61916),
    x = l(446244),
    k = l(151054),
    C = l(403362),
    S = l(16236),
    R = l(174459),
    b = l(652215),
    j = l(462617),
    D = l(22277),
    P = l(375708),
    I = l(349828),
    v = l(548654);
function A(t) {
    let { transitionState: e, onClose: l, parentId: f, source: A } = t;
    a.useEffect(() => {
        R.default.track(b.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: A });
    }, [A]);
    let [w, _] = a.useState(""),
        [O, L] = a.useState([]),
        [M, N] = a.useState(!1),
        y = (0, j.A)(),
        { results: F, updateSearchText: H } = (0, k.R)({
            includeMissingDMs: !0,
            channelFilter: y,
            selectedDestinations: O,
        }),
        U = O.length,
        Q = U >= I.dh,
        T = a.useCallback(
            (t) => {
                (_(t), H(t));
            },
            [H],
        ),
        q = a.useCallback(
            (t, e) => {
                let l = (0, x.I)(t),
                    n = !O.some((t) => (0, x.I)(t) === l);
                (n && Q) ||
                    (null != e &&
                        s.O.announce(
                            P.intl.formatToPlainString(n ? D.default.mvPjcC : D.default.SgkNaU, {
                                name: e,
                                count: n ? U + 1 : U - 1,
                            }),
                            "polite",
                        ),
                    L(n ? [...O, t] : O.filter((t) => (0, x.I)(t) !== l)));
            },
            [U, O, Q],
        ),
        V = a.useCallback(async () => {
            N(!0);
            let t = (await Promise.all(O.map(x.pk))).filter(C.Vq);
            if (0 === t.length) {
                ((0, u.P0)((0, o.o)(P.intl.string(P.t.R0RpRX), c.Ck.FAILURE)), N(!1));
                return;
            }
            ((0, S.S_)({ channelIds: t, parentId: f ?? null, source: "modal" }), l());
        }, [l, f, O]),
        X = a.useMemo(() => F.filter((t) => t.type !== g.rD.HEADER), [F]),
        z = (0, m.s)({ rowData: X, selectedDestinations: O, handleToggleDestination: q, disableSelection: Q }),
        B = a.useRef(null),
        G = (0, p.A)("favorites-add-channel-modal", B),
        K = a.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, n.jsx)(E, {}) }),
            [],
        );
    return (0, n.jsx)(i.hD, {
        navigator: G,
        children: (0, n.jsx)(i.PR, {
            children: (t) => {
                let { ref: a, ...i } = t;
                return (0, n.jsx)(r.a, {
                    title: P.intl.string(D.default.Rp35U1),
                    actions: [],
                    transitionState: e,
                    onClose: l,
                    input: (0, n.jsx)(d.I, {
                        query: w,
                        onChange: T,
                        onClear: () => T(""),
                        placeholder: P.intl.string(P.t["5h0QOP"]),
                        "aria-label": P.intl.string(P.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    actionBarInput: (0, n.jsx)("div", {
                        className: v.c,
                        children: (0, n.jsx)(h.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text:
                                U >= 2
                                    ? P.intl.formatToPlainString(D.default.LbCa8x, { count: U })
                                    : P.intl.string(D.default.xKXcSu),
                            onClick: V,
                            disabled: 0 === U,
                            loading: M,
                        }),
                    }),
                    listProps: {
                        ...(0 === X.length ? K : z),
                        ...i,
                        ref: (t) => {
                            ((B.current = t), (a.current = t?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
function E() {
    return (0, n.jsx)("div", {
        className: v.p,
        children: (0, n.jsx)(f.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: P.intl.string(D.default.kQL9be),
        }),
    });
}
