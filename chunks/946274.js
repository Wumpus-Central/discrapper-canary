i.d(t, { Ay: () => d, JF: () => p, gA: () => o });
var n = i(627968),
    a = i(64700),
    s = i(780777),
    l = i(693591),
    r = i(985018);
function o() {
    return [{ name: r.intl.string(r.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"] }];
}
function p(e, t, i) {
    if (null != e) {
        let n = new FileReader();
        (n.onload = (n) => {
            "string" == typeof n.target?.result &&
                ((n) => {
                    if (e.type === l.a.MP4) return t(n, e);
                    let a = new Image();
                    (a.src = n),
                        (a.onload = () => {
                            t(n, e);
                        }),
                        (a.onerror = () => {
                            i();
                        });
                })(n.target.result);
        }),
            n.readAsDataURL(e);
    }
}
class h extends a.PureComponent {
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
                p(a, this.handleFileRead, this.handleFileError);
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
        let { openUploadError: e } = await Promise.resolve().then(i.bind(i, 23658));
        e({ title: r.intl.string(r.t["0egKg3"]), help: r.intl.string(r.t["7PnXqu"]) });
    };
    render() {
        let {
            multiple: e,
            disabled: t,
            className: i,
            tabIndex: a,
            "aria-label": l,
            "aria-hidden": r,
            filters: p,
        } = this.props;
        return (0, n.jsx)(s.A, {
            ref: this._ref,
            onClick: this.props.onClick,
            onChange: this.handleFileChange,
            filters: p ?? o(),
            multiple: e,
            disabled: t,
            className: i,
            tabIndex: a,
            "aria-label": l,
            "aria-hidden": r,
        });
    }
}
let d = h;
