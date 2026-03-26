s.r(e), s.d(e, { default: () => N });
var i = s(627968),
    n = s(64700),
    r = s(873263),
    o = s(311907),
    a = s(255363),
    d = s(384904),
    l = s(820284),
    A = s(490415),
    c = s(441271),
    _ = s(915967),
    p = s(775121),
    I = s(268218),
    O = s(670735),
    h = s(976860),
    u = s(210714),
    E = s(75587),
    T = s(652215),
    P = s(985018),
    j = s(764083);
let L = (0, I.Fe)({
    createPromise: () => Promise.all([s.e("19846"), s.e("41031")]).then(s.bind(s, 554238)),
    webpackId: 554238,
});
o.Ay.initialize();
class C extends n.PureComponent {
    stopListeningToHistory;
    componentDidMount() {
        (0, a.N)(this.props.location),
            (this.stopListeningToHistory = (0, h.JK)().listen((t) => {
                t.pathname.startsWith(T.BVt.APPLICATION_STORE) && (0, a.N)(t);
            })),
            this.props.isAuthenticated && (0, d.$o)(),
            p.A.disable(),
            p.A.setLayout(c.E),
            p.A.enable(),
            (0, u.d)("application_store");
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(),
            p.A.disable(),
            p.A.setLayout(_.zR),
            p.A.enable();
    }
    renderContent = () =>
        (0, i.jsxs)(r.dO, {
            children: [
                (0, i.jsx)(r.qh, {
                    path: T.BVt.APPLICATION_STORE,
                    exact: !0,
                    render: () =>
                        (0, i.jsx)(l.A, { page: T.liQ.STORE_DIRECTORY_HOME, root: !0, children: (0, i.jsx)(E.A, {}) }),
                }),
                (0, i.jsx)(r.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, i.jsx)(r.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, i.jsx)(r.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, i.jsx)(r.rd, { from: T.BVt.APPLICATION_STORE_LISTING_SKU(":skuId"), to: T.BVt.APPLICATION_STORE }),
                (0, i.jsx)(r.rd, { to: T.BVt.APP }),
            ],
        });
    renderCustomErrorMessage() {
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("p", { children: P.intl.string(P.t["1PZdF7"]) }),
                (0, i.jsx)("p", { children: P.intl.string(P.t.CvQlAH) }),
            ],
        });
    }
    render() {
        let { isAuthenticated: t, location: e } = this.props,
            s = t
                ? (0, i.jsx)("div", { className: j.gE, children: this.renderContent() })
                : (0, i.jsx)(L, { className: j.gE, location: e, render: this.renderContent });
        return (0, i.jsx)(O.A, { renderCustomMessage: this.renderCustomErrorMessage, children: s });
    }
}
let N = (0, A.A)(function (t) {
    let e = (0, r.zy)();
    return (0, i.jsx)(C, { ...t, location: e });
});
