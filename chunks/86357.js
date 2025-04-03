n.d(t, { Z: () => O }), n(411104);
var r,
    i,
    a,
    l = n(200651),
    o = n(192379),
    s = n(120356),
    c = n.n(s),
    u = n(481060),
    d = n(646288),
    p = n(388032),
    m = n(823209),
    f = (((i = f || {})[(i.DIRECTORY_HERO = 1)] = 'DIRECTORY_HERO'), (i[(i.DIRECTORY_TILE = 2)] = 'DIRECTORY_TILE'), (i[(i.DIRECTORY_SEARCH = 3)] = 'DIRECTORY_SEARCH'), (i[(i.LISTING = 4)] = 'LISTING'), (i[(i.EMBED = 5)] = 'EMBED'), i);
let h = (e) => {
        let { className: t } = e;
        return (0, l.jsxs)('div', {
            className: c()(m.row, t),
            children: [
                (0, l.jsx)(u.vqy, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.icon
                }),
                p.NW.string(p.t['7eicAA'])
            ]
        });
    },
    g = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsxs)('div', {
            className: c()(m.row, n),
            children: [
                (0, l.jsx)(u.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.icon
                }),
                (0, d.Z)(t)
            ]
        });
    },
    _ = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)('div', {
            className: c()(m.salePercentage, n),
            children: t.getDisplaySalePercentage()
        });
    },
    b = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)('div', {
            className: c()(m.originalAmount, n),
            children: (0, d.Z)(t, !1)
        });
    },
    x = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)('div', {
            className: n,
            children: (0, d.Z)(t)
        });
    },
    y = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsxs)('div', {
            className: c()(m.row, n),
            children: [(0, l.jsx)(_, { sku: t }), (0, l.jsx)(b, { sku: t }), (0, l.jsx)(x, { sku: t })]
        });
    },
    E = (e) => {
        let { className: t } = e;
        return (0, l.jsx)('div', {
            className: t,
            children: p.NW.string(p.t.QQsaCQ)
        });
    };
class v extends (r = o.PureComponent) {
    getState() {
        let { inLibrary: e, sku: t, hasEntitlementBranch: n } = this.props;
        if (n) return 5;
        if (e) return 1;
        if (!t.available) return 4;
        if (t.premium) return 3;
        if (t.isOnSale) return 2;
        else if (null != t.getPrice()) return 4;
        return null;
    }
    renderGeneric(e, t) {
        let { className: n, sku: r } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(E, { className: c()(t, n) });
            case 1:
                return (0, l.jsx)(h, { className: c()(t, n) });
            case 3:
                return (0, l.jsx)(g, {
                    sku: r,
                    className: c()(t, n)
                });
            case 2:
                return (0, l.jsx)(y, {
                    sku: r,
                    className: c()(t, n)
                });
            default:
                return (0, l.jsx)(x, {
                    className: c()(t, n),
                    sku: r
                });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(E, { className: t });
            case 3:
                return (0, l.jsx)(g, {
                    sku: n,
                    className: c()(m.directoryHeroPricePremium, t)
                });
            case 2:
                return (0, l.jsx)(y, {
                    sku: n,
                    className: c()(m.directoryHeroPrice, t)
                });
            default:
                return (0, l.jsx)(x, {
                    className: c()(m.directoryHeroPrice, t),
                    sku: n
                });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: r } = this.props;
        switch (e) {
            case 5:
                t = (0, l.jsx)(E, {});
                break;
            case 2:
                t = (0, l.jsxs)(o.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: m.row,
                            children: [(0, l.jsx)(x, { sku: r }), (0, l.jsx)(_, { sku: r })]
                        }),
                        (0, l.jsx)(b, { sku: r })
                    ]
                });
                break;
            default:
                t = (0, l.jsx)(x, { sku: r });
        }
        return (0, l.jsx)('div', {
            className: c()(m.listingPrice, n),
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
                return this.renderGeneric(e, m.directoryTilePrice);
            case 3:
                return this.renderGeneric(e, m.directorySearchPrice);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, m.embedPrice);
            default:
                throw Error('Invalid Price Unit Type');
        }
    }
}
(a = 'Types') in v
    ? Object.defineProperty(v, a, {
          value: f,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (v[a] = f);
let O = v;
