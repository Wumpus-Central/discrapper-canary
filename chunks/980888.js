l.d(t, { A: () => f }), l(321073);
var s = l(627968),
    n = l(64700),
    a = l(311907),
    i = l(691885),
    r = l(466472),
    c = l(775228),
    o = l(255438),
    u = l(837921),
    d = l(985018),
    h = l(139189);
let p = "select";
class A extends n.PureComponent {
    state = { newInstallationPath: null };
    fetchedMetadataPaths = new Set();
    fetchAllDirectoryMetadata() {
        let { installationPaths: e } = this.props,
            t = e.map((e) => {
                let { path: t } = e;
                return t;
            }),
            { newInstallationPath: l } = this.state;
        for (let e of (null != l && t.push(l),
        (t = t.filter((e) => !this.fetchedMetadataPaths.has(e))),
        (0, r.UQ)(t),
        t))
            this.fetchedMetadataPaths.add(e);
    }
    componentDidMount() {
        this.fetchAllDirectoryMetadata();
    }
    componentDidUpdate(e) {
        this.fetchAllDirectoryMetadata(),
            (this.props.requiredDiskKB !== e.requiredDiskKB ||
                this.props.installationPathsMetadata !== e.installationPathsMetadata) &&
                this.sendChange(this.props.value);
    }
    getOptions() {
        let { installationPaths: e } = this.props,
            { newInstallationPath: t } = this.state,
            l = e.map((e) => {
                let { path: t, label: l } = e;
                return { id: t, value: t, label: this.renderLabel(t, l) };
            });
        return (
            null != t && l.push({ id: t, value: t, label: this.renderLabel(t) }),
            l.push({ id: p, value: p, label: d.intl.string(d.t["cL/rrq"]) }),
            l
        );
    }
    hasEnoughDiskSpace(e) {
        let { requiredDiskKB: t, installationPathsMetadata: l } = this.props,
            s = null != l[e] ? l[e].availableKB : null;
        return null == t || null == s || t < s;
    }
    sendChange(e) {
        let { installationPathsMetadata: t, onChange: l } = this.props,
            s = null != t[e] && !1 === t[e].hasPermission;
        l(e, s || !this.hasEnoughDiskSpace(e));
    }
    handleChange = (e) => {
        e === p
            ? u.Ay.showOpenDialog(["openDirectory"]).then((e) => {
                  if (null != e && e.length > 0) {
                      let t = e[0];
                      this.setState({
                          newInstallationPath:
                              null !=
                              this.props.installationPaths.find((e) => {
                                  let { path: l } = e;
                                  return l === t;
                              })
                                  ? null
                                  : t,
                      }),
                          this.sendChange(t);
                  }
              })
            : this.sendChange(e);
    };
    renderError() {
        let { value: e, installationPathsMetadata: t } = this.props;
        return null != t[e] && !1 === t[e].hasPermission
            ? (0, s.jsx)("div", { className: h.z, children: d.intl.string(d.t.cEUT8B) })
            : this.hasEnoughDiskSpace(e)
              ? null
              : (0, s.jsx)("div", { className: h.z, children: d.intl.string(d.t["duXbE/"]) });
    }
    renderLabel(e, t) {
        let { installationPathsMetadata: l } = this.props,
            s = null != t ? t : e;
        return null != l[e] && null != l[e].availableKB
            ? d.intl.formatToPlainString(d.t["Y+M3rp"], {
                  path: s,
                  size: (0, o.Xq)(l[e].availableKB, { useKibibytes: !0 }),
              })
            : s;
    }
    render() {
        let { value: e, className: t, autoFocus: l } = this.props;
        return (0, s.jsxs)("div", {
            className: t,
            children: [
                (0, s.jsx)(i.l, {
                    label: d.intl.string(d.t.WTJuNr),
                    autoFocus: l,
                    options: this.getOptions(),
                    value: e,
                    onSelectionChange: this.handleChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                this.renderError(),
            ],
        });
    }
}
let f = a.Ay.connectStores([c.A], () => ({
    installationPaths: c.A.installationPaths,
    installationPathsMetadata: c.A.installationPathsMetadata,
}))(A);
