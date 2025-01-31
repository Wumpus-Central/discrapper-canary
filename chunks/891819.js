n.d(t, { N: () => f }), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(711873),
    s = n.n(a),
    o = n(134432);
function l(e, t, n) {
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
let u = /url\(['"](.*)['"]\)/,
    c = (e) => {
        if (null == e || '' === e || 'none' === e) return null;
        let t = e.match(u);
        return null != t ? t[1] : e;
    };
function d(e) {
    return null == e || '' === e || 'none' === e ? 'none' : 'url('.concat(e, ')');
}
function f(e) {
    class t extends r.Component {
        componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: n, loaded: i } = this.state,
                { style: r } = this.props,
                a = null != r ? c(r.backgroundImage) : null;
            null == a && a !== n
                ? this.setState({
                      loaded: !0,
                      cached: a
                  })
                : this.cachedURLs.indexOf(a) >= 0
                  ? this.setState({
                        loaded: !0,
                        cached: a
                    })
                  : null != a && a !== n && !0 === i && this.setState({ loaded: !1 }, () => this.preloadURL(a));
        }
        preloadURL(e) {
            this.canceller && this.canceller(),
                (this.canceller = (0, o.po)(e, (t) => {
                    this.canceller && (this.canceller = null),
                        t ||
                            (this.cachedURLs.push(e),
                            this.setState({
                                cached: e,
                                loaded: !0
                            }));
                    let { onBackgroundImageLoad: n } = this.props;
                    n && n(t, e);
                }));
        }
        componentWillUnmount() {
            this.canceller && this.canceller(), (this.cachedURLs.length = 0);
        }
        render() {
            let { style: t, onBackgroundImageLoad: n, ...r } = this.props,
                { loaded: a, cached: s } = this.state;
            return (
                a ||
                    null == t ||
                    (t = {
                        ...t,
                        backgroundImage: d(s)
                    }),
                (0, i.jsx)(e, {
                    style: t,
                    ...r
                })
            );
        }
        constructor(e) {
            super(e), l(this, 'cachedURLs', []), l(this, 'canceller', null);
            let { style: t } = e,
                n = null != t ? c(t.backgroundImage) : null;
            (this.cachedURLs = [n]),
                (this.state = {
                    cached: n,
                    loaded: !0
                });
        }
    }
    return s()(t, e), t;
}
