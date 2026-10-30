i.d(t, { AM: () => p, Ay: () => u, JF: () => h, gA: () => o });
var n = i(477900),
    a = i(582128),
    l = i(780777),
    s = i(693591),
    r = i(105292);
function o() {
    return [{ name: r.intl.string(r.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"] }];
}
function p(e, t) {
    if (null != e) {
        let i = new FileReader();
        ((i.onload = (i) => {
            "string" == typeof i.target?.result && t(i.target.result, e);
        }),
            i.readAsDataURL(e));
    }
}
function h(e, t, i) {
    p(e, (n) => {
        if (e.type === s.a.MP4) return t(n, e);
        let a = new Image();
        ((a.src = n),
            (a.onload = () => {
                t(n, e);
            }),
            (a.onerror = () => {
                i();
            }));
    });
}
class d extends a.PureComponent {
    _ref = a.createRef();
    _isMounted = !1;
    static defaultProps = { multiple: !0, tabIndex: -1, maxFileSizeBytes: 1 / 0 };
    componentDidMount() {
        this._isMounted = !0;
    }
    handleFileChange = (e) => {
        let { onFileSizeError: t, maxFileSizeBytes: i } = this.props;
        if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
            for (let n = 0; n < e.currentTarget.files.length; n++) {
                let a = e.currentTarget.files[n];
                if (a.size > i) {
                    t?.(i, a.size);
                    continue;
                }
                h(a, this.handleFileRead, this.handleFileError);
            }
    };
    activateUploadDialogue() {
        this._ref.current?.activateUploadDialogue();
    }
    handleFileRead = (e, t) => {
        let { onChange: i } = this.props;
        this._isMounted && i(e, t);
    };
    handleFileError = async () => {
        let { openUploadError: e } = await Promise.all([
            i.e("454048"),
            i.e("300699"),
            i.e("488694"),
            i.e("534822"),
        ]).then(i.bind(i, 894101));
        e({ title: r.intl.string(r.t["0egKg3"]), help: r.intl.string(r.t["7PnXqu"]) });
    };
    render() {
        let {
            multiple: e,
            disabled: t,
            className: i,
            tabIndex: a,
            "aria-label": s,
            "aria-hidden": r,
            filters: p,
            title: h,
        } = this.props;
        return (0, n.jsx)(l.A, {
            ref: this._ref,
            onClick: this.props.onClick,
            onChange: this.handleFileChange,
            filters: p ?? o(),
            multiple: e,
            disabled: t,
            className: i,
            tabIndex: a,
            "aria-label": s,
            "aria-hidden": r,
            title: h,
        });
    }
}
let u = d;
