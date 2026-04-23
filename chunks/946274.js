"use strict";
n.d(t, { Ay: () => d, JF: () => u, gA: () => l });
var r = n(627968),
    i = n(64700),
    s = n(817363),
    a = n(693591),
    o = n(985018);
function l() {
    return [{ name: o.intl.string(o.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"] }];
}
function u(e, t, n) {
    if (null != e) {
        let r = new FileReader();
        (r.onload = (r) => {
            "string" == typeof r.target?.result &&
                ((r) => {
                    if (e.type === a.a.MP4) return t(r, e);
                    let i = new Image();
                    (i.src = r),
                        (i.onload = () => {
                            t(r, e);
                        }),
                        (i.onerror = () => {
                            n();
                        });
                })(r.target.result);
        }),
            r.readAsDataURL(e);
    }
}
class c extends i.PureComponent {
    _ref = i.createRef();
    _isMounted = !1;
    static defaultProps = { multiple: !0, tabIndex: -1, maxFileSizeBytes: 1 / 0 };
    componentDidMount() {
        this._isMounted = !0;
    }
    handleFileChange = (e) => {
        let { onFileSizeError: t, maxFileSizeBytes: n } = this.props;
        if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
            for (let r = 0; r < e.currentTarget.files.length; r++) {
                let i = e.currentTarget.files[r];
                if (i.size > n) {
                    t?.(n, i.size);
                    continue;
                }
                u(i, this.handleFileRead, this.handleFileError);
            }
    };
    activateUploadDialogue() {
        this._ref.current?.activateUploadDialogue();
    }
    handleFileRead = (e, t) => {
        let { onChange: n } = this.props;
        this._isMounted && n(e, t);
    };
    handleFileError = async () => {
        let { openUploadError: e } = await Promise.resolve().then(n.bind(n, 23658));
        e({ title: o.intl.string(o.t["0egKg3"]), help: o.intl.string(o.t["7PnXqu"]) });
    };
    render() {
        let {
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: i,
            "aria-label": a,
            "aria-hidden": o,
            filters: u,
        } = this.props;
        return (0, r.jsx)(s.A, {
            ref: this._ref,
            onClick: this.props.onClick,
            onChange: this.handleFileChange,
            filters: u ?? l(),
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: i,
            "aria-label": a,
            "aria-hidden": o,
        });
    }
}
let d = c;
