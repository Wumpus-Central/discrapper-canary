s.r(e), s.d(e, { default: () => N });
var n = s(627968),
    r = s(64700),
    i = s(873263),
    o = s(311907),
    a = s(255363),
    l = s(820284),
    d = s(490415),
    A = s(441271),
    c = s(915967),
    u = s(775121),
    _ = s(323082),
    h = s(268218),
    p = s(670735),
    O = s(976860),
    E = s(210714),
    I = s(75587),
    T = s(652215),
    j = s(985018),
    P = s(212515);
let C = (0, h.Fe)({
    createPromise: () => Promise.all([s.e("19846"), s.e("41031")]).then(s.bind(s, 554238)),
    webpackId: 554238,
});
o.Ay.initialize();
class L extends r.PureComponent {
    stopListeningToHistory;
    componentDidMount() {
        (0, a.N)(this.props.location),
            (this.stopListeningToHistory = (0, O.JK)().listen((t) => {
                t.pathname.startsWith(T.BVt.APPLICATION_STORE) && (0, a.N)(t);
            })),
            this.props.isAuthenticated && (0, _.$o)(),
            u.A.disable(),
            u.A.setLayout(A.E),
            u.A.enable(),
            (0, E.d)("application_store");
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(),
            u.A.disable(),
            u.A.setLayout(c.zR),
            u.A.enable();
    }
    renderContent = () =>
        (0, n.jsxs)(i.dO, {
            children: [
                (0, n.jsx)(i.qh, {
                    path: T.BVt.APPLICATION_STORE,
                    exact: !0,
                    render: () =>
                        (0, n.jsx)(l.A, { page: T.liQ.STORE_DIRECTORY_HOME, root: !0, children: (0, n.jsx)(I.A, {}) }),
                }),
                (0, n.jsx)(i.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(i.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(i.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(i.rd, { from: T.BVt.APPLICATION_STORE_LISTING_SKU(":skuId"), to: T.BVt.APPLICATION_STORE }),
                (0, n.jsx)(i.rd, { to: T.BVt.APP }),
            ],
        });
    renderCustomErrorMessage() {
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)("p", { children: j.intl.string(j.t["1PZdF7"]) }),
                (0, n.jsx)("p", { children: j.intl.string(j.t.CvQlAH) }),
            ],
        });
    }
    render() {
        let { isAuthenticated: t, location: e } = this.props,
            s = t
                ? (0, n.jsx)("div", { className: P.gE, children: this.renderContent() })
                : (0, n.jsx)(C, { className: P.gE, location: e, render: this.renderContent });
        return (0, n.jsx)(p.A, { renderCustomMessage: this.renderCustomErrorMessage, children: s });
    }
}
let N = (0, d.A)(function (t) {
    let e = (0, i.zy)();
    return (0, n.jsx)(L, { ...t, location: e });
});
