"use strict";
n.d(t, { Ay: () => d, JF: () => u, gA: () => l });
var i = n(627968),
    r = n(64700),
    s = n(780777),
    a = n(693591),
    o = n(375708);
function l() {
    return [{ name: o.intl.string(o.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"] }];
}
function u(e, t, n) {
    if (null != e) {
        let i = new FileReader();
        (i.onload = (i) => {
            "string" == typeof i.target?.result &&
                ((i) => {
                    if (e.type === a.a.MP4) return t(i, e);
                    let r = new Image();
                    (r.src = i),
                        (r.onload = () => {
                            t(i, e);
                        }),
                        (r.onerror = () => {
                            n();
                        });
                })(i.target.result);
        }),
            i.readAsDataURL(e);
    }
}
class c extends r.PureComponent {
    _ref = r.createRef();
    _isMounted = !1;
    static defaultProps = { multiple: !0, tabIndex: -1, maxFileSizeBytes: 1 / 0 };
    componentDidMount() {
        this._isMounted = !0;
    }
    handleFileChange = (e) => {
        let { onFileSizeError: t, maxFileSizeBytes: n } = this.props;
        if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
            for (let i = 0; i < e.currentTarget.files.length; i++) {
                let r = e.currentTarget.files[i];
                if (r.size > n) {
                    t?.(n, r.size);
                    continue;
                }
                u(r, this.handleFileRead, this.handleFileError);
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
        let { openUploadError: e } = await Promise.resolve().then(n.bind(n, 494921));
        e({ title: o.intl.string(o.t["0egKg3"]), help: o.intl.string(o.t["7PnXqu"]) });
    };
    render() {
        let {
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: r,
            "aria-label": a,
            "aria-hidden": o,
            filters: u,
        } = this.props;
        return (0, i.jsx)(s.A, {
            ref: this._ref,
            onClick: this.props.onClick,
            onChange: this.handleFileChange,
            filters: u ?? l(),
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: r,
            "aria-label": a,
            "aria-hidden": o,
        });
    }
}
let d = c;
