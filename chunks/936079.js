n.d(t, { Z: () => I }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(525654),
    o = n.n(a),
    s = n(131271),
    l = n(442837),
    c = n(336317),
    u = n(481060),
    d = n(596454),
    f = n(151851),
    p = n(451478),
    _ = n(176354),
    m = n(63063),
    h = n(358085),
    g = n(998502),
    E = n(406128),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
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
function v() {
    let e = window.require("electron").remote.getCurrentWindow();
    (g.ZP.minimize = () => e.minimize()),
        (g.ZP.maximize = () => {
            e.isMaximized() ? e.unmaximize() : e.maximize();
        }),
        (g.ZP.close = () => e.close());
}
let S = l.ZP.connectStores([p.Z], () => ({ focused: p.Z.isFocused() }))(f.Z);
class I extends i.PureComponent {
    getPlatform() {
        var e;
        let t = null == (e = o().os) ? void 0 : e.family;
        return null != t && /^win/i.test(t)
            ? h.PlatformTypes.WINDOWS
            : null != t && /darwin|os x/i.test(t)
              ? h.PlatformTypes.OSX
              : h.PlatformTypes.LINUX;
    }
    componentDidMount() {
        v();
    }
    render() {
        let e = (0, r.jsx)("div", {
            children: (0, r.jsxs)("p", {
                children: [
                    y.intl.string(y.t["4tRjHC"]),
                    " ",
                    (0, r.jsx)(d.Z, {
                        src: _.ZP.getURL(c.Z.convert.fromCodePoint("1f44c")),
                        emojiName: ":ok_hand:",
                        animated: !1,
                    }),
                ],
            }),
        });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(s.ql, { children: (0, r.jsx)("html", { className: (0, u.QeD)(b.BRd.DARK) }) }),
                (0, r.jsx)(S, { type: this.getPlatform() }),
                (0, r.jsx)(E.Z, {
                    title: y.intl.string(y.t["3h+n+8"]),
                    note: e,
                    action: (0, r.jsx)(u.Button, {
                        size: "md",
                        variant: "primary",
                        text: y.intl.string(y.t["1WjMbC"]),
                        onClick: this.handleDownload,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            O(this, "handleDownload", () => {
                window.open(
                    this.getPlatform() === h.PlatformTypes.WINDOWS
                        ? m.Z.getArticleURL(b.BhN.CORRUPT_INSTALLATION)
                        : b.EYA.DOWNLOAD,
                );
            });
    }
}
