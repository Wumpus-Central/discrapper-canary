n(411104);
var i,
    r,
    l,
    a,
    o,
    s,
    c,
    u,
    d = n(200651),
    m = n(192379),
    h = n(120356),
    f = n.n(h),
    p = n(481060),
    _ = n(646288),
    g = n(388032),
    E = n(16272);
((a = i || (i = {}))[(a.DIRECTORY_HERO = 1)] = 'DIRECTORY_HERO'), (a[(a.DIRECTORY_TILE = 2)] = 'DIRECTORY_TILE'), (a[(a.DIRECTORY_SEARCH = 3)] = 'DIRECTORY_SEARCH'), (a[(a.LISTING = 4)] = 'LISTING'), (a[(a.EMBED = 5)] = 'EMBED'), ((o = r || (r = {}))[(o.IN_LIBRARY = 1)] = 'IN_LIBRARY'), (o[(o.ON_SALE = 2)] = 'ON_SALE'), (o[(o.PREMIUM = 3)] = 'PREMIUM'), (o[(o.DEFAULT = 4)] = 'DEFAULT'), (o[(o.ENTITLEMENT_BRANCH = 5)] = 'ENTITLEMENT_BRANCH');
let C = (e) => {
        let { className: t } = e;
        return (0, d.jsxs)('div', {
            className: f()(E.row, t),
            children: [
                (0, d.jsx)(p.InventoryIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.icon
                }),
                g.intl.string(g.t['7eicAA'])
            ]
        });
    },
    I = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsxs)('div', {
            className: f()(E.row, n),
            children: [
                (0, d.jsx)(p.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.icon
                }),
                (0, _.Z)(t)
            ]
        });
    },
    x = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: f()(E.salePercentage, n),
            children: t.getDisplaySalePercentage()
        });
    },
    N = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: f()(E.originalAmount, n),
            children: (0, _.Z)(t, !1)
        });
    },
    v = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: n,
            children: (0, _.Z)(t)
        });
    },
    T = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsxs)('div', {
            className: f()(E.row, n),
            children: [(0, d.jsx)(x, { sku: t }), (0, d.jsx)(N, { sku: t }), (0, d.jsx)(v, { sku: t })]
        });
    },
    S = (e) => {
        let { className: t } = e;
        return (0, d.jsx)('div', {
            className: t,
            children: g.intl.string(g.t.QQsaCQ)
        });
    };
class A extends (l = m.PureComponent) {
    getState() {
        let { inLibrary: e, sku: t, hasEntitlementBranch: n } = this.props;
        if (n) return 5;
        if (e) return 1;
        if (!t.available) return 4;
        else if (t.premium) return 3;
        else if (t.isOnSale) return 2;
        else if (null != t.getPrice()) return 4;
        return null;
    }
    renderGeneric(e, t) {
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                return (0, d.jsx)(S, { className: f()(t, n) });
            case 1:
                return (0, d.jsx)(C, { className: f()(t, n) });
            case 3:
                return (0, d.jsx)(I, {
                    sku: i,
                    className: f()(t, n)
                });
            case 2:
                return (0, d.jsx)(T, {
                    sku: i,
                    className: f()(t, n)
                });
            default:
                return (0, d.jsx)(v, {
                    className: f()(t, n),
                    sku: i
                });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, d.jsx)(S, { className: f()(t) });
            case 3:
                return (0, d.jsx)(I, {
                    sku: n,
                    className: f()(E.directoryHeroPricePremium, t)
                });
            case 2:
                return (0, d.jsx)(T, {
                    sku: n,
                    className: f()(E.directoryHeroPrice, t)
                });
            default:
                return (0, d.jsx)(v, {
                    className: f()(E.directoryHeroPrice, t),
                    sku: n
                });
        }
    }
    renderListing(e) {
        let t;
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, d.jsx)(S, {});
                break;
            case 2:
                t = (0, d.jsxs)(m.Fragment, {
                    children: [
                        (0, d.jsxs)('div', {
                            className: E.row,
                            children: [(0, d.jsx)(v, { sku: i }), (0, d.jsx)(x, { sku: i })]
                        }),
                        (0, d.jsx)(N, { sku: i })
                    ]
                });
                break;
            default:
                t = (0, d.jsx)(v, { sku: i });
        }
        return (0, d.jsx)('div', {
            className: f()(E.listingPrice, n),
            children: t
        });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, E.directoryTilePrice);
            case 3:
                return this.renderGeneric(e, E.directorySearchPrice);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, E.embedPrice);
            default:
                throw Error('Invalid Price Unit Type');
        }
    }
}
(s = A),
    (c = 'Types'),
    (u = i),
    c in s
        ? Object.defineProperty(s, c, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[c] = u),
    (t.Z = A);
