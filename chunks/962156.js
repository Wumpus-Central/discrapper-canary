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
    b = n(264322),
    f = n(545152),
    x = n(382731),
    g = n(392449),
    p = n(293588),
    A = n(985018),
    _ = n(116106),
    v = n(119390);
let y = [r.kc.CHAT],
    S = () => {
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
            previewMessage: T,
            ...L
        } = e,
        D = i.useMemo(() => (null == r ? null : (0, o._5)(r.id)), [r]),
        [k, w] = i.useState(!1),
        { commands: E, loading: P } =
            ((t = i.useMemo(() => (null == r ? { type: "contextless" } : { type: "channel", channel: r }), [r])),
            (0, b.ZA)(t, { commandTypes: y }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        M = i.useRef(0),
        [F, z] = i.useState(j && null != D ? [D] : []),
        I = F.length,
        G = I >= 5,
        [R, q] = i.useState(""),
        { results: H, updateSearchText: U } = (0, c.R)({
            selectedDestinations: F,
            originDestination: D ?? void 0,
            includeMissingDMs: !0,
        }),
        B = i.useCallback(
            (e) => {
                q(e), U(e);
            },
            [U],
        ),
        J = i.useCallback(() => (N(!1), C()), [N, C]),
        [O] = (0, u.A)([n]),
        Q = i.useCallback(() => {
            q("");
        }, [q]),
        W = i.useRef(null);
    i.useEffect(() => {
        "" === R && W.current?.focus();
    }, [R]);
    let V = i.useCallback(
            (e) => {
                z((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return G ? t : (q(""), U(""), (M.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (M.current += 1), l;
                });
            },
            [G, U],
        ),
        [Z, X] = i.useMemo(() => {
            if (P) return [null, !1];
            let e = E.find((e) => e.untranslatedName === p.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [p, E, P]),
        Y = i.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === Z) return;
                w(!0);
                let n = (await Promise.all(e.map(o.pk))).filter(h.Vq);
                t && (N(!0), S()),
                    n.forEach(async (e) => {
                        let t = d.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                p.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            l = m.A.getGuild(t?.guild_id);
                        null != (await (0, f.A)({ command: Z, optionValues: n, context: { channel: t, guild: l } })) &&
                            (0, a.showToast)((0, a.createToast)(A.intl.string(A.t["5WjJcl"]), a.ToastType.MESSAGE));
                    }),
                    N(!0),
                    S();
            },
            [N, Z, p.options],
        ),
        $ = i.useCallback(() => {
            Y(F, { closeAfterSend: !0 });
        }, [Y, F]);
    if (P)
        return (0, l.jsx)(s.Modal, {
            title: A.intl.string(A.t.fuFvwx),
            "aria-label": A.intl.string(A.t.fuFvwx),
            transitionState: L.transitionState,
            onClose: C,
            actions: [],
            children: (0, l.jsx)(a.y$y, { className: _.dc }),
        });
    if (X)
        return (0, l.jsx)(s.Modal, {
            title: A.intl.string(A.t.fuFvwx),
            "aria-label": A.intl.string(A.t.fuFvwx),
            transitionState: L.transitionState,
            onClose: C,
            actions: [{ text: A.intl.string(A.t.cpT0Cq), onClick: C, variant: "primary" }],
            children: A.intl.string(A.t.yAk8ZT),
        });
    let K =
            H.length > 0
                ? (0, l.jsx)(g.z, {
                      rowData: H,
                      handleToggleDestination: V,
                      selectedDestinations: F,
                      disableSelection: G,
                      originDestination: D,
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
        ee = A.intl.format(A.t.hajTkz, { appName: O?.name });
    null == O && (ee = A.intl.string(A.t.fuFvwx));
    let et = A.intl.format(A.t["DF+q2l"], { appName: O?.name });
    return (
        G && (et = A.intl.format(A.t["/KhyPe"], { count: 5 })),
        (0, l.jsx)(s.Modal, {
            title: ee.toString(),
            subtitle: et,
            "aria-label": ee.toString(),
            transitionState: L.transitionState,
            onClose: J,
            size: "md",
            actions: [
                { text: A.intl.string(A.t.cpT0Cq), onClick: J, variant: "secondary" },
                { text: A.intl.string(A.t.TXNS7S), onClick: $, disabled: 0 === I || k, variant: "primary" },
            ],
            preview: void 0 !== T ? (0, l.jsx)(x.h, { previewMessage: T }) : null,
            input: (0, l.jsx)(a.IWV, {
                ref: W,
                query: R,
                onChange: B,
                onClear: Q,
                placeholder: A.intl.string(A.t["5h0QOP"]),
                "aria-label": A.intl.string(A.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: K,
        })
    );
}
