n.d(t, { default: () => P }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(166459),
    c = n(990169),
    u = n(476326),
    d = n(752305),
    f = n(849522),
    _ = n(703558),
    p = n(626135),
    h = n(358085),
    m = n(998502),
    g = n(981631),
    E = n(388032),
    b = n(948979),
    y = n(20493);
function v(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 104,
    N = 16;
function A(e) {
    var t, n, o;
    let { file: s } = e,
        [l, u] = i.useState(),
        [d, f] = i.useState(!1),
        [_, p] = i.useState({}),
        h = i.useRef(null);
    i.useEffect(() => {
        if ((null != h.current && f(!1), null == s)) return;
        let e = URL.createObjectURL(s);
        return (
            u(e),
            () => {
                u(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [s]),
        i.useLayoutEffect(() => {
            let e = h.current;
            null != e &&
                (e.onload = () => {
                    let t = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    1 === t
                        ? p({
                              width: T,
                              height: T
                          })
                        : t > 1
                          ? p({
                                width: T * t,
                                height: void 0
                            })
                          : p({
                                width: void 0,
                                height: T / t
                            }),
                        f(!0);
                });
        }, []);
    let m = (0, c.Z)(h),
        g = Math.max(16, (N + T - (null != (t = null == m ? void 0 : m.width) ? t : 0)) / 2);
    return (0, r.jsx)('img', {
        ref: h,
        src: l,
        className: a()(b.icon, { [b.image]: !d }),
        'aria-hidden': !0,
        alt: '',
        style: {
            width: null != (n = _.width) ? n : 'initial',
            height: null != (o = _.height) ? o : T,
            marginLeft: g,
            marginRight: g,
            marginTop: null != _.height ? T - _.height - 33 : -33
        }
    });
}
class C extends i.Component {
    render() {
        var e;
        return this.props.upload.item.platform !== u.ow.WEB ? null : this.props.upload.isImage ? (0, r.jsx)(A, { file: this.props.upload.item.file }) : (0, r.jsx)('div', { className: a()(b.icon, { [b[null != (e = this.props.upload.classification) ? e : '']]: !0 }) });
    }
}
class R extends i.Component {
    componentDidMount() {
        var e;
        (null == (e = this.props.upload) ? void 0 : e.showLargeMessageDialog) &&
            this.props.upload.item.platform === u.ow.WEB &&
            p.default.track(g.rMx.OPEN_MODAL, {
                type: 'Upload Large Message',
                message_content_length: this.props.upload.item.file.size
            }),
            h.isPlatformEmbedded && m.ZP.focus();
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        var t, n, r, i;
        (null == (t = e.upload) ? void 0 : t.filename) !== (null == (n = this.props.upload) ? void 0 : n.filename) && this.setState({ filename: null != (i = null == (r = this.props.upload) ? void 0 : r.filename) ? i : '' });
    }
    render() {
        let { upload: e, transitionState: t, messageMaxLength: n, disableSpoiler: o } = this.props,
            { hasSpoiler: l } = this.state;
        return (0, r.jsxs)(s.Y0X, {
            'aria-label': E.NW.string(E.t['3AS4UF']),
            size: s.CgR.DYNAMIC,
            transitionState: t,
            className: b.uploadModal,
            children: [
                (0, r.jsxs)('div', {
                    className: b.inner,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(b.file, { [b.expandable]: e.isImage }),
                            children: [
                                (0, r.jsx)(C, { upload: e }),
                                (0, r.jsxs)('div', {
                                    className: b.description,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: b.filename,
                                            children: e.showLargeMessageDialog ? E.NW.formatToPlainString(E.t.QWQxtL, { maxLength: n }) : e.filename
                                        }),
                                        e.showLargeMessageDialog
                                            ? (0, r.jsx)('div', {
                                                  className: b.subtitle,
                                                  children: E.NW.string(E.t.Plcu09)
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: b.comment,
                            children: [
                                (0, r.jsx)('div', {
                                    className: b.label,
                                    children: (0, r.jsx)('span', { children: E.NW.string(E.t.ILJuBg) })
                                }),
                                (0, r.jsx)(s.oil, {
                                    className: a()(b.channelTextAreaUpload, y.marginTop8),
                                    value: this.state.filename,
                                    onChange: (e) => this.setState({ filename: e }),
                                    onKeyDown: (e) => {
                                        if (e.which === g.yXg.ENTER) return this.handleSubmit();
                                    }
                                }),
                                e.isImage
                                    ? (0, r.jsxs)(i.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: b.label,
                                                  children: (0, r.jsx)('span', { children: E.NW.string(E.t.eOB2eX) })
                                              }),
                                              (0, r.jsx)(s.oil, {
                                                  className: a()(b.channelTextAreaUpload, y.marginTop8),
                                                  placeholder: E.NW.string(E.t.RNH1jo),
                                                  value: this.state.description,
                                                  onChange: (e) => this.setState({ description: e }),
                                                  onKeyDown: (e) => {
                                                      if (e.which === g.yXg.ENTER) return this.handleSubmit();
                                                  }
                                              })
                                          ]
                                      })
                                    : null,
                                !0 !== o &&
                                    (0, r.jsx)(s.XZJ, {
                                        className: y.marginBottom20,
                                        value: l,
                                        onChange: (e, t) => this.setState({ hasSpoiler: t }),
                                        children: (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            children: E.NW.string(E.t['gsI+xM'])
                                        })
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: b.footer,
                    children: (0, r.jsxs)('div', {
                        className: a()(b.hasSpoilers, b.footerRightAlign),
                        children: [
                            (0, r.jsx)(s.zxk, {
                                type: 'button',
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                onClick: this.cancel,
                                children: (0, r.jsx)('span', { children: E.NW.string(E.t['ETE/oK']) })
                            }),
                            (0, r.jsx)(s.zxk, {
                                type: 'submit',
                                onClick: this.handleSubmit,
                                children: (0, r.jsx)('span', { children: E.NW.string(E.t['TY+auL']) })
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        var t, n, r, i, o, a;
        super(e),
            v(this, 'cancelAll', () => {
                l.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
            }),
            v(this, 'cancel', () => {
                this.props.onClose();
            }),
            v(this, 'handleTextChange', (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n
                });
            }),
            v(this, 'handleSubmit', () => {
                let { upload: e, onClose: t, onSubmit: n } = this.props,
                    { filename: r, description: i, hasSpoiler: o } = this.state;
                n({
                    upload: e,
                    name: r,
                    description: i,
                    spoiler: o
                }),
                    t();
            });
        let s = e.ignoreDraft ? '' : _.Z.getDraft(this.props.channelId, e.draftType);
        this.state = S(O({}, (0, d.eK)(s)), {
            textFocused: !0,
            hasSpoiler: null != (i = null == (t = e.upload) ? void 0 : t.spoiler) && i,
            filename: null != (o = null == (n = e.upload) ? void 0 : n.filename) ? o : '',
            contentWarningProps: null,
            description: null != (a = null == (r = e.upload) ? void 0 : r.description) ? a : ''
        });
    }
}
function P(e) {
    let t = (0, f.Z)();
    return e.upload.item.platform !== u.ow.WEB
        ? null
        : (0, r.jsx)(
              R,
              S(O({}, e), {
                  file: e.upload.item.file,
                  messageMaxLength: t
              })
          );
}
