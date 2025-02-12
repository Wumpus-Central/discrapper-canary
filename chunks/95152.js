n.d(t, { default: () => C }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(166459),
    u = n(990169),
    c = n(476326),
    d = n(752305),
    f = n(849522),
    _ = n(703558),
    p = n(626135),
    h = n(358085),
    m = n(998502),
    g = n(981631),
    E = n(388032),
    v = n(255969),
    y = n(483938);
function I(e, t, n) {
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
let T = 104,
    b = 16;
function S(e) {
    var t, n, a;
    let { file: o } = e,
        [l, c] = r.useState(),
        [d, f] = r.useState(!1),
        [_, p] = r.useState({}),
        h = r.useRef(null);
    r.useEffect(() => {
        if ((null != h.current && f(!1), null == o)) return;
        let e = URL.createObjectURL(o);
        return (
            c(e),
            () => {
                c(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [o]),
        r.useLayoutEffect(() => {
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
    let m = (0, u.Z)(h),
        g = Math.max(16, (b + T - (null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : 0)) / 2);
    return (0, i.jsx)('img', {
        ref: h,
        src: l,
        className: s()(v.icon, { [v.image]: !d }),
        'aria-hidden': !0,
        alt: '',
        style: {
            width: null !== (n = _.width) && void 0 !== n ? n : 'initial',
            height: null !== (a = _.height) && void 0 !== a ? a : T,
            marginLeft: g,
            marginRight: g,
            marginTop: null != _.height ? T - _.height - 33 : -33
        }
    });
}
class A extends r.Component {
    render() {
        var e;
        return this.props.upload.item.platform !== c.ow.WEB ? null : this.props.upload.isImage ? (0, i.jsx)(S, { file: this.props.upload.item.file }) : (0, i.jsx)('div', { className: s()(v.icon, { [v[null !== (e = this.props.upload.classification) && void 0 !== e ? e : '']]: !0 }) });
    }
}
class N extends r.Component {
    componentDidMount() {
        var e;
        (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) &&
            this.props.upload.item.platform === c.ow.WEB &&
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
        var t, n, i, r;
        (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) && this.setState({ filename: null !== (r = null === (i = this.props.upload) || void 0 === i ? void 0 : i.filename) && void 0 !== r ? r : '' });
    }
    render() {
        let { upload: e, transitionState: t, messageMaxLength: n, disableSpoiler: a } = this.props,
            { hasSpoiler: l } = this.state;
        return (0, i.jsxs)(o.Y0X, {
            'aria-label': E.intl.string(E.t['3AS4UF']),
            size: o.CgR.DYNAMIC,
            transitionState: t,
            className: s()(v.uploadModal),
            children: [
                (0, i.jsxs)('div', {
                    className: v.inner,
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(v.file, { [v.expandable]: e.isImage }),
                            children: [
                                (0, i.jsx)(A, { upload: e }),
                                (0, i.jsxs)('div', {
                                    className: v.description,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: v.filename,
                                            children: e.showLargeMessageDialog ? E.intl.formatToPlainString(E.t.QWQxtL, { maxLength: n }) : e.filename
                                        }),
                                        e.showLargeMessageDialog
                                            ? (0, i.jsx)('div', {
                                                  className: v.subtitle,
                                                  children: E.intl.string(E.t.Plcu09)
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: v.comment,
                            children: (0, i.jsxs)(r.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: v.label,
                                        children: (0, i.jsx)('span', { children: E.intl.string(E.t.ILJuBg) })
                                    }),
                                    (0, i.jsx)(o.oil, {
                                        className: s()(v.channelTextAreaUpload, y.marginTop8),
                                        value: this.state.filename,
                                        onChange: (e) => this.setState({ filename: e }),
                                        onKeyDown: (e) => {
                                            if (e.which === g.yXg.ENTER) return this.handleSubmit();
                                        }
                                    }),
                                    e.isImage
                                        ? (0, i.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', {
                                                      className: v.label,
                                                      children: (0, i.jsx)('span', { children: E.intl.string(E.t.eOB2eX) })
                                                  }),
                                                  (0, i.jsx)(o.oil, {
                                                      className: s()(v.channelTextAreaUpload, y.marginTop8),
                                                      placeholder: E.intl.string(E.t.RNH1jo),
                                                      value: this.state.description,
                                                      onChange: (e) => this.setState({ description: e }),
                                                      onKeyDown: (e) => {
                                                          if (e.which === g.yXg.ENTER) return this.handleSubmit();
                                                      }
                                                  })
                                              ]
                                          })
                                        : null,
                                    !0 !== a &&
                                        (0, i.jsx)(o.XZJ, {
                                            className: y.marginBottom20,
                                            value: l,
                                            onChange: (e, t) => this.setState({ hasSpoiler: t }),
                                            children: (0, i.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: E.intl.string(E.t['gsI+xM'])
                                            })
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: v.footer,
                    children: (0, i.jsxs)('div', {
                        className: s()(v.hasSpoilers, v.footerRightAlign),
                        children: [
                            (0, i.jsx)(o.zxk, {
                                type: 'button',
                                look: o.zxk.Looks.LINK,
                                color: o.zxk.Colors.PRIMARY,
                                onClick: this.cancel,
                                children: (0, i.jsx)('span', { children: E.intl.string(E.t['ETE/oK']) })
                            }),
                            (0, i.jsx)(o.zxk, {
                                type: 'submit',
                                onClick: this.handleSubmit,
                                children: (0, i.jsx)('span', { children: E.intl.string(E.t['TY+auL']) })
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        var t, n, i, r, a, s;
        super(e),
            I(this, 'cancelAll', () => {
                l.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
            }),
            I(this, 'cancel', () => {
                this.props.onClose();
            }),
            I(this, 'handleTextChange', (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n
                });
            }),
            I(this, 'handleSubmit', () => {
                let { upload: e, onClose: t, onSubmit: n } = this.props,
                    { filename: i, description: r, hasSpoiler: a } = this.state;
                n({
                    upload: e,
                    name: i,
                    description: r,
                    spoiler: a
                }),
                    t();
            });
        let o = e.ignoreDraft ? '' : _.Z.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, d.eK)(o),
            textFocused: !0,
            hasSpoiler: null !== (r = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== r && r,
            filename: null !== (a = null === (n = e.upload) || void 0 === n ? void 0 : n.filename) && void 0 !== a ? a : '',
            contentWarningProps: null,
            description: null !== (s = null === (i = e.upload) || void 0 === i ? void 0 : i.description) && void 0 !== s ? s : ''
        };
    }
}
function C(e) {
    let t = (0, f.Z)();
    return e.upload.item.platform !== c.ow.WEB
        ? null
        : (0, i.jsx)(N, {
              ...e,
              file: e.upload.item.file,
              messageMaxLength: t
          });
}
