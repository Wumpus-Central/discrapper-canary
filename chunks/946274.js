"use strict";
n.d(t, { Ay: () => d, JF: () => c, gA: () => o });
var i = n(627968),
    l = n(64700),
    s = n(817363),
    r = n(693591),
    a = n(985018);
function o() {
    return [{ name: a.intl.string(a.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"] }];
}
function c(e, t, n) {
    if (null != e) {
        let i = new FileReader();
        (i.onload = (i) => {
            "string" == typeof i.target?.result &&
                ((i) => {
                    if (e.type === r.a.MP4) return t(i, e);
                    let l = new Image();
                    (l.src = i),
                        (l.onload = () => {
                            t(i, e);
                        }),
                        (l.onerror = () => {
                            n();
                        });
                })(i.target.result);
        }),
            i.readAsDataURL(e);
    }
}
class u extends l.PureComponent {
    _ref = l.createRef();
    _isMounted = !1;
    static defaultProps = { multiple: !0, tabIndex: -1, maxFileSizeBytes: 1 / 0 };
    componentDidMount() {
        this._isMounted = !0;
    }
    handleFileChange = (e) => {
        let { onFileSizeError: t, maxFileSizeBytes: n } = this.props;
        if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
            for (let i = 0; i < e.currentTarget.files.length; i++) {
                let l = e.currentTarget.files[i];
                if (l.size > n) {
                    t?.(n, l.size);
                    continue;
                }
                c(l, this.handleFileRead, this.handleFileError);
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
        let { openUploadError: e } = await n.e("76759").then(n.bind(n, 23658));
        e({ title: a.intl.string(a.t["0egKg3"]), help: a.intl.string(a.t["7PnXqu"]) });
    };
    render() {
        let {
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: l,
            "aria-label": r,
            "aria-hidden": a,
            filters: c,
        } = this.props;
        return (0, i.jsx)(s.A, {
            ref: this._ref,
            onClick: this.props.onClick,
            onChange: this.handleFileChange,
            filters: c ?? o(),
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: l,
            "aria-label": r,
            "aria-hidden": a,
        });
    }
}
let d = u;
