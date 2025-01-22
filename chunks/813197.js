r.d(n, {
    Fq: function () {
        return h;
    },
    Zj: function () {
        return f;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(53281),
    u = r(869783),
    c = r(388032);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function f() {
    return [
        {
            name: c.intl.string(c.t.Sp2NFx),
            extensions: ['jpg', 'jpeg', 'png', 'gif']
        }
    ];
}
function p(e, n) {
    if (null != e) {
        let r = new FileReader();
        (r.onload = (r) => {
            var i;
            'string' == typeof (null === (i = r.target) || void 0 === i ? void 0 : i.result) && n(r.target.result, e);
        }),
            r.readAsDataURL(e);
    }
}
function h(e, n, r) {
    p(e, (i) => {
        if (e.type === u.m.MP4) return n(i, e);
        let a = new Image();
        (a.src = i),
            (a.onload = () => {
                n(i, e);
            }),
            (a.onerror = () => {
                r();
            });
    });
}
class _ extends (i = s.PureComponent) {
    componentDidMount() {
        this._isMounted = !0;
    }
    activateUploadDialogue() {
        var e;
        null === (e = this._ref.current) || void 0 === e || e.activateUploadDialogue();
    }
    render() {
        let { multiple: e, disabled: n, className: r, tabIndex: i, 'aria-label': a, filters: s } = this.props;
        return (0, o.jsx)(l.Z, {
            ref: this._ref,
            onChange: this.handleFileChange,
            filters: null != s ? s : f(),
            multiple: e,
            disabled: n,
            className: r,
            tabIndex: i,
            'aria-label': a
        });
    }
    constructor(...e) {
        super(...e),
            d(this, '_ref', s.createRef()),
            d(this, '_isMounted', !1),
            d(this, 'handleFileChange', (e) => {
                let { onFileSizeError: n, maxFileSizeBytes: r } = this.props;
                if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
                    for (let i = 0; i < e.currentTarget.files.length; i++) {
                        let a = e.currentTarget.files[i];
                        if (a.size > r) {
                            null == n || n(r, a.size);
                            continue;
                        }
                        h(a, this.handleFileRead, this.handleFileError);
                    }
            }),
            d(this, 'handleFileRead', (e, n) => {
                let { onChange: r } = this.props;
                this._isMounted && r(e, n);
            }),
            d(this, 'handleFileError', async () => {
                let { openUploadError: e } = await Promise.resolve().then(r.bind(r, 531643));
                e({
                    title: c.intl.string(c.t['0egKg4']),
                    help: c.intl.string(c.t['7PnXqq'])
                });
            });
    }
}
d(_, 'defaultProps', {
    multiple: !0,
    tabIndex: -1,
    maxFileSizeBytes: 1 / 0
}),
    (n.ZP = _);
