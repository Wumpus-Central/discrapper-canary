n.d(t, { Z: () => v }), n(415506);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(646288),
    u = n(388032),
    d = n(624264);
function f(e, t, n) {
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
var p = (function (e) {
    return (
        (e[(e.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (e[(e.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (e[(e.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (e[(e.LISTING = 4)] = "LISTING"),
        (e[(e.EMBED = 5)] = "EMBED"),
        e
    );
})(p || {});
let _ = (e) => {
        let { className: t } = e;
        return (0, i.jsxs)("div", {
            className: s()(d.row, t),
            children: [
                (0, i.jsx)(l.vqy, {
                    size: "md",
                    color: "currentColor",
                    className: d.icon,
                }),
                u.intl.string(u.t["7eicAO"]),
            ],
        });
    },
    m = (e) => {
        let { sku: t, className: n } = e;
        return (0, i.jsxs)("div", {
            className: s()(d.row, n),
            children: [
                (0, i.jsx)(l.SrA, {
                    size: "md",
                    color: "currentColor",
                    className: d.icon,
                }),
                (0, c.Z)(t),
            ],
        });
    },
    h = (e) => {
        let { sku: t, className: n } = e;
        return (0, i.jsx)("div", {
            className: s()(d.salePercentage, n),
            children: t.getDisplaySalePercentage(),
        });
    },
    g = (e) => {
        let { sku: t, className: n } = e;
        return (0, i.jsx)("div", {
            className: s()(d.originalAmount, n),
            children: (0, c.Z)(t, !1),
        });
    },
    E = (e) => {
        let { sku: t, className: n } = e;
        return (0, i.jsx)("div", {
            className: n,
            children: (0, c.Z)(t),
        });
    },
    b = (e) => {
        let { sku: t, className: n } = e;
        return (0, i.jsxs)("div", {
            className: s()(d.row, n),
            children: [(0, i.jsx)(h, { sku: t }), (0, i.jsx)(g, { sku: t }), (0, i.jsx)(E, { sku: t })],
        });
    },
    y = (e) => {
        let { className: t } = e;
        return (0, i.jsx)("div", {
            className: t,
            children: u.intl.string(u.t.QQsaCc),
        });
    };
class O extends (r = a.PureComponent) {
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
                return (0, i.jsx)(y, { className: s()(t, n) });
            case 1:
                return (0, i.jsx)(_, { className: s()(t, n) });
            case 3:
                return (0, i.jsx)(m, {
                    sku: r,
                    className: s()(t, n),
                });
            case 2:
                return (0, i.jsx)(b, {
                    sku: r,
                    className: s()(t, n),
                });
            default:
                return (0, i.jsx)(E, {
                    className: s()(t, n),
                    sku: r,
                });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, i.jsx)(y, { className: t });
            case 3:
                return (0, i.jsx)(m, {
                    sku: n,
                    className: s()(d.directoryHeroPricePremium, t),
                });
            case 2:
                return (0, i.jsx)(b, {
                    sku: n,
                    className: s()(d.directoryHeroPrice, t),
                });
            default:
                return (0, i.jsx)(E, {
                    className: s()(d.directoryHeroPrice, t),
                    sku: n,
                });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: r } = this.props;
        switch (e) {
            case 5:
                t = (0, i.jsx)(y, {});
                break;
            case 2:
                t = (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: d.row,
                            children: [(0, i.jsx)(E, { sku: r }), (0, i.jsx)(h, { sku: r })],
                        }),
                        (0, i.jsx)(g, { sku: r }),
                    ],
                });
                break;
            default:
                t = (0, i.jsx)(E, { sku: r });
        }
        return (0, i.jsx)("div", {
            className: s()(d.listingPrice, n),
            children: t,
        });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, d.directoryTilePrice);
            case 3:
                return this.renderGeneric(e, d.directorySearchPrice);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, d.embedPrice);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
f(O, "Types", p);
let v = O;
