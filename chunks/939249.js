n.d(t, { D: () => o });
var i = n(477900),
    r = n(582128),
    a = n(531142),
    s = n(259678),
    l = n(650583);
class o extends r.Component {
    ref;
    static contextType = a.g;
    static defaultProps = { tag: "div", role: "button", tabIndex: 0 };
    handleKeyPress = (e) => {
        let { onClick: t, href: n, onKeyPress: i, ignoreKeyPress: r } = this.props;
        e.repeat ||
            (r ||
                null == t ||
                null == this.ref ||
                (e.key !== l.dh.SPACE && e.key !== l.dh.ENTER) ||
                (null == n && e.preventDefault(),
                this.ref.dispatchEvent(
                    new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0,
                        shiftKey: e.shiftKey,
                        ctrlKey: e.ctrlKey,
                        metaKey: e.metaKey,
                        altKey: e.altKey,
                        view: this.ref.ownerDocument?.defaultView ?? window,
                    }),
                )),
            null != i && i(e));
    };
    setRef = (e) => {
        this.ref = e;
        let { innerRef: t } = this.props;
        null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e));
    };
    renderNonInteractive() {
        let {
            tag: e,
            focusProps: t,
            innerRef: n,
            onClick: i,
            role: a,
            tabIndex: s,
            ignoreKeyPress: l,
            ...o
        } = this.props;
        return r.createElement(e, { ref: this.setRef, ...o });
    }
    renderInner() {
        let {
            tag: e,
            onClick: t,
            className: n,
            children: i,
            focusProps: a,
            innerRef: s,
            ignoreKeyPress: l,
            ...o
        } = this.props;
        return null == t
            ? r.createElement(e, { ref: this.setRef, className: n, ...o }, i)
            : r.createElement(
                  e,
                  { onClick: t, ref: this.setRef, onKeyPress: this.handleKeyPress, className: n, ...o },
                  i,
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, i.jsx)(s.vN, { ...this.props.focusProps, children: this.renderInner() });
    }
}
