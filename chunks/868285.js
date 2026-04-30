"use strict";
n.d(t, { F: () => a }), n(321073);
var i = n(64700);
function r(e) {
    let t = {};
    return (
        e &&
            i.Children.map(e, (e) => e)?.forEach((e) => {
                let n = e.key;
                null != n && (t[n] = e);
            }),
        t
    );
}
function s() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    function i(e) {
        return n.hasOwnProperty(e) ? n[e] : t[e];
    }
    let r = {},
        s = [];
    for (let e in t) n.hasOwnProperty(e) ? s.length > 0 && ((r[e] = s), (s = [])) : s.push(e);
    let a = {};
    for (let t in n) {
        if (r.hasOwnProperty(t))
            for (e = 0; e < r[t].length; e++) {
                let n = r[t][e];
                a[r[t][e]] = i(n);
            }
        a[t] = i(t);
    }
    for (e = 0; e < s.length; e++) a[s[e]] = i(s[e]);
    return a;
}
class a extends i.Component {
    static defaultProps = {
        component: "span",
        transitionAppear: !0,
        transitionLeave: !0,
        transitionEnter: !0,
        childFactory: null,
    };
    static getDerivedStateFromProps(e, t) {
        let { children: n, firstRender: i } = t,
            a = r(e.children);
        return { children: i ? a : s(n, a), firstRender: !1 };
    }
    _currentlyTransitioningKeys;
    _keysToEnter;
    _keysToLeave;
    _isMounted;
    _keyChildMapping = {};
    constructor(e) {
        super(e),
            (this.state = { children: r(e.children), firstRender: !0 }),
            (this._currentlyTransitioningKeys = new Set()),
            (this._keysToEnter = []),
            (this._keysToLeave = []),
            (this._isMounted = !1);
    }
    componentDidMount() {
        this._isMounted = !0;
        let { children: e } = this.state;
        if (this.props.transitionAppear) for (let t in e) e[t] && this.performAppear(t);
    }
    componentWillUnmount() {
        (this._isMounted = !1), (this._keyChildMapping = {}), (this.state.children = {});
    }
    componentDidUpdate(e, t) {
        if (
            e.children !== this.props.children ||
            e.transitionAppear !== this.props.transitionAppear ||
            e.transitionLeave !== this.props.transitionLeave
        ) {
            let e = r(this.props.children),
                n = t.children;
            if (
                (this.props.transitionEnter
                    ? this._enqueueTransitions(e, n, this._keysToEnter)
                    : this._keysToEnter.length > 0 && (this._keysToEnter = []),
                this.props.transitionLeave)
            )
                this._enqueueTransitions(n, e, this._keysToLeave);
            else {
                let t = [];
                this._enqueueTransitions(n, e, t);
                let i = s(n, e);
                for (let e = 0, n = t.length; e < n; e++) delete i[t[e]];
                this._isMounted && this.setState({ children: i }),
                    this._keysToLeave.length > 0 && (this._keysToLeave = []);
            }
        }
        if (this._keysToEnter.length > 0) {
            let e = this._keysToEnter;
            (this._keysToEnter = []), e.forEach(this.performEnter, this);
        }
        if (this._keysToLeave.length > 0) {
            let e = this._keysToLeave;
            (this._keysToLeave = []), e.forEach(this.performLeave, this);
        }
    }
    _enqueueTransitions(e, t, n) {
        for (let i in e) {
            let r = t && t.hasOwnProperty(i);
            !e[i] || r || this._currentlyTransitioningKeys.has(i) || n.push(i);
        }
    }
    _perform(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._currentlyTransitioningKeys.add(e);
        let r = () => this._handleDonePerform(e, n, i),
            s = this._keyChildMapping[e];
        null != s && null != s[t] ? s[t](r) : r();
    }
    _handleDonePerform(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this._keyChildMapping[e];
        null != i && null != i[t] && i[t](), this._currentlyTransitioningKeys.delete(e);
        let s = r(this.props.children);
        n
            ? null != s && s.hasOwnProperty(e)
                ? this.performEnter(e)
                : this.setState((t) => {
                      let { children: n } = t,
                          { [e]: i, ...r } = n;
                      return { children: r };
                  })
            : (null != s && s.hasOwnProperty(e)) || this.performLeave(e);
    }
    performAppear(e) {
        this._perform(e, "componentWillAppear", "componentDidAppear");
    }
    performEnter(e) {
        this._perform(e, "componentWillEnter", "componentDidEnter");
    }
    performLeave(e) {
        this._perform(e, "componentWillLeave", "componentDidLeave", !0);
    }
    addChildRef = (e, t) => {
        this._keyChildMapping[e] = t;
    };
    render() {
        let { childFactory: e, component: t } = this.props,
            { children: n } = this.state,
            r = [];
        for (let t in n) {
            let s = n[t];
            null != s &&
                i.isValidElement(s) &&
                r.push(i.cloneElement(null == e ? s : e(s), { ref: (e) => this.addChildRef(t, e), key: t }));
        }
        let s = { ...this.props };
        return Object.keys(a.defaultProps).forEach((e) => delete s[e]), i.createElement(t, s, r);
    }
}
