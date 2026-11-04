var i = n(582128),
    a = n(522579),
    l = n(77729),
    s = n(723702);
class o extends i.Component {
    getFileContents() {
        let { fileContents: t } = this.props;
        return ("function" == typeof t && (t = t()), t);
    }
    handleFileDownload = (t) => {
        t.preventDefault();
        let e = this.getFileContents(),
            { fileName: n, onDownload: i } = this.props;
        (s.isPlatformEmbedded ? this.downloadNative(e, n) : this.downloadHtml5(e, n), i?.());
    };
    downloadNative(t, e) {
        l.A.fileManager.saveWithDialog(t, e);
    }
    downloadHtml5(t, e) {
        let n = new Blob([t], { type: this.props.contentType });
        (0, a.saveAs)(n, e);
    }
    render() {
        let { children: t } = this.props,
            e = i.Children.only(t);
        return i.cloneElement(e, { onClick: this.handleFileDownload });
    }
}
n.d(e, {}, { A: o });
