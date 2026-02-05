"use strict";
n.d(t, { D: () => l });
var r = n(627968),
    i = n(64700),
    a = n(531142),
    s = n(426333),
    o = n(650583);
class l extends i.Component {
    ref;
    static contextType = a.g;
    static defaultProps = { tag: "div", role: "button", tabIndex: 0 };
    handleKeyPress = (e) => {
        let { onClick: t, href: n, onKeyPress: r, ignoreKeyPress: i } = this.props;
        e.repeat ||
            (i ||
                null == t ||
                null == this.ref ||
                (e.key !== o.dh.SPACE && e.key !== o.dh.ENTER) ||
                (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()),
            null != r && r(e));
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
            onClick: r,
            role: a,
            tabIndex: s,
            ignoreKeyPress: o,
            ...l
        } = this.props;
        return i.createElement(e, { ref: this.setRef, ...l });
    }
    renderInner() {
        let {
            tag: e,
            onClick: t,
            className: n,
            children: r,
            focusProps: a,
            innerRef: s,
            ignoreKeyPress: o,
            ...l
        } = this.props;
        return null == t
            ? i.createElement(e, { ref: this.setRef, className: n, ...l }, r)
            : i.createElement(
                  e,
                  { onClick: t, ref: this.setRef, onKeyPress: this.handleKeyPress, className: n, ...l },
                  r,
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, r.jsx)(s.vN, { ...this.props.focusProps, children: this.renderInner() });
    }
}
