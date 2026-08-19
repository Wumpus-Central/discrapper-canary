"use strict";
n.d(t, { A: () => b });
var r = n(1139),
    i = n(299146),
    a = n(47312);
function o(e, t) {
    return e
        .replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
        .replace(/\s+/g, " ")
        .replace(/^\s*|\s*$/g, "");
}
n(655972);
var s = n(582128),
    u = n(333007),
    c = n(109610),
    l = function (e) {
        return e.scrollTop;
    },
    d = "unmounted",
    f = "exited",
    h = "entering",
    p = "entered",
    m = "exiting",
    g = (function (e) {
        function t(t, n) {
            var r,
                i = e.call(this, t, n) || this,
                a = n && !n.isMounting ? t.enter : t.appear;
            return (
                (i.appearStatus = null),
                t.in
                    ? a
                        ? ((r = f), (i.appearStatus = h))
                        : (r = p)
                    : (r = t.unmountOnExit || t.mountOnEnter ? d : f),
                (i.state = { status: r }),
                (i.nextCallback = null),
                i
            );
        }
        (0, a.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === d ? { status: f } : null;
            });
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== h && n !== p && (t = h) : (n === h || n === p) && (t = m);
                }
                this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
                var e,
                    t,
                    n,
                    r = this.props.timeout;
                return (
                    (e = t = n = r),
                    null != r &&
                        "number" != typeof r &&
                        ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                    { exit: e, enter: t, appear: n }
                );
            }),
            (n.updateStatus = function (e, t) {
                if ((void 0 === e && (e = !1), null !== t))
                    if ((this.cancelNextCallback(), t === h)) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var n = this.props.nodeRef ? this.props.nodeRef.current : u.findDOMNode(this);
                            n && l(n);
                        }
                        this.performEnter(e);
                    } else this.performExit();
                else this.props.unmountOnExit && this.state.status === f && this.setState({ status: d });
            }),
            (n.performEnter = function (e) {
                var t = this,
                    n = this.props.enter,
                    r = this.context ? this.context.isMounting : e,
                    i = this.props.nodeRef ? [r] : [u.findDOMNode(this), r],
                    a = i[0],
                    o = i[1],
                    s = this.getTimeouts(),
                    c = r ? s.appear : s.enter;
                (e || n) && 1
                    ? (this.props.onEnter(a, o),
                      this.safeSetState({ status: h }, function () {
                          t.props.onEntering(a, o),
                              t.onTransitionEnd(c, function () {
                                  t.safeSetState({ status: p }, function () {
                                      t.props.onEntered(a, o);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: p }, function () {
                          t.props.onEntered(a);
                      });
            }),
            (n.performExit = function () {
                var e = this,
                    t = this.props.exit,
                    n = this.getTimeouts(),
                    r = this.props.nodeRef ? void 0 : u.findDOMNode(this);
                t
                    ? (this.props.onExit(r),
                      this.safeSetState({ status: m }, function () {
                          e.props.onExiting(r),
                              e.onTransitionEnd(n.exit, function () {
                                  e.safeSetState({ status: f }, function () {
                                      e.props.onExited(r);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: f }, function () {
                          e.props.onExited(r);
                      });
            }),
            (n.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
                (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
                var t = this,
                    n = !0;
                return (
                    (this.nextCallback = function (r) {
                        n && ((n = !1), (t.nextCallback = null), e(r));
                    }),
                    (this.nextCallback.cancel = function () {
                        n = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : u.findDOMNode(this),
                    r = null == e && !this.props.addEndListener;
                if (!n || r) return void setTimeout(this.nextCallback, 0);
                if (this.props.addEndListener) {
                    var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                        a = i[0],
                        o = i[1];
                    this.props.addEndListener(a, o);
                }
                null != e && setTimeout(this.nextCallback, e);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === d) return null;
                var t = this.props,
                    n = t.children,
                    r =
                        (t.in,
                        t.mountOnEnter,
                        t.unmountOnExit,
                        t.appear,
                        t.enter,
                        t.exit,
                        t.timeout,
                        t.addEndListener,
                        t.onEnter,
                        t.onEntering,
                        t.onEntered,
                        t.onExit,
                        t.onExiting,
                        t.onExited,
                        t.nodeRef,
                        (0, i.A)(t, [
                            "children",
                            "in",
                            "mountOnEnter",
                            "unmountOnExit",
                            "appear",
                            "enter",
                            "exit",
                            "timeout",
                            "addEndListener",
                            "onEnter",
                            "onEntering",
                            "onEntered",
                            "onExit",
                            "onExiting",
                            "onExited",
                            "nodeRef",
                        ]));
                return s.createElement(
                    c.A.Provider,
                    { value: null },
                    "function" == typeof n ? n(e, r) : s.cloneElement(s.Children.only(n), r),
                );
            }),
            t
        );
    })(s.Component);
function _() {}
(g.contextType = c.A),
    (g.propTypes = {}),
    (g.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: _,
        onEntering: _,
        onEntered: _,
        onExit: _,
        onExiting: _,
        onExited: _,
    }),
    (g.UNMOUNTED = d),
    (g.EXITED = f),
    (g.ENTERING = h),
    (g.ENTERED = p),
    (g.EXITING = m);
var y = function (e, t) {
        return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
                e.classList
                    ? e.classList.remove(t)
                    : "string" == typeof e.className
                      ? (e.className = o(e.className, t))
                      : e.setAttribute("class", o((e.className && e.className.baseVal) || "", t));
            })
        );
    },
    v = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                (t.onEnter = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1];
                    t.removeClasses(i, "exit"),
                        t.addClass(i, a ? "appear" : "enter", "base"),
                        t.props.onEnter && t.props.onEnter(e, n);
                }),
                (t.onEntering = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1];
                    t.addClass(i, a ? "appear" : "enter", "active"), t.props.onEntering && t.props.onEntering(e, n);
                }),
                (t.onEntered = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1] ? "appear" : "enter";
                    t.removeClasses(i, a), t.addClass(i, a, "done"), t.props.onEntered && t.props.onEntered(e, n);
                }),
                (t.onExit = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "appear"),
                        t.removeClasses(n, "enter"),
                        t.addClass(n, "exit", "base"),
                        t.props.onExit && t.props.onExit(e);
                }),
                (t.onExiting = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e);
                }),
                (t.onExited = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e);
                }),
                (t.resolveArguments = function (e, n) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                }),
                (t.getClassNames = function (e) {
                    var n = t.props.classNames,
                        r = "string" == typeof n,
                        i = r && n ? n + "-" : "",
                        a = r ? "" + i + e : n[e],
                        o = r ? a + "-active" : n[e + "Active"],
                        s = r ? a + "-done" : n[e + "Done"];
                    return { baseClassName: a, activeClassName: o, doneClassName: s };
                }),
                t
            );
        }
        (0, a.A)(t, e);
        var n = t.prototype;
        return (
            (n.addClass = function (e, t, n) {
                var r,
                    i = this.getClassNames(t)[n + "ClassName"],
                    a = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === n && a && (i += " " + a),
                    "active" === n && e && l(e),
                    i &&
                        ((this.appliedClasses[t][n] = i),
                        (r = i),
                        e &&
                            r &&
                            r.split(" ").forEach(function (t) {
                                e.classList
                                    ? e.classList.add(t)
                                    : (e.classList
                                          ? t && e.classList.contains(t)
                                          : -1 !==
                                            (" " + (e.className.baseVal || e.className) + " ").indexOf(
                                                " " + t + " ",
                                            )) ||
                                      ("string" == typeof e.className
                                          ? (e.className = e.className + " " + t)
                                          : e.setAttribute(
                                                "class",
                                                ((e.className && e.className.baseVal) || "") + " " + t,
                                            ));
                            }));
            }),
            (n.removeClasses = function (e, t) {
                var n = this.appliedClasses[t],
                    r = n.base,
                    i = n.active,
                    a = n.done;
                (this.appliedClasses[t] = {}), r && y(e, r), i && y(e, i), a && y(e, a);
            }),
            (n.render = function () {
                var e = this.props,
                    t = (e.classNames, (0, i.A)(e, ["classNames"]));
                return s.createElement(
                    g,
                    (0, r.A)({}, t, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited,
                    }),
                );
            }),
            t
        );
    })(s.Component);
(v.defaultProps = { classNames: "" }), (v.propTypes = {});
let b = v;
