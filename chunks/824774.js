l.d(t, { default: () => v });
var n = l(627968),
    s = l(64700),
    r = l(189213),
    a = l(311907),
    i = l(691540),
    u = l(857250),
    c = l(97483),
    o = l(834730),
    d = l(892547),
    h = l(843472),
    m = l(342384),
    f = l(429913),
    g = l(451909),
    b = l(223863),
    x = l(151054),
    A = l(734057),
    _ = l(287809),
    p = l(957565),
    S = l(403362),
    C = l(550880),
    j = l(997877),
    E = l(381941),
    L = l(985018),
    y = l(894385),
    N = l(119390);
function v(e) {
    let {
            applicationId: t,
            customId: l,
            linkId: v,
            message: k,
            onClose: P,
            onCopyLink: T,
            onShare: D,
            transitionState: I,
        } = e,
        [R] = (0, f.A)([t]),
        M = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
        [G, w] = s.useState(!1),
        [q, U] = s.useState(""),
        [H, z] = s.useState("");
    s.useEffect(() => {
        z((0, m.W)({ applicationId: t, referrerId: M?.id, customId: l, linkId: v }));
    }, [t, M, l, v, z]);
    let V = s.useRef(0),
        [W, B] = s.useState([]),
        F = W.length,
        O = F >= 5;
    s.useEffect(() => {
        "" === q && Q.current?.focus();
    }, [q]);
    let Q = s.useRef(null),
        { results: J, updateSearchText: Z } = (0, x.R)({ selectedDestinations: W, includeMissingDMs: !0 }),
        Y = s.useCallback(
            (e) => {
                U(e), Z(e);
            },
            [U, Z],
        ),
        K = s.useCallback(() => {
            Y("");
        }, [Y]),
        X = s.useCallback(
            (e) => {
                B((t) => {
                    let l = t.findIndex((t) => {
                        let { type: l, id: n } = t;
                        return l === e.type && n === e.id;
                    });
                    if (-1 === l) return O ? t : (U(""), (V.current += 1), [e, ...t]);
                    let n = [...t];
                    return n.splice(l, 1), (V.current += 1), n;
                });
            },
            [O],
        ),
        $ = s.useCallback(
            async (e) => {
                if (null == R) return;
                let t = (0, C.r)(k, R, H);
                w(!0),
                    (await Promise.all(e.map(b.pk))).filter(S.Vq).forEach(async (e) => {
                        let l = A.A.getChannel(e);
                        null != l &&
                            (await h.A.sendMessage(e, g.Ay.parse(l, t), !1, { location: E.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, i.P0)(
                        (0, u.o)(L.intl.formatToPlainString(L.t.jQULqL, { applicationName: R.name }), c.Ck.SUCCESS),
                    ),
                    D(!0),
                    P();
            },
            [k, H, P, D, R],
        ),
        ee = s.useCallback(() => {
            (0, p.C)(H, () => {
                T(), (0, i.P0)((0, u.o)(L.intl.string(L.t.t5VZ88), c.Ck.SUCCESS));
            });
        }, [H, T]),
        et =
            J.length > 0
                ? (0, n.jsx)(j.x, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: J,
                      handleToggleDestination: X,
                      selectedDestinations: W,
                      disableSelection: O,
                  })
                : (0, n.jsxs)("div", {
                      className: y.wV,
                      children: [
                          (0, n.jsx)("img", { className: y.BJ, src: N, alt: "" }),
                          (0, n.jsx)(o.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: L.intl.string(L.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, n.jsx)(r.Modal, {
        transitionState: I,
        onClose: P,
        title: L.intl.string(L.t.r9qKow),
        subtitle: k,
        size: "md",
        input: (0, n.jsx)(d.I, {
            ref: Q,
            query: q,
            onChange: Y,
            onClear: K,
            placeholder: L.intl.string(L.t["5h0QOP"]),
            "aria-label": L.intl.string(L.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actions: [
            { text: L.intl.string(L.t.WqhZss), variant: "secondary", onClick: ee },
            {
                text: L.intl.string(L.t.TXNS7S),
                variant: "primary",
                onClick: () => $(W),
                loading: G,
                disabled: !(F > 0),
            },
        ],
        children: et,
    });
}
