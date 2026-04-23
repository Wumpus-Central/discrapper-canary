"use strict";
r.d(t, { d: () => O });
var a = r(1139),
    n = r(106526),
    o = r(26412),
    s = r(658),
    i = r(552932),
    l = r(865977),
    c = r(761847),
    u = r(416886),
    f = r(628006),
    b = r(64700),
    h = r(223108),
    d = r.n(h),
    p = r(380883),
    m = r(724374),
    g = r(190873),
    y = ["data", "keyPath", "postprocessValue", "hideRoot", "theme", "invertTheme"];
function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? v(Object(r), !0).forEach(function (t) {
                  (0, u.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var M = function (e) {
    return e;
};
function A(e) {
    var t,
        r,
        a,
        n =
            ((t = e.theme),
            (a = Object.keys(
                (r = {
                    getArrowStyle: "arrow",
                    getListStyle: "nestedNodeChildren",
                    getItemStringStyle: "nestedNodeItemString",
                    getLabelStyle: "label",
                    getValueStyle: "valueText",
                }),
            ).filter(function (t) {
                return e[t];
            })).length > 0 &&
                ((t = "string" == typeof t ? { extend: t } : w({}, t)),
                a.forEach(function (a) {
                    console.error('Styling method "'.concat(a, '" is deprecated, use "theme" property instead')),
                        (t[r[a]] = function (t) {
                            for (var r = t.style, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
                                o[s - 1] = arguments[s];
                            return { style: w(w({}, r), e[a].apply(e, o)) };
                        });
                })),
            t);
    return e.invertTheme && (n = (0, g.WJ)(n)), { styling: (0, m.A)(n) };
}
var O = (function (e) {
    (0, i.A)(u, e);
    var t,
        r =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r = (0, c.A)(u);
                return (
                    (e = t ? Reflect.construct(r, arguments, (0, c.A)(this).constructor) : r.apply(this, arguments)),
                    (0, l.A)(this, e)
                );
            });
    function u(e) {
        var t;
        return (0, o.A)(this, u), ((t = r.call(this, e)).state = A(e)), t;
    }
    return (
        (0, s.A)(u, [
            {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    var t = this;
                    ["theme", "invertTheme"].find(function (r) {
                        return e[r] !== t.props[r];
                    }) && this.setState(A(e));
                },
            },
            {
                key: "shouldComponentUpdate",
                value: function (e) {
                    var t = this;
                    return !!Object.keys(e).find(function (r) {
                        return "keyPath" === r ? e[r].join("/") !== t.props[r].join("/") : e[r] !== t.props[r];
                    });
                },
            },
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.data,
                        r = e.keyPath,
                        o = e.postprocessValue,
                        s = e.hideRoot,
                        i = (e.theme, e.invertTheme, (0, n.A)(e, y)),
                        l = this.state.styling;
                    return b.createElement(
                        "ul",
                        l("tree"),
                        b.createElement(
                            p.A,
                            (0, a.A)({}, w({ postprocessValue: o, hideRoot: s, styling: l }, i), {
                                keyPath: s ? [] : r,
                                value: o(t),
                            }),
                        ),
                    );
                },
            },
        ]),
        u
    );
})(b.Component);
(0, u.A)(O, "propTypes", {
    data: d().any,
    hideRoot: d().bool,
    theme: d().oneOfType([d().object, d().string]),
    invertTheme: d().bool,
    keyPath: d().arrayOf(d().oneOfType([d().string, d().number])),
    postprocessValue: d().func,
    sortObjectKeys: d().oneOfType([d().func, d().bool]),
}),
    (0, u.A)(O, "defaultProps", {
        shouldExpandNode: function (e, t, r) {
            return 0 === r;
        },
        hideRoot: !1,
        keyPath: ["root"],
        getItemString: function (e, t, r, a) {
            return b.createElement("span", null, r, " ", a);
        },
        labelRenderer: function (e) {
            var t = (0, f.A)(e, 1)[0];
            return b.createElement("span", null, t, ":");
        },
        valueRenderer: M,
        postprocessValue: M,
        isCustomNode: function () {
            return !1;
        },
        collectionLimit: 50,
        invertTheme: !0,
    });
