l.d(e, { default: () => I });
var n = l(477900),
    a = l(582128),
    i = l(189213),
    s = l(691540),
    r = l(857250),
    u = l(97483),
    o = l(892547),
    c = l(821609),
    d = l(834730),
    h = l(115718),
    p = l(61916),
    g = l(223863),
    f = l(151054),
    m = l(403362),
    k = l(16236),
    x = l(174459),
    C = l(652215),
    b = l(462617),
    D = l(449817),
    R = l(375708),
    S = l(349828),
    E = l(221313);
function I(t) {
    let { transitionState: e, onClose: l, parentId: d, source: I } = t;
    a.useEffect(() => {
        x.default.track(C.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: I });
    }, [I]);
    let [w, A] = a.useState(""),
        [P, _] = a.useState([]),
        [M, v] = a.useState(!1),
        L = (0, b.A)(),
        { results: O, updateSearchText: y } = (0, f.R)({
            includeMissingDMs: !0,
            channelFilter: L,
            selectedDestinations: P,
        }),
        F = P.length,
        H = F >= S.dh,
        N = a.useCallback(
            (t) => {
                A(t), y(t);
            },
            [y],
        ),
        Q = a.useCallback((t) => {
            _((e) => {
                let l = (0, g.I)(t),
                    n = e.filter((t) => (0, g.I)(t) !== l);
                return n.length < e.length ? n : e.length >= S.dh ? e : [...e, t];
            });
        }, []),
        U = a.useCallback(async () => {
            v(!0);
            let t = (await Promise.all(P.map(g.pk))).filter(m.Vq);
            if (0 === t.length) {
                (0, s.P0)((0, r.o)(R.intl.string(R.t.R0RpRX), u.Ck.FAILURE)), v(!1);
                return;
            }
            (0, k.S_)({ channelIds: t, parentId: d ?? null, source: "modal" }), l();
        }, [l, d, P]),
        q = a.useMemo(() => O.filter((t) => t.type !== h.rD.HEADER), [O]),
        T = (0, p.s)({ rowData: q, selectedDestinations: P, handleToggleDestination: Q, disableSelection: H }),
        V = a.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, n.jsx)(j, {}) }),
            [],
        );
    return (0, n.jsx)(i.Modal, {
        title: R.intl.string(D.default.Rp35U1),
        actions: [],
        transitionState: e,
        onClose: l,
        input: (0, n.jsx)(o.I, {
            query: w,
            onChange: N,
            onClear: () => N(""),
            placeholder: R.intl.string(R.t["5h0QOP"]),
            "aria-label": R.intl.string(R.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: E.c,
            children: (0, n.jsx)(c.$, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text:
                    F >= 2
                        ? R.intl.formatToPlainString(D.default.LbCa8x, { count: F })
                        : R.intl.string(D.default.xKXcSu),
                onClick: U,
                disabled: 0 === F,
                loading: M,
            }),
        }),
        listProps: 0 === q.length ? V : T,
    });
}
function j() {
    return (0, n.jsx)("div", {
        className: E.p,
        children: (0, n.jsx)(d.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(D.default.kQL9be),
        }),
    });
}
