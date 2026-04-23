n.d(t, { ApplicationCommandShareModal: () => D });
var l = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(192308),
    r = n(691540),
    u = n(857250),
    o = n(97483),
    c = n(289873),
    d = n(834730),
    m = n(892547),
    h = n(155718),
    f = n(429913),
    g = n(223863),
    b = n(151054),
    x = n(734057),
    p = n(71393),
    A = n(403362),
    _ = n(264322),
    v = n(545152),
    S = n(382731),
    y = n(392449),
    C = n(293588),
    j = n(985018),
    N = n(236167),
    L = n(119390);
let E = [h.kc.CHAT],
    k = () => {
        (0, a.closeModal)(C.C);
    };
function D(e) {
    var t;
    let {
            applicationId: n,
            channel: a,
            command: h,
            onClose: C,
            requireLaunchChannel: D,
            onShareResult: M,
            previewMessage: P,
            ...w
        } = e,
        T = i.useMemo(() => (null == a ? null : (0, g._5)(a.id)), [a]),
        [I, q] = i.useState(!1),
        { commands: F, loading: G } =
            ((t = i.useMemo(() => (null == a ? { type: "contextless" } : { type: "channel", channel: a }), [a])),
            (0, _.ZA)(t, { commandTypes: E }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        z = i.useRef(0),
        [R, H] = i.useState(D && null != T ? [T] : []),
        U = R.length,
        W = U >= 5,
        [B, O] = i.useState(""),
        { results: Q, updateSearchText: J } = (0, b.R)({
            selectedDestinations: R,
            originDestination: T ?? void 0,
            includeMissingDMs: !0,
        }),
        V = i.useCallback(
            (e) => {
                O(e), J(e);
            },
            [J],
        ),
        K = i.useCallback(() => (M(!1), C()), [M, C]),
        [Y] = (0, f.A)([n]),
        Z = i.useCallback(() => {
            O("");
        }, [O]),
        X = i.useRef(null);
    i.useEffect(() => {
        "" === B && X.current?.focus();
    }, [B]);
    let $ = i.useCallback(
            (e) => {
                H((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return W ? t : (O(""), J(""), (z.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (z.current += 1), l;
                });
            },
            [W, J],
        ),
        [ee, et] = i.useMemo(() => {
            if (G) return [null, !1];
            let e = F.find((e) => e.untranslatedName === h.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [h, F, G]),
        en = i.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === ee) return;
                q(!0);
                let n = (await Promise.all(e.map(g.pk))).filter(A.Vq);
                t && (M(!0), k()),
                    n.forEach(async (e) => {
                        let t = x.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                h.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            l = p.A.getGuild(t?.guild_id);
                        null != (await (0, v.A)({ command: ee, optionValues: n, context: { channel: t, guild: l } })) &&
                            (0, r.P0)((0, u.o)(j.intl.string(j.t["5WjJcl"]), o.Ck.MESSAGE));
                    }),
                    M(!0),
                    k();
            },
            [M, ee, h.options],
        ),
        el = i.useCallback(() => {
            en(R, { closeAfterSend: !0 });
        }, [en, R]);
    if (G)
        return (0, l.jsx)(s.Modal, {
            title: j.intl.string(j.t.fuFvwx),
            "aria-label": j.intl.string(j.t.fuFvwx),
            transitionState: w.transitionState,
            onClose: C,
            actions: [],
            children: (0, l.jsx)(c.y, { className: N.dc }),
        });
    if (et)
        return (0, l.jsx)(s.Modal, {
            title: j.intl.string(j.t.fuFvwx),
            "aria-label": j.intl.string(j.t.fuFvwx),
            transitionState: w.transitionState,
            onClose: C,
            actions: [{ text: j.intl.string(j.t.cpT0Cq), onClick: C, variant: "primary" }],
            children: j.intl.string(j.t.yAk8ZT),
        });
    let ei =
            Q.length > 0
                ? (0, l.jsx)(y.z, {
                      rowData: Q,
                      handleToggleDestination: $,
                      selectedDestinations: R,
                      disableSelection: W,
                      originDestination: T,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: N.BJ, src: L, alt: "" }),
                          (0, l.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: j.intl.string(j.t.V6nAfF),
                          }),
                      ],
                  }),
        es = j.intl.format(j.t.hajTkz, { appName: Y?.name });
    null == Y && (es = j.intl.string(j.t.fuFvwx));
    let ea = j.intl.format(j.t["DF+q2l"], { appName: Y?.name });
    return (
        W && (ea = j.intl.format(j.t["/KhyPe"], { count: 5 })),
        (0, l.jsx)(s.Modal, {
            title: es.toString(),
            subtitle: ea,
            "aria-label": es.toString(),
            transitionState: w.transitionState,
            onClose: K,
            size: "md",
            actions: [
                { text: j.intl.string(j.t.cpT0Cq), onClick: K, variant: "secondary" },
                { text: j.intl.string(j.t.TXNS7S), onClick: el, disabled: 0 === U || I, variant: "primary" },
            ],
            preview: void 0 !== P ? (0, l.jsx)(S.h, { previewMessage: P }) : null,
            input: (0, l.jsx)(m.I, {
                ref: X,
                query: B,
                onChange: V,
                onClear: Z,
                placeholder: j.intl.string(j.t["5h0QOP"]),
                "aria-label": j.intl.string(j.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: ei,
        })
    );
}
