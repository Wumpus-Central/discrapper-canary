n.d(t, { ApplicationCommandShareModal: () => C });
var l = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(397927),
    r = n(155718),
    u = n(429913),
    o = n(223863),
    c = n(151054),
    d = n(734057),
    m = n(71393),
    h = n(403362),
    x = n(264322),
    f = n(545152),
    g = n(382731),
    b = n(392449),
    p = n(293588),
    A = n(985018),
    _ = n(494872),
    v = n(119390);
let S = [r.kc.CHAT],
    y = () => {
        (0, a.OoC)(p.C);
    };
function C(e) {
    var t;
    let {
            applicationId: n,
            channel: r,
            command: p,
            onClose: C,
            requireLaunchChannel: j,
            onShareResult: N,
            previewMessage: L,
            ...T
        } = e,
        k = i.useMemo(() => (null == r ? null : (0, o._5)(r.id)), [r]),
        [D, M] = i.useState(!1),
        { commands: w, loading: E } =
            ((t = i.useMemo(() => (null == r ? { type: "contextless" } : { type: "channel", channel: r }), [r])),
            (0, x.ZA)(t, { commandTypes: S }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        P = i.useRef(0),
        [I, q] = i.useState(j && null != k ? [k] : []),
        F = I.length,
        G = F >= 5,
        [z, R] = i.useState(""),
        { results: H, updateSearchText: U } = (0, c.R)({
            selectedDestinations: I,
            originDestination: k ?? void 0,
            includeMissingDMs: !0,
        }),
        W = i.useCallback(
            (e) => {
                R(e), U(e);
            },
            [U],
        ),
        O = i.useCallback(() => (N(!1), C()), [N, C]),
        [B] = (0, u.A)([n]),
        J = i.useCallback(() => {
            R("");
        }, [R]),
        Q = i.useRef(null);
    i.useEffect(() => {
        "" === z && Q.current?.focus();
    }, [z]);
    let V = i.useCallback(
            (e) => {
                q((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return G ? t : (R(""), U(""), (P.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (P.current += 1), l;
                });
            },
            [G, U],
        ),
        [K, Y] = i.useMemo(() => {
            if (E) return [null, !1];
            let e = w.find((e) => e.untranslatedName === p.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [p, w, E]),
        Z = i.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === K) return;
                M(!0);
                let n = (await Promise.all(e.map(o.pk))).filter(h.Vq);
                t && (N(!0), y()),
                    n.forEach(async (e) => {
                        let t = d.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                p.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            l = m.A.getGuild(t?.guild_id);
                        null != (await (0, f.A)({ command: K, optionValues: n, context: { channel: t, guild: l } })) &&
                            (0, a.showToast)((0, a.createToast)(A.intl.string(A.t["5WjJcl"]), a.ToastType.MESSAGE));
                    }),
                    N(!0),
                    y();
            },
            [N, K, p.options],
        ),
        X = i.useCallback(() => {
            Z(I, { closeAfterSend: !0 });
        }, [Z, I]);
    if (E)
        return (0, l.jsx)(s.Modal, {
            title: A.intl.string(A.t.fuFvwx),
            "aria-label": A.intl.string(A.t.fuFvwx),
            transitionState: T.transitionState,
            onClose: C,
            actions: [],
            children: (0, l.jsx)(a.y$y, { className: _.dc }),
        });
    if (Y)
        return (0, l.jsx)(s.Modal, {
            title: A.intl.string(A.t.fuFvwx),
            "aria-label": A.intl.string(A.t.fuFvwx),
            transitionState: T.transitionState,
            onClose: C,
            actions: [{ text: A.intl.string(A.t.cpT0Cq), onClick: C, variant: "primary" }],
            children: A.intl.string(A.t.yAk8ZT),
        });
    let $ =
            H.length > 0
                ? (0, l.jsx)(b.z, {
                      rowData: H,
                      handleToggleDestination: V,
                      selectedDestinations: I,
                      disableSelection: G,
                      originDestination: k,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: _.BJ, src: v, alt: "" }),
                          (0, l.jsx)(a.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: A.intl.string(A.t.V6nAfF),
                          }),
                      ],
                  }),
        ee = A.intl.format(A.t.hajTkz, { appName: B?.name });
    null == B && (ee = A.intl.string(A.t.fuFvwx));
    let et = A.intl.format(A.t["DF+q2l"], { appName: B?.name });
    return (
        G && (et = A.intl.format(A.t["/KhyPe"], { count: 5 })),
        (0, l.jsx)(s.Modal, {
            title: ee.toString(),
            subtitle: et,
            "aria-label": ee.toString(),
            transitionState: T.transitionState,
            onClose: O,
            size: "md",
            actions: [
                { text: A.intl.string(A.t.cpT0Cq), onClick: O, variant: "secondary" },
                { text: A.intl.string(A.t.TXNS7S), onClick: X, disabled: 0 === F || D, variant: "primary" },
            ],
            preview: void 0 !== L ? (0, l.jsx)(g.h, { previewMessage: L }) : null,
            input: (0, l.jsx)(a.IWV, {
                ref: Q,
                query: z,
                onChange: W,
                onClear: J,
                placeholder: A.intl.string(A.t["5h0QOP"]),
                "aria-label": A.intl.string(A.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: $,
        })
    );
}
