n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(570140),
    c = n(150063),
    u = n(274616),
    d = n(827837),
    p = n(410575),
    h = n(3570),
    f = n(237919),
    g = n(957657),
    m = n(665307),
    b = n(530151),
    _ = n(981631),
    E = n(186901),
    O = n(620282);
function N(e, t, n) {
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
class y extends i.PureComponent {
    componentDidMount() {
        c.Y(_.Z5c.APPLICATION_LIBRARY), (0, h.T)(E.jE.LIBRARY), s.Z.wait(() => (0, u.o)()), (0, d.N)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    renderToolbar() {
        return (0, r.jsx)(f.Z, {});
    }
    render() {
        let { includeUpdatesInScroller: e } = this.state,
            t = (0, r.jsx)('div', {
                children: (0, r.jsx)(p.Z, {
                    section: _.jXE.LIBRARY_INSTALL_MODULE,
                    children: (0, r.jsx)(b.Z, { onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange })
                })
            });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(g.Z, {
                    currentRoute: _.Z5c.APPLICATION_LIBRARY,
                    renderToolbar: this.renderToolbar
                }),
                e ? null : t,
                (0, r.jsxs)(o.yWw, {
                    className: a()(O.container, O.scroller),
                    ref: this._scrollerRef,
                    children: [
                        e ? t : null,
                        (0, r.jsx)(p.Z, {
                            section: _.jXE.LIBRARY_APPLICATION_LIST,
                            children: (0, r.jsx)(m.Z, {
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
            N(this, '_scrollerRef', i.createRef()),
            N(this, '_scrollToOnMount', void 0),
            N(this, '_scrollToPadding', 0),
            N(this, 'state', { includeUpdatesInScroller: !1 }),
            N(this, 'handleHeightTallerThanHalfViewportChange', (e) => {
                this.setState({ includeUpdatesInScroller: e });
            }),
            N(this, 'scrollToRow', (e, t) => {
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
