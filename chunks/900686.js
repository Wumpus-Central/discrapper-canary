n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(64700),
    i = n(522579),
    l = n(77729),
    s = n(723702);
class a extends r.Component {
    getFileContents() {
        let { fileContents: e } = this.props;
        return "function" == typeof e && (e = e()), e;
    }
    downloadNative(e, t) {
        l.A.fileManager.saveWithDialog(e, t);
    }
    downloadHtml5(e, t) {
        let n = new Blob([e], {
            type: this.props.contentType,
        });
        (0, i.saveAs)(n, t);
    }
    render() {
        let { children: e } = this.props,
            t = r.Children.only(e);
        return r.cloneElement(t, {
            onClick: this.handleFileDownload,
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handleFileDownload", (e) => {
                e.preventDefault();
                let t = this.getFileContents(),
                    { fileName: n, onDownload: r } = this.props;
                s.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == r || r();
            });
    }
}
