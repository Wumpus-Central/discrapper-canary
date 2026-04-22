"use strict";
n.d(t, { default: () => b }), n(321073);
var a = n(627968),
    i = n(64700),
    r = n(731738),
    l = n(935462),
    s = n(430690),
    d = n(964486),
    o = n(58149),
    c = n(915089),
    u = n(831062),
    _ = n(923531),
    m = n(17372),
    p = n(369053),
    h = n(598131),
    g = n(652215),
    f = n(488168);
let b = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: b,
            onSubmit: A,
            onNavigate: x,
            emailToken: v,
            isAuthenticated: E = !0,
        } = e,
        I = (0, c.GV)(),
        { nodes: T, root_node_id: S, success_node_id: N, fail_node_id: C } = n,
        [y, j] = i.useState(S),
        [w, R] = i.useState(void 0),
        [L, M] = i.useState(void 0),
        [O, P] = i.useState([]),
        [k, D] = i.useState(void 0),
        [U, G] = i.useState(void 0),
        [B, H] = i.useState(void 0);
    (0, d.Ay)(() => {
        (0, _.VE)();
    });
    let F = (e) => {
            let { destination: n } = e,
                [, a] = n,
                i = T[a];
            if (void 0 === i) return void u.A.increment({ name: r.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (i.elements.some((e) => "skip" === e.type) && i.button?.type === "next")
                return F({ ...e, destination: ["", i.button.target] });
            if (
                (P([...O, e]),
                null != i.key && x?.(i.key),
                R(void 0),
                M(void 0),
                t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM)
            ) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: i.report_type,
                    current_node: T[y].id,
                    next_node: i.id,
                });
            }
            j(a);
        },
        V = async (e) => {
            let a = E ? await (0, p.zC)(n, t, [...O, e]) : await (0, p.bo)(n, t, [...O, e], v),
                i = a?.body?.report_id;
            null != i && D(i), G(T[e.nodeRef].report_type), A?.(i);
        },
        W = () => {
            if (O.length < 1) return;
            let e = [...O],
                n = e.pop(),
                a = n?.nodeRef ?? S;
            if (t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: T[a].report_type,
                    current_node: T[y].id,
                    next_node: T[a].id,
                });
            }
            R(n?.multiSelect?.state), M(n?.textInput), j(a), P(e), x?.("..");
        },
        Z = i.useCallback(
            (e, t) => {
                let n;
                for (let t in T) {
                    let a = T[t];
                    if (a.key === e) {
                        n = a;
                        break;
                    }
                }
                if (null == n) return;
                let a = O.findIndex((e) => e.nodeRef === n.id);
                if (a >= 0) {
                    let e = O.slice(0, a),
                        t = O[a];
                    M(t?.textInput), R(t?.multiSelect?.state), P(e);
                } else P([]), M(void 0), R(void 0);
                H(t), j(n.id);
            },
            [T, O],
        );
    i.useEffect(() => {
        null != B && H(void 0);
    }, [B]);
    let z = i.useMemo(() => {
        let e = [],
            t = [];
        for (let n in T) {
            let a = T[n];
            if (a.id !== N && a.id !== C && a.id !== S) {
                if (a.key.endsWith("_SUBMIT") || a.button?.type === "submit") {
                    t.push(a);
                    continue;
                }
                if ((e.push(a), a.button?.type === "next")) {
                    let t = a.button?.target,
                        n = e.indexOf(T[t]);
                    -1 !== n && (e.splice(n, 1), e.push(T[t]));
                }
            }
        }
        return [T[S], ...e, ...t, T[N], T[C]];
    }, [T, S, C, N]);
    return (0, a.jsx)(l.EO, {
        "data-migration-pending": !0,
        transitionState: b.transitionState,
        "aria-labelledby": I,
        parentComponent: "InAppReportModal",
        children: (0, a.jsx)(s.t, {
            width: 440,
            activeSlide: y,
            centered: !1,
            children: z.map((e) =>
                (0, a.jsx)(
                    s.q,
                    {
                        id: e.id,
                        children: (0, a.jsx)("div", {
                            className: f.B,
                            children: (0, a.jsx)(h.A, {
                                node: e,
                                reportType: t,
                                reportSubType: U,
                                history: O,
                                onModalClose: b.onClose,
                                onSelectChild: F,
                                onNavigateBack: W,
                                onNavigateToNode: Z,
                                multiSelect: w,
                                textInput: L,
                                successNodeId: N,
                                failNodeId: C,
                                onSubmit: V,
                                reportId: k,
                                nodeMap: T,
                                initialErrorMessage: e.id === y ? B : void 0,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
