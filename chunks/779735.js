n.d(t, { default: () => A }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(731738),
    r = n(935462),
    s = n(430690),
    d = n(964486),
    o = n(58149),
    c = n(915089),
    u = n(831062),
    _ = n(923531),
    m = n(17372),
    h = n(369053),
    g = n(598131),
    p = n(652215),
    x = n(85864);
let A = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: A,
            onSubmit: f,
            onNavigate: v,
            emailToken: b,
            isAuthenticated: N = !0,
        } = e,
        E = (0, c.GV)(),
        { nodes: S, root_node_id: T, success_node_id: j, fail_node_id: C } = n,
        [I, y] = a.useState(T),
        [k, w] = a.useState(void 0),
        [L, D] = a.useState(void 0),
        [R, M] = a.useState([]),
        [O, P] = a.useState(void 0),
        [G, U] = a.useState(void 0),
        [B, H] = a.useState(void 0);
    (0, d.Ay)(() => {
        (0, _.VE)();
    });
    let V = (e) => {
            let { destination: n } = e,
                [, l] = n,
                a = S[l];
            if (void 0 === a) return void u.A.increment({ name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (a.elements.some((e) => "skip" === e.type) && a.button?.type === "next")
                return V({ ...e, destination: ["", a.button.target] });
            if (
                (M([...R, e]),
                null != a.key && v?.(a.key),
                w(void 0),
                D(void 0),
                t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM)
            ) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: S[I].id,
                    next_node: a.id,
                });
            }
            y(l);
        },
        F = async (e) => {
            let l = N ? await (0, h.zC)(n, t, [...R, e]) : await (0, h.bo)(n, t, [...R, e], b),
                a = l?.body?.report_id;
            null != a && P(a), U(S[e.nodeRef].report_type), f?.(a);
        },
        W = () => {
            if (R.length < 1) return;
            let e = [...R],
                n = e.pop(),
                l = n?.nodeRef ?? T;
            if (t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: S[l].report_type,
                    current_node: S[I].id,
                    next_node: S[l].id,
                });
            }
            w(n?.multiSelect?.state), D(n?.textInput), y(l), M(e), v?.("..");
        },
        z = a.useCallback(
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
                let l = R.findIndex((e) => e.nodeRef === n.id);
                if (l >= 0) {
                    let e = R.slice(0, l),
                        t = R[l];
                    D(t?.textInput), w(t?.multiSelect?.state), M(e);
                } else M([]), D(void 0), w(void 0);
                H(t), y(n.id);
            },
            [S, R],
        );
    a.useEffect(() => {
        null != B && H(void 0);
    }, [B]);
    let Q = a.useMemo(() => {
        let e = [],
            t = [];
        for (let n in S) {
            let l = S[n];
            if (l.id !== j && l.id !== C && l.id !== T) {
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
        return [S[T], ...e, ...t, S[j], S[C]];
    }, [S, T, C, j]);
    return (0, l.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: A.transitionState,
        "aria-labelledby": E,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(s.t, {
            width: 440,
            activeSlide: I,
            centered: !1,
            children: Q.map((e) =>
                (0, l.jsx)(
                    s.q,
                    {
                        id: e.id,
                        children: (0, l.jsx)("div", {
                            className: x.B,
                            children: (0, l.jsx)(g.A, {
                                node: e,
                                reportType: t,
                                reportSubType: G,
                                history: R,
                                onModalClose: A.onClose,
                                onSelectChild: V,
                                onNavigateBack: W,
                                onNavigateToNode: z,
                                multiSelect: k,
                                textInput: L,
                                successNodeId: j,
                                failNodeId: C,
                                onSubmit: F,
                                reportId: O,
                                nodeMap: S,
                                initialErrorMessage: e.id === I ? B : void 0,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
