(n.d(t, { default: () => w }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(166459),
    u = n(990169),
    d = n(476326),
    f = n(752305),
    _ = n(849522),
    p = n(703558),
    h = n(626135),
    m = n(358085),
    g = n(998502),
    E = n(981631),
    b = n(388032),
    y = n(948979),
    O = n(20493);
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            }));
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 104,
    N = 16;
function C(e) {
    var t, n, a;
    let { file: s } = e,
        [l, c] = i.useState(),
        [d, f] = i.useState(!1),
        [_, p] = i.useState({}),
        h = i.useRef(null);
    (i.useEffect(() => {
        if ((null != h.current && f(!1), null == s)) return;
        let e = URL.createObjectURL(s);
        return (
            c(e),
            () => {
                (c(void 0), URL.revokeObjectURL(e));
            }
        );
    }, [s]),
        i.useLayoutEffect(() => {
            let e = h.current;
            null != e &&
                (e.onload = () => {
                    let t = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    (1 === t
                        ? p({
                              width: A,
                              height: A
                          })
                        : t > 1
                          ? p({
                                width: A * t,
                                height: void 0
                            })
                          : p({
                                width: void 0,
                                height: A / t
                            }),
                        f(!0));
                });
        }, []));
    let m = (0, u.Z)(h),
        g = Math.max(16, (N + A - (null != (t = null == m ? void 0 : m.width) ? t : 0)) / 2);
    return (0, r.jsx)('img', {
        ref: h,
        src: l,
        className: o()(y.icon, { [y.image]: !d }),
        'aria-hidden': !0,
        alt: '',
        style: {
            width: null != (n = _.width) ? n : 'initial',
            height: null != (a = _.height) ? a : A,
            marginLeft: g,
            marginRight: g,
            marginTop: null != _.height ? A - _.height - 33 : -33
        }
    });
}
class R extends i.Component {
    render() {
        var e;
        return this.props.upload.item.platform !== d.ow.WEB ? null : this.props.upload.isImage ? (0, r.jsx)(C, { file: this.props.upload.item.file }) : (0, r.jsx)('div', { className: o()(y.icon, { [y[null != (e = this.props.upload.classification) ? e : '']]: !0 }) });
    }
}
class P extends i.Component {
    componentDidMount() {
        var e;
        ((null == (e = this.props.upload) ? void 0 : e.showLargeMessageDialog) &&
            this.props.upload.item.platform === d.ow.WEB &&
            h.default.track(E.rMx.OPEN_MODAL, {
                type: 'Upload Large Message',
                message_content_length: this.props.upload.item.file.size
            }),
            m.isPlatformEmbedded && g.ZP.focus());
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        var t, n, r, i;
        (null == (t = e.upload) ? void 0 : t.filename) !== (null == (n = this.props.upload) ? void 0 : n.filename) && this.setState({ filename: null != (i = null == (r = this.props.upload) ? void 0 : r.filename) ? i : '' });
    }
    render() {
        let { upload: e, transitionState: t, messageMaxLength: n, disableSpoiler: a } = this.props,
            { hasSpoiler: c } = this.state;
        return (0, r.jsxs)(l.Y0X, {
            'aria-label': b.intl.string(b.t['3AS4UF']),
            size: l.CgR.DYNAMIC,
            transitionState: t,
            className: y.uploadModal,
            parentComponent: 'UploadAttachment',
            children: [
                (0, r.jsxs)('div', {
                    className: y.inner,
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(y.file, { [y.expandable]: e.isImage }),
                            children: [
                                (0, r.jsx)(R, { upload: e }),
                                (0, r.jsxs)('div', {
                                    className: y.description,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: y.filename,
                                            children: e.showLargeMessageDialog ? b.intl.formatToPlainString(b.t.QWQxtL, { maxLength: n }) : e.filename
                                        }),
                                        e.showLargeMessageDialog
                                            ? (0, r.jsx)('div', {
                                                  className: y.subtitle,
                                                  children: b.intl.string(b.t.Plcu09)
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: y.comment,
                            children: [
                                (0, r.jsx)('div', {
                                    className: y.label,
                                    children: (0, r.jsx)('span', { children: b.intl.string(b.t.ILJuBg) })
                                }),
                                (0, r.jsx)(s.Is, {
                                    className: o()(y.channelTextAreaUpload, O.marginTop8),
                                    value: this.state.filename,
                                    onChange: (e) => this.setState({ filename: e }),
                                    onKeyDown: (e) => {
                                        if (e.which === E.yXg.ENTER) return this.handleSubmit();
                                    }
                                }),
                                e.isImage
                                    ? (0, r.jsxs)(i.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: y.label,
                                                  children: (0, r.jsx)('span', { children: b.intl.string(b.t.eOB2eX) })
                                              }),
                                              (0, r.jsx)(s.Is, {
                                                  className: o()(y.channelTextAreaUpload, O.marginTop8),
                                                  placeholder: b.intl.string(b.t.RNH1jo),
                                                  value: this.state.description,
                                                  onChange: (e) => this.setState({ description: e }),
                                                  onKeyDown: (e) => {
                                                      if (e.which === E.yXg.ENTER) return this.handleSubmit();
                                                  }
                                              })
                                          ]
                                      })
                                    : null,
                                !0 !== a &&
                                    (0, r.jsx)(l.XZJ, {
                                        className: O.marginBottom20,
                                        value: c,
                                        onChange: (e, t) => this.setState({ hasSpoiler: t }),
                                        children: (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            children: b.intl.string(b.t['gsI+xM'])
                                        })
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: y.footer,
                    children: (0, r.jsxs)('div', {
                        className: o()(y.hasSpoilers, y.footerRightAlign),
                        children: [
                            (0, r.jsx)(s.zx, {
                                type: 'button',
                                look: s.zx.Looks.LINK,
                                color: s.zx.Colors.PRIMARY,
                                onClick: this.cancel,
                                children: (0, r.jsx)('span', { children: b.intl.string(b.t['ETE/oK']) })
                            }),
                            (0, r.jsx)(s.zx, {
                                type: 'submit',
                                onClick: this.handleSubmit,
                                children: (0, r.jsx)('span', { children: b.intl.string(b.t['TY+auL']) })
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        var t, n, r, i, a, o;
        (super(e),
            v(this, 'cancelAll', () => {
                (c.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose());
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
                    { filename: r, description: i, hasSpoiler: a } = this.state;
                (n({
                    upload: e,
                    name: r,
                    description: i,
                    spoiler: a
                }),
                    t());
            }));
        let s = e.ignoreDraft ? '' : p.Z.getDraft(this.props.channelId, e.draftType);
        this.state = S(I({}, (0, f.eK)(s)), {
            textFocused: !0,
            hasSpoiler: null != (i = null == (t = e.upload) ? void 0 : t.spoiler) && i,
            filename: null != (a = null == (n = e.upload) ? void 0 : n.filename) ? a : '',
            contentWarningProps: null,
            description: null != (o = null == (r = e.upload) ? void 0 : r.description) ? o : ''
        });
    }
}
function w(e) {
    let t = (0, _.Z)();
    return e.upload.item.platform !== d.ow.WEB
        ? null
        : (0, r.jsx)(
              P,
              S(I({}, e), {
                  file: e.upload.item.file,
                  messageMaxLength: t
              })
          );
}
