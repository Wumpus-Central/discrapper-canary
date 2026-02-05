n.d(t, { default: () => p }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(731738),
    r = n(397927),
    s = n(964486),
    d = n(58149),
    o = n(915089),
    u = n(831062),
    c = n(923531),
    m = n(17372),
    _ = n(369053),
    x = n(598131),
    g = n(652215),
    h = n(575119);
let p = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: p,
            onSubmit: A,
            onNavigate: b,
            emailToken: v,
            isAuthenticated: f = !0,
        } = e,
        j = (0, o.GV)(),
        { nodes: T, root_node_id: N, success_node_id: S, fail_node_id: k } = n,
        [C, I] = i.useState(N),
        [E, y] = i.useState(void 0),
        [M, R] = i.useState(void 0),
        [L, O] = i.useState([]),
        [w, G] = i.useState(void 0),
        [D, U] = i.useState(void 0),
        [B, P] = i.useState(void 0);
    (0, s.Ay)(() => {
        (0, c.VE)();
    });
    let H = (e) => {
            let { destination: n } = e,
                [, l] = n,
                i = T[l];
            if (void 0 === i) return void u.A.increment({ name: a.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (i.elements.some((e) => "skip" === e.type) && i.button?.type === "next")
                return H({ ...e, destination: ["", i.button.target] });
            if (
                (O([...L, e]),
                null != i.key && b?.(i.key),
                y(void 0),
                R(void 0),
                t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM)
            ) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: i.report_type,
                    current_node: T[C].id,
                    next_node: i.id,
                });
            }
            I(l);
        },
        V = async (e) => {
            let l = f ? await (0, _.zC)(n, t, [...L, e]) : await (0, _.bo)(n, t, [...L, e], v),
                i = l?.body?.report_id;
            null != i && G(i), U(T[e.nodeRef].report_type), A?.(i);
        },
        W = () => {
            if (L.length < 1) return;
            let e = [...L],
                n = e.pop(),
                l = n?.nodeRef ?? N;
            if (t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: T[l].report_type,
                    current_node: T[C].id,
                    next_node: T[l].id,
                });
            }
            y(n?.multiSelect?.state), R(n?.textInput), I(l), O(e), b?.("..");
        },
        F = i.useCallback(
            (e, t) => {
                let n;
                for (let t in T) {
                    let l = T[t];
                    if (l.key === e) {
                        n = l;
                        break;
                    }
                }
                if (null == n) return;
                let l = L.findIndex((e) => e.nodeRef === n.id);
                if (l >= 0) {
                    let e = L.slice(0, l),
                        t = L[l];
                    R(t?.textInput), y(t?.multiSelect?.state), O(e);
                } else O([]), R(void 0), y(void 0);
                P(t), I(n.id);
            },
            [T, L],
        );
    i.useEffect(() => {
        null != B && P(void 0);
    }, [B]);
    let z = i.useMemo(() => {
        let e = [],
            t = [];
        for (let n in T) {
            let l = T[n];
            if (l.id !== S && l.id !== k && l.id !== N) {
                if (l.key.endsWith("_SUBMIT") || l.button?.type === "submit") {
                    t.push(l);
                    continue;
                }
                if ((e.push(l), l.button?.type === "next")) {
                    let t = l.button?.target,
                        n = e.indexOf(T[t]);
                    -1 !== n && (e.splice(n, 1), e.push(T[t]));
                }
            }
        }
        return [T[N], ...e, ...t, T[S], T[k]];
    }, [T, N, k, S]);
    return (0, l.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: p.transitionState,
        "aria-labelledby": j,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(r.tN_, {
            width: 440,
            activeSlide: C,
            centered: !1,
            children: z.map((e) =>
                (0, l.jsx)(
                    r.q7S,
                    {
                        id: e.id,
                        children: (0, l.jsx)("div", {
                            className: h.B,
                            children: (0, l.jsx)(x.A, {
                                node: e,
                                reportType: t,
                                reportSubType: D,
                                history: L,
                                onModalClose: p.onClose,
                                onSelectChild: H,
                                onNavigateBack: W,
                                onNavigateToNode: F,
                                multiSelect: E,
                                textInput: M,
                                successNodeId: S,
                                failNodeId: k,
                                onSubmit: V,
                                reportId: w,
                                nodeMap: T,
                                initialErrorMessage: e.id === C ? B : void 0,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
