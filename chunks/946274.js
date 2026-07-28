"use strict";
n.d(t, { Ay: () => u, JF: () => d, gA: () => o });
var i = n(477900),
    r = n(582128),
    a = n(780777),
    s = n(693591),
    l = n(375708);
function o() {
    return [{ name: l.intl.string(l.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"] }];
}
function d(e, t, n) {
    if (null != e) {
        let i = new FileReader();
        (i.onload = (i) => {
            "string" == typeof i.target?.result &&
                ((i) => {
                    if (e.type === s.a.MP4) return t(i, e);
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
                d(r, this.handleFileRead, this.handleFileError);
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
        e({ title: l.intl.string(l.t["0egKg3"]), help: l.intl.string(l.t["7PnXqu"]) });
    };
    render() {
        let {
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: r,
            "aria-label": s,
            "aria-hidden": l,
            filters: d,
        } = this.props;
        return (0, i.jsx)(a.A, {
            ref: this._ref,
            onClick: this.props.onClick,
            onChange: this.handleFileChange,
            filters: d ?? o(),
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: r,
            "aria-label": s,
            "aria-hidden": l,
        });
    }
}
let u = c;
