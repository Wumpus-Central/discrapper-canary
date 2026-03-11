l.d(t, { default: () => y });
var n = l(627968),
    s = l(64700),
    r = l(158954),
    a = l(311907),
    i = l(397927),
    u = l(843472),
    c = l(342384),
    o = l(429913),
    d = l(451909),
    h = l(223863),
    m = l(151054),
    f = l(734057),
    x = l(287809),
    g = l(957565),
    b = l(403362),
    A = l(550880),
    _ = l(997877),
    p = l(381941),
    S = l(985018),
    L = l(667052),
    j = l(119390);
function y(e) {
    let {
            applicationId: t,
            customId: l,
            linkId: y,
            message: T,
            onClose: C,
            onCopyLink: N,
            onShare: v,
            transitionState: E,
        } = e,
        [k] = (0, o.A)([t]),
        P = (0, a.bG)([x.default], () => x.default.getCurrentUser()),
        [D, I] = s.useState(!1),
        [R, M] = s.useState(""),
        [w, G] = s.useState("");
    s.useEffect(() => {
        G((0, c.W)({ applicationId: t, referrerId: P?.id, customId: l, linkId: y }));
    }, [t, P, l, y, G]);
    let U = s.useRef(0),
        [q, H] = s.useState([]),
        V = q.length,
        W = V >= 5;
    s.useEffect(() => {
        "" === R && z.current?.focus();
    }, [R]);
    let z = s.useRef(null),
        { results: B, updateSearchText: F } = (0, m.R)({ selectedDestinations: q, includeMissingDMs: !0 }),
        J = s.useCallback(
            (e) => {
                M(e), F(e);
            },
            [M, F],
        ),
        O = s.useCallback(() => {
            J("");
        }, [J]),
        Q = s.useCallback(
            (e) => {
                H((t) => {
                    let l = t.findIndex((t) => {
                        let { type: l, id: n } = t;
                        return l === e.type && n === e.id;
                    });
                    if (-1 === l) return W ? t : (M(""), (U.current += 1), [e, ...t]);
                    let n = [...t];
                    return n.splice(l, 1), (U.current += 1), n;
                });
            },
            [W],
        ),
        Z = s.useCallback(
            async (e) => {
                if (null == k) return;
                let t = (0, A.r)(T, k, w);
                I(!0),
                    (await Promise.all(e.map(h.pk))).filter(b.Vq).forEach(async (e) => {
                        let l = f.A.getChannel(e);
                        null != l &&
                            (await u.A.sendMessage(e, d.Ay.parse(l, t), !1, { location: p.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, i.showToast)(
                        (0, i.createToast)(
                            S.intl.formatToPlainString(S.t.jQULqL, { applicationName: k.name }),
                            i.ToastType.SUCCESS,
                        ),
                    ),
                    v(!0),
                    C();
            },
            [T, w, C, v, k],
        ),
        Y = s.useCallback(() => {
            (0, g.C)(w, () => {
                N(), (0, i.showToast)((0, i.createToast)(S.intl.string(S.t.t5VZ88), i.ToastType.SUCCESS));
            });
        }, [w, N]),
        $ =
            B.length > 0
                ? (0, n.jsx)(_.x, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: B,
                      handleToggleDestination: Q,
                      selectedDestinations: q,
                      disableSelection: W,
                  })
                : (0, n.jsxs)("div", {
                      className: L.wV,
                      children: [
                          (0, n.jsx)("img", { className: L.BJ, src: j, alt: "" }),
                          (0, n.jsx)(i.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, n.jsx)(r.Modal, {
        transitionState: E,
        onClose: C,
        title: S.intl.string(S.t.r9qKow),
        subtitle: T,
        size: "md",
        input: (0, n.jsx)(i.IWV, {
            ref: z,
            query: R,
            onChange: J,
            onClear: O,
            placeholder: S.intl.string(S.t["5h0QOP"]),
            "aria-label": S.intl.string(S.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actions: [
            { text: S.intl.string(S.t.WqhZss), variant: "secondary", onClick: Y },
            {
                text: S.intl.string(S.t.TXNS7S),
                variant: "primary",
                onClick: () => Z(q),
                loading: D,
                disabled: !(V > 0),
            },
        ],
        children: $,
    });
}
