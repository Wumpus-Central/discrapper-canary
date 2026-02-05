s.d(t, { default: () => C });
var l = s(627968),
    n = s(64700),
    r = s(158954),
    a = s(311907),
    i = s(397927),
    u = s(843472),
    c = s(342384),
    o = s(429913),
    d = s(451909),
    f = s(223863),
    m = s(151054),
    h = s(734057),
    b = s(287809),
    x = s(957565),
    g = s(403362),
    p = s(550880),
    A = s(997877),
    _ = s(381941),
    S = s(985018),
    T = s(667052),
    y = s(119390);
function C(e) {
    let {
            applicationId: t,
            customId: s,
            linkId: C,
            message: j,
            onClose: v,
            onCopyLink: E,
            onShare: L,
            transitionState: N,
        } = e,
        [k] = (0, o.A)([t]),
        P = (0, a.bG)([b.default], () => b.default.getCurrentUser()),
        [D, R] = n.useState(!1),
        [w, M] = n.useState(""),
        [G, U] = n.useState("");
    n.useEffect(() => {
        U((0, c.W)({ applicationId: t, referrerId: P?.id, customId: s, linkId: C }));
    }, [t, P, s, C, U]);
    let I = n.useRef(0),
        [H, V] = n.useState([]),
        q = H.length,
        z = q >= 5;
    n.useEffect(() => {
        "" === w && F.current?.focus();
    }, [w]);
    let B = n.useCallback(() => {
            M("");
        }, [M]),
        F = n.useRef(null),
        { results: J, updateSearchText: Q } = (0, m.R)({ selectedDestinations: H, includeMissingDMs: !0 }),
        W = n.useCallback(
            (e) => {
                M(e), Q(e);
            },
            [M, Q],
        ),
        O = n.useCallback(
            (e) => {
                V((t) => {
                    let s = t.findIndex((t) => {
                        let { type: s, id: l } = t;
                        return s === e.type && l === e.id;
                    });
                    if (-1 === s) return z ? t : (M(""), (I.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(s, 1), (I.current += 1), l;
                });
            },
            [z],
        ),
        Z = n.useCallback(
            async (e) => {
                if (null == k) return;
                let t = (0, p.r)(j, k, G);
                R(!0),
                    (await Promise.all(e.map(f.pk))).filter(g.Vq).forEach(async (e) => {
                        let s = h.A.getChannel(e);
                        null != s &&
                            (await u.A.sendMessage(e, d.Ay.parse(s, t), !1, { location: _.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, i.showToast)(
                        (0, i.createToast)(
                            S.intl.formatToPlainString(S.t.jQULqL, { applicationName: k.name }),
                            i.ToastType.SUCCESS,
                        ),
                    ),
                    L(!0),
                    v();
            },
            [j, G, v, L, k],
        ),
        $ = n.useCallback(() => {
            (0, x.C)(G, () => {
                E(), (0, i.showToast)((0, i.createToast)(S.intl.string(S.t.t5VZ88), i.ToastType.SUCCESS));
            });
        }, [G, E]),
        X =
            J.length > 0
                ? (0, l.jsx)(A.x, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: J,
                      handleToggleDestination: O,
                      selectedDestinations: H,
                      disableSelection: z,
                  })
                : (0, l.jsxs)("div", {
                      className: T.wV,
                      children: [
                          (0, l.jsx)("img", { className: T.BJ, src: y, alt: "" }),
                          (0, l.jsx)(i.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, l.jsx)(r.Modal, {
        transitionState: N,
        onClose: v,
        title: S.intl.string(S.t.r9qKow),
        subtitle: j,
        size: "md",
        input: (0, l.jsx)(i.IWV, {
            ref: F,
            query: w,
            onChange: W,
            onClear: B,
            placeholder: S.intl.string(S.t["5h0QOP"]),
            "aria-label": S.intl.string(S.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actions: [
            { text: S.intl.string(S.t.WqhZss), variant: "secondary", onClick: $ },
            {
                text: S.intl.string(S.t.TXNS7S),
                variant: "primary",
                onClick: () => Z(H),
                loading: D,
                disabled: !(q > 0),
            },
        ],
        children: X,
    });
}
