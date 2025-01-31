n.d(t, { Z: () => N }), n(411104);
var i,
    l,
    a,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(481060),
    u = n(646288),
    m = n(388032),
    h = n(16272),
    _ = (((l = _ || {})[(l.DIRECTORY_HERO = 1)] = 'DIRECTORY_HERO'), (l[(l.DIRECTORY_TILE = 2)] = 'DIRECTORY_TILE'), (l[(l.DIRECTORY_SEARCH = 3)] = 'DIRECTORY_SEARCH'), (l[(l.LISTING = 4)] = 'LISTING'), (l[(l.EMBED = 5)] = 'EMBED'), l);
let p = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)('div', {
            className: c()(h.row, t),
            children: [
                (0, r.jsx)(d.vqy, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.icon
                }),
                m.intl.string(m.t['7eicAA'])
            ]
        });
    },
    g = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsxs)('div', {
            className: c()(h.row, n),
            children: [
                (0, r.jsx)(d.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.icon
                }),
                (0, u.Z)(t)
            ]
        });
    },
    f = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: c()(h.salePercentage, n),
            children: t.getDisplaySalePercentage()
        });
    },
    x = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: c()(h.originalAmount, n),
            children: (0, u.Z)(t, !1)
        });
    },
    E = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: n,
            children: (0, u.Z)(t)
        });
    },
    C = (e) => {
        let { sku: t, className: n } = e;
        return (0, r.jsxs)('div', {
            className: c()(h.row, n),
            children: [(0, r.jsx)(f, { sku: t }), (0, r.jsx)(x, { sku: t }), (0, r.jsx)(E, { sku: t })]
        });
    },
    v = (e) => {
        let { className: t } = e;
        return (0, r.jsx)('div', {
            className: t,
            children: m.intl.string(m.t.QQsaCQ)
        });
    };
class I extends (i = s.PureComponent) {
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
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                return (0, r.jsx)(v, { className: c()(t, n) });
            case 1:
                return (0, r.jsx)(p, { className: c()(t, n) });
            case 3:
                return (0, r.jsx)(g, {
                    sku: i,
                    className: c()(t, n)
                });
            case 2:
                return (0, r.jsx)(C, {
                    sku: i,
                    className: c()(t, n)
                });
            default:
                return (0, r.jsx)(E, {
                    className: c()(t, n),
                    sku: i
                });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, r.jsx)(v, { className: c()(t) });
            case 3:
                return (0, r.jsx)(g, {
                    sku: n,
                    className: c()(h.directoryHeroPricePremium, t)
                });
            case 2:
                return (0, r.jsx)(C, {
                    sku: n,
                    className: c()(h.directoryHeroPrice, t)
                });
            default:
                return (0, r.jsx)(E, {
                    className: c()(h.directoryHeroPrice, t),
                    sku: n
                });
        }
    }
    renderListing(e) {
        let t;
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, r.jsx)(v, {});
                break;
            case 2:
                t = (0, r.jsxs)(s.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.row,
                            children: [(0, r.jsx)(E, { sku: i }), (0, r.jsx)(f, { sku: i })]
                        }),
                        (0, r.jsx)(x, { sku: i })
                    ]
                });
                break;
            default:
                t = (0, r.jsx)(E, { sku: i });
        }
        return (0, r.jsx)('div', {
            className: c()(h.listingPrice, n),
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
                return this.renderGeneric(e, h.directoryTilePrice);
            case 3:
                return this.renderGeneric(e, h.directorySearchPrice);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, h.embedPrice);
            default:
                throw Error('Invalid Price Unit Type');
        }
    }
}
(a = 'Types') in I
    ? Object.defineProperty(I, a, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (I[a] = _);
let N = I;
