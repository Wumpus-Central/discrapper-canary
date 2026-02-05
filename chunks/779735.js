n.d(t, { default: () => p }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(731738),
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
        [C, I] = a.useState(N),
        [E, y] = a.useState(void 0),
        [M, R] = a.useState(void 0),
        [L, w] = a.useState([]),
        [O, G] = a.useState(void 0),
        [D, U] = a.useState(void 0);
    (0, s.Ay)(() => {
        (0, c.VE)();
    });
    let B = (e) => {
            let { destination: n } = e,
                [, l] = n,
                a = T[l];
            if (void 0 === a) return void u.A.increment({ name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (a.elements.some((e) => "skip" === e.type) && a.button?.type === "next")
                return B({ ...e, destination: ["", a.button.target] });
            if (
                (w([...L, e]),
                null != a.key && b?.(a.key),
                y(void 0),
                R(void 0),
                t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM)
            ) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: T[C].id,
                    next_node: a.id,
                });
            }
            I(l);
        },
        P = async (e) => {
            let l = f ? await (0, _.zC)(n, t, [...L, e]) : await (0, _.bo)(n, t, [...L, e], v),
                a = l?.body?.report_id;
            null != a && G(a), U(T[e.nodeRef].report_type), A?.(a);
        },
        H = () => {
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
            y(n?.multiSelect?.state), R(n?.textInput), I(l), w(e), b?.("..");
        },
        V = a.useMemo(() => {
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
            children: V.map((e) =>
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
                                onSelectChild: B,
                                onNavigateBack: H,
                                multiSelect: E,
                                textInput: M,
                                successNodeId: S,
                                failNodeId: k,
                                onSubmit: P,
                                reportId: O,
                                nodeMap: T,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
