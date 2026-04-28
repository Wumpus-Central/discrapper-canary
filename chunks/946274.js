i.d(t, { Ay: () => u, JF: () => d, gA: () => o });
var n = i(627968),
    l = i(64700),
    r = i(780777),
    a = i(693591),
    s = i(985018);
function o() {
    return [{ name: s.intl.string(s.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"] }];
}
function d(e, t, i) {
    if (null != e) {
        let n = new FileReader();
        (n.onload = (n) => {
            "string" == typeof n.target?.result &&
                ((n) => {
                    if (e.type === a.a.MP4) return t(n, e);
                    let l = new Image();
                    (l.src = n),
                        (l.onload = () => {
                            t(n, e);
                        }),
                        (l.onerror = () => {
                            i();
                        });
                })(n.target.result);
        }),
            n.readAsDataURL(e);
    }
}
class c extends l.PureComponent {
    _ref = l.createRef();
    _isMounted = !1;
    static defaultProps = { multiple: !0, tabIndex: -1, maxFileSizeBytes: 1 / 0 };
    componentDidMount() {
        this._isMounted = !0;
    }
    handleFileChange = (e) => {
        let { onFileSizeError: t, maxFileSizeBytes: i } = this.props;
        if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
            for (let n = 0; n < e.currentTarget.files.length; n++) {
                let l = e.currentTarget.files[n];
                if (l.size > i) {
                    t?.(i, l.size);
                    continue;
                }
                d(l, this.handleFileRead, this.handleFileError);
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
        e({ title: s.intl.string(s.t["0egKg3"]), help: s.intl.string(s.t["7PnXqu"]) });
    };
    render() {
        let {
            multiple: e,
            disabled: t,
            className: i,
            tabIndex: l,
            "aria-label": a,
            "aria-hidden": s,
            filters: d,
        } = this.props;
        return (0, n.jsx)(r.A, {
            ref: this._ref,
            onClick: this.props.onClick,
            onChange: this.handleFileChange,
            filters: d ?? o(),
            multiple: e,
            disabled: t,
            className: i,
            tabIndex: l,
            "aria-label": a,
            "aria-hidden": s,
        });
    }
}
let u = c;
