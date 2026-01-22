n.d(t, { default: () => f }), n(896048), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(731738),
    i = n(397927),
    s = n(964486),
    o = n(58149),
    c = n(915089),
    d = n(831062),
    u = n(923531),
    m = n(17372),
    b = n(369053),
    p = n(598131),
    x = n(652215),
    g = n(575119);
let f = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: f,
            onSubmit: v,
            onNavigate: h,
            emailToken: j,
            isAuthenticated: _ = !0,
        } = e,
        A = (0, c.GV)(),
        { nodes: y, root_node_id: O, success_node_id: S, fail_node_id: T } = n,
        [N, w] = r.useState(O),
        [k, P] = r.useState(void 0),
        [C, E] = r.useState(void 0),
        [I, D] = r.useState([]),
        [M, R] = r.useState(void 0),
        [L, G] = r.useState(void 0);
    (0, s.Ay)(() => {
        (0, u.VE)();
    });
    let U = (e) => {
            var n, l, r;
            let { destination: i } = e,
                [, s] = i,
                c = y[s];
            if (void 0 === c) return void d.A.increment({ name: a.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (c.elements.some((e) => "skip" === e.type) && (null == (n = c.button) ? void 0 : n.type) === "next")
                return U(
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, e)),
                    (r = r =
                        {
                            destination: ["", c.button.target],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    l),
                );
            if (
                (D([...I, e]),
                null != c.key && (null == h || h(c.key)),
                P(void 0),
                E(void 0),
                t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM)
            ) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(x.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: c.report_type,
                    current_node: y[N].id,
                    next_node: c.id,
                });
            }
            w(s);
        },
        B = async (e) => {
            var l;
            let r = _ ? await (0, b.zC)(n, t, [...I, e]) : await (0, b.bo)(n, t, [...I, e], j),
                a = null == r || null == (l = r.body) ? void 0 : l.report_id;
            null != a && R(a), G(y[e.nodeRef].report_type), null == v || v(a);
        },
        H = () => {
            var e, n;
            if (I.length < 1) return;
            let l = [...I],
                r = l.pop(),
                a = null != (e = null == r ? void 0 : r.nodeRef) ? e : O;
            if (t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(x.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: y[a].report_type,
                    current_node: y[N].id,
                    next_node: y[a].id,
                });
            }
            P(null == r || null == (n = r.multiSelect) ? void 0 : n.state),
                E(null == r ? void 0 : r.textInput),
                w(a),
                D(l),
                null == h || h("..");
        },
        V = r.useMemo(() => {
            let e = [],
                t = [];
            for (let a in y) {
                var n, l, r;
                let i = y[a];
                if (i.id !== S && i.id !== T && i.id !== O) {
                    if (i.key.endsWith("_SUBMIT") || (null == (n = i.button) ? void 0 : n.type) === "submit") {
                        t.push(i);
                        continue;
                    }
                    if ((e.push(i), (null == (l = i.button) ? void 0 : l.type) === "next")) {
                        let t = null == (r = i.button) ? void 0 : r.target,
                            n = e.indexOf(y[t]);
                        -1 !== n && (e.splice(n, 1), e.push(y[t]));
                    }
                }
            }
            return [y[O], ...e, ...t, y[S], y[T]];
        }, [y, O, T, S]);
    return (0, l.jsx)(i.EOs, {
        "data-migration-pending": !0,
        transitionState: f.transitionState,
        "aria-labelledby": A,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(i.tN_, {
            width: 440,
            activeSlide: N,
            centered: !1,
            children: V.map((e) =>
                (0, l.jsx)(
                    i.q7S,
                    {
                        id: e.id,
                        children: (0, l.jsx)("div", {
                            className: g.B,
                            children: (0, l.jsx)(p.A, {
                                node: e,
                                reportType: t,
                                reportSubType: L,
                                history: I,
                                onModalClose: f.onClose,
                                onSelectChild: U,
                                onNavigateBack: H,
                                multiSelect: k,
                                textInput: C,
                                successNodeId: S,
                                failNodeId: T,
                                onSubmit: B,
                                reportId: M,
                                nodeMap: y,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
