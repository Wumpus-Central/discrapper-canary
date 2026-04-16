n.d(t, { default: () => x }), n(321073);
var l = n(627968),
    a = n(64700),
    r = n(731738),
    i = n(397927),
    s = n(964486),
    d = n(58149),
    o = n(915089),
    c = n(831062),
    u = n(923531),
    _ = n(17372),
    m = n(369053),
    p = n(598131),
    g = n(652215),
    h = n(85864);
let x = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: x,
            onSubmit: A,
            onNavigate: v,
            emailToken: f,
            isAuthenticated: b = !0,
        } = e,
        T = (0, o.GV)(),
        { nodes: S, root_node_id: E, success_node_id: I, fail_node_id: C } = n,
        [N, j] = a.useState(E),
        [y, k] = a.useState(void 0),
        [R, D] = a.useState(void 0),
        [M, O] = a.useState([]),
        [w, G] = a.useState(void 0),
        [L, U] = a.useState(void 0),
        [P, B] = a.useState(void 0);
    (0, s.Ay)(() => {
        (0, u.VE)();
    });
    let H = (e) => {
            let { destination: n } = e,
                [, l] = n,
                a = S[l];
            if (void 0 === a) return void c.A.increment({ name: r.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (a.elements.some((e) => "skip" === e.type) && a.button?.type === "next")
                return H({ ...e, destination: ["", a.button.target] });
            if (
                (O([...M, e]),
                null != a.key && v?.(a.key),
                k(void 0),
                D(void 0),
                t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM)
            ) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: S[N].id,
                    next_node: a.id,
                });
            }
            j(l);
        },
        F = async (e) => {
            let l = b ? await (0, m.zC)(n, t, [...M, e]) : await (0, m.bo)(n, t, [...M, e], f),
                a = l?.body?.report_id;
            null != a && G(a), U(S[e.nodeRef].report_type), A?.(a);
        },
        V = () => {
            if (M.length < 1) return;
            let e = [...M],
                n = e.pop(),
                l = n?.nodeRef ?? E;
            if (t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: S[l].report_type,
                    current_node: S[N].id,
                    next_node: S[l].id,
                });
            }
            k(n?.multiSelect?.state), D(n?.textInput), j(l), O(e), v?.("..");
        },
        W = a.useCallback(
            (e, t) => {
                let n;
                for (let t in S) {
                    let l = S[t];
                    if (l.key === e) {
                        n = l;
                        break;
                    }
                }
                if (null == n) return;
                let l = M.findIndex((e) => e.nodeRef === n.id);
                if (l >= 0) {
                    let e = M.slice(0, l),
                        t = M[l];
                    D(t?.textInput), k(t?.multiSelect?.state), O(e);
                } else O([]), D(void 0), k(void 0);
                B(t), j(n.id);
            },
            [S, M],
        );
    a.useEffect(() => {
        null != P && B(void 0);
    }, [P]);
    let z = a.useMemo(() => {
        let e = [],
            t = [];
        for (let n in S) {
            let l = S[n];
            if (l.id !== I && l.id !== C && l.id !== E) {
                if (l.key.endsWith("_SUBMIT") || l.button?.type === "submit") {
                    t.push(l);
                    continue;
                }
                if ((e.push(l), l.button?.type === "next")) {
                    let t = l.button?.target,
                        n = e.indexOf(S[t]);
                    -1 !== n && (e.splice(n, 1), e.push(S[t]));
                }
            }
        }
        return [S[E], ...e, ...t, S[I], S[C]];
    }, [S, E, C, I]);
    return (0, l.jsx)(i.EOs, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        "aria-labelledby": T,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(i.tN_, {
            width: 440,
            activeSlide: N,
            centered: !1,
            children: z.map((e) =>
                (0, l.jsx)(
                    i.q7S,
                    {
                        id: e.id,
                        children: (0, l.jsx)("div", {
                            className: h.B,
                            children: (0, l.jsx)(p.A, {
                                node: e,
                                reportType: t,
                                reportSubType: L,
                                history: M,
                                onModalClose: x.onClose,
                                onSelectChild: H,
                                onNavigateBack: V,
                                onNavigateToNode: W,
                                multiSelect: y,
                                textInput: R,
                                successNodeId: I,
                                failNodeId: C,
                                onSubmit: F,
                                reportId: w,
                                nodeMap: S,
                                initialErrorMessage: e.id === N ? P : void 0,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
