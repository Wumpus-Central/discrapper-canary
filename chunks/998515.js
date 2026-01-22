n.r(t),
    n.d(t, {
        default: () => x,
        getPageSize: () => T,
    }),
    n(896048),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(492462),
    a = n(960488),
    s = n(311907),
    o = n(255363),
    c = n(384904),
    u = n(820284),
    d = n(490415),
    p = n(456412),
    f = n(441271),
    h = n(915967),
    A = n(775121),
    g = n(268218),
    m = n(670735),
    b = n(976860),
    _ = n(210714),
    E = n(75587),
    O = n(196661),
    y = n(590858),
    I = n(652215),
    v = n(985018),
    S = n(58682);

function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let N = (0, g.Fe)({
    createPromise: () => Promise.all([n.e("19846"), n.e("41031")]).then(n.bind(n, 554238)),
    webpackId: 554238,
});

function T(e) {
    return e < 1e3 ? y.q.SMALL : y.q.LARGE;
}
s.Ay.initialize();
class j extends i.PureComponent {
    componentDidMount() {
        (0, o.N)(this.props.location),
            (this.stopListeningToHistory = (0, b.JK)().listen((e) => {
                e.pathname.startsWith(I.BVt.APPLICATION_STORE) && (0, o.N)(e);
            })),
            this.props.isAuthenticated && (0, c.$o)(),
            A.A.disable(),
            A.A.setLayout(f.E),
            A.A.enable(),
            (0, _.d)("application_store");
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(),
            A.A.disable(),
            A.A.setLayout(h.zR),
            A.A.enable();
    }
    renderCustomErrorMessage() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("p", {
                    children: v.intl.string(v.t["1PZdF7"]),
                }),
                (0, r.jsx)("p", {
                    children: v.intl.string(v.t.CvQlAH),
                }),
            ],
        });
    }
    render() {
        let { isAuthenticated: e, location: t } = this.props,
            n = e
                ? (0, r.jsx)("div", {
                      className: S.gE,
                      children: this.renderContent(),
                  })
                : (0, r.jsx)(N, {
                      className: S.gE,
                      location: t,
                      render: this.renderContent,
                  });
        return (0, r.jsx)(m.A, {
            renderCustomMessage: this.renderCustomErrorMessage,
            children: n,
        });
    }
    constructor(...e) {
        super(...e),
            C(this, "stopListeningToHistory", void 0),
            C(this, "renderStoreListing", (e) => {
                let {
                        match: {
                            params: { skuId: t, applicationId: n, slug: i },
                        },
                        location: a,
                    } = e,
                    { width: s } = this.props,
                    o = (0, l.parse)(a.search);
                return (0, r.jsx)(u.A, {
                    page: I.liQ.STORE_LISTING,
                    root: !0,
                    children: (0, r.jsx)(O.A, {
                        skuId: t,
                        applicationId: n,
                        slug: i,
                        location: a,
                        storeListingId: o.store_listing_id,
                        pageSize: T(s),
                    }),
                });
            }),
            C(this, "renderContent", () =>
                (0, r.jsxs)(a.dO, {
                    children: [
                        (0, r.jsx)(a.qh, {
                            path: I.BVt.APPLICATION_STORE,
                            exact: !0,
                            render: () =>
                                (0, r.jsx)(u.A, {
                                    page: I.liQ.STORE_DIRECTORY_HOME,
                                    root: !0,
                                    children: (0, r.jsx)(E.A, {}),
                                }),
                        }),
                        (0, r.jsx)(a.qh, {
                            path: I.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                            render: this.renderStoreListing,
                        }),
                        (0, r.jsx)(a.qh, {
                            path: I.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                            render: this.renderStoreListing,
                        }),
                        (0, r.jsx)(a.qh, {
                            path: I.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                            render: this.renderStoreListing,
                        }),
                        (0, r.jsx)(a.qh, {
                            path: I.BVt.APPLICATION_STORE_LISTING_SKU(":skuId"),
                            render: this.renderStoreListing,
                        }),
                        (0, r.jsx)(a.rd, {
                            to: I.BVt.APP,
                        }),
                    ],
                }),
            );
    }
}
let x = (0, a.y)((0, d.A)((0, p.A)(j)));
