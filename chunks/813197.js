n.d(t, {
    Fq: () => f,
    ZP: () => p,
    Zj: () => u
}),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(53281),
    s = n(869783),
    l = n(388032);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u() {
    return [
        {
            name: l.NW.string(l.t.Sp2NFx),
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp']
        }
    ];
}
function d(e, t) {
    if (null != e) {
        let n = new FileReader();
        (n.onload = (n) => {
            var r;
            'string' == typeof (null == (r = n.target) ? void 0 : r.result) && t(n.target.result, e);
        }),
            n.readAsDataURL(e);
    }
}
function f(e, t, n) {
    d(e, (r) => {
        if (e.type === s.m.MP4) return t(r, e);
        let i = new Image();
        (i.src = r),
            (i.onload = () => {
                t(r, e);
            }),
            (i.onerror = () => {
                n();
            });
    });
}
class _ extends (r = o.PureComponent) {
    componentDidMount() {
        this._isMounted = !0;
    }
    activateUploadDialogue() {
        var e;
        null == (e = this._ref.current) || e.activateUploadDialogue();
    }
    render() {
        let { multiple: e, disabled: t, className: n, tabIndex: r, 'aria-label': o, filters: s } = this.props;
        return (0, i.jsx)(a.Z, {
            ref: this._ref,
            onChange: this.handleFileChange,
            filters: null != s ? s : u(),
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: r,
            'aria-label': o
        });
    }
    constructor(...e) {
        super(...e),
            c(this, '_ref', o.createRef()),
            c(this, '_isMounted', !1),
            c(this, 'handleFileChange', (e) => {
                let { onFileSizeError: t, maxFileSizeBytes: n } = this.props;
                if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
                    for (let r = 0; r < e.currentTarget.files.length; r++) {
                        let i = e.currentTarget.files[r];
                        if (i.size > n) {
                            null == t || t(n, i.size);
                            continue;
                        }
                        f(i, this.handleFileRead, this.handleFileError);
                    }
            }),
            c(this, 'handleFileRead', (e, t) => {
                let { onChange: n } = this.props;
                this._isMounted && n(e, t);
            }),
            c(this, 'handleFileError', async () => {
                let { openUploadError: e } = await Promise.resolve().then(n.bind(n, 531643));
                e({
                    title: l.NW.string(l.t['0egKg4']),
                    help: l.NW.string(l.t['7PnXqq'])
                });
            });
    }
}
c(_, 'defaultProps', {
    multiple: !0,
    tabIndex: -1,
    maxFileSizeBytes: 1 / 0
});
let p = _;
