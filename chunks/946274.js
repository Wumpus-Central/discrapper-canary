"use strict";
n.d(t, { Ay: () => d, JF: () => c, gA: () => o });
var l = n(627968),
    i = n(64700),
    s = n(780777),
    a = n(693591),
    r = n(985018);
function o() {
    return [{ name: r.intl.string(r.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"] }];
}
function c(e, t, n) {
    if (null != e) {
        let l = new FileReader();
        (l.onload = (l) => {
            "string" == typeof l.target?.result &&
                ((l) => {
                    if (e.type === a.a.MP4) return t(l, e);
                    let i = new Image();
                    (i.src = l),
                        (i.onload = () => {
                            t(l, e);
                        }),
                        (i.onerror = () => {
                            n();
                        });
                })(l.target.result);
        }),
            l.readAsDataURL(e);
    }
}
class u extends i.PureComponent {
    _ref = i.createRef();
    _isMounted = !1;
    static defaultProps = { multiple: !0, tabIndex: -1, maxFileSizeBytes: 1 / 0 };
    componentDidMount() {
        this._isMounted = !0;
    }
    handleFileChange = (e) => {
        let { onFileSizeError: t, maxFileSizeBytes: n } = this.props;
        if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
            for (let l = 0; l < e.currentTarget.files.length; l++) {
                let i = e.currentTarget.files[l];
                if (i.size > n) {
                    t?.(n, i.size);
                    continue;
                }
                c(i, this.handleFileRead, this.handleFileError);
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
        e({ title: r.intl.string(r.t["0egKg3"]), help: r.intl.string(r.t["7PnXqu"]) });
    };
    render() {
        let {
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: i,
            "aria-label": a,
            "aria-hidden": r,
            filters: c,
        } = this.props;
        return (0, l.jsx)(s.A, {
            ref: this._ref,
            onClick: this.props.onClick,
            onChange: this.handleFileChange,
            filters: c ?? o(),
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: i,
            "aria-label": a,
            "aria-hidden": r,
        });
    }
}
let d = u;
