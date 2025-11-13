n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(570140),
    c = n(150063),
    u = n(274616),
    d = n(827837),
    p = n(410575),
    f = n(3570),
    h = n(237919),
    g = n(957657),
    m = n(665307),
    _ = n(530151),
    b = n(981631),
    E = n(186901),
    O = n(115654);
function y(e, t, n) {
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
class v extends i.PureComponent {
    componentDidMount() {
        c.Y(b.Z5c.APPLICATION_LIBRARY),
            (0, f.T)(E.jE.LIBRARY),
            o.Z.wait(() => (0, u.o)()),
            (0, d.N)(),
            null != this._scrollToOnMount &&
                null != this._scrollerRef.current &&
                this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    renderToolbar() {
        return (0, r.jsx)(h.Z, {});
    }
    render() {
        let { includeUpdatesInScroller: e } = this.state,
            t = (0, r.jsx)("div", {
                children: (0, r.jsx)(p.Z, {
                    section: b.jXE.LIBRARY_INSTALL_MODULE,
                    children: (0, r.jsx)(_.Z, {
                        onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange,
                    }),
                }),
            });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(g.Z, {
                    currentRoute: b.Z5c.APPLICATION_LIBRARY,
                    renderToolbar: this.renderToolbar,
                }),
                e ? null : t,
                (0, r.jsxs)(s.yWw, {
                    className: a()(O.container, O.scroller),
                    ref: this._scrollerRef,
                    children: [
                        e ? t : null,
                        (0, r.jsx)(p.Z, {
                            section: b.jXE.LIBRARY_APPLICATION_LIST,
                            children: (0, r.jsx)(m.Z, {
                                stickyHeader: !e,
                                scrollToRow: this.scrollToRow,
                            }),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "_scrollerRef", i.createRef()),
            y(this, "_scrollToOnMount", void 0),
            y(this, "_scrollToPadding", 0),
            y(this, "state", { includeUpdatesInScroller: !1 }),
            y(this, "handleHeightTallerThanHalfViewportChange", (e) => {
                this.setState({ includeUpdatesInScroller: e });
            }),
            y(this, "scrollToRow", (e, t) => {
                let n = this._scrollerRef.current;
                null != n
                    ? (e.focus(),
                      n.scrollIntoViewRect({
                          start: t,
                          end: t,
                      }),
                      (this._scrollToOnMount = null))
                    : ((this._scrollToOnMount = e), (this._scrollToPadding = t));
            });
    }
}
