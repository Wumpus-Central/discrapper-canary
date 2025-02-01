n.d(t, { Z: () => C }), n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(86357),
    c = n(54936),
    d = n(687755),
    u = n(351465),
    m = n(669021),
    h = n(73346),
    _ = n(568836),
    p = n(345898),
    g = n(981631),
    f = n(895402);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class E extends (i = a.PureComponent) {
    render() {
        let { sku: e, storeListing: t, isHorizontal: n, className: i, renderCustomTagline: a, renderCustomTitle: r, renderCustomMedia: s, isEmbed: o } = this.props,
            c = o ? _.$G : p.Z;
        return (0, l.jsx)(c, {
            className: i,
            renderMedia: null != s ? s : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'renderActions', () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: a } = this.props,
                    r = (a || !t.requiresPayment) && !e;
                return null != n
                    ? n()
                    : (0, l.jsxs)('div', {
                          className: f.priceOs,
                          children: [
                              (0, l.jsx)(o.Z, {
                                  type: o.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: r && i ? f.tilePriceWithVisibleBuyButton : f.tilePrice
                              }),
                              (0, l.jsx)(c.n, {
                                  systems: [g.TaA.WINDOWS],
                                  className: f.platform
                              }),
                              r ? (0, l.jsx)('div', { children: 'deprecated!' }) : null
                          ]
                      });
            }),
            x(this, 'renderMedia', () => {
                let { playing: e, muted: t, showMediaPlaceholder: n, onToggleMute: i, sku: r, isHorizontal: o, storeListing: c } = this.props;
                return (0, l.jsxs)(a.Fragment, {
                    children: [
                        (0, l.jsx)(m.Z, {
                            className: s()(f.splashContainer, { [f.splashContainerHorizontal]: o }),
                            video: null != c.previewVideo ? (0, h._W)(r.applicationId, c.previewVideo) : void 0,
                            image: null != c.thumbnail ? (0, h._W)(r.applicationId, c.thumbnail, 600) : null,
                            title: r.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: i,
                            splashClassName: f.splashVideo,
                            splashPlaceholderClassName: f.splashPlaceholder
                        }),
                        r.exclusive ? (0, l.jsx)(u.Z, { className: s()(f.exclusiveRegular, { [f.exclusivePlaying]: e }) }) : r.isTheGameAwardsWinner ? (0, l.jsx)(d.Z, { className: s()(f.exclusiveRegular, { [f.exclusivePlaying]: e }) }) : null
                    ]
                });
            });
    }
}
x(E, 'defaultProps', {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
});
let C = E;
