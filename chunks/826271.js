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
    k = l(422258),
    x = l(174459),
    C = l(652215),
    b = l(462617),
    D = l(449817),
    R = l(375708),
    S = l(606660),
    A = l(349828),
    E = l(221313);
function I(t) {
    let { transitionState: e, onClose: l, parentId: d, source: I } = t;
    a.useEffect(() => {
        x.default.track(C.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: I });
    }, [I]);
    let [w, P] = a.useState(""),
        [_, M] = a.useState([]),
        [v, L] = a.useState(!1),
        O = (0, b.A)(),
        { results: y, updateSearchText: F } = (0, f.R)({
            includeMissingDMs: !0,
            channelFilter: O,
            selectedDestinations: _,
        }),
        H = _.length,
        N = H >= A.dh,
        Q = a.useCallback(
            (t) => {
                P(t), F(t);
            },
            [F],
        ),
        U = a.useCallback((t) => {
            M((e) => {
                let l = (0, g.I)(t),
                    n = e.filter((t) => (0, g.I)(t) !== l);
                return n.length < e.length ? n : e.length >= A.dh ? e : [...e, t];
            });
        }, []),
        q = a.useCallback(async () => {
            L(!0);
            let t = (await Promise.all(_.map(g.pk))).filter(m.Vq);
            if (0 === t.length) {
                (0, s.P0)((0, r.o)(R.intl.string(R.t.R0RpRX), u.Ck.FAILURE)), L(!1);
                return;
            }
            (0, S.A)(), (0, k.S_)({ channelIds: t, parentId: d ?? null, source: "modal" }), l();
        }, [l, d, _]),
        T = a.useMemo(() => y.filter((t) => t.type !== h.rD.HEADER), [y]),
        V = (0, p.s)({ rowData: T, selectedDestinations: _, handleToggleDestination: U, disableSelection: N }),
        X = a.useMemo(
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
            onChange: Q,
            onClear: () => Q(""),
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
                    H >= 2
                        ? R.intl.formatToPlainString(D.default.LbCa8x, { count: H })
                        : R.intl.string(D.default.xKXcSu),
                onClick: q,
                disabled: 0 === H,
                loading: v,
            }),
        }),
        listProps: 0 === T.length ? X : V,
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
