n.d(t, {
    Z: () => O,
    a: () => b
}),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(692547),
    c = n(481060),
    u = n(169525),
    d = n(823379),
    f = n(388032),
    p = n(415841);
function _(e, t, n) {
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
var h = (function (e) {
    return (e.TEXT = 'text'), (e.ATTACHMENT = 'attachment'), (e.EMBED = 'embed'), e;
})(h || {});
let m = (e) => {
        let { className: t } = e;
        return (0, i.jsx)('div', {
            className: s()(p.spoilerWarning, t),
            children: f.NW.string(f.t['F+x38P'])
        });
    },
    g = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: r } = e;
        return (0, i.jsx)('div', {
            className: s()(p.explicitContentWarning, t),
            children: r
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.fFY, {
                              size: 'lg',
                              color: l.Z.colors.WHITE
                          }),
                          n &&
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: p.explicitContentWarningText,
                                  children: f.NW.string(f.t.SpxcUV)
                              })
                      ]
                  })
        });
    },
    E = (e) => {
        let { reason: t = u.wk.SPOILER, className: n, isSingleMosaicItem: r = !1 } = e;
        switch (t) {
            case u.wk.SPOILER:
                return (0, i.jsx)(m, { className: n });
            case u.wk.EXPLICIT_CONTENT:
                return (0, i.jsx)(g, {
                    isSingleMosaicItem: r,
                    className: n
                });
            case u.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, i.jsx)(g, {
                    isSingleMosaicItem: r,
                    className: n,
                    obscureOnly: !0
                });
            default:
                return (0, d.vE)(t);
        }
    },
    v = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: r, obscurityControlClassName: o } = e;
        return t !== u.wk.EXPLICIT_CONTENT
            ? null
            : (0, i.jsx)('div', {
                  className: s()(p.obscureButtonContainer, o),
                  children: (0, i.jsx)(c.P3F, {
                      className: s()(p.obscureHoverButton),
                      onClick: r,
                      'aria-label': f.NW.string(f.t.ex5G9v),
                      children: n
                          ? (0, i.jsx)(c.tEF, {
                                size: 'md',
                                color: 'currentColor'
                            })
                          : (0, i.jsx)(c.kZF, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
              });
    },
    b = o.createContext(!1);
class y extends (r = o.PureComponent) {
    renderWithTooltip(e) {
        return (0, i.jsx)(c.ua7, {
            position: 'left',
            text: this.state.visible ? null : this.tooltipText,
            children: (t) => {
                let { onMouseEnter: n, onMouseLeave: r } = t;
                return o.cloneElement(o.Children.only(e), {
                    onMouseEnter: n,
                    onMouseLeave: r
                });
            }
        });
    }
    renderObscuredAttachment() {
        let { children: e, inline: t, className: n, containerStyles: r, obscured: o = !0, reason: a = u.wk.SPOILER, isSingleMosaicItem: l = !1, obscurityControlClassName: d } = this.props,
            { visible: f } = this.state,
            _ = (0, i.jsx)(b.Consumer, {
                children: (_) => {
                    let h = _ || f || !o;
                    return [u.wk.EXPLICIT_CONTENT, u.wk.POTENTIAL_EXPLICIT_CONTENT].includes(a) && !t
                        ? (0, i.jsxs)('div', {
                              'aria-label': h ? void 0 : this.ariaLabel,
                              'aria-expanded': h,
                              style: r,
                              className: s()(n, p.spoilerContent, p.spoilerContainer, p.attachmentContainer, {
                                  [p.hidden]: !h,
                                  [p.constrainedObscureContent]: l
                              }),
                              role: h ? 'presentation' : 'button',
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t
                                      ? null
                                      : (0, i.jsx)(E, {
                                            reason: a,
                                            isSingleMosaicItem: l
                                        }),
                                  (0, i.jsx)('div', {
                                      'aria-hidden': !h,
                                      className: p.spoilerInnerContainer,
                                      children: e(!h)
                                  }),
                                  (0, i.jsx)(v, {
                                      obscureReason: a,
                                      isVisible: f,
                                      handleToggleObscurity: this.handleToggleObscurity,
                                      obscurityControlClassName: d
                                  })
                              ]
                          })
                        : (0, i.jsxs)(c.P3F, {
                              onClick: h ? void 0 : this.removeObscurity,
                              'aria-label': h ? void 0 : this.ariaLabel,
                              'aria-expanded': h,
                              style: r,
                              className: s()(n, p.spoilerContent, p.spoilerContainer, p.attachmentContainer, {
                                  [p.hidden]: !h,
                                  [p.hiddenSpoiler]: !h
                              }),
                              role: h ? 'presentation' : 'button',
                              tabIndex: h ? -1 : 0,
                              children: [
                                  h || t
                                      ? null
                                      : (0, i.jsx)(E, {
                                            reason: a,
                                            isSingleMosaicItem: l
                                        }),
                                  (0, i.jsx)('div', {
                                      'aria-hidden': !h,
                                      className: p.spoilerInnerContainer,
                                      children: e(!h)
                                  })
                              ]
                          });
                }
            });
        return t ? this.renderWithTooltip(_) : _;
    }
    renderObscuredEmbed() {
        let { children: e, className: t, containerStyles: n, isSingleMosaicItem: r, obscurityControlClassName: o, reason: a = u.wk.SPOILER } = this.props,
            { visible: l } = this.state;
        return (0, i.jsx)(b.Consumer, {
            children: (d) => {
                let f = d || l;
                return [u.wk.EXPLICIT_CONTENT, u.wk.POTENTIAL_EXPLICIT_CONTENT].includes(a)
                    ? (0, i.jsxs)('div', {
                          'aria-label': l ? void 0 : this.ariaLabel,
                          'aria-expanded': f,
                          style: n,
                          className: s()(t, p.spoilerContent, p.spoilerContainer, p.embedContainer, { [p.hidden]: !f }),
                          role: f ? 'presentation' : 'button',
                          tabIndex: f ? -1 : 0,
                          children: [
                              f
                                  ? null
                                  : (0, i.jsx)(E, {
                                        reason: a,
                                        isSingleMosaicItem: r
                                    }),
                              (0, i.jsx)('div', {
                                  'aria-hidden': !f,
                                  className: p.spoilerInnerContainer,
                                  children: e(!f)
                              }),
                              (0, i.jsx)(v, {
                                  obscureReason: a,
                                  isVisible: l,
                                  handleToggleObscurity: this.handleToggleObscurity,
                                  obscurityControlClassName: o
                              })
                          ]
                      })
                    : (0, i.jsxs)(c.P3F, {
                          'aria-label': this.ariaLabel,
                          'aria-expanded': f,
                          className: s()(t, p.spoilerContent, p.spoilerContainer, p.embedContainer, { [p.hidden]: !f }),
                          onClick: f ? void 0 : this.removeObscurity,
                          style: n,
                          role: f ? 'presentation' : 'button',
                          tabIndex: f ? -1 : 0,
                          children: [
                              f
                                  ? null
                                  : (0, i.jsx)(E, {
                                        reason: a,
                                        className: p.embed
                                    }),
                              (0, i.jsx)('div', {
                                  'aria-hidden': !f,
                                  children: e(!f)
                              })
                          ]
                      });
            }
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: r } = this.state,
            a = (0, i.jsx)(b.Consumer, {
                children: (a) => {
                    let l = a || r,
                        u = o.Children.toArray(e(l)),
                        d = o.Children.map(u, (e) => (o.isValidElement(e) && null != t ? t(e, l) : e));
                    return (0, i.jsx)(c.P3F, {
                        tag: 'span',
                        onClick: l ? void 0 : this.removeObscurity,
                        'aria-label': l ? void 0 : this.ariaLabel,
                        'aria-expanded': l,
                        tabIndex: l ? -1 : 0,
                        role: l ? 'presentation' : 'button',
                        className: s()(n, p.spoilerContent, p.spoilerMarkdownContent, { [p.hidden]: !l }),
                        children: (0, i.jsx)('span', {
                            className: p.obscuredTextContent,
                            children: (0, i.jsx)('span', {
                                'aria-hidden': !l,
                                className: p.obscuredTextContentInner,
                                children: d
                            })
                        })
                    });
                }
            });
        return this.renderWithTooltip(a);
    }
    render() {
        let { type: e = 'text' } = this.props;
        switch (e) {
            case 'text':
                return this.renderObscuredText();
            case 'attachment':
                return this.renderObscuredAttachment();
            case 'embed':
                return this.renderObscuredEmbed();
            default:
                return (0, d.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = u.wk.SPOILER } = this.props;
        switch (e) {
            case u.wk.SPOILER:
                return f.NW.string(f.t['F+x38P']);
            case u.wk.EXPLICIT_CONTENT:
                return f.NW.string(f.t.mlJ8VV);
            case u.wk.POTENTIAL_EXPLICIT_CONTENT:
                return f.NW.string(f.t['MRdR7+']);
            default:
                return (0, d.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = u.wk.SPOILER } = this.props;
        switch (e) {
            case u.wk.SPOILER:
                return f.NW.string(f.t['F+x38P']);
            case u.wk.EXPLICIT_CONTENT:
                return f.NW.string(f.t.mlJ8VV);
            case u.wk.POTENTIAL_EXPLICIT_CONTENT:
                return f.NW.string(f.t['MRdR7+']);
            default:
                return (0, d.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', { visible: !1 }),
            _(this, 'removeObscurity', (e) => {
                let { visible: t } = this.state;
                if (t) return;
                t || (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: n } = this.props;
                null != n && n();
            }),
            _(this, 'handleToggleObscurity', (e) => {
                e.stopPropagation(), e.nativeEvent.stopPropagation();
                let { onToggleObscurity: t } = this.props;
                null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            _(this, 'obscure', () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
_(y, 'Types', h), _(y, 'Reasons', u.wk);
let O = y;
