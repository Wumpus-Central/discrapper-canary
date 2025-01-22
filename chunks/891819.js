r.d(n, {
    N: function () {
        return h;
    }
});
var i = r(653041);
var a = r(200651),
    o = r(192379),
    s = r(711873),
    l = r.n(s),
    u = r(134432);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = /url\(['"](.*)['"]\)/,
    f = (e) => {
        if (null == e || '' === e || 'none' === e) return null;
        let n = e.match(d);
        return null != n ? n[1] : e;
    };
function p(e) {
    return null == e || '' === e || 'none' === e ? 'none' : 'url('.concat(e, ')');
}
function h(e) {
    class n extends o.Component {
        componentDidUpdate(e, n) {
            if (n === this.state) return;
            let { cached: r, loaded: i } = this.state,
                { style: a } = this.props,
                o = null != a ? f(a.backgroundImage) : null;
            null == o && o !== r
                ? this.setState({
                      loaded: !0,
                      cached: o
                  })
                : this.cachedURLs.indexOf(o) >= 0
                  ? this.setState({
                        loaded: !0,
                        cached: o
                    })
                  : null != o && o !== r && !0 === i && this.setState({ loaded: !1 }, () => this.preloadURL(o));
        }
        preloadURL(e) {
            this.canceller && this.canceller(),
                (this.canceller = (0, u.po)(e, (n) => {
                    this.canceller && (this.canceller = null),
                        !n &&
                            (this.cachedURLs.push(e),
                            this.setState({
                                cached: e,
                                loaded: !0
                            }));
                    let { onBackgroundImageLoad: r } = this.props;
                    r && r(n, e);
                }));
        }
        componentWillUnmount() {
            this.canceller && this.canceller(), (this.cachedURLs.length = 0);
        }
        render() {
            let { style: n, onBackgroundImageLoad: r, ...i } = this.props,
                { loaded: o, cached: s } = this.state;
            return (
                !o &&
                    null != n &&
                    (n = {
                        ...n,
                        backgroundImage: p(s)
                    }),
                (0, a.jsx)(e, {
                    style: n,
                    ...i
                })
            );
        }
        constructor(e) {
            super(e), c(this, 'cachedURLs', []), c(this, 'canceller', null);
            let { style: n } = e,
                r = null != n ? f(n.backgroundImage) : null;
            (this.cachedURLs = [r]),
                (this.state = {
                    cached: r,
                    loaded: !0
                });
        }
    }
    return l()(n, e), n;
}
