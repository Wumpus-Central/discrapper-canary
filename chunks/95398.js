r.d(n, {
    a: function () {
        return b;
    }
});
var i,
    a,
    s = r(47120);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(692547),
    f = r(481060),
    _ = r(169525),
    h = r(823379),
    p = r(388032),
    m = r(354431);
function g(e, n, r) {
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
!(function (e) {
    (e.TEXT = 'text'), (e.ATTACHMENT = 'attachment'), (e.EMBED = 'embed');
})(i || (i = {}));
let E = (e) => {
        let { className: n } = e;
        return (0, o.jsx)('div', {
            className: c()(m.spoilerWarning, n),
            children: p.intl.string(p.t['F+x38P'])
        });
    },
    v = (e) => {
        let { className: n, isSingleMosaicItem: r, obscureOnly: i } = e;
        return (0, o.jsx)('div', {
            className: c()(m.explicitContentWarning, n),
            children: i
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(f.ImageWarningIcon, {
                              size: 'lg',
                              color: d.Z.colors.WHITE
                          }),
                          r &&
                              (0, o.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: m.explicitContentWarningText,
                                  children: p.intl.string(p.t.SpxcUV)
                              })
                      ]
                  })
        });
    },
    I = (e) => {
        let { reason: n = _.wk.SPOILER, className: r, isSingleMosaicItem: i = !1 } = e;
        switch (n) {
            case _.wk.SPOILER:
                return (0, o.jsx)(E, { className: r });
            case _.wk.EXPLICIT_CONTENT:
                return (0, o.jsx)(v, {
                    isSingleMosaicItem: i,
                    className: r
                });
            case _.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, o.jsx)(v, {
                    isSingleMosaicItem: i,
                    className: r,
                    obscureOnly: !0
                });
            default:
                return (0, h.vE)(n);
        }
    },
    T = (e) => {
        let { obscureReason: n, isVisible: r, handleToggleObscurity: i, obscurityControlClassName: a } = e;
        return n !== _.wk.EXPLICIT_CONTENT
            ? null
            : (0, o.jsx)('div', {
                  className: c()(m.obscureButtonContainer, a),
                  children: (0, o.jsx)(f.Clickable, {
                      className: c()(m.obscureHoverButton),
                      onClick: i,
                      'aria-label': p.intl.string(p.t.ex5G9v),
                      children: r
                          ? (0, o.jsx)(f.EyeIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                          : (0, o.jsx)(f.EyeSlashIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
              });
    },
    b = l.createContext(!1);
class y extends (a = l.PureComponent) {
    renderWithTooltip(e) {
        return (0, o.jsx)(f.Tooltip, {
            position: 'left',
            text: this.state.visible ? null : this.tooltipText,
            children: (n) => {
                let { onMouseEnter: r, onMouseLeave: i } = n;
                return l.cloneElement(l.Children.only(e), {
                    onMouseEnter: r,
                    onMouseLeave: i
                });
            }
        });
    }
    renderObscuredAttachment() {
        let { children: e, inline: n, className: r, containerStyles: i, obscured: a = !0, reason: s = _.wk.SPOILER, isSingleMosaicItem: l = !1, obscurityControlClassName: u } = this.props,
            { visible: d } = this.state,
            h = (0, o.jsx)(b.Consumer, {
                children: (h) => {
                    let p = h || d || !a;
                    return [_.wk.EXPLICIT_CONTENT, _.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !n
                        ? (0, o.jsxs)('div', {
                              'aria-label': p ? void 0 : this.ariaLabel,
                              'aria-expanded': p,
                              style: i,
                              className: c()(r, m.spoilerContent, m.spoilerContainer, m.attachmentContainer, {
                                  [m.hidden]: !p,
                                  [m.constrainedObscureContent]: l
                              }),
                              role: p ? 'presentation' : 'button',
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p || n
                                      ? null
                                      : (0, o.jsx)(I, {
                                            reason: s,
                                            isSingleMosaicItem: l
                                        }),
                                  (0, o.jsx)('div', {
                                      'aria-hidden': !p,
                                      className: m.spoilerInnerContainer,
                                      children: e(!p)
                                  }),
                                  (0, o.jsx)(T, {
                                      obscureReason: s,
                                      isVisible: d,
                                      handleToggleObscurity: this.handleToggleObscurity,
                                      obscurityControlClassName: u
                                  })
                              ]
                          })
                        : (0, o.jsxs)(f.Clickable, {
                              onClick: p ? void 0 : this.removeObscurity,
                              'aria-label': p ? void 0 : this.ariaLabel,
                              'aria-expanded': p,
                              style: i,
                              className: c()(r, m.spoilerContent, m.spoilerContainer, m.attachmentContainer, {
                                  [m.hidden]: !p,
                                  [m.hiddenSpoiler]: !p
                              }),
                              role: p ? 'presentation' : 'button',
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p || n
                                      ? null
                                      : (0, o.jsx)(I, {
                                            reason: s,
                                            isSingleMosaicItem: l
                                        }),
                                  (0, o.jsx)('div', {
                                      'aria-hidden': !p,
                                      className: m.spoilerInnerContainer,
                                      children: e(!p)
                                  })
                              ]
                          });
                }
            });
        return n ? this.renderWithTooltip(h) : h;
    }
    renderObscuredEmbed() {
        let { children: e, className: n, containerStyles: r, isSingleMosaicItem: i, obscurityControlClassName: a, reason: s = _.wk.SPOILER } = this.props,
            { visible: l } = this.state;
        return (0, o.jsx)(b.Consumer, {
            children: (u) => {
                let d = u || l;
                return [_.wk.EXPLICIT_CONTENT, _.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s)
                    ? (0, o.jsxs)('div', {
                          'aria-label': l ? void 0 : this.ariaLabel,
                          'aria-expanded': d,
                          style: r,
                          className: c()(n, m.spoilerContent, m.spoilerContainer, m.embedContainer, { [m.hidden]: !d }),
                          role: d ? 'presentation' : 'button',
                          tabIndex: d ? -1 : 0,
                          children: [
                              d
                                  ? null
                                  : (0, o.jsx)(I, {
                                        reason: s,
                                        isSingleMosaicItem: i
                                    }),
                              (0, o.jsx)('div', {
                                  'aria-hidden': !d,
                                  className: m.spoilerInnerContainer,
                                  children: e(!d)
                              }),
                              (0, o.jsx)(T, {
                                  obscureReason: s,
                                  isVisible: l,
                                  handleToggleObscurity: this.handleToggleObscurity,
                                  obscurityControlClassName: a
                              })
                          ]
                      })
                    : (0, o.jsxs)(f.Clickable, {
                          'aria-label': this.ariaLabel,
                          'aria-expanded': d,
                          className: c()(n, m.spoilerContent, m.spoilerContainer, m.embedContainer, { [m.hidden]: !d }),
                          onClick: d ? void 0 : this.removeObscurity,
                          style: r,
                          role: d ? 'presentation' : 'button',
                          tabIndex: d ? -1 : 0,
                          children: [
                              d
                                  ? null
                                  : (0, o.jsx)(I, {
                                        reason: s,
                                        className: m.embed
                                    }),
                              (0, o.jsx)('div', {
                                  'aria-hidden': !d,
                                  children: e(!d)
                              })
                          ]
                      });
            }
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: n, className: r } = this.props,
            { visible: i } = this.state,
            a = (0, o.jsx)(b.Consumer, {
                children: (a) => {
                    let s = a || i,
                        u = l.Children.toArray(e(s)),
                        d = l.Children.map(u, (e) => (l.isValidElement(e) && null != n ? n(e, s) : e));
                    return (0, o.jsx)(f.Clickable, {
                        tag: 'span',
                        onClick: s ? void 0 : this.removeObscurity,
                        'aria-label': s ? void 0 : this.ariaLabel,
                        'aria-expanded': s,
                        tabIndex: s ? -1 : 0,
                        role: s ? 'presentation' : 'button',
                        className: c()(r, m.spoilerContent, m.spoilerMarkdownContent, { [m.hidden]: !s }),
                        children: (0, o.jsx)('span', {
                            className: m.obscuredTextContent,
                            children: (0, o.jsx)('span', {
                                'aria-hidden': !s,
                                className: m.obscuredTextContentInner,
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
                return (0, h.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = _.wk.SPOILER } = this.props;
        switch (e) {
            case _.wk.SPOILER:
                return p.intl.string(p.t['F+x38P']);
            case _.wk.EXPLICIT_CONTENT:
                return p.intl.string(p.t.mlJ8VV);
            case _.wk.POTENTIAL_EXPLICIT_CONTENT:
                return p.intl.string(p.t['MRdR7+']);
            default:
                return (0, h.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = _.wk.SPOILER } = this.props;
        switch (e) {
            case _.wk.SPOILER:
                return p.intl.string(p.t['F+x38P']);
            case _.wk.EXPLICIT_CONTENT:
                return p.intl.string(p.t.mlJ8VV);
            case _.wk.POTENTIAL_EXPLICIT_CONTENT:
                return p.intl.string(p.t['MRdR7+']);
            default:
                return (0, h.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { visible: !1 }),
            g(this, 'removeObscurity', (e) => {
                let { visible: n } = this.state;
                if (n) return;
                !n && (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: r } = this.props;
                null != r && r();
            }),
            g(this, 'handleToggleObscurity', (e) => {
                e.stopPropagation(), e.nativeEvent.stopPropagation();
                let { onToggleObscurity: n } = this.props;
                null != n && n(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            g(this, 'obscure', () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
g(y, 'Types', i), g(y, 'Reasons', _.wk), (n.Z = y);
