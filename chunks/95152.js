r.r(n),
    r.d(n, {
        default: function () {
            return P;
        }
    });
var i = r(47120);
var a = r(315314);
var o = r(610138);
var s = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(200651),
    d = r(192379),
    f = r(120356),
    p = r.n(f),
    h = r(481060),
    _ = r(166459),
    m = r(990169),
    g = r(476326),
    E = r(752305),
    v = r(849522),
    y = r(703558),
    b = r(626135),
    I = r(358085),
    T = r(998502),
    S = r(981631),
    A = r(388032),
    C = r(55720),
    N = r(232186);
function R(e, n, r) {
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
let O = 104,
    D = 16;
function L(e) {
    var n, r, i;
    let { file: a } = e,
        [o, s] = d.useState(),
        [l, u] = d.useState(!1),
        [f, h] = d.useState({}),
        _ = d.useRef(null);
    d.useEffect(() => {
        if ((null != _.current && u(!1), null == a)) return;
        let e = URL.createObjectURL(a);
        return (
            s(e),
            () => {
                s(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [a]),
        d.useLayoutEffect(() => {
            let e = _.current;
            null != e &&
                (e.onload = () => {
                    let n = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    1 === n
                        ? h({
                              width: O,
                              height: O
                          })
                        : n > 1
                          ? h({
                                width: O * n,
                                height: void 0
                            })
                          : h({
                                width: void 0,
                                height: O / n
                            }),
                        u(!0);
                });
        }, []);
    let g = (0, m.Z)(_),
        E = Math.max(16, (D + O - (null !== (n = null == g ? void 0 : g.width) && void 0 !== n ? n : 0)) / 2);
    return (0, c.jsx)('img', {
        ref: _,
        src: o,
        className: p()(C.icon, { [C.image]: !l }),
        'aria-hidden': !0,
        alt: '',
        style: {
            width: null !== (r = f.width) && void 0 !== r ? r : 'initial',
            height: null !== (i = f.height) && void 0 !== i ? i : O,
            marginLeft: E,
            marginRight: E,
            marginTop: null != f.height ? O - f.height - 33 : -33
        }
    });
}
class x extends d.Component {
    render() {
        var e;
        if (this.props.upload.item.platform !== g.ow.WEB) return null;
        if (this.props.upload.isImage) return (0, c.jsx)(L, { file: this.props.upload.item.file });
        return (0, c.jsx)('div', { className: p()(C.icon, { [C[null !== (e = this.props.upload.classification) && void 0 !== e ? e : '']]: !0 }) });
    }
}
class w extends d.Component {
    componentDidMount() {
        var e;
        (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) &&
            this.props.upload.item.platform === g.ow.WEB &&
            b.default.track(S.rMx.OPEN_MODAL, {
                type: 'Upload Large Message',
                message_content_length: this.props.upload.item.file.size
            }),
            I.isPlatformEmbedded && T.ZP.focus();
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        var n, r, i, a;
        (null === (n = e.upload) || void 0 === n ? void 0 : n.filename) !== (null === (r = this.props.upload) || void 0 === r ? void 0 : r.filename) && this.setState({ filename: null !== (a = null === (i = this.props.upload) || void 0 === i ? void 0 : i.filename) && void 0 !== a ? a : '' });
    }
    render() {
        let { upload: e, transitionState: n, messageMaxLength: r, disableSpoiler: i } = this.props,
            { hasSpoiler: a } = this.state;
        return (0, c.jsxs)(h.ModalRoot, {
            'aria-label': A.intl.string(A.t['3AS4UF']),
            size: h.ModalSize.DYNAMIC,
            transitionState: n,
            className: p()(C.uploadModal),
            children: [
                (0, c.jsxs)('div', {
                    className: C.inner,
                    children: [
                        (0, c.jsxs)('div', {
                            className: p()(C.file, { [C.expandable]: e.isImage }),
                            children: [
                                (0, c.jsx)(x, { upload: e }),
                                (0, c.jsxs)('div', {
                                    className: C.description,
                                    children: [
                                        (0, c.jsx)('div', {
                                            className: C.filename,
                                            children: e.showLargeMessageDialog ? A.intl.formatToPlainString(A.t.QWQxtL, { maxLength: r }) : e.filename
                                        }),
                                        e.showLargeMessageDialog
                                            ? (0, c.jsx)('div', {
                                                  className: C.subtitle,
                                                  children: A.intl.string(A.t.Plcu09)
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, c.jsx)('div', {
                            className: C.comment,
                            children: (0, c.jsxs)(d.Fragment, {
                                children: [
                                    (0, c.jsx)('div', {
                                        className: C.label,
                                        children: (0, c.jsx)('span', { children: A.intl.string(A.t.ILJuBg) })
                                    }),
                                    (0, c.jsx)(h.TextInput, {
                                        className: p()(C.channelTextAreaUpload, N.marginTop8),
                                        value: this.state.filename,
                                        onChange: (e) => this.setState({ filename: e }),
                                        onKeyDown: (e) => {
                                            if (e.which === S.yXg.ENTER) return this.handleSubmit();
                                        }
                                    }),
                                    e.isImage
                                        ? (0, c.jsxs)(d.Fragment, {
                                              children: [
                                                  (0, c.jsx)('div', {
                                                      className: C.label,
                                                      children: (0, c.jsx)('span', { children: A.intl.string(A.t.eOB2eX) })
                                                  }),
                                                  (0, c.jsx)(h.TextInput, {
                                                      className: p()(C.channelTextAreaUpload, N.marginTop8),
                                                      placeholder: A.intl.string(A.t.RNH1jo),
                                                      value: this.state.description,
                                                      onChange: (e) => this.setState({ description: e }),
                                                      onKeyDown: (e) => {
                                                          if (e.which === S.yXg.ENTER) return this.handleSubmit();
                                                      }
                                                  })
                                              ]
                                          })
                                        : null,
                                    !0 !== i &&
                                        (0, c.jsx)(h.Checkbox, {
                                            className: N.marginBottom20,
                                            value: a,
                                            onChange: (e, n) => this.setState({ hasSpoiler: n }),
                                            children: (0, c.jsx)(h.Text, {
                                                variant: 'text-sm/normal',
                                                children: A.intl.string(A.t['gsI+xM'])
                                            })
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, c.jsx)('div', {
                    className: C.footer,
                    children: (0, c.jsxs)('div', {
                        className: p()(C.hasSpoilers, C.footerRightAlign),
                        children: [
                            (0, c.jsx)(h.Button, {
                                type: 'button',
                                look: h.Button.Looks.LINK,
                                color: h.Button.Colors.PRIMARY,
                                onClick: this.cancel,
                                children: (0, c.jsx)('span', { children: A.intl.string(A.t['ETE/oK']) })
                            }),
                            (0, c.jsx)(h.Button, {
                                type: 'submit',
                                onClick: this.handleSubmit,
                                children: (0, c.jsx)('span', { children: A.intl.string(A.t['TY+auL']) })
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        var n, r, i, a, o, s;
        super(e),
            R(this, 'cancelAll', () => {
                _.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
            }),
            R(this, 'cancel', () => {
                this.props.onClose();
            }),
            R(this, 'handleTextChange', (e, n, r) => {
                this.setState({
                    textValue: n,
                    richValue: r
                });
            }),
            R(this, 'handleSubmit', () => {
                let { upload: e, onClose: n, onSubmit: r } = this.props,
                    { filename: i, description: a, hasSpoiler: o } = this.state;
                r({
                    upload: e,
                    name: i,
                    description: a,
                    spoiler: o
                }),
                    n();
            });
        let l = e.ignoreDraft ? '' : y.Z.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, E.eK)(l),
            textFocused: !0,
            hasSpoiler: null !== (a = null === (n = e.upload) || void 0 === n ? void 0 : n.spoiler) && void 0 !== a && a,
            filename: null !== (o = null === (r = e.upload) || void 0 === r ? void 0 : r.filename) && void 0 !== o ? o : '',
            contentWarningProps: null,
            description: null !== (s = null === (i = e.upload) || void 0 === i ? void 0 : i.description) && void 0 !== s ? s : ''
        };
    }
}
function P(e) {
    let n = (0, v.Z)();
    return e.upload.item.platform !== g.ow.WEB
        ? null
        : (0, c.jsx)(w, {
              ...e,
              file: e.upload.item.file,
              messageMaxLength: n
          });
}
