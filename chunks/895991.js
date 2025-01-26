n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(570140),
    c = n(150063),
    d = n(274616),
    u = n(827837),
    h = n(410575),
    m = n(3570),
    p = n(237919),
    g = n(957657),
    f = n(665307),
    _ = n(530151),
    E = n(981631),
    I = n(186901),
    C = n(277900);
function v(e, t, n) {
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
class N extends r.PureComponent {
    componentDidMount() {
        c.Y(E.Z5c.APPLICATION_LIBRARY), (0, m.T)(I.jE.LIBRARY), o.Z.wait(() => (0, d.o)()), (0, u.N)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    renderToolbar() {
        return (0, i.jsx)(p.Z, {});
    }
    render() {
        let { includeUpdatesInScroller: e } = this.state,
            t = (0, i.jsx)('div', {
                children: (0, i.jsx)(h.Z, {
                    section: E.jXE.LIBRARY_INSTALL_MODULE,
                    children: (0, i.jsx)(_.Z, { onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange })
                })
            });
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(g.Z, {
                    currentRoute: E.Z5c.APPLICATION_LIBRARY,
                    renderToolbar: this.renderToolbar
                }),
                e ? null : t,
                (0, i.jsxs)(s.AdvancedScrollerAuto, {
                    className: a()(C.container, C.scroller),
                    ref: this._scrollerRef,
                    children: [
                        e ? t : null,
                        (0, i.jsx)(h.Z, {
                            section: E.jXE.LIBRARY_APPLICATION_LIST,
                            children: (0, i.jsx)(f.Z, {
                                stickyHeader: !e,
                                scrollToRow: this.scrollToRow
                            })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, '_scrollerRef', r.createRef()),
            v(this, '_scrollToOnMount', void 0),
            v(this, '_scrollToPadding', 0),
            v(this, 'state', { includeUpdatesInScroller: !1 }),
            v(this, 'handleHeightTallerThanHalfViewportChange', (e) => {
                this.setState({ includeUpdatesInScroller: e });
            }),
            v(this, 'scrollToRow', (e, t) => {
                let n = this._scrollerRef.current;
                null != n
                    ? (e.focus(),
                      n.scrollIntoViewRect({
                          start: t,
                          end: t
                      }),
                      (this._scrollToOnMount = null))
                    : ((this._scrollToOnMount = e), (this._scrollToPadding = t));
            });
    }
}
