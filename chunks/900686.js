n.d(t, { A: () => o });
var a = n(64700),
    l = n(522579),
    s = n(77729),
    i = n(723702);
class o extends a.Component {
    getFileContents() {
        let { fileContents: e } = this.props;
        return "function" == typeof e && (e = e()), e;
    }
    handleFileDownload = (e) => {
        e.preventDefault();
        let t = this.getFileContents(),
            { fileName: n, onDownload: a } = this.props;
        i.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), a?.();
    };
    downloadNative(e, t) {
        s.A.fileManager.saveWithDialog(e, t);
    }
    downloadHtml5(e, t) {
        let n = new Blob([e], { type: this.props.contentType });
        (0, l.saveAs)(n, t);
    }
    render() {
        let { children: e } = this.props,
            t = a.Children.only(e);
        return a.cloneElement(t, { onClick: this.handleFileDownload });
    }
}
