n.r(t), n.d(t, { default: () => O, getPageSize: () => y });
var i = n(627968),
    r = n(64700),
    l = n(492462),
    a = n(873263),
    s = n(311907),
    o = n(255363),
    d = n(384904),
    c = n(820284),
    u = n(490415),
    A = n(456412),
    h = n(441271),
    _ = n(915967),
    m = n(775121),
    p = n(268218),
    g = n(670735),
    E = n(976860),
    I = n(210714),
    f = n(75587),
    C = n(196661),
    T = n(590858),
    N = n(652215),
    S = n(985018),
    x = n(881640);
let v = (0, p.Fe)({
    createPromise: () => Promise.all([n.e("19846"), n.e("41031")]).then(n.bind(n, 554238)),
    webpackId: 554238,
});
function y(e) {
    return e < 1e3 ? T.q.SMALL : T.q.LARGE;
}
s.Ay.initialize();
class b extends r.PureComponent {
    stopListeningToHistory;
    componentDidMount() {
        (0, o.N)(this.props.location),
            (this.stopListeningToHistory = (0, E.JK)().listen((e) => {
                e.pathname.startsWith(N.BVt.APPLICATION_STORE) && (0, o.N)(e);
            })),
            this.props.isAuthenticated && (0, d.$o)(),
            m.A.disable(),
            m.A.setLayout(h.E),
            m.A.enable(),
            (0, I.d)("application_store");
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(),
            m.A.disable(),
            m.A.setLayout(_.zR),
            m.A.enable();
    }
    renderStoreListing = (e) => {
        let {
                match: {
                    params: { skuId: t, applicationId: n, slug: r },
                },
                location: a,
            } = e,
            { width: s } = this.props,
            o = (0, l.parse)(a.search);
        return (0, i.jsx)(c.A, {
            page: N.liQ.STORE_LISTING,
            root: !0,
            children: (0, i.jsx)(C.A, {
                skuId: t,
                applicationId: n,
                slug: r,
                location: a,
                storeListingId: o.store_listing_id,
                pageSize: y(s),
            }),
        });
    };
    renderContent = () =>
        (0, i.jsxs)(a.dO, {
            children: [
                (0, i.jsx)(a.qh, {
                    path: N.BVt.APPLICATION_STORE,
                    exact: !0,
                    render: () =>
                        (0, i.jsx)(c.A, { page: N.liQ.STORE_DIRECTORY_HOME, root: !0, children: (0, i.jsx)(f.A, {}) }),
                }),
                (0, i.jsx)(a.qh, {
                    path: N.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                    render: this.renderStoreListing,
                }),
                (0, i.jsx)(a.qh, {
                    path: N.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                    render: this.renderStoreListing,
                }),
                (0, i.jsx)(a.qh, {
                    path: N.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                    render: this.renderStoreListing,
                }),
                (0, i.jsx)(a.qh, {
                    path: N.BVt.APPLICATION_STORE_LISTING_SKU(":skuId"),
                    render: this.renderStoreListing,
                }),
                (0, i.jsx)(a.rd, { to: N.BVt.APP }),
            ],
        });
    renderCustomErrorMessage() {
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("p", { children: S.intl.string(S.t["1PZdF7"]) }),
                (0, i.jsx)("p", { children: S.intl.string(S.t.CvQlAH) }),
            ],
        });
    }
    render() {
        let { isAuthenticated: e, location: t } = this.props,
            n = e
                ? (0, i.jsx)("div", { className: x.gE, children: this.renderContent() })
                : (0, i.jsx)(v, { className: x.gE, location: t, render: this.renderContent });
        return (0, i.jsx)(g.A, { renderCustomMessage: this.renderCustomErrorMessage, children: n });
    }
}
let O = (0, u.A)(
    (0, A.A)(function (e) {
        let t = (0, a.zy)();
        return (0, i.jsx)(b, { ...e, location: t });
    }),
);
