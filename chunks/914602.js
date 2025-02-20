n.d(t, { Z: () => y }), n(47120);
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(86357),
    c = n(54936),
    d = n(687755),
    u = n(351465),
    p = n(669021),
    m = n(73346),
    f = n(568836),
    h = n(345898),
    g = n(981631),
    _ = n(840154);
function b(e, t, n) {
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
class v extends (r = a.PureComponent) {
    render() {
        let { sku: e, storeListing: t, isHorizontal: n, className: r, renderCustomTagline: a, renderCustomTitle: o, renderCustomMedia: l, isEmbed: s } = this.props,
            c = s ? f.$G : h.Z;
        return (0, i.jsx)(c, {
            className: r,
            renderMedia: null != l ? l : this.renderMedia,
            renderTitle: null != o ? o : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'renderActions', () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: r, showBuyInline: a } = this.props,
                    o = (a || !t.requiresPayment) && !e;
                return null != n
                    ? n()
                    : (0, i.jsxs)('div', {
                          className: _.priceOs,
                          children: [
                              (0, i.jsx)(s.Z, {
                                  type: s.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: o && r ? _.tilePriceWithVisibleBuyButton : _.tilePrice
                              }),
                              (0, i.jsx)(c.n, {
                                  systems: [g.TaA.WINDOWS],
                                  className: _.platform
                              }),
                              o ? (0, i.jsx)('div', { children: 'deprecated!' }) : null
                          ]
                      });
            }),
            b(this, 'renderMedia', () => {
                let { playing: e, muted: t, showMediaPlaceholder: n, onToggleMute: r, sku: o, isHorizontal: s, storeListing: c } = this.props;
                return (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsx)(p.Z, {
                            className: l()(_.splashContainer, { [_.splashContainerHorizontal]: s }),
                            video: null != c.previewVideo ? (0, m._W)(o.applicationId, c.previewVideo) : void 0,
                            image: null != c.thumbnail ? (0, m._W)(o.applicationId, c.thumbnail, 600) : null,
                            title: o.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: r,
                            splashClassName: _.splashVideo,
                            splashPlaceholderClassName: _.splashPlaceholder
                        }),
                        o.exclusive ? (0, i.jsx)(u.Z, { className: l()(_.exclusiveRegular, { [_.exclusivePlaying]: e }) }) : o.isTheGameAwardsWinner ? (0, i.jsx)(d.Z, { className: l()(_.exclusiveRegular, { [_.exclusivePlaying]: e }) }) : null
                    ]
                });
            });
    }
}
b(v, 'defaultProps', {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
});
let y = v;
